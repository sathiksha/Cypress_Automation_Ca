
import { GQTest } from '../../jj-pages/GQTest';
// Sprint 4
require('cypress-xpath');

describe('16404--Laboratory Information  Stability Studies', () => {
    const GQ = new GQTest();
     it('planet', () => {

        // Login

GQ.login();
// Open Laboratory Information planet
GQ.Planets.LaboratoryInformation.openLandingPage();
// Open Stability Studies record
GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.openLandingPage();
//Verify Data is Available
cy.checkDataAvailablity();
let subNouns = ['Stability Studies', 'Forecasts', 'Inventories'];
//Check Sub nouns data availablity
GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.checkSubNouns(subNouns);
//Open Stabity Data
GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityData.openLandingPage();
//Verify Data is Available
cy.checkDataAvailablity();
//Open Release Data
GQ.Planets.LaboratoryInformation.LaboratoryRecords.ReleaseData.openLandingPage();
//Verify Data is Available
cy.checkDataAvailablity();
//Open Specifications
GQ.Planets.LaboratoryInformation.LaboratoryRecords.Specifications.open();
//Verify Data is Available
cy.checkDataAvailablity();
// Logout
GQ.logout();
})

 it('Product family', () => {

GQ.login();
GQ.Planets.Product.openLandingPage();
// Product Families
GQ.Planets.Product.ProductFamilies.openLandingPage();
// Toggle Filter
GQ.Planets.Product.ProductFamilies.toggleFilter();
// Product Record
GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE');
// Content
GQ.Planets.Product.ProductFamilies.ProductFamily.Content.open();
// Open Laboratory Information
GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.openLandingPage();
// Open Stability Studies record
GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.Studies.openLandingPage();
//Verify Data is Available
cy.checkDataAvailablity();
let subNouns = ['Stability Studies', 'Forecasts', 'Inventories'];
//Check Sub nouns data availablity
GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.Studies.checkSubNouns(subNouns);
//Open Stabity Data
GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.StabilityData.openLandingPage();
//Verify Data is Available
cy.checkDataAvailablity();
//Open Release Data
GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.ReleaseData.openLandingPage();
//Verify Data is Available
cy.checkDataAvailablity();
//Open Specifications
GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.Specifications.openLandingPage();
//Verify Data is Available
cy.checkDataAvailablity();
// Logout
GQ.logout();
})
it('Admin binder', () => {
GQ.login();
GQ.Planets.Product.openLandingPage();
// Product Families
GQ.Planets.Product.ProductFamilies.openLandingPage();
// Toggle Filter
GQ.Planets.Product.ProductFamilies.toggleFilter();
// Product Record
GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE');
// Refresh
GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector();
// Select the linked binder
GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test Admin Binder');
//Open Smart Content
GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.open();
// Open Laboratory Information
GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.LaboratoryInformation.openLandingPage();
// Open Stability Studies record
GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.LaboratoryInformation.StabilityStudies.openLandingPage();
//Verify Data is Available
cy.checkDataAvailablity();
let subNouns = ['Stability Studies', 'Forecasts', 'Inventories'];
//Check Sub nouns data availablity
GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.LaboratoryInformation.StabilityStudies.checkSubNouns(subNouns);
//Open Stabity Data
GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.LaboratoryInformation.StabilityData.openLandingPage();
//Verify Data is Available
cy.checkDataAvailablity();
//Open Release Data
GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.LaboratoryInformation.ReleaseData.openLandingPage();
//Verify Data is Available
cy.checkDataAvailablity();
//Open Specifications
GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.LaboratoryInformation.Specifications.openLandingPage();
//Verify Data is Available
cy.checkDataAvailablity();
// Logout
GQ.logout();
})
it('Admin linked content', () => {
GQ.login();
GQ.Planets.Product.openLandingPage();
// Product Families
GQ.Planets.Product.ProductFamilies.openLandingPage();
// Toggle Filter
GQ.Planets.Product.ProductFamilies.toggleFilter();
// Product Record
GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE');
// Refresh
GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector();
// Select the linked binder
GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test Admin Binder');
//Open Linked content
GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.open();
// Open Laboratory Information
GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.LaboratoryRecords.openLandingPage();
// Open Stability Studies record
GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.LaboratoryRecords.StabilityStudies.openLandingPage();
//Verify Data is Available
cy.checkDataAvailablity();
let subNouns = ['Stability Studies', 'Forecasts'];
//Check Sub nouns data availablity
GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.LaboratoryRecords.StabilityStudies.checkSubNouns(subNouns);
//Open Stabity Data
GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.LaboratoryRecords.StabilityData.openLandingPage();
//Open Release Data
GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.LaboratoryRecords.ReleaseData.openLandingPage();
//Open Specifications
GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.LaboratoryRecords.Specifications.openLandingPage();
// Logout
GQ.logout();
})
it('User binder', () => {
GQ.login();
GQ.Planets.Product.openLandingPage();
// Product Families
GQ.Planets.Product.ProductFamilies.openLandingPage();
// Toggle Filter
GQ.Planets.Product.ProductFamilies.toggleFilter();
// Product Record
GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE');
// Refresh
GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector();
// Select the linked binder
GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test User Binder');
//Open Smart content
GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.open();
// Open Laboratory Information
GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.LaboratoryRecords.open();
// Open Stability Studies record
GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.LaboratoryRecords.StabilityStudies.openLandingPage();
//Verify Data is Available
cy.checkDataAvailablity();
let subNouns = ['Stability Studies', 'Forecasts', 'Inventories'];
//Check Sub nouns data availablity
GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.LaboratoryRecords.StabilityStudies.checkSubNouns(subNouns);
//Open Stabity Data
GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.LaboratoryRecords.StabilityData.openLandingPage();
//Verify Data is Available
cy.checkDataAvailablity();
//Open Release Data

//Open Specifications
GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.LaboratoryRecords.Specifications.openLandingPage();
//Verify Data is Available
cy.checkDataAvailablity();
// Logout
GQ.logout();
})
it('User linked content', () => {
GQ.login();
GQ.Planets.Product.openLandingPage();
// Product Families
GQ.Planets.Product.ProductFamilies.openLandingPage();
// Toggle Filter
GQ.Planets.Product.ProductFamilies.toggleFilter();
// Product Record
GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE');
// Refresh
GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector();
// Select the linked binder
GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test User Binder');
//Open Linked content
GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.open();
// Open Laboratory Information
GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.LaboratoryInformation.openLandingPage();
// Open Stability Studies record
GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.LaboratoryInformation.StabilityStudies.openLandingPage();
GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.LaboratoryInformation.StabilityStudies.linkARecord();
//Verify Data is Available
cy.checkDataAvailablity();
let subNouns = ['Stability Studies', 'Forecasts'];
//Check Sub nouns data availablity
GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.LaboratoryInformation.StabilityStudies.checkSubNouns(subNouns);
//Open Stabity Data
GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.LaboratoryInformation.StabilityData.openLandingPage();
//Open Release Data
GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.LaboratoryInformation.ReleaseData.openLandingPage();
//Open Specifications
GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.LaboratoryInformation.Specifications.openLandingPage();
// Logout
GQ.logout();
})
})