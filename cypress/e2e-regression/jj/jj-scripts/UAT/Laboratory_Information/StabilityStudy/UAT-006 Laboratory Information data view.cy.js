import { GQTest } from "../../../../jj-pages/GQTest";
import { ElementLibrary } from "../../../../jj-pages/Navigation Bar/ElementLibrary";
const GQ = new GQTest();
require('cypress-xpath')
describe('UAT/4.0', () => {
    it('UAT-006 Laboratory Information data view', () => {
        //login
        GQ.login('PQM360 General User')
        //open Laboratory Information
        GQ.Planets.LaboratoryInformation.openLandingPage()
        // Stability Data
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityData.openLandingPage()
        // Release Data
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.ReleaseData.openLandingPage()
        // Stability Studies
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.openLandingPage()
        // // Toggle Filter
         //GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.toggleFilter()
        // // Active Dropdown
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.toggleDropDownByText('Active')
        // // Clear All
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.clickClearAll()
        // // Y
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.clickinCheckbox()
        // // Stability Studies
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.openLandingPage()
        // // Toggle Filter
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.toggleFilter()
        // // Toggle Filter
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.toggleFilter()
        // // Stability Study type
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.stabilityStudyType()
        // // Group
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.groupByStabilityStudyType()
        // // Stability Study type
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.stabilityStudyType()
        // // UnGroup
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.ungroup()
        // // Toggle Filter
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.toggleFilter()
        // // Stability Site
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.toggleDropDownByText('Stability Site')
        // // Clear All
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.stabilitySiteClearAll()
        // // Latina
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.selectLatina()     
        // // Stability Studies
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.openLandingPage()
        // // Initiated Site
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.toggleDropDownByText('Initiated Site')
        // // Initiated site clear all
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.initiatedSiteClearAll()
        // // Latina
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.selectLatinaInInitiatedSite()
        // // Stability Studies
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.openLandingPage()
        // // Stability Study type
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.stabilityStudyType()
        // // Group
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.groupByStabilityStudyType()
        // // Stability Study type
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.stabilityStudyType()
        // // UnGroup
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.ungroup()
        // // Toggle Filter
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.toggleFilter()
        // // Toggle Filter
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.toggleFilter()
        // //Type and open
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.openRecord('Study-212223')
        // // Column Header
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.rightclickHeader()
        // // click Column
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.clickColumn()
        // // Type
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.addColumnFilelds('Spec Id')
        
        // // Type
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.addColumnFilelds('Spec Version')
    
        // // Apply
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.applyButton()
        // // // Menu
        // // cy.getSC(
        // //     '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Laboratory_R||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Stability_Studies||scClass=VLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=3]/component/member[Class=QScreen_Stability_Study_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Stability_Study_Home||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Results||scClass=VLayout||index=0||length=4||classIndex=0||classLength=1||scClassIndex=0||scClassLength=4]/component/gridBar/viewsMenuButton/'
        // // ).click()


        // // Analysis
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Analysis.open()
        // // PH
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Analysis.clickPH()
        // // // click second dropdown
        // // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Analysis.openSecondView()
        // // click Analysis in the second dropdown
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Analysis.viewAnalysisInSecond()
        // // // click second dropdown
        // // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Analysis.openSecondView()
        // // Cockpit Import
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Analysis.viewCockpitInSecond()
        // // // click second dropdown
        // //  GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Analysis.openSecondView()
        // // // STL Import
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Analysis.viewSTLInSecond()
        // // // First dropdown
        // // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Analysis.openFirstView()
        // // by Measurement
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Analysis.byMeasurement()
        // // pH
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Analysis.clickpHinByMeasurement()
        // // // First dropdown
        // // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Analysis.openFirstView()
        // // By condition
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Analysis.byCondition()
        // // -20 deg C 
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Analysis.click20DegreeCelsius()
        // // // First dropdown
        // // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Analysis.openFirstView()
        // // by Time Point
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Analysis.byTimepoint()
        // // 3 Months
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Analysis.click3Months()
        // // // // click second dropdown
        // // // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Analysis.openSecondView()
        // // // Cockpit Import
        // // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Analysis.viewCockpitInSecond()
        // // // First dropdown
        // // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Analysis.openFirstView()
        // // Related Test method
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Analysis.relatedTestMethod()
        // // // First dropdown
        // // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Analysis.openFirstView()
        // // Related Specifications
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Analysis.relatedSpecs()
        
        // // Details Tab
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Details.openLandingPage()
        // // Related Objects tab
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.RelatedObjects.open()
        // // Specifications
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.RelatedObjects.clickSpecifications()
        // // Test Method
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.RelatedObjects.clickTestMethods()
        // // Change Controls
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.RelatedObjects.clickChangeControls()
        // // Batch
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.RelatedObjects.clickBatches()
        // // Samples
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.RelatedObjects.clickSamples()
        // // Maximize Selector
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.RelatedObjects.clickMaximizeSelector()
        // // Toggle Filter
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.toggleFilter()
        // // // open dropdown
        // // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.openView()
        // // All studies with results
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.openAllStudiesWithNoResults()
        // // open dropdown
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.openNSX()
        // //Type and open
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.openRecord('Study-212223')
        // // Results Tab
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Results.openLandingPage()
        // // click second dropdown
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Results.secondDropDown()
        // // w/Limit
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Results.clickWithLimit()
        // // Print Row Count
        // cy.getSC(
        //     '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Laboratory_R||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Stability_Studies||scClass=VLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=3]/component/member[Class=QScreen_Stability_Study_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Stability_Study_Home||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Results||scClass=VLayout||index=0||length=4||classIndex=0||classLength=1||scClassIndex=0||scClassLength=4]/component/rowRangeDisplay/'
        // ).invoke('text').then((aRaw) => {
        //     let aR = aRaw.split(" ");
        //     let a = aR[0].replaceAll(",", "");
        //     cy.log(a);
        // })
        // // Click first dropdown
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Results.firstDropDown()
        // // Analysis
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Results.openAnalysis()
        // // Print Row Count
        // cy.getSC(
        //     '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Laboratory_R||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Stability_Studies||scClass=VLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=3]/component/member[Class=QScreen_Stability_Study_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Stability_Study_Home||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Results||scClass=VLayout||index=0||length=4||classIndex=0||classLength=1||scClassIndex=0||scClassLength=4]/component/rowRangeDisplay/'
        // ).invoke('text').then((aRaw) => {
        //     let aR = aRaw.split(" ");
        //     let a = aR[0].replaceAll(",", "");
        //     cy.log(a);
        // })
        // // Click first dropdown
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Results.firstDropDown()
        // // Cockpit Import
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Results.openCockpitImport()
        // // Print Row Count
        // cy.getSC(
        //     '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Laboratory_R||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Stability_Studies||scClass=VLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=3]/component/member[Class=QScreen_Stability_Study_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Stability_Study_Home||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Results||scClass=VLayout||index=0||length=4||classIndex=0||classLength=1||scClassIndex=0||scClassLength=4]/component/rowRangeDisplay/'
        // ).invoke('text').then((aRaw) => {
        //     let aR = aRaw.split(" ");
        //     let a = aR[0].replaceAll(",", "");
        //     cy.log(a);
        // })
        // // Click first dropdown
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Results.firstDropDown()
        // // STL Import
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Results.openSTLImport()
        // // Print Row Count
        // cy.getSC(
        //     '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Laboratory_R||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Stability_Studies||scClass=VLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=3]/component/member[Class=QScreen_Stability_Study_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Stability_Study_Home||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Results||scClass=VLayout||index=0||length=4||classIndex=0||classLength=1||scClassIndex=0||scClassLength=4]/component/rowRangeDisplay/'
        // ).invoke('text').then((aRaw) => {
        //     let aR = aRaw.split(" ");
        //     let a = aR[0].replaceAll(",", "");
        //     cy.log(a);
        // })
        // // Click first dropdown
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Results.firstDropDown()      
        // // Analysis
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Results.openAnalysis()
        // // Print Row Count
        // cy.getSC(
        //     '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Laboratory_R||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Stability_Studies||scClass=VLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=3]/component/member[Class=QScreen_Stability_Study_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Stability_Study_Home||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Results||scClass=VLayout||index=0||length=4||classIndex=0||classLength=1||scClassIndex=0||scClassLength=4]/component/rowRangeDisplay/'
        // ).invoke('text').then((aRaw) => {
        //     let aR = aRaw.split(" ");
        //     let a = aR[0].replaceAll(",", "");
        //     cy.log(a);
        // })
        // // Maximize
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Results.clickMaximizeSelector()
        // // Toggle Filter
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.toggleFilter
        // Toggle Filter
      //  GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.toggleFilter()

        //Type and open
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.openRecord('Study-212223')
        // Open Chart
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Results.openChart()
        // Facet
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Results.clickFacetPicker()
        // Toggle Filter under chart
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Results.chartToggleFilter()
        // click condition dropdown
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Results.clickConditionDropDown()
        
        // Clear All
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Results.clearAll()
        cy.contains('Clear All').click({force:true})
        // 30
        // cy.getSC(
        //     '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Laboratory_R||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Stability_Studies||scClass=VLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=3]/component/member[Class=QScreen_Stability_Study_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Stability_Study_Home||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Results||scClass=VLayout||index=0||length=4||classIndex=0||classLength=1||scClassIndex=0||scClassLength=4]/component/chartView/member[Class=QScreen_Elims_Charts||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Analytics||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=DynamicForm||index=2||length=4||classIndex=1||classLength=2]/item[name=CONDITION||title=CONDITION||value=||index=0||Class=SetFilterItem]/pickList/body/row[3]/col[isCheckboxField=true||0]/valueicon'
        // ).click()

        //click  -20 deg celcius
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Results.click20DegreeCelsius()
        // Somewhere
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Results.someWhere()
        // click Timepoint dropdown
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Results.clickTimepointDropDown()
        // Clear All
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Results.clickClearAll()
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Results.deselect()
        // 3 months
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Results.click3Months()
        // Somewhere
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Results.someWhere()
        // Parameter List ID
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Results.clickParameterListId()
        // CLear All
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Results.clearAllParameterListId()
        // // Appearance
        // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Results.
        // Somewhere
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Results.someWhere()
        // Parameter
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Results.clickParameter()
        // CLear All
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Results.clearAllParameter()
        // // Maximum
        // cy.getSC(
        //     '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Laboratory_R||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Stability_Studies||scClass=VLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=3]/component/member[Class=QScreen_Stability_Study_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Stability_Study_Home||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Results||scClass=VLayout||index=0||length=4||classIndex=0||classLength=1||scClassIndex=0||scClassLength=4]/component/chartView/member[Class=QScreen_Elims_Charts||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Analytics||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=DynamicForm||index=2||length=4||classIndex=1||classLength=2]/item[name=PARAMETER||title=PARAMETER||value=||index=4||Class=SetFilterItem]/pickList/body/row[0]/col[isCheckboxField=true||0]/valueicon'
        // ).click()
        // Somewhere
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Results.someWhere()
        // Limit Type ID
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Results.clickLimitByTypeId()
        // CLear All
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Results.clearAllLimitByTypeId()
        // click GLO
       // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Results.clickGLO()
        // Somewhere
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Results.someWhere()
        
        // Maximize
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.maximiseSelector()
        
        // Toggle Filter
        GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.toggleFilter()
        
        // Logout
        GQ.logout()
    })
})