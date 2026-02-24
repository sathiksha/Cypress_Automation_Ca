import { GQTest } from "../../../jj-pages/GQTest";
const GQ = new GQTest();
describe('Related Objects of Quality Management Planet sub nouns', () => {
    it('15576 -Allows Related Objects of Assessment Executions COMET sub noun of Change Controls - Planet', () => {

        // Login 
        GQ.login()

        // Open Quality Management
        GQ.Planets.QualityManagement.openLandingPage()

        //Open ChangeControls
        GQ.Planets.QualityManagement.ChangeControls.openLandingPage()

        //Open AssessmentExecutions
        GQ.Planets.QualityManagement.ChangeControls.AssessmentExecutions.open()

        //Expand a Record
        GQ.Planets.QualityManagement.ChangeControls.AssessmentExecutions.expandrecord('1')

        //Click Related Objects
        GQ.Planets.QualityManagement.ChangeControls.AssessmentExecutions.openRelatedObjects()

        let actualValues = [
            'Change Controls',
            'CMC Global/Device Regulatory Assessments'
        ]

        GQ.Planets.QualityManagement.ChangeControls.AssessmentExecutions.checkRelatedObjects(actualValues)

        // Logout
        GQ.logout()

    })
    it('15576 -Allows Related Objects of Assessment Executions COMET sub noun of Change Controls - Quality Records by User', () => {

        // Login 
        GQ.login()

        // Open Quality Management
        GQ.Planets.QualityManagement.openLandingPage()

        GQ.Planets.QualityManagement.QualityRecordsByUser.openLandingPage()

        GQ.Planets.QualityManagement.QualityRecordsByUser.clickAPerson('Nicole Zabrecchi-Torres')

        //Open ChangeControls
        GQ.Planets.QualityManagement.QualityRecordsByUser.Changecontrols.open()

        //Open AssessmentExecutions
        GQ.Planets.QualityManagement.QualityRecordsByUser.ChangeControls.AssessmentExecutions.open()

        //Expand a Record
        GQ.Planets.QualityManagement.QualityRecordsByUser.ChangeControls.AssessmentExecutions.expandrecord()

        //Click Related Objects
        GQ.Planets.QualityManagement.QualityRecordsByUser.ChangeControls.AssessmentExecutions.openRelatedObjects()

        let actualValues = [
            'Change Controls',
            'CMC Global/Device Regulatory Assessments'
        ]

        GQ.Planets.QualityManagement.QualityRecordsByUser.ChangeControls.AssessmentExecutions.checkRelatedObjects(actualValues)

        // Logout
        GQ.logout()

    })
    it('15576 -Allows Related Objects of Assessment Executions COMET sub noun of Change Controls - Product', () => {

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
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.open()

        //Open Quality Management
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.open()

        //Open ChangeControls
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.ChangeControls.open()

        //Open AssessmentExecutions
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.ChangeControls.AssessmentExecutions.open()

        //Expand a Record
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.ChangeControls.AssessmentExecutions.expandrecord('1')

        //Click Related Objects
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.ChangeControls.AssessmentExecutions.openRelatedObjects()

        let actualValues = [
            'Change Controls',
            'CMC Global/Device Regulatory Assessments'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.ChangeControls.AssessmentExecutions.checkRelatedObjects(actualValues)

        // Logout
        GQ.logout()
    })
    it('15576 -Allows Related Objects of Assessment Executions COMET sub noun of Change Controls - by User', () => {

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
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.openLandingPage()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.closeSideBar()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.toggleFilter()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.clickAPerson('Nicole Zabrecchi-Torres')

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.Changecontrols.AssessmentExecutions.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.Changecontrols.AssessmentExecutions.expandrecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.Changecontrols.AssessmentExecutions.openRelatedObjects()

        const relatedObjects = [
            'Change Controls',
            'CMC Global/Device Regulatory Assessments'
        ]
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.Changecontrols.AssessmentExecutions.checkRelatedObjects(relatedObjects)

        // Logout
        GQ.logout()

    })
    it('15576 -Allows Related Objects of Assessment Executions COMET sub noun of Change Controls - Admin Data Binder Smart Content', () => {

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

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.All()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.openARecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.openRelatedObjects()

        const relatedObjects = [
            'Change Controls',
            'CMC Global/Device Regulatory Assessments'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.checkRelatedObjects(relatedObjects)

        // Logout
        GQ.logout()

    })
    it('15576 -Allows Related Objects of Assessment Executions COMET sub noun of Change Controls - Admin Data Binder Linked Content', () => {

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

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.Changecontrols.AssessmentExecutions.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.Changecontrols.AssessmentExecutions.linkSibling('0')

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.Changecontrols.AssessmentExecutions.openARecord('0')

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.Changecontrols.AssessmentExecutions.openRelatedObjects()

        const relatedObjects = [
            'Change Controls',
            'CMC Global/Device Regulatory Assessments'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.Changecontrols.AssessmentExecutions.checkRelatedObjects(relatedObjects)

        // Logout
        GQ.logout()

    })
    it('15576 -Allows Related Objects of Assessment Executions COMET sub noun of Change Controls - User Data Binder Smart Content', () => {

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

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.openAll()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.expandrecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.openRelatedObjects()

        const relatedObjects = [
            'Change Controls',
            'CMC Global/Device Regulatory Assessments'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.checkRelatedObjects(relatedObjects)

        // Logout
        GQ.logout()

    })
    it('15576 -Allows Related Objects of Assessment Executions COMET sub noun of Change Controls - User Data Binder Linked Content', () => {

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

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.AssessmentExecutions.open()


        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.AssessmentExecutions.linkSibling('0')

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.AssessmentExecutions.openARecord('0')

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.AssessmentExecutions.openRelatedObjects()

        let relatedObjects = [
            'Change Controls',
            'CMC Global/Device Regulatory Assessments'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.AssessmentExecutions.checkRelatedObjects(relatedObjects)

        // Logout
        GQ.logout()

    })
    it('15576 -Allows Related Objects of Assessment Executions COMET sub noun of Change Controls - Product Specific Binder Smart Content', () => {
        // Login
        GQ.login();

        // Open Product Planet
        GQ.Planets.Product.openLandingPage();

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter();

        // Open APALUTAMIDE
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE');

        // Refresh and select the linked binder
        GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector();

        cy.wait(5000)

        GQ.Planets.Product.ProductFamilies.ProductFamily.clickPlusIconofBinder()

        cy.wait(5000)

        GQ.Planets.Product.ProductFamilies.ProductFamily.clickProductSpecificBinder('MSAT Product View - Cypress Test Product Specific Binder')


        cy.wait(5000)

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.smartcontent.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.ChangeControls.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.open()


        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.openAll()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.expandrecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.openRelatedObjects()

        const relatedObjects = [
            'Change Controls',
            'CMC Global/Device Regulatory Assessments'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.ChangeControls.AssessmentExecutions.checkRelatedObjects(relatedObjects)

        // Logout
        GQ.logout()

    })
    it('15576 -Allows Related Objects of Assessment Executions COMET sub noun of Change Controls - Product Specific Binder Linked Content', () => {
        // Login
        GQ.login();

        // Open Product Planet
        GQ.Planets.Product.openLandingPage();

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter();

        // Open APALUTAMIDE
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE');

        // Refresh and select the linked binder
        GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector();

        cy.wait(5000)

        GQ.Planets.Product.ProductFamilies.ProductFamily.clickPlusIconofBinder()

        cy.wait(5000)

        GQ.Planets.Product.ProductFamilies.ProductFamily.clickProductSpecificBinder('MSAT Product View - Cypress Test Product Specific Binder')


        cy.wait(5000)

        //Open Linked Content
        GQ.Planets.Product.ProductFamilies.ProductFamily.openLinkedContent()

        GQ.Planets.Product.ProductFamilies.ProductFamily.closeSideBar()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.ChangeControls.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.ChangeControls.AssessmentExecutions.open()

        
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.ChangeControls.AssessmentExecutions.linkSibling('0')

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.ChangeControls.AssessmentExecutions.openARecord('0')

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.ChangeControls.AssessmentExecutions.openRelatedObjects()

        let relatedObjects = [
            'Change Controls',
            'CMC Global/Device Regulatory Assessments'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.ChangeControls.AssessmentExecutions.checkRelatedObjects(relatedObjects)


        // Logout
        GQ.logout()

    })
})