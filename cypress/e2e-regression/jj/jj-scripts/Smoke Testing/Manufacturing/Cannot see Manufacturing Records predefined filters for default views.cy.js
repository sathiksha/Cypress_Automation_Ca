import { GQTest } from '../../../jj-pages/GQTest'
describe('05. Laboratory Information', () => {
    Cypress.config('defaultCommandTimeout', 200000);
    it('Fix the Specifications List Screen on JJ DEV', () => {
        const GQ = new GQTest();
       
        // Login
        GQ.login('PQM360 General User')
 
        // Open Product
        GQ.Planets.Product.openLandingPage()
 
        //Open Product Planet
        GQ.Planets.Product.ProductFamilies.openLandingPage()
 
        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()
 
        // Open Apalutamide
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')
 
        // Click data
        GQ.Planets.Product.ProductFamilies.ProductFamily.selectParent()
 
        // Click Contents
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.open()
 
        // Manufacturing Records
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.openLandingPage()
 
        // Batch flows
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.BatchFlows.openLandingPage()
 
        // View Dropdown
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.BatchFlows.Filtered.viewDropdown()
 
        cy.window().then(win => {
            // Dropdown
            let columns = [
                'All',
                'Finished Goods',
                'Final APIs',
                '- Non-Batch Mgd.',
            ];
            let availableCols = []
            let menu = win.isc.AutoTest.getElement('//Menu[level=0]/body/')
            let items = menu.querySelectorAll('tbody > tr > td > div')
            for (let i = 0; i < items.length; i++) {
                availableCols.push(items[i].innerText)
            }
            for (let j = 0; j < columns.length; j++) {
                expect(availableCols).to.include(columns[j])
            }
        })
        GQ.logout();
    })
})
 