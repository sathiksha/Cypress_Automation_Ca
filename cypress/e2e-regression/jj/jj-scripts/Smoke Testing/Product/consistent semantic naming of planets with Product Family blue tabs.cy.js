import { GQTest } from '../../../jj-pages/GQTest'
describe('00. Product', () => {
  Cypress.config('defaultCommandTimeout', 180000);
  it('consistent semantic naming of planets with Product Family blue tabs', () => {
    const GQ = new GQTest()
   
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
        GQ.NavBar.readItems()

        // Logout
        GQ.logout()

    })
})
        