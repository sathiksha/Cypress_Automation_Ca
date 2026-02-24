import { QXD } from "./QXD/QXD"
import { QXF } from "./QXF/QXF"

export class GRAInsight{
    openLandingPage(){
        cy.getSC(this.locator).click()
    }
    regulatoryIndications(){
        cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_EL_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_EL_GRAInsight_Interface_Acti||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_QXF_Foreign_Content_1||scClass=VLayout||index=0||length=2||classIndex=0||classLength=1||scClassIndex=0||scClassLength=2]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=8||length=9||classIndex=8||classLength=9||roleIndex=8||roleLength=9||title=Regulatory%20Indications||scRole=button]/').click()

    }
    constructor(){
        this.locator = '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_EL_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/gridBar/controlTab/member[Class=ToolStripButton||index=7||length=9||classIndex=7||classLength=9||roleIndex=7||roleLength=9||title=GRA%20Insight||scRole=button]/'
        this.QXF = new QXF()
        this.QXD = new QXD()
    }
       getColumnID()
       {
return '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_EL_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_EL_GRAInsight_Interface_Acti||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_QXF_Foreign_Content_1||scClass=VLayout||index=0||length=2||classIndex=0||classLength=1||scClassIndex=0||scClassLength=2]/body/layoutBody/member[Class=QScreen_Regulatory_Indications||scClass=VLayout||index=8||length=9||classIndex=0||classLength=1||scClassIndex=8||scClassLength=9]/component/header/headerButton[fieldName=product_family_id]/'
       }
    }
    
