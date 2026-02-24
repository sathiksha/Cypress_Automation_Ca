import { GQTest } from '../../jj-pages/GQTest'

describe('22134 - Automation Testing: Settings > Types > Icons', () => {
    const GQ = new GQTest();

    it('22134 - Automation Testing: Settings > Types > Icons', () => {
        // Login
        GQ.login()

        // Settings Page
        GQ.Menu.openSettings()

        // Icons
        GQ.Menu.Settings.Icons.openLandingPage()

        // Toggle Filter
        GQ.Menu.Settings.Icons.toggleFilter()

        // Filter out folders
        GQ.Menu.Settings.Icons.filter('Blue Gear')

        GQ.Menu.Settings.Icons.IconSelect()


        GQ.Menu.Settings.Icons.IconCheckBoxValidation()


        GQ.Menu.Settings.Icons.IconUsedPlaceValidation()

        GQ.Menu.Settings.Icons.IconNotSelectValidation()

        // Logout
        GQ.logout()

    })
})

