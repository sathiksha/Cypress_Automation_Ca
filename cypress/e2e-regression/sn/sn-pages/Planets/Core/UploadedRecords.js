export class UploadedRecords{
    open(){
        cy.getSC(
            '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/gridBar/controlTab/member[Class=ToolStripButton||index=3||length=5||classIndex=3||classLength=5||roleIndex=3||roleLength=5||title=Uploaded%20Records||scRole=button]/'
        ).click()
    }
    toggleFilter(){
        cy.getSC(
            '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Internal_Ref||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Item_Repository_Internal_Ref_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/gridBar/filterButton/icon'
        ).click()
    }
    nameColumn(){
        return '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Internal_Ref||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Item_Repository_Internal_Ref_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/header/headerButton[fieldName=itemName]/'
    }
    createSiblingsButton(){
        cy.getSC(
            '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Internal_Ref||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Item_Repository_Internal_Ref_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/gridBar/createSiblingItemsButton/icon'
        ).click()
    }
    CreatSibling(name,text,detail,year){
        this.createSiblingsButton()
        // Name
        cy.getSC(
            '//autoID[Class=Dialog||index=5||length=6||classIndex=0||classLength=1||roleIndex=0||roleLength=1||title=Create%20Internal%20Reference||scRole=alertdialog]/item[0][Class="QScreen_Command_Create_Properties"]/component/item[name=itemName||title=Name||index=0||Class=TextItem]/element'
        ).click().type(name).type('{enter}')
        // Document type
        cy.getSC(
            '//autoID[Class=Dialog||index=5||length=6||classIndex=0||classLength=1||roleIndex=0||roleLength=1||title=Create%20Internal%20Reference||scRole=alertdialog]/item[0][Class="QScreen_Command_Create_Properties"]/component/item[name=documentType||title=Document%20Type||index=1||Class=TextItem]/element'
        ).click().type(text).type('{enter}')
        // Version
        cy.getSC(
            '//autoID[Class=Dialog||index=5||length=6||classIndex=0||classLength=1||roleIndex=0||roleLength=1||title=Create%20Internal%20Reference||scRole=alertdialog]/item[0][Class="QScreen_Command_Create_Properties"]/component/item[name=documentVersion||title=Version||index=2||Class=TextItem]/element'
        ).click().type(detail).type('{enter}')
        // year
        cy.getSC(
            '//autoID[Class=Dialog||index=5||length=6||classIndex=0||classLength=1||roleIndex=0||roleLength=1||title=Create%20Internal%20Reference||scRole=alertdialog]/item[0][Class="QScreen_Command_Create_Properties"]/component/item[name=year||title=Year||index=3||Class=TextItem]/element'
        ).click().type(year).type('{enter}')
        // Ok
        cy.getSC(
            '//autoID[Class=Dialog||index=5||length=6||classIndex=0||classLength=1||roleIndex=0||roleLength=1||title=Create%20Internal%20Reference||scRole=alertdialog]/okButton/'
        ).click()
    }
    selectRecordByText(text){
        cy.getSC(
            '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Internal_Ref||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Item_Repository_Internal_Ref_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/body/row[itemName='+encodeURI(text)+']/col[fieldName=itemName||1]'
        ).click()
    }
    deleteRecord(){
        cy.getSC(
            '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Internal_Ref||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Item_Repository_Internal_Ref_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/gridBar/deleteButton/icon'
        ).click()
        // Yes
        cy.getSC(
            '//Dialog[ID="isc_globalWarn"]/yesButton/'
        ).click()
    }
    openRecordByText(text){
        cy.getSC(
            '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Internal_Ref||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Item_Repository_Internal_Ref_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/body/row[oitemName='+encodeURI(text)+']/col[fieldName=itemName||1]'
        ).dblclick()
    }
   
    constructor(){
        this.uploadedRecord = new uploadedRecord()
        
    }
}
class uploadedRecord{
    maximizeSelector(){
        cy.getSC(
            '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Internal_Ref||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/selectorButton/openButton/icon'
        ).click()
    }
    constructor(){
        this.History = new History()
    }
}
class History{
    open(){
        cy.getSC(
            '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Internal_Ref||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Internal_Reference_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=1||length=2||classIndex=1||classLength=2||roleIndex=1||roleLength=2||title=History||scRole=button]/'
        ).click()
    }
}

