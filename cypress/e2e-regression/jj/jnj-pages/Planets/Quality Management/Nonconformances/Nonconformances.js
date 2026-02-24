import { Containments } from "./Containments/Containments";
import { NCInvestigations } from "./NC Investigations/NCInvestigations";
import { SupplementalInvestigations } from "./Supplemental Investigations/SupplementalInvestigations";
import { LaboratoryInvestigations } from "./Laboratory Investigations/LaboratoryInvestigations";
import { NCCorrections } from "./NC Corrections/NCCorrections";
import { Actions } from "./Actions/Actions";
import { RiskAssessments } from "./Risk Assessments/RiskAssessments";
import { NonConformances } from "./NonConformances/Nonconformances";
import { NonConformancesTW } from "./NonConformances/NonConformancesTW";
const { SCHelper } = require("../../../../../../../playwright-sc-helper");

export class Nonconformances {
  constructor(page) {
    this.page = page;
    this.sc = new SCHelper(page);
    this.Containments = new Containments(page);
    this.NCInvestigations = new NCInvestigations(page);
    this.SupplementalInvestigations = new SupplementalInvestigations(page);
    this.LaboratoryInvestigations = new LaboratoryInvestigations(page);
    this.NCCorrections = new NCCorrections(page);
    this.Actions = new Actions(page);
    this.RiskAssessments = new RiskAssessments(page);
    this.NonConformances = new NonConformances(page);
    this.NonConformancesTW = new NonConformancesTW(page);
  }

  async open() {
    await (await this.sc.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/gridBar/controlTab/member[Class=ToolStripButton||index=2||length=7||classIndex=2||classLength=7||roleIndex=2||roleLength=7||title=Nonconformances||scRole=button]/')).click();
  }
}