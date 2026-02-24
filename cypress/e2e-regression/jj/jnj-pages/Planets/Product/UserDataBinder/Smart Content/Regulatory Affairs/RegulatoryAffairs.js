import { CTDSubmissionRecords } from "./CTD_Submission Records/CTDSubmissionRecords";
import { Products } from "./Products/Products";
import { Applications } from "./Applications/Applications";
import { Registrations } from "./Registrations/Registrations";
import { PackageSets } from "./Package Sets/PackageSets";
import { CTAINDEvents } from "./CTA-IND Events/CTAINDEvents";
import { BLANDAEvents } from "./BLA-NDA Events/BLANDAEvents";
export class RegulatoryAffairs {

  open() { cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Smart_Content||scClass=VLayout||index=0||length=7||classIndex=0||classLength=1||scClassIndex=0||scClassLength=7]/component/member[Class=QScreen_Data_Binder_Smart_Content_La||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=2||length=9||classIndex=2||classLength=9||roleIndex=2||roleLength=9||title=Regulatory%20Affairs||scRole=button]/').click(); }

  constructor() {
    this.CTDSubmissionRecords = new CTDSubmissionRecords();
    this.Products = new Products();
    this.Applications = new Applications();
    this.Registrations = new Registrations();
    this.PackageSets = new PackageSets();
    this.CTAINDEvents = new CTAINDEvents();
    this.BLANDAEvents = new BLANDAEvents();

  }
}