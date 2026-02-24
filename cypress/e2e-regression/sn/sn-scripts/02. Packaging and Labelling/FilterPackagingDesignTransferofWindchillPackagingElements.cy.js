import { GQTest } from '../../sn-pages/GQTest';
describe('02. Packaging and Labelling', () => {
    Cypress.config('defaultCommandTimeout', 120000);
    it('FilterPackagingDesignTransferofWindchillPackagingElements.cy', () => {
        const GQ = new GQTest();

        // Login
        GQ.login()

        // Open Core
        GQ.Planets.PackagingAndLabelling.open()

        // Windchill packaging elements
        GQ.Planets.PackagingAndLabelling.WindchillPackagingElements.open()

        // Packaging Design Transfer
        GQ.Planets.PackagingAndLabelling.WindchillPackagingElements.PackagingDesignTransfer.open()

        // Toggle Filter
        GQ.Planets.PackagingAndLabelling.WindchillPackagingElements.PackagingDesignTransfer.toggleFilter()

        // // Filter colums ( No columns availabel in the screen)
        
        // Logout
        GQ.logout()
    })
})