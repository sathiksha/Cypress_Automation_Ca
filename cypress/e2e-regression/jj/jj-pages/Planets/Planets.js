import { ClinicalAffairs } from "./ClinicalAffairs";
import { Documents } from "./Documents/Documents";
import { LaboratoryInformation } from "./LaboratoryInformation/LaboratoryInformation";
import { Manufacturing } from "./Manufacturing/Manufacturing";
import { PQMResourceManagement } from "./PQMResManagement/PQMResourceManagement";
import { PostMarket } from "./PostMarket/PostMarket";
import { ProcessDevelopment } from "./ProcessDevelopment";
import { Procurement } from "./Procurement";
import { Product } from "./Product/Product";
import { QualityManagement } from "./QualityManagement/QualityManagement";
import { Records } from "./Records/Records";
import { RegulatoryAffairs } from "./RegulatoryAffairs/RegulatoryAffairs";
import { Risk } from "./Risk/Risk";
import { Tutorials } from "./Tutorials";
import { Training } from "./Training";


export class Planets {
    constructor() {
        this.ClinicalAffairs = new ClinicalAffairs();
        this.LaboratoryInformation = new LaboratoryInformation()
        this.Manufacturing = new Manufacturing();
        this.PostMarket = new PostMarket();
        this.PQMResourceManagement = new PQMResourceManagement();
        this.ProcessDevelopment = new ProcessDevelopment();
        this.Procurement = new Procurement();
        this.Product = new Product();
        this.QualityManagement = new QualityManagement();
        this.Records = new Records();
        this.Risk = new Risk();
        this.Tutorials = new Tutorials();
        this.RegulatoryAffairs = new RegulatoryAffairs();
        this.Documents = new Documents();
        this.Training = new Training();
      }
    checkCompanyName(){
        cy.getSC(
            '//QMainPageBase[ID="MainPage"]/mainHeader/companyNameLabel/', { timeout: 60000 }
        ).should('be.visible')
    }
    openDropdownmenu(){
        cy.getSC(
            '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/gridBar/menuPlanetsButton/'
        ).click()
    }
    checkPlanetAvailablity(planet){
        cy.get('tr[role="menuitem"]>td>div').contains(planet).should('be.visible').click()
    }
}