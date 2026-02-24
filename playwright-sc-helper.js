/**
 * Playwright helper for SmartClient (SC) interaction.
 * Uses isc.AutoTest API to interact with SC elements.
 */

class SCHelper {
    constructor(page) {
        this.page = page;
    }

    /**
     * getSC: Retrieve an element based on a SmartClient locator.
     * Implements similar logic to the Cypress getSC custom command.
     */
    async getSC(locator, options = {}) {
        const timeout = options.timeout || 60000;

        // Use page.evaluate to run inside the browser context
        const elementHandle = await this.page.evaluateHandle(async ({ locator, timeout }) => {
            return new Promise((resolve) => {
                if (!window.isc || !window.isc.AutoTest) {
                    resolve(null);
                    return;
                }

                const callback = (element, done) => {
                    resolve(element);
                };

                window.isc.AutoTest.waitForElement(locator, callback, { timeout });
            });
        }, { locator, timeout });

        if (!elementHandle || !(await elementHandle.asElement())) {
            // If it's not an element (could be null), we might want to throw or return null
            // For closer parity with Cypress, we'll return the handle and let Playwright actions fail if needed
        }

        return elementHandle;
    }

    /**
     * waitForSCDone: Wait for SC system to be done with redraws and async tasks.
     */
    async waitForSCDone(options = {}) {
        const includeRedraws = options.includeRedraws || false;
        await this.page.evaluate(async (includeRedraws) => {
            return new Promise((resolve) => {
                if (!window.isc || !window.isc.AutoTest) {
                    resolve();
                    return;
                }
                window.isc.AutoTest.waitForSystemDone(resolve, includeRedraws);
            });
        }, includeRedraws);
    }

    /**
     * getColumnsAndTypes: Wrapper for getColumnsWithType logic from commands.js
     */
    async getColumnsAndTypes(id) {
        return await this.page.evaluate(async (id) => {
            function findNearestParentWithAttributeValue(element, attributeName, attributeValue) {
                var parent = element.parentElement;
                while (parent !== null) {
                    if (parent.getAttribute(attributeName) && parent.getAttribute(attributeName).includes(attributeValue)) {
                        return parent;
                    }
                    parent = parent.parentElement;
                }
                return null;
            }

            const element = window.isc.AutoTest.getElement(id);
            if (!element) return null;

            const tableID = findNearestParentWithAttributeValue(element, 'eventproxy', 'isc_Toolbar');
            if (!tableID) return null;

            const nonEmptyDivs_ = tableID.querySelectorAll('table > tbody > tr > td > div:not(:empty)');
            const divArray = Array.from(nonEmptyDivs_).filter(div => div.textContent.trim() !== '');

            divArray.sort((a, b) => a.getBoundingClientRect().left - b.getBoundingClientRect().left);

            const formDiv = tableID.parentNode.querySelectorAll('div[eventproxy*="filterEditor"]')[0];
            const types = Array.from(formDiv.querySelectorAll('input[type="text"], span.comboBoxItemPicker, span[aria-label="Show Date Chooser"]'));

            return {
                columns: divArray.map(d => ({ textContent: d.textContent })),
                typesCount: types.length
            };
        }, id);
    }
}

module.exports = { SCHelper };
