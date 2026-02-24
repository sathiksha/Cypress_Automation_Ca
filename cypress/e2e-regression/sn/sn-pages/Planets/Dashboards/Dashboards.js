import { ProductDevelopment } from "./Product Development/ProductDevelopment"

export class Dashboards{
    open() {
        cy.openPlanet('Dashboards')
    }
    constructor(){
        this.ProductDevelopment = new ProductDevelopment()
    }
}