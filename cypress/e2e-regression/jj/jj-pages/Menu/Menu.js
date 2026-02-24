import { Settings } from "./Settings/Settings"
import { DomainSetup } from "./Domain Setup/DomainSetup"
import { MyAccount } from "./Planets/MyAccount.cy.js";

export class Menu {
    show() {
        cy.getSC(
            '//QMainPageBase[ID="MainPage"]/mainHeader/userMenu/'
        ).click()
    }
    openSettings() {
        this.show()
        cy.getSC(
            '//QMainPageBase[ID="MainPage"]/child[Class=QCommandMenu||scClass=Menu||index=4||length=6||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1||roleIndex=0||roleLength=1||scRole=menu]/body/row[icon=settings.svg||itemName=Settings||6]/col[fieldName=itemName||1]'
        ).click()
    }
    openSupport() {
        cy.getSC(
            '//QMainPageBase[ID="MainPage"]/child[Class=QCommandMenu||scClass=Menu||index=4||length=6||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1||roleIndex=0||roleLength=1||scRole=menu]/body/row[icon=http%3A%24fs%24%24fs%24azrhsonvaw0006.jnj.com%3A8080%24fs%24globalq%24fs%24images%24fs%24icons%24fs%2465598a7c-7075-42e4-ae6b-ba90edfecc91.png||itemName=Support%20Ticket||2]/col[fieldName=itemName||1]'
        ).click()
    }
    openlicensing() {
        cy.getSC('//QMainPageBase[ID="MainPage"]/child[Class=QCommandMenu||scClass=Menu||index=4||length=6||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1||roleIndex=0||roleLength=1||scRole=menu]/body/row[icon=https%3A%24fs%24%24fs%24im360pre-qa.jnj.com%24fs%24globalq%24fs%24images%24fs%24icons%24fs%2413722013-75e8-41d4-a728-b09ab6aefecb.svg||itemName=Licensing||6]/col[fieldName=itemName||1]')
            .click()
    }

    constructor() {
        this.Settings = new Settings()
        this.domainsetup = new domainsetup()
        this.DomainSetup = new DomainSetup()
        this.MyAccount = new MyAccount
        this.manage = new manage()
    }
}
class domainsetup {
    open() {
        cy.getSC('//QMainPageBase[ID="MainPage"]/child[Class=QCommandMenu||scClass=Menu||index=4||length=6||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1||roleIndex=0||roleLength=1||scRole=menu]/body/row[icon=Company.svg||itemName=Domain%20Setup||5]/col[fieldName=itemName||1]').click()
    }
    dropdown() {
        cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Home_2||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Domain_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/gridBar/menuPlanetsButton/').click()
    }
}
class manage {
    open() {
        cy.getSC('//Menu[level=0]/body/row[itemName=Manage||1]/col[fieldName=itemName||0]').click()
    }
    user() {
        cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Home_2||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Domain_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/gridBar/controlTab/member[Class=ToolStripButton||index=0||length=8||classIndex=0||classLength=8||roleIndex=0||roleLength=8||title=Users||scRole=button]/').click()
    }
    chart() {
        cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Home_2||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Domain_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Domain_Users_Activity||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Domain_Users_Selector||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/gridBar/chartButton/icon').click()
    }
    clickLastLoginDate() {
        cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Home_2||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Domain_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Domain_Users_Activity||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Domain_Users_Selector||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/header/headerButton[fieldName=lastlogindate]/').should('be.visible')
    }
    orgnization() {
        cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Home_2||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Domain_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Domain_Users_Activity||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Domain_Users_Selector||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/chartView/member[Class=QScreen_User_Charts||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=0||length=4||classIndex=0||classLength=4||roleIndex=0||roleLength=4||title=Organization||scRole=button]/').click()
    }
    function() {
        cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Home_2||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Domain_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Domain_Users_Activity||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Domain_Users_Selector||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/chartView/member[Class=QScreen_User_Charts||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=1||length=4||classIndex=1||classLength=4||roleIndex=1||roleLength=4||title=Function||scRole=button]/').click()
    }
    department() {
        cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Home_2||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Domain_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Domain_Users_Activity||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Domain_Users_Selector||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/chartView/member[Class=QScreen_User_Charts||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=2||length=4||classIndex=2||classLength=4||roleIndex=2||roleLength=4||title=Department||scRole=button]/').click(0)
    }
    Site() {
        cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Home_2||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Domain_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Domain_Users_Activity||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Domain_Users_Selector||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/chartView/member[Class=QScreen_User_Charts||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=3||length=4||classIndex=3||classLength=4||roleIndex=3||roleLength=4||title=Site||scRole=button]/').click()
    }
}
