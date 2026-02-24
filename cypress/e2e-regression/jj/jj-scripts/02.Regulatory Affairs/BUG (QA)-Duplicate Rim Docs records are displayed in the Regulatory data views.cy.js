import { GQTest } from "../../jj-pages/GQTest";
const GQ = new GQTest();
describe('Bug Tracking Tests', () => {
    it('9100-BUG (QA)-Duplicate Rim Docs records are displayed in the Regulatory data views.cy.js', () => {
        
        // Login 
        GQ.login('PQM360 General User')

        // Open Regulatory Affairs
        GQ.Planets.RegulatoryAffairs.openLandingPage()

        // Open RIMDocs Records
        GQ.Planets.RegulatoryAffairs.RIMDocsRecords.openLandingPage()

        // Toggle Filter
        GQ.Planets.RegulatoryAffairs.RIMDocsRecords.CTDSubmissions.toggleFilter()

        // Filter Records
        GQ.Planets.RegulatoryAffairs.RIMDocsRecords.CTDSubmissions.filterRecords('EDMS-RIM-996636')

        // Make sure no duplicates
        cy.getSC(
            GQ.Planets.RegulatoryAffairs.RIMDocsRecords.CTDSubmissions.rowCountID()
        ).invoke('text').then(text => {
            let lastIndex = text.lastIndexOf(" item");
        let rowCount = text.substring(0, lastIndex);
            cy.log(rowCount)
            expect(rowCount).to.eq('1')
        })

        // Logout
        GQ.logout()

    })
})