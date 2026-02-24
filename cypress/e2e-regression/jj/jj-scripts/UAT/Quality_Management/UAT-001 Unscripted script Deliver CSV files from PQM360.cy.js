import { GQTest } from "../../../jj-pages/GQTest";
import { ElementLibrary } from "../../../jj-pages/Navigation Bar/ElementLibrary";
const GQ = new GQTest();
describe('UAT/4.1.5', () => {
   it('UAT-001 Unscripted script Deliver CSV files from PQM360', () => {
      // Login
      GQ.login()

      // Quality Management
      GQ.Planets.QualityManagement.openLandingPage()

      // Change Controls
      GQ.Planets.QualityManagement.ChangeControls.openLandingPage()

      // cy.testLazyCount(
      GQ.Planets.QualityManagement.ChangeControls.Trackwise.openTrackwise()

      GQ.Planets.QualityManagement.ChangeControls.Trackwise.rowCountID()
      // )

      // Print Row Count
      const selector = GQ.Planets.QualityManagement.ChangeControls.Trackwise.rowCountID();

      cy.get('body').then($body => {
         if ($body.find(selector).length > 0) {
            cy.get(selector)
               .invoke('text')
               .then(text => {
                  const match = text?.trim().match(/[\d,]+/g)?.[0];
                  const uiCount = match ? parseInt(match.replace(/,/g, '')) : 0;
                  cy.log(`UI Count: ${uiCount}`);
               })
               .catch(() => {
                  cy.log('Error invoking text — skipping');
               });
         } else {
            cy.log('Element not found — skipping invoke');
         }
      });


      GQ.Planets.QualityManagement.CAPAs.openLandingPage()

      GQ.Planets.QualityManagement.CAPAs.viewTrackwise()

      // Wait for Row Count
      cy.waitForRowCount(
         GQ.Planets.QualityManagement.CAPAs.Trackwise.rowCountID()
      )
      // Print Row Count
      cy.getSC(
         GQ.Planets.QualityManagement.CAPAs.Trackwise.rowCountID()
      ).invoke('text').then((aRaw) => {
         let aR = aRaw.split(" ");
         let a = aR[0].replaceAll(",", "");
         cy.log(a)
      })
      // Quality Event
      GQ.Planets.QualityManagement.NonConformances.openLandingPage()

      GQ.Planets.QualityManagement.NonConformances.viewTrackwise()
      // Lazy count test
      cy.testLazyCount(
         GQ.Planets.QualityManagement.NonConformances.Trackwise.rowCountID()
      )
      // Print Row Count
      cy.getSC(
         GQ.Planets.QualityManagement.NonConformances.Trackwise.rowCountID()
      ).invoke('text').then((aRaw) => {
         let aR = aRaw.split(" ");
         let a = aR[0].replaceAll(",", "");
         cy.log(a)
      })

      // Product Escalation
      GQ.Planets.QualityManagement.Escalations.openLandingPage()

      GQ.Planets.QualityManagement.Escalations.viewTrackwise()
      // Wait for Row Count
      cy.waitForRowCount(
         GQ.Planets.QualityManagement.Escalations.Trackwise.rowCountID()
      )
      cy.wait(9000)
      // Print Row Count
      cy.getSC(
         GQ.Planets.QualityManagement.Escalations.Trackwise.rowCountID()
      ).invoke('text').then((aRaw) => {
         let aR = aRaw.split(" ");
         let a = aR[0].replaceAll(",", "");
         cy.log(a)
      })
      // Audit
      GQ.Planets.QualityManagement.Audits.openLandingPage()

      GQ.Planets.QualityManagement.Audits.viewTrackwise()
      // Wait for Row Count
      cy.waitForRowCount(
         GQ.Planets.QualityManagement.Audits.Trackwise.rowCountID()
      )
      // Print Row Count
      cy.getSC(
         GQ.Planets.QualityManagement.Audits.Trackwise.rowCountID()
      ).invoke('text').then((aRaw) => {
         let aR = aRaw.split(" ");
         let a = aR[0].replaceAll(",", "");
         cy.log(a)
      })

   })
})