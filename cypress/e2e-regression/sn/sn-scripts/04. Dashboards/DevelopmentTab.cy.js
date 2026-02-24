import { GQTest } from '../../sn-pages/GQTest';
describe('04. Dashboards', () => {
    Cypress.config('defaultCommandTimeout', 120000);
    it('Development Tab', () => {
        const GQ = new GQTest();

        // Login
        GQ.login()

        // Dashboards
        GQ.Planets.Dashboards.open()

        // Product Development
        GQ.Planets.Dashboards.ProductDevelopment.open()

        // Development
        GQ.Planets.Dashboards.ProductDevelopment.Development.open()
    
        // Toggle filter
        GQ.Planets.Dashboards.ProductDevelopment.Development.toggleFilter()

        // Select Record
        GQ.Planets.Dashboards.ProductDevelopment.Development.selectRecord(0)

        // Navigate Through tabs
        GQ.Planets.Dashboards.ProductDevelopment.Development.DevelopmentTab.openDryRunCompletionTab()

        GQ.Planets.Dashboards.ProductDevelopment.Development.DevelopmentTab.openDryRunPassTab()

        GQ.Planets.Dashboards.ProductDevelopment.Development.DevelopmentTab.openProtocolStatusTab()

        GQ.Planets.Dashboards.ProductDevelopment.Development.DevelopmentTab.openTestCasesWithTestProcedures()

        GQ.Planets.Dashboards.ProductDevelopment.Development.DevelopmentTab.openIssueStatusTab()

        GQ.Planets.Dashboards.ProductDevelopment.Development.DevelopmentTab.openRequirementCoverage()

        GQ.Planets.Dashboards.ProductDevelopment.Development.DevelopmentTab.openVerificationMethodTab()

        GQ.Planets.Dashboards.ProductDevelopment.Development.DevelopmentTab.openRequirementTestTraceTab()
        
        // Log out
        GQ.logout()


    })
})