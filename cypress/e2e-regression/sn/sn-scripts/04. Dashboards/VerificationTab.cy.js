import { GQTest } from '../../sn-pages/GQTest';
describe('04. Dashboards', () => {
    Cypress.config('defaultCommandTimeout', 120000);
    it('Verification Tab', () => {
        const GQ = new GQTest();

        // Login
        GQ.login()

        // Dashboards
        GQ.Planets.Dashboards.open()

        // Product Development
        GQ.Planets.Dashboards.ProductDevelopment.open()

        // Verification
        GQ.Planets.Dashboards.ProductDevelopment.Verification.open()
    
        // // Toggle filter
        // GQ.Planets.Dashboards.ProductDevelopment.Verification.toggleFilter()

        // Select Record
        GQ.Planets.Dashboards.ProductDevelopment.Verification.selectRecord(0)

        // Navigate Through tabs
        GQ.Planets.Dashboards.ProductDevelopment.Verification.VerificationTab.openProtocolStatusTab()

        GQ.Planets.Dashboards.ProductDevelopment.Verification.VerificationTab.openIssueStatusTab()

        GQ.Planets.Dashboards.ProductDevelopment.Verification.VerificationTab.openFormalTestExecutedTab()

        GQ.Planets.Dashboards.ProductDevelopment.Verification.VerificationTab.openExecutionPassTab()
        
        // Toggle filter
        GQ.Planets.Dashboards.ProductDevelopment.Verification.toggleFilter()
        
        // Log out
        GQ.logout()


    })
})