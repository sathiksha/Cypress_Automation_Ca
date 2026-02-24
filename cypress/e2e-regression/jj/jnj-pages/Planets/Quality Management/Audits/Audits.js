import { AuditObservations } from "./Audit Observations/AuditObservations";
import {audits} from "./Audits/AuditsCOMET"
import {AuditsTW} from "./Audits/AuditsTW"
export class Audits {

  open() { cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/gridBar/controlTab/member[Class=ToolStripButton||index=4||length=7||classIndex=4||classLength=7||roleIndex=4||roleLength=7||title=Audits||scRole=button]/').click(); }

  constructor() {
    this.audits = new audits()
    this.AuditsTW = new AuditsTW()
    this.AuditObservations = new AuditObservations();
  }
}