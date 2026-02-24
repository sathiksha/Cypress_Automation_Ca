import { GQTest } from "../../../jj-pages/GQTest";
const GQ = new GQTest();
describe('Related Objects of Quality Management Planet sub nouns', () => {
    it('15577 - Allows Related Objects of Implementations COMET sub noun of Change Controls - Planet', () => {

        // Login 
        GQ.login()

        // Open Quality Management
        GQ.Planets.QualityManagement.openLandingPage()

        GQ.Planets.QualityManagement.ChangeControls.openLandingPage()

        GQ.Planets.QualityManagement.ChangeControls.Implementations.open()

        GQ.Planets.QualityManagement.ChangeControls.Implementations.expandrecord('1')

        GQ.Planets.QualityManagement.ChangeControls.Implementations.openRelatedObjects()

        let actualValues = [
            'Change Controls'
        ]

        GQ.Planets.QualityManagement.ChangeControls.Implementations.checkRelatedObjects(actualValues)

        // Logout
        GQ.logout()

    })
    it('15577 - Allows Related Objects of Implementations COMET sub noun of Change Controls - Quality Records by User', () => {

        // Login 
        GQ.login()

        // Open Quality Management
        GQ.Planets.QualityManagement.openLandingPage()

        GQ.Planets.QualityManagement.QualityRecordsByUser.openLandingPage()

        GQ.Planets.QualityManagement.QualityRecordsByUser.clickAPerson('Nicole Zabrecchi-Torres')

        GQ.Planets.QualityManagement.QualityRecordsByUser.Changecontrols.open()

        GQ.Planets.QualityManagement.QualityRecordsByUser.ChangeControls.Implementations.open()

        GQ.Planets.QualityManagement.QualityRecordsByUser.ChangeControls.Implementations.expandrecord()

        GQ.Planets.QualityManagement.QualityRecordsByUser.ChangeControls.Implementations.openRelatedObjects()

        let actualValues = [
            'Change Controls'
        ]

        GQ.Planets.QualityManagement.QualityRecordsByUser.ChangeControls.Implementations.checkRelatedObjects(actualValues)

        // Logout
        GQ.logout()

    })
    it('15577 - Allows Related Objects of Implementations COMET sub noun of Change Controls - Product', () => {

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

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.ChangeControls.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.ChangeControls.Implementations.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.ChangeControls.Implementations.openAll()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.ChangeControls.Implementations.openARecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.ChangeControls.Implementations.openRelatedObjects()

        let actualValues = [
            'Change Controls'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.ChangeControls.Implementations.checkRelatedObjects(actualValues)

        // Logout
        GQ.logout()
    })
    it('15577 - Allows Related Objects of Implementations COMET sub noun of Change Controls - by User', () => {

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

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.Changecontrols.Implementations.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.Changecontrols.Implementations.expandrecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.Changecontrols.Implementations.openRelatedObjects()

        const relatedObjects = [
            'Change Controls'
        ]
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.Changecontrols.Implementations.checkRelatedObjects(relatedObjects)

        // Logout
        GQ.logout()

    })
    it('15577 - Allows Related Objects of Implementations COMET sub noun of Change Controls - Admin Data Binder Smart Content', () => {

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

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.openAll()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.openARecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.openRelatedObjects()

        const relatedObjects = [
            'Change Controls'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.checkRelatedObjects(relatedObjects)

        // Logout
        GQ.logout()

    })
    it('15577 - Allows Related Objects of Implementations COMET sub noun of Change Controls - Admin Data Binder Linked Content', () => {

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

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.Changecontrols.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.Changecontrols.Implementations.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.Changecontrols.Implementations.linkAContent()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.Changecontrols.Implementations.openARecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.Changecontrols.Implementations.openRelatedObjects()

        const relatedObjects = [
            'Change Controls'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.Changecontrols.Implementations.checkRelatedObjects(relatedObjects)

        // Logout
        GQ.logout()

    })
    it('15577 - Allows Related Objects of Implementations COMET sub noun of Change Controls - User Data Binder Smart Content', () => {

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

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.open()


        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.openAll()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.openARecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.openRelatedObjects()

        const relatedObjects = [
            'Change Controls'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Implementations.checkRelatedObjects(relatedObjects)

        // Logout
        GQ.logout()

    })
    it('15577 - Allows Related Objects of Implementations COMET sub noun of Change Controls - User Data Binder Linked Content', () => {

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

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.open()


        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.linkSibling('0')

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.openRecord('0')

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.openRelatedObjects()

        let relatedObjects = [
            'Change Controls'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.checkRelatedObjects(relatedObjects)

        // Logout
        GQ.logout()

    })
    it('15577 - Allows Related Objects of Implementations COMET sub noun of Change Controls - Product Specific Binder Smart Content', () => {
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

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.ChangeControls.Implementations.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.ChangeControls.Implementations.openARecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.ChangeControls.Implementations.openRelatedObjects()

        const relatedObjects = [
            'Change Controls'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.ChangeControls.Implementations.checkRelatedObjects(relatedObjects)

        // Logout
        GQ.logout()

    })
    it('15577 - Allows Related Objects of Implementations COMET sub noun of Change Controls - Product Specific Binder Linked Content', () => {
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

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.linkAContent()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.openARecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.openRelatedObjects()

        let relatedObjects = [
            'Change Controls'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.ChangeControls.Implementations.checkRelatedObjects(relatedObjects)


        // Logout
        GQ.logout()

    })
})