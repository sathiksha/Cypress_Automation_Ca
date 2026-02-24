import { AssessmentExecutions } from "./Assessment Executions/AssessmentExecutions";
import { Implementations } from "./Implementations/Implementations";
import { cometChangecontrols } from "./Change Controls/changecontrols";
import { TrackwiseChangecontrols } from "./Change Controls/ChangeControls_TW";
export class ChangeControls {

  open() { cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Quality_Reco||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Users_1||scClass=VLayout||index=0||length=2||classIndex=0||classLength=1||scClassIndex=0||scClassLength=2]/component/member[Class=QScreen_User_Quality_Records_by_User||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=0||length=7||classIndex=0||classLength=7||roleIndex=0||roleLength=7||title=Change%20Controls||scRole=button]/').click(); }

  constructor() {
    this.AssessmentExecutions = new AssessmentExecutions();
    this.Implementations = new Implementations();
    this.cometChangecontrols = new cometChangecontrols();
    this.TrackwiseChangecontrols = new TrackwiseChangecontrols();

  }
}