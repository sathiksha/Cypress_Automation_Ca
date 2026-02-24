import { GQTest } from '../../../jj-pages/GQTest'
    describe('03. Post Market', () => {
        Cypress.config('defaultCommandTimeout', 180000);
        it('Complaints Filter', () => {
            const GQ = new GQTest();
            // Login
            GQ.login();

            // Open Post Market
            GQ.Planets.PostMarket.openLandingPage()

            // Complaints - Parent Tab Name
            GQ.Planets.PostMarket.Complaints.openLandingPage()            
                  
            // Refresh
            GQ.Planets.PostMarket.Complaints.Complaints.refresh()

            // Auto Test
            cy.autoTestAll(
                GQ.Planets.PostMarket.Complaints.Complaints.gridID()
            ,{})
            
            // Logout
            GQ.logout();
        })
    })
