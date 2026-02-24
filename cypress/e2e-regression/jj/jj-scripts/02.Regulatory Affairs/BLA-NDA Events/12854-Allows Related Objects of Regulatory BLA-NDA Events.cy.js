import { GQTest } from '../../../jj-pages/GQTest';
require('cypress-xpath');

// Sprint 7
describe('Sprint 7', () => {
     const GQ = new GQTest();
     it('Regulatory Affairs planet > BLA-NDA Events', () => {
          // Login
          GQ.login();

          GQ.Planets.RegulatoryAffairs.openLandingPage()
          GQ.Planets.RegulatoryAffairs.BLANDA.openLandingPage()
          GQ.Planets.RegulatoryAffairs.BLANDA.expandrecord(1)
          GQ.Planets.RegulatoryAffairs.BLANDA.relatedobject()
          GQ.Planets.RegulatoryAffairs.BLANDA.application()
          GQ.Planets.RegulatoryAffairs.BLANDA.changecontrols()
          GQ.logout()
     })

     it('Product planet > Product Family/Product selection > Regulatory Affairs > BLA-NDA Events', () => {
          GQ.login()

          // Open Product Planet
          GQ.Planets.Product.openLandingPage()

          // Product Families must be visible
          cy.getSC(GQ.Planets.Product.ProductFamilies.locator).should('be.visible')

          // Products must be visible
          cy.getSC(GQ.Planets.Product.Products.locator).should('be.visible')

          // Large Molecules must be visible
          cy.getSC(GQ.Planets.Product.LargeMolecules.locator).should('be.visible')

          // Small Molecules must be visible
          cy.getSC(GQ.Planets.Product.SmallMolecules.locator).should('be.visible')

          // Toggle Filter
          GQ.Planets.Product.ProductFamilies.toggleFilter()

          // Open APALUTAMIDE
          GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')
          GQ.Planets.Product.ProductFamilies.ProductFamily.Content.open()
          GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.openLandingPage()
          GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.BALNDA.openLandingPage()
          GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.BALNDA.expandrecord(2)
          GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.BALNDA.relatedobject()
          GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.BALNDA.applications()
          GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.BALNDA.changecontrols()

          GQ.logout()

     })
     it(' admin binder Smart Content', () => {
          GQ.login()

          // Open Product Planet
          GQ.Planets.Product.openLandingPage()

          // Product Families must be visible
          cy.getSC(GQ.Planets.Product.ProductFamilies.locator).should('be.visible')

          // Products must be visible
          cy.getSC(GQ.Planets.Product.Products.locator).should('be.visible')

          // Large Molecules must be visible
          cy.getSC(GQ.Planets.Product.LargeMolecules.locator).should('be.visible')

          // Small Molecules must be visible
          cy.getSC(GQ.Planets.Product.SmallMolecules.locator).should('be.visible')

          // Toggle Filter
          GQ.Planets.Product.ProductFamilies.toggleFilter()

          // Open APALUTAMIDE
          GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')
          GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector();
          GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test Admin Binder');
          GQ.Planets.Product.ProductFamilies.ProductFamily.RegulatoryRecords.openLandingPage()
          GQ.Planets.Product.ProductFamilies.ProductFamily.RegulatoryRecords.BALNDA()
          GQ.Planets.Product.ProductFamilies.ProductFamily.RegulatoryRecords.expandrecord(1)
          GQ.Planets.Product.ProductFamilies.ProductFamily.RegulatoryRecords.relatedobject()
          cy.contains('Application').should('be.visible')
          GQ.Planets.Product.ProductFamilies.ProductFamily.RegulatoryRecords.changecontrol()

          GQ.logout()

     })

     it('user data binder Smart Content  ', () => {
          GQ.login()

          // Open Product Planet
          GQ.Planets.Product.openLandingPage()

          // Product Families must be visible
          cy.getSC(GQ.Planets.Product.ProductFamilies.locator).should('be.visible')

          // Products must be visible
          cy.getSC(GQ.Planets.Product.Products.locator).should('be.visible')

          // Large Molecules must be visible
          cy.getSC(GQ.Planets.Product.LargeMolecules.locator).should('be.visible')

          // Small Molecules must be visible
          cy.getSC(GQ.Planets.Product.SmallMolecules.locator).should('be.visible')

          // Toggle Filter
          GQ.Planets.Product.ProductFamilies.toggleFilter()

          // Open APALUTAMIDE
          GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')
          // Select Refresh
          GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector()

          // Select New Binder
          GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('Attachment Tester')

          //Click Smart Content
          // GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.open()
          GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.RegulatoryRecords.BLANDAUser()
          GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.RegulatoryRecords.open()
          GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.RegulatoryRecords.BLANDA()
          GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.RegulatoryRecords.expandrecord(2)
          GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.RegulatoryRecords.relatedobject()

          cy.contains('Applications').should('be.visible')
          GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.SmartContent.RegulatoryRecords.changecontrol()


          GQ.logout()

     })
     it('Product specific  binder binder Smart Content', () => {
          GQ.login()

          // Open Product Planet
          GQ.Planets.Product.openLandingPage()

          // Product Families must be visible
          cy.getSC(GQ.Planets.Product.ProductFamilies.locator).should('be.visible')

          // Products must be visible
          cy.getSC(GQ.Planets.Product.Products.locator).should('be.visible')

          // Large Molecules must be visible
          cy.getSC(GQ.Planets.Product.LargeMolecules.locator).should('be.visible')

          // Small Molecules must be visible
          cy.getSC(GQ.Planets.Product.SmallMolecules.locator).should('be.visible')

          // Toggle Filter
          GQ.Planets.Product.ProductFamilies.toggleFilter()

          // Open APALUTAMIDE
          GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')
          // Select Refresh
          GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector();
          GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test Admin Binder');

          // Open Product Specific Binder
          GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.openlandingpage();
          GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.Name('Test');
          GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.dropdown();
          GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.selectall()
          // Click Plus
          GQ.Planets.Product.ProductFamilies.ProductFamily.clickPlusIcon('MSAT Product View - Cypress Test Admin Binder')

          // Click Child
          GQ.Planets.Product.ProductFamilies.ProductFamily.clickChild('MSAT Product View - Cypress Test Admin Binder')
          GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.RegulatoryAffairs()
          GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.BLANDA()
          GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.expand(2)
          GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.relatedobject()
          cy.contains('Applications').should('be.visible')
          GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.changecontrol()
          GQ.logout()






     })
})