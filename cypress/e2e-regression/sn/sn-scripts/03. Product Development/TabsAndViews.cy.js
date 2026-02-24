import { GQTest } from '../../sn-pages/GQTest';
describe('03. Product Development', () => {
    Cypress.config('defaultCommandTimeout', 120000);
    it('Tabs And  Views', () => {
        const GQ = new GQTest();

        // Login
        GQ.login()

        // Open Product Development
        GQ.Planets.ProductDevelopment.open()

        // Groups tab
        GQ.Planets.ProductDevelopment.Groups.open()

        // Toggle dropdown
        GQ.Planets.ProductDevelopment.Groups.viewDropdown()

        // DHF group
        GQ.Planets.ProductDevelopment.Groups.viewDHFGroups()
        
        // Projects Tab
        GQ.Planets.ProductDevelopment.Projects.open()

        // SPD Projects
        GQ.Planets.ProductDevelopment.Projects.viewSPDProjects()

        // Program Projects
        GQ.Planets.ProductDevelopment.Projects.viewProgramProjects

        // Cockpit Prjects
        GQ.Planets.ProductDevelopment.Projects.viewCockpitProjects()

        // Jira Projects
        GQ.Planets.ProductDevelopment.Projects.viewJiraProjects()

        // Matrix Material Tab
        GQ.Planets.ProductDevelopment.MatrixMaterials.open()

        // All tab
        GQ.Planets.ProductDevelopment.MatrixMaterials.All.open()

        // Standard view
        GQ.Planets.ProductDevelopment.MatrixMaterials.viewStandard() 

        // Product Groupings
        GQ.Planets.ProductDevelopment.MatrixMaterials.viewProductGroupings()

        // Regulatory Information
        GQ.Planets.ProductDevelopment.MatrixMaterials.viewRegulatoryInformation()

        // EUDAMED UDI Information
        GQ.Planets.ProductDevelopment.MatrixMaterials.viewEUDAMEDUDIInformation()
        
        // Characteristics
        GQ.Planets.ProductDevelopment.MatrixMaterials.viewCharacteristics()

        // Worst Case Challenges
        GQ.Planets.ProductDevelopment.MatrixMaterials.viewWorstCaseChallenges()

        // Catalog items
        GQ.Planets.ProductDevelopment.MatrixMaterials.CatalogItems.open()

        // RoW Catalog Items
        GQ.Planets.ProductDevelopment.MatrixMaterials.RoWCatalogItems.open()

        // SPS Catalog Items
        GQ.Planets.ProductDevelopment.MatrixMaterials.SPSCatalogItems.open()

        // Express Catalog Items
        GQ.Planets.ProductDevelopment.MatrixMaterials.ExpressatalogItems.open()

        // Set Catalog Items
        GQ.Planets.ProductDevelopment.MatrixMaterials.SetCatalogItems.open()

        // view dropdown
        GQ.Planets.ProductDevelopment.MatrixMaterials.SetCatalogItems.viewAllSetCatalogItems()

        // Parts
        GQ.Planets.ProductDevelopment.MatrixMaterials.Parts.open()

        // Raw Material
        GQ.Planets.ProductDevelopment.MatrixMaterials.RawMaterials.open()

        // Windchill materials
        GQ.Planets.ProductDevelopment.WindchillMaterials.open()

        // All
        GQ.Planets.ProductDevelopment.WindchillMaterials.All.open()

        // Electrical Part
        GQ.Planets.ProductDevelopment.WindchillMaterials.ElectricalPart.open()

        // Product Definitiona Part
        GQ.Planets.ProductDevelopment.WindchillMaterials.ProductDefinitionPart.open()

        // SNN Electrical Part
        GQ.Planets.ProductDevelopment.WindchillMaterials.SNNElectricalPart.open()

        // SNN Mechanical Part
        GQ.Planets.ProductDevelopment.WindchillMaterials.SNNMechanicalPart.open()

        // SNN Non CAD Part
        GQ.Planets.ProductDevelopment.WindchillMaterials.SNNNonCADPart.open()

        // SNN Product Family Part
        GQ.Planets.ProductDevelopment.WindchillMaterials.SNNProductFamilyPart.open()

        // Windchill Change Notices
        GQ.Planets.ProductDevelopment.WindchillChangeNotices.open()

        // Logout
        GQ.logout()




    })
})