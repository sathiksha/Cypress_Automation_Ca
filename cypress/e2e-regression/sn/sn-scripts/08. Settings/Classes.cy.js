import { GQTest } from '../../sn-pages/GQTest';
describe('10. Settings', () => {
    Cypress.config('defaultCommandTimeout', 120000);
    it('Classes', () => {
    const GQ = new GQTest();

    // Login
    GQ.login()

    // Open Settings
    GQ.Menu.openSettings()

    // Settings - Open Classes
    GQ.Menu.Settings.Classes.openLandingPage()
    
    // Expand All
    GQ.Menu.Settings.Classes.expandAll()

    // Click first element
    cy.getSC(
        GQ.Menu.Settings.Classes.firstElementID()
    ).click()

    // // Default Fields
    // GQ.Menu.Settings.Classes.Class.DefaultFields.open()

    // General
    GQ.Menu.Settings.Classes.Class.General.open()

    // Select Class by Name
    GQ.Menu.Settings.Classes.selectClassByText('QChartView')
    
    // General
    GQ.Menu.Settings.Classes.Class.General.open()

    // // Default Fields
    // GQ.Menu.Settings.Classes.Class.DefaultFields.open()

    // Logout
    GQ.logout()

    })
})