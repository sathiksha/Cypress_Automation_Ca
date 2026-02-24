import { Bookmarks } from "./Bookmarks"
import { ElementLibrary } from "./ElementLibrary";
import { MainMenu } from "./MainMenu";
import { Manuals } from "./Manuals";
import { ReferenceLibrary } from "./ReferenceLibrary";
import { Support } from "./Support";

export class NavBar {
    relatedPlanets() {
        cy.getSC(
            '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/gridBar/menuPlanetsButton/'
        ).click()
    }
    navigateToQualityManagement() {
        this.relatedPlanets()
        cy.getSC(
            '//Menu[level=0]/body/row[itemName=Quality%20Management||3]/col[fieldName=itemName||0]'
        ).click()
    }
    navigateToLaboratoryInformation() {
        this.relatedPlanets()
        cy.getSC(
            '//Menu[level=0]/body/row[itemName=Laboratory%20Information||5]/col[fieldName=itemName||0]'
        ).click()
    }
    navigateToManufacturing() {
        this.relatedPlanets()
        cy.getSC(
            '//Menu[level=0]/body/row[itemName=Manufacturing%20(Non%20GxP)||8]/col[fieldName=itemName||0]'
            // '//Menu[level=0]/body/row[itemName=Manufacturing||9]/col[fieldName=itemName||0]'
        ).click()
    }
    navigateToProduct() {
        this.relatedPlanets()
        cy.getSC(
            '//Menu[level=0]/body/row[itemName=Product]/col[fieldName=itemName||0]'
        ).click()
    }
    navigateToDocuments() {
        this.relatedPlanets()
        cy.getSC(
            '//Menu[level=0]/body/row[itemName=Documents||0]/col[fieldName=itemName||0]'
        ).click()
    }
    navigateToRecords() {
        this.relatedPlanets()
        cy.getSC(
            '//Menu[level=0]/body/row[itemName=Records||0]/col[fieldName=itemName||0]'
        ).click()
    }
    navigateToRegulatoryAffairs() {
        this.relatedPlanets()
        cy.getSC(
            '//Menu[level=0]/body/row[itemName=Regulatory%20Affairs||1]/col[fieldName=itemName||0]'
        ).click()
    }
    navigateToPostMarket() {
        this.relatedPlanets()
        cy.getSC(
            '//Menu[level=0]/body/row[itemName=Post%20Market||2]/col[fieldName=itemName||0]'
        ).click()
    }
    openItemRepository() {
        cy.getSC(
            '//QMainPageBase[ID="MainPage"]/mainHeader/itemRepository/'
        ).click()
    }
    constructor() {
        this.Bookmarks = new Bookmarks()
        this.ElementLibrary = new ElementLibrary();
        this.Manuals = new Manuals();
        this.ReferenceLibrary = new ReferenceLibrary();
        this.Support = new Support();
        this.Home = new Home()
        this.MainMenu = new MainMenu()
    }
}
class Home {
    openLandingPage() {
        cy.getSC(
            '//QMainPageBase[ID="MainPage"]/mainHeader/itemRepository/'
        ).click()
    }
    toggleFilter() {
        cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Change_Contr||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Item_Repository_Change_Contr_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Change_Controls||scClass=VLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=3]/body/layoutBody/member[Class=QScreen_Trackwise||scClass=VLayout||index=1||length=2||classIndex=0||classLength=1||scClassIndex=1||scClassLength=2]/component/gridBar/filterButton/icon').click()
    }
}