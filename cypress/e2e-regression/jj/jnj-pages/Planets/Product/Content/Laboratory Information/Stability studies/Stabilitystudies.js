import { Forecasts } from "./Forecasts/Forecasts";
import { Inventories } from "./Inventories/Inventories";
import {stabilitystudies} from "./Stability studies/stabilitystudies";
import {StabilityStudiesAPRPQR} from "./Stability studies/StabilityStudiesAPRPQR";


export class Stabilitystudies {

  open(){

    cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Content||scClass=VLayout||index=0||length=8||classIndex=0||classLength=1||scClassIndex=0||scClassLength=8]/component/member[Class=QScreen_Product_Family__Product_Con||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/member[Class=QScreen_Content_Layout||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Laboratory_Information||scClass=VLayout||index=4||length=9||classIndex=0||classLength=1||scClassIndex=4||scClassLength=9]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=0||length=4||classIndex=0||classLength=4||roleIndex=0||roleLength=4||title=Stability%20Studies||scRole=button]/').click()
  }

  constructor() {
    this.Forecasts = new Forecasts();
    this.Inventories = new Inventories();
    this.stabilitystudies = new stabilitystudies();
    this.StabilityStudiesAPRPQR = new StabilityStudiesAPRPQR();
  
  }
}