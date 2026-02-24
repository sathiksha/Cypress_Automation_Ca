import { GQTest } from '../../../jj-pages/GQTest'
const { clearReportFile, writeReportFile, renameReportFile } = require('../../../../../support/utils/reportHelper')
require('cypress-xpath')
describe('Intellistreamer Comparision for CAPA Supplemental Investigation', () => {
    const GQ = new GQTest();
    const downloadsFolder = Cypress.config('downloadsFolder');
    const reportFilePath = 'cypress/reports/html/report.txt'

    before(() => {
        clearReportFile(reportFilePath)
    });
    
    it('Data Comparison for CAPA Supplemental Investigation', () => {

         // Login
         GQ.login();

         // Navigation
         GQ.Planets.Product.openLandingPage();
 
         // Filter and Open Product Family
         GQ.Planets.Product.ProductFamilies.toggleFilter();
 
        //  Select Cypress04 – Streamer Test
         GQ.Planets.Product.ProductFamilies.openProductFamilyByText('Cypress04 - Streamer Test');
 
         // Navigate to Qualtiy Management
         GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.openLandingPage()

        //  Open CAPA
         GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.openLandingPage()
 
        //  Open CAPA Supplemental Investigation
         GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.supplementalInvestigation()

           //Add Oid Column
        cy.addColumn( GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.sIheaderID(), ['Oid'])
      
         // Sorting
         GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.sortingSI()
         
         // Clear Downloads Folder
         cy.task('removeDirectory', downloadsFolder);

         cy.downloadExcelFile()
         
        const dateFields = [
            "due_date"
        ];

        const columnMapping = {
            itemRef:["itemnumber"],                  
            itemName:["itemname"],
            description:["description"],
            sqx_capa_number:["related_capa"],
            parent_investigation_number:["parent_investigation"],
            due_date:["due_date"],
            assignee_name:["assignee"],
            status:["status"],        
        };

        cy.compareCsvFiles({
            downloadedFilePath: 'cypress/downloads/Results.csv',
            dbFilePath: 'cypress/qaExcelData/is_product_family_comet_capa_supplemental_investigation_202505261252.csv',
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

