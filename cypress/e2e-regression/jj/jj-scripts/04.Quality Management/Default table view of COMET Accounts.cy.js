import { GQTest } from '../../jj-pages/GQTest'
// Sprint 4
require('cypress-xpath')
describe('Sprint 4', () => {
    const GQ = new GQTest();
    it('Allows default table view of COMET Accounts', () => {

        // Login
        GQ.login()

        // Navigate to Quality Management planet
        GQ.Planets.QualityManagement.openLandingPage()

        // Navigate to Accounts tab
        GQ.Planets.QualityManagement.Accounts.open()

       // Expected Columns 
        let columns = [
            'Number',
            '👁',
            'Name',
            'Owner',
            'Status',
            'Street',
            'City',
            'State',
            'Country',
            'Postal Code',
            'Qualified For',
            'Owning Group',
            'Impacted Groups',
            'Audit Frequency',
            'Date Of Last Audit',
            'Date Of Next Routine Audit',
            'Account Auditee Category',
            'Account Audit Classification',
            'User Comments'
        ]

        cy.getColumnsAndTypes(
            GQ.Planets.QualityManagement.Accounts.getColumnNames()
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
        const columnsToCheck = ['Status', 'Country', 'Qualified For', 'Owning Group', 'Impacted Groups', 'Audit Frequency', 'Account Auditee Category', 'Account Audit Classification' 
        ];
        GQ.Planets.QualityManagement.Accounts.checkMultiChoicePickerColumns(columnsToCheck);

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
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.Accounts.open()

        // Check the columns
        let qualityRecordsCoulmns = [
            'Number',
            '👁',
            'Name',
            'Owner',
            'Status',
            'Street',
            'City',
            'State',
            'Country',
            'Postal Code',
            'Qualified For',
            'Owning Group',
            'Impacted Groups',
            'Audit Frequency',
            'Date Of Last Audit',
            'Date Of Next Routine Audit',
            'Account Auditee Category',
            'Account Audit Classification',
            'User Comments'
        ]
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.Accounts.getColumnNames()
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

        // Pending Steps - KK - We need to find a better way to check if the input field is column
        // Check if it is Multichoice pickers
        const columnsToCheckInQualityRecords = ['Status', 'Country', 'Qualified For', 'Owning Group', 'Impacted Groups', 'Audit Frequency', 'Account Auditee Category', 'Account Audit Classification' 
        ];
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.Accounts.columnsToCheckInQualityRecords(columnsToCheckInQualityRecords);

        // Logout
        GQ.logout()

    })
})
