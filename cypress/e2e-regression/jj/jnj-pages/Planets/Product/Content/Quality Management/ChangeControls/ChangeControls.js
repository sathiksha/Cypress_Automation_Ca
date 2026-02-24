import { AssessmentExecutions } from "./Assessment Executions/AssessmentExecutions";
import { Implementations } from "./Implementations/Implementations";
import { Changecontrols } from "./ChangeControls/ChangeControlsCOMET";
import { ChangecontrolsTW } from "./ChangeControls/ChangeControlsTW";
import { ChangeControlsAPRPQR } from "./ChangeControls/ChangeControlsAPRPQR";
import {ChangeControlsParentCCImplementations} from "./ChangeControls/ChangeControlsParentCCImplementations";
import {ChangeControlsChildCCImplementations} from "./ChangeControls/ChangeControlsChildCCImplementations";
export class ChangeControls {

  open() { cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Content||scClass=VLayout||index=0||length=8||classIndex=0||classLength=1||scClassIndex=0||scClassLength=8]/component/member[Class=QScreen_Product_Family__Product_Con||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/member[Class=QScreen_Content_Layout||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Quality_Management||scClass=VLayout||index=3||length=9||classIndex=0||classLength=1||scClassIndex=3||scClassLength=9]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=0||length=10||classIndex=0||classLength=10||roleIndex=0||roleLength=10||title=Change%20Controls||scRole=button]/').click(); }

  constructor() {
    this.AssessmentExecutions = new AssessmentExecutions();
    this.Implementations = new Implementations();
    this.Changecontrols = new Changecontrols();
    this.ChangecontrolsTW = new ChangecontrolsTW();
    this.ChangeControlsAPRPQR = new ChangeControlsAPRPQR();
    this.ChangeControlsParentCCImplementations = new ChangeControlsParentCCImplementations();
    this.ChangeControlsChildCCImplementations = new ChangeControlsChildCCImplementations();

  }
}