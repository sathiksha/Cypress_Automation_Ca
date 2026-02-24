import {GQTest} from '../../../jnj-pages/GQTest.js'

describe('7421-Allows restriction of Product Family_Product role assignment by user group', () => {
    const GQ = new GQTest();


    it('Allows restriction of Product Family_Product role assignment by user group', () => {
        // Login
        GQ.Login()

        GQ.Planets.Product.ProductFamily.Content.Headers.roleHeader.UserGroupsNavigation()

        GQ.Planets.Product.ProductFamily.Content.Headers.roleHeader.SystemAdministratorUserValidation()

        // Open Product
        GQ.Planets.openPlanet('Product')

        GQ.Planets.Product.ProductFamily.toggleFilter()
        // Open Product Family
        GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

        GQ.Planets.Product.ProductFamily.Content.open()

        GQ.Planets.Product.ProductFamily.Content.Headers.roleHeader.open()

        GQ.Planets.Product.ProductFamily.Content.Headers.roleHeader.roleValidation()

        GQ.Planets.Product.ProductFamily.Content.Headers.roleHeader.PrimaryDropDown()

        GQ.Planets.Product.ProductFamily.Content.Headers.roleHeader.PrimaryDropDownUserNameValidation()

        GQ.Planets.Product.ProductFamily.Content.Headers.roleHeader.ProductModifierValidation()

        GQ.Planets.Product.ProductFamily.Content.Headers.roleHeader.ProductOwnerValidation()

        GQ.Planets.Product.ProductFamily.Content.Headers.roleHeader.SystemAdministratorUserRemove()

        GQ.Logout()

    });
});
