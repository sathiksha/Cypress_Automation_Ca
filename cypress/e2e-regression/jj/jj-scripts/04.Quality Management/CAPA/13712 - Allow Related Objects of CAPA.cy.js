import { GQTest } from "../../../jj-pages/GQTest";
const GQ = new GQTest();
describe('Related Objects of Quality Management Planet sub nouns', () => {
    it('13712-Allows Related Objects of CAPAs (COMET) - Planet', () => {

        // Login 
        GQ.login()

        // Open Quality Management
        GQ.Planets.QualityManagement.openLandingPage()

        // Open CAPA
        GQ.Planets.QualityManagement.CAPAs.openLandingPage()

        //Toggle Filter
        GQ.Planets.QualityManagement.CAPAs.toggleFilter()

        GQ.Planets.QualityManagement.CAPAs.openRecordbyText('CAPA-002912')

        //Open a Record
        GQ.Planets.QualityManagement.CAPAs.openRecordByIndex(0)

        GQ.Planets.QualityManagement.CAPAs.relatedObjects()

        let actualValues = [
            'Documents',
            'CAPA Investigations',
            'CAPA Implementation',
            'Actions',
            'Effectiveness Reviews',
            'Team Members',
            'Escalations',
            'Nonconformances',
            'Batches',
            'Extensions'
        ]

        cy.checkRelatedObjects(actualValues)

        GQ.Planets.QualityManagement.CAPAs.minimizeARecord()

        GQ.Planets.QualityManagement.CAPAs.openRecordbyText('CAPA-004052')

        //Open a Record
        GQ.Planets.QualityManagement.CAPAs.openRecordByIndex(0)

        GQ.Planets.QualityManagement.CAPAs.relatedObjects()

        cy.checkRelatedObjects('Interim Controls')

        // Logout
        GQ.logout()

    })
    it('13712-Allows Related Objects of CAPAs (COMET) - Quality Records by User', () => {

        // Login 
        GQ.login()

        // Open Quality Management
        GQ.Planets.QualityManagement.openLandingPage()

        GQ.Planets.QualityManagement.QualityRecordsByUser.openLandingPage()

        GQ.Planets.QualityManagement.QualityRecordsByUser.clickAPerson('SRIVIDYA SAMPATHNARAYANAN')

        GQ.Planets.QualityManagement.QualityRecordsByUser.CAPA.open()

        GQ.Planets.QualityManagement.QualityRecordsByUser.CAPA.openARecord()

        GQ.Planets.QualityManagement.QualityRecordsByUser.CAPA.openRelatedObjects()

        const relatedObjects = [
            'Documents',
            'Interim Controls',
            'CAPA Investigations',
            'CAPA Implementation',
            'Actions',
            'Effectiveness Reviews',
            'Team Members',
            'Escalations',
            'Nonconformances',
            'Batches',
            'Extensions'
        ]

        GQ.Planets.QualityManagement.QualityRecordsByUser.CAPA.checkRelatedOjects(relatedObjects)

        // Logout
        GQ.logout()

    })
    it('13712-Allows Related Objects of CAPAs (COMET) - Product', () => {

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

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.All.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.All.toggleFilter()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.All.searchRecord('CAPA-002912')

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.All.openFirstRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.All.AllRecord.RelatedObjects.open()

        let actualValues = [
            'Documents',
            'CAPA Investigations',
            'CAPA Implementation',
            'Actions',
            'Effectiveness Reviews',
            'Team Members',
            'Escalations',
            'Nonconformances',
            'Batches',
            'Extensions'
        ]

        cy.checkRelatedObjects(actualValues)

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.All.AllRecord.RelatedObjects.minimizeARecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.All.searchRecord('CAPA-004052')

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.All.openFirstRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.CAPAs.All.AllRecord.RelatedObjects.open()

        cy.checkRelatedObjects('Interim Controls')

        // Logout
        GQ.logout()

    })
    it('13712-Allows Related Objects of CAPAs (COMET) - by User', () => {

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

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.CAPA.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.CAPA.openARecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.CAPA.openRelatedObjects()

        const relatedObjects = [
            'Documents',
            'Interim Controls',
            'CAPA Investigations',
            'CAPA Implementation',
            'Actions',
            'Effectiveness Reviews',
            'Team Members',
            'Escalations',
            'Nonconformances',
            'Batches',
            'Extensions'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.CAPA.checkRelatedOjects(relatedObjects)

        // Logout
        GQ.logout()

    })
    it('13712-Allows Related Objects of CAPAs (COMET) - Admin Data Binder Smart Content', () => {

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

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPA.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPA.openAll()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPA.openRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPA.openRelatedObjects()

        const relatedObjects = [
            'Documents',
            'Interim Controls',
            'CAPA Investigations',
            'CAPA Implementation',
            'Actions',
            'Effectiveness Reviews',
            'Team Members',
            'Escalations',
            'Nonconformances',
            'Batches',
            'Extensions'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPA.checkRelatedOjects(relatedObjects)

        // Logout
        GQ.logout()

    })
    it('13712-Allows Related Objects of CAPAs (COMET) - Admin Data Binder Linked Content', () => {

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

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.CAPAs.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.CAPAs.linkARecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.CAPAs.openRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.CAPAs.openRelatedObjects()

        const relatedObjects = [
            'Documents',
            'Interim Controls',
            'CAPA Investigations',
            'CAPA Implementation',
            'Actions',
            'Effectiveness Reviews',
            'Team Members',
            'Escalations',
            'Nonconformances',
            'Batches',
            'Extensions'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.CAPAs.checkRelatedOjects(relatedObjects)

        // Logout
        GQ.logout()

    })
    it('13712-Allows Related Objects of CAPAs (COMET) - User Data Binder Smart Content', () => {

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

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPA.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPA.openAll()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPA.openRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPA.openRelatedObjects()

        const relatedObjects = [
            'Documents',
            'Interim Controls',
            'CAPA Investigations',
            'CAPA Implementation',
            'Actions',
            'Effectiveness Reviews',
            'Team Members',
            'Escalations',
            'Nonconformances',
            'Batches',
            'Extensions'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPA.checkRelatedOjects(relatedObjects)

        // Logout
        GQ.logout()

    })
    it('13712-Allows Related Objects of CAPAs (COMET) - User Data Binder Linked Content', () => {

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

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPA.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPA.linkARecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPA.openRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPA.openRelatedObjects()

        const relatedObjects = [
            'Documents',
            'Interim Controls',
            'CAPA Investigations',
            'CAPA Implementation',
            'Actions',
            'Effectiveness Reviews',
            'Team Members',
            'Escalations',
            'Nonconformances',
            'Batches',
            'Extensions'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.CAPA.checkRelatedOjects(relatedObjects)

        // Logout
        GQ.logout()

    })
    it('13712-Allows Related Objects of CAPAs (COMET) - Product Specific Binder Smart Content', () => {
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

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.CAPA.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.CAPA.openAll()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.CAPA.openRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.CAPA.openRelatedObjects()

        const relatedObjects = [
            'Documents',
            'Interim Controls',
            'CAPA Investigations',
            'CAPA Implementation',
            'Actions',
            'Effectiveness Reviews',
            'Team Members',
            'Escalations',
            'Nonconformances',
            'Batches',
            'Extensions'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.CAPA.checkRelatedOjects(relatedObjects)

        // Logout
        GQ.logout()

    })
    it('13712-Allows Related Objects of CAPAs (COMET) - Product Specific Binder Linked Content', () => {
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

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.CAPA.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.CAPA.linkARecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.CAPA.openRecord()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.CAPA.openRelatedObjects()

        const relatedObjects = [
            'Documents',
            'Interim Controls',
            'CAPA Investigations',
            'CAPA Implementation',
            'Actions',
            'Effectiveness Reviews',
            'Team Members',
            'Escalations',
            'Nonconformances',
            'Batches',
            'Extensions'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.CAPA.checkRelatedOjects(relatedObjects)

        // Logout
        GQ.logout()

    })
})