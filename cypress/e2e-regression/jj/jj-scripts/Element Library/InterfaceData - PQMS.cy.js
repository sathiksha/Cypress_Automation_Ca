import { GQTest } from'../../jj-pages/GQTest'
const GQ = new GQTest();
require('cypress-xpath')
describe('Element Library', () => {
    it('Interface Data - PQMS', () => {
    // Login
    GQ.login()

    // Click main menu
    GQ.NavBar.ElementLibrary.InterfaceData.open()

    // QXF-PQMS complaint
    GQ.NavBar.ElementLibrary.InterfaceData.PQMS.openLandingPage()

    //QXF tab
    GQ.NavBar.ElementLibrary.InterfaceData.PQMS.PQMSQXF.openLandingPage()

    // // PQMSComplaint tab
    // GQ.NavBar.ElementLibrary.InterfaceData.PQMS.PQMSQXF.PQMSComplaint.openLandingPage()
    
    // // Select the header >>>> (shows error popup Broken page)
    cy.autoTestOnly(
        GQ.NavBar.ElementLibrary.InterfaceData.PQMS.PQMSQXF.PQMSComplaint.selectColumn()
        ,{
            'Company': ["JANSSEN Pharma"],
            'Jnj Aware Dt': ["03/08/2023", "04/11/2023"],
            'Iss Entrd Pqms': ["03/08/2023", "04/11/2023"],
            'Iss Entrd Gcc':["03/08/2023", "04/11/2023"],
            'Iss Cls Dt': ["03/08/2023", "04/11/2023"],
            'Issue Status': ["Closed"],
            'owner': ["TWCONV"],
            'Region': ["NA"],
        })
    
    // Navigate to QXD 
    GQ.NavBar.ElementLibrary.InterfaceData.PQMS.PQMSQXD.openLandingPage()
    // Select the header-pqms
    cy.autoTestOnly(
        GQ.NavBar.ElementLibrary.InterfaceData.PQMS.PQMSQXD.QXDPQMSComplaint.selectColumn()
        ,{
            'Tracking Number': ["90000324577"],
            'Product Name': ["RISPERDAL TABLET"],
            'Product Family Name': ["SPRAVATO NASAL SPRAY"],
            'Product Family Name': ["SPRAVATO NASAL SPRAY"],
            'Lot Number': ["NA"],
            'Company': ["JANSSEN Pharma"],
            'Region': ["NA"],
            'Issue Status': ["Closed"],
            'Jnj Awareness Date': ["03/08/2023", "04/11/2023"],
            'Issue Entered Gcc': ["03/08/2023", "04/11/2023"],
            'Issue Entered Pqms': ["03/08/2023", "04/11/2023"],
            'Issue Close Date': ["03/08/2023", "04/11/2023"],
        })
    // Navigate to Q
    // GQ.NavBar.ElementLibrary.InterfaceData.PQMS.PQMSQ.openLandingPage()
    
    // Click Log out
    GQ.logout()


    
    
    
    
    })
})