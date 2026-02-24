import {GQTest} from '../../../jnj-pages/GQTest.js'


describe('7420 -Allows Product Modifier role for Product Family_Product to add attachments and Linked Content to Admin Data Binders and Product Specific Binders', () => {
    const GQ = new GQTest();


    it('Allows Product Modifier role for Product Family_Product to add attachments and Linked Content to Admin Data Binders and Product Specific Binders', () => {
        // Login
        GQ.Login()

        // Open Product
        GQ.Planets.openPlanet('Product')

        GQ.Planets.Product.ProductFamily.toggleFilter()
        // Open Product Familys
        GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')


        GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Header.attachmentsHeader.AdminBinderOpen()

        GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Header.attachmentsHeader.open()


        GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Header.attachmentsHeader.plusIcon()

        GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Header.attachmentsHeader.chooseFile()

        GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Header.attachmentsHeader.selectRecord()
        cy.wait(2000)
        GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Header.attachmentsHeader.saveRecords()

        GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Header.attachmentsHeader.removeRecord()

        GQ.Planets.Product.ProductFamily.ProductSpecificBinder.ProductSpecificBinderopen()

        GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Header.attachmentsHeader.open()

        GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Header.attachmentsHeader.plusIcon()

        GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Header.attachmentsHeader.chooseFile()

        GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Header.attachmentsHeader.selectRecord()
        cy.wait(2000)
        GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Header.attachmentsHeader.saveRecords()

        GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Header.attachmentsHeader.removeRecord()
        cy.wait(2000)

        GQ.Logout()

    });
});
