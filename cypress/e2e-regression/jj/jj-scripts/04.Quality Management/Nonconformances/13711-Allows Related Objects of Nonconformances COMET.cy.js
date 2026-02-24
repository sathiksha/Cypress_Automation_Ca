import { GQTest } from "../../../jj-pages/GQTest";
const GQ = new GQTest();
describe('Related Objects of Quality Management Planet sub nouns', () => {
    it('13711-Allows Related Objects of Nonconformances (COMET) - Planet', () => {

        // Login 
        GQ.login()

        // Open Quality Management
        GQ.Planets.QualityManagement.openLandingPage()

        // Open NonConformances
        GQ.Planets.QualityManagement.NonConformances.openLandingPage()

        //open NonConformances
        GQ.Planets.QualityManagement.NonConformances.Nonconformances.open()

        GQ.Planets.QualityManagement.NonConformances.Nonconformances.expandrecord('1')

        GQ.Planets.QualityManagement.NonConformances.Nonconformances.relatedobject()

        let actualValues = [
            'Immediate Causes',
            'NC Investigations',
            'Laboratory Investigations',
            'CAPAs',
            'Actions',
            'Change Controls',
            'Escalations',
            'Batches',
            'Documents',
            'Others'
        ]

        GQ.Planets.QualityManagement.NonConformances.Nonconformances.checkRelatedObjects(actualValues)

        GQ.Planets.QualityManagement.NonConformances.Nonconformances.others()

        GQ.Planets.QualityManagement.NonConformances.Nonconformances.dropdown()

        let dropdownValues = [
            'Containments',
            'NC Corrections',
            'Risk Assessments',
            'Audits',
            'Audit Observations',
            'Accounts',
            'Extensions',
            'Team Members'
        ]


        GQ.Planets.QualityManagement.NonConformances.Nonconformances.checkDropdownValues(dropdownValues)

        // Logout
        GQ.logout()

    })
    it('13711-Allows Related Objects of Nonconformances (COMET) - Quality Records by User', () => {

        // Login 
        GQ.login()

        // Open Quality Management
        GQ.Planets.QualityManagement.openLandingPage()

        GQ.Planets.QualityManagement.QualityRecordsByUser.openLandingPage()

        GQ.Planets.QualityManagement.QualityRecordsByUser.clickAPerson('SRIVIDYA SAMPATHNARAYANAN')

        GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.open()

        GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.openARecord()

        GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.relatedObject()

        const relatedObjects = [
            'Immediate Causes',
            'NC Investigations',
            'Laboratory Investigations',
            'CAPAs',
            'Actions',
            'Change Controls',
            'Escalations',
            'Batches',
            'Documents',
            'Others'
        ]

        GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.checkRelatedOjects(relatedObjects)

        GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.others()

        GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.othersDropdown()

        let dropdownValues = [
            'Containments',
            'NC Corrections',
            'Risk Assessments',
            'Audits',
            'Audit Observations',
            'Accounts',
            'Extensions',
            'Team Members'
        ]

        GQ.Planets.QualityManagement.QualityRecordsByUser.Nonconformances.checkDropdownValues(dropdownValues)

        // Logout
        GQ.logout()

    })
    it('13711-Allows Related Objects of Nonconformances (COMET) - Product', () => {

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

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.Nonconformances.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.Nonconformances.openAll()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.Nonconformances.openRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.Nonconformances.openRelatedObjects()

        let actualValues = [
            'Immediate Causes',
            'NC Investigations',
            'Laboratory Investigations',
            'CAPAs',
            'Actions',
            'Change Controls',
            'Escalations',
            'Batches',
            'Documents',
            'Others'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.Nonconformances.checkRelatedObjects(actualValues)

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.Nonconformances.others()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.Nonconformances.othersDropdown()

        let dropdownValues = [
            'Containments',
            'NC Corrections',
            'Risk Assessments',
            'Audits',
            'Audit Observations',
            'Accounts',
            'Extensions',
            'Team Members'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.Nonconformances.checkDropdownValues(dropdownValues)

        // Logout
        GQ.logout()
    })
    it('13711-Allows Related Objects of Nonconformances (COMET) - by User', () => {

        // Login
        GQ.login();

        GQ.Planets.Product.openLandingPage()

        // Product Families
        GQ.Planets.Product.ProductFamilies.openLandingPage()

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        // Product Record
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('METHYLPHENIDATE HYDROCHLORIDE')

        // Content
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.openLandingPage()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.closeSideBar()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.toggleFilter()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.clickAPerson('Jennifer Tseng')

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.Nonconformances.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.Nonconformances.openRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.Nonconformances.openRelatedObjects()

        const relatedObjects = [
            'Immediate Causes',
            'NC Investigations',
            'Laboratory Investigations',
            'CAPAs',
            'Actions',
            'Change Controls',
            'Escalations',
            'Batches',
            'Documents',
            'Others'
        ]
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.Nonconformances.checkRelatedObjects(relatedObjects)

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.Nonconformances.others()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.Nonconformances.othersDropdown()



        let dropdownValues = [
            'Containments',
            'NC Corrections',
            'Risk Assessments',
            'Audits',
            'Audit Observations',
            'Accounts',
            'Extensions',
            'Team Members'
        ]


        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.Nonconformances.checkDropdownValues(dropdownValues)

        // Logout
        GQ.logout()

    })
    it('13711-Allows Related Objects of Nonconformances (COMET) - Admin Data Binder Smart Content', () => {

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

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.openAll()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.openRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.openRelatedObjects()

        const relatedObjects = [
            'Immediate Causes',
            'NC Investigations',
            'Laboratory Investigations',
            'CAPAs',
            'Actions',
            'Change Controls',
            'Escalations',
            'Batches',
            'Documents',
            'Others'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.checkRelatedObjects(relatedObjects)

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.others()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.othersDropdown()

        let dropdownValues = [
            'Containments',
            'NC Corrections',
            'Risk Assessments',
            'Audits',
            'Audit Observations',
            'Accounts',
            'Extensions',
            'Team Members'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.checkDropdownValues(dropdownValues)
        // Logout
        GQ.logout()

    })
    it('13711-Allows Related Objects of Nonconformances (COMET) - Admin Data Binder Linked Content', () => {

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

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.nonconformances.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.nonconformances.linkARecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.nonconformances.openRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.nonconformances.openRelatedObjects()

        const relatedObjects = [
            'Immediate Causes',
            'NC Investigations',
            'Laboratory Investigations',
            'CAPAs',
            'Actions',
            'Change Controls',
            'Escalations',
            'Batches',
            'Documents',
            'Others'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.nonconformances.checkRelatedObjects(relatedObjects)

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.nonconformances.others()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.nonconformances.othersDropdown()

        let dropdownValues = [
            'Containments',
            'NC Corrections',
            'Risk Assessments',
            'Audits',
            'Audit Observations',
            'Accounts',
            'Extensions',
            'Team Members'
        ]


        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.nonconformances.checkDropdownValues(dropdownValues)

        // Logout
        GQ.logout()

    })
    it('13711-Allows Related Objects of Nonconformances (COMET) - User Data Binder Smart Content', () => {

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

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.openAll()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.openRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.openRelatedObjects()

        const relatedObjects = [
            'Immediate Causes',
            'NC Investigations',
            'Laboratory Investigations',
            'CAPAs',
            'Actions',
            'Change Controls',
            'Escalations',
            'Batches',
            'Documents',
            'Others'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.checkRelatedObjects(relatedObjects)

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.others()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.othersDropdown()

        let dropdownValues = [
            'Containments',
            'NC Corrections',
            'Risk Assessments',
            'Audits',
            'Audit Observations',
            'Accounts',
            'Extensions',
            'Team Members'
        ]


        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.checkDropdownValues(dropdownValues)

        // Logout
        GQ.logout()

    })
    it('13711-Allows Related Objects of Nonconformances (COMET) - User Data Binder Linked Content', () => {

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

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.linkARecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.openRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.openRelatedObjects()

        let relatedObjects = [
            'Immediate Causes',
            'NC Investigations',
            'Laboratory Investigations',
            'CAPAs',
            'Actions',
            'Change Controls',
            'Escalations',
            'Batches',
            'Documents',
            'Others'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.checkRelatedObjects(relatedObjects)

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.others()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.othersDropdown()

        let dropdownValues = [
            'Containments',
            'NC Corrections',
            'Risk Assessments',
            'Audits',
            'Audit Observations',
            'Accounts',
            'Extensions',
            'Team Members'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.Nonconformances.checkDropdownValues(dropdownValues)


        // Logout
        GQ.logout()

    })
    it('13711-Allows Related Objects of Nonconformances (COMET) - Product Specific Binder Smart Content', () => {
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
        GQ.Planets.Product.ProductFamilies.ProductFamily.toggleFilter()

        GQ.Planets.Product.ProductFamilies.ProductFamily.selectProductSpecificBinder('MSAT Product View - Cypress Test Product Specific Binder')


        cy.wait(5000)

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.smartcontent.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.Nonconformances.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.Nonconformances.openAll()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.Nonconformances.openRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.Nonconformances.openRelatedObjects()

        const relatedObjects = [
            'Immediate Causes',
            'NC Investigations',
            'Laboratory Investigations',
            'CAPAs',
            'Actions',
            'Change Controls',
            'Escalations',
            'Batches',
            'Documents',
            'Others'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.Nonconformances.checkRelatedObjects(relatedObjects)

       GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.Nonconformances.others()

       GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.Nonconformances.othersDropdown()

        let dropdownValues = [
            'Containments',
            'NC Corrections',
            'Risk Assessments',
            'Audits',
            'Audit Observations',
            'Accounts',
            'Extensions',
            'Team Members'
        ]

       GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.Nonconformances.checkDropdownValues(dropdownValues)

        // Logout
        GQ.logout()

    })
    it('13711-Allows Related Objects of Nonconformances (COMET) - Product Specific Binder Linked Content', () => {
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

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.Nonconformances.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.Nonconformances.linkARecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.Nonconformances.openRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.Nonconformances.openRelatedObjects()

        let relatedObjects = [
            'Immediate Causes',
            'NC Investigations',
            'Laboratory Investigations',
            'CAPAs',
            'Actions',
            'Change Controls',
            'Escalations',
            'Batches',
            'Documents',
            'Others'
        ]

         GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.Nonconformances.checkRelatedObjects(relatedObjects)

         GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.Nonconformances.others()

         GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.Nonconformances.othersDropdown()

        let dropdownValues = [
            'Containments',
            'NC Corrections',
            'Risk Assessments',
            'Audits',
            'Audit Observations',
            'Accounts',
            'Extensions',
            'Team Members'
        ]

         GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.Nonconformances.checkDropdownValues(dropdownValues)


        // Logout
        GQ.logout()

    })
})