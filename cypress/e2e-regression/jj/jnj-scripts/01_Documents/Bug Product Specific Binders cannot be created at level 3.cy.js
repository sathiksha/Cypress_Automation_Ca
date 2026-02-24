import { GQTest } from '../../jnj-pages/GQTest.js';


describe('7430 - Bug Product Specific Binders cannot be created at level 3 and 1291 - Allows history of changes to Linked Content and Attachments for Admin Data Binders, User Data Binders, and Product Specific Binders', () => {
  const GQ = new GQTest()

  it('7430 - Bug Product Specific Binders cannot be created at level 3', () => {

    // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.openPlanet('Product')

    //Toggle Filter
    GQ.Planets.Product.ProductFamily.toggleFilter()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

    // Click Admin Data Binder
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.productSpecificBinderCreationValidation();

    //Logout
    GQ.Logout()
  })

  it('1291 - Allows history of changes to Linked Content and Attachments for Admin Data Binders', () => {

    // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.openPlanet('Product')

    //Toggle Filter
    GQ.Planets.Product.ProductFamily.toggleFilter()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

    GQ.Planets.Product.ProductFamily.AdminDataBinder.open('MSAT Product View - Cypress Test Admin Binder')

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.open()
    // Click Admin Data Binder
    GQ.Planets.Product.ProductFamily.AdminDataBinder.History.open()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.History.RelationshipChanges()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.History.RelationshipChangesHeaderID()

    let defaultTableColumns = [
      'Number',
      'Type',
      'Modified By',
      'Modified Date',
      'Action'

    ]

    // Read column
    cy.getColumnsAndTypes(
      GQ.Planets.Product.ProductFamily.AdminDataBinder.History.RelationshipChangesHeaderID()
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

    GQ.Planets.Product.ProductFamily.AdminDataBinder.History.AttachmentHistory()

    let AttachmentHistorydefaultTableColumns = [
      'File',
      'Modified By',
      'Modified Date',
      'Action'

    ]

    // Read column
    cy.getColumnsAndTypes(
      GQ.Planets.Product.ProductFamily.AdminDataBinder.History.AttachmentHistoryHeaderID()
    ).then(tableInfo => {
      let availableCols = []
      tableInfo.columns.map((obj) => {
        availableCols.push(obj.textContent)
      })
      cy.log(availableCols)
      for (let i = 0; i < AttachmentHistorydefaultTableColumns.length; i++) {
        expect(availableCols).to.include(AttachmentHistorydefaultTableColumns[i])
      }
    })


    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.open()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Documents.open()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Documents.UnlinkRecord()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.LinkedContent.Documents.linkAContent()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.History.open()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.History.RelationshipChanges()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.History.ModifiedDateValidation()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.Attachments.open()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.Attachments.addRecord()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.History.recordAddedValidation()

    //Logout
    GQ.Logout()
  })

  it('1291 - Allows history of changes to Linked Content and Attachments for User Data Binders', () => {

    // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.openPlanet('Product')

    //Toggle Filter
    GQ.Planets.Product.ProductFamily.toggleFilter()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

    GQ.Planets.Product.ProductFamily.UserDataBinder.open('MSAT Product View - Cypress Test User Data Binder')

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.open()

    // Click Admin Data Binder
    GQ.Planets.Product.ProductFamily.UserDataBinder.History.open()



    GQ.Planets.Product.ProductFamily.UserDataBinder.History.RelationshipChanges()

    GQ.Planets.Product.ProductFamily.UserDataBinder.History.RelationshipChangesHeaderID()

    let defaultTableColumns = [
      'Number',
      'Type',
      'Modified By',
      'Modified Date',
      'Action'

    ]

    // Read column
    cy.getColumnsAndTypes(
      GQ.Planets.Product.ProductFamily.UserDataBinder.History.RelationshipChangesHeaderID()
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

    GQ.Planets.Product.ProductFamily.UserDataBinder.History.AttachmentHistory()

    let AttachmentHistorydefaultTableColumns = [
      'File',
      'Modified By',
      'Modified Date',
      'Action'

    ]

    // Read column
    cy.getColumnsAndTypes(
      GQ.Planets.Product.ProductFamily.UserDataBinder.History.AttachmentHistoryHeaderID()
    ).then(tableInfo => {
      let availableCols = []
      tableInfo.columns.map((obj) => {
        availableCols.push(obj.textContent)
      })
      cy.log(availableCols)
      for (let i = 0; i < AttachmentHistorydefaultTableColumns.length; i++) {
        expect(availableCols).to.include(AttachmentHistorydefaultTableColumns[i])
      }
    })


    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.open()

    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Documents.open()

    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Documents.unlinkRecords()

    GQ.Planets.Product.ProductFamily.UserDataBinder.LinkedContent.Documents.linkAContent()

    GQ.Planets.Product.ProductFamily.UserDataBinder.History.open()

    GQ.Planets.Product.ProductFamily.UserDataBinder.History.RelationshipChanges()

    GQ.Planets.Product.ProductFamily.UserDataBinder.History.ModifiedDateValidation()

    GQ.Planets.Product.ProductFamily.UserDataBinder.Attachments.open()

    GQ.Planets.Product.ProductFamily.UserDataBinder.Attachments.addRecord()

    GQ.Planets.Product.ProductFamily.UserDataBinder.History.recordAddedValidation()

    //Logout
    GQ.Logout()
  })

  it('1291 - Allows history of changes to Linked Content and Attachments for Product Specific Binders', () => {

    // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.openPlanet('Product')

    //Toggle Filter
    GQ.Planets.Product.ProductFamily.toggleFilter()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.ProductSpecificBinderopen()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.open()

    // Click Admin Data Binder
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.History.open()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.History.RelationshipChanges()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.History.RelationshipChangesHeaderID()

    let defaultTableColumns = [
      'Number',
      'Type',
      'Modified By',
      'Modified Date',
      'Action'

    ]

    // Read column
    cy.getColumnsAndTypes(
      GQ.Planets.Product.ProductFamily.ProductSpecificBinder.History.RelationshipChangesHeaderID()
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

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.History.AttachmentHistory()

    let AttachmentHistorydefaultTableColumns = [
      'File',
      'Modified By',
      'Modified Date',
      'Action'

    ]

    // Read column
    cy.getColumnsAndTypes(
      GQ.Planets.Product.ProductFamily.ProductSpecificBinder.History.AttachmentHistoryHeaderID()
    ).then(tableInfo => {
      let availableCols = []
      tableInfo.columns.map((obj) => {
        availableCols.push(obj.textContent)
      })
      cy.log(availableCols)
      for (let i = 0; i < AttachmentHistorydefaultTableColumns.length; i++) {
        expect(availableCols).to.include(AttachmentHistorydefaultTableColumns[i])
      }
    })


    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.open()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Documents.open()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Documents.unlinkRecord()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.LinkedContent.Documents.linkAContent()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.History.open()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.History.RelationshipChanges()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.History.ModifiedDateValidation()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.Attachments.open()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.Attachments.addRecord()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.History.recordAddedValidation()

    //Logout
    GQ.Logout()
  })
});


