import { GQTest } from '../../jj-pages/GQTest'
const GQ = new GQTest();
require('cypress-xpath')
describe('Element Library', () => {
    it('Interface Data - ELIMS - QXF', () => {
        // Login
        GQ.login()

        // Click main menu
        GQ.NavBar.ElementLibrary.InterfaceData.open()

        //ELIMS
        GQ.NavBar.ElementLibrary.InterfaceData.ELIMS.openLandingPage()

        // QXF tab
        GQ.NavBar.ElementLibrary.InterfaceData.ELIMS.ELIMSQXF.openLandingPage()

        //Stability Study
        GQ.NavBar.ElementLibrary.InterfaceData.ELIMS.ELIMSQXF.StabilityStudy.openLandingPage()

        // Select the header - QXF 
        cy.autoTestOnly(
            GQ.NavBar.ElementLibrary.InterfaceData.ELIMS.ELIMSQXF.StabilityStudy.selectColumn()
            , {
                '_deleted_': ["F"],
                'STUDYID': ["Study"],
                'STUDYDESC': ["R018134"],
                'CONTAINERTYPEID': ["ANTI"],
                'PROTOCOLVERSIONID': ["abc"],
                'PROTOCOLID': ["123"],
                'USERSEQUENCE': ["abc"],
                'NOTES': ["abc"]
                // 'AUDITSEQUENCE': ["1"],
                // 'AUDITDEFERFLAG': ["N"],
                // 'TRACELOGID': ["S"],
                // 'TEMPLATEFLAG': ["N"],
                // 'CREATEDT': ["201008"],
                // 'CREATEBY': ["pdeuer"],
                // 'CREATETOOL': ["AddSDI"],
                // 'MODDT': ["201008"],
                // 'MODBY': ["pdeuer"],
                // 'MODTOOL': ["AddSDI"],
                // 'S_PRODUCTID': ["ABC"],
                // 'S_BATCHID': ["ABC"],
                // 'S_MANUFACTUREDT': ["ABC"],
                // 'S_STRATDT': ["ABC"],
                // 'S_MANUFACTURELOCATION': ["ABC"],
                // 'S_PURPOSE': ["ABC"],
                // 'STUDY STATUS': ["N"],
                // 'APPROVALREQUIREDFLAG': ["ABC"],
                // 'TRACKINGTYPEFLAG': ["ABC"],
                // 'STUDYSUITEID': ["ABC"], 
                // 'DISABLEAUTOCOMPLETEFLAG': ["ABC"],   
                // 'STABILITYDEPARTMENTID': ["ABC"],  
                // 'OWNERSYSUSERID': ["ABC"], 
                // 'PARTIALPULLFLAG': ["Y"], 
                // 'U_DEPARTMENT': ["AO_DEPARTMENT"],
                // 'U_PRODUCTIONSITE': ["Analytical Operation"],
                // 'U_STABILITYSTUDYTYPE': ["Monitoring"],
                // 'U_CONTAINER': ["Monitoring"],
                // 'U_SHELFLIFE': ["72"],
                // 'U_BATCHSIZE': ["277.8Kg"],
                // 'U_MARKET': ["78"],
                // 'U_LOT': ["92"],
                // 'U_BATCHNO': ["EIA471"],
                // 'U_PACKAGINGDT': ["abc"],
                // 'U_PACKAGINGSITE': ["abc"],
                // 'U_CONTAINERDESC': ["Anti"],
                // 'U_CONTAINERSUPPLIER': ["abc"],
                // 'U_CLOSUREDESC': ["abc"],
                // 'U_CLOSURESUPPLIER': ["abc"],
                // 'U_EXPIRYDT': ["abc"],
                // 'U_EXPIRYPERIOD': ["abc"],
                // 'U_RETESTPERIOD': ["72"],
                // 'U_STORAGEINSTRUCTION': ["abc"],
                // 'U_INITIATEDSITE': ["abc"],
                // 'ACTIVEFLAG': ["abc"],
                // 'S_PRODUCTVERSIONID': ["abc"],
                // 'U_PROTOCOLNUMBER': ["abc"],
                // 'U_STOCKLINKEDFLAG': ["abc"],
                // 'COMPLETEDDT': ["abc"],
                // '_pk_': ["STUDYID"],
                // '_upt_': ["2023-06-13"],
                // '_kafkaOffset_': ["STUDYID"],
                // '_createTime_': ["2023-06-13"],
                // '_kafkaTimestamp_': ["STUDYID"],
                // '_ifa_bigint_sequence_': ["STUDYID"],
            })
        // Navigate to Release data
        /* GQ.NavBar.ElementLibrary.InterfaceData.ELIMS.ELIMSQXF.ReleaseData.openLandingPage()
         // Select the header
      
         cy.autoTestOnly(
             GQ.NavBar.ElementLibrary.InterfaceData.ELIMS.ELIMSQXF.ReleaseData.resultID()
             , {
                 'RESULTID': ["110004450254"],
                 'LIMSLOTID': ["L24105768"],
                 'SITE': ["Pharma"],
                 'MANUFACTURINGSITE': ["Pharma"],
                 'BATCH': ["022324707"],
                 'BATCHNAME': ["022324707"],
                 'PROCESSTYPE': ["Delievered"],
                 'MATERIAL': ["3048"],
                 'MATERIALTYPE': ["IM"],
                 'MATERIALDESCRIPTION': ["FS"],
                 'MATERIALGROUP': ["FS1"],
                 'JNJNUMBER': ["123"],
                 'CONTROLSUBSTANCE': ["N"],
             })
 
 
         // Navigate to  Stability data
         GQ.NavBar.ElementLibrary.InterfaceData.ELIMS.ELIMSQXF.StabilityData.openLandingPage()
         // Select the header
         cy.autoTestOnly(
             GQ.NavBar.ElementLibrary.InterfaceData.ELIMS.ELIMSQXF.StabilityData.selectColumn()
             , {
                 'STUDYID': ["Study"],
                 'STUDYDESCRIPTION': ["R018134"],
                 'BATCHNO': ["EIB331"],
                 'STUDYSTATUS': ["A"],
                 'STAERTDATE': ["15-May-2006"],
                 'STABILITYSITE': ["Analytical"],
                 'STABILITYSTUDYTYPE': ["Monitoring"],
                 'BATCHNAME': ["ABC"],
                 'NOTES': ["VAP"],
                 // 'BATCHID': ["EIB331"],
                 // 'MANUFACTURESITE': ["EIB331"],
                 // 'FORMULATION': ["ABC"],
                 // 'MATERIAL': ["007499"],
                 // 'BATCHNO': ["EIB331"],
                 // 'MATERIALDESCRIPTION': ["KET"],
                 // 'JNJNUMBER': ["16441464"],
                 // 'CONTAINER': ["ANTI"],
                 // 'CONTAINERDESCRIPTION': ["ANTI"],
                 // 'CONDITION': ["30"],
                 // 'ORIENTATION': ["abc"],
                 // 'TIMEPOINT': ["36 months"],
                 // 'Nbr_days': ["116"],
                 // 'SAMPLEID': ["09000479"],
                 // 'SAMPLEDESCRIPTION': ["KET"],
                 // 'PULLDATE': ["15-May-2009"],
                 // 'LAB': ["CHEM"],
                 // 'CONTAINER': ["ANTI"],
                 // 'SAMPLESTATUS': ["completed"],
                 // 'SAMPLECOMMENT': ["ANTI"],
                 // 'TECHNIQUE': ["ANTI"],
                 // 'PARAMETERLISTID': ["APPEARENCE"],
                 // 'PARAMETERLISTVARIANT': ["UVQ"],
                 // 'PARAMETERLISTVERSION': ["1"],
                 // 'REPLICATE': ["1"],
                 // 'TESTSTATUS': ["cOMPLETED"],
                 // 'VERFICATIONSTATUS': ["pass"],
                 // 'TESTCOMMENT': ["ANTI"],
                 // 'TESTVERIFICATIONDATE': ["23-Jan-2012"],
                 // 'VERIFICATIONSTATUSTEXT': ["verify"],
                 // 'RESULTID': ["110004450254"],
                 // 'UNKNOWN': ["abc"],
                 // 'RRT': ["abc"],
                 // 'RESULTDISPLAYED': ["102"],
                 // 'RESULTENTERED': ["102"],
                 // 'RESULTUNITS': ["%"],
                 // 'ANALYST': ["tsalgaon"],
                 // 'PARAMCOMMENT': ["abc"],
                 // 'REVIWER': ["mcuthber"],
                 // 'METHODREFRENCE': ["015"],
                 // 'NOTEBOOKREFERENCE': ["ABC"],
             })*/

        // Navigate to BATCH LOOKUP UP
        GQ.NavBar.ElementLibrary.InterfaceData.ELIMS.ELIMSQXF.BatchLookUp.openLandingPage()

        // Select the header
        cy.autoTestOnly(
            GQ.NavBar.ElementLibrary.InterfaceData.ELIMS.ELIMSQXF.BatchLookUp.selectColumn()
            , {
                'SITE': ["XianNew"],
                'BATCHNO': ["EIB331"],
                'MATERIALID': ["PAN"],
                'QCORDEDRID': ["Q21081277"],
                'SAMPLEID': ["21398756"],
                'QCTYPE': ["Release"],
                'SAMPLINGCOMMENT': ["SOP"],
                'COMMENTS': ["001"],
                'SAMPLEDESC': ["KET"],
                'PROCESSSTEP': ["NXJP012"],
                'PARENTBATCHNO': ["EIB331"],
                'GRANDPARENTBATCHNO': ["EIB331"],
                'CHILDBATCHNO': ["EIB331"],

            })
        // Click Log out
        GQ.logout()

    })
    it('Interface Data - ELIMS - QXD', () => {
        // Login
        GQ.login()

        // Click main menu
        GQ.NavBar.ElementLibrary.InterfaceData.open()

        //ELIMS
        GQ.NavBar.ElementLibrary.InterfaceData.ELIMS.openLandingPage()

        // Navigate to QXD
        GQ.NavBar.ElementLibrary.InterfaceData.ELIMS.ELIMSQXD.openLandingPage()

        // Stability Study
      GQ.NavBar.ElementLibrary.InterfaceData.ELIMS.ELIMSQXD.StabilityStudy.openLandingPage()
        // Select the header - Stability study
        cy.autoTestOnly(
            GQ.NavBar.ElementLibrary.InterfaceData.ELIMS.ELIMSQXD.StabilityStudy.selectColumn()
            , {
                'Study': ["Study"],
                'Study Description': ["018134"],
                'Product/Material Description': ["MICONAZOLE"],
                'Study Status': ["C"],
                'Active': ["Y"],
                'Stability Study Type': ["Monitoring"],
                'Protocol Number': ["123"],
                'Batch Number': ["EIA991"],
                'Manufacture Date': ["03/09/2024", "04/09/2024"],
                'Manufacture Location': [1],
                'Initiated Site': [1],
                'Packaging Site': [1],
                'Stability Site': [1],
                'Start Date': ["03/09/2024", "04/09/2024"],
                'Packaging Date': ["03/09/2024", "04/09/2024"],
                'Shelf Life': ["72"]
            })

        // Navigate to Stability data
        GQ.NavBar.ElementLibrary.InterfaceData.ELIMS.ELIMSQXD.StabilityData.openLandingPage()
        // Select the header
        cy.autoTestOnly(
            GQ.NavBar.ElementLibrary.InterfaceData.ELIMS.ELIMSQXD.StabilityData.selectColumn()
            , {
                'Study ID': ["Study"],
                'Batch Number': ["ZP-20-1141"],
                'Material': ["VNPS075110"],
                'Sample ID': ["21197301"],
                'Analysis': ["CHECK LABEL"],
                'Measurement': ["Viscosity"],
                'Condition': ["25"],
                'Time Point': ["3 month"],
                'Display Result': ["15"],
                'Entered Result': ["15"],
                'Units': ["Pa.s"],
                'Limit Type ID': [1],
                'COA Limit': ["Pa.s"],
                'Verification Status': ["Pass"],
            })
        // Navigate to Release data
        GQ.NavBar.ElementLibrary.InterfaceData.ELIMS.ELIMSQXD.ReleaseData.openLandingPage()
        // Select the header
        cy.autoTestOnly(
            GQ.NavBar.ElementLibrary.InterfaceData.ELIMS.ELIMSQXD.ReleaseData.selectColumn()
            , {
                'Batch Number': ["ZP-20-1141"],
                'Material': ["VNPS075110"],
                // 'Sample ID': ["220846434"],
               'Analysis': [0],
                'Measurement': [0],
                'Condition': [0],
                'Time Point': [0],
                'Display Result': ["15"],
                'Entered Result': ["15"],
                'Units': ["Pa.s"],
                'Limit Type ID': [0],
                'COA Limit': ["Pa.s"],
                'Verification Status': ["Pass"],
            })

        // Navigate to Specifications
        GQ.NavBar.ElementLibrary.InterfaceData.ELIMS.ELIMSQXD.Specifications.openLandingPage()
        // Select the header
        cy.autoTestOnly(
            GQ.NavBar.ElementLibrary.InterfaceData.ELIMS.ELIMSQXD.Specifications.selectColumn()
            , {
                'Spec ID': ["Spec-00044779"],
                'Version': ["1"],
                'Product/Material Description': ["DRUG SUBSTANCE"],
                'Version Status': ["C"],
                'Spec Name': ["DRUG SUBSTANCE"],
            })

        // Click Log out
        GQ.logout()
    })
})