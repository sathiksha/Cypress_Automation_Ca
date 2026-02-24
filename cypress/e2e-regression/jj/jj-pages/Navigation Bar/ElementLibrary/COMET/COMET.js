import { QXF } from "./QXF/QXF"

export class COMET{
    openLandingPage(){
        cy.getSC(
            this.locator
        ).click()
    }
    constructor(){
        this.QXF = new QXF()
        this.locator = '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_EL_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/gridBar/controlTab/member[Class=ToolStripButton||index=1||length=9||classIndex=1||classLength=9||roleIndex=1||roleLength=9||title=COMET||scRole=button]/'
    }
}

