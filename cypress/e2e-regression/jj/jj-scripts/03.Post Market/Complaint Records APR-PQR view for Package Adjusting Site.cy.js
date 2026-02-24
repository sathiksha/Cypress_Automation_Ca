import { GQTest } from '../../jj-pages/GQTest'
const GQ = new GQTest();
let ppmgValues = [];
let pasValues = [];

describe('Bug Tracking Test', () => {
  it('12735- Complaint Records APR-PQR view for Package Adjusting Site', () => {
    const GQ = new GQTest();
    // Login to Products
    GQ.login();

    // Open Product
    GQ.Planets.Product.openLandingPage()

    // Toggle filter
    GQ.Planets.Product.ProductFamilies.toggleFilter()

    // Complaints tab
    GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')

    // Content
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.open()

    // Post Market
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ComplaintRecords.openLandingPage()


    // Add column Packaging Product Manufacturing 
    cy.addColumn(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ComplaintRecords.ComplaintRecordsTab.columnHeader(), ['Packaging Product Manufacturing Group'])

    //Sorting
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ComplaintRecords.ComplaintRecordsTab.sortingPPMG()


    cy.collectColumnValues(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ComplaintRecords.ComplaintRecordsTab.ppmgColumn()).then(ppmgValues => {

      // Step 1: Actions between the two data captures
      GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ComplaintRecords.ComplaintRecordsTab.openAPR_PQR();

      GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ComplaintRecords.ComplaintRecordsTab.sortingPAS();

      // Step 2: Collect the second set
      cy.collectColumnValues(GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ComplaintRecords.ComplaintRecordsTab.pasColumn()).then(pasValues => {

        // Step 3: Compare the arrays
        expect(ppmgValues.length).to.eq(pasValues.length);

        pasValues.forEach((val, index) => {

          expect(val).to.eq(ppmgValues[index], `Mismatch at index ${index}`);

        });

      });

    });

    // Logout
    GQ.logout()
  })
})