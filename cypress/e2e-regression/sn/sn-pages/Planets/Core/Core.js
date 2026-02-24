import { InternalReferenceProjects } from "./InternalReferenceProjects"
import { MatrixRecords } from "./MatrixRecords/MatrixRecords"
import { Optiqs360Records } from "./Optiqs360Records/Optiqs360Records"
import { UploadedRecords } from "./UploadedRecords"
import { WindchillRecords } from "./WindchillRecords/WindchillRecords"

export class Core {
    open() {
        cy.openPlanet('Core')
    }
    constructor(){
        this.Optiqs360Records = new Optiqs360Records()
        this.MatrixRecords = new MatrixRecords()
        this.WindchillRecords = new WindchillRecords()
        this.UploadedRecords = new UploadedRecords()
        this.InternalReferenceProjects = new InternalReferenceProjects()
    }
}