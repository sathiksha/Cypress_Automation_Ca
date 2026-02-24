import { Groups } from "./Groups/Groups"
import { MatrixMaterials } from "./Matrix Materials/MatrixMaterials"
import { Projects } from "./Projects/Projects"
import { WindchillChangeNotices } from "./Windchill Change Notices/WindchillChangeNotices"
import { WindchillMaterials } from "./Windchill Materials/WindchillMaterials"

export class ProductDevelopment {
    open() {
        cy.openPlanet('Product Development')
    }
    constructor(){
        this.Groups = new Groups()
        this.Projects = new Projects()
        this.MatrixMaterials = new MatrixMaterials()
        this.WindchillMaterials = new WindchillMaterials()
        this.WindchillChangeNotices = new WindchillChangeNotices()
    }
}