import { GQTest } from '../../jj-pages/GQTest'
// Sprint 3
if (!Cypress.env('onlyRunReadOnlyTests')) {
describe('Sprint 3', () => {
    const GQ = new GQTest();
    require('cypress-xpath')
    it('Remove Summary from form view for Supplemental Investigations.cy', () => {

        // Login
        GQ.login()

        // Quality Management
        GQ.Planets.QualityManagement.openLandingPage()

        // Change controls
        GQ.Planets.QualityManagement.ChangeControls.openLandingPage()

        // Nonconformances
        GQ.Planets.QualityManagement.NonConformances.openLandingPage()

        // Supplemental Investigation
        GQ.Planets.QualityManagement.NonConformances.SupplementalInvestigations.open()

        // Open Record
        GQ.Planets.QualityManagement.NonConformances.SupplementalInvestigations.selectRecordByIndex(0)
        

        // Pag
        GQ.Planets.QualityManagement.NonConformances.SupplementalInvestigations.Details.open()

        // Assertion
        cy.get('tbody tr nobr label').each(($label) => {
            const labelText = $label.text().trim();
            cy.log(labelText);
            const labelTexts = [];
            labelTexts.push(labelText);
            cy.wrap(labelTexts).should('not.include', 'Summary');
          });

        // Maximize Selector
        GQ.Planets.QualityManagement.NonConformances.Comet.CometRecord.maximizeSelector()

        // Logout
        GQ.logout()
    })
})
}