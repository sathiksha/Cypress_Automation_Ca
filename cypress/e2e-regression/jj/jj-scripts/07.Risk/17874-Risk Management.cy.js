import { GQTest } from "../../jj-pages/GQTest";

const GQ = new GQTest();

describe('Automation Testing: Risk Management', () => {

    it('Automation Testing: Risk Management', () => {
        GQ.login();
        GQ.Planets.Risk.openLandingPage();

        GQ.Planets.Risk.predefinedfilter()

        GQ.Planets.Risk.expandrow(2)

        let expectedColumnsQXD = [
            'Product',
            'Trade Name',
            'Formulations',
            'Product Family',
            'Number',
            'Type',
            'Therapeutic Area',
            'Stage',
            'State'
        ];
        cy.getColumnsAndTypes(
            GQ.Planets.Risk.columnHeaderID()
        )
            .then(tableInfo => {
                let availableCols = []
                tableInfo.columns.map((obj) => {
                    availableCols.push(obj.textContent)
                })
                cy.log(availableCols)
                for (let i = 0; i < expectedColumnsQXD.length; i++) {
                    expect(availableCols).to.include(expectedColumnsQXD[i])
                }
            })

        // Verify Multichoice picker
        const namesList = ['Type', 'Therapeutic Area', 'Stage', 'State']
        GQ.Planets.Risk.checkMultiChoicePickerColumns(namesList)

        GQ.logout();
    });

    it('Automation Testing: Risk Management', () => {
        GQ.login();

        GQ.Planets.Product.openLandingPage();

        GQ.Planets.Product.ProductFamilies.openLandingPage();

        GQ.Planets.Product.ProductFamilies.toggleFilter();

        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE');

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.open();
        
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.riskdocument.openLandingPage();

        GQ.logout();
    });

    it('the Admin Binder & user Binder', () => {
        GQ.login();

        GQ.NavBar.ElementLibrary.openLandingPage();

        GQ.NavBar.ElementLibrary.DataManagement.open();

        GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.open();

        GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.createNewAdminDataBinder();

        GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.refreshSelector();

        GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.selectRecordByIndex(0);

        GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.Home.setName('Parent-Cypress');

        GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.Home.toggleFilter();

        GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.Home.Risk();

        GQ.NavBar.ElementLibrary.DataManagement.UserDataBinder.open();

        GQ.NavBar.ElementLibrary.DataManagement.UserDataBinder.createNewBinderIcon();

        GQ.NavBar.ElementLibrary.DataManagement.UserDataBinder.refreshSelector();

        GQ.NavBar.ElementLibrary.DataManagement.UserDataBinder.selectRecordByIndex(0);

        GQ.NavBar.ElementLibrary.DataManagement.UserDataBinder.Multichoicepicker();

        GQ.NavBar.ElementLibrary.DataManagement.UserDataBinder.selectallbutton();

        GQ.NavBar.ElementLibrary.DataManagement.UserDataBinder.smartcontent();

        cy.wait(1000);

        GQ.logout();


    })

    it('Product planet > Product Family/Product selection > Admin Data Binders > Product Specific Binders ', () => {
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
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE-A');

        // Refresh and select the linked binder
        GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector();

        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test Admin Binder');

        // Open Product Specific Binder
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.openlandingpage();

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.Name('Test');

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.dropdown();

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.Risk();

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.dropdown();

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.clickok();

        GQ.Planets.Product.ProductFamilies.ProductFamily.clickPlusIcon('MSAT Product View - Cypress Test Admin Binder')

        // Click Child
        GQ.Planets.Product.ProductFamilies.ProductFamily.clickChild('MSAT Product View - Cypress Test Admin Binder')

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.SmartContent.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.SmartContent.riskdoc()

        GQ.logout()
    })
})