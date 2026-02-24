import { GQTest } from '../../jj-pages/GQTest'
require('cypress-xpath')
describe('20295-Allows Documents as Related Objects of Documents', () => {
    const GQ = new GQTest();
    it('Allows Documents as Related Objects of Documents - Planet', () => {

        // Login
        GQ.login()

        // Navigate to the Documents planet
        GQ.Planets.Documents.openLandingPage()

        // Click Documents tab
        GQ.Planets.Documents.Documents.openLandingPage();

        //Toggle Filter
        GQ.Planets.Documents.Documents.toggleFilter();

        GQ.Planets.Documents.Documents.openRecordbyText('TV-TEC-213638');
        
        GQ.Planets.Documents.Documents.expandRecord(0);

        //Related Objects
        GQ.Planets.Documents.Documents.RelatedObjects.openLandingPage();
        

        cy.contains('Documents').should('be.visible')
        cy.contains('Materials').should('be.visible')
        cy.contains('Change Controls').should('be.visible')
        cy.contains('Nonconformances').should('be.visible')
        cy.contains('CAPAs').should('be.visible')

        cy.contains('Documents').should('be.visible').click()

            let defaultTableColumns = [
            'Number',
            '👁',
            'Name',
            'Version',
            'Relationship Type',
            'Author',
            'Status',
            'Effective Date',
            'Document Type',
            'Document Sub-Type',
            'Owning Segments',
            'Owning Organization',
            'Owning Department',
            'Impacted Locations',
            'Legacy Document Number'
        ]

        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Documents.Documents.RelatedObjects.getColumnID()
            ).then(tableInfo => {
                let availableCols = []
                tableInfo.columns.map((obj) => {
                    availableCols.push(obj.textContent)
                })
                cy.log(availableCols)
                for (let i = 0; i < defaultTableColumns.length; i++) {
                    expect(availableCols).to.include(defaultTableColumns[i])
                }
            })

        //Verify Multi Choice Picker
        const namesList = [
            'Relationship Type',
            'Status',
            'Document Type',
            'Document Sub-Type',
            'Owning Segments',
            'Owning Organization',
            'Owning Department'
        ]
        GQ.Planets.Documents.Documents.RelatedObjects.checkMultiChoicePickerColumns(namesList);


    })
    it('Allows Documents as Related Objects of Documents - Product family', () => {

        GQ.login()

        GQ.Planets.Product.openLandingPage()

        // Open product family 
        GQ.Planets.Product.ProductFamilies.openLandingPage()

        //Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        //Open APALUTAMIDE        
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')

        // Refresh
        GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.Documents.openLandingPage();

        //Click All
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.Documents.All();

        //Toggle Filter
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.Documents.toggleFilter();

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.Documents.openRecordbyText('TV-TEC-213638');
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.Documents.openRecord(0);

        //Related Objects
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.Documents.RelatedObjects.open();
                

        cy.contains('Documents').should('be.visible')
        cy.contains('Materials').should('be.visible')
        cy.contains('Change Controls').should('be.visible')
        cy.contains('Nonconformances').should('be.visible')
        cy.contains('CAPAs').should('be.visible')

        //Click Documents
        cy.contains('Documents').should('be.visible').click()

            let defaultTableColumns = [
            'Number',
            '👁',
            'Name',
            'Version',
            'Relationship Type',
            'Author',
            'Status',
            'Effective Date',
            'Document Type',
            'Document Sub-Type',
            'Owning Segments',
            'Owning Organization',
            'Owning Department',
            'Impacted Locations',
            'Legacy Document Number'
        ]

        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.Content.Documents.RelatedObjects.getColumnID()
            ).then(tableInfo => {
                let availableCols = []
                tableInfo.columns.map((obj) => {
                    availableCols.push(obj.textContent)
                })
                cy.log(availableCols)
                for (let i = 0; i < defaultTableColumns.length; i++) {
                    expect(availableCols).to.include(defaultTableColumns[i])
                }
            })

        //Verify Multi Choice Picker
        const namesList = [
            'Relationship Type',
            'Status',
            'Document Type',
            'Document Sub-Type',
            'Owning Segments',
            'Owning Organization',
            'Owning Department'
        ]
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.Documents.RelatedObjects.checkMultiChoicePickerColumns(namesList);

    })
    it('Allows Documents as Related Objects of Documents - Admin data binder Smart Content', () => {

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

        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test Admin Binder');
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.documents.open()
        //Click All
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.documents.All();

        //Toggle Filter
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.documents.toggleFilter();

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.documents.openRecordbyText('TV-TEC-213638');
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.documents.openRecord(0);

        //Related Objects
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.documents.relatedobject();
                

        cy.contains('Documents').should('be.visible')
        cy.contains('Materials').should('be.visible')
        cy.contains('Change Controls').should('be.visible')
        cy.contains('Nonconformances').should('be.visible')
        cy.contains('CAPAs').should('be.visible')

        //Click Documents
        cy.contains('Documents').should('be.visible').click()

            let defaultTableColumns = [
            'Number',
            '👁',
            'Name',
            'Version',
            'Relationship Type',
            'Author',
            'Status',
            'Effective Date',
            'Document Type',
            'Document Sub-Type',
            'Owning Segments',
            'Owning Organization',
            'Owning Department',
            'Impacted Locations',
            'Legacy Document Number'
        ]

        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.documents.documentRelatedObjects.getColumnID()
            ).then(tableInfo => {
                let availableCols = []
                tableInfo.columns.map((obj) => {
                    availableCols.push(obj.textContent)
                })
                cy.log(availableCols)
                for (let i = 0; i < defaultTableColumns.length; i++) {
                    expect(availableCols).to.include(defaultTableColumns[i])
                }
            })

        //Verify Multi Choice Picker
        const namesList = [
            'Relationship Type',
            'Status',
            'Document Type',
            'Document Sub-Type',
            'Owning Segments',
            'Owning Organization',
            'Owning Department'
        ]
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.documents.documentRelatedObjects.checkMultiChoicePickerColumns(namesList);

    })
    it('Allows Documents as Related Objects of Documents - Admin data binder Linked Content', () => {

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

        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test Admin Binder');
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.open()

        //Link Sibiling
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.linkSibling(0);

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.expandrecord(0);

        //Related Objects
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.relatedobject();
                

        //Click Documents
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.click();

            let defaultTableColumns = [
            'Number',
            '👁',
            'Name',
            'Version',
            'Relationship Type',
            'Author',
            'Status',
            'Effective Date',
            'Document Type',
            'Document Sub-Type',
            'Owning Segments',
            'Owning Organization',
            'Owning Department',
            'Impacted Locations',
            'Legacy Document Number'
        ]

        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.documentRelatedObjects.getColumnID()
            ).then(tableInfo => {
                let availableCols = []
                tableInfo.columns.map((obj) => {
                    availableCols.push(obj.textContent)
                })
                cy.log(availableCols)
                for (let i = 0; i < defaultTableColumns.length; i++) {
                    expect(availableCols).to.include(defaultTableColumns[i])
                }
            })

        //Verify Multi Choice Picker
        const namesList = [
            'Relationship Type',
            'Status',
            'Document Type',
            'Document Sub-Type',
            'Owning Segments',
            'Owning Organization',
            'Owning Department'
        ]
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.documentRelatedObjects.checkMultiChoicePickerColumns(namesList);

    })
    it('Allows Documents as Related Objects of Documents - User data binder Smart Content', () => {

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

        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test User Binder');
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.documents.open()
        //Click All
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.documents.All();

        //Toggle Filter
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.documents.toggleFilter();

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.documents.openRecordbyText('TV-TEC-213638');
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.documents.openRecord(0);

        //Related Objects
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.documents.relatedObjects();
                
        cy.contains('Documents').should('be.visible')
        cy.contains('Materials').should('be.visible')
        cy.contains('Change Controls').should('be.visible')
        cy.contains('Nonconformances').should('be.visible')
        cy.contains('CAPAs').should('be.visible')

        //Click Documents
        cy.contains('Documents').should('be.visible').click()

            let defaultTableColumns = [
            'Number',
            '👁',
            'Name',
            'Version',
            'Relationship Type',
            'Author',
            'Status',
            'Effective Date',
            'Document Type',
            'Document Sub-Type',
            'Owning Segments',
            'Owning Organization',
            'Owning Department',
            'Impacted Locations',
            'Legacy Document Number'
        ]

        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.documents.documentRelatedObjects.getColumnID()
            ).then(tableInfo => {
                let availableCols = []
                tableInfo.columns.map((obj) => {
                    availableCols.push(obj.textContent)
                })
                cy.log(availableCols)
                for (let i = 0; i < defaultTableColumns.length; i++) {
                    expect(availableCols).to.include(defaultTableColumns[i])
                }
            })

        //Verify Multi Choice Picker
        const namesList = [
            'Relationship Type',
            'Status',
            'Document Type',
            'Document Sub-Type',
            'Owning Segments',
            'Owning Organization',
            'Owning Department'
        ]
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.documents.documentRelatedObjects.checkMultiChoicePickerColumns(namesList);
    })
    it('Allows Documents as Related Objects of Documents - User data binder Linked Content', () => {

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

        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test User Binder');
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.open()
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.open()

        //Link Sibiling
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.linkSibling(0);

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.expandrecord(0);

        //Related Objects
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.relatedobject();

        //Click Documents
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.openLandingPage();

            let defaultTableColumns = [
            'Number',
            '👁',
            'Name',
            'Version',
            'Relationship Type',
            'Author',
            'Status',
            'Effective Date',
            'Document Type',
            'Document Sub-Type',
            'Owning Segments',
            'Owning Organization',
            'Owning Department',
            'Impacted Locations',
            'Legacy Document Number'
        ]

        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.documentRelatedObjects.getColumnID()
            ).then(tableInfo => {
                let availableCols = []
                tableInfo.columns.map((obj) => {
                    availableCols.push(obj.textContent)
                })
                cy.log(availableCols)
                for (let i = 0; i < defaultTableColumns.length; i++) {
                    expect(availableCols).to.include(defaultTableColumns[i])
                }
            })

        //Verify Multi Choice Picker
        const namesList = [
            'Relationship Type',
            'Status',
            'Document Type',
            'Document Sub-Type',
            'Owning Segments',
            'Owning Organization',
            'Owning Department'
        ]
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.documentRelatedObjects.checkMultiChoicePickerColumns(namesList);

    })
    it('Allows Documents as Related Objects of Documents - Product specific Binder Smart Content', () => {
    GQ.login();

        // Open Product Planet
        GQ.Planets.Product.openLandingPage();

        // Product Families must be visible
        cy.getSC(GQ.Planets.Product.ProductFamilies.locator).should('be.visible');
        cy.getSC(GQ.Planets.Product.Products.locator).should('be.visible');
        cy.getSC(GQ.Planets.Product.LargeMolecules.locator).should('be.visible');
        cy.getSC(GQ.Planets.Product.SmallMolecules.locator).should('be.visible');

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

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.open()

        //Open Documents
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.documents.open()
        
        //Click All
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.documents.All();

        //Toggle Filter
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.documents.toggleFilter();

        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.documents.openRecordbyText('TV-TEC-213638');
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.documents.openRecord(0);

        //Related Objects
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.documents.relatedobject();
                

        cy.contains('Documents').should('be.visible')
        cy.contains('Materials').should('be.visible')
        cy.contains('Change Controls').should('be.visible')
        cy.contains('Nonconformances').should('be.visible')
        cy.contains('CAPAs').should('be.visible')

        //Click Documents
        cy.contains('Documents').should('be.visible').click()

            let defaultTableColumns = [
            'Number',
            '👁',
            'Name',
            'Version',
            'Relationship Type',
            'Author',
            'Status',
            'Effective Date',
            'Document Type',
            'Document Sub-Type',
            'Owning Segments',
            'Owning Organization',
            'Owning Department',
            'Impacted Locations',
            'Legacy Document Number'
        ]

        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.documents.documentRelatedObjects.getColumnID()
            ).then(tableInfo => {
                let availableCols = []
                tableInfo.columns.map((obj) => {
                    availableCols.push(obj.textContent)
                })
                cy.log(availableCols)
                for (let i = 0; i < defaultTableColumns.length; i++) {
                    expect(availableCols).to.include(defaultTableColumns[i])
                }
            })

        //Verify Multi Choice Picker
        const namesList = [
            'Relationship Type',
            'Status',
            'Document Type',
            'Document Sub-Type',
            'Owning Segments',
            'Owning Organization',
            'Owning Department'
        ]
        GQ.Planets.Product.ProductFamilies.ProductFamily.SmartContent.documents.documentRelatedObjects.checkMultiChoicePickerColumns(namesList);



    })
    it('Allows Documents as Related Objects of Documents - Product specific linked content ', () => {
    GQ.login();

        // Open Product Planet
        GQ.Planets.Product.openLandingPage();

        // Product Families must be visible
        cy.getSC(GQ.Planets.Product.ProductFamilies.locator).should('be.visible');
        cy.getSC(GQ.Planets.Product.Products.locator).should('be.visible');
        cy.getSC(GQ.Planets.Product.LargeMolecules.locator).should('be.visible');
        cy.getSC(GQ.Planets.Product.SmallMolecules.locator).should('be.visible');

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

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.open()

        //Open Documents
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.open()

        //Link Sibiling
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.linkSibling(0);

        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.expandrecord(0);

        //Related Objects
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.relatedobject();
                

        //Click Documents
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.openLandingPage();

            let defaultTableColumns = [
            'Number',
            '👁',
            'Name',
            'Version',
            'Relationship Type',
            'Author',
            'Status',
            'Effective Date',
            'Document Type',
            'Document Sub-Type',
            'Owning Segments',
            'Owning Organization',
            'Owning Department',
            'Impacted Locations',
            'Legacy Document Number'
        ]

        // Read column
        cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.documentRelatedObjects.getColumnID()
            ).then(tableInfo => {
                let availableCols = []
                tableInfo.columns.map((obj) => {
                    availableCols.push(obj.textContent)
                })
                cy.log(availableCols)
                for (let i = 0; i < defaultTableColumns.length; i++) {
                    expect(availableCols).to.include(defaultTableColumns[i])
                }
            })

        //Verify Multi Choice Picker
        const namesList = [
            'Relationship Type',
            'Status',
            'Document Type',
            'Document Sub-Type',
            'Owning Segments',
            'Owning Organization',
            'Owning Department'
        ]
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.documentRelatedObjects.checkMultiChoicePickerColumns(namesList);
        
        //Click Refresh Icon
        GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.Documents.documentRelatedObjects.refreshSelector()
        GQ.logout();
    })
})
