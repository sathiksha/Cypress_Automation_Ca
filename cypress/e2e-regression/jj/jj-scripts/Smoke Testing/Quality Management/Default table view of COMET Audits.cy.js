import { GQTest } from '../../../jj-pages/GQTest'
    describe('04. Quality Management', () => {
        Cypress.config('defaultCommandTimeout', 180000);
        it('Default table view of COMET Audits', () => {
            const GQ = new GQTest();
            // Login
            GQ.login();

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
