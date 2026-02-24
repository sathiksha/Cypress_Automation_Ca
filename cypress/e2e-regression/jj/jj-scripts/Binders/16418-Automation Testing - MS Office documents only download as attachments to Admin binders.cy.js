import { GQTest } from '../../jj-pages/GQTest'
// Sprint 3
require('cypress-xpath')

describe('Open and view the MS office documents in the Binders', () => {
    const GQ = new GQTest();

    it('Open and view the MS office documents in the Admin Binder', () => {

        // Login
        GQ.login();

        // Open Product Planet
        GQ.Planets.Product.openLandingPage();

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter();

        // Open APALUTAMIDE
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE');

        // Refresh and select the linked binder
        GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector();

        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test Admin Binder');

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.Attachments.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.Attachments.selectAttachmentByName('Test.txt')

        cy.verifyFile('Test.txt')

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.Attachments.selectAttachmentByName('Test.pdf')

        cy.verifyFile('Test.pdf')

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.Attachments.selectAttachmentByName('Test.docx')

        cy.verifyFile('Test.docx')

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.Attachments.selectAttachmentByName('Testing.xlsx')

        cy.verifyFile('Testing.xlsx')

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.Attachments.selectAttachmentByName('Testing.pptx')

        cy.verifyFile('Testing.pptx')

        GQ.logout()
    })

    it('Open and view the MS office documents in the User Data Binder', () => {

        // Login
        GQ.login();

        // Open Product Planet
        GQ.Planets.Product.openLandingPage();

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter();

        // Open APALUTAMIDE
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE');

        // Refresh
        GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector()

        // Select the linked binder
        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test User Data Binder')

        // Attachments
        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.Attachments.open()

        cy.wait(5000)

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.Attachments.selectAttachmentByName('Test.txt')

        cy.verifyFile('Test.txt')

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.Attachments.selectAttachmentByName('Test.pdf')

        cy.verifyFile('Test.pdf')

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.Attachments.selectAttachmentByName('Test.docx')

        cy.verifyFile('Test.docx')

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.Attachments.selectAttachmentByName('Testing.xlsx')

        cy.verifyFile('Testing.xlsx')

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.Attachments.selectAttachmentByName('Testing.pptx')

        cy.verifyFile('Testing.pptx')

        GQ.logout()
    })

    it('Open and view the MS office documents in the Product Specific Binder', () => {

        // Login
        GQ.login();

        // Open Product Planet
        GQ.Planets.Product.openLandingPage();

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter();

        // Open APALUTAMIDE
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE');

        // Refresh and select the linked binder
        GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector();

         cy.wait(5000)

        GQ.Planets.Product.ProductFamilies.ProductFamily.clickPlusIconofBinder()
        
        cy.wait(5000)

        GQ.Planets.Product.ProductFamilies.ProductFamily.clickProductSpecificBinder('Test')


        cy.wait(5000)

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.Attachments.openlandingpage()


        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.Attachments.selectAttachmentByName('Test.txt')

        cy.verifyFile('Test.txt')

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.Attachments.selectAttachmentByName('Test.pdf')

        cy.verifyFile('Test.pdf')

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.Attachments.selectAttachmentByName('Test.docx')

        cy.verifyFile('Test.docx')

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.Attachments.selectAttachmentByName('Testing.xlsx')

        cy.verifyFile('Testing.xlsx')

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.Attachments.selectAttachmentByName('Testing.pptx')

        cy.verifyFile('Testing.pptx')

        GQ.logout()
    })
})









