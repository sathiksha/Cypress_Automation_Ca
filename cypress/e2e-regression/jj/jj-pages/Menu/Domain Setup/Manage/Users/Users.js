import { Charts } from "./User/Charts"
import { User } from "./User/User"

export class Users{
    open(){
        cy.getSC(
            '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Home_3||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Domain_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/gridBar/controlTab/member[Class=ToolStripButton||index=0||length=7||classIndex=0||classLength=7||roleIndex=0||roleLength=7||title=Users||scRole=button]/'
        ).click()
    }
    getColumnsID(){
        return '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Home||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Domain_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Domain_Users_Activity||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Domain_Users_Selector||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/header/headerButton[fieldName=itemName]/'
    }
    toggleFilter(){
        cy.getSC(
            '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Home_3||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Domain_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Domain_Users_Activity||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Domain_Users_Selector||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/gridBar/filterButton/icon'
        ).click()
    }
    openUserNameByText(name,text){
        cy.getSC(
            '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Home_3||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Domain_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Domain_Users_Activity||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Domain_Users_Selector||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/filterEditor/editRowForm/item[name=itemName||title=Name||index=0||Class=TextItem]/element'
        ).clear().type(name+'{enter}')
        cy.waitForSCDone()
        cy.getSC(
            '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Home||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Domain_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Domain_Users_Activity||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Domain_Users_Selector||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/body/row[0]/col[fieldName=itemName||1]').dblclick()
    }
    openUserName(name,text){
        cy.getSC(
            '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Home_3||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Domain_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Domain_Users_Activity||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Domain_Users_Selector||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/filterEditor/editRowForm/item[name=itemName||title=Name||index=0||Class=TextItem]/element'
        ).clear().type(name+'{enter}')
        cy.getSC(
            '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Home_3||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Domain_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Domain_Users_Activity||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Domain_Users_Selector||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/body/row[itemName='+encodeURI(text)+']/col[fieldName=itemName||0]'
        ).dblclick()
    }
    selectUserByText(text){
        cy.getSC(
            '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Home_3||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Domain_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Domain_Users_Activity||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Domain_Users_Selector||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/body/row[itemName='+encodeURI(text)+']/col[fieldName=itemName||0]'
        ).click()
    }
    createNewbutton(){
        cy.getSC(
            '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Home||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Domain_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Domain_Users_Activity||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Domain_Users_Selector||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/gridBar/createSiblingItemsButton/icon'
        ).click()
    }
    EnterNameAndEmail(FName,LName,Email){
        cy.getSC(
            '//autoID[Class=Dialog||index=10||length=11||classIndex=0||classLength=1||roleIndex=0||roleLength=1||title=Account%20Name||scRole=alertdialog]/item[0][Class="QScreen_Command_Create_Properties_Wi"]/component/item[name=firstName||title=First%20Name||index=1||Class=TextItem]/element'
        ).click().type(FName)
        cy.getSC(
            '//autoID[Class=Dialog||index=10||length=11||classIndex=0||classLength=1||roleIndex=0||roleLength=1||title=Account%20Name||scRole=alertdialog]/item[0][Class="QScreen_Command_Create_Properties_Wi"]/component/item[name=lastName||title=Last%20Name||index=2||Class=TextItem]/element'
        ).click().type(LName)
        cy.getSC(
            '//autoID[Class=Dialog||index=10||length=11||classIndex=0||classLength=1||roleIndex=0||roleLength=1||title=Account%20Name||scRole=alertdialog]/item[0][Class="QScreen_Command_Create_Properties_Wi"]/component/item[name=email||title=Email||index=3||Class=TextItem]/element'
        ).click().type(Email)
    }
    clickOk(){
        cy.getSC(
            '//autoID[Class=Dialog||index=10||length=11||classIndex=0||classLength=1||roleIndex=0||roleLength=1||title=Account%20Name||scRole=alertdialog]/okButton/'
        ).click()
    }
    clickConformationYes(){
        cy.getSC(
            '//Dialog[ID="isc_globalWarn"]/yesButton/'
        ).click()
    }
    clickAnyWhereElse(){
        // Click Anywhere else
        cy.wait(200)
        cy.get('body').trigger('keydown', { keyCode: 27 });
        cy.wait(200);
        cy.get('body').trigger('keyup', { keyCode: 27 });
    }
    checkMultiChoicePickerColumns(names) {
        names.forEach((text) => {
            cy.getSC(
                '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Home||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Domain_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Domain_Users_Activity||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Base_Main_Noun_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Home_1||scClass=VLayout||index=0||length=9||classIndex=0||classLength=1||scClassIndex=0||scClassLength=9]/component/member[Class=QScreen_User_Home||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Details||scClass=VLayout||index=0||length=2||classIndex=0||classLength=1||scClassIndex=0||scClassLength=2]/component/item[title='+encodeURI(text)+'||Class=QSelectItem]/[icon="picker"]'
            ).click({force:true});
            this.clickAnyWhereElse();
        });
    }
    EnterOrgFuncDeptSite(index){
        cy.getSC(
            '//autoID[Class=Dialog||index=10||length=11||classIndex=0||classLength=1||roleIndex=0||roleLength=1||title=Account%20Name||scRole=alertdialog]/item[0][Class="QScreen_Command_Create_Properties_Wi"]/component/item[name=organization_id||title=Organization||index=6||Class=QSelectItem]/[icon="picker"]'
        ).click()
        cy.getSC(
            '//autoID[Class=Dialog||index=9||length=13||classIndex=0||classLength=1||roleIndex=0||roleLength=1||title=Account%20Name||scRole=alertdialog]/item[0][Class="QScreen_Command_Create_Properties_Wi"]/component/item[name=organization_id||title=Organization||value=019591cc-afed-732a-90b5-9f234fda5437||index=6||Class=QSelectItem]/pickList/body/row['+index+']/col[fieldName=itemName||0]'
        ).click()
        // Function
        cy.getSC(
            '//autoID[Class=Dialog||index=9||length=13||classIndex=0||classLength=1||roleIndex=0||roleLength=1||title=Account%20Name||scRole=alertdialog]/item[0][Class="QScreen_Command_Create_Properties_Wi"]/component/item[name=function_id||title=Function||index=7||Class=QSelectItem]/[icon="picker"]'
        ).click()
        cy.getSC(
            '//autoID[Class=Dialog||index=9||length=13||classIndex=0||classLength=1||roleIndex=0||roleLength=1||title=Account%20Name||scRole=alertdialog]/item[0][Class="QScreen_Command_Create_Properties_Wi"]/component/item[name=function_id||title=Function||index=7||Class=QSelectItem]/pickList/body/row['+index+']/col[fieldName=itemName||0]'
        ).click()
        // Department
        cy.getSC(
            '//autoID[Class=Dialog||index=9||length=13||classIndex=0||classLength=1||roleIndex=0||roleLength=1||title=Account%20Name||scRole=alertdialog]/item[0][Class="QScreen_Command_Create_Properties_Wi"]/component/item[name=department_id||title=Department||index=8||Class=QSelectItem]/[icon="picker"]'
        ).click()
        cy.getSC(
            '//autoID[Class=Dialog||index=9||length=13||classIndex=0||classLength=1||roleIndex=0||roleLength=1||title=Account%20Name||scRole=alertdialog]/item[0][Class="QScreen_Command_Create_Properties_Wi"]/component/item[name=department_id||title=Department||index=8||Class=QSelectItem]/pickList/body/row['+index+']/col[fieldName=itemName||0]'
        ).click()
        // Site
        cy.getSC(
            '//autoID[Class=Dialog||index=9||length=13||classIndex=0||classLength=1||roleIndex=0||roleLength=1||title=Account%20Name||scRole=alertdialog]/item[0][Class="QScreen_Command_Create_Properties_Wi"]/component/item[name=site_id||title=Site||index=9||Class=QSelectItem]/[icon="picker"]'
        ).click()
        cy.getSC(
            '//autoID[Class=Dialog||index=9||length=13||classIndex=0||classLength=1||roleIndex=0||roleLength=1||title=Account%20Name||scRole=alertdialog]/item[0][Class="QScreen_Command_Create_Properties_Wi"]/component/item[name=site_id||title=Site||index=9||Class=QSelectItem]/pickList/body/row['+index+']/col[fieldName=itemName||0]'
        ).click()
    }
    errorMessage(){
        return '//autoID[Class=Dialog||index=10||length=11||classIndex=0||classLength=1||roleIndex=0||roleLength=1||title=Account%20Name||scRole=alertdialog]/item[0][Class="QScreen_Command_Create_Properties_Wi"]/component/item[name=organization_id||title=Organization||index=6||Class=QSelectItem]/inlineerror'
    }
    clickErrorOk(){
        cy.getSC(
            '//Dialog[ID="isc_globalWarn"]/okButton/'
        ).click()
    }
    constructor(){
        this.User = new User()
        this.Charts = new Charts()
    }

}

