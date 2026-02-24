import { GQTest } from '../../jj-pages/GQTest'
describe('04. Quality Management', () => {
    Cypress.config('defaultCommandTimeout', 180000);
    it('17442 - Allows default view of Assessment Executions COMET sub noun of Change Control - Planet', () => {
        const GQ = new GQTest();
// Login
GQ.login();
// Open Quality Management
GQ.Planets.QualityManagement.openLandingPage();
// Change Control
GQ.Planets.QualityManagement.ChangeControls.openLandingPage();
// Assessment Executions
GQ.Planets.QualityManagement.ChangeControls.AssessmentExecutions.open();
// Refresh
GQ.Planets.QualityManagement.ChangeControls.AssessmentExecutions.refresh();
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
cy.getColumnsAndTypes(GQ.Planets.QualityManagement.ChangeControls.AssessmentExecutions.getColumnID()).then(tableInfo => {
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
GQ.Planets.QualityManagement.ChangeControls.AssessmentExecutions.checkMultiChoicePickerColumns(namesList);
//Toggle Filter icon
GQ.Planets.QualityManagement.ChangeControls.AssessmentExecutions.toggleFilter()
//Predefined Filter
GQ.Planets.QualityManagement.ChangeControls.AssessmentExecutions.predefinedFilter()
// Related to Me
GQ.Planets.QualityManagement.ChangeControls.AssessmentExecutions.viewRelatedToMe();
//Predefined Filter
GQ.Planets.QualityManagement.ChangeControls.AssessmentExecutions.predefinedFilter()
// View All
GQ.Planets.QualityManagement.ChangeControls.AssessmentExecutions.viewAll();
// Refresh
GQ.Planets.QualityManagement.ChangeControls.AssessmentExecutions.refresh();
//Chart Icon
GQ.Planets.QualityManagement.ChangeControls.AssessmentExecutions.clickChartIcon();
// Verify available tabs
// const tabNames = ['Analytics', 'Status', 'Status/Assignee'];
// GQ.Planets.QualityManagement.ChangeControls.AssessmentExecutions.checktabs(tabNames);
GQ.Planets.QualityManagement.ChangeControls.AssessmentExecutions.Analytics.refresh();
GQ.Planets.QualityManagement.ChangeControls.AssessmentExecutions.Analytics.facetPicker();
GQ.Planets.QualityManagement.ChangeControls.AssessmentExecutions.Analytics.addRowAttributeClick();

const rowValues = [
    'Overall Business Outcome', 
    'Assessment Risk', 
    'Performed by',  
    'J&J Site Name', 
    'Functional Area', 
    'Functional Area 1', 
    'Functional Area 2',
    'Site License Assessment - Overall Business Outcome',
    'Global/Device Regulatory Assessment - Overall Business Outcome',
    'Local Regulatory Product Assessment - Overall Business Outcome',
];
GQ.Planets.QualityManagement.ChangeControls.AssessmentExecutions.Analytics.checkRowValues(rowValues);

//Chart Icon
GQ.Planets.QualityManagement.ChangeControls.AssessmentExecutions.clickChartIcon();
GQ.Planets.QualityManagement.ChangeControls.AssessmentExecutions.rightClickBookmark(0);
GQ.Planets.QualityManagement.ChangeControls.AssessmentExecutions.checkBookmarkFunationality();
GQ.Planets.QualityManagement.ChangeControls.AssessmentExecutions.openARecord(0);
cy.get("img[src*='opener_closed.png']").siblings('div').contains('Impacted Product').click();
cy.get("img[src*='opener_closed.png']").siblings('div').contains('Site License Assessment Details').click();
cy.get("img[src*='opener_closed.png']").siblings('div').contains('Global/Device Regulatory Assessment Details').click();
cy.get("img[src*='opener_closed.png']").siblings('div').contains('Local Regulatory Product Assessment Details').click();
const formValues = [
    'Number:', 
    'Performed By:', 
    'Assessment Risk:', 
    'Impacted Product ID:', 
    'Impacted Product JNJ Number:', 
    'Impacted Product Filing Type:', 
    'Overall Business Outcome:', 
    'Site License Risk Assessment Details:', 
    'Overall Business Outcome:', 
    'Global/Device Reg. Assessment Details:', 
    'Overall Business Outcome:', 
    'Local Regulatory Product Risk Assessment:'
];
GQ.Planets.QualityManagement.ChangeControls.AssessmentExecutions.checkformsfields(formValues);
cy.contains('See additional details in Related Objects: CMC Global/Device Regulatory Assessments view').should('be.visible') 

GQ.logout();
    })
    it('Allows default view of Assessment Executions COMET sub noun of Change Control- Product', () => {
        const GQ = new GQTest();
        // Login
        GQ.login();

        GQ.Planets.Product.openLandingPage()

        // Product Families
        GQ.Planets.Product.ProductFamilies.openLandingPage()

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        // Product Record
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')

        // Content
        // GQ.Planets.Product.ProductFamilies.ProductFamily.Content.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.openChangeControl()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.AssessmentExecutions.contentAssessmentExecution.open()
        //Predefined Filter
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.AssessmentExecutions.contentAssessmentExecution.predefinedFilter()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.AssessmentExecutions.contentAssessmentExecution.viewRelatedToMe()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.AssessmentExecutions.contentAssessmentExecution.predefinedFilter()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.AssessmentExecutions.contentAssessmentExecution.viewAll()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.AssessmentExecutions.contentAssessmentExecution.All()

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
        'Functional Area 2'
    ];
        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.AssessmentExecutions.contentAssessmentExecution.getColumnID()
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
            'Assessment Risk', 
            'J&J Site Name', 
            'Functional Area 2', 
            'Functional Area 1', 
            'Functional Area'];


        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.AssessmentExecutions.contentAssessmentExecution.checkMultiChoicePickerColumns(namesList)
        //Toggle filter icon
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.AssessmentExecutions.contentAssessmentExecution.toggleFilter()

        //Chart Icon
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.AssessmentExecutions.contentAssessmentExecution.clickChartIcon()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.AssessmentExecutions.contentAssessmentExecution.facetPicker()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.AssessmentExecutions.contentAssessmentExecution.addRowAttributeClick()

        const rowValues = [
            'Overall Business Outcome', 
            'Assessment Risk', 
            'Performed by', 
            'J&J Site Name', 
            'Functional Area', 
            'Functional Area 1', 
            'Functional Area 2',
            'Site License Assessment - Overall Business Outcome',
            'Global/Device Regulatory Assessment - Overall Business Outcome',
            'Local Regulatory Product Assessment - Overall Business Outcome',
        ];
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.AssessmentExecutions.contentAssessmentExecution.checkRowValues(rowValues)

        //Chart Icon
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.AssessmentExecutions.contentAssessmentExecution.clickChartIcon()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.AssessmentExecutions.contentAssessmentExecution.rightClickBookmark(0)

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.AssessmentExecutions.contentAssessmentExecution.checkBookmarkFunationality()

        GQ.Planets.QualityManagement.ChangeControls.AssessmentExecutions.contentAssessmentExecution.openARecord(0);
        cy.get("img[src*='opener_closed.png']").siblings('div').contains('Impacted Product').click();
        cy.get("img[src*='opener_closed.png']").siblings('div').contains('Site License Assessment Details').click();
        cy.get("img[src*='opener_closed.png']").siblings('div').contains('Global/Device Regulatory Assessment Details').click();
        cy.get("img[src*='opener_closed.png']").siblings('div').contains('Local Regulatory Product Assessment Details').click();

        const formValues = [
            'Number:', 
            'Performed By:', 
            'Assessment Risk:', 
            'Impacted Product ID:', 
            'Impacted Product JNJ Number:', 
            'Impacted Product Filing Type:', 
            'Overall Business Outcome:', 
            'Site License Risk Assessment Details:', 
            'Overall Business Outcome:', 
            'Global/Device Reg. Assessment Details:', 
            'Overall Business Outcome:', 
            'Local Regulatory Product Risk Assessment:'
        ];

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.AssessmentExecutions.contentAssessmentExecution.checkformsfields(formValues)
        cy.contains('See additional details in Related Objects: CMC Global/Device Regulatory Assessments view').should('be.visible')  

        GQ.logout();

    })
    it('Allows default view of Assessment Executions COMET sub noun of Change Control - Smart Content Admin Binder', () => {

        const GQ = new GQTest();
        // Login
        GQ.login();

        GQ.Planets.Product.openLandingPage()

        // Product Families
        GQ.Planets.Product.ProductFamilies.openLandingPage()

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        // Product Record
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')

        // Refresh
        GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector()

        // Select the linked binder
        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test Admin Binder')

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.openChangeControl()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.AssessmentExecutions.open()
        //Select All
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.AssessmentExecutions.All()

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
        'Functional Area 2'
        ]
        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.AssessmentExecutions.getColumnID()
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
            'Assessment Risk', 
            'J&J Site Name', 
            'Functional Area', 
            'Functional Area 2', 
            'Functional Area 1'
	    ];


        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.AssessmentExecutions.checkMultiChoicePickerColumns(namesList)

        //Toggle Filter
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.AssessmentExecutions.toggleFilter()

        //Chart Icon
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.AssessmentExecutions.clickChartIcon()


        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.AssessmentExecutions.Analytics.refresh()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.AssessmentExecutions.Analytics.facetPicker()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.AssessmentExecutions.Analytics.addRowAttributeClick()

        const rowValues = [
            'Overall Business Outcome', 
            'Assessment Risk', 
            'Performed by',  
            'J&J Site Name', 
            'Functional Area', 
            'Functional Area 1', 
            'Functional Area 2',
            'Site License Assessment - Overall Business Outcome',
            'Global/Device Regulatory Assessment - Overall Business Outcome',
            'Local Regulatory Product Assessment - Overall Business Outcome',
        ];
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.AssessmentExecutions.Analytics.checkRowValues(rowValues)

        //Chart Icon
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.AssessmentExecutions.clickChartIcon()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.AssessmentExecutions.openARecord(0);

        cy.get("img[src*='opener_closed.png']").siblings('div').contains('Impacted Product').click();
        cy.get("img[src*='opener_closed.png']").siblings('div').contains('Site License Assessment Details').click();
        cy.get("img[src*='opener_closed.png']").siblings('div').contains('Global/Device Regulatory Assessment Details').click();
        cy.get("img[src*='opener_closed.png']").siblings('div').contains('Local Regulatory Product Assessment Details').click();

        const formValues = [
            'Number:', 
            'Performed By:', 
            'Assessment Risk:', 
            'Impacted Product ID:', 
            'Impacted Product JNJ Number:', 
            'Impacted Product Filing Type:', 
            'Overall Business Outcome:', 
            'Site License Risk Assessment Details:', 
            'Overall Business Outcome:', 
            'Global/Device Reg. Assessment Details:', 
            'Overall Business Outcome:', 
            'Local Regulatory Product Risk Assessment:'
        ];

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.AssessmentExecutions.checkformsfields(formValues)

        cy.contains('See additional details in Related Objects: CMC Global/Device Regulatory Assessments view').should('be.visible')  

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.AssessmentExecutions.closeFormView()


        //Check Bookmark Functionality

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.AssessmentExecutions.rightClickBookmark(0)

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.AssessmentExecutions.checkBookmarkFunationality()

        GQ.logout();
    })
    it('Allows default view of Assessment Executions COMET sub noun of Change Control - Linked Content Admin Binder', () => {

        const GQ = new GQTest();
        // Login
        GQ.login();

        GQ.Planets.Product.openLandingPage()

        // Product Families
        GQ.Planets.Product.ProductFamilies.openLandingPage()

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        // Product Record
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')

        // Refresh
        GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector()

        // Select the linked binder
        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test Admin Binder')

        //Open Linked Content
        GQ.Planets.Product.ProductFamilies.ProductFamily.openLinkedContent()

        GQ.Planets.Product.ProductFamilies.ProductFamily.closeSideBar()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.ChangeControls.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.AssessmentExecutions.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.AssessmentExecutions.linkSibling(0)

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
        'Functional Area 2'
        ]
        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.AssessmentExecutions.getColumnID()
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
            'Assessment Risk', 
            'J&J Site Name', 
            'Functional Area', 
            'Functional Area 2', 
            'Functional Area 1'
	    ];

        // Commenting the code for checking multi choice picker due to the temporary fix for the linked content
        // GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.AssessmentExecutions.checkMultiChoicePickerColumns(namesList)

        //Toggle Filter
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.AssessmentExecutions.toggleFilter()

        //Chart Icon
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.AssessmentExecutions.clickChartIcon()


        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.AssessmentExecutions.Analytics.refresh()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.AssessmentExecutions.Analytics.facetPicker()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.AssessmentExecutions.Analytics.addRowAttributeClick()

        const rowValues = [
            'Overall Business Outcome', 
            'Assessment Risk', 
            'Performed by',  
            'J&J Site Name', 
            'Functional Area', 
            'Functional Area 1', 
            'Functional Area 2',
            'Site License Assessment - Overall Business Outcome',
            'Global/Device Regulatory Assessment - Overall Business Outcome',
            'Local Regulatory Product Assessment - Overall Business Outcome',
        ];
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.AssessmentExecutions.Analytics.checkRowValues(rowValues)

        //Chart Icon
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.AssessmentExecutions.clickChartIcon()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.AssessmentExecutions.openARecord(0);

        cy.get("img[src*='opener_closed.png']").siblings('div').contains('Impacted Product').click();
        cy.get("img[src*='opener_closed.png']").siblings('div').contains('Site License Assessment Details').click();
        cy.get("img[src*='opener_closed.png']").siblings('div').contains('Global/Device Regulatory Assessment Details').click();
        cy.get("img[src*='opener_closed.png']").siblings('div').contains('Local Regulatory Product Assessment Details').click();

        const formValues = [
            'Number:', 
            'Performed By:', 
            'Assessment Risk:', 
            'Impacted Product ID:', 
            'Impacted Product JNJ Number:', 
            'Impacted Product Filing Type:', 
            'Overall Business Outcome:', 
            'Site License Risk Assessment Details:', 
            'Overall Business Outcome:', 
            'Global/Device Reg. Assessment Details:', 
            'Overall Business Outcome:', 
            'Local Regulatory Product Risk Assessment:'
        ];

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.AssessmentExecutions.checkformsfields(formValues)

        cy.contains('See additional details in Related Objects: CMC Global/Device Regulatory Assessments view').should('be.visible')  

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.AssessmentExecutions.closeFormView()


        //Check Bookmark Functionality

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.AssessmentExecutions.rightClickBookmark(0)

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.AssessmentExecutions.checkBookmarkFunationality()

        GQ.logout();
    })
    it('Allows default view of Assessment Executions COMET sub noun of Change Control - Smart Content User Binder', () => {

        const GQ = new GQTest();
        // Login
        GQ.login();

        GQ.Planets.Product.openLandingPage()

        // Product Families
        GQ.Planets.Product.ProductFamilies.openLandingPage()

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        // Product Record
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')

        // Refresh
        GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector()

        // Select the linked binder
        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test User Binder')

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.openChangeControl()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.AssessmentExecutions.open()
        //Select All
        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.AssessmentExecutions.All()

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
        'Functional Area 2'
        ]
        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.AssessmentExecutions.getColumnID()
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
            'Assessment Risk', 
            'J&J Site Name', 
            'Functional Area', 
            'Functional Area 2', 
            'Functional Area 1'
	    ];


        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.AssessmentExecutions.checkMultiChoicePickerColumns(namesList)

        //Toggle Filter
        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.AssessmentExecutions.toggleFilter()

        //Chart Icon
        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.AssessmentExecutions.clickChartIcon()


        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.AssessmentExecutions.Analytics.refresh()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.AssessmentExecutions.Analytics.facetPicker()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.AssessmentExecutions.Analytics.addRowAttributeClick()

        const rowValues = [
            'Overall Business Outcome', 
            'Assessment Risk', 
            'Performed by',  
            'J&J Site Name', 
            'Functional Area', 
            'Functional Area 1', 
            'Functional Area 2',
            'Site License Assessment - Overall Business Outcome',
            'Global/Device Regulatory Assessment - Overall Business Outcome',
            'Local Regulatory Product Assessment - Overall Business Outcome',
        ];
        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.AssessmentExecutions.Analytics.checkRowValues(rowValues)

        //Chart Icon
        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.AssessmentExecutions.clickChartIcon()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.AssessmentExecutions.openARecord(0);

        cy.get("img[src*='opener_closed.png']").siblings('div').contains('Impacted Product').click();
        cy.get("img[src*='opener_closed.png']").siblings('div').contains('Site License Assessment Details').click();
        cy.get("img[src*='opener_closed.png']").siblings('div').contains('Global/Device Regulatory Assessment Details').click();
        cy.get("img[src*='opener_closed.png']").siblings('div').contains('Local Regulatory Product Assessment Details').click();

        const formValues = [
            'Number:', 
            'Performed By:', 
            'Assessment Risk:', 
            'Impacted Product ID:', 
            'Impacted Product JNJ Number:', 
            'Impacted Product Filing Type:', 
            'Overall Business Outcome:', 
            'Site License Risk Assessment Details:', 
            'Overall Business Outcome:', 
            'Global/Device Reg. Assessment Details:', 
            'Overall Business Outcome:', 
            'Local Regulatory Product Risk Assessment:'
        ];

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.AssessmentExecutions.checkformsfields(formValues)

        cy.contains('See additional details in Related Objects: CMC Global/Device Regulatory Assessments view').should('be.visible')  

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.AssessmentExecutions.closeFormView()


        //Check Bookmark Functionality

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.AssessmentExecutions.rightClickBookmark(0)

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.AssessmentExecutions.checkBookmarkFunationality()

        GQ.logout();
    })
    it('Allows default view of Assessment Executions COMET sub noun of Change Control - Linked Content User Binder', () => {

        const GQ = new GQTest();
        // Login
        GQ.login();

        GQ.Planets.Product.openLandingPage()

        // Product Families
        GQ.Planets.Product.ProductFamilies.openLandingPage()

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        // Product Record
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')

        // Refresh
        GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector()

        // Select the linked binder
        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test User Binder')

        //Open Linked Content
        GQ.Planets.Product.ProductFamilies.ProductFamily.openLinkedContent()

        GQ.Planets.Product.ProductFamilies.ProductFamily.closeSideBar()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.ChangeControls.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.AssessmentExecutions.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.AssessmentExecutions.linkSibling(0)

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
        'Functional Area 2'
        ]
        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.AssessmentExecutions.getColumnID()
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
            'Assessment Risk', 
            'J&J Site Name', 
            'Functional Area', 
            'Functional Area 2', 
            'Functional Area 1'
	    ];

        // Commenting the code for checking multi choice picker due to the temporary fix for the linked content
        // GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.AssessmentExecutions.checkMultiChoicePickerColumns(namesList)

        //Toggle Filter
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.AssessmentExecutions.toggleFilter()

        //Chart Icon
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.AssessmentExecutions.clickChartIcon()


        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.AssessmentExecutions.Analytics.refresh()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.AssessmentExecutions.Analytics.facetPicker()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.AssessmentExecutions.Analytics.addRowAttributeClick()

        const rowValues = [
            'Overall Business Outcome', 
            'Assessment Risk', 
            'Performed by',  
            'J&J Site Name', 
            'Functional Area', 
            'Functional Area 1', 
            'Functional Area 2',
            'Site License Assessment - Overall Business Outcome',
            'Global/Device Regulatory Assessment - Overall Business Outcome',
            'Local Regulatory Product Assessment - Overall Business Outcome',
        ];
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.AssessmentExecutions.Analytics.checkRowValues(rowValues)

        //Chart Icon
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.AssessmentExecutions.clickChartIcon()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.AssessmentExecutions.openARecord(0);

        cy.get("img[src*='opener_closed.png']").siblings('div').contains('Impacted Product').click();
        cy.get("img[src*='opener_closed.png']").siblings('div').contains('Site License Assessment Details').click();
        cy.get("img[src*='opener_closed.png']").siblings('div').contains('Global/Device Regulatory Assessment Details').click();
        cy.get("img[src*='opener_closed.png']").siblings('div').contains('Local Regulatory Product Assessment Details').click();

        const formValues = [
            'Number:', 
            'Performed By:', 
            'Assessment Risk:', 
            'Impacted Product ID:', 
            'Impacted Product JNJ Number:', 
            'Impacted Product Filing Type:', 
            'Overall Business Outcome:', 
            'Site License Risk Assessment Details:', 
            'Overall Business Outcome:', 
            'Global/Device Reg. Assessment Details:', 
            'Overall Business Outcome:', 
            'Local Regulatory Product Risk Assessment:'
        ];

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.AssessmentExecutions.checkformsfields(formValues)

        cy.contains('See additional details in Related Objects: CMC Global/Device Regulatory Assessments view').should('be.visible')  

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.AssessmentExecutions.closeFormView()


        //Check Bookmark Functionality

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.AssessmentExecutions.rightClickBookmark(0)

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.AssessmentExecutions.checkBookmarkFunationality()

        GQ.logout();
    })
    it('Allows default view of Assessment Executions COMET sub noun of Change Control - Smart Content Product Specific Binder', () => {

        const GQ = new GQTest();
        // Login
        GQ.login();

        GQ.Planets.Product.openLandingPage()

        // Product Families
        GQ.Planets.Product.ProductFamilies.openLandingPage()

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        // Product Record
        // Open APALUTAMIDE product family
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE');
        GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector();
        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test Admin Binder');
        // Open Product Specific Binder
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.openlandingpage();
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.Name('Test');
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.dropdown();
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.selectall()
        // Click Plus
        GQ.Planets.Product.ProductFamilies.ProductFamily.clickPlusIcon('MSAT Product View - Cypress Test Admin Binder')
    
        // Click Child
        GQ.Planets.Product.ProductFamilies.ProductFamily.clickChild('MSAT Product View - Cypress Test Admin Binder')

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.smartcontent.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.smartcontent.QualityManagement.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.smartcontent.QualityManagement.openChangeControl()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.smartcontent.QualityManagement.AssessmentExecutions.open()
        //Select All
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.smartcontent.QualityManagement.AssessmentExecutions.All()

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
        'Functional Area 2'
        ]
        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.smartcontent.QualityManagement.AssessmentExecutions.getColumnID()
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
            'Assessment Risk', 
            'J&J Site Name', 
            'Functional Area', 
            'Functional Area 2', 
            'Functional Area 1'
	    ];


        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.smartcontent.QualityManagement.AssessmentExecutions.checkMultiChoicePickerColumns(namesList)

        //Toggle Filter
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.smartcontent.QualityManagement.AssessmentExecutions.toggleFilter()

        //Chart Icon
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.smartcontent.QualityManagement.AssessmentExecutions.clickChartIcon()


        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.smartcontent.QualityManagement.AssessmentExecutions.Analytics.refresh()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.smartcontent.QualityManagement.AssessmentExecutions.Analytics.facetPicker()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.smartcontent.QualityManagement.AssessmentExecutions.Analytics.addRowAttributeClick()

        const rowValues = [
            'Overall Business Outcome', 
            'Assessment Risk', 
            'Performed by',  
            'J&J Site Name', 
            'Functional Area', 
            'Functional Area 1', 
            'Functional Area 2',
            'Site License Assessment - Overall Business Outcome',
            'Global/Device Regulatory Assessment - Overall Business Outcome',
            'Local Regulatory Product Assessment - Overall Business Outcome',
        ];
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.smartcontent.QualityManagement.AssessmentExecutions.Analytics.checkRowValues(rowValues)

        //Chart Icon
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.smartcontent.QualityManagement.AssessmentExecutions.clickChartIcon()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.smartcontent.QualityManagement.AssessmentExecutions.openARecord(0);

        cy.get("img[src*='opener_closed.png']").siblings('div').contains('Impacted Product').click();
        cy.get("img[src*='opener_closed.png']").siblings('div').contains('Site License Assessment Details').click();
        cy.get("img[src*='opener_closed.png']").siblings('div').contains('Global/Device Regulatory Assessment Details').click();
        cy.get("img[src*='opener_closed.png']").siblings('div').contains('Local Regulatory Product Assessment Details').click();

        const formValues = [
            'Number:', 
            'Performed By:', 
            'Assessment Risk:', 
            'Impacted Product ID:', 
            'Impacted Product JNJ Number:', 
            'Impacted Product Filing Type:', 
            'Overall Business Outcome:', 
            'Site License Risk Assessment Details:', 
            'Overall Business Outcome:', 
            'Global/Device Reg. Assessment Details:', 
            'Overall Business Outcome:', 
            'Local Regulatory Product Risk Assessment:'
        ];

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.smartcontent.QualityManagement.AssessmentExecutions.checkformsfields(formValues)

        cy.contains('See additional details in Related Objects: CMC Global/Device Regulatory Assessments view').should('be.visible')  

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.smartcontent.QualityManagement.AssessmentExecutions.closeFormView()


        //Check Bookmark Functionality

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.smartcontent.QualityManagement.AssessmentExecutions.rightClickBookmark(0)

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.smartcontent.QualityManagement.AssessmentExecutions.checkBookmarkFunationality()

        GQ.logout();
    })
    it('Allows default view of Assessment Executions COMET sub noun of Change Control - Linked Content Product Specific Binder', () => {

         const GQ = new GQTest();
        // Login
        GQ.login();

        // Open Product Planet
        GQ.Planets.Product.openLandingPage();

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter();

        // Product Record
        // Open APALUTAMIDE product family
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE');
        GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector();
        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test Admin Binder');
        // Open Product Specific Binder
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.openlandingpage();
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.Name('Test');
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.dropdown();
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.selectall()
        // Click Plus
        GQ.Planets.Product.ProductFamilies.ProductFamily.clickPlusIcon('MSAT Product View - Cypress Test Admin Binder')
    
        // Click Child
        GQ.Planets.Product.ProductFamilies.ProductFamily.clickChild('MSAT Product View - Cypress Test Admin Binder')

        //Open Linked Content
        GQ.Planets.Product.ProductFamilies.ProductFamily.openLinkedContent()

        GQ.Planets.Product.ProductFamilies.ProductFamily.closeSideBar()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.ProductSpecificBinder.linkedcontent.qualitymanagment.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.ProductSpecificBinder.linkedcontent.qualitymanagment.openChangeControls()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.AssessmentExecutions.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.AssessmentExecutions.linkSibling(0)

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
        'Functional Area 2'
        ]
        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.AssessmentExecutions.getColumnID()
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
            'Assessment Risk', 
            'J&J Site Name', 
            'Functional Area', 
            'Functional Area 2', 
            'Functional Area 1'
	    ];

        // Commenting the code for checking multi choice picker due to the temporary fix for the linked content

        // GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.Escalations.checkMultiChoicePickerColumns(namesList)

        //Chart Icon
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.AssessmentExecutions.clickChartIcon()


        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.AssessmentExecutions.Analytics.refresh()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.AssessmentExecutions.Analytics.facetPicker()


        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.AssessmentExecutions.Analytics.addRowAttributeClick()

        const rowValues = [
            'Overall Business Outcome', 
            'Assessment Risk', 
            'Performed by',  
            'J&J Site Name', 
            'Functional Area', 
            'Functional Area 1', 
            'Functional Area 2',
            'Site License Assessment - Overall Business Outcome',
            'Global/Device Regulatory Assessment - Overall Business Outcome',
            'Local Regulatory Product Assessment - Overall Business Outcome',
        ];
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.AssessmentExecutions.Analytics.checkRowValues(rowValues)

        //Chart Icon
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.AssessmentExecutions.clickChartIcon()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.AssessmentExecutions.openARecord(0)

        cy.get("img[src*='opener_closed.png']").siblings('div').contains('Impacted Product').click();
        cy.get("img[src*='opener_closed.png']").siblings('div').contains('Site License Assessment Details').click();
        cy.get("img[src*='opener_closed.png']").siblings('div').contains('Global/Device Regulatory Assessment Details').click();
        cy.get("img[src*='opener_closed.png']").siblings('div').contains('Local Regulatory Product Assessment Details').click();

        const formValues = [
            'Number:', 
            'Performed By:', 
            'Assessment Risk:', 
            'Impacted Product ID:', 
            'Impacted Product JNJ Number:', 
            'Impacted Product Filing Type:', 
            'Overall Business Outcome:', 
            'Site License Risk Assessment Details:', 
            'Overall Business Outcome:', 
            'Global/Device Reg. Assessment Details:', 
            'Overall Business Outcome:', 
            'Local Regulatory Product Risk Assessment:'
        ];

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.AssessmentExecutions.checkformsfields(formValues)

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.AssessmentExecutions.closeFormView()

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.AssessmentExecutions.rightClickBookmark(0)

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.QualityMangement.AssessmentExecutions.checkBookmarkFunationality()
        
        GQ.logout()
    })
})