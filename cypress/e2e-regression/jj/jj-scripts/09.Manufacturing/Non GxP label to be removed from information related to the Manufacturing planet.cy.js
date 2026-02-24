import { GQTest } from '../../jj-pages/GQTest'
describe('Allows "(Non GxP)" label to be removed from information related to the Manufacturing planet', () => {
    const GQ = new GQTest();

    it('Planet and Product Family', () => {

        // Login
        GQ.login()

        //Open Manufacturing Planet
        GQ.Planets.Manufacturing.openLandingPage()

        cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/gridBar/menuPlanetsButton/').contains('Manufacturing').should('be.visible')



        // Open Product Planet
        GQ.Planets.Product.openLandingPage()

        // Product Families must be visible
        cy.getSC(GQ.Planets.Product.ProductFamilies.locator).should('be.visible')

        // Products must be visible
        cy.getSC(GQ.Planets.Product.Products.locator).should('be.visible')

        // Large Molecules must be visible
        cy.getSC(GQ.Planets.Product.LargeMolecules.locator).should('be.visible')

        // Small Molecules must be visible
        cy.getSC(GQ.Planets.Product.SmallMolecules.locator).should('be.visible')


        // Open Product Family Dropdown
        cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/gridBar/menuPlanetsButton/icon')
        .click()

        //Check Manufacturing
        cy.contains('Manufacturing')
        .filter((index, element) => element.textContent.trim() === 'Manufacturing')
        .should('be.visible')

        GQ.Planets.Product.ProductFamilies.openLandingPage();

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        // Product Record
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')

        //Check Manufacturing
        cy.contains('Manufacturing')
        .filter((index, element) => element.textContent.trim() === 'Manufacturing')
        .should('be.visible').click();

        cy.contains('Batch Flows').click()

        // Check Non GXP is available in APR/PQR

        cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Content||scClass=VLayout||index=0||length=8||classIndex=0||classLength=1||scClassIndex=0||scClassLength=8]/component/member[Class=QScreen_Product_Family__Product_Con||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/member[Class=QScreen_Content_Layout||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Manufacturing||scClass=VLayout||index=6||length=8||classIndex=0||classLength=1||scClassIndex=6||scClassLength=8]/body/layoutBody/member[Class=QScreen_Batch_Flows||scClass=VLayout||index=2||length=4||classIndex=0||classLength=1||scClassIndex=2||scClassLength=4]/body/layoutBody/member[Class=QScreen_Filtered_46||scClass=VLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=3]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Filtered_Content_Selector_with||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=1||length=2||classIndex=1||classLength=2||roleIndex=1||roleLength=2||title=APR%24fs%24PQR%20(Non%20GxP)||scRole=button]/').contains('(Non GxP)').should('be.visible')

        // Logout
        GQ.logout()

    })
    it('Admin Data Binder', () => {

        // Login 
        GQ.login()

        // Open Product Planet
        GQ.Planets.Product.openLandingPage()

        // Product Families must be visible
        cy.getSC(GQ.Planets.Product.ProductFamilies.locator).should('be.visible')

        // Products must be visible
        cy.getSC(GQ.Planets.Product.Products.locator).should('be.visible')

        // Large Molecules must be visible
        cy.getSC(GQ.Planets.Product.LargeMolecules.locator).should('be.visible')

        // Small Molecules must be visible
        cy.getSC(GQ.Planets.Product.SmallMolecules.locator).should('be.visible')

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        // Open APALUTAMIDE
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')

        // Refresh
        GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector()

        // Select the Admin Data binder
        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test Admin Binder')

        //Samrt Content

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.open()

        //Check Manufacturing
        cy.contains('Manufacturing')
        .filter((index, element) => element.textContent.trim() === 'Manufacturing')
        .should('be.visible');


        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.open()

        //Check Manufacturing
        cy.contains('Manufacturing')
        .filter((index, element) => element.textContent.trim() === 'Manufacturing')
        .should('exist');
 
        // Logout
        GQ.logout()

    })
    it('Product Specific Data Binder', () => {

        // Login 
        GQ.login()

        // Open Product Planet
        GQ.Planets.Product.openLandingPage()

        // Product Families must be visible
        cy.getSC(GQ.Planets.Product.ProductFamilies.locator).should('be.visible')

        // Products must be visible
        cy.getSC(GQ.Planets.Product.Products.locator).should('be.visible')

        // Large Molecules must be visible
        cy.getSC(GQ.Planets.Product.LargeMolecules.locator).should('be.visible')

        // Small Molecules must be visible
        cy.getSC(GQ.Planets.Product.SmallMolecules.locator).should('be.visible')

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        // Open APALUTAMIDE
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')

        // Refresh
        GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector()

        // Select the Admin Data binder
        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test Admin Binder')

        // Open Product Specific Binder
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.openlandingpage();
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.Name('Test');
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.dropdown();
        // Check Manufacturing
        cy.contains('Manufacturing')
        .filter((index, element) => element.textContent.trim() === 'Manufacturing')
        .should('exist');

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.selectall()
        // Click Plus
        GQ.Planets.Product.ProductFamilies.ProductFamily.clickPlusIcon('MSAT Product View - Cypress Test Admin Binder')
    
        // Click Child
        GQ.Planets.Product.ProductFamilies.ProductFamily.clickChild('MSAT Product View - Cypress Test Admin Binder')


        //Smart Content
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.smartcontent.open();

        // Check Manufacturing
        cy.contains('Manufacturing')
        .filter((index, element) => element.textContent.trim() === 'Manufacturing')
        .should('exist');

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.linkedcontent.openlandingpage();

        // Check Manufacturing
        cy.contains('Manufacturing')
        .filter((index, element) => element.textContent.trim() === 'Manufacturing')
        .should('exist');
 
        // Logout
        GQ.logout()

    })
    it('User Data Binder', () => {

         // Login 
        GQ.login()

        // Open Product Planet
        GQ.Planets.Product.openLandingPage()

        // Product Families must be visible
        cy.getSC(GQ.Planets.Product.ProductFamilies.locator).should('be.visible')

        // Products must be visible
        cy.getSC(GQ.Planets.Product.Products.locator).should('be.visible')

        // Large Molecules must be visible
        cy.getSC(GQ.Planets.Product.LargeMolecules.locator).should('be.visible')

        // Small Molecules must be visible
        cy.getSC(GQ.Planets.Product.SmallMolecules.locator).should('be.visible')

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        // Open APALUTAMIDE
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')

        // Refresh
        GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector()

        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test User Binder')

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.open()

        //Check Manufacturing
        cy.contains('Manufacturing')
        .filter((index, element) => element.textContent.trim() === 'Manufacturing')
        .should('be.visible');


        //Open Linked Content
        GQ.Planets.Product.ProductFamilies.ProductFamily.openLinkedContent()

        //Check Manufacturing
        cy.contains('Manufacturing')
        .filter((index, element) => element.textContent.trim() === 'Manufacturing')
        .should('exist');


        // Click Home
        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.Home.open();

        //Click the dropdown of Data Types to Show
        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.Home.openDropdown();

        //Check Manufacturing
        cy.contains('Manufacturing')
        .filter((index, element) => element.textContent.trim() === 'Manufacturing')
        .should('exist');

        //Click the dropdown of Data Types to Show
        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.Home.openDropdown();
   
        // Logout
        GQ.logout()

    })
    it('Admin Data Binder & User Data Binder in Data Managemanet', () => {

         // Login
        GQ.login();

        // Navigate to the Landing Page
        GQ.NavBar.ElementLibrary.openLandingPage();

        // Navigate to Data Management
        GQ.NavBar.ElementLibrary.DataManagement.open();

        // Open Admin Data Binder
        GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.open();

        // Search for the created item (TESTING FOR ADMIN DATA)
        GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.selectRowByText('Admin Data Binder Test');
        // GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.clickPullBack();
        // GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.clickHamburger();
        // GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.clickCheckOut();
        GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.dropdown.openLandingPage();

        //Check Manufacturing
        cy.contains('Manufacturing')
        .filter((index, element) => element.textContent.trim() === 'Manufacturing')
        .should('exist');

        GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.dropdown.openLandingPage();


        // Open User Data Binder
        GQ.NavBar.ElementLibrary.DataManagement.UserDataBinder.open()

        // Search for the created item (TESTING FOR USER DATA)


        GQ.NavBar.ElementLibrary.DataManagement.UserDataBinder.open();
        GQ.NavBar.ElementLibrary.DataManagement.UserDataBinder.toggleSelector();
        GQ.NavBar.ElementLibrary.DataManagement.UserDataBinder.selectRowByText('MSAT Product View - Cypress Test');

        // Dropdown interactions
        GQ.NavBar.ElementLibrary.DataManagement.UserDataBinder.dropdown.openLandingPage();

        //Check Manufacturing
        cy.contains('Manufacturing')
        .filter((index, element) => element.textContent.trim() === 'Manufacturing')
        .should('exist');

        GQ.NavBar.ElementLibrary.DataManagement.UserDataBinder.dropdown.openLandingPage();
   
        // Logout
        GQ.logout()

    })
})