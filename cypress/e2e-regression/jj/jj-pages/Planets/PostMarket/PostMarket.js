import { ComplaintsParent } from "./Complaints/ComplaintsParent"

export class PostMarket {
    openLandingPage() {
        cy.openPlanet('Post Market')
    }
    constructor(){
        this.Complaints = new ComplaintsParent()
    }
}