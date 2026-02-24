import { LaboratoryRecords } from "./LaboratoryRecords/LaboratoryRecords"
import { ReleaseData } from "./LaboratoryRecords/ReleaseData"

export class LaboratoryInformation {
    openLandingPage() {
        cy.openPlanet('Laboratory Information')
    }
    constructor(){
        this.LaboratoryRecords = new LaboratoryRecords()
        this.ReleaseData = new ReleaseData()
    }
}