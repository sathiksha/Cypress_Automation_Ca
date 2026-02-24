import { LargeMolecules } from "./LargeMolecules"
import { ProductFamilies } from "./ProductFamilies"
import { Products } from "./Products"
import { SmallMolecules } from "./SmallMolecules"
import { Training } from "./Training"

export class Product {
    openLandingPage() {
        cy.openPlanet('Product')
    }
    constructor() {
        this.navigationPath = 'Login -> Product Planet'
        this.SmallMolecules = new SmallMolecules()
        this.ProductFamilies = new ProductFamilies()
        this.LargeMolecules = new LargeMolecules()
        this.Products = new Products()
        this.Training = new Training()
    }
}