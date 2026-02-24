import { GQTest } from '../../jj-pages/GQTest'
const GQ = new GQTest();
require('cypress-xpath')
describe('Element Library', () => {
    it('Interface Data - SAP', () => {
        // Login
        GQ.login()

        // Click main menu
        GQ.NavBar.ElementLibrary.InterfaceData.open()

        //SAP
        GQ.NavBar.ElementLibrary.InterfaceData.SAP.openLandingPage()

        //DNA PQM Batch Details
        GQ.NavBar.ElementLibrary.InterfaceData.SAP.SAPQXF.DNAPQMBatchDetails.openLandingPage()

        //AutoTest -  DNA PQM Batch Details
        cy.autoTestOnly(
            GQ.NavBar.ElementLibrary.InterfaceData.SAP.SAPQXF.DNAPQMBatchDetails.selectColumn()
            , {
                'PRODUCT_CODE': ["00004"],
                'PRODUCTCODE_DESCRIPTION': ["10 GAL. FIBER DRUM"],
                'BATCH_CODE': ["23MG55152"],
                'LOCALIZED_BATCH_CODE': ["23NG55347"],
                'SC_NODE_CODE': ["ATL/1300"],
                'SOURCE_SYSTEM': ["ATL"]
            })

        //DNA PQM FG Batch Details
        GQ.NavBar.ElementLibrary.InterfaceData.SAP.SAPQXF.DNAPQMFGBatchDetails.openLandingPage()

        //Auot Test - DNA PQM FG Batch Details
        cy.autoTestOnly(
            GQ.NavBar.ElementLibrary.InterfaceData.SAP.SAPQXF.DNAPQMFGBatchDetails.selectColumn()
            , {
                'Fg Mat Bat Plt': ["STN_305766~321723L009~LE01"],
                'Fg International Brand': ["STELARA"],
                'Fg Source System': ["STN"],
                'Fg Product Type': ["Final API"],
                'Fg Product Code': ["305766"],
                'Fg Productcode Description': ["DSP-FB C743B"]
            })

        //DNA Blue CRUX Suppliers
        GQ.NavBar.ElementLibrary.InterfaceData.SAP.SAPQXF.DNABlueCruxSuppliers.openLandingPage()

        //Auto Test - DNA Blue CRUX Suppliers
        cy.autoTestOnly(
            GQ.NavBar.ElementLibrary.InterfaceData.SAP.SAPQXF.DNABlueCruxSuppliers.selectColumn()
            , {
                'supplier_code': ["550325"],
                'supplier_name': ["Serpo NV"],
                'supplier_group_code': ["External Suppliers"],
                'supplier_group_name': ["External Suppliers"],
                'Source_System': ["STN"],
                'Country': ["Japan"],
                'Region': ["Shanghai"],
                'processingDate': ["Dec 12 2024", "April 13 2025"],
            })

        //DNA Blue CRUX Operational Lead Times
        GQ.NavBar.ElementLibrary.InterfaceData.SAP.SAPQXF.DNABlueCruxOperationalLeadTimes.openLandingPage()

        //Auto Test -DNA Blue CRUX Operational Lead Times
        cy.autoTestOnly(
            GQ.NavBar.ElementLibrary.InterfaceData.SAP.SAPQXF.DNABlueCruxOperationalLeadTimes.selectColumn()
            , {
                'Flow_ID': ["3888056"],
                'Lead_Time_Type': ["GIT"],
                'Definition_Label': ["Goods Issue Time - Working Days"],
                'Observed_Duration_Seconds': ["0"],
                'Outlier': ["false"],
                'Processing_Date': ["Jan 12 2024", "April 13 2024"],
            })

        //DNA Blue Crux Material Documents
        GQ.NavBar.ElementLibrary.InterfaceData.SAP.SAPQXF.DNABlueCruxMaterialDocuments.openLandingPage()

        //Auto test - DNA Blue Crux Material Documents
        cy.autoTestOnly(
            GQ.NavBar.ElementLibrary.InterfaceData.SAP.SAPQXF.DNABlueCruxMaterialDocuments.selectColumn()
            , {
                'Flow_ID': ["27973427"],
                'Source_System': ["ATL"],
                'Document_Number': ["4905536504"],
                'Document_Line_Number': ["1"],
                'Product_Code': ["90692"],
                'SC_Node_Code': ["EU2/GR1A"],
                'Batch': ["0906A"],
                'Process_Order': ["20885752"],
                'Movement_Type': ["601"],
                'Debit_Credit': ["Credit"],
            })

        //DNA Blue CRUX SC Nodes
        GQ.NavBar.ElementLibrary.InterfaceData.SAP.SAPQXF.DNABlueCRUXSCNodes.openLandingPage()

        //Auot Test - DNA Blue CRUX SC Nodes
        cy.autoTestAll(
            GQ.NavBar.ElementLibrary.InterfaceData.SAP.SAPQXF.DNABlueCRUXSCNodes.selectColumn()
            , {})

        //DNA Blue CRUX Products
        GQ.NavBar.ElementLibrary.InterfaceData.SAP.SAPQXF.DNABlueCRUXProducts.openLandingPage()

        //Auot Test - DNA Blue CRUX Products
        cy.autoTestOnly(
            GQ.NavBar.ElementLibrary.InterfaceData.SAP.SAPQXF.DNABlueCRUXProducts.selectColumn()
            , {
                'ProductCode': ["VNPD015040"],
                'ProductCode_Description': ["CARTON CORRU FOR EXPORT"],
                'EnterpriseProductCode': ["VNPD015040"],
                'EnterpriseProductCode_Description': ["CARTON CORRU FOR EXPORT"],
                'InternationalBrand': ["VERMOX"],
                'InternationalBrand_Description': ["BUILDING BLOCK"],
                'Source_System': ["PDA"],
                'Product_Type': ["Packing Material"],
                'Process_Step': ["Externally Procured Packing Material"],
            })

        //Material Batch Flows
        GQ.NavBar.ElementLibrary.InterfaceData.SAP.SAPQXF.MaterialBatchFlows.openLandingPage()

        //Auot Test - Material Batch Flows
        cy.autoTestOnly(
            GQ.NavBar.ElementLibrary.InterfaceData.SAP.SAPQXF.MaterialBatchFlows.selectColumn()
            , {
                'FLOW_ID': ["9999997"],
                'FLOW_TYPE': ["Internal Conversion"],
                'INMAT_BAT_PLT': ["ATL"],
                'INPUT_MATERIAL': ["ATL"],
                'INPUT_BATCH': ["22NG53348"],
                'INPUT_LOCALIZED_BATCH': ["22NG53348"],
                'INPUT_PLANT_SUPPLIER': ["1300"],
                'OUT_MAT_BAT_PLT': ["ATL"],
                'OUTPUT_MATERIAL': ["ATL"],
                'OUTPUT_BATCH': ["23AD0560"],
                'OUTPUT_LOCALIZED_BATCH_OUTPUT': ["23AD0560"],
            })

        // Navigate to QXD
        GQ.NavBar.ElementLibrary.InterfaceData.SAP.SAPQXD.openLandingPage()

        // FG Batch Details
        GQ.NavBar.ElementLibrary.InterfaceData.SAP.SAPQXD.FGBatchDetails.openLandingPage()

        //Autotest - FGBatchDetails
        cy.autoTestOnly(
            GQ.NavBar.ElementLibrary.InterfaceData.SAP.SAPQXD.FGBatchDetails.selectColumn()
            , {
                'O/P Batch Code': ["Non-Batch Managed Storage"],
                'O/P Product Code': ["444550"],
                'O/P Product Code Description': ["EXPEC USP XX GMP RUN"],
                'O/P International Brand': ["VERMOX"],
                'O/P Plant Code': ["6611"],
                'O/P Plant Name': ["DC Thailand"],
                'O/P Source System': ["STN"],
            })
        //BatchDetails
        GQ.NavBar.ElementLibrary.InterfaceData.SAP.SAPQXD.BatchDetails.openLandingPage()

        //Autotest - Batch Details
        cy.autoTestOnly(
            GQ.NavBar.ElementLibrary.InterfaceData.SAP.SAPQXD.BatchDetails.selectColumn()
            , {
                'Batch Code': ["ZE053B0101"],
                'Localized Batch Code': ["ZE053B0101"],
                'Product Code': ["06660016"],
                'Supply Chain Node': ["PDA/8612"],
                'Plant Name': ["DC China"],
                'Product Code Description': ["OPSUMIT 10MG 2X15 TABL. JP"],
                'Product Type': ["Finished Good"],
                'Disposition Status': ["Approved"],
                'GTIN Code': ["419675"],
            })
        //DNA Blue CRUX SC Nodes
        GQ.NavBar.ElementLibrary.InterfaceData.SAP.SAPQXD.DNABlueCruxScNodes.openLandingPage()
        //Auto Test - DNA Blue CRUX SC Nodes
        cy.autoTestOnly(
            GQ.NavBar.ElementLibrary.InterfaceData.SAP.SAPQXD.DNABlueCruxScNodes.selectColumn()
            , {
                'SC Node Code': ["BBL/PE02"],
                'SC Node Code Description': ["MFG"],
                'SC Node Type': ["Su"],
                'SC Node Category': ["Su"],
                'SC Node Group Code': ["abc"],
                'SC Node GroupCode Description': ["abc"],
                'Supplier Group Code': ["External"],
                'Supplier Group Code Description': ["External"],
                'Source System': ["BBL"],
                'Country': ["Mexico"],
                'Region': ["Veracruz"],
                'Processing Date': ["03/09/2024", "04/09/2024"],
            })

        // Navigate to  DNA Blue CRUX Product
        GQ.NavBar.ElementLibrary.InterfaceData.SAP.SAPQXD.DNABlueCruxproducts.openLandingPage()
        //Select the header
        cy.autoTestOnly(
            GQ.NavBar.ElementLibrary.InterfaceData.SAP.SAPQXD.DNABlueCruxproducts.selectColumn()
            , {
                'Product Code': ["VNPS075110"],
                'Product Code Description': ["LEAF"],
                'International Brand': ["Packing"],
                'Source System': ["BBL"],
                'Destination Market': ["F"],
                'Product Type': ["Final API"],
                'Process Step': ["Final API"],
                'Process Stage': ["Externally"],
            })

        // Navigate to Material Batch Flow
        GQ.NavBar.ElementLibrary.InterfaceData.SAP.SAPQXD.MaterialBatchFlow.openLandingPage()
        // Select the header
        cy.autoTestOnly(
            GQ.NavBar.ElementLibrary.InterfaceData.SAP.SAPQXD.MaterialBatchFlow.selectColumn()
            , {
                'O/P Batch Code U': ["Non-Batch Managed Storage"],
                'O/P Product Code': ["9842"],
                'O/P Product Code Description': ["CINNARIZINE"],
                'O/P Product Type': ["Final API"],
                'O/P Plant Code': ["1100"],
                'O/P Plant Name': ["EM US"],
                'O/P Source System': ["ATL"],
                'Last Good Receipt': ["03/09/2024", "04/09/2024"],
                'O/P Process Stage': ["CHEM SYNTH"],
            })

        // Click Log out
        GQ.logout()
    })
})