import { GQTest } from '../../jj-pages/GQTest'
describe('05. Laboratory Information', () => {



        it('Allows default view of Release Data - Linked Content Admin Binder', () => {

                const GQ = new GQTest();
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

                //Open Linked Content
                GQ.Planets.Product.ProductFamilies.ProductFamily.openLinkedContent()

                GQ.Planets.Product.ProductFamilies.ProductFamily.closeSideBar()

                GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.open()

                GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.ReleaseData.open()

                //Link Data
                GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.ReleaseData.linkSibling(0)
                GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.open()


        })
        it('Allows default view of Release Data - Linked Content User Binder', () => {

                const GQ = new GQTest();
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

                //Open Linked Content
                GQ.Planets.Product.ProductFamilies.ProductFamily.openLinkedContent()

                GQ.Planets.Product.ProductFamilies.ProductFamily.closeSideBar()

                GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.open()

                //Release Data
                cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Linked_Content||scClass=VLayout||index=2||length=7||classIndex=0||classLength=1||scClassIndex=2||scClassLength=7]/body/layoutBody/member[Class=QScreen_Laboratory_Information_2||scClass=VLayout||index=6||length=9||classIndex=0||classLength=1||scClassIndex=6||scClassLength=9]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=2||length=4||classIndex=2||classLength=4||roleIndex=2||roleLength=4||title=Release%20Data||scRole=button]/').click()

                //Link Sibiling
                GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.ReleaseData.linkSiblingItem(0)
                GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.open()


        })
        it('Allows default view of Release Data - Linked Content Product Specific Binder', () => {

                const GQ = new GQTest();
                // Login
                GQ.login();

                GQ.Planets.Product.openLandingPage()

                // Product Families
                GQ.Planets.Product.ProductFamilies.openLandingPage()

                // Toggle Filter
                GQ.Planets.Product.ProductFamilies.toggleFilter()

                // Open APALUTAMIDE
                GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE');

                // Refresh and select the linked binder
                GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector();

                GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test Admin Binder');
                // Open Product Specific Binder
                GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.openlandingpage();
                GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.Name('Test');
                GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.dropdown();
                GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.selectall()
                // Click Plus
                GQ.Planets.Product.ProductFamilies.ProductFamily.clickPlusIcon('MSAT Product View - Cypress Test Admin Binder')

                // Click Child
                GQ.Planets.Product.ProductFamilies.ProductFamily.clickChild('MSAT Product View - Cypress Test Admin Binder')

                //Open Linked Content
                GQ.Planets.Product.ProductFamilies.ProductFamily.openLinkedContent()

                GQ.Planets.Product.ProductFamilies.ProductFamily.closeSideBar()

                GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.open()

                //Release Data
                cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Linked_Content||scClass=VLayout||index=2||length=7||classIndex=0||classLength=1||scClassIndex=2||scClassLength=7]/body/layoutBody/member[Class=QScreen_Laboratory_Information_2||scClass=VLayout||index=6||length=9||classIndex=0||classLength=1||scClassIndex=6||scClassLength=9]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=2||length=4||classIndex=2||classLength=4||roleIndex=2||roleLength=4||title=Release%20Data||scRole=button]/').click()

                //Link Sibiling
                GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.ReleaseData.linkSiblingItem(0)
                GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.LaboratoryInformation.open()

        })

})