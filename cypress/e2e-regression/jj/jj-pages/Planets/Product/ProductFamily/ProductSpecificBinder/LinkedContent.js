import { QualityManagement } from "./LinkedContent/QualityManagement"
import {Manufacturing} from "./LinkedContent/Manufacturing"
import { RegulatoryAffairs } from "./LinkedContent/RegulatoryAffairs"
import {LaboratoryInformation} from "./LinkedContent/LaboratoryInformation"
export class LinkedContent{
    open(){
        cy.getSC(
            '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=2||length=7||classIndex=2||classLength=7||roleIndex=2||roleLength=7||title=Linked%20Content||scRole=button]/'
        ).click()
    }
     constructor(){
        this.QualityManagement = new QualityManagement()
        this.Manufacturing = new Manufacturing()
        this.RegulatoryAffairs =new RegulatoryAffairs()
        this.LaboratoryInformation = new LaboratoryInformation()
    }
}