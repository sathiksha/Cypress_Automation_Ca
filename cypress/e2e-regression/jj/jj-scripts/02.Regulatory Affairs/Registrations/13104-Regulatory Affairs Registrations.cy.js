import { GQTest } from '../../../jj-pages/GQTest';
require('cypress-xpath');

describe('Sprint 9', () => {
  const GQ = new GQTest();

  it('Regulatory Affairs planet > Registration', () => {
    // Login
    GQ.login();

    // Open Product Planet
    GQ.Planets.RegulatoryAffairs.openLandingPage();

    // Navigate to Registration
    GQ.Planets.RegulatoryAffairs.Registration.openLandingPage();

    // Toggle filter and check Authorization Status
    GQ.Planets.RegulatoryAffairs.Registration.togglefilter();
    GQ.Planets.RegulatoryAffairs.Registration.AuthorizationStatus();
    GQ.Planets.RegulatoryAffairs.Registration.comboBoxPicker();
    
    
    // Logout with verification
    GQ.logout();


  });

  it('Regulatory Affairs planet > Registration (extended statuses)', () => {
    // Login
    GQ.login();

    // Open Product Planet
    GQ.Planets.RegulatoryAffairs.openLandingPage();

    // Navigate to Registration
    GQ.Planets.RegulatoryAffairs.Registration.openLandingPage();

    // Click on complex SmartClient path filter menu
    GQ.Planets.RegulatoryAffairs.Registration.smartclient();

    // Select "All" from dropdown
    GQ.Planets.RegulatoryAffairs.Registration.select();

    GQ.Planets.RegulatoryAffairs.Registration.togglefilter();

    GQ.Planets.RegulatoryAffairs.Registration.AuthorizationStatus();

    GQ.Planets.RegulatoryAffairs.Registration.comboPicker();

    GQ.logout();
  });

  it('Regulatory Affairs planet > Registration', () => {
  it('Regulatory Affairs planet > Registration', () => {
    // Login
    GQ.login();


    // Open Product Planet
    GQ.Planets.RegulatoryAffairs.openLandingPage();


    // Navigate to Registration
    GQ.Planets.RegulatoryAffairs.Registration.openLandingPage();

    GQ.Planets.RegulatoryAffairs.LOCPRODUCTLIST.openLandingPage();

    let expectedColumnsQXD = [
      'SKU Code (LLM)',
      'Country Trade Name',
      'Product',
      'Package Set Name',
      'Country',
      'Shelf-Life',
      'Shelf-Life (Months)',
      'Shelf-Life Status',
      'Shelf-Life QC Status',
      'Currently Marketed (Registration Package Set Country)',
      'Registration Package Set On Market Date',
      'Registration Package Set Off Market Date',
      'Marketing Company',
      'Authorization Status'
    ];

    // Read column
    cy.getColumnsAndTypes(
      GQ.Planets.RegulatoryAffairs.LOCPRODUCTLIST.columnHeaderID()
      GQ.Planets.RegulatoryAffairs.LOCPRODUCTLIST.columnHeaderID()
    ).then(tableInfo => {
      let availableCols = []
      tableInfo.columns.map((obj) => {
        availableCols.push(obj.textContent)
      })
      cy.log(availableCols)
      for (let i = 0; i < expectedColumnsQXD.length; i++) {
        expect(availableCols).to.include(expectedColumnsQXD[i])
      }
      let availableCols = []
      tableInfo.columns.map((obj) => {
        availableCols.push(obj.textContent)
      })
      cy.log(availableCols)
      for (let i = 0; i < expectedColumnsQXD.length; i++) {
        expect(availableCols).to.include(expectedColumnsQXD[i])
      }
    })

    const namesList = ['Country Trade Name', 'Shelf-Life', 'Shelf-Life (Months)', 'Shelf-Life Status', 'Shelf-Life QC Status', 'Currently Marketed (Registration Package Set Country)', 'Marketing Company', 'Authorization Status'];

    const namesList = ['Country Trade Name', 'Shelf-Life', 'Shelf-Life (Months)', 'Shelf-Life Status', 'Shelf-Life QC Status', 'Currently Marketed (Registration Package Set Country)', 'Marketing Company', 'Authorization Status'];
    GQ.Planets.RegulatoryAffairs.LOCPRODUCTLIST.checkMultiChoicePickerColumns(namesList)

    GQ.logout()


  })
  it('Regulatory Affairs planet > Registration', () => {
    GQ.logout()


  })
  it('Regulatory Affairs planet > Registration', () => {
    // Login
    GQ.login();


    // Open Product Planet
    GQ.Planets.RegulatoryAffairs.openLandingPage();


    // Navigate to Registration
    GQ.Planets.RegulatoryAffairs.Registration.openLandingPage();
    GQ.Planets.RegulatoryAffairs.LOCPRODUCTLIST.openLandingPage()
    GQ.Planets.RegulatoryAffairs.LOCPRODUCTLIST.filterdropdown();
    GQ.Planets.RegulatoryAffairs.LOCPRODUCTLIST.locdropdown()
    GQ.Planets.RegulatoryAffairs.LOCPRODUCTLIST.selectAll()
    GQ.Planets.RegulatoryAffairs.LOCPRODUCTLIST.refresh()
    let expectedColumnsQXD = [
      'SKU Code (LLM)',
      'Country Trade Name',
      'Product',
      'Package Set Name',
      'Country',
      'Shelf-Life',
      'Shelf-Life (Months)',
      'Shelf-Life Status',
      'Shelf-Life QC Status',
      'Currently Marketed (Registration Package Set Country)',
      'Registration Package Set On Market Date',
      'Registration Package Set Off Market Date',
      'Marketing Company',
      'Authorization Status',
      'Storage Conditions (Drug Product)',
      'MAH',
      'Active Ingredients',
      'Procedure Type',
      'Authorization Number',
      'Procedure Identifier'
    ];

    // Read column
    cy.getColumnsAndTypes(
      GQ.Planets.RegulatoryAffairs.LOCPRODUCTLIST.columnHeaderID()
    ).then(tableInfo => {
      let availableCols = []
      tableInfo.columns.map((obj) => {
        availableCols.push(obj.textContent)
      })
      cy.log(availableCols)
      for (let i = 0; i < expectedColumnsQXD.length; i++) {
        expect(availableCols).to.include(expectedColumnsQXD[i])
      }
    })

    const namesList = ['Country Trade Name', 'Country', 'Shelf-Life', 'Shelf-Life (Months)', 'Shelf-Life QC Status', 'Currently Marketed (Registration Package Set Country)', 'Marketing Company', 'Authorization Status', 'MAH', 'Procedure Type'];
    GQ.Planets.RegulatoryAffairs.LOCPRODUCTLIST.checkMultiChoicePickerColumns(namesList)
    GQ.logout()
  })
      'SKU Code (LLM)',
      'Country Trade Name',
      'Product',
      'Package Set Name',
      'Country',
      'Shelf-Life',
      'Shelf-Life (Months)',
      'Shelf-Life Status',
      'Shelf-Life QC Status',
      'Currently Marketed (Registration Package Set Country)',
      'Registration Package Set On Market Date',
      'Registration Package Set Off Market Date',
      'Marketing Company',
      'Authorization Status',
      'Storage Conditions (Drug Product)',
      'MAH',
      'Active Ingredients',
      'Procedure Type',
      'Authorization Number',
      'Procedure Identifier'
    ];

    // Read column
    cy.getColumnsAndTypes(
      GQ.Planets.RegulatoryAffairs.LOCPRODUCTLIST.columnHeaderID()
    ).then(tableInfo => {
      let availableCols = []
      tableInfo.columns.map((obj) => {
        availableCols.push(obj.textContent)
      })
      cy.log(availableCols)
      for (let i = 0; i < expectedColumnsQXD.length; i++) {
        expect(availableCols).to.include(expectedColumnsQXD[i])
      }
    })

    const namesList = ['Country Trade Name', 'Country', 'Shelf-Life', 'Shelf-Life (Months)', 'Shelf-Life QC Status', 'Currently Marketed (Registration Package Set Country)', 'Marketing Company', 'Authorization Status', 'MAH', 'Procedure Type'];
    GQ.Planets.RegulatoryAffairs.LOCPRODUCTLIST.checkMultiChoicePickerColumns(namesList)
    GQ.logout()
  })
})