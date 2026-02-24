import { DHDIMParts } from "./DH DIM Parts/DHDIMParts"
import { DHSales } from "./DH Sales/DHSales"

export class Production{
    open() {
        cy.openPlanet('Production')
    }
    constructor(){
        this.DHSales = new DHSales()
        this.DHDIMParts = new DHDIMParts()
    }
}