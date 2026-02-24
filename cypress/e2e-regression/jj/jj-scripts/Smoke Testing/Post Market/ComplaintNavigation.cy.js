import { GQTest } from '../../../jj-pages/GQTest'
    describe('03. Post Market', () => {
        Cypress.config('defaultCommandTimeout', 180000);
        it('Complaint Navigation', () => {
            const GQ = new GQTest();
            // Login
            GQ.login();

            // Open Post Market
            GQ.Planets.PostMarket.openLandingPage()

            // Complaints - Parent Tab Name
            GQ.Planets.PostMarket.Complaints.openLandingPage()            
                  
            // Refresh
            GQ.Planets.PostMarket.Complaints.Complaints.refresh()

            // Open a Record
            GQ.Planets.PostMarket.Complaints.Complaints.openRecordByIndex(0)

            // Navigate through all tabs
            GQ.Planets.PostMarket.Complaints.Complaints.Complaint.RelatedObjects.open()

            if (!Cypress.env('onlyRunReadOnlyTests')) {
                 GQ.Planets.PostMarket.Complaints.Complaints.Complaint.addBookMark()
            }
            
            // Logout
            GQ.logout();
        })
    })
