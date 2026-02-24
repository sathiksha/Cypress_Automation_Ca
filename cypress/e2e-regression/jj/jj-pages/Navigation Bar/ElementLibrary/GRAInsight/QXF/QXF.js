import { RegulatoryBLANDA } from "./Regulatory BLA-NDA"
import { RegulatoryProducts } from "./Regulatory Products"
import { RegulatoryApplications } from "./RegulatoryApplications"
import { RegulatoryCTAIND } from "./RegulatoryCTA-IND"
import { RegulatoryPackageSets } from "./RegulatoryPackageSets"
import { RegulatoryRegistrations } from "./RegulatoryRegistrations"
import {RegulatoryLOCProduct} from "./Regulatory LOC Product"

export class QXF{
    openLandingPage(){
        cy.getSC(this.locator).click()
    }
    constructor(){
        this.locator = '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_EL_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_EL_GRAInsight_Interface_Acti||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=0||length=2||classIndex=0||classLength=2||roleIndex=0||roleLength=2||title=QXF%20(Foreign%20Content)||scRole=button]/'
        this.RegulatoryCTAIND = new RegulatoryCTAIND()
        this.RegulatoryRegistrations = new RegulatoryRegistrations()
        this.RegulatoryPackageSets = new RegulatoryPackageSets()
        this.RegulatoryBLANDA = new RegulatoryBLANDA()
        this.RegulatoryApplications = new RegulatoryApplications()
        this.RegulatoryProducts = new RegulatoryProducts()
        this.RegulatoryLOCProduct = new RegulatoryLOCProduct()
    }
}