import { GQTest } from '../../jj-pages/GQTest'
describe('06. PQM Res Management', () => {
    Cypress.config('defaultCommandTimeout', 180000);
    it('PQM Employees', () => {
    const GQ = new GQTest();
    // Login
    GQ.login();

    // Open PQM Res Management
    GQ.Planets.PQMResourceManagement.openLandingPage()

    // Employees
    GQ.Planets.PQMResourceManagement.Employees.openLandingPage()

    // Refresh
    GQ.Planets.PQMResourceManagement.Employees.refresh()

    // Toggle Filter
    GQ.Planets.PQMResourceManagement.Employees.toggleFilter()

    // Toggle Filter
    // GQ.Planets.PQMResourceManagement.Employees.toggleFilter()    

    // // Auto Test
    cy.autoTestAll(
        GQ.Planets.PQMResourceManagement.Employees.gridID()
        , {} 
    )
    
    //Logout
    GQ.logout()

    })
})
