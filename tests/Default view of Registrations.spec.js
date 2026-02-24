const { test, expect } = require('@playwright/test');
const { GQTest } = require('../cypress/e2e-regression/jj/jnj-pages/GQTest');

test.describe("Default view of Registrations", () => {
    let GQ;

    test.beforeEach(async ({ page }) => {
        GQ = new GQTest(page);
    });

    test("Default view of Registrations - Planet", async () => {
        // Login
        await GQ.Login();

        // Open Planet
        await GQ.Planets.openPlanet("Regulatory Affairs");

        // Open page
        await GQ.Planets.RegulatoryAffairs.Registrations.open();

        // Refresh
        await GQ.Planets.RegulatoryAffairs.Registrations.refresh();

        // Verify Default Predefined Filter
        await GQ.Planets.RegulatoryAffairs.Registrations.verifyDefaultFilter();

        // Verify All Predefined Filter
        await GQ.Planets.RegulatoryAffairs.Registrations.selectAllFilter();

        // check Header Icons
        await GQ.Planets.RegulatoryAffairs.Registrations.checkHeaderIcons();

        // Check Column availability
        await GQ.Planets.RegulatoryAffairs.Registrations.checkColumns();

        // Check multi-choice picker Column availability
        await GQ.Planets.RegulatoryAffairs.Registrations.checkMultiChoicePickerColumns();

        // open a Record
        await GQ.Planets.RegulatoryAffairs.Registrations.openARecord();

        // Click Details Tab
        await GQ.Planets.RegulatoryAffairs.Registrations.openDetails();

        // check Forms and Fields
        await GQ.Planets.RegulatoryAffairs.Registrations.checkFormsandFieldsAvailablity();

        // Open related Objects
        await GQ.Planets.RegulatoryAffairs.Registrations.openRelatedObjects();

        // Check Related Objects
        await GQ.Planets.RegulatoryAffairs.Registrations.checkRelatedObjects();

        // minimize the record
        await GQ.Planets.RegulatoryAffairs.Registrations.minimizeARecord();

        // Logout
        await GQ.Logout();
    });

    test("Default view of Registrations - Product > Content", async () => {
        // Login
        await GQ.Login();

        // Open Product
        await GQ.Planets.openPlanet("Product");

        // Toggle Filter
        await GQ.Planets.Product.ProductFamily.toggleFilter();

        // Open Product Family
        await GQ.Planets.Product.ProductFamily.open("APALUTAMIDE");

        // Click Content
        await GQ.Planets.Product.ProductFamily.Content.open();

        // Open page
        await GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.open();

        // Open Registrations
        await GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.Registrations.open();

        // Open All
        await GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.Registrations.clickAll();

        // Close Side Pane
        await GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.Registrations.closeSidePane();

        // Refresh
        await GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.Registrations.refresh();

        // check Header Icons
        await GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.Registrations.checkHeaderIcons();

        // Check Column availability
        await GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.Registrations.checkColumns();

        // Check multi-choice picker Column availability
        await GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.Registrations.checkMultiChoicePickerColumns();

        // open a Record
        await GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.Registrations.openARecord();

        // check Forms and Fields
        await GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.Registrations.checkFormsandFieldsAvailablity();

        // Open related Objects
        await GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.Registrations.openRelatedObjects();

        // Check Related Objects
        await GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.Registrations.checkRelatedObjects();

        // minimize the record
        await GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.Registrations.minimizeARecord();

        // Logout
        await GQ.Logout();
    });

    // ... other tests would follow similar pattern
});
