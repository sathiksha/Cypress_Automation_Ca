import { GQTest } from '../../../jj-pages/GQTest'
describe('06. PQM Res Management', () => {
    Cypress.config('defaultCommandTimeout', 180000);
    it('PQM Activities', () => {
        const GQ = new GQTest();
         // Login
    GQ.login();

    // Open PQM Res Management
    GQ.Planets.PQMResourceManagement.openLandingPage()

    // Activities
    GQ.Planets.PQMResourceManagement.Activities.openLandingPage()

    // Open Chart
    GQ.Planets.PQMResourceManagement.Activities.Chart.open()

    // Open Type
    GQ.Planets.PQMResourceManagement.Activities.Chart.openType()

    // Bar
    GQ.Planets.PQMResourceManagement.Activities.Chart.typeSetBar()

    // Line
    GQ.Planets.PQMResourceManagement.Activities.Chart.typeSetLine()

    // Open RnD
    GQ.Planets.PQMResourceManagement.Activities.Chart.openRnd()

    // Column
    GQ.Planets.PQMResourceManagement.Activities.Chart.rndSetColumn()

    // Radar
    GQ.Planets.PQMResourceManagement.Activities.Chart.rndSetRadar()

    // Open Too
    GQ.Planets.PQMResourceManagement.Activities.Chart.openToo()

    // Histogram
    GQ.Planets.PQMResourceManagement.Activities.Chart.tooSetHistogram()

    // Area
    GQ.Planets.PQMResourceManagement.Activities.Chart.tooSetArea()

    GQ.logout()

    })
})