import { GQTest } from '../../jj-pages/GQTest';
// Sprint 4
require('cypress-xpath');

describe('Allows consistent semantic naming of Documents as a Related Object', () => {
    const GQ = new GQTest();

    it('Allows consistent semantic naming of Documents as a Related Object', () => {
        // Step 1: User login
        GQ.login();

        // Navigate to Records planet
        GQ.Planets.RegulatoryAffairs.openLandingPage();
        GQ.Planets.RegulatoryAffairs.Products.openLandingPage();

        // Expected columns for validation
        let column = [
            'Product ID',
            'Product Name',
            'Product Code / JNJ Number',
            'Product Status',
            'Intended Use',
            'Product Dose Form',
            'Family Name',
            'Family Code',
            'Therapeutic Area',
            'Associated Trade Names',
            'Active Ingredients',
            'Max Shelf Life - Climate Zone I',
            'Max Shelf Life - Climate Zone II',
            'Max Shelf Life - Climate Zone III',
            'Max Shelf Life - Climate Zone IVa',
            'Max Shelf Life - Climate Zone IVb'
        ];

        cy.get('div[style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"]').each(($el, index) => {
            cy.get('div[style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"]').eq(index).invoke('text').then((ColumnHeaders) => {
                cy.log(ColumnHeaders);
            });
        });

        cy.wait(1000);

        GQ.Planets.RegulatoryAffairs.Products.expandrecord(2);

        // Scroll elements into view before checking visibility
        cy.contains('Product ID').scrollIntoView().should('be.visible');
        cy.contains('Product Name').scrollIntoView().should('be.visible');
        cy.contains('Product Code / JNJ Number').scrollIntoView().should('be.visible');
        cy.contains('Product Status').scrollIntoView().should('be.visible');
        cy.contains('Intended Use').scrollIntoView().should('be.visible');
        cy.contains('Product Dose Form').scrollIntoView().should('be.visible');
        cy.contains('Family Name').scrollIntoView().should('be.visible');
        cy.contains('Family Code').scrollIntoView().should('be.visible');
        cy.contains('Therapeutic Area').scrollIntoView().should('be.visible');
        cy.contains('Associated Trade Names').scrollIntoView().should('be.visible');
        cy.contains('Active Ingredients').scrollIntoView().should('be.visible');

        GQ.Planets.RegulatoryAffairs.Products.relatedobject()
        cy.contains('Applications').scrollIntoView().should('be.visible');
        cy.contains('Registrations').scrollIntoView().should('be.visible');
        cy.contains('Package Sets').scrollIntoView().should('be.visible');
        cy.contains('Material Codes').scrollIntoView().should('be.visible');

        GQ.Planets.Product.openLandingPage()
        cy.getSC(GQ.Planets.Product.ProductFamilies.locator).should('be.visible');
        cy.getSC(GQ.Planets.Product.Products.locator).should('be.visible');
        cy.getSC(GQ.Planets.Product.LargeMolecules.locator).should('be.visible');
        cy.getSC(GQ.Planets.Product.SmallMolecules.locator).should('be.visible');

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter();

        // Open APALUTAMIDE
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE');
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.open();
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.openLandingPage()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.products.openLandingPage()

        let columns = [
            'Product ID',
            'Product Name',
            'Product Code / JNJ Number',
            'Product Status',
            'Intended Use',
            'Product Dose Form',
            'Family Name',
            'Family Code',
            'Therapeutic Area',
            'Associated Trade Names',
            'Active Ingredients',
            'Max Shelf Life - Climate Zone I',
            'Max Shelf Life - Climate Zone II',
            'Max Shelf Life - Climate Zone III',
            'Max Shelf Life - Climate Zone IVa',
            'Max Shelf Life - Climate Zone IVb'
        ];

        cy.get('div[style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"]').each(($el, index) => {
            cy.get('div[style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"]').eq(index).invoke('text').then((ColumnHeaders) => {
                cy.log(ColumnHeaders);
            });

        });
        cy.wait(1000);

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.products.expandrecord(2)

        // Scroll elements into view before checking visibility
        cy.contains('Product ID').scrollIntoView().should('be.visible');
        cy.contains('Product Name').scrollIntoView().should('be.visible');
        cy.contains('Product Code / JNJ Number').scrollIntoView().should('be.visible');
        cy.contains('Product Status').scrollIntoView().should('be.visible');
        cy.contains('Intended Use').scrollIntoView().should('be.visible');
        cy.contains('Product Dose Form').scrollIntoView().should('be.visible');
        cy.contains('Family Name').scrollIntoView().should('be.visible');

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.products.relatedobject()
        cy.contains('Applications').scrollIntoView().should('be.visible');
        cy.contains('Registrations').scrollIntoView().should('be.visible');
        cy.contains('Package Sets').scrollIntoView().should('be.visible');
        cy.contains('Material Codes').scrollIntoView().should('be.visible');
    })
})
