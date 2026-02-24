import { GQTest } from '../../jj-pages/GQTest'
// Sprint 2
describe('Sprint 3', () => {
    const GQ = new GQTest();
    it('11348-Test Case-BUG (DEV) Pivot Table Field for Site is not available for Supplemental Investigations of Nonconformances.cy', () => {

        // Login Step
        GQ.login()

        // Open Landing Page
        GQ.Planets.QualityManagement.openLandingPage()

        // Nonconformances should be visible
        cy.getSC(
            GQ.Planets.QualityManagement.NonConformances.locator           
        ).should('be.visible')
        
        // Click Nonconformances
        GQ.Planets.QualityManagement.NonConformances.openLandingPage()

        // Supplemental Investigations should be visible
         cy.getSC(
            GQ.Planets.QualityManagement.NonConformances.SupplementalInvestigations.locator      
        ).should('be.visible')
        
        // Click Supplemental Investigations
        GQ.Planets.QualityManagement.NonConformances.SupplementalInvestigations.open()

        // Click Chart
        GQ.Planets.QualityManagement.NonConformances.SupplementalInvestigations.Chart.open()

        // Analytics Visible
        cy.getSC(
            GQ.Planets.QualityManagement.NonConformances.SupplementalInvestigations.Chart.Analytics.locator          
        ).should('be.visible')

        // Status Visible
         cy.getSC(
            GQ.Planets.QualityManagement.NonConformances.SupplementalInvestigations.Chart.Status.locator        
        ).should('be.visible')

        // Status/Assignee Visible
        cy.getSC(
            GQ.Planets.QualityManagement.NonConformances.SupplementalInvestigations.Chart.StatusAssignee.locator        
        ).should('be.visible')

        // Open Analytics
        GQ.Planets.QualityManagement.NonConformances.SupplementalInvestigations.Chart.Analytics.open()

        // Facet Picker
        GQ.Planets.QualityManagement.NonConformances.SupplementalInvestigations.Chart.Analytics.Analytics_FacetPicker.open()

        // Remove Columns
        GQ.Planets.QualityManagement.NonConformances.SupplementalInvestigations.Chart.Analytics.Analytics_FacetPicker.removeAllColumnAttributes()

        // Remove Rows
        GQ.Planets.QualityManagement.NonConformances.SupplementalInvestigations.Chart.Analytics.Analytics_FacetPicker.removeAllRowAttributes()

        // Try to add Row Attrivute
        GQ.Planets.QualityManagement.NonConformances.SupplementalInvestigations.Chart.Analytics.Analytics_FacetPicker.addRowAttributeClick()

        // Check if Site is Available
        cy.getSC(
            GQ.Planets.QualityManagement.NonConformances.SupplementalInvestigations.Chart.Analytics.Analytics_FacetPicker.siteItemLocator
        ).should('be.visible')

        // Logout
        GQ.logout()

})
})
