import { GQTest } from '../../jj-pages/GQTest'
// Sprint 6
require('cypress-xpath')
if (!Cypress.env('onlyRunReadOnlyTests')) {
describe('Sprint 6', () => {
    const GQ = new GQTest();
    it('12966-Allows System Administrator the ability to assign Organization, Department, Function and Site attributes to users', () => {

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

        // Verify columns
        let expectedColumnsQXD = [
            'Organization',
            'Function',
            'Department',
            'Site'
        ]

        cy.getColumnsAndTypes(
            GQ.Menu.DomainSetup.Manage.Users.getColumnsID()
        )
        .then(tableInfo => {
            let availableCols = []
            tableInfo.columns.map((obj) => {
                availableCols.push(obj.textContent)
            })
            cy.log(availableCols)
            for (let i = 0; i < expectedColumnsQXD.length; i++) {
                expect(availableCols).to.include(expectedColumnsQXD[i])
            }
        })

        // Select User
        GQ.Menu.DomainSetup.Manage.Users.openUserNameByText('Cypress','Cypress Test User')

        // Check Multi Choice picker
        const namesList = ['Organization','Function','Department','Site']
        GQ.Menu.DomainSetup.Manage.Users.checkMultiChoicePickerColumns(namesList)

        // Go to element library
        GQ.NavBar.ElementLibrary.openLandingPage()

        // User Reporting
        GQ.NavBar.ElementLibrary.UserReporting.open()

        // Organization
        GQ.NavBar.ElementLibrary.UserReporting.Organization.open()

        // Select Test 
        GQ.NavBar.ElementLibrary.UserReporting.Organization.selectOrganizationByText('foo2')

        // Link User
        GQ.NavBar.ElementLibrary.UserReporting.Organization.linkUserInBulk('t',0)

        // Unlink User list
        GQ.NavBar.ElementLibrary.UserReporting.Organization.unlinkUserInBulk(0)

        cy.waitForSCDone()

        // Department
        GQ.NavBar.ElementLibrary.UserReporting.Department.open()

        // Select Test 
        GQ.NavBar.ElementLibrary.UserReporting.Department.selectDepartmentByText('Tester')

        // Link User
        GQ.NavBar.ElementLibrary.UserReporting.Department.linkUserInBulk('t',0)

        // Unlink user
        GQ.NavBar.ElementLibrary.UserReporting.Department.unlinkUserInBulk(0)

        cy.waitForSCDone()

        // Functions
        GQ.NavBar.ElementLibrary.UserReporting.Function.open()

        // Select Test 
        GQ.NavBar.ElementLibrary.UserReporting.Function.selectFunctionByText('Tester')

        // Link User
        GQ.NavBar.ElementLibrary.UserReporting.Function.linkUserInBulk('t',0)

        // Unlink User
        GQ.NavBar.ElementLibrary.UserReporting.Function.unlinkUserInBulk(0)

        cy.waitForSCDone()

        // Sites
        GQ.NavBar.ElementLibrary.UserReporting.Site.open()

        // Select Test 
        GQ.NavBar.ElementLibrary.UserReporting.Site.selectSiteByText('US')

        // Link User
        GQ.NavBar.ElementLibrary.UserReporting.Site.linkUserInBulk('t',0)

        // unlink
        GQ.NavBar.ElementLibrary.UserReporting.Site.unlinkUserInBulk(0)

        // Logout
        GQ.logout()


    })
})
}