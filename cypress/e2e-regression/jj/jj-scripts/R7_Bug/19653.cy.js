import { GQTest } from '../../jj-pages/GQTest'
// Sprint 7
require('cypress-xpath')
describe('Sprint 21', () => {
  const GQ = new GQTest();
it('Allow Creation of Product from Product Families', () => {
// Login
GQ.login();
GQ.Planets.Product.openLandingPage();
 
// Ensure that Product Families are visible
cy.getSC(GQ.Planets.Product.ProductFamilies.locator).should('be.visible');
cy.getSC(GQ.Planets.Product.Products.locator).should('be.visible');
cy.getSC(GQ.Planets.Product.LargeMolecules.locator).should('be.visible');
cy.getSC(GQ.Planets.Product.SmallMolecules.locator).should('be.visible');



// Open Product Families
GQ.Planets.Product.ProductFamilies.openLandingPage();

    let expectedColumnsQXD = [
    'Name',
    'Number', 
    'Trade Name', 
    'Type', 
    'Status', 
    'Therapeutic Area', 
    'Stage', 
    'PQM Owner'];
    // Read column
    cy.getColumnsAndTypes(
        GQ.Planets.Product.ProductFamilies.getColumnID()
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

    //Verify Multi Choice Picker
const namesList = [
    'Type',
    'Status',  
    'Therapeutic Area',
    'Stage'
    ];  

    GQ.Planets.Product.ProductFamilies.checkMultiChoicePickerColumns(namesList);
    GQ.Planets.Product.ProductFamilies.toggleFilter();



GQ.Planets.Product.ProductFamilies.checkCreateForm('New Product Family Test',2);
//Check Type Dropdown

const type =[
    'Biotherapeutics',
    'Small Molecule']

GQ.Planets.Product.ProductFamilies.checkType(type);

//Check Type Status

const status =[
    'Active',
    'Active Delisting',
    'Active Divesting',
    'Cancelled',
    'On Hold']
    
GQ.Planets.Product.ProductFamilies.checkStatus(status);

//

const therapeuticArea =[
'Oncology',
'Neuroscience',
'Immunology',
'Infectious Disease and Vaccines',
'Cardiovascular and Metabolism',
'Project Diamond - Consumer',
'Gastroenterology',
'N/A']
    
GQ.Planets.Product.ProductFamilies.therapeuticArea(therapeuticArea);

//Close Form
GQ.Planets.Product.ProductFamilies.cancelForm();

// Create Product family
GQ.Planets.Product.ProductFamilies.createProductFamily_BiotTherapeutics('New Product Family Test',2);

// Toggle Filter
GQ.Planets.Product.ProductFamilies.toggleFilter();

// Open APALUTAMIDE product family
GQ.Planets.Product.ProductFamilies.openProductFamilyByText('New Product Family Test');

// Open Home View of Products
GQ.Planets.Product.ProductFamilies.openHome();
GQ.Planets.Product.ProductFamilies.openhiddenforms();
 
//Check Form Fields
    const form = [
      'Name', 
      'Number', 
      'Status', 
      'Details', 
      'Stream Product Family', 
      'Type', 
      'Therapeutic Area',
      'SC Map Link',
      'Product Team'
    ];
GQ.Planets.Product.ProductFamilies.checkformsfields(form);

    const multichoice = [
      'Status',  
      'Type', 
      'Therapeutic Area'
    ];
GQ.Planets.Product.ProductFamilies.checkMultiChoice(multichoice);

//Open Products tab

GQ.Planets.Product.ProductFamilies.openProducts();
//Create Child Product
GQ.Planets.Product.ProductFamilies.createNewProduct('New', 1, 'Small Molecule', 'Active', 'Oncology', 'Trade', 'Grow', 'No');
//Delete Child Product
// GQ.Planets.Product.ProductFamilies.deleteProduct();
//Close Product family

GQ.Planets.Product.ProductFamilies.closeProductFamily();

GQ.Planets.Product.ProductFamilies.deleteProductFamilyByText('New Product Family Test');

GQ.logout();

})
it('Allow Creation of Product from Large Molecule', () => {
// Login
GQ.login();
 
// Open Product Planet
GQ.Planets.Product.openLandingPage();

// Ensure that Product Families are visible
cy.getSC(GQ.Planets.Product.ProductFamilies.locator).should('be.visible');
cy.getSC(GQ.Planets.Product.Products.locator).should('be.visible');
cy.getSC(GQ.Planets.Product.LargeMolecules.locator).should('be.visible');
cy.getSC(GQ.Planets.Product.SmallMolecules.locator).should('be.visible');

// Open Product Families
GQ.Planets.Product.LargeMolecules.openLandingPage();

    let expectedColumnsQXD = [
    'Name',
    'Number', 
    'Trade Name', 
    'Type', 
    'Status', 
    'Therapeutic Area', 
    'Stage', 
    'PQM Owner'];
    // Read column
    cy.getColumnsAndTypes(
        GQ.Planets.Product.LargeMolecules.getColumnID()
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

    //Verify Multi Choice Picker
const namesList = [
    'Type',
    'Status',  
    'Therapeutic Area',
    'Stage'
    ];  

GQ.Planets.Product.LargeMolecules.checkMultiChoicePickerColumns(namesList);
GQ.Planets.Product.LargeMolecules.toggleFilter();

GQ.Planets.Product.LargeMolecules.checkCreateForm('New Product Family Test',2);
//Check Type Dropdown

const type =[
    'Biotherapeutics',
    'Small Molecule']

GQ.Planets.Product.LargeMolecules.checkType(type);

//Check Type Status

const status =[
    'Active',
    'Active Delisting',
    'Active Divesting',
    'Cancelled',
    'On Hold']
    
GQ.Planets.Product.LargeMolecules.checkStatus(status);

//

const therapeuticArea =[
'Oncology',
'Neuroscience',
'Immunology',
'Infectious Disease and Vaccines',
'Cardiovascular and Metabolism',
'Project Diamond - Consumer',
'Gastroenterology',
'N/A']
    
GQ.Planets.Product.LargeMolecules.therapeuticArea(therapeuticArea);

//Close Form
GQ.Planets.Product.LargeMolecules.cancelForm();


//Open Large Molecule

GQ.Planets.Product.LargeMolecules.openLandingPage();

// Create Product family
GQ.Planets.Product.LargeMolecules.createProductFamily_BiotTherapeutics('New Product Family Test in Large Molecule',4);

// Toggle Filter
GQ.Planets.Product.LargeMolecules.toggleFilter();

// Open APALUTAMIDE product family
GQ.Planets.Product.LargeMolecules.openProductFamilyByText('New Product Family Test in Large Molecule');

// Open Home View of Products
GQ.Planets.Product.LargeMolecules.openHome();

//Check Form Fields
    const form = [
      'Name', 
      'Number', 
      'Status', 
      'Details', 
      'Stream Product Family', 
      'Type', 
      'Therapeutic Area'];

GQ.Planets.Product.LargeMolecules.checkformsfields(form);

    const multichoice = [
      'Status',  
      'Type', 
      'Therapeutic Area'
    ];
GQ.Planets.Product.LargeMolecules.checkMultiChoice(multichoice);

//Open Products tab

GQ.Planets.Product.LargeMolecules.openProducts();
//Create Child Product
GQ.Planets.Product.LargeMolecules.createNewProduct('New', 1, 'Small Molecule', 'Active', 'Oncology', 'Trade', 'Grow', 'No');
// //Delete Child Product
// GQ.Planets.Product.LargeMolecules.deleteProduct();
//Close Product family
GQ.Planets.Product.LargeMolecules.closeProductFamily();

GQ.Planets.Product.LargeMolecules.deleteProductFamilyByText('New Product Family Test in Large Molecule');

GQ.logout();
})
it('Allow Creation of Product from Small Molecule', () => {
// Login
GQ.login();
 
// Open Product Planet
GQ.Planets.Product.openLandingPage();

// Ensure that Product Families are visible
cy.getSC(GQ.Planets.Product.ProductFamilies.locator).should('be.visible');
cy.getSC(GQ.Planets.Product.Products.locator).should('be.visible');
cy.getSC(GQ.Planets.Product.LargeMolecules.locator).should('be.visible');
cy.getSC(GQ.Planets.Product.SmallMolecules.locator).should('be.visible');


// Open Product Families
GQ.Planets.Product.SmallMolecules.openLandingPage();

    let expectedColumnsQXD = [
    'Name',
    'Number', 
    'Trade Name', 
    'Type', 
    'Status', 
    'Therapeutic Area', 
    'Stage', 
    'PQM Owner'];
    // Read column
    cy.getColumnsAndTypes(
        GQ.Planets.Product.LargeMolecules.getColumnID()
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

    //Verify Multi Choice Picker
const namesList = [
    'Type',
    'Status',  
    'Therapeutic Area',
    'Stage'
    ];  

GQ.Planets.Product.SmallMolecules.checkMultiChoicePickerColumns(namesList);
GQ.Planets.Product.SmallMolecules.toggleFilter();




GQ.Planets.Product.SmallMolecules.checkCreateForm('New Product Family Test',2);
//Check Type Dropdown

const type =[
    'Biotherapeutics',
    'Small Molecule']

GQ.Planets.Product.SmallMolecules.checkType(type);

//Check Type Status

const status =[
    'Active',
    'Active Delisting',
    'Active Divesting',
    'Cancelled',
    'On Hold']
    
GQ.Planets.Product.SmallMolecules.checkStatus(status);

//

const therapeuticArea =[
'Oncology',
'Neuroscience',
'Immunology',
'Infectious Disease and Vaccines',
'Cardiovascular and Metabolism',
'Project Diamond - Consumer',
'Gastroenterology',
'N/A']
    
GQ.Planets.Product.SmallMolecules.therapeuticArea(therapeuticArea);

//Close Form
GQ.Planets.Product.SmallMolecules.cancelForm();


//Open Large Molecule

GQ.Planets.Product.SmallMolecules.openLandingPage();

// Create Product family
GQ.Planets.Product.SmallMolecules.createProductFamily_SmallMolecules('New Product Family Test in Small Molecule',6);

// Toggle Filter
GQ.Planets.Product.SmallMolecules.toggleFilter();

// Open APALUTAMIDE product family
GQ.Planets.Product.SmallMolecules.openProductFamilyByText('New Product Family Test in Small Molecule');

// Open Home View of Products
GQ.Planets.Product.SmallMolecules.openHome();

//Check Form Fields
    const form = [
      'Name', 
      'Number', 
      'Status', 
      'Details', 
      'Stream Product Family', 
      'Type', 
      'Therapeutic Area'];

GQ.Planets.Product.SmallMolecules.checkformsfields(form);

    const multichoice = [
      'Status',  
      'Type', 
      'Therapeutic Area'
    ];
GQ.Planets.Product.SmallMolecules.checkMultiChoice(multichoice);

//Open Products tab

GQ.Planets.Product.SmallMolecules.openProducts();
//Create Child Product
GQ.Planets.Product.SmallMolecules.createNewProduct('New', 1, 'Small Molecule', 'Active', 'Oncology', 'Trade', 'Grow', 'No');
// //Delete Child Product
// GQ.Planets.Product.SmallMolecules.deleteProduct();
//Close Product family
GQ.Planets.Product.SmallMolecules.closeProductFamily();

GQ.Planets.Product.SmallMolecules.deleteProductFamilyByText('New Product Family Test in Small Molecule');

GQ.logout();

})
})