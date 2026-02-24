import { GQTest } from '../../../jj-pages/GQTest'
    describe('04. Quality Management', () => {
        Cypress.config('defaultCommandTimeout', 180000);
        it('CAPA as a related object is not populating correctly', () => {
            const GQ = new GQTest();
            // Login
            GQ.login();

        // Post Market
        GQ.Planets.PostMarket.openLandingPage()

        // Compalints
        GQ.Planets.PostMarket.Complaints.openLandingPage()

        // Complaints Records
        GQ.Planets.PostMarket.Complaints.ComplaintRecords.openLandingPage()

        // Toggle filter
        GQ.Planets.PostMarket.Complaints.ComplaintRecords.toggleFilter()

        // open Record
        GQ.Planets.PostMarket.Complaints.ComplaintRecords.openRecordByText('90000228875')

        // Related Objects
        GQ.Planets.PostMarket.Complaints.ComplaintRecords.ComplaintRecord.RelatedObjects.openLandingPage()

        // CAPA
        GQ.Planets.PostMarket.Complaints.ComplaintRecords.ComplaintRecord.RelatedObjects.CAPA.open()

        // Trackwise
        GQ.Planets.PostMarket.Complaints.ComplaintRecords.ComplaintRecord.RelatedObjects.CAPA.viewTrackwise()

        // Open Record
        GQ.Planets.PostMarket.Complaints.ComplaintRecords.ComplaintRecord.RelatedObjects.CAPA.openRecordByIndex(0)

        // Related object
        GQ.Planets.PostMarket.Complaints.ComplaintRecords.ComplaintRecord.RelatedObjects.CAPA.openRelatedObjects()

        // Logout
        GQ.logout()

    })
})