import { GQTest } from "../../../jj-pages/GQTest";
import { ElementLibrary } from "../../../jj-pages/Navigation Bar/ElementLibrary";
const GQ = new GQTest();
if (!Cypress.env('onlyRunReadOnlyTests')) {
    describe('UAT/5.0', () => {
        it('UAT-007 Quality Management-COMET', () => {

            // Login
            GQ.login('PQM360 General User')

            // Quality management
            GQ.Planets.QualityManagement.openLandingPage()

            // Change control 
            GQ.Planets.QualityManagement.ChangeControls.openLandingPage()

            // Comet from the dropdown
            GQ.Planets.QualityManagement.ChangeControls.viewComet()

            // Escalation tab
            GQ.Planets.QualityManagement.Escalations.openLandingPage()

            // Comet fro the dropdown
            GQ.Planets.QualityManagement.Escalations.viewComet()

            // Nonconformancees tab
            GQ.Planets.QualityManagement.NonConformances.openLandingPage()

            // Click Piechart icon
            GQ.Planets.QualityManagement.NonConformances.Piechart.open()

            // Hamburger icon
            GQ.Planets.QualityManagement.NonConformances.Piechart.Analytics.clickHamburgerIcon()

            // // Add value section for Row attributes
            // GQ.Planets.QualityManagement.NonConformances.Piechart.Analytics.rowAttributesDropdown()

            // //Add value section for Column attributes
            // GQ.Planets.QualityManagement.NonConformances.Piechart.Analytics.columnAttributesDropdown()

            //Audit tab
            GQ.Planets.QualityManagement.Audits.openLandingPage()

            //Filter from number column
            GQ.Planets.QualityManagement.Audits.filterNumberColumn('AUD-001384')

            //Related object tab
            GQ.Planets.QualityManagement.Audits.openRelatedObjects()

            //User Comments tab
            GQ.Planets.QualityManagement.Audits.UserComments.open()

            //Write comment
            GQ.Planets.QualityManagement.Audits.UserComments.writeComment('Test Comment for Audits')

            //Save
            GQ.Planets.QualityManagement.Audits.UserComments.save()

            //History
            GQ.Planets.QualityManagement.Audits.History.open()

            // Click latest modified data
            GQ.Planets.QualityManagement.Audits.History.clickLatestModified()

            // click Details tab
            GQ.Planets.QualityManagement.Audits.History.openHistoryDetails()

            //User Comments tab
            GQ.Planets.QualityManagement.Audits.UserComments.open()

//  puppeteer for remove          
            // //Remove text 
            // cy.window().then((win) => {
            //     let aceEditor = win.ace.edit('isc_AceEditor_0_ace');
            //     let a = aceEditor.getValue();
            //     cy.log(a)
//            

            //Save
            GQ.Planets.QualityManagement.Audits.UserComments.save()

            //History
            GQ.Planets.QualityManagement.Audits.History.open()

            //Property Changes tab
            GQ.Planets.QualityManagement.Audits.History.open()

            //Refresh
            GQ.Planets.QualityManagement.Audits.History.refresh()

            // Click latest modified data
            GQ.Planets.QualityManagement.Audits.History.clickLatestModified()

            // Differences tab
            GQ.Planets.QualityManagement.Audits.History.openDifferences()

            // click Details tab
            GQ.Planets.QualityManagement.Audits.History.openHistoryDetails()

            //Maximize selector
            GQ.Planets.QualityManagement.Audits.maximizeSelector()

            //Click eye icon
            // GQ.Planets.QualityManagement.Audits.clickEyeIcon()

            //Close new window


            //Toggle Filter
            // GQ.Planets.QualityManagement.Audits.toggleFilter
            
            //View All
            GQ.Planets.QualityManagement.Audits.viewAll()

            //View Related to me
            GQ.Planets.QualityManagement.Audits.viewRelatedToMe()

            //View Related to me and open
            GQ.Planets.QualityManagement.Audits.viewRelatedToMeAndOpen()

            //View Related to me and approval
            GQ.Planets.QualityManagement.Audits.viewRelatedToMeAndInApproval()

            // Pie chart
            GQ.Planets.QualityManagement.Audits.PieChart.open()

            //Hamburger
            GQ.Planets.QualityManagement.Audits.PieChart.Analytics.clickHamburger()

            //Row Attribute Add value dropdown
            GQ.Planets.QualityManagement.Audits.PieChart.Analytics.rowAttributeDropdown()

            // Column Attribute Add value dropdown
            GQ.Planets.QualityManagement.Audits.PieChart.Analytics.columnAttributeDropdown()

            //Accounts tab
            GQ.Planets.QualityManagement.Accounts.open()

            //Open record from number column
            GQ.Planets.QualityManagement.Accounts.filterNumberColumn('ACC-00639')

            //Related object
            GQ.Planets.QualityManagement.Accounts.Home.RelatedObject.open()

            //User comment link
            GQ.Planets.QualityManagement.Accounts.UserComments.open()

            //Write comment
            GQ.Planets.QualityManagement.Accounts.UserComments.writeComment('Test Comment for Accounts')

            //Save
            GQ.Planets.QualityManagement.Accounts.UserComments.save()

            //History link
            GQ.Planets.QualityManagement.Accounts.History.open()

            //Click on latest modified record
            GQ.Planets.QualityManagement.Accounts.History.clickLatestModified()

            //Click details tab
            GQ.Planets.QualityManagement.Accounts.History.HistoryDetails.open()

            // User comment
            GQ.Planets.QualityManagement.Accounts.UserComments.open()

            //Remove 24 block -> puppeteer for remove

            //Save
            GQ.Planets.QualityManagement.Accounts.UserComments.save()

            //History link
            GQ.Planets.QualityManagement.Accounts.History.open()

            //Property change tab
            GQ.Planets.QualityManagement.Accounts.History.HistoryPropertyChanges.open()

            //Latest modified
            GQ.Planets.QualityManagement.Accounts.History.clickLatestModified()
            
            //Differences tab
            GQ.Planets.QualityManagement.Accounts.History.HistoryDifferences.open()

            //Details
            GQ.Planets.QualityManagement.Accounts.Home.Details.open()

            //Maximize selector
            GQ.Planets.QualityManagement.Accounts.maximizeSelector()

            //Accounts tab
            GQ.Planets.QualityManagement.Accounts.open()

            //Click Eye icon
            GQ.Planets.QualityManagement.Accounts.clickEyeIcon()

            //Toggle filter
            GQ.Planets.QualityManagement.Accounts.toggleFilter()

            //Second view
            GQ.Planets.QualityManagement.Accounts.clickSecondDropDown()

            //Click All
            GQ.Planets.QualityManagement.Accounts.clickAll()

            //Click Related To Me
            GQ.Planets.QualityManagement.Accounts.clickRelatedToMe()

            //Click Piechart
            GQ.Planets.QualityManagement.Accounts.PieChart.open()

            //Hamburger
            GQ.Planets.QualityManagement.Accounts.PieChart.Analytics.clickHamburger()

            //Row Attribute Add value dropdown
            GQ.Planets.QualityManagement.Accounts.PieChart.Analytics.rowAttributeDropdown()
            
            // Column Attribute Add value dropdown
            GQ.Planets.QualityManagement.Accounts.PieChart.Analytics.columnAttributeDropdown()

            //Logout
            GQ.logout()

            })
        })

    }
