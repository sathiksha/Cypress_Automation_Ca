import { InterimControls } from "./Interim Controls/InterimControls";
import { CAPAInvestigations } from "./CAPA Investigations/CAPAInvestigations";
import { SupplementalInvestigations } from "./Supplemental Investigations/SupplementalInvestigations";
import { CAPAImplementation } from "./CAPA Implementation/CAPAImplementation";
import { Actions } from "./Actions/Actions";
import { EffectivenessPlan } from "./Effectiveness Plan/EffectivenessPlan";
import { EffectivenessReview } from "./Effectiveness Review/EffectivenessReview";
import { cometCAPAs } from "./CAPAs/CAPAs";

export class CAPAs {

  open() { cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/gridBar/controlTab/member[Class=ToolStripButton||index=3||length=7||classIndex=3||classLength=7||roleIndex=3||roleLength=7||title=CAPAs||scRole=button]/').click(); }

  constructor() {
    this.InterimControls = new InterimControls();
    this.CAPAInvestigations = new CAPAInvestigations();
    this.SupplementalInvestigations = new SupplementalInvestigations();
    this.CAPAImplementation = new CAPAImplementation();
    this.Actions = new Actions();
    this.EffectivenessPlan = new EffectivenessPlan();
    this.EffectivenessReview = new EffectivenessReview();
    this.cometCAPAs =  new cometCAPAs();

  }
}