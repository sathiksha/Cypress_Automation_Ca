import { GQTest } from '../../jj-pages/GQTest'
const GQ = new GQTest();
describe('Element Library', () => {
    it('Comet CAPA form view for Completed By is not in readable format', () => {
        // Login
        GQ.login()

        // Open Quality Management
        GQ.Planets.QualityManagement.openLandingPage()

        // Open CAPAs
        GQ.Planets.QualityManagement.CAPAs.openLandingPage()
        
        GQ.Planets.QualityManagement.CAPAs.refreshbutton();
        // Toggle Filter
        GQ.Planets.QualityManagement.CAPAs.toggleFilter()

        // Search By Text
        GQ.Planets.QualityManagement.CAPAs.searchByText('000381')

        // Get Expected Value
        cy.getSC(
            GQ.Planets.QualityManagement.CAPAs.firstRowCompletedBy
        ).invoke('text').then(expectedCompletedBy=>{
    
            // Expand First Record
            GQ.Planets.QualityManagement.CAPAs.expandRecordByIndex(0)

            // Verification
            cy.getSC(
                GQ.Planets.QualityManagement.CAPAs.ExpandedRecord.Details.completedByField
            ).invoke('text').then(actualCompletedBy=>{
                cy.wrap(expectedCompletedBy).should('equal', actualCompletedBy)
            })
            
        })

        // Logout
        GQ.logout();
        
    })
})




