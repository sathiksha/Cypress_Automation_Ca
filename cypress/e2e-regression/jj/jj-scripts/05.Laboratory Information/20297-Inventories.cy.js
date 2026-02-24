import { GQTest } from "../../jj-pages/GQTest";
const GQ = new GQTest();
describe('Inventories Linked Content', () => {
    it('Inventories - Admin Data Binder Linked Content', () => {

        // Login
        GQ.login();

        GQ.Planets.Product.openLandingPage()

        // Product Families
        GQ.Planets.Product.ProductFamilies.openLandingPage()

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        // Product Record
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')

        // Refresh
        GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector()

        // Select the linked binder
        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test Admin Binder')

        //Open Linked content
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.open()

        // Open Laboratory Information
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.LaboratoryRecords.openLandingPage();

        // Open Stability Studies
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.LaboratoryRecords.StabilityStudies.openLandingPage()

        let subNouns = [
            'Stability Studies',
            'Forecasts',
            'Inventories'
        ]

        //Check Sub nouns data availablity
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.LaboratoryRecords.StabilityStudies.checkSubNouns(subNouns)

        // Open Inventories
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.LaboratoryRecords.StabilityStudies.Inventories.openLandingPage();

        //Link Sibiling Item
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.LaboratoryRecords.StabilityStudies.Inventories.linkSiblingItem(0);

        //Unlink
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.LaboratoryRecords.StabilityStudies.Inventories.unlinkSibling(0);

        // Logout
        GQ.logout()

    })
    it('Inventories - User Data Binder Linked Content', () => {

        // Login
        GQ.login();

        GQ.Planets.Product.openLandingPage()

        // Product Families
        GQ.Planets.Product.ProductFamilies.openLandingPage()

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        // Product Record
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')

        // Refresh
        GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector()

        // Select the linked binder
        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test User Binder')

        //Open Linked content
        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.open()

        // Open Laboratory Information
        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.LaboratoryInformation.openLandingPage();

        // Open Stability Studies
        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.LaboratoryInformation.StabilityStudies.openLandingPage()

        let subNouns = [
            'Stability Studies',
            'Forecasts',
            'Inventories'
        ]

        //Check Sub nouns data availablity
        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.LaboratoryInformation.StabilityStudies.checkSubNouns(subNouns)

        // Open Inventories
        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.LaboratoryInformation.StabilityStudies.Inventories.openLandingPage();

        //Link Sibiling Item
        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.LaboratoryInformation.StabilityStudies.Inventories.linkSiblingItem(0);

        //Unlink
        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.LaboratoryInformation.StabilityStudies.Inventories.unlinkSibling(0);

        // Logout
        GQ.logout()

    })
    it('Inventories - Product Specific Binder Linked Content', () => {
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

        GQ.Planets.Product.ProductFamilies.ProductFamily.clickProductSpecificBinder('MSAT Product View - Cypress Test Product Specific Binder')


        cy.wait(5000)

        //Open Linked Content
        GQ.Planets.Product.ProductFamilies.ProductFamily.openLinkedContent()

        GQ.Planets.Product.ProductFamilies.ProductFamily.closeSideBar()

        // Open Laboratory Information
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.LaboratoryInformation.openLandingPage();

        // Open Stability Studies record
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.LaboratoryInformation.StabilityStudies.openLandingPage()

        let subNouns = [
            'Stability Studies',
            'Forecasts',
            'Inventories'
        ]

        //Check Sub nouns data availablity
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.LaboratoryInformation.StabilityStudies.checkSubNouns(subNouns)

        // Open Inventories
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.LaboratoryInformation.StabilityStudies.Inventories.openLandingPage();

        //Link Sibiling Item
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.LaboratoryInformation.StabilityStudies.Inventories.linkSiblingItem(0);

        //Unlink
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.LaboratoryInformation.StabilityStudies.Inventories.unlinkSibling(0);

        // Logout
        GQ.logout()

    })
})