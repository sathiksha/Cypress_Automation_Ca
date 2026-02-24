import { CDARFiles } from "./CDAR Files/CDARFiles"
import { Complaints } from "./Complaints/Complaints"
import { PMSFiles } from "./PMS Files/PMSFiles"
import { PMSGroups } from "./PMS Groups/PMSGroups"

export class PostMarket{
    open() {
        cy.openPlanet('Post Market')
    }
    constructor(){
        this.PMSFiles =  new PMSFiles()
        this.CDARFiles = new CDARFiles()
        this.Complaints = new Complaints()
        this.PMSGroups = new PMSGroups()
    }
}