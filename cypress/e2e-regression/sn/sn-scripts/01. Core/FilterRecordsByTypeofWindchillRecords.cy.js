import { GQTest } from '../../sn-pages/GQTest';
describe('01. Core', () => {
    Cypress.config('defaultCommandTimeout', 120000);
    it('FilterRecordsByTypeofWindchillRecords', () => {
        const GQ = new GQTest();

         // Login
         GQ.login()

         // Open Core
         GQ.Planets.Core.open()
 
         // Optiqs360 Records
         GQ.Planets.Core.WindchillRecords.RecordsByType.open()
 
        //  // Toggle filter
        //  GQ.Planets.Core.WindchillRecords.RecordsByType.toggleFilter()
 
         // Filter columns
         cy.autoTestAll(
             GQ.Planets.Core.WindchillRecords.RecordsByType.nameColumn(),
             []
         )
         
         // Toggle filter
         GQ.Planets.Core.WindchillRecords.RecordsByType.toggleFilter()
         
         // Logout
         GQ.logout()

    })
})