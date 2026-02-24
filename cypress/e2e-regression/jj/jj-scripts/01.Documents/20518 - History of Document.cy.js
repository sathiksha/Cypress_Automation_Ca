import { GQTest } from '../../jj-pages/GQTest'

describe('20518-Allows version history of Documents', () => {
    const GQ = new GQTest();
    it('Documents planet > Documents', () => {
        // Login
        GQ.login()
        // Navigate to the Documents planet
        GQ.Planets.Documents.openLandingPage()
        GQ.Planets.Documents.expandrecord.openLandingPage('0')

        //Navigate to the Details Tab
        GQ.Planets.Documents.expandrecord.DetailsTab()
        GQ.Planets.Documents.Details.DocumentsInformationValidation()
        GQ.Planets.Documents.Details.ComboValidation()
        GQ.Planets.Documents.Details.FileValidation()
        GQ.Planets.Documents.Details.ImpactValidation()
        GQ.Planets.Documents.Details.LifecycleValidation()
        GQ.Planets.Documents.Details.OwnerValidation()
        GQ.Planets.Documents.Details.ProductInformationValidation()
        GQ.Planets.Documents.Details.DocumentRevisionHistoryValidation()

        //  Document Revision History
        GQ.Planets.Documents.DocumentRevisionHistory.DocumentRevisionHistory()
        GQ.Planets.Documents.DocumentRevisionHistory.RefreshIconValidation()
        GQ.Planets.Documents.DocumentRevisionHistory.FilterIconValidation()
        GQ.Planets.Documents.DocumentRevisionHistory.PrintIconValidation()

        cy.addColumn(GQ.Planets.Documents.DocumentRevisionHistory.headerID(), ['Number'])
        cy.addColumn(GQ.Planets.Documents.DocumentRevisionHistory.headerID(), ['Document Type'])
        GQ.logout()
    })

    it('Product planet > Product Family/Product selection > Admin Data Binder > Smart Content > Documents > Documents', () => {
        // Login
        GQ.login()

        // Open Product Planet
        GQ.Planets.Product.openLandingPage();

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter();

        // Open APALUTAMIDE
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE');

        // Refresh and select the linked binder
        GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector();

        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test Admin Binder');

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminBinderProductOpen()
        cy.wait(10000)
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminBinderAllClick()
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminBinderOpenRecord()


        //Navigate to the Details Tab

        GQ.Planets.Documents.AdminSmartDetails.AdminSmartDetailTab()


        GQ.Planets.Documents.AdminSmartDetails.DocumentsInformationValidation()
        GQ.Planets.Documents.AdminSmartDetails.ComboValidation()
        GQ.Planets.Documents.AdminSmartDetails.FileValidation()
        GQ.Planets.Documents.AdminSmartDetails.ImpactValidation()
        GQ.Planets.Documents.AdminSmartDetails.LifecycleValidation()
        GQ.Planets.Documents.AdminSmartDetails.OwnerValidation()
        GQ.Planets.Documents.AdminSmartDetails.ProductInformationValidation()
        GQ.Planets.Documents.AdminSmartDetails.DocumentRevisionHistoryValidation()

        //  Document Revision History
        GQ.Planets.Documents.AdminSmartDetails.DocumentRevisionHistory()
        GQ.Planets.Documents.AdminSmartDetails.RefreshIconValidation()
        GQ.Planets.Documents.AdminSmartDetails.FilterIconValidation()
        GQ.Planets.Documents.AdminSmartDetails.DowloadIconValidation()
        GQ.Planets.Documents.AdminSmartDetails.PrintIconValidation()


        cy.addColumn(GQ.Planets.Documents.AdminSmartDetails.headerID(), ['Number'])
        cy.addColumn(GQ.Planets.Documents.AdminSmartDetails.headerID(), ['Document Type'])
        GQ.logout()
    })

    it('Product planet > Product Family/Product selection > Admin Data Binder > Linked Content > Documents > Documents', () => {
        // Login
        GQ.login()

        // Open Product Planet
        GQ.Planets.Product.openLandingPage();

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter();

        // Open APALUTAMIDE
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE');

        // Refresh and select the linked binder
        GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector();

        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test Admin Binder');

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminBinderProductOpen()
        cy.wait(3000)
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.linkSibling(1)
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.AdminLinkedOpenrecord()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.DetailsTab()

        //Navigate to the Details Tab
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.DocumentsInformationValidation()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.ComboValidation()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.FileValidation()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.ImpactValidation()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.LifecycleValidation()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.OwnerValidation()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.ProductInformationValidation
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.DocumentRevisionHistoryValidation()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.DocumentRevisionHistory()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.RefreshIconValidation()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.FilterIconValidation()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.DowloadIconValidation()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.PrintIconValidation()

        cy.addColumn(GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.headerID(), ['Number'])
        cy.addColumn(GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.headerID(), ['Document Type'])
        GQ.logout()
    })

    it('Product planet > Product Family/Product selection > User Data Binder > Smart Content > Documents > Documents', () => {
        // Login
        GQ.login()

        // Open Product Planet
        GQ.Planets.Product.openLandingPage();

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter();

        // Open APALUTAMIDE
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE');

        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test')
        cy.wait(3000)
        GQ.Planets.Product.ProductFamilies.ProductFamily.UserBinderProduct()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.open()
        cy.wait(2000)
        GQ.Planets.Documents.Documents.AllFilterOpen()
        cy.wait(2000)
        GQ.Planets.Documents.Documents.UserBinderOpenFirstRecords()
        //Navigate to the Details Tab
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.Document.DetailsTab()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.Document.DocumentsInformationValidation()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.Document.ComboValidation()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.Document.FileValidation()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.Document.ImpactValidation()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.Document.LifecycleValidation()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.Document.OwnerValidation()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.Document.ProductInformationValidation()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.Document.DocumentRevisionHistoryValidation()

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.Document.DocumentRevisionHistory()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.Document.RefreshIconValidation()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.Document.FilterIconValidation()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.Document.DowloadIconValidation()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.Document.PrintIconValidation()

        cy.addColumn(GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.Document.headerID(), ['Number'])
        cy.addColumn(GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.Document.headerID(), ['Document Type'])
        GQ.logout()
    })

    it('Product planet > Product Family/Product selection > User Data Binder > Linked Content > Documents > Documents', () => {
        // Login
        GQ.login()

        // Open Product Planet
        GQ.Planets.Product.openLandingPage();

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter();

        // Open APALUTAMIDE
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE');

        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test')
        cy.wait(3000)
        GQ.Planets.Product.ProductFamilies.ProductFamily.UserBinderProduct()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.linkSibling(1)
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.UserLinkedOpenRecord()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.UserLinkedDetailsTab()

        //Navigate to the Details Tab
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.DocumentsInformationValidation()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.ComboValidation()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.FileValidation()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.ImpactValidation()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.LifecycleValidation()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.OwnerValidation()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.ProductInformationValidation
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.DocumentRevisionHistoryValidation()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.DocumentRevisionHistory()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.RefreshIconValidation()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.FilterIconValidation()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.DowloadIconValidation()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.PrintIconValidation()

        cy.addColumn(GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.headerID(), ['Number'])
        cy.addColumn(GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.headerID(), ['Document Type'])
        GQ.logout()
    })

    it('Product planet > Product Family/Product selection > Product Specific Binder > Smart Content > Documents > Documents', () => {
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
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminBinderProductOpen()

        cy.wait(2000)
        // Open Product Specific Binder
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.openlandingpage();
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.Name('Test');
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.dropdown();
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.selectqualitymanagement();
        // Click Plus
        GQ.Planets.Product.ProductFamilies.ProductFamily.clickPlusIcon('MSAT Product View - Cypress Test Admin Binder')

        // Click Child
        GQ.Planets.Product.ProductFamilies.ProductFamily.clickChild('MSAT Product View - Cypress Test Admin Binder')

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.documents.ProductBinderAllFilterOption()
        cy.wait(3000)
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.documents.ProductBinderRecordOpen()


        //Navigate to the Details Tab
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.Document.DetailsTab()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.Document.DocumentsInformationValidation()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.Document.ComboValidation()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.Document.FileValidation()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.Document.ImpactValidation()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.Document.LifecycleValidation()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.Document.OwnerValidation()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.Document.ProductInformationValidation()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.Document.DocumentRevisionHistoryValidation()

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.Document.DocumentRevisionHistory()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.Document.RefreshIconValidation()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.Document.FilterIconValidation()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.Document.DowloadIconValidation()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.Document.PrintIconValidation()

        cy.addColumn(GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.Document.headerID(), ['Number'])
        cy.addColumn(GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.Document.headerID(), ['Document Type'])
        GQ.logout()
    })

    it('Product planet > Product Family/Product selection > Product Specific Binder > Linked Content > Documents > Documents', () => {
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
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminBinderProductOpen()

        cy.wait(2000)
        // Open Product Specific Binder
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.openlandingpage();
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.Name('Test');
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.dropdown();
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.selectqualitymanagement();
        // Click Plus
        GQ.Planets.Product.ProductFamilies.ProductFamily.clickPlusIcon('MSAT Product View - Cypress Test Admin Binder')
        // Click Child
        GQ.Planets.Product.ProductFamilies.ProductFamily.clickChild('MSAT Product View - Cypress Test Admin Binder')

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.ProductBinderLinkedOpen()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.linkSibling(1)
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.documents.ProductLinkedRecordsOpen()

        //Navigate to the Details Tab
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.UserLinkedDetailsTab()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.DocumentsInformationValidation()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.ComboValidation()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.FileValidation()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.ImpactValidation()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.LifecycleValidation()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.OwnerValidation()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.ProductInformationValidation
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.DocumentRevisionHistoryValidation()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.DocumentRevisionHistory()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.RefreshIconValidation()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.FilterIconValidation()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.DowloadIconValidation()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.PrintIconValidation()

        cy.addColumn(GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.headerID(), ['Number'])
        cy.addColumn(GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.headerID(), ['Document Type'])
        GQ.logout()
    })

})