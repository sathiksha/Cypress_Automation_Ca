import { GQTest } from "../../../../jj-pages/GQTest";
import { LegendBio } from "../../../../jj-pages/AT LegendBio/LegendBio"
const GQ = new GQTest();
const ATLegendBio = new LegendBio()

describe('Default view sub tabs of Change Controls (COMET)', () => {
    it('Allows ciltacabtagene autoleucel Product Family / Products > Quality Management > Change Controls > Change Controls (sub-tab) for LegendBio users only', () => {

        // Login
        GQ.login('AT LegendBio');

        //Open Products
        GQ.Planets.Product.openLandingPage()

        // Product Record
        GQ.Planets.Product.ProductFamilies.openProductFamilyByIndex(0)

        ATLegendBio.QualityManagement.openLandingPage()

        ATLegendBio.QualityManagement.ChangeControlsMain.open()

        ATLegendBio.QualityManagement.ChangeControlsMain.Changecontrols.refresh()

        let expectedColumnsQXD = [
            'Number',
            '👁',
            'Title',
            'Current State',
            'Future State',
            'Change Type',
            'Lifecycle Stage',
            'Regulatory Signal',
            'Change Category',
            'Stability Indicating',
            'Reason for Change',
            'Owner',
            'Change Risk Level',
            'Overall Change Risk Level',
            'Status',
            'Stage',
            'Workflow Status',
            'Implementation Status',
            'Implementation Check Outcome',
            'Overall Implementation Check Outcome',
            'Legacy Reference Number',
            'Legacy CC Level',
            'Impacted Organizations',
            'Impacted Material Item',
            'Impacted Material Description',
            'Impacted Batch No.',
            'Impacted Products',
            'Impacted Documents',
            'Impacted Equipments',
            'Impacted Site w/ Child CC#',
            'User Comments'
        ]

        // Read column
        cy.getColumnsAndTypes(
            ATLegendBio.QualityManagement.ChangeControlsMain.Changecontrols.headerID()
        ).then(tableInfo => {
            let availableCols = []
            tableInfo.columns.map((obj) => {
                availableCols.push(obj.textContent)
            })
            cy.log(availableCols)
            for (let i = 0; i < expectedColumnsQXD.length; i++) {
                expect(availableCols).to.include(expectedColumnsQXD[i])
            }

        })

        // Verify Multichoice picker
        const namesList = [
            'Change Type',
            'Lifecycle Stage',
            'Regulatory Signal',
            'Change Category',
            'Stability Indicating',
            'Reason for Change',
            'Change Risk Level',
            'Overall Change Risk Level',
            'Status',
            'Stage',
            'Workflow Status',
            'Implementation Status',
        ]

        //Check Multi Choice Picker Columns
        ATLegendBio.QualityManagement.ChangeControlsMain.Changecontrols.checkMultiChoicePickerColumns(namesList)

        cy.wait(2000)
        // Related to Me
        ATLegendBio.QualityManagement.ChangeControlsMain.Changecontrols.viewRelatedToMe()

        // Related to Me And In Approval
        ATLegendBio.QualityManagement.ChangeControlsMain.Changecontrols.viewRelatedToMeAndInApproval()

        // Related to Me And Open
        ATLegendBio.QualityManagement.ChangeControlsMain.Changecontrols.viewRelatedToMeAndOpen()

        // View All
        ATLegendBio.QualityManagement.ChangeControlsMain.Changecontrols.viewAll()

        // Refresh
        ATLegendBio.QualityManagement.ChangeControlsMain.Changecontrols.refresh()

        //Chart Icon
        ATLegendBio.QualityManagement.ChangeControlsMain.Changecontrols.clickChartIcon()

        // Verify available tabs
        const tabNames = [
            'Analytics',
            'Status',
            'Status/Owner'
        ]
        //chack tab Names
        ATLegendBio.QualityManagement.ChangeControlsMain.Changecontrols.checkTabs(tabNames)

        //Close Chart Icon
        ATLegendBio.QualityManagement.ChangeControlsMain.Changecontrols.clickChartIcon()

        //Add Show Legend Bio Column to visible state
        cy.addColumn(ATLegendBio.QualityManagement.ChangeControlsMain.Changecontrols.headerID(), ['Show Legend Bio'])

        //Validate the data should follow for AT Legend Bio
        ATLegendBio.QualityManagement.ChangeControlsMain.Changecontrols.checkLegendBioCondition()

        //Open A Record
        ATLegendBio.QualityManagement.ChangeControlsMain.Changecontrols.openARecord()

        // Check Content Read Only
        ATLegendBio.QualityManagement.ChangeControlsMain.Changecontrols.checkContentReadOnly()

        //Close the Record
        ATLegendBio.QualityManagement.ChangeControlsMain.Changecontrols.closeARecord()

        //Download data as csv file
        cy.downloadExcelFile()

        //Verify the excel download
        ATLegendBio.QualityManagement.ChangeControlsMain.Changecontrols.verifyFileDownload()

        // Logout
        GQ.logout()
    })

    it('Allows ciltacabtagene autoleucel Product Family / Products > Quality Management > Change Controls > Implementations (sub-tab) for LegendBio users only', () => {

        // Login
        GQ.login('AT LegendBio');

        //Open Products
        GQ.Planets.Product.openLandingPage()

        // Product Record
        GQ.Planets.Product.ProductFamilies.openProductFamilyByIndex(0)

        ATLegendBio.QualityManagement.openLandingPage()

        ATLegendBio.QualityManagement.ChangeControlsMain.open()

        ATLegendBio.QualityManagement.ChangeControlsMain.Implementations.open()

        let expectedColumnsQXD = [
            'Number',
            '👁',
            'Title',
            'Description',
            'Task Type',
            'Task Subtype',
            'Assignee',
            'Due Date',
            'Status',
            'J&J Site Name',
            'Functional Area',
            'Functional Area 1',
            'Functional Area 2',
            'Task Results',
            'Related Change',
            'Related Nonconformance',
            'Task Completion Date',
        ]
        // Read column
        cy.getColumnsAndTypes(
            ATLegendBio.QualityManagement.ChangeControlsMain.Implementations.headerID()
        ).then(tableInfo => {
            let availableCols = []
            tableInfo.columns.map((obj) => {
                availableCols.push(obj.textContent)
            })
            cy.log(availableCols)
            for (let i = 0; i < expectedColumnsQXD.length; i++) {
                expect(availableCols).to.include(expectedColumnsQXD[i])
            }
        })

        // Verify Multichoice picker
        const namesList = [
            'Task Type',
            'Task Subtype',
            'Status',
            'J&J Site Name',
            'Functional Area',
            'Functional Area 1',
            'Functional Area 2',
        ]


        ATLegendBio.QualityManagement.ChangeControlsMain.Implementations.checkMultiChoicePickerColumns(namesList)

        //Chart Icon
        ATLegendBio.QualityManagement.ChangeControlsMain.Implementations.clickChartIcon()
        cy.wait(2000)
        // Related to Me
        ATLegendBio.QualityManagement.ChangeControlsMain.Implementations.viewRelatedToMe()

        // Related to Me And In Approval
        ATLegendBio.QualityManagement.ChangeControlsMain.Implementations.viewRelatedToMeAndInApproval()

        // Related to Me And Open
        ATLegendBio.QualityManagement.ChangeControlsMain.Implementations.viewRelatedToMeAndOpen()

        // View All
        ATLegendBio.QualityManagement.ChangeControlsMain.Implementations.viewAll()

        // Refresh
        ATLegendBio.QualityManagement.ChangeControlsMain.Implementations.refresh()

        //Chart Icon
        ATLegendBio.QualityManagement.ChangeControlsMain.Implementations.clickChartIcon()

        // Verify available tabs
        const tabNames = [
            'Analytics',
            'Status',
            'Status/Assignee'
        ]
        //chack tab Names
        ATLegendBio.QualityManagement.ChangeControlsMain.Implementations.checkTabs(tabNames)

        //Close Chart Icon
        ATLegendBio.QualityManagement.ChangeControlsMain.Implementations.clickChartIcon()

        //Add Show Legend Bio Column to visible state
        cy.addColumn(ATLegendBio.QualityManagement.ChangeControlsMain.Implementations.headerID(), ['Show Legend Bio'])

        //Validate the data should follow for AT Legend Bio
        ATLegendBio.QualityManagement.ChangeControlsMain.Implementations.checkLegendBioCondition()

        //Open A Record
        ATLegendBio.QualityManagement.ChangeControlsMain.Implementations.openARecord()

        // Check Content Read Only
        ATLegendBio.QualityManagement.ChangeControlsMain.Implementations.checkContentReadOnly()

        //Close the Record
        ATLegendBio.QualityManagement.ChangeControlsMain.Implementations.closeARecord()

        //Download data as csv file
        cy.downloadExcelFile()

        //Verify the excel download
        ATLegendBio.QualityManagement.ChangeControlsMain.Implementations.verifyFileDownload()


        // Logout
        GQ.logout()
    })

    it('Allows ciltacabtagene autoleucel Product Family / Products > Quality Management > Change Controls > Assessment Executions (sub-tab) for LegendBio users only', () => {

        // Login
        GQ.login('AT LegendBio');

        //Open Products
        GQ.Planets.Product.openLandingPage()

        // Product Record
        GQ.Planets.Product.ProductFamilies.openProductFamilyByIndex(0)

        ATLegendBio.QualityManagement.openLandingPage()

        ATLegendBio.QualityManagement.ChangeControlsMain.open()

        ATLegendBio.QualityManagement.ChangeControlsMain.AssessmentExecutions.open()

        let expectedColumnsQXD = [
            'Number',
            '👁',
            'Name',
            'Overall Business Outcome',
            'Assessment Risk',
            'Performed By',
            'Created Date',
            'Performed Date',
            'Impacted Product Family',
            'Impacted Product Trade Name',
            'Impacted Product JNJ Number',
            'J&J Site Name',
            'Functional Area',
            'Functional Area 1',
            'Functional Area 2'];
        // Read column
        cy.getColumnsAndTypes(ATLegendBio.QualityManagement.ChangeControlsMain.AssessmentExecutions.headerID()).then(tableInfo => {
            let availableCols = [];
            tableInfo.columns.map(obj => {
                availableCols.push(obj.textContent);
            });
            cy.log(availableCols);
            for (let i = 0; i < expectedColumnsQXD.length; i++) {
                expect(availableCols).to.include(expectedColumnsQXD[i]);
            }
        });
        // Verify Multichoice picker
        const namesList = [
            'Overall Business Outcome',
            'Assessment Risk',
            'J&J Site Name',
            'Functional Area 2',
            'Functional Area 1',
            'Functional Area'
        ];
        ATLegendBio.QualityManagement.ChangeControlsMain.AssessmentExecutions.checkMultiChoicePickerColumns(namesList);

               // Related to Me
        ATLegendBio.QualityManagement.ChangeControlsMain.AssessmentExecutions.viewRelatedToMe()

        // View All
        ATLegendBio.QualityManagement.ChangeControlsMain.AssessmentExecutions.viewAll()

        // Refresh
        ATLegendBio.QualityManagement.ChangeControlsMain.AssessmentExecutions.refresh()

        //Chart Icon
        ATLegendBio.QualityManagement.ChangeControlsMain.AssessmentExecutions.clickChartIcon()

        // Verify available tabs
        const tabNames = [
            'Analytics'
        ]
        //chack tab Names
        ATLegendBio.QualityManagement.ChangeControlsMain.AssessmentExecutions.checkTabs(tabNames)

        //Close Chart Icon
        ATLegendBio.QualityManagement.ChangeControlsMain.AssessmentExecutions.clickChartIcon()

        //Add Show Legend Bio Column to visible state
        cy.addColumn(ATLegendBio.QualityManagement.ChangeControlsMain.AssessmentExecutions.headerID(), ['Show Legend Bio'])

        //Validate the data should follow for AT Legend Bio
        ATLegendBio.QualityManagement.ChangeControlsMain.AssessmentExecutions.checkLegendBioCondition()

        //Open A Record
        ATLegendBio.QualityManagement.ChangeControlsMain.AssessmentExecutions.openARecord()

        // Check Content Read Only
        ATLegendBio.QualityManagement.ChangeControlsMain.AssessmentExecutions.checkContentReadOnly()

        //Close the Record
        ATLegendBio.QualityManagement.ChangeControlsMain.AssessmentExecutions.closeARecord()

        //Download data as csv file
        cy.downloadExcelFile()

        //Verify the excel download
        ATLegendBio.QualityManagement.ChangeControlsMain.AssessmentExecutions.verifyFileDownload()


        // Logout
        GQ.logout()
    })
})