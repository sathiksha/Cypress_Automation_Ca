import { Activities } from "./Activities"
import { Employees } from "./Employees"
import { ResourceReports } from "./ResourceReports"

export class PQMResourceManagement {
    openLandingPage() {
        cy.openPlanet('PQM Res. Management')
    }
    constructor(){
        this.Activities = new Activities()
        this.Employees = new Employees()
        this.ResourceReports = new ResourceReports()
    }
}