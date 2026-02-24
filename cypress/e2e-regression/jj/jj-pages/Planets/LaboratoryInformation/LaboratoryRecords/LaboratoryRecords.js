import { ReleaseData } from "./ReleaseData"
import { Specifications } from "./Specifications"
import { StabilityData } from "./StabilityData"
import { StabilityStudies } from "./StabilityStudies"

export class LaboratoryRecords {
    openLandingPage(){
        cy.getSC(
            '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/gridBar/controlTab/member[Class=ToolStripButton||index=0||length=1||classIndex=0||classLength=1||roleIndex=0||roleLength=1||title=Laboratory%20Records||scRole=button]/'
        ).click()
    }
    constructor(){
        this.StabilityData = new StabilityData()
        this.StabilityStudies = new StabilityStudies()
        this.ReleaseData = new ReleaseData()
        this.Specifications = new Specifications()
    }
}