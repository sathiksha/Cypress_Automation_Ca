import { GQTest } from '../../jj-pages/GQTest'
// Sprint 2
describe('Sprint 2', () => {
    const GQ = new GQTest();
    it('Allows sub noun Effectiveness Review of CAPA QMS data of the new COMET system', () => {

        // Login 
        GQ.login()

        // Click on Quality Management planet
        GQ.Planets.QualityManagement.openLandingPage()

        // Click on CAPAs tab
        GQ.Planets.QualityManagement.CAPAs.openLandingPage()

        // Click Effectiveness subtab
        GQ.Planets.QualityManagement.CAPAs.EffectivenessReview.open()

        // Pending Step - KK block step 5        // Check the columns are available

        // Test the dropdown columns
        cy.autoTestOnly(
            GQ.Planets.QualityManagement.CAPAs.EffectivenessReview.numberHeaderID(),
            {

              'Approval status' : [0],
              'Status' : [0],
              'Resolution': [0],
              'Extensions Requested': [0],
              'Extensions Granted': [0],
              'Effectiveness Plan Status': [0]
            }
          );

        // Click Filter Items
        GQ.Planets.QualityManagement.CAPAs.EffectivenessReview.toggleFilter()

        // Click Chart Icon
        GQ.Planets.QualityManagement.CAPAs.EffectivenessReview.Chart.open()

        // Click Analytics tab
        GQ.Planets.QualityManagement.CAPAs.EffectivenessReview.Chart.Analytics.open()

        // Click Facet Picker Icon
        GQ.Planets.QualityManagement.CAPAs.EffectivenessReview.Chart.Analytics.clickFacetPicker()

        // Click Row Attributes
        GQ.Planets.QualityManagement.CAPAs.EffectivenessReview.Chart.Analytics.clickRowAttributes()

        // Pending Step - KK Verify the dropdown list

        // Click Column Attributes
        GQ.Planets.QualityManagement.CAPAs.EffectivenessReview.Chart.Analytics.clickColumnAttributes()

        // Pending Step - KK verify the dropdown list

        // Click Analytics
        GQ.Planets.QualityManagement.CAPAs.EffectivenessReview.Chart.Analytics.open()

        // Click Status tab
        GQ.Planets.QualityManagement.CAPAs.EffectivenessReview.Chart.Status.open()

        // Click Status/owner
        GQ.Planets.QualityManagement.CAPAs.EffectivenessReview.Chart.StatusOrOwner.open()

        // Click Chart Icon
        GQ.Planets.QualityManagement.CAPAs.EffectivenessReview.Chart.open()

        // Open Record
        GQ.Planets.QualityManagement.CAPAs.EffectivenessReview.openRecordByIndex(1)

        // Click Details Tab 
        GQ.Planets.QualityManagement.CAPAs.EffectivenessReview.Details.open()

        // Pending Step - KK Details form view        // verify 

        // Click Extension Request Form View 
        GQ.Planets.QualityManagement.CAPAs.EffectivenessReview.Details.expandExtensionRequest()

        // Pending Step - KK Extension Request form view        // verify 

        // Pending Step - KK verify list of related planets        //verify

        // Click Product planet
        GQ.NavBar.navigateToProduct()

        // Click on filter icon
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        // Select APALUTAMIDE
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText("APALUTAMIDE")

        // Navigate to Quality Records tab 
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.openLandingPage()

        // Open CAPAs tab 
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.open()

        // Click Effectiveness subtab
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.EffectivenessReview.open()

        // Pending Step - KK block step 5        // Check the columns are available

        // Open Record
        // GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.EffectivenessReview.openRecordByIndex()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.EffectivenessReview.openARecord()

        // Click Details Tab 
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.EffectivenessReview.Details.open()

        // Pending Step - KK Details form view        // verify 

        // Click Extension Request Form View 
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.EffectivenessReview.Details.expandExtensionRequest()

        // Pending Step - KKExtension Request form view        // verify 

        // Maximize Selector
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.EffectivenessReview.Details.maximizeSelector()

        // Click Filter Items
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.EffectivenessReview.toggleFilter()

        // Click Chart Icon
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.EffectivenessReview.Chart.open()

        // Click Analytics tab
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.EffectivenessReview.Chart.Analytics.open()

        // Click Facet Picker Icon
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.EffectivenessReview.Chart.Analytics.clickFacetPicker()

        // Click Row Attributes
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.EffectivenessReview.Chart.Analytics.clickRowAttributes()

        // Pending Step - KK Verify the dropdown list 

        // Click Column Attributes
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.EffectivenessReview.Chart.Analytics.clickColumnAttributes()

        // Pending Step - KK verify the dropdown list

        // Click Analytics
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.EffectivenessReview.Chart.Analytics.open()

        // Click Status tab
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.EffectivenessReview.Chart.Status.open()

        // Click Status/owner tab
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.EffectivenessReview.Chart.StatusOrOwner.open()

        // Click Chart Icon
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.EffectivenessReview.Chart.open()

        // Wait
        cy.wait(2002)
        
        // Click Filter Items
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.EffectivenessReview.toggleFilter()
        
        // Wait
        cy.wait(2002)

        // Test the dropdown columns
        cy.autoTestOnly(
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.EffectivenessReview.numberHeaderID(),
        {

                'Approval status' : [0],
                'Status' : [0],
                'Resolution': [0],
                'Extensions Requested': [0],
                'Extensions Granted': [0],
                'Effectiveness Plan Status': [0]
        }
        );
    
        // Logout
        GQ.logout()


    })
})
