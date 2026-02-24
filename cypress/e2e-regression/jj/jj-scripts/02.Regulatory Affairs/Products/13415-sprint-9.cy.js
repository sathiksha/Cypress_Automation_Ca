import { GQTest } from '../../../jj-pages/GQTest'
const GQ = new GQTest();
describe('Regulatory Affairs', () => {
    Cypress.config('defaultCommandTimeout', 180000);
    it('Products in Planet', () => {
        // Login
        GQ.login();

        // Open Regulatory Affairs
        GQ.Planets.RegulatoryAffairs.openLandingPage()

        // RIMDocs Records - Parent Tab Name
        GQ.Planets.RegulatoryAffairs.RIMDocsRecords.Products.openLandingPage()

        GQ.Planets.RegulatoryAffairs.RIMDocsRecords.Products.refresh()

        GQ.Planets.RegulatoryAffairs.RIMDocsRecords.Registrations.openLandingPage()

       // GQ.Planets.RegulatoryAffairs.RIMDocsRecords.Registrations.verifyLocProductList()

        // Logout
        GQ.logout();
    })

    it('Product planet -> Products', () => {
        // Login
        GQ.login();

        // Open Product Planet
        GQ.Planets.Product.openLandingPage()

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        // Open APALUTAMIDE
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')

        // Open Regulatory Affairs
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.RegulatoryRecordsopen()

        //Open Products
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.products.ProductMenuOpen()

        //Refresh
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.products.refresh()

        // Logout
        GQ.logout();
    })

    it('Admin Data Binder > Smart Content > Regulatory Affairs > Products', () => {
        // Login
        GQ.login();

        // Product planet
        GQ.Planets.Product.openLandingPage()

        // Product Families
        GQ.Planets.Product.ProductFamilies.openLandingPage()

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        // Product Record
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')

        // Content
        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRowByText('MSAT Product View - Cypress Test Admin Binder')

        // Smart Content
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.open()

        //Open Regulatory Affairs
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.open()

        //Open Products
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.Products.open()

        // Logout
        GQ.logout();
    })


    it('Admin Data Binder > Linked Content > Regulatory Affairs > Products', () => {
        // Login
        GQ.login();

        // Product planet
        GQ.Planets.Product.openLandingPage()

        // Product Families
        GQ.Planets.Product.ProductFamilies.openLandingPage()

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        // Product Record
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')

        // Content
        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRowByText('MSAT Product View - Cypress Test Admin Binder')

        // Linked Content
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.open()

        //Open Regulatory Affairs 
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.open()

        //Open Products
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.Products.open()

        // Logout
        GQ.logout();
    })

    it('User Data Binder > Smart Content > Regulatory Affairs > Products', () => {
        // Login
        GQ.login();

        // Product planet
        GQ.Planets.Product.openLandingPage()

        // Product Families
        GQ.Planets.Product.ProductFamilies.openLandingPage()

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        // Product Record
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')

        // User Data Binder
        GQ.Planets.Product.ProductFamilies.ProductFamily.filterBinder('MSAT Product View - Cypress Test User Data Binder')

        // Smart Content
        // GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.open()

        //Open Regulatory Affairs
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.open()

        //Open Products
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.RegulatoryAffairs.Products.open()

        // Logout
        GQ.logout();
    })

    it('User Data Binder > Linked Content > Regulatory Affairs > Products', () => {
         // Login
         GQ.login();

         // Product planet
         GQ.Planets.Product.openLandingPage()
 
         // Product Families
         GQ.Planets.Product.ProductFamilies.openLandingPage()
 
         // Toggle Filter
         GQ.Planets.Product.ProductFamilies.toggleFilter()
 
         // Product Record
         GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')
 
         // User Data Binder
         GQ.Planets.Product.ProductFamilies.ProductFamily.filterBinder('MSAT Product View - Cypress Test User Data Binder')
 
         // Linked Content
         GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.open()
 
         //Open Regulatory Affairs
         GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.open()
 
         //Open Products
         GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.Products.open()
 
         // Logout
         GQ.logout();
 
    })

    it(' Product Specific Binder > Smart Content > Regulatory Affairs > Products', () => {
        // Login
        GQ.login();

        // Open Product Planet
        GQ.Planets.Product.openLandingPage();

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter();

        // Open APALUTAMIDE
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')

        // Refresh
        GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector()

        // Select the linked binder
        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test Admin Binder')

         // Check if the 'Create Product Specific Folder' Button exists
         cy.getSC(GQ.Planets.Product.ProductFamilies.ProductFamily.SelectorGridBarButtons.CreateProductSpecificFolder).should('be.visible')

         // Create Product Specific Folder
         GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.createProductSpecificFolder('Test123',['Regulatory Affairs'])
 
         // Click Plus
         GQ.Planets.Product.ProductFamilies.ProductFamily.clickPlusIcon('MSAT Product View - Cypress Test Admin Binder')
         
         // Click Child
         GQ.Planets.Product.ProductFamilies.ProductFamily.clickChild('MSAT Product View - Cypress Test Admin Binder')

        //Open Product
        GQ.Planets.Product.ProductFamilies.ProductFamily.openProducts()

        
        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRowByText('Test123')

        GQ.Planets.Product.ProductFamilies.ProductFamily.deleteRowWithYes()
    })

    it(' Product Specific Binder > Linked Content > Regulatory Affairs > Products', () => {

        // Login
        GQ.login();

        // Open Product Planet
        GQ.Planets.Product.openLandingPage();

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter();

        // Open APALUTAMIDE
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')

        // Refresh
        GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector()

        // Select the linked binder
        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test Admin Binder')

         // Check if the 'Create Product Specific Folder' Button exists
         cy.getSC(GQ.Planets.Product.ProductFamilies.ProductFamily.SelectorGridBarButtons.CreateProductSpecificFolder).should('be.visible')

         // Create Product Specific Folder
         GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.createProductSpecificFolder('Test123',['Regulatory Affairs'])
 
         // Click Plus
         GQ.Planets.Product.ProductFamilies.ProductFamily.clickPlusIcon('MSAT Product View - Cypress Test Admin Binder')
         
         // Click Child
         GQ.Planets.Product.ProductFamilies.ProductFamily.clickChild('MSAT Product View - Cypress Test Admin Binder')

        // Linked Content
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.open()
 
        //Open Regulatory Affairs
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.open()

        //Open Products
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.Products.open()
        
        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRowByText('Test123')

        GQ.Planets.Product.ProductFamilies.ProductFamily.deleteRowWithYes()

        // Logout
        GQ.logout();


    })
})

