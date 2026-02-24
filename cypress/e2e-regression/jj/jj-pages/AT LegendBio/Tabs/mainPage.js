export class mainPage {

    clickAndGetTabText(tabName) {
        return cy.xpath(`//*[text()='${tabName}']/parent::*`, { timeout: 12000 }).first()
            .should('be.visible')
            .click()
            .invoke('text');
    }

    getDocumentTabValidation() {
        return this.clickAndGetTabText('Documents');
    }

    getQualityManagementTabValidation() {
        return this.clickAndGetTabText('Quality Management');
    }

    getLaboratoryInformationTabValidation() {
        return this.clickAndGetTabText('Laboratory Information');
    }

    getManufacturingTabValidation() {
        return this.clickAndGetTabText('Manufacturing');
    }

    HamburgerMenu() {

        return this.HamburgerButton("//img[@name='isc_Imain']")
    }

    getHamburgerMenuOptionsValidation(expectedOptions) {
        cy.getSC('//QMainPageBase[ID="MainPage"]/mainHeader/userMenu/').click();
        cy.contains('About', { timeout: 12000 }).should('be.visible');
        expectedOptions.forEach(option => {
            cy.contains(option).should('be.visible');
        });
    }

    validateOnlyRefreshIconVisible() {
        cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_AT_LegendBio||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_AT_LegendBio_Product_Family__2||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_AT_LegendBio_Product_Family__3||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/gridBar/refreshButton/icon').should('be.visible')
    }

    getProductFamilyAccessRoles() {
        return cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_AT_LegendBio||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_AT_LegendBio_Product_Family_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_AT_LegendBio_Product_Family__1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/body/').then($el => {
            return $el.text().split('\n').map(text => text.trim()).filter(text => text.length > 0);
        });
    }

    ValidateHumberNotDisplayedInMainHeader() {

        return cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=VLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=2||classIndex=0||classLength=1||scClassIndex=0||scClassLength=2]/member[Class=QScreen_Base_Main_Page_Simple_Head||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QLabelContextMenu||scClass=Label||index=1||length=2||classIndex=0||classLength=1||scClassIndex=1||scClassLength=2]/')
            .should('not.exist')
    }

    ValidateBookMarkNotDisplayedInMainHeader() {

        return cy.getSC('//Menu[level=0]/body/row[icon=https%3A%24fs%24%24fs%24im360pre-qa.jnj.com%24fs%24globalq%24fs%24images%24fs%24icons%24fs%24bfd97618-7272-4478-bfdf-30a3a4d8c9ae.png||itemName=Add%20Bookmark||0]/col[fieldName=itemName||1]')
            .should('not.exist')
    }

    ContentTabValidation() {
        return cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_AT_LegendBio||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_AT_LegendBio_Product_Family_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_AT_LegendBio_Product_Family__2||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=0||length=1||classIndex=0||classLength=1||roleIndex=0||roleLength=1||title=Content||scRole=button]/')
            .invoke('text')
    }

    SampleRecordsSectionMinimize() {

        cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_AT_LegendBio||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_AT_LegendBio_Product_Family_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/selectorButton/closeButton/icon').click();
    }

    ProductFamilymaximizeandMinimizeArrow() {
        cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_AT_LegendBio||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Item_Repository_AT_LegendBio_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/body/row[oid=0195616e-8df4-7626-87a1-137757082625||itemName=ciltacabtagene%20autoleucel||0]/col[fieldName=%2472v||0]/valueicon').click();

    }

    PlanetHomeIcon() {
        cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/gridBar/relatedPlanetsButton/icon').click();
    }

    ChildProductVisbilityValidation() {
        cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_AT_LegendBio||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_AT_LegendBio_Product_Family__2||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_AT_LegendBio_Product_Family__3||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/body/row[oid=0198572e-6fed-753e-bc26-3724d6cc7e40||itemName=CAR-T%20Cell%20Drug%20Product||1]/col[fieldName=itemName||0]').should('be.visible')
    }

    ChildProductNotVisbilityValidation() {
        cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_AT_LegendBio||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_AT_LegendBio_Product_Family__2||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_AT_LegendBio_Product_Family__3||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/body/row[oid=0198572e-6fed-753e-bc26-3724d6cc7e40||itemName=CAR-T%20Cell%20Drug%20Product||1]/col[fieldName=itemName||0]').should('not.be.visible')
    }

    ProductFamilyMinimize() {
        cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_AT_LegendBio||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/selectorButton/openButton/icon').click();
    }

}


