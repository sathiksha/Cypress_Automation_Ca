import { InterimControls } from "./Interim Controls/InterimControls";
import { CAPAInvestigations } from "./CAPA Investigations/CAPAInvestigations";
import { SupplementalInvestigations } from "./Supplemental Investigations/SupplementalInvestigations";
import { CAPAImplementation } from "./CAPA Implementation/CAPAImplementation";
import { Actions } from "./Actions/Actions";
import { EffectivenessPlan } from "./Effectiveness Plan/EffectivenessPlan";
import { EffectivenessReview } from "./Effectiveness Review/EffectivenessReview";
import { cometCAPAs } from "./CAPAs/CAPAs";
export class CAPAs {

  open() { cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Linked_Content||scClass=VLayout||index=2||length=7||classIndex=0||classLength=1||scClassIndex=2||scClassLength=7]/body/layoutBody/member[Class=QScreen_Quality_Management_1||scClass=VLayout||index=4||length=9||classIndex=0||classLength=1||scClassIndex=4||scClassLength=9]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=4||length=7||classIndex=4||classLength=7||roleIndex=4||roleLength=7||title=CAPAs||scRole=button]/').click(); }

  constructor() {
    this.InterimControls = new InterimControls();
    this.CAPAInvestigations = new CAPAInvestigations();
    this.SupplementalInvestigations = new SupplementalInvestigations();
    this.CAPAImplementation = new CAPAImplementation();
    this.Actions = new Actions();
    this.EffectivenessPlan = new EffectivenessPlan();
    this.EffectivenessReview = new EffectivenessReview();
    this.cometCAPAs = new cometCAPAs();

  }
}