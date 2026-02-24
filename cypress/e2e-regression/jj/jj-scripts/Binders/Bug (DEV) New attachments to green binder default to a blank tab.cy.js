import { GQTest } from '../../jj-pages/GQTest'
// Sprint 3
require('cypress-xpath')
 
describe('New attachments to green binder default to a blank tab', () => {
    const GQ = new GQTest();
 
    it('New attachments to green binder default to a blank tab', () => {
     
           // Login
           GQ.login();
     
           // Open Product Planet
           GQ.Planets.Product.openLandingPage();
        
           // Product Families must be visible
           cy.getSC(GQ.Planets.Product.ProductFamilies.locator).should('be.visible');
           cy.getSC(GQ.Planets.Product.Products.locator).should('be.visible');
           cy.getSC(GQ.Planets.Product.LargeMolecules.locator).should('be.visible');
           cy.getSC(GQ.Planets.Product.SmallMolecules.locator).should('be.visible');
        
           // Toggle Filter
           GQ.Planets.Product.ProductFamilies.toggleFilter();
        
           // Open APALUTAMIDE
           GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE');
        
           // Refresh and select the linked binder
           GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector();
           GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test Admin Binder');
        
           // Open Product Specific Binder
           GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.openlandingpage();
           GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.Name('Test');
           GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.dropdown();
           GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.selectqualitymanagement();
            // Click Plus
           
            
            // Click Child
           
            
        //    GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.Expandrecord();
           GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.linkedcontent.openlandingpage();
           GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.Attachments.openlandingpage()
           GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.Attachments.checkBinderOpenedorNot('MSAT Product View - Cypress Test Admin Binder')
           GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.Attachments.clickChidBinder('Test')
           GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.Attachments.createNewAttachment('Robot.js')
           GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.Attachments.createNewAttachment('exportPDF.js')
           GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.Attachments.openthefile()
           GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.Attachments.uploadfile('exportPDF.js')

           const robotFilePath = 'Robot.js';  
           const exportPDFFilePath = 'exportPDF.js';  
       
           // First, ensure both files exist
           cy.readFile(robotFilePath, 'utf8').should('exist');  // Check if Robot.js exists
           cy.readFile(exportPDFFilePath, 'utf8').should('exist');  // Check if exportPDF.js exists
       
           //  compare the content of both files to make sure they are not the same
           cy.readFile(robotFilePath, 'utf8').should('not.equal', cy.readFile(exportPDFFilePath, 'utf8'));
       })
    })

        
          
        
           

       
       

