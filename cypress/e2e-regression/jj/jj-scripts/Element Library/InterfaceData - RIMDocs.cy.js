import { GQTest } from'../../jj-pages/GQTest'
const GQ = new GQTest();
require('cypress-xpath')
describe('Element Library', () => {
    it('Interface Data - RIMDocs', () => {
    // Login
    GQ.login()

    // Click main menu
    GQ.NavBar.ElementLibrary.InterfaceData.open()

    // QXF
    GQ.NavBar.ElementLibrary.InterfaceData.RIMDocs.openLandingPage()
    
    //RIMDocs >>>> (shows error popup Broken page)
   GQ.NavBar.ElementLibrary.InterfaceData.RIMDocs.RIMDocQXF.openLandingPage()
    // // Select the header - RIMDoc DM SYSOBJECTS S(Broken page)
    cy.autoTestOnly(
        GQ.NavBar.ElementLibrary.InterfaceData.RIMDocs.RIMDocQXF.RIMDocDMSysObjectS.selectColumn()
        ,{
            'Modifier': ["FFFFB3E7"],
            'Status': ["Approved"],
            'Object Name': ["cd_quality"],
            'Creation Date': ["Jan 12 2024", "April 13 2024"],
            'Modify Date': ["Jan 12 2024", "April 13 2024"],
            'Creator Name': ["Abbink Kristiena"],
            'Content type': ["pdf"],
            'Documentsubtypeclassification': ["Design"],
            'Content Size': ["abc"],
            'Upt': ["Jan 12 2024", "April 13 2024"],
            'Deleted':["F"],
        })
    
    // Navigate to RIMDoc DM SYSOBJECTS R
    GQ.NavBar.ElementLibrary.InterfaceData.RIMDocs.RIMDocQXF.RIMDocDMSysObjectR.openLandingPage()
    // Select the header
    cy.autoTestOnly(
        GQ.NavBar.ElementLibrary.InterfaceData.RIMDocs.RIMDocQXF.RIMDocDMSysObjectR.selectColumn()
        ,{
            'Object Id': ["0901bacc"],
            'Version Label': ["Latest Approved"],
            'Upt': ["Jan 12 2024", "April 13 2024"],
            'Deleted':["F"],
        })
    // Navigate to RIMDocs CD COntrolled Doc S
    GQ.NavBar.ElementLibrary.InterfaceData.RIMDocs.RIMDocQXF.RIMDocCDControlledDocS.openLandingPage()
    // Select the header
    cy.autoTestOnly(
        GQ.NavBar.ElementLibrary.InterfaceData.RIMDocs.RIMDocQXF.RIMDocCDControlledDocS.selectColumn()
        ,{
            'Is Translated': ["1"],
            'Docnumber': ["TV-TEC-72460"],
            'Author': ["Marijke Alen"],
            'Approved Date': ["Jan 12 2024", "April 13 2024"],
            'First Version Creator': ["Kenney"],
            'Number': ["EDMS-RIM-593613"],
            'External Approval Date': ["Jan 12 2024", "April 13 2024"],
            'Title': ["Quality"],
            'Object Id': ["0901bacc"],
            'Upt': ["Jan 12 2024", "April 13 2024"],
            // 'Deleted':["F"],
        })  
    // Navigate to RIMDocs CD Controlled Doc R
    GQ.NavBar.ElementLibrary.InterfaceData.RIMDocs.RIMDocQXF.RIMDocCDControlledDocR.openLandingPage()
    // Select the header
    cy.autoTestOnly(
        GQ.NavBar.ElementLibrary.InterfaceData.RIMDocs.RIMDocQXF.RIMDocCDControlledDocR.selectColumn()
        ,{  
            'Object Id': ["0901bacc"],
            'Region Country': ["JP"],
            'Co Authors': ["abc"],
            'Notification List': ["abc"],
            'Upt': ["Jan 12 2024", "April 13 2024"],
            'Deleted':["F"],

        })
    // Navigate to  RIMDocs CD Common Ref Model S
    GQ.NavBar.ElementLibrary.InterfaceData.RIMDocs.RIMDocQXF.RIMDocCDCommonRefModelS.openLandingPage()
    // Select the header
    cy.autoTestOnly(
        GQ.NavBar.ElementLibrary.InterfaceData.RIMDocs.RIMDocQXF.RIMDocCDCommonRefModelS.selectColumn()
        ,{
            'Is Redacted': ["1"],
            'ECTD Section': ["N-A"],
            'Artifact Name': ["Investigational"],
            'Object Id': ["0901bacc"],
            'Product Disp Name': ["NO COMPOUND"],
            'Artifact Short Name':["STMT"],
            'Sub Group':["NA"],
            'Compound Asset':["NOCOMPOUND"],
            'Application Type':["Clinical Trial"],
            
        })
    // Navigate to  RIMDocs CD Common Ref Model R
    GQ.NavBar.ElementLibrary.InterfaceData.RIMDocs.RIMDocQXF.RIMDocCDCommonRefModelR.openLandingPage()
    // Select the header
    cy.autoTestOnly(
        GQ.NavBar.ElementLibrary.InterfaceData.RIMDocs.RIMDocQXF.RIMDocCDCommonRefModelR.selectColumn()
        ,{
            'Object Id': ["0901bacc"],
            'Inn Names': ["guselkumab"],
            'Languages': ["ja"],
            'Product Compound ID': ["CNTO1959"],
            'Product Trade Name': ["TREMFYA"],
            'Product Generic Name': ["guselkumab"],
            'Associated Products': ["CNTO1959"],
            'Upt': ["Jan 12 2024", "April 13 2024"],
            'Deleted':["F"],


        })
    // Navigate to RIMDocs QXD
    GQ.NavBar.ElementLibrary.InterfaceData.RIMDocs.RIMDocQXD.openLandingPage()
    // Select the header- QXD RIM Doc DM SysObject S info
    cy.autoTestOnly(
        GQ.NavBar.ElementLibrary.InterfaceData.RIMDocs.RIMDocQXD.QXDRIMDocDMSysObjectSInfo.selectColumn() 
        ,{
            'Status': ["Approved"],
            'Object Name': ["Tramadol"],
            'Type': ["cd_quality"],
            'Documentsubtype': ["Memo"],
            'Created': ["Jan 12 2024", "April 13 2024"],
            'Modify': ["Jan 12 2024", "April 13 2024"],
            'Creator Name': ["Yue Qi"],
        })
    // Navigate to QXD RIM Doc DM SysObject R info    
    GQ.NavBar.ElementLibrary.InterfaceData.RIMDocs.RIMDocQXD.QXDRIMDocDMSysObjectRInfo.openLandingPage()
        // Select the header
        cy.autoTestOnly(
            GQ.NavBar.ElementLibrary.InterfaceData.RIMDocs.RIMDocQXD.QXDRIMDocDMSysObjectRInfo.selectColumn()
            ,{
                'Version Label': ["Approved"],
                
            })
    // Navigate to  RIMDocs CD Controlled Docs info S
    GQ.NavBar.ElementLibrary.InterfaceData.RIMDocs.RIMDocQXD.RIMDocsCDControlledDocsSInfo.openLandingPage()
    // Select the header
    cy.autoTestOnly(
        GQ.NavBar.ElementLibrary.InterfaceData.RIMDocs.RIMDocQXD.RIMDocsCDControlledDocsSInfo.selectColumn()
        ,{
            'Is Translated': ["0"],
            'Author': ["Neal Cremin"],
            'Aprroved Date': ["2023-03-22"],
            'Original Version Creator': ["Kenney"],
            'JJ Number': ["989781"],
            'External Aprroval Date': ["0001"],
            'Title':["Q32S25"],
        })
    // Navigate to  RIMDocs CD Controlled Docs info R
    GQ.NavBar.ElementLibrary.InterfaceData.RIMDocs.RIMDocQXD.RIMDocsCDControlledDocsRInfo.openLandingPage()
    // Select the header
    cy.autoTestOnly(
        GQ.NavBar.ElementLibrary.InterfaceData.RIMDocs.RIMDocQXD.RIMDocsCDControlledDocsRInfo.selectColumn()
        ,{
            'Country/Region': ["abc"],
            'Co-Authors': ["abc"],
            'Notification List': ["N"],
        })
    // Navigate to  RIMDocs CD Common Ref Model S info
    GQ.NavBar.ElementLibrary.InterfaceData.RIMDocs.RIMDocQXD.RIMDocsCDCommonRefModelSInfo.openLandingPage()
    // Select the header
    cy.autoTestOnly(
        GQ.NavBar.ElementLibrary.InterfaceData.RIMDocs.RIMDocQXD.RIMDocsCDCommonRefModelSInfo.selectColumn()
        ,{
            'Is Redacted': ["1"],
            'CTD Section': ["N-A"],
            'Artifact Name': ["Protocol"],
            'Object Id': ["0901bacc"],
            'Product Display Name': ["NO COMPOUND"],
            'Artifact Short Name':["STMT"],
            'Sub-Group':["NA"],
            'Compound Asset':["NOCOMPOUND"],
            'Application Type':["Clinical Trial"],
            'eCTD Leaf Title': ["N/A"],
            'Product Class': ["No Class"],
            'eCTD Leaf Name': ["N-A"],
            'Group': ["Adminstrative"],
            'Product Code': ["JNJ-64007957"],
        })
    // Navigate to  RIMDocs CD Common Ref Model R info
    GQ.NavBar.ElementLibrary.InterfaceData.RIMDocs.RIMDocQXD.RIMDocsCDCommonRefModelRInfo.openLandingPage()
    // Select the header
    cy.autoTestOnly(
        GQ.NavBar.ElementLibrary.InterfaceData.RIMDocs.RIMDocQXD.RIMDocsCDCommonRefModelRInfo.selectColumn()
        ,{
            'Inn Names': ["guselkumab"],
            'Languages': ["ja"],
            'Compound Name': ["CNTO1959"],
            'Trade Name': ["TREMFYA"],
            'Generic Name': ["guselkumab"],
            'Associated Products': ["CNTO1959"],

        })
    // Navigate to Q    
    GQ.NavBar.ElementLibrary.InterfaceData.RIMDocs.RIMDocQ.openLandingPage()
        // Select the header- Q RIMDoc Record
        cy.autoTestOnly(
            GQ.NavBar.ElementLibrary.InterfaceData.RIMDocs.RIMDocQ.QRIMDocRecord.selectColumn()
            ,{
                'EDMS Number': ["TV-TEC-72460"],
                'Artifact Name': ["Patient Labeling"],
                'File Type': ["msw14"],
                'Compund Asset': ["JNJ-25875382"],
                'CTD Section': ["N-A"],
                'eCTD Leaf  Title': ["N-A"],
                'Country/Region': ["abc"],
                'Group': ["Administrative"],
                'Sub-Group':["NA"],
                'Generic Name': ["guselkumab"],
                'Trade Name(s)': ["TREMFYA"],
                'Compound Name': ["CNTO1959"],
                'Status': ["Approved"],
                
            })

    // Click Log out
    GQ.logout()

    
    
    
    
    })
})