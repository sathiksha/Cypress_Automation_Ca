import { GQTest } from '../../jj-pages/GQTest';
// Sprint 4
require('cypress-xpath');

describe('Allows Related Objects of Stability Studies', () => {
    const GQ = new GQTest();

    it('Allows Related Objects of Stability Studies', () => {
        // Step 1: User login
        GQ.login();

        // Step 2: Open Laboratory Information planet
        GQ.Planets.LaboratoryInformation.openLandingPage();

        // Step 3: Expand the Stability Studies record
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.openLandingPage()

        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.expandRecordByIndex(0)

        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.ExpandedStabilityStudy.RelatedObjects.open()

        const stabilityStudyTabs = [
            'Specifications',
            'Test Methods',
            'Change Controls',
            'Nonconformances',
            'Laboratory Investigations',
            'Batches',
            'Samples'
        ];

        // Step 5: Verify that each tab is visible
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.ExpandedStabilityStudy.RelatedObjects.verifyTab(stabilityStudyTabs);
        

        // Open Product Planet and navigate to the Product Families
        GQ.Planets.Product.openLandingPage();
        GQ.Planets.Product.ProductFamilies.openLandingPage();

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter();

        // Open APALUTAMIDE
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE');

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.open();

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.openLandingPage();

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.Studies.openLandingPage();

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.Studies.Filtered.toggleFilter()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.Studies.Filtered.selectStudyRecord('Study-241961')
        
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.Studies.Filtered.ExpandedRecord.RelatedObjects.open()
         
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.Studies.Filtered.ExpandedRecord.RelatedObjects.verifyTabs(stabilityStudyTabs)
        
        // Step 6: Log out after completing the test
        GQ.logout();
    });
});
