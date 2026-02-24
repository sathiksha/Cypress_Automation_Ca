import { GQTest } from '../../sn-pages/GQTest';
describe('01. Core', () => {
    Cypress.config('defaultCommandTimeout', 120000);
    it('FilterRecordsByTypeofOptiqs360Records', () => {
        const GQ = new GQTest();

         // Login
         GQ.login()

         // Open Core
         GQ.Planets.Core.open()
 
         // Optiqs360 Records
         GQ.Planets.Core.Optiqs360Records.open()

         // Click Records 
         GQ.Planets.Core.Optiqs360Records.Records.open()

         // Click Records By type
         GQ.Planets.Core.Optiqs360Records.RecordsByType.open()
 
         // Toggle filter
         GQ.Planets.Core.Optiqs360Records.RecordsByType.toggleFilter()
 
         // Filter columns
         cy.autoTestAll(
             GQ.Planets.Core.Optiqs360Records.RecordsByType.nameColumn(),
             []
         )
 
         // Logout
         GQ.logout()

    })
})