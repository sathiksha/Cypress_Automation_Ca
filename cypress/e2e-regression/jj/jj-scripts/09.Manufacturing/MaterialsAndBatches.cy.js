import { GQTest } from'../../jj-pages/GQTest'
describe('07. Manufacturing', () => {
    Cypress.config('defaultCommandTimeout', 180000);
    it('Materials And Batches', () => {
        const GQ = new GQTest();
         // Login
        GQ.login();

        // Open Manufacturing
        GQ.Planets.Manufacturing.openLandingPage()

        // Materials
        GQ.Planets.Manufacturing.Materials.openLandingPage()

        // Toggle filter
        GQ.Planets.Manufacturing.Materials.toggleFilter()

        // Open 412416
        GQ.Planets.Manufacturing.Materials.openMaterialByText('412416')

        // Open batches
        GQ.Planets.Manufacturing.Materials.Material.Batch.openLandingPage()

        // Toggle filter
        GQ.Planets.Manufacturing.Materials.Material.Batch.toggleFilter()

        // Open text
        GQ.Planets.Manufacturing.Materials.Material.Batch.openBatchBytext('KAZ0400')
        
        // Open Batch Flow
        GQ.Planets.Manufacturing.Materials.Material.Batch.BatchFlow.openLandingPage()

        // Open Related Objects
        GQ.Planets.Manufacturing.Materials.Material.Batch.RelatedObjects.openLandingPage()  

        // Logout
        GQ.logout()

    })
})
