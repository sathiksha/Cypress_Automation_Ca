import { GQTest } from '../../jj-pages/GQTest'
// Sprint 4
require('cypress-xpath')
describe('Sprint 4', () => {
    const GQ = new GQTest();
    it('Allows default table view of COMET Audits', () => {
   
        // Login
        GQ.login()

        // Navigate to Quality Management planet
        GQ.Planets.QualityManagement.openLandingPage()

        // Navigate to Accounts tab
        GQ.Planets.QualityManagement.Audits.openLandingPage()

       // Check the columns
       // Expected Columns 
        let columns = [
            'Number',  
            '👁',  
            'Name',  
            'Created Date',  
            'Detailed Scope/Description',  
            'Audit Type',   
            'Status',  
            'Stage',   
            'Audit Program Approval Status',   
            'J&J Site Name',   
            'Plan Period',   
            'Start Date',  
            'End Date',  
            'Lead Auditor', 
            'Owner',  
            'User Comments'
        ]
        cy.getColumnsAndTypes(
            GQ.Planets.QualityManagement.Audits.getColumnNames()
        ).then(tableInfo=>{
            let availableCols = []
            tableInfo.columns.map((obj)=>{
                availableCols.push(obj.textContent)
            })
            cy.log(availableCols)
           for(let i=0;i<columns.length;i++){
            expect(availableCols).to.include(columns[i])
           }
        })

        // Check if it is Multichoice pickers
        const columnsToCheck = ['Audit Type', 'Status', 'Stage', 'Audit Program Approval Status', 'J&J Site Name', 'Plan Period'
         
        ];
        GQ.Planets.QualityManagement.Audits.checkMultiChoicePickerColumns(columnsToCheck);

        // Click Product planet
        GQ.NavBar.navigateToProduct()
// cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Accounts_Act||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Item_Repository_Accounts_Sel||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_COMET_11||scClass=VLayout||index=0||length=2||classIndex=0||classLength=1||scClassIndex=0||scClassLength=2]/component/gridBar/refreshButton/icon').click()

        //toggle filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        // Open any record
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('My New Product - BioTherapeutics')

        // Navigate to Quality Records
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.openLandingPage()

        // Navigate to Accounts tab
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.Audits.open()

        // Check the columns
        // Expected Columns 
        let qualityRecordsCoulmns = [
            'Number',  
            '👁',
            'Name',  
            'Created Date',  
            'Detailed Scope/Description',  
            'Audit Type',   
            'Status',  
            'Stage',   
            'Audit Program Approval Status',   
            'J&J Site Name',   
            'Plan Period',   
            'Start Date',  
            'End Date',  
            'Lead Auditor', 
            'Owner',  
            'User Comments'
        ]
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.Audits.getColumnNames()
        ).then(tableInfo=>{
            let availableCols = []
            tableInfo.columns.map((obj)=>{
                availableCols.push(obj.textContent)
            })
            cy.log(availableCols)
           for(let i=0;i<qualityRecordsCoulmns.length;i++){
            expect(availableCols).to.include(qualityRecordsCoulmns[i])
           }
        })

        // Check if it is Multichoice pickers
        const columnsToCheckInQualityRecords = [
            'Audit Type', 'Status', 'Stage', 'Audit Program Approval Status', 'J&J Site Name', 'Plan Period'
        ];
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.Audits.columnsToCheckInQualityRecords(columnsToCheckInQualityRecords);

        // Logout
        GQ.logout()

    })
})
