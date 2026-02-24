import { GQTest } from "../../../jj-pages/GQTest";
const GQ = new GQTest();
describe('Related Objects of Change Controls (COMET)', () => {
    it('Allows Related Objects of Change Controls (COMET) - Planet', () => {

        // Login 
        GQ.login()

        // Open Quality Management
        GQ.Planets.QualityManagement.openLandingPage()

        // Open CAPA
        GQ.Planets.QualityManagement.ChangeControls.Comet.open()

        //Toggle Filter
        GQ.Planets.QualityManagement.ChangeControls.Comet.toggleFilter()

        GQ.Planets.QualityManagement.ChangeControls.Comet.openRecordbyText('CHG-025497')

        //Open a Record
        GQ.Planets.QualityManagement.ChangeControls.Comet.openRecordByIndex(0)

        GQ.Planets.QualityManagement.ChangeControls.Comet.relatedObjects()

        let actualValues = [
            'Change Controls',
            'Impacted Documents',
            'Impacted Products',
            'Impacted Equipments',
            'Impacted Organizations',
            'Assessment Executions',
            'Implementations',
            'Escalations',
            'Batches'
        ]

        cy.checkRelatedObjects(actualValues)

        GQ.Planets.QualityManagement.ChangeControls.Comet.minimizeARecord()

    

        //CAPA
        GQ.Planets.QualityManagement.ChangeControls.Comet.openRecordbyText('CHG-033078')

        //Open a Record
        GQ.Planets.QualityManagement.ChangeControls.Comet.openRecordByIndex(0)

        GQ.Planets.QualityManagement.ChangeControls.Comet.relatedObjects()

        cy.checkRelatedObjects('CAPA')

        GQ.Planets.QualityManagement.ChangeControls.Comet.minimizeARecord()

        //Nonconformances
        GQ.Planets.QualityManagement.ChangeControls.Comet.openRecordbyText('CHG-028151')

        //Open a Record
        GQ.Planets.QualityManagement.ChangeControls.Comet.openRecordByIndex(0)

        GQ.Planets.QualityManagement.ChangeControls.Comet.relatedObjects()

        cy.checkRelatedObjects('Nonconformances')

        GQ.Planets.QualityManagement.ChangeControls.Comet.minimizeARecord()

        //Accounts
        GQ.Planets.QualityManagement.ChangeControls.Comet.openRecordbyText('CHG-004791')

        //Open a Record
        GQ.Planets.QualityManagement.ChangeControls.Comet.openRecordByIndex(0)

        GQ.Planets.QualityManagement.ChangeControls.Comet.relatedObjects()

        cy.checkRelatedObjects('Accounts')

        // Logout
        GQ.logout()

    })
    it('Allows Related Objects of Change Controls (COMET) - Quality Records by User', () => {

        // Login 
        GQ.login()

        // Open Quality Management
        GQ.Planets.QualityManagement.openLandingPage()

        GQ.Planets.QualityManagement.QualityRecordsByUser.openLandingPage()

        GQ.Planets.QualityManagement.QualityRecordsByUser.clickAPerson('Priyanka Giri')

        GQ.Planets.QualityManagement.QualityRecordsByUser.ChangeControls.open();

        GQ.Planets.QualityManagement.QualityRecordsByUser.Changecontrols.changeControl();

        // GQ.Planets.QualityManagement.QualityRecordsByUser.ChangeControls.openRecordbyText('CHG-026767')

        GQ.Planets.QualityManagement.QualityRecordsByUser.Changecontrols.openRecordByIndex(0);

        GQ.Planets.QualityManagement.QualityRecordsByUser.Changecontrols.relatedObjects();

        const relatedObjects = [
            'Change Controls',
            'Impacted Documents',
            'Impacted Products',
            'Impacted Equipments',
            'Impacted Organizations',
            'Assessment Executions',
            'Implementations',
            'Escalations',
            'CAPAs',
            'Nonconformances',
            'Accounts',
            'Batches',
        ]

        GQ.Planets.QualityManagement.QualityRecordsByUser.Changecontrols.checkRelatedOjects(relatedObjects);

        GQ.Planets.QualityManagement.QualityRecordsByUser.Changecontrols.minimizeARecord();

        // Logout
        GQ.logout()

    })
    it('Allows Related Objects of Change Controls (COMET) - Product', () => {

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

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.ChangeControls.openAll()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.ChangeControls.toggleFilter()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.ChangeControls.openRecordbyText('CHG-025497')

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.ChangeControls.openRecordByIndex(0)

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.ChangeControls.openRelatedObjects()

        let actualValues = [
            'Change Controls',
            'Impacted Documents',
            'Impacted Products',
            'Impacted Equipments',
            'Impacted Organizations',
            'Assessment Executions',
            'Implementations',
            'Escalations',
            'Batches'
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.ChangeControls.checkRelatedObjects(actualValues)

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.ChangeControls.minimizeARecord()

        //CAPA

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.ChangeControls.openRecordbyText('CHG-033078')

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.ChangeControls.openRecordByIndex(0)

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.ChangeControls.openRelatedObjects()

        cy.checkRelatedObjects('CAPAs')

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.ChangeControls.minimizeARecord()

        //Nonconformance

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.ChangeControls.openRecordbyText('CHG-028151')

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.ChangeControls.openRecordByIndex(0)

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.ChangeControls.openRelatedObjects()

        cy.checkRelatedObjects('Nonconformances')

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.ChangeControls.minimizeARecord()

        //Accounts

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.ChangeControls.openRecordbyText('CHG-004791')

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.ChangeControls.openRecordByIndex(0)

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.ChangeControls.openRelatedObjects()

        cy.checkRelatedObjects('Accounts')

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.ChangeControls.minimizeARecord()

        // Logout
        GQ.logout()
    })
    it('Allows Related Objects of Change Controls (COMET) - by User', () => {

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

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.clickAPerson('Priyanka Giri')

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.ChangeControls.openLandingPage()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.ChangeControls.openRecord(0)

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.ChangeControls.openRelatedObjects()

        const relatedObjects = [
            'Change Controls',
            'Impacted Documents',
            'Impacted Products',
            'Impacted Equipments',
            'Impacted Organizations',
            'Assessment Executions',
            'Implementations',
            'Escalations',
            'CAPAs',
            'Nonconformances',
            'Accounts',
            'Batches',
        ]
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.byUser.ChangeControls.checkRelatedObjects(relatedObjects)

        // Logout
        GQ.logout()

    })
    it('Allows Related Objects of Change Controls (COMET) - Admin Data Binder Smart Content', () => {

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

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.open()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.openAll()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.toggleFilter()

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.openRecordbyText('CHG-025497')

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.openRecordByIndex(0)

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.openRelatedObjects()

        const relatedObjects = [
            'Change Controls',
            'Impacted Documents',
            'Impacted Products',
            'Impacted Equipments',
            'Impacted Organizations',
            'Assessment Executions',
            'Implementations',
            'Escalations',
            'Batches',
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.checkRelatedObjects(relatedObjects)

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.minimizeARecord()

        //CAPA
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.openRecordbyText('CHG-033078')

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.openRecordByIndex(0)

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.openRelatedObjects()

        cy.checkRelatedObjects('CAPAs') 

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.minimizeARecord()

        //Nonconformances
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.openRecordbyText('CHG-028151')

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.openRecordByIndex(0)

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.openRelatedObjects()

        cy.checkRelatedObjects('Nonconformances') 
        
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.minimizeARecord()

        //Accounts
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.openRecordbyText('CHG-004791')

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.openRecordByIndex(0)

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.openRelatedObjects()

        cy.checkRelatedObjects('Accounts') 
        
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.minimizeARecord()

        // Logout
        GQ.logout()

    })
    it('Allows Related Objects of Change Controls (COMET) - Admin Data Binder Linked Content', () => {

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

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.Changecontrols.linkARecord(0)

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.Changecontrols.openRecord(0)

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.Changecontrols.openRelatedObjects()

        const relatedObjects = [
            'Change Controls',
            'Impacted Documents',
            'Impacted Products',
            'Impacted Equipments',
            'Impacted Organizations',
            'Assessment Executions',
            'Implementations',
            'Escalations',
            'CAPAs',
            'Nonconformances',
            'Accounts',
            'Batches',
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.Changecontrols.checkRelatedObjects(relatedObjects)

        // Logout
        GQ.logout()

    })
    it('Allows Related Objects of Change Controls (COMET) - User Data Binder Smart Content', () => {

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

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.openAll()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.toggleFilter()

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.openRecordbyText('CHG-025497')

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.openRecordByIndex(0)

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.openRelatedObjects()

        const relatedObjects = [
            'Change Controls',
            'Impacted Documents',
            'Impacted Products',
            'Impacted Equipments',
            'Impacted Organizations',
            'Assessment Executions',
            'Implementations',
            'Escalations',
            'CAPAs',
            'Nonconformances',
            'Accounts',
            'Batches',
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.checkRelatedObjects(relatedObjects)

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.minimizeARecord()

        //CAPA
        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.openRecordbyText('CHG-033078')

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.openRecordByIndex(0)

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.openRelatedObjects()

        cy.checkRelatedObjects('CAPAs') 

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.minimizeARecord()

        //Nonconformances
        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.openRecordbyText('CHG-028151')

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.openRecordByIndex(0)

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.openRelatedObjects()

        cy.checkRelatedObjects('Nonconformances') 
        
        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.minimizeARecord()

        //Accounts
        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.openRecordbyText('CHG-004791')

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.openRecordByIndex(0)

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.openRelatedObjects()

        cy.checkRelatedObjects('Accounts') 
        
        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.minimizeARecord()

        // Logout
        GQ.logout()

    })
    it('Allows Related Objects of Change Controls (COMET) - User Data Binder Linked Content', () => {

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

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.linkARecord(0)

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.openRecord(0)

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.openRelatedObjects()

        const relatedObjects = [
            'Change Controls',
            'Impacted Documents',
            'Impacted Products',
            'Impacted Equipments',
            'Impacted Organizations',
            'Assessment Executions',
            'Implementations',
            'Escalations',
            'CAPAs',
            'Nonconformances',
            'Accounts',
            'Batches',
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.QualityManagement.ChangeControls.checkRelatedObjects(relatedObjects)


        // Logout
        GQ.logout()

    })
    it('Allows Related Objects of Change Controls (COMET) - Product Specific Binder Smart Content', () => {
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

         GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.ChangeControls.openAll()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.ChangeControls.toggleFilter()

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.ChangeControls.openRecordbyText('CHG-025497')

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.ChangeControls.openRecordByIndex(0)

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.ChangeControls.openRelatedObjects()

        const relatedObjects = [
            'Change Controls',
            'Impacted Documents',
            'Impacted Products',
            'Impacted Equipments',
            'Impacted Organizations',
            'Assessment Executions',
            'Implementations',
            'Escalations',
            'CAPAs',
            'Nonconformances',
            'Accounts',
            'Batches',
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.ChangeControls.checkRelatedObjects(relatedObjects)

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.ChangeControls.minimizeARecord()

        //CAPA
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.ChangeControls.openRecordbyText('CHG-033078')

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.ChangeControls.openRecordByIndex(0)

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.ChangeControls.openRelatedObjects()

        cy.checkRelatedObjects('CAPAs') 

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.ChangeControls.minimizeARecord()

        //Nonconformances
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.ChangeControls.openRecordbyText('CHG-028151')

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.ChangeControls.openRecordByIndex(0)

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.ChangeControls.openRelatedObjects()

        cy.checkRelatedObjects('Nonconformances') 
        
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.ChangeControls.minimizeARecord()

        //Accounts
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.ChangeControls.openRecordbyText('CHG-004791')

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.ChangeControls.openRecordByIndex(0)

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.ChangeControls.openRelatedObjects()

        cy.checkRelatedObjects('Accounts') 
        
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.SmartContent.QualityManagement.ChangeControls.minimizeARecord()

        // Logout
        GQ.logout()
    })
    it('Allows Related Objects of Change Controls (COMET) - Product Specific Binder Linked Content', () => {
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

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.ChangeControls.linkARecord(0)

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.ChangeControls.openRecord(0)

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.ChangeControls.openRelatedObjects()

        const relatedObjects = [
            'Change Controls',
            'Impacted Documents',
            'Impacted Products',
            'Impacted Equipments',
            'Impacted Organizations',
            'Assessment Executions',
            'Implementations',
            'Escalations',
            'CAPAs',
            'Nonconformances',
            'Accounts',
            'Batches',
        ]

        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificGreenBinder.LinkedContent.QualityManagement.ChangeControls.checkRelatedObjects(relatedObjects)


        // Logout
        GQ.logout()
    })
})