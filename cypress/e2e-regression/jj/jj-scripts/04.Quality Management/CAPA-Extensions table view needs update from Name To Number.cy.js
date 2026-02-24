import { GQTest } from '../../jj-pages/GQTest'

const GQ = new GQTest();
describe('Element Library', () => {
    it('Extensions table view needs update from Name To Number', () => {
        
        // Login
        GQ.login()

        // Open Quality Management
        GQ.Planets.QualityManagement.openLandingPage()

        // Open CAPAs
        GQ.Planets.QualityManagement.CAPAs.openLandingPage()

        // Open Record by Index
        GQ.Planets.QualityManagement.CAPAs.openRecordByIndex(2)

        // Open Related Objects
        GQ.Planets.QualityManagement.CAPAs.CAPARecord.RelatedObjects.open()
        
        // Open Extensions
        GQ.Planets.QualityManagement.CAPAs.CAPARecord.RelatedObjects.Extension.open()

        // First Column should be Number
        cy.getSC(GQ.Planets.QualityManagement.CAPAs.CAPARecord.RelatedObjects.Extension.numberColumn).should('have.text','Number');
      
        // Logout
        GQ.logout()
    })
})