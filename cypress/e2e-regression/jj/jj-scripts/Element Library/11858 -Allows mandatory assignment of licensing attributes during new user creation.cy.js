import { GQTest } from '../../jj-pages/GQTest'
// Sprint 6
require('cypress-xpath')
if (!Cypress.env('onlyRunReadOnlyTests')) {
describe('Sprint 6', () => {
    const GQ = new GQTest();
    it('12969-Allows mandatory assignment of licensing attributes during new user creation', () => {

        // Login 
        GQ.login("PQM360 System Administrator")

        // Menu
        GQ.Menu.show()

        // Open Domain Setup
        GQ.Menu.DomainSetup.open()

        // Manage
        GQ.Menu.DomainSetup.Manage.open()

        // Users tab
        GQ.Menu.DomainSetup.Manage.Users.open()

        // Create new sibling
        GQ.Menu.DomainSetup.Manage.Users.createNewbutton()

        // Enater name and Email
        GQ.Menu.DomainSetup.Manage.Users.EnterNameAndEmail('Test','User','testuser@sample.com')

        // Click Ok
        GQ.Menu.DomainSetup.Manage.Users.clickOk()

        // Verify
        cy.getSC(
            GQ.Menu.DomainSetup.Manage.Users.errorMessage()
        ).should('be.visible')

        // Enter Details
        GQ.Menu.DomainSetup.Manage.Users.EnterOrgFuncDeptSite(0)

        //  Click Ok
        GQ.Menu.DomainSetup.Manage.Users.clickOk()

        // Click yes
        GQ.Menu.DomainSetup.Manage.Users.clickConformationYes()

        // Click Ok
        GQ.Menu.DomainSetup.Manage.Users.clickErrorOk()

        // Logout
        GQ.logout()


    })
})
}