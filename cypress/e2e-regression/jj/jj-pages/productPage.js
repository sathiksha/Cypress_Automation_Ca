class productPage {

    getBlueTabOf(tabName) {
        return cy.get('td[class="multiLayoutButtonTab"]').contains(tabName).should('be.visible').click()
    }
    getsubTabOf(subTabName) {
        return cy.get('td.multiLayoutButtonText').contains(subTabName).should('be.visible')
    }
    getNonconformancesubTabOf(subTabName) {
        return cy.get('td.multiLayoutButtonText:visible').contains(subTabName).should('be.visible')
    }
    getNonconformancesubTabof(subTabName){
        return cy.contains(subTabName).should('be.visible')
    }
    getCAPAsubTabOf(subTabName) {
        return cy.get('td.multiLayoutButtonText:visible').contains(subTabName).should('be.visible')
    }
    getCAPAsubTabof(subTabName){
        return cy.getSC(subTabName).should('be.visible')
    }
    getAuditsubTabOf(subTabName) {
        return cy.get('td.multiLayoutButtonText').contains(subTabName).should('be.visible')
    }
    checkDefaultSubTabIsSelectedAs(defaultsubTab) {
        return cy.get('td[class="multiLayoutButtonNoLeftBorderTextSelected"]').contains(defaultsubTab).should('be.visible')
       
    }
    checkDefaultNonconformancesSubTabIsSelectedAs(defaultsubTab) {
         return cy.get('td[class="multiLayoutButtonNoLeftBorderTextSelected"]').contains(defaultsubTab).should('be.visible')
    }
    checkDefaultCAPASubTabIsSelectedAs(defaultsubTab) {
         return cy.get('td[class="multiLayoutButtonNoLeftBorderTextSelected"]').contains(defaultsubTab).should('be.visible')
    }
    checkDefaultAuditsSubTabIsSelectedAs(defaultsubTab) {
         return cy.get('td[class="multiLayoutButtonNoLeftBorderTextSelected"]').contains(defaultsubTab).should('be.visible')
    }
    checkDefaultBlueTabSelectedAs(defaultBlueTab) {
        return cy.get('td[class="multiLayoutButtonTabSelected"]').invoke('text').then((blueTabName) => {
            if (!blueTabName == defaultBlueTab) {
                cy.log(blueTabName)
                cy.get('td[class="multiLayoutButtonTab"]').contains(defaultBlueTab).should('be.visible').click()
            }
            else {
                cy.log(`${defaultBlueTab} tab is Selected`)
            }
        })
    }
    checkForbyUser(){
        return  cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Smart_Content||scClass=VLayout||index=0||length=7||classIndex=0||classLength=1||scClassIndex=0||scClassLength=7]/component/member[Class=QScreen_Data_Binder_Smart_Content_La||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Quality_Management_2||scClass=VLayout||index=4||length=9||classIndex=0||classLength=1||scClassIndex=4||scClassLength=9]/body/layoutBar/').within(() => {
            cy.get('div[role="button"][aria-label]:visible').should('not.include.text', 'by User')
        })
    }

    getAdminBinder(){
        return cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Product_Family_Landing_Page_Se||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/body/row[oid=01933018-b8fb-7377-bf92-af92a357b769||itemName=MSAT%20Product%20View%20-%20Cypress%20Test%20Admin%20Binder||3]/col[fieldName=itemName||0]').click().wait(5000)
    }

    getProdutSpecificBinder(){
        return cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Product_Family_Landing_Page_Se||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/body/row[oid=0194dff6-3a07-775d-9b43-0c1d2e44a587||itemName=MSAT%20Product%20View%20-%20Cypress%20Test%20User%20Data%20Binder||17]/col[fieldName=itemName||0]').click()

    }
}
export default productPage