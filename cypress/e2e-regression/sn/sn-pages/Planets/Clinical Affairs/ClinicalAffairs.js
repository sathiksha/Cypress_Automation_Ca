import { LiteratureSearchObject, LiteratureSearchObjects } from "./Literature Search Projects/LiteratureSearchProjects"
import { Literature } from "./Literature/Literature"

export class ClinicalAffairs{
    open() {
        cy.openPlanet('Clinical Affairs')
    }
    constructor(){
        this.LiteratureSearchProjects = new LiteratureSearchObjects()
        this.Literature = new Literature()
    }
}
