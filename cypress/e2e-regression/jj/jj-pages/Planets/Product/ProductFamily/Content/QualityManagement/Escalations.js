import { AliasRule } from "./Escalations/AliasRule"
import { All } from "./Escalations/All"
import { Filtered } from "./Escalations/Filtered"
import { Escalations } from "./Escalations/Escalations"
import { Meetings } from "./Escalations/Meetings"
import {Assessments} from "./Escalations/Assesments"

export class Escalations {
    open(){
        cy.getSC(
            '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Content||scClass=VLayout||index=0||length=8||classIndex=0||classLength=1||scClassIndex=0||scClassLength=8]/component/member[Class=QScreen_Product_Family__Product_Con||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/member[Class=QScreen_Content_Layout||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Quality_Management||scClass=VLayout||index=4||length=7||classIndex=0||classLength=1||scClassIndex=4||scClassLength=7]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=0||length=9||classIndex=0||classLength=9||roleIndex=0||roleLength=9||title=Change%20Controls||scRole=button]/'
        ).click()
    }
    
    constructor() {
        this.All = new All()
        this.Filtered = new Filtered()
        this.AliasRule = new AliasRule() 
        this.Escalations = new Escalations()
        this.Meetings = new Meetings()
        this.Assessments = new Assessments()
    }
}