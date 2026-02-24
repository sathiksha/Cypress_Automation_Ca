import { GQTest } from '../../../jnj-pages/GQTest.js'

describe('422 - Allows default view of Product Families, Large Molecules, and Small Molecules', () => {
    const GQ = new GQTest();


    it('Allows default view of Product Families, Large Molecules, and Small Molecules', () => {
        // Login
        GQ.Login()

        // Open Product
        GQ.Planets.openPlanet('Product')

        GQ.Planets.Product.ProductsVisible()

        GQ.Planets.Product.ProductFamily.LargeMolecules.LargeMoleculesVisible()

        GQ.Planets.Product.ProductFamily.SmallMolecules.SmallMoleculesVisible();

        GQ.Planets.Product.ProductFamily.LargeMolecules.ProductFamilySectionValidation()

        GQ.Planets.Product.ProductFamily.LargeMolecules.LargeMoleculesOpen()

        GQ.Planets.Product.ProductFamily.LargeMolecules.checkColumns()

        GQ.Planets.Product.ProductFamily.SmallMolecules.SmallMoleculesOpen()

        GQ.Planets.Product.ProductFamily.SmallMolecules.ProductFamilySectionValidation()

        GQ.Planets.Product.ProductFamily.SmallMolecules.checkColumns()

        GQ.Logout()


    })
})