import { CTDSubmissions } from "./CTDSubmissions"
import { Products } from "./Products"
import {Applications} from "./Applications"
import { PackageSets } from "./PackageSets"
import {CTA_INDEvents} from "./CTA_INDEvents"
import {BLA_NDAEvents} from "./BLA_NDAEvents"
import {Registrations}from "./Registrations"

export class RIMDocsRecordsParent {
    openLandingPage() {
        cy.getSC(
            '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/gridBar/controlTab/member[Class=ToolStripButton||index=0||length=1||classIndex=0||classLength=1||roleIndex=0||roleLength=1||title=RIMDocs%20Records||scRole=button]/'
        ).click()
    }
    constructor(){
        this.CTDSubmissions = new CTDSubmissions()
        this.Products = new Products()
        this.Applications = new Applications()
        this.PackageSets = new PackageSets()
        this.CTA_INDEvents = new CTA_INDEvents()
        this.BLA_NDAEvents = new BLA_NDAEvents()
        this.Registrations = new Registrations()       
    }
}