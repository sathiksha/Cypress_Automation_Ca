import { DomainSetup } from "./DomainSetup"

export class MainMenu{
    open(){
        cy.getSC(
            '//QMainPageBase[ID="MainPage"]/mainHeader/userMenu/'
        ).click()
    }
    clickDomainSetup(){
        cy.getSC(
            '//QMainPageBase[ID="MainPage"]/child[Class=QCommandMenu||scClass=Menu||index=4||length=6||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1||roleIndex=0||roleLength=1||scRole=menu]/body/row[icon=Company.svg||itemName=Domain%20Setup||5]/col[fieldName=itemName||1]'
        ).click()
    }
    clickMainDropdown(){
        cy.getSC(
            '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Home_2||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Domain_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/gridBar/menuPlanetsButton/icon'
        ).click()
    }
    clickManage(){
        this.clickMainDropdown()
        cy.getSC(
            '//Menu[level=0]/body/row[itemName=Manage||1]/col[fieldName=itemName||0]'
        ).click()
    }
    constructor(){
        this.DomainSetup = new DomainSetup()
    }
}
