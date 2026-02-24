import { ChangeControls } from "./ChangeControls/ChangeControls";
import { Escalations } from "./Escalations/Escalations";
import { Nonconformances } from "./Nonconformances/Nonconformances";
import { CAPAs } from "./CAPAs/CAPAs";
import { Audits } from "./Audits/Audits";
import { Accounts } from "./Accounts/Accounts";
import { Accounts_TW } from "./Accounts/Accounts_TW";
import { byUser } from "./Quality Records By User/ByUser";
export class QualityManagement {

  open() { cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Content||scClass=VLayout||index=0||length=8||classIndex=0||classLength=1||scClassIndex=0||scClassLength=8]/component/member[Class=QScreen_Product_Family__Product_Con||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/member[Class=QScreen_Content_Layout||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=3||length=9||classIndex=3||classLength=9||roleIndex=3||roleLength=9||title=Quality%20Management||scRole=button]/').click(); }

  constructor() {
    this.ChangeControls = new ChangeControls();
    this.Escalations = new Escalations();
    this.Nonconformances = new Nonconformances();
    this.CAPAs = new CAPAs();
    this.Audits = new Audits();
    this.Accounts = new Accounts();
    this.Accounts_TW = new Accounts_TW()
    this.byUser = new byUser()
  }
}