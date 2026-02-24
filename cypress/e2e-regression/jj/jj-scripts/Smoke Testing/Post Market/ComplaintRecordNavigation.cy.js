import { GQTest } from '../../../jj-pages/GQTest'
describe('03. Post Market', () => {
    Cypress.config('defaultCommandTimeout', 180000);
    it('Complaint Record Navigation', () => {
        const GQ = new GQTest();
        // Login
        GQ.login();

        // Open Post Market
        GQ.Planets.PostMarket.openLandingPage()

        // Complaints Records - Parent Tab Name
        GQ.Planets.PostMarket.Complaints.ComplaintRecords.openLandingPage()

        // Refresh
        GQ.Planets.PostMarket.Complaints.ComplaintRecords.refresh()

        // Open a Record
        GQ.Planets.PostMarket.Complaints.ComplaintRecords.openRecordByIndex(0)

        // Navigate through all tabs

        GQ.Planets.PostMarket.Complaints.ComplaintRecords.openDetails()

        GQ.Planets.PostMarket.Complaints.ComplaintRecords.openRelatedObjects()

        // Logout
        GQ.logout();
    })
})
