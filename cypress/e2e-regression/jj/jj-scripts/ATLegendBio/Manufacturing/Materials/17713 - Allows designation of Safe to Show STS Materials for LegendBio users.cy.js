import { GQTest } from "../../../../jj-pages/GQTest"
import { LegendBio } from "../../../../jj-pages/AT LegendBio/LegendBio"
// Sprint 20
describe('Sprint 20', () => {
    const GQ = new GQTest();
    const ATLegendBio = new LegendBio()

    it('Allows designation of Safe-to-Show (STS) Materials and a consistent implicit criteria for Material related records to control visibility for LegendBio users', () => {

        // Login
        GQ.login()

        GQ.Planets.Product.openLandingPage()

        // Product Families
        GQ.Planets.Product.ProductFamilies.openLandingPage()

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        // Product Record
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('ciltacabtagene autoleucel')

        //Open content
        GQ.Planets.Product.ProductFamilies.selectLegendBioWhitelistMaterials()

        let expectedColumnsQXD = [
            'Product Code',
            'Product Code Description',
            'International Brand',
            'Source System',
            'Destination Market',
            'Product Type',
            'Process Step',
            'Process Stage'
        ]

        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.legendBioMaterialsHeaderID()
        ).then(tableInfo => {
            let availableCols = []
            tableInfo.columns.map((obj) => {
                availableCols.push(obj.textContent)
            })

            cy.log(availableCols)
            for (let i = 0; i < expectedColumnsQXD.length; i++) {
                expect(availableCols).to.include(expectedColumnsQXD[i])
            }

        })

        GQ.Planets.Product.ProductFamilies.clickSelectMaterialsIcon()

        GQ.Planets.Product.ProductFamilies.selectMaterials().then((text) => {

            GQ.logout()

            GQ.login('AT LegendBio')

            // Product planet
            GQ.Planets.Product.openLandingPage()

            // Product Families
            GQ.Planets.Product.ProductFamilies.openLandingPage()

            // Product Record
            GQ.Planets.Product.ProductFamilies.openProductFamilyByIndex(0)

            //Open content
            GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.open()

            //Open Manufacturing
            ATLegendBio.Manufacturing.openLandingPage()

            ATLegendBio.Manufacturing.Materials.open()

            ATLegendBio.Manufacturing.Materials.toggleFilter()

            // ATLegendBio.Manufacturing.Materials.checkProductCode(text)

            GQ.logout()

            // Login
            GQ.login()

            GQ.Planets.Product.openLandingPage()

            // Product Families
            GQ.Planets.Product.ProductFamilies.openLandingPage()

            // Toggle Filter
            GQ.Planets.Product.ProductFamilies.toggleFilter()

            // Product Record
            GQ.Planets.Product.ProductFamilies.openProductFamilyByText('ciltacabtagene autoleucel')

            //Open content
            GQ.Planets.Product.ProductFamilies.selectLegendBioWhitelistMaterials()

            GQ.Planets.Product.ProductFamilies.whitelisteMaterialsFilter()

            GQ.Planets.Product.ProductFamilies.removeWhiteListedMaterial(text)

            GQ.logout()

            // Login
            GQ.login('AT LegendBio')

            // Product planet
            GQ.Planets.Product.openLandingPage()

            // Product Families
            GQ.Planets.Product.ProductFamilies.openLandingPage()

            // Product Record
            GQ.Planets.Product.ProductFamilies.openProductFamilyByIndex(0)

            //Open content
            GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ATLegendBio.open()

            //Open Manufacturing
            ATLegendBio.Manufacturing.openLandingPage()

            ATLegendBio.Manufacturing.Materials.open()

            ATLegendBio.Manufacturing.Materials.toggleFilter()

            ATLegendBio.Manufacturing.Materials.checkWhitelistedCodeRemoved(text)

        });

        GQ.logout()
    })
})
