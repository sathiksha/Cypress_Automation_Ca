import { GQTest } from '../../jj-pages/GQTest'

describe('12950 Allows History of Admin Binder Override Alias Rule Changes', () => {
  const GQ = new GQTest();
  it('12950 Allows History of Admin Binder Override Alias Rule Changes', () => {

    // Login 
    GQ.login()

    GQ.Planets.Product.openLandingPage()

    // Product Families
    GQ.Planets.Product.ProductFamilies.openLandingPage()

    // Toggle Filter
    GQ.Planets.Product.ProductFamilies.toggleFilter()

    // Product Record
    GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')

    // Refresh
    GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector()
    // Select the linked binder
    GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test Admin Binder')

    GQ.Planets.Product.ProductFamilies.ProductFamily.AdminBinderProductOpen()
    // Refresh
    GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector()
    // Select the linked binder
    GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test Admin Binder')

    GQ.Planets.Product.ProductFamilies.ProductFamily.AdminBinderProductOpen()

    GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.open()
    // Click documents tab
    // GQ.Planets.Product.ProductFamilies.ProductFamily.Content.Documents.openLandingPage()

    // Click Alias Rule
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.Documents.AliasRule.open()
    
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.Documents.AliasRule.refresh()
    // select Alias Rule dropdown
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.Documents.AliasRule.aliasRuleDropdown()

    // select Alias Rule dropdown option
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.Documents.AliasRule.selectTheAliasRule()

    //Alias Rule Override Save option
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.Documents.AliasRule.saveAliasRules()

    // Select History Tab
    GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.openHistory()

    // Select OverrideALiasrule changes Blue tab
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.Documents.AliasRule.clickOverrideAliasRuleChangesTab()

    // Select truVAULT record option
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.Documents.AliasRule.selectTruVAULtrecord()

    // Click refresh icon in truVAULT record option selected response
    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.Documents.AliasRule.clickRefreshIcon()

    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.Documents.AliasRule.getDateandTime()

    GQ.logout()
  })
})


