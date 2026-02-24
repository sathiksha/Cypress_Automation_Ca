import { GQTest } from "../../../../jj-pages/GQTest";
import { ElementLibrary } from "../../../../jj-pages/Navigation Bar/ElementLibrary";
const GQ = new GQTest();
describe('UAT/4.1.5', () => {
   it('SYS-001-Analysis View filter issue fix', () => {
      // Login
      GQ.login('PQM360 General User')

      // Laboratory Information
      GQ.Planets.LaboratoryInformation.openLandingPage()

      GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.openLandingPage()

      GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.openRecord('Study-211334')

      GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Analysis.open()

      GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Analysis.selectRowByText('SDA')

      // GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Analysis.selectRowByText('SDA')
      // A 
      cy.waitForRowCount(
         GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Analysis.activeScreenRowCountID()
      )
      cy.getSC(
         GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Analysis.activeScreenRowCountID()
      ).invoke('text').then((aRaw) => {
         let aR = aRaw.split(" ");
         let a = aR[0].replaceAll(",", "");

         GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Analysis.activeScreenToggleFilter()

         cy.clearAndSelectListOfValuesInDropdown(
            GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Analysis.activeScreenMeasurementDropdownInputID(),
            ['Bacteria Count','Bacteria Count ']
         )

         // B
         cy.waitForRowCount(
            GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Analysis.activeScreenRowCountID()
         )
         cy.getSC(
            GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Analysis.activeScreenRowCountID()
         ).invoke('text').then((bRaw) => {
            let bR = bRaw.split(" ");
            let b = bR[0].replaceAll(",", "");


            GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Analysis.byMeasurement()

            GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Analysis.activeScreenbyMeasurementSelectRowByText('Bacteria Count')

            GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Analysis.byTimepoint()

            GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Analysis.activeScreenbyTimepointSelectRowByText('0 Months')
                       
            cy.waitForRowCount(
               GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Analysis.activeScreenRowCountID()
            )
            cy.getSC(
               GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Analysis.activeScreenRowCountID()
            ).invoke('text').then((cRaw) => {
               let cR = cRaw.split(" ");
               let c = cR[0].replaceAll(",", "");
               GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Analysis.allMeasurements()

               GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Analysis.activeScreenToggleFilter()

               GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Analysis.activeScreenToggleFilter()
               


               cy.clearAndSelectListOfValuesInDropdown(
                  GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Analysis.activeScreenTimepointDropdownInputID(),
                  ['0 Months']
               )

               // D
               cy.waitForRowCount(
                  GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Analysis.activeScreenRowCountID()
               )
              
               cy.getSC(
                  GQ.Planets.LaboratoryInformation.LaboratoryRecords.StabilityStudies.StabilityStudy.Analysis.activeScreenRowCountID()
               ).invoke('text').then((dRaw) => {
                  let dR = dRaw.split(" ");
                  let d = dR[0].replaceAll(",", "");
                  expect(c).not.eq(d)
                  // expect(c).eq(d)
               })
            })
         })
      })
   })
})
