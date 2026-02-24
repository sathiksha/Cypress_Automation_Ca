import { GQTest } from '../../jj-pages/GQTest'
// Sprint 2
describe('Sprint 2', () => {
    const GQ = new GQTest();
    it('Allows sub noun NC Corrections of Nonconformances QMS data of the new COMET system', () => {

        // Login 
        GQ.login()

        //Click on Product Icon
        GQ.Planets.Product.openLandingPage()

       GQ.Planets.QualityManagement.openLandingPage()

       GQ.Planets.QualityManagement.NonConformances.openLandingPage()
       
       GQ.Planets.QualityManagement.NonConformances.NCCorrections.open()
       
       let expectedColumnsQXD = [
        'Number',
        '👁',
        'Name',
        'Description',
        'Related NC',
        'Action Category',
        'Action Plan Type',
        'PV Relevant',
        'Assignee',
        'Approved',
        'Days Required',
        'Created Date',
        'Is Complete',
        'Completion Date',
        'Completed By'
       
    ]
    // Read column
    cy.getColumnsAndTypes(
        GQ.Planets.QualityManagement.NonConformances.NCCorrections.getColumnName()
    )
    .then(tableInfo => {
        let availableCols = []
        tableInfo.columns.map((obj) => {
            availableCols.push(obj.textContent)
        })
        cy.log(availableCols)
        for (let i = 0; i < expectedColumnsQXD.length; i++) {
            expect(availableCols).to.include(expectedColumnsQXD[i])
        }
    })
   
   GQ.logout()

    })
})
