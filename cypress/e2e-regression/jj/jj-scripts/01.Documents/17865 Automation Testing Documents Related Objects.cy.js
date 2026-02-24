import { GQTest } from '../../jj-pages/GQTest'
require('cypress-xpath')
describe('17865 Automation Testing Documents Related Objects.cy', () => {
        const GQ = new GQTest();
        it('17865 Automation Testing Documents Related Objects.cy', () => {

                // Login
                GQ.login()

                // Navigate to the Documents planet
                GQ.Planets.Documents.openLandingPage()
                // Click Documents tab
                GQ.Planets.Documents.Documents.openLandingPage()

                GQ.Planets.Documents.Documents.expandRecord(0)

                GQ.Planets.Documents.Documents.DocumentRelatedObjectOpen()

                cy.wait(10000)

                GQ.Planets.Documents.Documents.DocumentValidation()

                GQ.Planets.Documents.Documents.MaterialValidation()

                GQ.Planets.Documents.Documents.ChangeControlsValidation()

                GQ.Planets.Documents.Documents.NonconformanceValidation()

                GQ.Planets.Documents.Documents.CAPAsVaildation()
                GQ.logout()

        })

        it('Product family', () => {

                GQ.login()

                GQ.Planets.Product.openLandingPage()

                // Open product family 
                GQ.Planets.Product.ProductFamilies.openLandingPage()

                //Toggle Filter
                GQ.Planets.Product.ProductFamilies.toggleFilter()

                //Open APALUTAMIDE        
                GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')

                // Refresh
                GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector()

                GQ.Planets.Product.ProductFamilies.ProductFamily.AllFilterOption()

                cy.wait(4000)

                GQ.Planets.Documents.Documents.OpenFirstRecord()

                GQ.Planets.Documents.Documents.RelatedObjectsOpen()

                GQ.Planets.Documents.Documents.DocumentRelatedObjectValidation()

                GQ.Planets.Documents.Documents.mateialRelatedObjectValidation()

                GQ.Planets.Documents.Documents.ChangeControlRelatedObjectValidation()

                GQ.Planets.Documents.Documents.NonconformanceRelatedObjectValidation()

                GQ.Planets.Documents.Documents.CAPARelatedObjectValidation()

                GQ.logout()

        })

        it('user data binder', () => {

                GQ.login()

                GQ.Planets.Product.openLandingPage()
                // Open product family 
                GQ.Planets.Product.ProductFamilies.openLandingPage()
                //Toggle Filter
                GQ.Planets.Product.ProductFamilies.toggleFilter()

                //Open APALUTAMIDE        
                GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')

                // Select the Admin binder -Smart Content
                GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test User Data Binder')
                cy.wait(3000)

                // //cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Smart_Content||scClass=VLayout||index=0||length=7||classIndex=0||classLength=1||scClassIndex=0||scClassLength=7]/component/member[Class=QScreen_Data_Binder_Smart_Content_La||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=1||length=9||classIndex=1||classLength=9||roleIndex=1||roleLength=9||title=Documents||scRole=button]/').click()
                GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.open()
                cy.wait(2000)
                GQ.Planets.Documents.Documents.AllFilterOpen()
                cy.wait(2000)
                GQ.Planets.Documents.Documents.UserBinderOpenFirstRecords()

                GQ.Planets.Documents.Documents.UserBinderRelatedObjectOpen()
                cy.wait(2000)
                GQ.Planets.Documents.Documents.UserBinderDocumentRelatedObjectValidation()

                GQ.Planets.Documents.Documents.UserBindermateialRelatedObjectValidation()

                GQ.Planets.Documents.Documents.UserBinderChangeControlRelatedObjectValidation()

                GQ.Planets.Documents.Documents.UserBinderNonconformanceRelatedObjectValidation()

                GQ.Planets.Documents.Documents.UserBinderCAPARelatedObjectValidation()

                GQ.logout()
        })

        it('user data binder linked content ', () => {

                GQ.login()


                GQ.Planets.Product.openLandingPage()

                // Open product family 
                GQ.Planets.Product.ProductFamilies.openLandingPage()

                //Toggle Filter
                GQ.Planets.Product.ProductFamilies.toggleFilter()

                //Open APALUTAMIDE        
                GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')

                // Select the Admin binder -Smart Content
                GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test User Data Binder')

                cy.wait(3000)
            //    GQ.Planets.Product.ProductFamilies.ProductFamily.UserBinderProduct()
                // Linked Content
                GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.open()
                GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.LinkedRecordopen()

                GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.LinkedRelatedObject()


                GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.DocumentRelatedObjectValidation()

                GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.mateialRelatedObjectValidation()

                GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.ChangeControlRelatedObjectValidation()

                GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.NonconformanceRelatedObjectValidation()

                GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.CAPARelatedObjectValidation()


                GQ.logout()

        })

        it('the Admin Binder', () => {

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

                GQ.Planets.Product.ProductFamilies.ProductFamily.AdminBinderProductOpen()
                cy.wait(10000)
                GQ.Planets.Product.ProductFamilies.ProductFamily.AdminBinderAllClick()

                GQ.Planets.Product.ProductFamilies.ProductFamily.AdminBinderOpenRecord()

                GQ.Planets.Product.ProductFamilies.ProductFamily.AdminBinderRelatedObject()

                GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.AdminSmartDocumentRelatedObjectValidation()

                GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.AdminSmartMateialRelatedObjectValidation()

                GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.AdminSmartChangeControlRelatedObjectValidation()

                GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.AdminSmartNonconformanceRelatedObjectValidation()

                GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.AdminSmartCAPARelatedObjectValidation()

                GQ.logout()
        })

        it('the Admin Binder linked content ', () => {

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

                GQ.Planets.Product.ProductFamilies.ProductFamily.AdminBinderProductOpen()

                GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.open()

                GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.linkSibling(1)

                GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.AdminLinkedOpenrecord()

                GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.AdminLinkedRelatedObject()

                GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.AdminLinkedRelatedObjectDocumentValidation()

                GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.AdminLinkedRelatedObjectMaterialValidation()

                GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.AdminLinkedChangeControlRelatedObjectValidation()

                GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.AdminLinkedNonconformanceRelatedObjectValidation()

                GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.AdminLinkedCAPARelatedObjectValidation()


                GQ.logout()


        })

        it('product specific ', () => {
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

                GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.documents.ProductBinderRelatedObject()

                GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.documents.ProductBinderSmartDocumentValidation()

                GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.documents.ProductBinderSmartMateiralValidation()

                GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.documents.ProductBinderSmartChangeControlValidation()

                GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.documents.ProductBinderSmartNonconformanceValidation()

                GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.documents.ProductBinderSmartCAPAValidation()
                
                GQ.logout()


        })

        it('product specific linked content ', () => {
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

                //   cy.wait(2000)
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
                //GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.open()
                GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.linkSibling(1)

                cy.wait(3000)
                GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.AdminLinkedOpenrecord()
                GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.ProductBinderLinkedRelatedObject()


                GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.ProductBinderLinkedDocumentValidation()
                GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.ProductBinderLinkedMaterialValidation()
                GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.ProductBinderLinkedChangeControlsValidation()
                GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.ProductBinderLinkedNonConformanceValidation()
                GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.ProductBinderLinkedCAPAValidation()

                GQ.logout()


        })
})
