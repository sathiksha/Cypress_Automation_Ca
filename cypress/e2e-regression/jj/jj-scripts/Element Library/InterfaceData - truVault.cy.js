import { GQTest } from '../../jj-pages/GQTest'
const GQ = new GQTest();
require('cypress-xpath')
describe('Element Library', () => {
    it('Interface Data - truVault', () => {
        // Login
        GQ.login()

        // Commented out all autotest alls

        // Click main menu
        GQ.NavBar.ElementLibrary.InterfaceData.open()

        //truVault
        GQ.NavBar.ElementLibrary.InterfaceData.truVault.openLandingPage()

        // QXF 
        GQ.NavBar.ElementLibrary.InterfaceData.truVault.truVaultQXF.openLandingPage()

        // Object header
        GQ.NavBar.ElementLibrary.InterfaceData.truVault.truVaultQXF.truVaultObjectHeader.openLandingPage()

        // Select the header - truVault object header
        cy.autoTestOnly(
            GQ.NavBar.ElementLibrary.InterfaceData.truVault.truVaultQXF.truVaultObjectHeader.selectColumn()
            , {
                'Document Object ID': ["FFFFB3E7"],
                'Doco Number': ["TV-TEC-72460"],
                'Status': ["Final"],
                'Version': ["1.0"],
                'Document Type': ["Validation Document"],
                'Document Sub Type': ["Memo"],
                'Document Sub Type Classification': ["Design"],
                // 'Sourceid': ["688329"],
                // 'Solrindexflag': ["1"],
                // 'Createdate': ["20191125"],
                // 'Createby': ["Vault"],
                // 'Modifydate': ["20191125"],
                // 'Modifyby': ["Vault"],
                // 'Upt': ["Jan 12 2025", "April 13 2025"],
                // 'Deleted':["F"],
            })

        // Navigate to truVault object Attributes
        GQ.NavBar.ElementLibrary.InterfaceData.truVault.truVaultQXF.truVaultObjectAttributes.openLandingPage()
        // // Select the header
        cy.autoTestOnly(
            GQ.NavBar.ElementLibrary.InterfaceData.truVault.truVaultQXF.truVaultObjectAttributes.selectColumn()
            , {
                'Document Number': ["TV-TEC-72460"],
                'Attriblabel': ["Author"],
                'Attribvalue': ["N/A"],
                // 'Upt': ["Jan 12 2025", "April 13 2025"],
                // 'Deleted': ["F"],
            })
        // Navigate to truVault Attachments
        GQ.NavBar.ElementLibrary.InterfaceData.truVault.truVaultQXF.truVaultAttachments.openLandingPage()
        // Select the header- 
        cy.autoTestOnly(
            GQ.NavBar.ElementLibrary.InterfaceData.truVault.truVaultQXF.truVaultAttachments.selectColumn()
            , {
                'Attachmentid': ["FFFFFFDA"],
                'Document Number': ["TV-TEC-72460"],
                'Attachmentname': ["TV-TEC-72460"],
                'Filetype': [".pdf"],
                // 'Filepath': ["TV-REF-32603"],
                // 'Size': ["0"],
                // 'Createdate': ["20191125"],
                // 'Createby': ["Vault"],
                // 'Modifydate': ["20191125"],
                // 'Modifyby': ["Vault"],
                // 'Upt': ["Jan 12 2025", "April 13 2025"],
                // 'Deleted':["F"],
            })

        // Navigate to truVault Attribute Master List
        GQ.NavBar.ElementLibrary.InterfaceData.truVault.truVaultQXF.truVaultAttributeMasterList.openLandingPage()
        //Select the header
        cy.autoTestOnly(
            GQ.NavBar.ElementLibrary.InterfaceData.truVault.truVaultQXF.truVaultAttributeMasterList.selectColumn()
            , {
                'Attribid': ["FFFFFFDA"],
                'Contenttypeid': ["DAEC79B1"],
                'Attriblabel': ["Author"],
                'Attribvalue': ["N/A"],
                'Upt': ["Jan 12 2025", "April 13 2025"],
                'Deleted': ["F"],

            })

        // Navigate to truVault Relations
        GQ.NavBar.ElementLibrary.InterfaceData.truVault.truVaultQXF.truVaultRelations.openLandingPage()
        // Select the header
        cy.autoTestOnly(
            GQ.NavBar.ElementLibrary.InterfaceData.truVault.truVaultQXF.truVaultRelations.selectColumn()
            , {
                'Relationid': ["00006545"],
                'Docobjid': ["FFFFB3E7"],
                'Relobjid': ["FFFFB3E7"],
                'Relationtype': ["supporting_documents"],
                'Upt': ["Jan 12 2025", "April 13 2025"],
                'Deleted': ["F"],
            })

        // Navigate to QXD
        GQ.NavBar.ElementLibrary.InterfaceData.truVault.truVaultQXD.openLandingPage()
        // Select the header- QXD Truvault attribute info
        cy.autoTestOnly(
            GQ.NavBar.ElementLibrary.InterfaceData.truVault.truVaultQXD.QXDtruVaultAttributeInfo.selectColumn()
            , {
                'Attribute Id': ["FFFFFFDA"],
                'Attribute Label': ["Author"],
                'Attribute Value': ["N/A"],
            })
        // Navigate to QXD truvault relations
        GQ.NavBar.ElementLibrary.InterfaceData.truVault.truVaultQXD.QXDtruVaultRecord.openLandingPage()
        // Select the header
        cy.autoTestOnly(
            GQ.NavBar.ElementLibrary.InterfaceData.truVault.truVaultQXD.QXDtruVaultRecord.selectColumn()
            , {
                'Docnumber': ["TV-TEC-72460"],
                'Status': ["Final"],
                'Version': ["1.0"],
                'Documenttype': ["Validation Document"],
                'Documentsubtype': ["Memo"],
                'Documentsubtypeclassification': ["Design"],
                // 'Sourceid': ["688329"],
                // 'Createdate': ["20191125"],
                // 'Createby': ["Vault"],
                // 'Modifydate': ["20191125"],
                // 'Modifyby': ["Vault"],
            })
        // Navigate to Q    
        GQ.NavBar.ElementLibrary.InterfaceData.truVault.truVaultQ.openLandingPage()
        // Select the header
        cy.autoTestOnly(
            GQ.NavBar.ElementLibrary.InterfaceData.truVault.truVaultQ.QtruVaultRecord.selectColumn()
            , {
                'Number': ["TV-TEC-213638"],
                'Name': ["VAULT"],
                'Version': ["1.0"],
                'Author': ["Kay"],
                'Status': ["Final"],
                'Effective Date': ["Jan 12 2025", "April 13 2025"],
                // 'Document Type': ["Agreement"],
                // 'Document Sub-Type': ["Quality Agreement"],
                // 'Owning Segments': ["Pharma"],
                // 'Owning Organization': ["N/A"],
                // 'Impacted Locations': ["Vietnam"],
                // 'Legacy Document Number': ["Vault"],

            })

        // Click Log out
        GQ.logout()






    })
})