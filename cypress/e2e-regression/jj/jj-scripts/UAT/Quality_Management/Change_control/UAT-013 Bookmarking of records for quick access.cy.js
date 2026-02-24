import { GQTest } from "../../../../jj-pages/GQTest";
import { ElementLibrary } from "../../../../jj-pages/Navigation Bar/ElementLibrary";
const GQ = new GQTest();
if (!Cypress.env('onlyRunReadOnlyTests')) {
    require('cypress-xpath')
    describe('UAT/4.0', () => {
        it('UAT-013 Bookmarking of records for quick access', () => {
            // Login
            GQ.login('PQM360 General User')

            // Quality Management Planet
            GQ.Planets.QualityManagement.openLandingPage()

            // Click Trackwise
            GQ.Planets.QualityManagement.clickTrackwise()
        
            //toggle filter
            GQ.Planets.QualityManagement.toggleFilter()
            // cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Change_Contr||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Item_Repository_Change_Contr_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Change_Controls||scClass=VLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=3]/body/layoutBody/member[Class=QScreen_Trackwise||scClass=VLayout||index=1||length=2||classIndex=0||classLength=1||scClassIndex=1||scClassLength=2]/component/gridBar/filterButton/icon').click()
            //search name
            GQ.Planets.QualityManagement.ChangeControls.searchNameByText('Variances in the nutrition parameters for excipients sourced from Sensient St. Louis')

            //right click the data
            GQ.Planets.QualityManagement.ChangeControls.rightClickDataByIndex(0)

            //Add bookmark
            GQ.Planets.QualityManagement.ChangeControls.addBookMark()

            //toggle filter
            cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Change_Contr||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Item_Repository_Change_Contr_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Change_Controls||scClass=VLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=3]/body/layoutBody/member[Class=QScreen_Trackwise||scClass=VLayout||index=1||length=2||classIndex=0||classLength=1||scClassIndex=1||scClassLength=2]/component/gridBar/filterButton/icon').click()

            //click bookmarks Tab
            GQ.NavBar.Bookmarks.openLandingPage()

            //click on home tab
            GQ.NavBar.Home.openLandingPage()

            //toggle filter
             GQ.NavBar.Home.toggleFilter()
            
            //search name
            GQ.Planets.QualityManagement.ChangeControls.searchNameByText('Qualify the supplier of Hunan Erkang to provide the material')

            //double click the data
            GQ.Planets.QualityManagement.ChangeControls.openFirstRecord()


            //click on the menu button
            GQ.Planets.QualityManagement.ChangeControls.clickHamburgerIcon()

            //click Add bookmark
            GQ.Planets.QualityManagement.ChangeControls.addBookMark()

            //click on Bookmarks tab
            GQ.NavBar.Bookmarks.openLandingPage()

            //Filter the Bookmarked
            cy.filterTheBookmarked('Qualify the supplier of Hunan Erkang to provide the material')

            //click on delete icon
            GQ.NavBar.Bookmarks.delete()

            //click on home
            GQ.NavBar.Home.openLandingPage()

            // Click To Maximize
            GQ.Planets.QualityManagement.ChangeControls.maximiseSelector()

            //click on related planets
            GQ.NavBar.navigateToDocuments()

            // Click Documents tab
            GQ.Planets.Documents.Documents.openLandingPage()

            // Toggle Filter
            GQ.Planets.Documents.Documents.toggleFilter()

            // Open record
            GQ.Planets.Documents.Documents.filterRecordbyName('ERIS ECCDC685 Part 1 of 2')

            //toggle filter
            // GQ.Planets.Records.TruVAULTRecords.TruVAULTRecords.toggleFilter()

            // //search name
            // GQ.Planets.Records.TruVAULTRecords.TruVAULTRecords.searchRecordByText('ERIS ECCDC685 Part 1 of 2')

            //doulbe click data
            // GQ.Planets.Records.TruVAULTRecords.TruVAULTRecords.openRecordByIndex(0)
            GQ.Planets.Documents.Documents.openRecordByIndex(0)

            //click on hamburger menu icon
            GQ.Planets.Documents.Documents.clickHamburgerMenu()

            //click Add bookmark
            GQ.Planets.QualityManagement.ChangeControls.addBookMark()

            //click on Bookmarks tab
            GQ.NavBar.Bookmarks.openLandingPage()

            GQ.NavBar.Bookmarks.toggleFilter()

            cy.wait(3000)

            cy.filterTheBookmarked('ERIS ECCDC685 Part 1 of 2')

            //double click on the data
            // GQ.NavBar.Bookmarks.selectEncodedRecord('ERIS%20ECCDC685%20Part%201%20of%202')

            //click on delete icon
            GQ.NavBar.Bookmarks.delete()

            //log out
            GQ.logout()
        })
    })
}
