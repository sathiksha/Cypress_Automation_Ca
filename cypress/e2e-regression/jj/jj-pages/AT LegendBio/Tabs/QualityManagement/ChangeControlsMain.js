import {Changecontrols} from "./ChangeControls/Changecontrols"
import { AssessmentExecutions } from "./ChangeControls/AssessmentExecutions"
import {Implementations} from "./ChangeControls/Implementations"
export class ChangeControlsMain {
    open() {
        cy.getSC(
            '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_AT_LegendBio||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_AT_LegendBio_Product_Family_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_AT_LegendBio_Product_Family__2||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Content||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_AT_LegendBio_Product_Family__3||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/member[Class=QScreen_AT_LegendBio_Content_Layout||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Quality_Management||scClass=VLayout||index=1||length=4||classIndex=0||classLength=1||scClassIndex=1||scClassLength=4]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=0||length=4||classIndex=0||classLength=4||roleIndex=0||roleLength=4||title=Change%20Controls||scRole=button]/'
        ).click()
    }

    constructor(){
    this.Changecontrols = new Changecontrols()
    this.AssessmentExecutions = new AssessmentExecutions()
    this.Implementations = new Implementations()
}
}