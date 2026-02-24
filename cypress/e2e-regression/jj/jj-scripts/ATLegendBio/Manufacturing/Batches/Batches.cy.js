import { GQTest } from "../../../../jj-pages/GQTest"
import { LegendBio } from "../../../../jj-pages/AT LegendBio/LegendBio"
// Sprint 20
describe('Sprint 20', () => {
    const GQ = new GQTest();
    const ATLegendBio = new LegendBio()

    it('AT LegendBio Batches', () => {

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

        ATLegendBio.Manufacturing.Batches.open()

        ATLegendBio.Manufacturing.Batches.refresh()

        let multichoiceColumns = [
            'Product Type',
            'Plant Name',
            'Disposition Status',
        ]

        ATLegendBio.Manufacturing.Batches.toggleFilter()

        ATLegendBio.Manufacturing.Batches.checkMultiChoicePickerColumns(multichoiceColumns)

        ATLegendBio.Manufacturing.Batches.viewFinishedGoods()

        ATLegendBio.Manufacturing.Batches.viewFinalApi()

        ATLegendBio.Manufacturing.Batches.viewNonBatchedMgd()        

        ATLegendBio.Manufacturing.Batches.viewAll()

        //Download data as csv file
        cy.downloadExcelFile()

        ATLegendBio.Manufacturing.Batches.selectFirstRecord()

        ATLegendBio.Manufacturing.Batches.selectMatchingProductCode().then((productCode) => {

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

            ATLegendBio.Manufacturing.Batches.checkProductCode(productCode)

            GQ.logout()

        })

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

        ATLegendBio.Manufacturing.Batches.open()

        ATLegendBio.Manufacturing.Batches.openAFirstRecord()

        ATLegendBio.Manufacturing.Batches.BatchExplorer.open()

        ATLegendBio.Manufacturing.Batches.BatchExplorer.SimpleBatchFlow.open()

        ATLegendBio.Manufacturing.Batches.BatchExplorer.SimpleBatchFlow.inputsRefresh()

        ATLegendBio.Manufacturing.Batches.BatchExplorer.SimpleBatchFlow.inputsFilter()

        ATLegendBio.Manufacturing.Batches.BatchExplorer.SimpleBatchFlow.inputsDownload()

        ATLegendBio.Manufacturing.Batches.BatchExplorer.SimpleBatchFlow.outputsRefresh()

        ATLegendBio.Manufacturing.Batches.BatchExplorer.SimpleBatchFlow.outputsRefresh()

        ATLegendBio.Manufacturing.Batches.BatchExplorer.SimpleBatchFlow.outputsRefresh()

        ATLegendBio.Manufacturing.Batches.BatchExplorer.AllBatchFlow.open()

        ATLegendBio.Manufacturing.Batches.BatchExplorer.AllBatchFlow.inputsRefresh()

        ATLegendBio.Manufacturing.Batches.BatchExplorer.AllBatchFlow.inputsFilter()

        ATLegendBio.Manufacturing.Batches.BatchExplorer.AllBatchFlow.inputsDownload()

        ATLegendBio.Manufacturing.Batches.BatchExplorer.AllBatchFlow.outputsRefresh()

        ATLegendBio.Manufacturing.Batches.BatchExplorer.AllBatchFlow.outputsRefresh()

        ATLegendBio.Manufacturing.Batches.BatchExplorer.AllBatchFlow.outputsRefresh()

         ATLegendBio.Manufacturing.Batches.BatchExplorer.AdvancedBatchFlow.open()

        ATLegendBio.Manufacturing.Batches.BatchExplorer.AdvancedBatchFlow.inputsRefresh()

        ATLegendBio.Manufacturing.Batches.BatchExplorer.AdvancedBatchFlow.inputsFilter()

        ATLegendBio.Manufacturing.Batches.BatchExplorer.AdvancedBatchFlow.inputsDownload()

        ATLegendBio.Manufacturing.Batches.BatchExplorer.AdvancedBatchFlow.outputsRefresh()

        ATLegendBio.Manufacturing.Batches.BatchExplorer.AdvancedBatchFlow.outputsRefresh()

        ATLegendBio.Manufacturing.Batches.BatchExplorer.AdvancedBatchFlow.outputsRefresh()

        ATLegendBio.Manufacturing.Batches.BatchFlow.open()

        ATLegendBio.Manufacturing.Batches.RelatedObjects.open()

        GQ.logout()

    })
})
