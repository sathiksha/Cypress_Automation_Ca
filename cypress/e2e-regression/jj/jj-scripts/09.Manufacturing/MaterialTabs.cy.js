import { GQTest } from '../../jj-pages/GQTest'
describe('07. Manufacturing', () => {
    Cypress.config('defaultCommandTimeout', 180000);
    it('Material Tabs', () => {
        const GQ = new GQTest();
         // Login
    GQ.login();

    // Open Manufacturing
    GQ.Planets.Manufacturing.openLandingPage()

    // Materials
    GQ.Planets.Manufacturing.Materials.openLandingPage()

    GQ.Planets.Manufacturing.Materials.toggleFilter()
    
    // Open 412416
    GQ.Planets.Manufacturing.Materials.openMaterialByText('412416')

    // Details
    GQ.Planets.Manufacturing.Materials.Material.openDetails()

    // Batches
    GQ.Planets.Manufacturing.Materials.Material.openBatches()

    // Select a batch
    GQ.Planets.Manufacturing.Materials.Material.selectBatchByIndex(0)

    // Batch Flow >>>> broken page
    GQ.Planets.Manufacturing.Materials.Material.showBatchFlow()

    // // Material Flow
    // GQ.Planets.Manufacturing.Materials.Material.showMaterialFlow()

    // Related Objects 
    GQ.Planets.Manufacturing.Materials.Material.showRelatedObjects()
 
    GQ.logout()

    })
})