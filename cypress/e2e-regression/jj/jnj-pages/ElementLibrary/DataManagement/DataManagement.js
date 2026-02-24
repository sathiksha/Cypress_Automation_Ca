import { AdminDataBinder } from "./AdminDataBinder/AdminDataBinder";
import { UserDataBinder } from "./UserDataBinder/UserDataBinder";
export class DataManagement {
  open() {
    //dropdown
    cy.getSC(
      '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_EL_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/gridBar/menuPlanetsButton/',
    ).click();

    // select Data Management
    cy.getSC(
      "//Menu[level=0]/body/row[itemName=Data%20Management||1]/col[fieldName=itemName||0]",
    ).click();
  }
  constructor() {
    this.AdminDataBinder = new AdminDataBinder();
    this.UserDataBinder = new UserDataBinder();
  }
}
