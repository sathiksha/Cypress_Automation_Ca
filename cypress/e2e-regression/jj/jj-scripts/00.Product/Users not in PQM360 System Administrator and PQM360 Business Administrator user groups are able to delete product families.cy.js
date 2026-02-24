import { GQTest } from "../../jj-pages/GQTest";
const GQ = new GQTest();
if (!Cypress.env("onlyRunReadOnlyTests")) {
describe('Bug Tracking Tests', () => {
    it('10028-Users not in PQM360 System Administrator and PQM360 Business Administrator user groups are able to delete product families', () => {
        
        // Login
        GQ.login('PQM360 General User')

        //  Product planet
        GQ.Planets.Product.openLandingPage()

        // Product Families
        GQ.Planets.Product.ProductFamilies.openLandingPage()

        // Toggle filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        // Select Record
        GQ.Planets.Product.ProductFamilies.selectProductFamilyByText('My Family')

        // Delete with no
        GQ.Planets.Product.ProductFamilies.checkDeleteOption()

        // Log out
        GQ.logout()

        // Wait
        cy.wait(2000)

        // Login
        GQ.login('PQM360 System Administrator')

        //  Product planet
        GQ.Planets.Product.openLandingPage()

        // Product Families
        GQ.Planets.Product.ProductFamilies.openLandingPage()

        // Toggle filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        // Select Record
        GQ.Planets.Product.ProductFamilies.selectProductFamilyByText('My Family')

        // Delete click No
        GQ.Planets.Product.ProductFamilies.deleteWithNo()

        // Logout
        GQ.logout()

        // Login
        GQ.login('PQM360 Business Administrator')

        //  Product planet
        GQ.Planets.Product.openLandingPage()

        // Product Families
        GQ.Planets.Product.ProductFamilies.openLandingPage()

        // Toggle filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        // Select Record
        GQ.Planets.Product.ProductFamilies.selectProductFamilyByText('My Family')

        // Delete click No
        GQ.Planets.Product.ProductFamilies.deleteWithNo()

        // Logout
        GQ.logout()


    })
})
}