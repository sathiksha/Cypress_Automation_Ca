import { GQTest } from '../../../jj-pages/GQTest'
describe('07. Manufacturing', () => {
    Cypress.config('defaultCommandTimeout', 180000);
    it('Tabs and Views', () => {
        const GQ = new GQTest();
        // Login
        GQ.login();

        // Open Manufacturing
        GQ.Planets.Manufacturing.openLandingPage()

        // Materials
        GQ.Planets.Manufacturing.Materials.openLandingPage()

        // Materials - View All
        GQ.Planets.Manufacturing.Materials.viewAll()

        // Materials - View Final APIs
        GQ.Planets.Manufacturing.Materials.viewFinalAPIs()

        // Materials - View Final Bulk
        GQ.Planets.Manufacturing.Materials.viewFinalBulk()

        // Materials - View Finished Goods
        GQ.Planets.Manufacturing.Materials.viewFinishedGoods()

        // Refresh
        GQ.Planets.Manufacturing.MaterialsAndBatchFlows.refresh()

        // Logout
        GQ.logout()

    })
})