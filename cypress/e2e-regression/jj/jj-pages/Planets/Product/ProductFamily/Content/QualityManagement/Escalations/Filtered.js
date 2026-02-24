export class Filtered{

    open(){
        cy.getSC(
            '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Content||scClass=VLayout||index=0||length=8||classIndex=0||classLength=1||scClassIndex=0||scClassLength=8]/component/member[Class=QScreen_Product_Family__Product_Con||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/member[Class=QScreen_Content_Layout||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Quality_Management||scClass=VLayout||index=4||length=7||classIndex=0||classLength=1||scClassIndex=4||scClassLength=7]/body/layoutBody/member[Class=QScreen_Escalations_1||scClass=VLayout||index=1||length=10||classIndex=0||classLength=1||scClassIndex=1||scClassLength=10]/body/layoutBody/member[Class=QScreen_Meetings_1||scClass=VLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=0||length=2||classIndex=0||classLength=2||roleIndex=0||roleLength=2||title=Filtered||scRole=button]/'
        ).click()
    }
    
    openPredefinedFilter() {
        cy.getSC(
            '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Content||scClass=VLayout||index=0||length=8||classIndex=0||classLength=1||scClassIndex=0||scClassLength=8]/component/member[Class=QScreen_Product_Family__Product_Con||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/member[Class=QScreen_Content_Layout||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Quality_Management||scClass=VLayout||index=4||length=7||classIndex=0||classLength=1||scClassIndex=4||scClassLength=7]/body/layoutBody/member[Class=QScreen_Escalations_1||scClass=VLayout||index=1||length=10||classIndex=0||classLength=1||scClassIndex=1||scClassLength=10]/body/layoutBody/member[Class=QScreen_Meetings_1||scClass=VLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/body/layoutBody/member[Class=QScreen_Filtered_15||scClass=VLayout||index=0||length=2||classIndex=0||classLength=1||scClassIndex=0||scClassLength=2]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Filtered_Content_Selector_Co||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/gridBar/filterMenuButton/icon'
        ).click()
    }
    viewAll() {
        this.openPredefinedFilter()
        cy.getSC(
            '//Menu[level=0]/body/row[itemName=All||0]/col[fieldName=itemName||0]'
        ).click()
    }
    viewRelatedToMe() {
        this.openPredefinedFilter()
        cy.getSC(
            '//Menu[level=0]/body/row[itemName=Related%20to%20Me||1]/col[fieldName=itemName||0]'
        ).click()
    }
    viewRelatedToMeAndOpen() {
        this.openPredefinedFilter()
        cy.getSC(
            '//Menu[level=0]/body/row[itemName=Related%20to%20Me%20and%20Open||2]/col[fieldName=itemName||0]'
        ).click()
    }
    viewRelatedToMeAndApproval() {
        this.openPredefinedFilter()
        cy.getSC(
            '//Menu[level=0]/body/row[itemName=Related%20to%20Me%20and%20In%20Approval||3]/col[fieldName=itemName||0]'
        ).click()
    }
}