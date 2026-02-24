import { GQTest } from "../../../../jj-pages/GQTest"
import { LegendBio } from "../../../../jj-pages/AT LegendBio/LegendBio"
// Sprint 20
describe('Sprint 20', () => {
    const GQ = new GQTest();
    const ATLegendBio = new LegendBio()

    it('AT LegendBio Batch Flows', () => {

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

        ATLegendBio.Manufacturing.BatchFlows.open()

        ATLegendBio.Manufacturing.BatchFlows.refresh()

        let multichoiceColumns = [
            'O/P Product Type',
            'O/P Plant Code',
            'O/P Plant Name',
            'O/P Source System',
        ]

        ATLegendBio.Manufacturing.BatchFlows.toggleFilter()

        ATLegendBio.Manufacturing.BatchFlows.checkMultiChoicePickerColumns(multichoiceColumns)

        ATLegendBio.Manufacturing.BatchFlows.viewAll()

        ATLegendBio.Manufacturing.BatchFlows.viewFinishedGoods()

        ATLegendBio.Manufacturing.BatchFlows.viewFinalApi()

        ATLegendBio.Manufacturing.BatchFlows.viewNonBatchedMgd()

        ATLegendBio.Manufacturing.BatchFlows.viewStandard()

        //Download data as csv file
        cy.downloadExcelFile()

        ATLegendBio.Manufacturing.BatchFlows.selectFirstRecord()

        ATLegendBio.Manufacturing.BatchFlows.selectMatchingProductCode().then((productCode) => {

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

            ATLegendBio.Manufacturing.BatchFlows.checkProductCode(productCode)

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

        ATLegendBio.Manufacturing.BatchFlows.open()

        ATLegendBio.Manufacturing.BatchFlows.openAFirstRecord()

        const tabNames = [
            'Batch Explorer',
            'Batch Flow',
            'Related Objects'
        ]

        ATLegendBio.Manufacturing.BatchFlows.checkTabs(tabNames)

        ATLegendBio.Manufacturing.BatchFlows.BatchExplorer.open()

        ATLegendBio.Manufacturing.BatchFlows.BatchExplorer.SimpleBatchFlow.open()

        ATLegendBio.Manufacturing.BatchFlows.BatchExplorer.SimpleBatchFlow.inputsRefresh()

        ATLegendBio.Manufacturing.BatchFlows.BatchExplorer.SimpleBatchFlow.inputsFilter()

        ATLegendBio.Manufacturing.BatchFlows.BatchExplorer.SimpleBatchFlow.inputsDownload()

        ATLegendBio.Manufacturing.BatchFlows.BatchExplorer.SimpleBatchFlow.outputsRefresh()

        ATLegendBio.Manufacturing.BatchFlows.BatchExplorer.SimpleBatchFlow.outputsRefresh()

        ATLegendBio.Manufacturing.BatchFlows.BatchExplorer.SimpleBatchFlow.outputsRefresh()

        ATLegendBio.Manufacturing.BatchFlows.BatchExplorer.AllBatchFlow.open()

        ATLegendBio.Manufacturing.BatchFlows.BatchExplorer.AllBatchFlow.inputsRefresh()

        ATLegendBio.Manufacturing.BatchFlows.BatchExplorer.AllBatchFlow.inputsFilter()

        ATLegendBio.Manufacturing.BatchFlows.BatchExplorer.AllBatchFlow.inputsDownload()

        ATLegendBio.Manufacturing.BatchFlows.BatchExplorer.AllBatchFlow.outputsRefresh()

        ATLegendBio.Manufacturing.BatchFlows.BatchExplorer.AllBatchFlow.outputsRefresh()

        ATLegendBio.Manufacturing.BatchFlows.BatchExplorer.AllBatchFlow.outputsRefresh()

        ATLegendBio.Manufacturing.BatchFlows.BatchExplorer.AdvancedBatchFlow.open()

        ATLegendBio.Manufacturing.BatchFlows.BatchExplorer.AdvancedBatchFlow.inputsRefresh()

        ATLegendBio.Manufacturing.BatchFlows.BatchExplorer.AdvancedBatchFlow.inputsFilter()

        ATLegendBio.Manufacturing.BatchFlows.BatchExplorer.AdvancedBatchFlow.inputsDownload()

        ATLegendBio.Manufacturing.BatchFlows.BatchExplorer.AdvancedBatchFlow.outputsRefresh()

        ATLegendBio.Manufacturing.BatchFlows.BatchExplorer.AdvancedBatchFlow.outputsRefresh()

        ATLegendBio.Manufacturing.BatchFlows.BatchExplorer.AdvancedBatchFlow.outputsRefresh()

        ATLegendBio.Manufacturing.BatchFlows.BatchFlow.open()

        ATLegendBio.Manufacturing.BatchFlows.RelatedObjects.open()

        GQ.logout()

    })
})
