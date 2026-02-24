import { GQTest } from '../../jj-pages/GQTest'
const GQ = new GQTest();
if (!Cypress.env('onlyRunReadOnlyTests')) {
describe('Bug Tracking Test', () => {
    it('7466-Unable to save an attachment on Data Binders', () => {
        const GQ = new GQTest();
        // Login to Products
        GQ.login();

        // Open Product
        GQ.Planets.Product.openLandingPage()

        //Open Product Planet
        GQ.Planets.Product.ProductFamilies.openLandingPage()

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        // Open Apalutamide
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')

        // Click data
        GQ.Planets.Product.ProductFamilies.ProductFamily.selectParent()

        // Create New Binder icon
        GQ.Planets.Product.ProductFamilies.ProductFamily.createNewDataBinder('Attachment Tester'
            ,[
                "Documents",
                "Regulatory Affairs",
            ]
        )
        // Select Refresh
        GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector()

        // Select New Binder
        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('Attachment Tester')
         
        //Click Smart Content
        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.open()

        // Open Attachment Tester 
        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.Attachments.open()

        // Click new Sibling button
        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.Attachments.createNewAttachment('exportPDF.js')

        cy.wait(2000)

        // Refresh 
        GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector()

        GQ.Planets.Product.ProductFamilies.ProductFamily.toggleSelector()
        // Select Row
        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('Attachment Tester') 
        
        // Delete 
        GQ.Planets.Product.ProductFamilies.ProductFamily.deleteRowWithYes()
        
        //Logout
        GQ.logout()
    })
})
}
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
       
       
        
        



