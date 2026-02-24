import { Trackwise } from "./Trackwise"

export class Suppliers {
    openLandingPage(){
        cy.getSC(
            '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/gridBar/controlTab/member[Class=ToolStripButton||index=5||length=7||classIndex=5||classLength=7||roleIndex=5||roleLength=7||title=Accounts||scRole=button]/'
                   ).click()
    }
    readAccountsTab(){
        return '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/gridBar/controlTab/member[Class=ToolStripButton||index=5||length=8||classIndex=5||classLength=8||roleIndex=5||roleLength=8||title=Accounts||scRole=button]/'
    }
    openView(){
        cy.getSC(
            '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Accounts_Act||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Item_Repository_Accounts_Sel||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBar/controlTab/member[Class=ToolStripMenuButton||index=0||length=1||classIndex=0||classLength=1||roleIndex=0||roleLength=1||title=COMET||scRole=button]/icon'
                ).click()
    }
    openPredefinedFilters(){
        cy.getSC(
            '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Accounts_Act||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Item_Repository_Accounts_Sel||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_COMET_4||scClass=VLayout||index=0||length=2||classIndex=0||classLength=1||scClassIndex=0||scClassLength=2]/component/gridBar/filterMenuButton/icon'
        ).click()
    }
    readAllMenuList(){
        this.openPredefinedFilters()
        return '//Menu[level=0]/body/row[itemName=All||0]/col[fieldName=itemName||0]'
    }
    readRelatedToMeMenuList(){
        return '//Menu[level=0]/body/row[itemName=Related%20to%20Me||1]/col[fieldName=itemName||0]'
    }
    readTrackwiseMenuList(){
        return '//Menu[level=0]/body/row[title=Trackwise||1]/col[fieldName=title||1]'
        
    };
    readCometMenuList(){
        this.openView()
        return '//Menu[level=0]/body/row[title=COMET||0]/col[fieldName=title||1]'
    }
    viewTrackwise(){
        this.openView()
        cy.getSC(
            '//Menu[level=0]/body/row[title=Trackwise||1]/col[fieldName=title||1]'
         ).click()
    }
    viewComet(){
        this.openView()
        cy.getSC(
            '//Menu[level=0]/body/row[title=COMET||0]/col[fieldName=title||1]'
           ).click()
    }
    constructor(){
        this.Trackwise = new Trackwise()
    }
}