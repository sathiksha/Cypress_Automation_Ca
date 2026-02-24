import { GQTest } from'../../jj-pages/GQTest'
const GQ = new GQTest();
require('cypress-xpath')
describe('Element Library', () => {
    it('Interface Data - Trackwise', () => {
        // Login
        GQ.login()

        // Click main menu
        GQ.NavBar.ElementLibrary.InterfaceData.open()

        // QXF
        GQ.NavBar.ElementLibrary.InterfaceData.Trackwise.openLandingPage()
        
        // QXF - PR Items
        cy.autoTestOnly(
            GQ.NavBar.ElementLibrary.InterfaceData.Trackwise.TrackWiseQXF.QXFPR.selectColumn()  
            , {
                'Id':["1001"],
                'Name':["Calibration"],
                'Project Name':["NC (Vacaville Only)"],
                'Status Type Name':["Closed"],
                'Originator Name':["Healis, Admin"],
                'Date Created': ["May 17 2024", "May 18 2024"],
                'Date Opened': ["May 16 2024", "May 27 2024"],
                'Date To Close': ["March 12 2024", "March 14 2024"],
                'Date Closed': ["Jan 12 2024", "April 13 2024"],
                'Dai Updt Dttp': ["Dec 23 2023", "Jan 24 2024"],
                'Responsible Name':["abc"],
                'Parent Id':["abc"],
                'Del Ind':["N"],
            })
    //     // Navigate to ADDTL_Data
        GQ.NavBar.ElementLibrary.InterfaceData.Trackwise.TrackWiseQXF.QXFAddtl_Data.openLandingPage()
    //     // Select the header(Broken tab)
        cy.autoTestOnly(
            GQ.NavBar.ElementLibrary.InterfaceData.Trackwise.TrackWiseQXF.QXFAddtl_Data.selectColumn()
            ,{
                'Pr Id': ["Null"],
                'Data Field Name': ["Null"],
                'S Value': ["Null"],
                'N Value': ["Null"],
                'Coalesce Value': ["Null"],
                '(NVAL->PT)': ["Null"],
                '(NVAL->TT)': ["Null"],
                'Dai Updt Dttp': ["Dec 23 2023", "Jan 24 2024"],
                'Del Ind':["Null"],

       })

        // Navigate to GRID_Data(Attrs)
        GQ.NavBar.ElementLibrary.InterfaceData.Trackwise.TrackWiseQXF.QXFGRID_Data.openLandingPage()
        // Select the header
        cy.autoTestOnly(
            GQ.NavBar.ElementLibrary.InterfaceData.Trackwise.TrackWiseQXF.QXFGRID_Data.selectColumn()
            ,{
                'Pr Id': ["2368385"],
                'Data Field Name': ["PO Number"],
                'Dai Updt Dttp': ["Dec 23 2023", "Jan 24 2024"],
                'Del Ind':["N"],
        })

        // Navigate to PR_Element(Attrs) - function problem
        GQ.NavBar.ElementLibrary.InterfaceData.Trackwise.TrackWiseQXF.QXFPR_Element.openLandingPage()
        // Select the header
        cy.autoTestOnly(
            GQ.NavBar.ElementLibrary.InterfaceData.Trackwise.TrackWiseQXF.QXFPR_Element.selectColumn()
            ,{
                'Pr Id': ["2368385"],
                'Ets Text':["Temptale data attached"],
                // 'Pr Element Type':["108"],
                // 'Pr Element Type Name':["Description"],
                // 'Dai Updt Dttp': ["Dec 23 2023", "Jan 24 2024"],
                // 'Del Ind':["N"],
        })

        // Navigate to Details
        GQ.NavBar.ElementLibrary.InterfaceData.Trackwise.TrackWiseQXF.Details.openLandingPage()
        // Select the header
        cy.autoTestOnly(
            GQ.NavBar.ElementLibrary.InterfaceData.Trackwise.TrackWiseQXF.Details.selectColumn()
            ,{
                'Id':["27"],
                'Name':["Addendum"],
                'Dai Updt Dttp': ["Dec 23 2023", "Jan 24 2024"],
                'Del Ind':["N"],

        })
        // Navigate to QXD 
        GQ.NavBar.ElementLibrary.InterfaceData.Trackwise.TrackwiseQXD.openLandingPage()
        // Select the header- PRs
        cy.autoTestOnly(
            GQ.NavBar.ElementLibrary.InterfaceData.Trackwise.TrackwiseQXD.QXDPR.selectColumn()
            ,{
                'Name':["포충등 설치"],
                'Originator':["Lee, SangMin"],
                'Project Name':["Correction"],
                'State':["Closed"],

        })
        // Navigate to Additional Data
        GQ.NavBar.ElementLibrary.InterfaceData.Trackwise.TrackwiseQXD.QXDAddtl_Data.openLandingPage()
        // Select the header
        cy.autoTestOnly(
            GQ.NavBar.ElementLibrary.InterfaceData.Trackwise.TrackwiseQXD.QXDAddtl_Data.selectColumn()
            ,{
                'Attribute Label':["Supplier Number"],
                'Attribute Value':["0001010328"],

        })
        // Navigate to Element info QXD
        GQ.NavBar.ElementLibrary.InterfaceData.Trackwise.TrackwiseQXD.QXDElementInfo.openLandingPage()
        // Select the header
        cy.autoTestOnly(
            GQ.NavBar.ElementLibrary.InterfaceData.Trackwise.TrackwiseQXD.QXDElementInfo.selectColumn()  
        ,{
            'Id':["7999227"],
            'Pr Id': ["2362318"],
            'Qwnerid': ["018ed886-6456-7d94-b953-3d0dc37960b3"],
            'Attribute Label':["Current Stat"],
            'Attribute Value':["One point"],
            'Update':["Dec 23 2023", "Jan 24 2024"],
            'Deleted':["N"],
            // 'Process Status':["Complete"],
            // 'Item Ref':["6494558"],
            // 'F ID':["2909759"],
            // 'F ID 2':["2909759"],
            // 'Item Ref 2':["6494558"],
            // 'FID 2':["2909759"],
            // 'F ID 2 2':["2909759"],
            // 'Assimilate Type ID':["aa5513eb"],
            // 'Assimilate Workflow State ID':["2111ac43"],
            // 'Assimilate Major Version':["aa5513eb"],
            // 'Assimilate O ID':["43fabb2a"],
            // 'Load Seq':["1086982"],
            // 'Type Name':["XD"],
            // 'Creation Date': ["Dec 23 2023", "Jan 24 2024"],
        })
        // Navigate to Q
        GQ.NavBar.ElementLibrary.InterfaceData.Trackwise.TrakwiseQ.openLandingPage()
        // Select the header-TW Audit
        cy.autoTestOnly(
            GQ.NavBar.ElementLibrary.InterfaceData.Trackwise.TrakwiseQ.QTW_Audit.selectColumn()
        ,{
            'Number':["999991"],
            'Name':["Position Paper"],
            'Internal/External':[2],
            'Type Of Audit':[1],
            'Site Name':["Poland"],
            'Audit Departments':["Position Paper"],
            'Assigned To':["abc"],
            'Date Opened': ["Dec 23 2023", "Jan 24 2024"],
            'Date Response Due': ["Dec 23 2023", "Jan 24 2024"],
        })
        // Navigate to TW-Auditee
        GQ.NavBar.ElementLibrary.InterfaceData.Trackwise.TrakwiseQ.QTW_Auditee.openLandingPage()
        // Select the header
        cy.autoTestOnly(
            GQ.NavBar.ElementLibrary.InterfaceData.Trackwise.TrakwiseQ.QTW_Auditee.selectColumn()
            ,{
                'Number':["999991"],
                'Name':["Yale"],
                'Criticality Level':["CL 2"],
                'AIM Risk Level':["TBD"],
                'Audit Departments':["CSQ-NA"],
                'Audit Classification':["Surveillance Indicated"],
                'Auditee Type':["Distributor"],
                'Qualified Services':["Distributor"],
                'Region':[4],
                'Assigned To':["Christina Cornet"],
            })
        // Navigate to TW-CAPA
        GQ.NavBar.ElementLibrary.InterfaceData.Trackwise.TrakwiseQ.QTW_CAPA.openLandingPage()
        // Select a header
        cy.autoTestOnly(
            GQ.NavBar.ElementLibrary.InterfaceData.Trackwise.TrakwiseQ.QTW_CAPA.selectColumn()
            ,{
                'Number':["999991"],
                'Name':["Yale"],
                'Originator':["Lee, SangMin"],
                'State':["Closed"],
                'Assigned To':["Christina Cornet"],
                'Creation Date': ["Dec 23 2023", "Jan 24 2024"],
                'Date Due': ["Dec 23 2023", "Jan 24 2024"],
            })
        // Navigate to TW-Change Control
        GQ.NavBar.ElementLibrary.InterfaceData.Trackwise.TrakwiseQ.QTW_ChangeControl.openLandingPage()
        // Select the Header
        cy.autoTestOnly(
            GQ.NavBar.ElementLibrary.InterfaceData.Trackwise.TrakwiseQ.QTW_ChangeControl.selectColumn()
            ,{
                'Number':["999991"],
                'Name':["Yale"],
                'Change Type':[1],
                'Type Of Change':[1],
                'State':[1],
                'Assigned To':["Luisa Chessa"],
                'QA Approver':["Wang, Ying"],
                'GCCB Approver':["Wang, Ying"],
                // 'Site Name':["Poland"],
                // 'CC Level':["Low"],
                // 'Creation Date': ["Dec 23 2023", "Jan 24 2024"],
                // 'Current Target Closing Date': ["Dec 23 2023", "Jan 24 2024"],
                // 'Material Description':["No Material Cited"],
                // 'International Name':["NA"],
                // 'Sites Affected':["No"],
            })
        // Navigate to TW-Correction
        GQ.NavBar.ElementLibrary.InterfaceData.Trackwise.TrakwiseQ.QTW_Correction.openLandingPage()
        // Select the header
        cy.autoTestOnly(
            GQ.NavBar.ElementLibrary.InterfaceData.Trackwise.TrakwiseQ.QTW_Correction.selectColumn()
            ,{
                'Number':["999991"],
                'Name':["Yale"],
                'Description':["Medical Device"],
                'Segment': ["Pharma - Supply Chain"],
                'Region':["EMEA"],
                'Assigned To':["Luisa Chessa"],
                'State':[1],
                'Creation Date': ["Dec 23 2023", "Jan 24 2024"],
                'Date Due': ["Dec 23 2023", "Jan 24 2024"],
            })
        // Navigate to TW- Product Escalation
        GQ.NavBar.ElementLibrary.InterfaceData.Trackwise.TrakwiseQ.QTW_ProductEscalation.openLandingPage()
        // Select the header
        cy.autoTestOnly(
            GQ.NavBar.ElementLibrary.InterfaceData.Trackwise.TrakwiseQ.QTW_ProductEscalation.selectColumn()
            ,{
                'Number':["999991"],
                'Name':["Yale"],
                'Description Of Issue':["Customer complaints"],
                'Escalation Lead/Quality Rep':["Medical Device"],
                'Action Plan /Proposed Plan':["Medical Device"],
                'Highest Escalation Level Reached':["Medical Device"],
                'Operating Company':[3],
                'Segment':[3],
                'Creation Date': ["Dec 23 2023", "Jan 24 2024"],
                'State':[1],
            })
        // Navigate to TW- Quality Event
        GQ.NavBar.ElementLibrary.InterfaceData.Trackwise.TrakwiseQ.QTW_QualityEvent.openLandingPage()
        // Select the header
        cy.autoTestOnly(
            GQ.NavBar.ElementLibrary.InterfaceData.Trackwise.TrakwiseQ.QTW_QualityEvent.selectColumn()
            ,{
                'Number':["999991"],
                'Name':["Yale"],
                'Description Of Issue':["Customer complaints"],
                'Event Type':[1],
                'Segment':[3],
                'State':[1],
                'Assigned To':["Luisa Chessa"],
                'Creation Date': ["Dec 23 2023", "Jan 24 2024"],
                'Date Due': ["Dec 23 2023", "Jan 24 2024"],
            })
        // Navigate to TW- Meeting Minute
        GQ.NavBar.ElementLibrary.InterfaceData.Trackwise.TrakwiseQ.QTW_MeetingMinute.openLandingPage()
        // Select the header
        cy.autoTestOnly(
            GQ.NavBar.ElementLibrary.InterfaceData.Trackwise.TrakwiseQ.QTW_MeetingMinute.selectColumn()
            ,{
                'Number':["999991"],
                'Meeting Date': ["Dec 23 2023", "Jan 24 2024"],
                'Initial/Follow-up Meeting':["Initial Meeting"],
                'Meeting Facilitator':["Patel"],
                'Originator':["Lee, SangMin"],
                'State':[1],

            })
    
        // Click Log out
       GQ.logout()
    })
})