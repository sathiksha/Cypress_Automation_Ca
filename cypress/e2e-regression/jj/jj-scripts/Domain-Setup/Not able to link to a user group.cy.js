import { GQTest } from "../../jj-pages/GQTest";
const GQ = new GQTest();
if (!Cypress.env("onlyRunReadOnlyTests")) {
describe('Bug Tracking Tests', () => {
    it('9280-Not able to link to a user group', () => {
        // Login 
        GQ.login()

        // Click Hamburger Icon
        GQ.NavBar.MainMenu.open()
        
        // Domain Setup
        GQ.NavBar.MainMenu.clickDomainSetup()

        // Click Manage
        GQ.NavBar.MainMenu.DomainSetup.Manage.open()
        
        // Select User name
        GQ.NavBar.MainMenu.DomainSetup.Manage.Users.open()

        // Toggle Filter
        GQ.NavBar.MainMenu.DomainSetup.Manage.Users.toggleFilter()

        // Open User groups
        GQ.NavBar.MainMenu.DomainSetup.Manage.Users.openUserNameByText('test User 1')

        // User Group tab
        GQ.NavBar.MainMenu.DomainSetup.Manage.Users.UserGroupsTab.open()

        // Link User 
        GQ.NavBar.MainMenu.DomainSetup.Manage.Users.UserGroupsTab.linkUserGroup(0)

        // Select User Name
        GQ.NavBar.MainMenu.DomainSetup.Manage.Users.UserGroupsTab.selectGroupByIndex(0)

        // Unlink
        GQ.NavBar.MainMenu.DomainSetup.Manage.Users.UserGroupsTab.unlink(0)

        // Refresh
        GQ.NavBar.MainMenu.DomainSetup.Manage.Users.UserGroupsTab.refresh()

        // Logout
        GQ.logout()

    })
})
}