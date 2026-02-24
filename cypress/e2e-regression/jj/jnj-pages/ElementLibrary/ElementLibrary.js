import { DataManagement } from "./DataManagement/DataManagement";

export class ElementLibrary {
  open() {
    cy.getSC(
      '//QMainPageBase[ID="MainPage"]/mainHeader/elementLibrary/',
    ).click();
  }
  constructor() {
    this.DataManagement = new DataManagement();
  }
}
