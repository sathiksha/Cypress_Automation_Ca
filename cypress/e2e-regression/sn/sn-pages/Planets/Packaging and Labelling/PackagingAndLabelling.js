import { MatrixPackagingConfiguration } from "./Matrix Packaging Configuration/MatrixPackagingConfiguration"
import { WindchillPackagingElements } from "./WIndchill Packaging Elements/WIndchillPackagingElements"


export class PackagingAndLabelling{
    open(){
        cy.openPlanet('Packaging & Labeling') 
    }
    constructor(){
        this.MatrixPackagingConfiguration = new MatrixPackagingConfiguration()
        this.WindchillPackagingElements = new WindchillPackagingElements()
    }
}