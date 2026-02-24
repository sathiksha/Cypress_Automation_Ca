import { DataManagement } from "./ElementLibrary/DataManagement"
import { InterfaceManagement } from "./ElementLibrary/InterfaceManagement"
import { RecordManagement } from "./ElementLibrary/RecordMangement"
import { RiskManagement } from "./ElementLibrary/RiskManagement"

export class ElementLibrary{
    open(){
        cy.getSC(
            '//QMainPageBase[ID="MainPage"]/mainHeader/elementLibrary/'
        ).click()
    }
    constructor(){
        this.DataManagement = new DataManagement()
        this.RecordManagement = new RecordManagement()
        this.RiskManagement = new RiskManagement()
        this.InterfaceManagement = new InterfaceManagement()
    }
}