if (!Cypress.env('onlyRunReadOnlyTests')) {
    describe('10. Settings', () => {
        function cleanURL(url) {
            if (url.endsWith('/')) {
                return url;
            } else {
                return url + '/';
            }
        }
        Cypress.config('defaultCommandTimeout', 180000);
        it('Force Publish', () => {
            cy.GQLogin()
            cy.request({
                url: cleanURL(Cypress.env('pre-qaURL')) + 'publish.jsp?forcePublish=true',
                timeout: 180000
            }).its('body', { timeout: 180000 }).should('include', 'Publish Configuration Completed successfully, you may close the window.')
        })
    })
}
