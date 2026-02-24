import { GQTest } from "../../../../jj-pages/GQTest";
import { ElementLibrary } from "../../../../jj-pages/Navigation Bar/ElementLibrary";
const GQ = new GQTest();
if (!Cypress.env('onlyRunReadOnlyTests')) {
    describe('UAT/5.0', () => {
        it('UAT-014 Laboratory Data view eLIMs IAL Download', () => {

            // Login
            GQ.login('PQM360 General User')

            // Laboratory Info planet
            GQ.Planets.LaboratoryInformation.openLandingPage()

            // Laboratory Records
            GQ.Planets.LaboratoryInformation.LaboratoryRecords.openLandingPage()

            // Specification
            GQ.Planets.LaboratoryInformation.LaboratoryRecords.Specifications.open()

            // View Dropdown
            GQ.Planets.LaboratoryInformation.LaboratoryRecords.Specifications.openStandardSpecificationIALDownloadView()

            // AutoTest All
            cy.getColumnsAndTypes(
                GQ.Planets.LaboratoryInformation.LaboratoryRecords.Specifications.specID()
            )
                .then(tableInfo => {
                    let availableCols = []
                    let expectedColumns = ['Spec ID', 'Version', 'Manufacture Location', 'Stability Site', 'Product/Material Description', 'Version Status', 'Make Current', 'SMD Reference', 'Analysis', 'Measurement', 'Concatenate CQA', 'Limit Type ID', 'Limit 1', 'Limit 2', 'Units']
                    tableInfo.columns.map((obj) => {
                        availableCols.push(obj.textContent)
                    })
                    cy.log(availableCols)
                    for (let i = 0; i < expectedColumns.length; i++) {
                        expect(availableCols).to.include(expectedColumns[i])
                    }
                })

            // Search 99
            GQ.Planets.LaboratoryInformation.LaboratoryRecords.Specifications.search99()
            
            // Download
            GQ.Planets.LaboratoryInformation.LaboratoryRecords.Specifications.clickDownload()
            
            // View Release dropdown
            GQ.Planets.LaboratoryInformation.LaboratoryRecords.Specifications.openReleaseSpecificationIALDownloadView()

            // Release Specification columns
            cy.getColumnsAndTypes(
                GQ.Planets.LaboratoryInformation.LaboratoryRecords.Specifications.getReleaseSpecID()
            )
                .then(tableInfo => {
                    let availableCols = []
                    let expectedColumns = ['Spec ID', 'Version', 'Material', 'Manufacturing Site', 'Product/Material Description', 'Version Status', 'Make Current', 'SMD Reference', 'Analysis', 'Measurement', 'Concatenate CQA', 'Limit Type ID', 'Limit 1', 'Limit 2', 'Units']


                    tableInfo.columns.map((obj) => {
                        availableCols.push(obj.textContent)
                    })
                    cy.log(availableCols)
                    for (let i = 0; i < expectedColumns.length; i++) {
                        expect(availableCols).to.include(expectedColumns[i])
                    }
                })
            // Search 99 and Download
            GQ.Planets.LaboratoryInformation.LaboratoryRecords.Specifications.search99Download()

            
            // Logout
            GQ.logout()

        })
    })

}