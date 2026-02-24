import { Assessments } from "./Assessments/Assessments";
import { Meetings } from "./Meetings/Meetings";
import { cometEscalations } from "./Escalations/Escalations";
import { TrackwiseEscalations } from "./Escalations/Escalations_TW";
export class Escalations {

  open() { cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/gridBar/controlTab/member[Class=ToolStripButton||index=1||length=7||classIndex=1||classLength=7||roleIndex=1||roleLength=7||title=Escalations||scRole=button]/').click(); }

  constructor() {
    this.Assessments = new Assessments();
    this.Meetings = new Meetings();
    this.cometEscalations = new cometEscalations();
    this.TrackwiseEscalations = new TrackwiseEscalations();
  }
}