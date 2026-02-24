import { GQTest } from '../../../jj-pages/GQTest'
const { clearReportFile, writeReportFile, renameReportFile } = require('../../../../../support/utils/reportHelper')
require('cypress-xpath')
describe('Intellistreamer Comparision for Specifications ', () => {
    const GQ = new GQTest();
    const downloadsFolder = Cypress.config('downloadsFolder');
    const reportFilePath = 'cypress/reports/html/report.txt'

    before(() => {
        clearReportFile(reportFilePath)
    });

    it('Specifications', () => {

        // Login
        GQ.login()

        // Open Product Planet
        GQ.Planets.Product.openLandingPage()

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        // Open Cypress03 - Streamer Test
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('Cypress03 - Streamer Test')

         cy.checkforErrorPopup()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.openLandingPage()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.Specifications.openLandingPage()

        cy.wait(2000)

        //Add Oid Column
        cy.addColumn(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.Specifications.headerID(), ['Oid'])

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.Specifications.sorting()

        // Clear Downloads Folder
        cy.task('removeDirectory', downloadsFolder);

        cy.downloadExcelFile()

        const dateFields = [
            'make_current',
            'make_current'
        ]

        const columnMapping = {
            specid: 'spec_id',
            description: 'product_or_material_description',
            versionstatus: 'version_status',
            u_specname: 'spec_name',
            notes: 'notes',
            u_common: 'common',
            u_localref: 'local_ref',
            createby: 'create_by',
            u_appby: 'approved_by',
            u_appreason: 'approval_reason',
            smd_refrence: 'smd_reference',
            make_current: 'make_current',
            analysis: 'analysis',
            measurement: 'measurement',
            concatenate_cqa: 'concatenate_cqa',
            limittypeid: 'limit_type_id',
            limit1: 'limit_1',
            limit2: 'limit_2',
            units: 'units',
            stability: 'stability'
        };


        cy.compareCsvFiles({
            downloadedFilePath: 'cypress/downloads/Results.csv',
            dbFilePath: 'cypress/qaExcelData/is_product_family_laboratory_specification_202505231101.csv',
            columnMapping,
            dateFields
        }).then((result) => {
            writeReportFile(result, reportFilePath)
        })

        cy.wait(5000)
        // Logout
        GQ.logout()

    })

    //Rename report with Time stamp
    after(() => {
        renameReportFile()
    });
})

