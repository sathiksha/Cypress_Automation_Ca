
import { AliasRule } from "./QualityEvents/AliasRule"
import { All } from "./QualityEvents/All"
import { Filtered } from "./QualityEvents/Filtered"
import { Nonconformances } from "./QualityEvents/Nonconformances/Nonconformances"
import { RiskAssessments } from "./QualityEvents/RiskAssessments/RiskAssessments"

export class QualityEvents {
    open(){
        cy.getSC(
            '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Content||scClass=VLayout||index=0||length=8||classIndex=0||classLength=1||scClassIndex=0||scClassLength=8]/component/member[Class=QScreen_Product_Family__Product_Con||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/member[Class=QScreen_Content_Layout||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Quality_Management||scClass=VLayout||index=4||length=8||classIndex=0||classLength=1||scClassIndex=4||scClassLength=8]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=3||length=10||classIndex=3||classLength=10||roleIndex=3||roleLength=10||title=Nonconformances||scRole=button]/'
         ).click()
    }
    constructor() {
        this.navigationPath = 'Login -> Product Planet -> Product Families -> Any Product Family -> Content -> Quality Records -> Change Controls -> Trackwise'
        this.All = new All()
        this.AliasRule = new AliasRule()
        this.Filtered = new Filtered()
        this.Nonconformances = new Nonconformances()
        this.RiskAssessments = new RiskAssessments()
    }
}