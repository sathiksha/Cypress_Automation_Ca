import { ChangeControls } from "./ChangeControls/ChangeControls";
import { Escalations } from "./Escalations/Escalations";
import { Nonconformances } from "./Nonconformances/Nonconformances";
import { CAPAs } from "./CAPAs/CAPAs";
import { Audits } from "./Audits/Audits";
import { Accounts } from "./Accounts/Accounts";
import { Accounts_TW } from "./Accounts/Accounts_TW";
export class QualityManagement {

  open() { cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Smart_Content||scClass=VLayout||index=0||length=7||classIndex=0||classLength=1||scClassIndex=0||scClassLength=7]/component/member[Class=QScreen_Data_Binder_Smart_Content_La||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=4||length=9||classIndex=4||classLength=9||roleIndex=4||roleLength=9||title=Quality%20Management||scRole=button]/').click(); }

  constructor() {
    this.ChangeControls = new ChangeControls();
    this.Escalations = new Escalations();
    this.Nonconformances = new Nonconformances();
    this.CAPAs = new CAPAs();
    this.Audits = new Audits();
    this.Accounts = new Accounts();
    this.Accounts_TW = new Accounts_TW()

  }
}