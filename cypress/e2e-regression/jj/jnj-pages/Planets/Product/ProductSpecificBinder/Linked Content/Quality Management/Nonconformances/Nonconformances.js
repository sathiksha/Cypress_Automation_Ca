import { Containments } from "./Containments/Containments";
import { NCInvestigations } from "./NC Investigations/NCInvestigations";
import { SupplementalInvestigations } from "./Supplemental Investigations/SupplementalInvestigations";
import { LaboratoryInvestigations } from "./Laboratory Investigations/LaboratoryInvestigations";
import { NCCorrections } from "./NC Corrections/NCCorrections";
import { Actions } from "./Actions/Actions";
import { RiskAssessments } from "./Risk Assessments/RiskAssessments";
import {NonConformances} from "./Nonconformances/NonConformancesCOMET"
import { NonConformancesTW } from "./Nonconformances/NonConformancesTW";
export class Nonconformances {

  open() { cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Linked_Content||scClass=VLayout||index=2||length=7||classIndex=0||classLength=1||scClassIndex=2||scClassLength=7]/body/layoutBody/member[Class=QScreen_Quality_Management_1||scClass=VLayout||index=4||length=9||classIndex=0||classLength=1||scClassIndex=4||scClassLength=9]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=3||length=7||classIndex=3||classLength=7||roleIndex=3||roleLength=7||title=Nonconformances||scRole=button]/').click(); }

  constructor() {
    this.Containments = new Containments();
    this.NCInvestigations = new NCInvestigations();
    this.SupplementalInvestigations = new SupplementalInvestigations();
    this.LaboratoryInvestigations = new LaboratoryInvestigations();
    this.NCCorrections = new NCCorrections();
    this.Actions = new Actions();
    this.RiskAssessments = new RiskAssessments();
    this.NonConformances = new NonConformances()
    this.NonConformancesTW = new NonConformancesTW()

  }
}