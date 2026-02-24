import { GQTest } from '../../jj-pages/GQTest'
// Sprint 4
require('cypress-xpath')
describe('Sprint 4', () => {
    const GQ = new GQTest();
    it('Allows consistent semantic naming of planets with Product Family blue tabs', () => {
   
        // Login
        GQ.login()

        // Home Page
        GQ.NavBar.Home.openLandingPage()

        // Expected List
        let expectedItemsList = [
            'Documents',
            'Regulatory Affairs',
            'Post Market',
            'Quality Management',
            'Laboratory Information',
            'PQM Res. Management',
            '360 Tutorials',
            'Suppliers',
            'Manufacturing',
            'Process Development',
            'Risk',
            'Product'
           ]

        // Check product planets name
        cy.getPlanetNames().then(items =>{
            for(let i=0;i<items.length;i++){
                cy.wrap(items).should('include',expectedItemsList[i])
            }
        })

        // Navigate to Product planet
        GQ.Planets.Product.openLandingPage()
        
        // Click Related planets icon
        GQ.NavBar.relatedPlanets()

        // Read Items
        cy.getMenuItems(
            '//Menu[level=0]/body/row[itemName=Documents||0]/col[fieldName=itemName||0]'
        ).then(items =>{
            for(let i=0;i<items.length;i++){
                cy.wrap(items[i]).should('equal',expectedItemsList[i])
            }
        })

               // Logout
        GQ.logout()

    })
})
        