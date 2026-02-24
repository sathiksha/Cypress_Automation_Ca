// import { Documents } from "./Tabs/Documents";
// import { LaboratoryInformation } from "./Tabs/LaboratoryInformation";
import { Manufacturing } from "./Tabs/Manufacturing";
import { QualityManagement } from "./Tabs/QualityManagement";
import {mainPage} from "./Tabs/mainPage";

export class LegendBio {
    constructor() {
        // this.LaboratoryInformation = new LaboratoryInformation()
        this.Manufacturing = new Manufacturing();
        this.QualityManagement = new QualityManagement();
        this.mainPage = new mainPage();
        
        // this.Documents = new Documents();
    }
}