import { AliasRuleManagement } from "./ElementLibrary/AliasRuleMangement"
import { DataManagement } from "./ElementLibrary/DataManagement"
import { InterfaceData } from "./ElementLibrary/InterfaceData"
import { UserReporting } from "./ElementLibrary/UserReporting"

export class ElementLibrary {
    openLandingPage() {
        cy.getSC(
            '//QMainPageBase[ID="MainPage"]/mainHeader/elementLibrary/'
        ).click()
    }
    constructor(){
        this.DataManagement = new DataManagement()
        this.InterfaceData = new InterfaceData()
        this.AliasRuleManagement = new AliasRuleManagement()
        this.UserReporting = new UserReporting()
        this.DropdownLocator = '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_EL_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/gridBar/menuPlanetsButton/'
    }
}