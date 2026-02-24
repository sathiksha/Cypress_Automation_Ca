import { GQTest } from '../../../jj-pages/GQTest'
const GQ = new GQTest();
if (!Cypress.env('onlyRunReadOnlyTests')) {
    describe('10. Settings', () => {
        Cypress.config('defaultCommandTimeout', 180000);
        it('Icons', () => {
            // Login
            GQ.login()

            // Settings Page
            GQ.Menu.openSettings()

            // Icons
            GQ.Menu.Settings.Icons.openLandingPage()

            // Toggle Filter
            GQ.Menu.Settings.Icons.toggleFilter()

            // Filter out folders
            GQ.Menu.Settings.Icons.filter('Folder')

            // Refresh 
            GQ.Menu.Settings.Icons.refresh()

            // Toggle Filter
            GQ.Menu.Settings.Icons.toggleFilter()

            // Class Icons
            cy.getSC(
                GQ.Menu.Settings.Icons.classIconsID()
                , { timeout: 60000 }).rightclick()

            // Create New Icon
            cy.getSC(
                GQ.Menu.Settings.Icons.createIconID()
                , { timeout: 60000 }).click()

            // Toggle Filter
            GQ.Menu.Settings.Icons.toggleFilter()

            // Filter out for 'A New Icon'
            GQ.Menu.Settings.Icons.filterAndSelect('A New Icon')

            cy.wait(2000)

            // Change Name
            GQ.Menu.Settings.Icons.Icon.setName('Cypress - Test Icon')

            // Change Description
            GQ.Menu.Settings.Icons.Icon.setDescription('Red Calendar with embedded Green Time Icon')


            // Save
            GQ.Menu.Settings.Icons.Icon.save()

            // Click Image
            GQ.Menu.Settings.Icons.Icon.clickImage()

            // Filter out folders
            GQ.Menu.Settings.Icons.filterAndSelect('Cypress - Test Icon')

            // Remove
            GQ.Menu.Settings.Icons.delete()

            // Refresh
            GQ.Menu.Settings.Icons.refresh()

            // Logout
            GQ.logout()

        })
    })
}

