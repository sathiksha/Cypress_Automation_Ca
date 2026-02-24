import { GQTest } from '../../jj-pages/GQTest'
if (!Cypress.env('onlyRunReadOnlyTests')) {
    describe('Product', () => {
        Cypress.config('defaultCommandTimeout', 120000);
        it('Create New Product Families', () => {
            const GQ = new GQTest();
            GQ.login();
            GQ.Planets.Product.openLandingPage();
            let page = GQ.Planets.Product.ProductFamilies;
            page.openLandingPage();
            // Bio-Therapeutics
            page.createProductFamily_BiotTherapeutics(
                'My New Product - BioTherapeutics', 
                'Random Number', 
                'Random Status', 
                'New Therapeutic Area'
            );
            // Small Molecules
            page.createProductFamily_SmallMolecules(
                'My New Product - Small Molecule', 
                'Random Number', 
                'Random Status', 
                'New Therapeutic Area'
            )
            // Delete created Product Families
            page.deleteProductFamilyByText('My New Product - BioTherapeutics');
            page.deleteProductFamilyByText('My New Product - Small Molecule');
            page.refresh();
            GQ.logout();
        })
    })
}