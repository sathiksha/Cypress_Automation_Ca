import { GQTest } from '../../jnj-pages/GQTest'

describe('8734_Alias Rule Validation', () => {
  const GQ = new GQTest()

  //Content
  it('8734_Alias Rule Validation - Product > Content > Document', () => {
    // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.openPlanet('Product')

    //Toggle Filter
    GQ.Planets.Product.ProductFamily.toggleFilter()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

    // Click Content
    GQ.Planets.Product.ProductFamily.Content.open()

    //click Document
    GQ.Planets.Product.ProductFamily.Content.Documents.open()

    GQ.Planets.Product.ProductFamily.Content.Documents.aliasRule.open()

    GQ.Planets.Product.ProductFamily.Content.Documents.aliasRule.removeAliasRuleBeforeEdit()

    GQ.Planets.Product.ProductFamily.Content.Documents.aliasRule.chooseFieldDropDown()

    GQ.Planets.Product.ProductFamily.Content.Documents.aliasRule.FieldSelelect()

    GQ.Planets.Product.ProductFamily.Content.Documents.aliasRule.EnterValue()

    GQ.Planets.Product.ProductFamily.Content.Documents.aliasRule.saveButton()

    GQ.Planets.Product.ProductFamily.Content.Documents.aliasRule.Filtered()

    GQ.Planets.Product.ProductFamily.Content.Documents.aliasRule.minimizecard()

    GQ.Planets.Product.ProductFamily.Content.Documents.aliasRule.refresh()

    GQ.Planets.Product.ProductFamily.Content.Documents.aliasRule.aliasValidation()

    GQ.Logout()


  })

  it('8734_Alias Rule Validation - Product > Content > Regulatory Affairs', () => {
    // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.openPlanet('Product')

    //Toggle Filter
    GQ.Planets.Product.ProductFamily.toggleFilter()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

    // Click Content
    GQ.Planets.Product.ProductFamily.Content.open()

    //Regulatory Affairs
    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.open()

    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.Products.open()

    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.Products.aliasRule.open()

    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.Products.aliasRule.removeAliasRuleBeforeEdit()

    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.Products.aliasRule.chooseFieldDropDown()

    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.Products.aliasRule.FieldSelelect()

    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.Products.aliasRule.EnterValue()

    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.Products.aliasRule.saveButton()

    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.Products.aliasRule.Filtered()

    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.Products.aliasRule.minimizecard()

    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.Products.aliasRule.refresh()

    GQ.Planets.Product.ProductFamily.Content.RegulatoryAffairs.Products.aliasRule.aliasValidation()

    GQ.Logout()



  })

  it('8734_Alias Rule Validation - Product > Content > Post Market', () => {
    // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.openPlanet('Product')

    //Toggle Filter
    GQ.Planets.Product.ProductFamily.toggleFilter()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

    // Click Content
    GQ.Planets.Product.ProductFamily.Content.open()

    //PostMarket
    GQ.Planets.Product.ProductFamily.Content.PostMarket.open()

    GQ.Planets.Product.ProductFamily.Content.PostMarket.Complaintrecords.open()

    GQ.Planets.Product.ProductFamily.Content.PostMarket.Complaintrecords.aliasRule.open()

    GQ.Planets.Product.ProductFamily.Content.PostMarket.Complaintrecords.aliasRule.removeAliasRuleBeforeEdit()

    GQ.Planets.Product.ProductFamily.Content.PostMarket.Complaintrecords.aliasRule.chooseFieldDropDown()

    GQ.Planets.Product.ProductFamily.Content.PostMarket.Complaintrecords.aliasRule.FieldSelelect()

    GQ.Planets.Product.ProductFamily.Content.PostMarket.Complaintrecords.aliasRule.EnterValue()

    GQ.Planets.Product.ProductFamily.Content.PostMarket.Complaintrecords.aliasRule.saveButton()

    GQ.Planets.Product.ProductFamily.Content.PostMarket.Complaintrecords.aliasRule.Filtered()

    GQ.Planets.Product.ProductFamily.Content.PostMarket.Complaintrecords.aliasRule.minimizecard()

    GQ.Planets.Product.ProductFamily.Content.PostMarket.Complaintrecords.aliasRule.refresh()

    GQ.Planets.Product.ProductFamily.Content.PostMarket.Complaintrecords.aliasRule.aliasValidation()

    GQ.Logout()

  })

  it('8734_Alias Rule Validation - Product > Content > QualityManagement > ChangeControls', () => {
    // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.openPlanet('Product')

    //Toggle Filter
    GQ.Planets.Product.ProductFamily.toggleFilter()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

    // Click Content
    GQ.Planets.Product.ProductFamily.Content.open()

    //QualityManagement
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.open()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.open()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.Changecontrols.open()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.Changecontrols.aliasRule.open()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.Changecontrols.aliasRule.removeAliasRuleBeforeEdit()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.Changecontrols.aliasRule.chooseFieldDropDown()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.Changecontrols.aliasRule.FieldSelelect()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.Changecontrols.aliasRule.EnterValue()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.Changecontrols.aliasRule.saveButton()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.Changecontrols.aliasRule.Filtered()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.Changecontrols.aliasRule.minimizecard()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.Changecontrols.aliasRule.refresh()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.Changecontrols.aliasRule.aliasValidation()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.ChangeControls.Changecontrols.aliasRule.refresh()

    GQ.Logout()

  })

  it('8734_Alias Rule Validation - Product > Content > QualityManagement > Escalations', () => {

    GQ.Login()

    // Open Product
    GQ.Planets.openPlanet('Product')

    //Toggle Filter
    GQ.Planets.Product.ProductFamily.toggleFilter()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

    // Click Content
    GQ.Planets.Product.ProductFamily.Content.open()

    //QualityManagement
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.open()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.open()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.cometEscalations.open()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.cometEscalations.open()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.cometEscalations.aliasRule.open()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.cometEscalations.aliasRule.removeAliasRuleBeforeEdit()

    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.cometEscalations.aliasRule.chooseFieldDropDown()

    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.cometEscalations.aliasRule.FieldSelelect()

    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.cometEscalations.aliasRule.EnterValue()

    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.cometEscalations.aliasRule.saveButton()

    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.cometEscalations.aliasRule.Filtered()

    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.cometEscalations.aliasRule.minimizecard()

    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.cometEscalations.aliasRule.refresh()

    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.cometEscalations.aliasRule.aliasValidation()

    // GQ.Planets.Product.ProductFamily.Content.QualityManagement.Escalations.cometEscalations.aliasRule.removeAliasRule()

  });

  it('8734_Alias Rule Validation - Product > Content > QualityManagement > Nonconformances', () => {

    GQ.Login()

    // Open Product
    GQ.Planets.openPlanet('Product')

    //Toggle Filter
    GQ.Planets.Product.ProductFamily.toggleFilter()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

    // Click Content
    GQ.Planets.Product.ProductFamily.Content.open()

    //QualityManagement
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.open()

    //Nonconformances
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.open()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NonConformances.open()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NonConformances.aliasRule.open()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NonConformances.aliasRule.removeAliasRuleBeforeEdit()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NonConformances.aliasRule.chooseFieldDropDown()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NonConformances.aliasRule.FieldSelelect()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NonConformances.aliasRule.EnterValue()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NonConformances.aliasRule.saveButton()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NonConformances.aliasRule.Filtered()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NonConformances.aliasRule.refresh()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NonConformances.aliasRule.aliasValidation()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Nonconformances.NonConformances.aliasRule.refresh()


  });

  it('8734_Alias Rule Validation - Product > Content > QualityManagement > CAPAs', () => {

    GQ.Login()

    // Open Product
    GQ.Planets.openPlanet('Product')

    //Toggle Filter
    GQ.Planets.Product.ProductFamily.toggleFilter()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

    // Click Content
    GQ.Planets.Product.ProductFamily.Content.open()

    //QualityManagement
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.open()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.cometCAPAs.open()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.cometCAPAs.aliasRule.open()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.cometCAPAs.aliasRule.removeAliasRuleBeforeEdit()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.cometCAPAs.aliasRule.chooseFieldDropDown()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.cometCAPAs.aliasRule.FieldSelelect()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.cometCAPAs.aliasRule.EnterValue()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.cometCAPAs.aliasRule.saveButton()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.cometCAPAs.aliasRule.Filtered()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.cometCAPAs.aliasRule.minimizecard()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.cometCAPAs.aliasRule.refresh()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.cometCAPAs.aliasRule.aliasValidation()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.CAPAs.cometCAPAs.aliasRule.refresh()


  });

  it('8734_Alias Rule Validation - Product > Content > QualityManagement > Audits', () => {

    GQ.Login()

    // Open Product
    GQ.Planets.openPlanet('Product')

    //Toggle Filter
    GQ.Planets.Product.ProductFamily.toggleFilter()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

    // Click Content
    GQ.Planets.Product.ProductFamily.Content.open()

    //QualityManagement
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.open()

    //Audits
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Audits.open()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Audits.audits.open()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Audits.audits.aliasRule.open()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Audits.audits.aliasRule.removeAliasRuleBeforeEdit()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Audits.audits.aliasRule.chooseFieldDropDown()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Audits.audits.aliasRule.FieldSelelect()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Audits.audits.aliasRule.EnterValue()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Audits.audits.aliasRule.saveButton()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Audits.audits.aliasRule.Filtered()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Audits.audits.aliasRule.minimizecard()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Audits.audits.aliasRule.refresh()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Audits.audits.aliasRule.aliasValidation()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Audits.audits.aliasRule.refresh()
  });

  it('8734_Alias Rule Validation - Product > Content > QualityManagement > Account', () => {

    GQ.Login()

    // Open Product
    GQ.Planets.openPlanet('Product')

    //Toggle Filter
    GQ.Planets.Product.ProductFamily.toggleFilter()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

    // Click Content
    GQ.Planets.Product.ProductFamily.Content.open()

    //QualityManagement
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.open()

    //Account
    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Accounts.open()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Accounts.aliasRule.open()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Accounts.aliasRule.removeAliasRuleBeforeEdit()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Accounts.aliasRule.chooseFieldDropDown()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Accounts.aliasRule.FieldSelelect()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Accounts.aliasRule.EnterValue()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Accounts.aliasRule.saveButton()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Accounts.aliasRule.Filtered()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Accounts.aliasRule.minimizecard()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Accounts.aliasRule.refresh()

    GQ.Planets.Product.ProductFamily.Content.QualityManagement.Accounts.aliasRule.aliasValidation()

  });

  it('8734_Alias Rule Validation - Product > Content > Laboratory Information', () => {
    // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.openPlanet('Product')

    //Toggle Filter
    GQ.Planets.Product.ProductFamily.toggleFilter()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

    // Click Content
    GQ.Planets.Product.ProductFamily.Content.open()


    GQ.Planets.Product.ProductFamily.Content.LaboratoryInformation.open()

    GQ.Planets.Product.ProductFamily.Content.LaboratoryInformation.StabilityData.open()

    GQ.Planets.Product.ProductFamily.Content.LaboratoryInformation.StabilityData.aliasRule.open()

    GQ.Planets.Product.ProductFamily.Content.LaboratoryInformation.StabilityData.aliasRule.removeAliasRuleBeforeEdit()

    GQ.Planets.Product.ProductFamily.Content.LaboratoryInformation.StabilityData.aliasRule.chooseFieldDropDown()

    GQ.Planets.Product.ProductFamily.Content.LaboratoryInformation.StabilityData.aliasRule.FieldSelelect()

    GQ.Planets.Product.ProductFamily.Content.LaboratoryInformation.StabilityData.aliasRule.EnterValue()

    GQ.Planets.Product.ProductFamily.Content.LaboratoryInformation.StabilityData.aliasRule.saveButton()

    GQ.Planets.Product.ProductFamily.Content.LaboratoryInformation.StabilityData.aliasRule.Filtered()

    GQ.Planets.Product.ProductFamily.Content.LaboratoryInformation.StabilityData.aliasRule.refresh()

    GQ.Planets.Product.ProductFamily.Content.LaboratoryInformation.StabilityData.aliasRule.aliasValidation()


    GQ.Logout()



  })

  it('8734_Alias Rule Validation - Product > Content > Manufacturing', () => {
    // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.openPlanet('Product')

    //Toggle Filter
    GQ.Planets.Product.ProductFamily.toggleFilter()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

    // Click Content
    GQ.Planets.Product.ProductFamily.Content.open()

    //Manufacturing
    GQ.Planets.Product.ProductFamily.Content.Manufacturing.open()

    GQ.Planets.Product.ProductFamily.Content.Manufacturing.Materials.aliasRule.open()

    GQ.Planets.Product.ProductFamily.Content.Manufacturing.Materials.aliasRule.removeAliasRuleBeforeEdit()

    GQ.Planets.Product.ProductFamily.Content.Manufacturing.Materials.aliasRule.chooseFieldDropDown()

    GQ.Planets.Product.ProductFamily.Content.Manufacturing.Materials.aliasRule.FieldSelelect()

    GQ.Planets.Product.ProductFamily.Content.Manufacturing.Materials.aliasRule.EnterValue()

    GQ.Planets.Product.ProductFamily.Content.Manufacturing.Materials.aliasRule.saveButton()

    GQ.Planets.Product.ProductFamily.Content.Manufacturing.Materials.aliasRule.Filtered()

    GQ.Planets.Product.ProductFamily.Content.Manufacturing.Materials.aliasRule.minimizecard()

    GQ.Planets.Product.ProductFamily.Content.Manufacturing.Materials.aliasRule.refresh()

    GQ.Planets.Product.ProductFamily.Content.Manufacturing.Materials.aliasRule.aliasValidation()

    GQ.Logout()



  })



  //Admin
  it('8734_Alias Rule Validation - Product > Admin > SmartContent > Document', () => {
    // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.openPlanet('Product')

    //Toggle Filter
    GQ.Planets.Product.ProductFamily.toggleFilter()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

    // Click Admin Data Binder
    GQ.Planets.Product.ProductFamily.AdminDataBinder.open('MSAT Product View - Cypress Test Admin Binder')

    // Admin Data Binder - Smart Content
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.open()

    //click Document
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Documents.open()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Documents.aliasRule.open()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Documents.aliasRule.removeAliasRuleBeforeEdit()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Documents.aliasRule.chooseFieldDropDown()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Documents.aliasRule.FieldSelelect()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Documents.aliasRule.EnterValue()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Documents.aliasRule.saveButton()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Documents.aliasRule.Filtered()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Documents.aliasRule.minimizecard()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Documents.aliasRule.refresh()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Documents.aliasRule.aliasValidation()

    GQ.Logout()



  })

  it('8734_Alias Rule Validation - Product > Admin > Smart Content > Regulatory Affairs', () => {
    // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.openPlanet('Product')

    //Toggle Filter
    GQ.Planets.Product.ProductFamily.toggleFilter()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

    // Click Admin Data Binder
    GQ.Planets.Product.ProductFamily.AdminDataBinder.open('MSAT Product View - Cypress Test Admin Binder')

    // Admin Data Binder - Smart Content
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.open()
    //Regulatory Affairs
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.open()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.Products.open()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.Products.aliasRule.open()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.Products.aliasRule.removeAliasRuleBeforeEdit()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.Products.aliasRule.chooseFieldDropDown()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.Products.aliasRule.FieldSelelect()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.Products.aliasRule.EnterValue()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.Products.aliasRule.saveButton()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.Products.aliasRule.Filtered()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.Products.aliasRule.refresh()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.RegulatoryAffairs.Products.aliasRule.aliasValidation()

    GQ.Logout()


  })

  it('8734_Alias Rule Validation -  Product > Admin > SmartContent > Post Market', () => {
    // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.openPlanet('Product')

    //Toggle Filter
    GQ.Planets.Product.ProductFamily.toggleFilter()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

    // Click Admin Data Binder
    GQ.Planets.Product.ProductFamily.AdminDataBinder.open('MSAT Product View - Cypress Test Admin Binder')

    // Admin Data Binder - Smart Content
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.open()

    //click Document
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PostMarket.open()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PostMarket.Complaintrecords.open()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PostMarket.Complaintrecords.aliasRule.open()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PostMarket.Complaintrecords.aliasRule.removeAliasRuleBeforeEdit()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PostMarket.Complaintrecords.aliasRule.chooseFieldDropDown()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PostMarket.Complaintrecords.aliasRule.FieldSelelect()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PostMarket.Complaintrecords.aliasRule.EnterValue()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PostMarket.Complaintrecords.aliasRule.saveButton()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PostMarket.Complaintrecords.aliasRule.Filtered()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PostMarket.Complaintrecords.aliasRule.refresh()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.PostMarket.Complaintrecords.aliasRule.aliasValidation()

    GQ.Logout()



  })

  it('8734_Alias Rule Validation - Product > Admin > SmartContent > QualityManagement > Change Contorls', () => {
    // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.openPlanet('Product')

    //Toggle Filter
    GQ.Planets.Product.ProductFamily.toggleFilter()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

    // Click Admin Data Binder
    GQ.Planets.Product.ProductFamily.AdminDataBinder.open('MSAT Product View - Cypress Test Admin Binder')

    // Admin Data Binder - Smart Content
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.open()

    //click Document
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.open()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.open()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.aliasRule.open()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.aliasRule.removeAliasRuleBeforeEdit()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.aliasRule.chooseFieldDropDown()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.aliasRule.FieldSelelect()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.aliasRule.EnterValue()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.aliasRule.saveButton()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.aliasRule.Filtered()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.aliasRule.minimizecard()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.aliasRule.refresh()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.aliasRule.aliasValidation()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.aliasRule.refresh()

  })

  it('8734_Alias Rule Validation - Product > Admin > SmartContent > QualityManagement > Escalations', () => {

    GQ.Login()

    // Open Product
    GQ.Planets.openPlanet('Product')

    //Toggle Filter
    GQ.Planets.Product.ProductFamily.toggleFilter()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

    // Click Admin Data Binder
    GQ.Planets.Product.ProductFamily.AdminDataBinder.open('MSAT Product View - Cypress Test Admin Binder')

    // Admin Data Binder - Smart Content
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.open()

    //click Document
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.open()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.open()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.open()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.open()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.aliasRule.open()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.aliasRule.removeAliasRuleBeforeEdit()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.aliasRule.chooseFieldDropDown()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.aliasRule.FieldSelelect()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.aliasRule.EnterValue()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.aliasRule.saveButton()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.aliasRule.Filtered()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.aliasRule.minimizecard()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.aliasRule.refresh()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.aliasRule.aliasValidation()
  });

  it('8734_Alias Rule Validation - Product > Admin > SmartContent > QualityManagement > Nonconformances', () => {

    GQ.Login()

    // Open Product
    GQ.Planets.openPlanet('Product')

    //Toggle Filter
    GQ.Planets.Product.ProductFamily.toggleFilter()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

    GQ.Planets.Product.ProductFamily.AdminDataBinder.open('MSAT Product View - Cypress Test Admin Binder')

    // Admin Data Binder - Smart Content
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.open()

    //click Document
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.open()

    //Nonconformances
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.open()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.open()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.aliasRule.open()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.aliasRule.removeAliasRuleBeforeEdit()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.aliasRule.chooseFieldDropDown()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.aliasRule.FieldSelelect()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.aliasRule.EnterValue()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.aliasRule.saveButton()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.aliasRule.Filtered()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.aliasRule.refresh()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.aliasRule.aliasValidation()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.aliasRule.refresh()


  });

  it('8734_Alias Rule Validation - Product > Admin > SmartContent > QualityManagement > CAPAs', () => {

    GQ.Login()

    // Open Product
    GQ.Planets.openPlanet('Product')

    //Toggle Filter
    GQ.Planets.Product.ProductFamily.toggleFilter()
    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

    GQ.Planets.Product.ProductFamily.AdminDataBinder.open('MSAT Product View - Cypress Test Admin Binder')

    // Admin Data Binder - Smart Content
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.open()

    //click Document
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.open()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.open()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.aliasRule.open()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.aliasRule.removeAliasRuleBeforeEdit()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.aliasRule.chooseFieldDropDown()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.aliasRule.FieldSelelect()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.aliasRule.EnterValue()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.aliasRule.saveButton()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.aliasRule.Filtered()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.aliasRule.minimizecard()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.aliasRule.refresh()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.aliasRule.aliasValidation()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.aliasRule.refresh()


  });

  it('8734_Alias Rule Validation - Product > Admin > QualityManagement > Audits', () => {

    GQ.Login()

    // Open Product
    GQ.Planets.openPlanet('Product')

    //Toggle Filter
    GQ.Planets.Product.ProductFamily.toggleFilter()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

    GQ.Planets.Product.ProductFamily.AdminDataBinder.open('MSAT Product View - Cypress Test Admin Binder')

    // Admin Data Binder - Smart Content
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.open()

    //click Document
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.open()

    //Audits
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Audits.open()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Audits.audits.aliasRule.open()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Audits.audits.aliasRule.removeAliasRuleBeforeEdit()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Audits.audits.aliasRule.chooseFieldDropDown()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Audits.audits.aliasRule.FieldSelelect()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Audits.audits.aliasRule.EnterValue()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Audits.audits.aliasRule.saveButton()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Audits.audits.aliasRule.Filtered()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Audits.audits.aliasRule.minimizecard()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Audits.audits.aliasRule.refresh()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Audits.audits.aliasRule.aliasValidation()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Audits.audits.aliasRule.refresh()
  });

  it('8734_Alias Rule Validation - Product > Admin > QualityManagement > Account', () => {

    GQ.Login()

    // Open Product
    GQ.Planets.openPlanet('Product')

    //Toggle Filter
    GQ.Planets.Product.ProductFamily.toggleFilter()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

    GQ.Planets.Product.ProductFamily.AdminDataBinder.open('MSAT Product View - Cypress Test Admin Binder')

    // Admin Data Binder - Smart Content
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.open()

    //click Document
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.open()

    //Account
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Accounts.open()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Accounts.aliasRule.open()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Accounts.aliasRule.removeAliasRuleBeforeEdit()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Accounts.aliasRule.chooseFieldDropDown()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Accounts.aliasRule.FieldSelelect()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Accounts.aliasRule.EnterValue()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Accounts.aliasRule.saveButton()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Accounts.aliasRule.Filtered()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Accounts.aliasRule.minimizecard()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Accounts.aliasRule.refresh()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.Accounts.aliasRule.aliasValidation()

  });

  it('8734_Alias Rule Validation -  Product > Admin > SmartContent > Laboratory Information', () => {
    // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.openPlanet('Product')

    //Toggle Filter
    GQ.Planets.Product.ProductFamily.toggleFilter()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

    // Click Admin Data Binder
    GQ.Planets.Product.ProductFamily.AdminDataBinder.open('MSAT Product View - Cypress Test Admin Binder')

    // Admin Data Binder - Smart Content
    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.open()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.LaboratoryInformation.open()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.LaboratoryInformation.StabilityData.open()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.LaboratoryInformation.StabilityData.aliasRule.open()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.LaboratoryInformation.StabilityData.aliasRule.removeAliasRuleBeforeEdit()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.LaboratoryInformation.StabilityData.aliasRule.chooseFieldDropDown()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.LaboratoryInformation.StabilityData.aliasRule.FieldSelelect()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.LaboratoryInformation.StabilityData.aliasRule.EnterValue()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.LaboratoryInformation.StabilityData.aliasRule.saveButton()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.LaboratoryInformation.StabilityData.aliasRule.Filtered()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.LaboratoryInformation.StabilityData.aliasRule.refresh()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.LaboratoryInformation.StabilityData.aliasRule.aliasValidation()


    GQ.Logout()



  })

  it('8734_Alias Rule Validation -  Product > Admin > SmartContent > Manufacturing', () => {
    // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.openPlanet('Product')

    //Toggle Filter
    GQ.Planets.Product.ProductFamily.toggleFilter()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')
    // Click Admin Data Binder
    GQ.Planets.Product.ProductFamily.AdminDataBinder.open('MSAT Product View - Cypress Test Admin Binder')

    // Admin Data Binder - Smart Content
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.open()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Manufacturing.open()

    GQ.Planets.Product.ProductFamily.AdminDataBinder.SmartContent.Manufacturing.Materials.aliasRule.open()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Manufacturing.Materials.aliasRule.removeAliasRuleBeforeEdit()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Manufacturing.Materials.aliasRule.chooseFieldDropDown()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Manufacturing.Materials.aliasRule.FieldSelelect()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Manufacturing.Materials.aliasRule.EnterValue()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Manufacturing.Materials.aliasRule.saveButton()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Manufacturing.Materials.aliasRule.Filtered()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Manufacturing.Materials.aliasRule.refresh()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Manufacturing.Materials.aliasRule.aliasValidation()

    GQ.Logout()



  })


  //User
  it('8734_Alias Rule Validation - User > SmartContent > Document', () => {
    // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.openPlanet('Product')

    //Toggle Filter
    GQ.Planets.Product.ProductFamily.toggleFilter()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

    // Click User Data Binder
    GQ.Planets.Product.ProductFamily.UserDataBinder.open('MSAT Product View - Cypress Test User Data Binder')

    // User Data Binder - Smart Content
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.open()

    //click Document
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Documents.open()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Documents.aliasRule.open()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Documents.aliasRule.removeAliasRuleBeforeEdit()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Documents.aliasRule.chooseFieldDropDown()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Documents.aliasRule.FieldSelelect()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Documents.aliasRule.EnterValue()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Documents.aliasRule.saveButton()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Documents.aliasRule.Filtered()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Documents.aliasRule.minimizecard()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Documents.aliasRule.refresh()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Documents.aliasRule.aliasValidation()

    GQ.Logout()



  })

  it('8734_Alias Rule Validation - User > SmartContent > Regulatory Affairs', () => {
    // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.openPlanet('Product')

    //Toggle Filter
    GQ.Planets.Product.ProductFamily.toggleFilter()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

    // Click User Data Binder
    GQ.Planets.Product.ProductFamily.UserDataBinder.open('MSAT Product View - Cypress Test User Data Binder')

    // User Data Binder - Smart Content
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.open()

    //click Document
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.open()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.Products.open()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.Products.aliasRule.open()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.Products.aliasRule.removeAliasRuleBeforeEdit()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.Products.aliasRule.chooseFieldDropDown()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.Products.aliasRule.FieldSelelect()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.Products.aliasRule.EnterValue()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.Products.aliasRule.saveButton()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.Products.aliasRule.Filtered()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.Products.aliasRule.minimizecard()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.Products.aliasRule.refresh()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.RegulatoryAffairs.Products.aliasRule.aliasValidation()

    GQ.Logout()



  })

  it('8734_Alias Rule Validation - User > SmartContent > Post Market', () => {
    // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.openPlanet('Product')

    //Toggle Filter
    GQ.Planets.Product.ProductFamily.toggleFilter()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

    // Click User Data Binder
    GQ.Planets.Product.ProductFamily.UserDataBinder.open('MSAT Product View - Cypress Test User Data Binder')

    // User Data Binder - Smart Content
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.open()

    //click Document
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PostMarket.open()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PostMarket.Complaintrecords.open()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PostMarket.Complaintrecords.aliasRule.open()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PostMarket.Complaintrecords.aliasRule.removeAliasRuleBeforeEdit()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PostMarket.Complaintrecords.aliasRule.chooseFieldDropDown()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PostMarket.Complaintrecords.aliasRule.FieldSelelect()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PostMarket.Complaintrecords.aliasRule.EnterValue()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PostMarket.Complaintrecords.aliasRule.saveButton()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PostMarket.Complaintrecords.aliasRule.Filtered()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PostMarket.Complaintrecords.aliasRule.minimizecard()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PostMarket.Complaintrecords.aliasRule.refresh()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.PostMarket.Complaintrecords.aliasRule.aliasValidation()

    GQ.Logout()



  })

  it('8734_Alias Rule Validation - User > SmartContent > QualityManagement > Change Controls', () => {
    // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.openPlanet('Product')

    //Toggle Filter
    GQ.Planets.Product.ProductFamily.toggleFilter()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

    // Click Admin Data Binder
    GQ.Planets.Product.ProductFamily.UserDataBinder.open('MSAT Product View - Cypress Test User Data Binder')

    // Admin Data Binder - Smart Content
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.open()

    //click Document
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.open()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.open()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.aliasRule.open()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.aliasRule.removeAliasRuleBeforeEdit()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.aliasRule.chooseFieldDropDown()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.aliasRule.FieldSelelect()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.aliasRule.EnterValue()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.aliasRule.saveButton()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.aliasRule.Filtered()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.aliasRule.minimizecard()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.aliasRule.refresh()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.aliasRule.aliasValidation()

    GQ.Logout()

  })

  it('8734_Alias Rule Validation - User > SmartContent > QualityManagement > Escalations', () => {

    GQ.Login()

    // Open Product
    GQ.Planets.openPlanet('Product')

    //Toggle Filter
    GQ.Planets.Product.ProductFamily.toggleFilter()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

    // Click Admin Data Binder
    GQ.Planets.Product.ProductFamily.UserDataBinder.open('MSAT Product View - Cypress Test User Data Binder')

    // Admin Data Binder - Smart Content
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.open()

    //click Document
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.open()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.open()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.open()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.open()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.aliasRule.open()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.aliasRule.removeAliasRuleBeforeEdit()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.aliasRule.chooseFieldDropDown()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.aliasRule.FieldSelelect()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.aliasRule.EnterValue()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.aliasRule.saveButton()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.aliasRule.Filtered()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.aliasRule.minimizecard()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.aliasRule.refresh()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Escalations.cometEscalations.aliasRule.aliasValidation()


  });

  it('8734_Alias Rule Validation - User > SmartContent > QualityManagement > Nonconformances', () => {

    GQ.Login()

    // Open Product
    GQ.Planets.openPlanet('Product')

    //Toggle Filter
    GQ.Planets.Product.ProductFamily.toggleFilter()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')
    // Click Admin Data Binder
    GQ.Planets.Product.ProductFamily.UserDataBinder.open('MSAT Product View - Cypress Test User Data Binder')

    // Admin Data Binder - Smart Content
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.open()

    //click Document
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.open()
    //Nonconformances
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.open()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.open()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.aliasRule.open()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.aliasRule.removeAliasRuleBeforeEdit()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.aliasRule.chooseFieldDropDown()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.aliasRule.FieldSelelect()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.aliasRule.EnterValue()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.aliasRule.saveButton()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.aliasRule.Filtered()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.aliasRule.refresh()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.aliasRule.aliasValidation()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.aliasRule.refresh()


  });

  it('8734_Alias Rule Validation - User > SmartContent > QualityManagement > CAPAs', () => {

    GQ.Login()

    // Open Product
    GQ.Planets.openPlanet('Product')

    //Toggle Filter
    GQ.Planets.Product.ProductFamily.toggleFilter()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

    // Click Admin Data Binder
    GQ.Planets.Product.ProductFamily.UserDataBinder.open('MSAT Product View - Cypress Test User Data Binder')

    // Admin Data Binder - Smart Content
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.open()

    //click Document
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.open()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.open()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.aliasRule.open()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.aliasRule.removeAliasRuleBeforeEdit()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.aliasRule.chooseFieldDropDown()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.aliasRule.FieldSelelect()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.aliasRule.EnterValue()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.aliasRule.saveButton()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.aliasRule.Filtered()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.aliasRule.refresh()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.aliasRule.aliasValidation()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.CAPAs.cometCAPAs.aliasRule.refresh()


  });

  it('8734_Alias Rule Validation - User > SmartContent > QualityManagement > Audits', () => {

    GQ.Login()

    // Open Product
    GQ.Planets.openPlanet('Product')

    //Toggle Filter
    GQ.Planets.Product.ProductFamily.toggleFilter()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')


    GQ.Planets.Product.ProductFamily.UserDataBinder.open('MSAT Product View - Cypress Test User Data Binder')

    // Admin Data Binder - Smart Content
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.open()

    //click Document
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.open()
    //Audits
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Audits.open()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Audits.audits.open()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Audits.audits.aliasRule.open()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Audits.audits.aliasRule.removeAliasRuleBeforeEdit()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Audits.audits.aliasRule.chooseFieldDropDown()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Audits.audits.aliasRule.FieldSelelect()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Audits.audits.aliasRule.EnterValue()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Audits.audits.aliasRule.saveButton()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Audits.audits.aliasRule.Filtered()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Audits.audits.aliasRule.refresh()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Audits.audits.aliasRule.aliasValidation()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Audits.audits.aliasRule.refresh()
  });

  it('8734_Alias Rule Validation - User > SmartContent > QualityManagement > Account', () => {

    GQ.Login()

    // Open Product
    GQ.Planets.openPlanet('Product')

    //Toggle Filter
    GQ.Planets.Product.ProductFamily.toggleFilter()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

    GQ.Planets.Product.ProductFamily.UserDataBinder.open('MSAT Product View - Cypress Test User Data Binder')

    // Admin Data Binder - Smart Content
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.open()

    //click Document
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.open()
    //Account
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Accounts.open()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Accounts.aliasRule.open()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Accounts.aliasRule.removeAliasRuleBeforeEdit()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Accounts.aliasRule.chooseFieldDropDown()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Accounts.aliasRule.FieldSelelect()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Accounts.aliasRule.EnterValue()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Accounts.aliasRule.saveButton()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Accounts.aliasRule.Filtered()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Accounts.aliasRule.refresh()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.QualityManagement.Accounts.aliasRule.aliasValidation()

  });

  it('8734_Alias Rule Validation - User > SmartContent > Laboratory Information', () => {
    // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.openPlanet('Product')

    //Toggle Filter
    GQ.Planets.Product.ProductFamily.toggleFilter()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

    // Click User Data Binder
    GQ.Planets.Product.ProductFamily.UserDataBinder.open('MSAT Product View - Cypress Test User Data Binder')

    // User Data Binder - Smart Content
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.open()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.LaboratoryInformation.open()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.LaboratoryInformation.StabilityData.open()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.LaboratoryInformation.StabilityData.aliasRule.open()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.LaboratoryInformation.StabilityData.aliasRule.removeAliasRuleBeforeEdit()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.LaboratoryInformation.StabilityData.aliasRule.chooseFieldDropDown()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.LaboratoryInformation.StabilityData.aliasRule.FieldSelelect()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.LaboratoryInformation.StabilityData.aliasRule.EnterValue()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.LaboratoryInformation.StabilityData.aliasRule.saveButton()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.LaboratoryInformation.StabilityData.aliasRule.Filtered()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.LaboratoryInformation.StabilityData.aliasRule.refresh()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.LaboratoryInformation.StabilityData.aliasRule.aliasValidation()



    GQ.Logout()



  })

  it('8734_Alias Rule Validation - User > SmartContent > Manufacturing', () => {
    // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.openPlanet('Product')

    //Toggle Filter
    GQ.Planets.Product.ProductFamily.toggleFilter()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

    // Click User Data Binder
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.open('MSAT Product View - Cypress Test User Data Binder')

    // User Data Binder - Smart Content
    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.open()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Manufacturing.open()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Manufacturing.Materials.aliasRule.open()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Manufacturing.Materials.aliasRule.removeAliasRuleBeforeEdit()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Manufacturing.Materials.aliasRule.chooseFieldDropDown()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Manufacturing.Materials.aliasRule.FieldSelelect()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Manufacturing.Materials.aliasRule.EnterValue()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Manufacturing.Materials.aliasRule.saveButton()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Manufacturing.Materials.aliasRule.Filtered()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Manufacturing.Materials.aliasRule.refresh()

    GQ.Planets.Product.ProductFamily.UserDataBinder.SmartContent.Manufacturing.Materials.aliasRule.aliasValidation()


    GQ.Logout()



  })

  //Product

  it('8734_Alias Rule Validation - Product Specific Binder > SmartContent > Document', () => {
    // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.openPlanet('Product')

    //Toggle Filter
    GQ.Planets.Product.ProductFamily.toggleFilter()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

    // Click Product Specific Binder
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.openProductBinder('MSAT Product View - Cypress Test Product Specific Binder')

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.open()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Documents.open()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Documents.aliasRule.open()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Documents.aliasRule.removeAliasRuleBeforeEdit()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Documents.aliasRule.chooseFieldDropDown()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Documents.aliasRule.FieldSelelect()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Documents.aliasRule.EnterValue()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Documents.aliasRule.saveButton()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Documents.aliasRule.Filtered()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Documents.aliasRule.refresh()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Documents.aliasRule.aliasValidation()


    GQ.Logout()



  })

  it('8734_Alias Rule Validation - Product Specific > SmartContent > Regulatory Affairs', () => {
    // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.openPlanet('Product')

    //Toggle Filter
    GQ.Planets.Product.ProductFamily.toggleFilter()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.openProductBinder('MSAT Product View - Cypress Test Product Specific Binder')

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.open()

    //click Document
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.open()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.Products.open()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.Products.aliasRule.open()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.Products.aliasRule.removeAliasRuleBeforeEdit()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.Products.aliasRule.chooseFieldDropDown()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.Products.aliasRule.FieldSelelect()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.Products.aliasRule.EnterValue()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.Products.aliasRule.saveButton()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.Products.aliasRule.Filtered()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.Products.aliasRule.refresh()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.RegulatoryAffairs.Products.aliasRule.aliasValidation()

    GQ.Logout()



  })

  it('8734_Alias Rule Validation - Product Specific Binder > SmartContent > Post Market', () => {
    // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.openPlanet('Product')

    //Toggle Filter
    GQ.Planets.Product.ProductFamily.toggleFilter()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')


    // Click Product Specific Binder
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.openProductBinder('MSAT Product View - Cypress Test Product Specific Binder')

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.open()

    //click Document
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PostMarket.open()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PostMarket.Complaintrecords.open()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PostMarket.Complaintrecords.aliasRule.open()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PostMarket.Complaintrecords.aliasRule.removeAliasRuleBeforeEdit()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PostMarket.Complaintrecords.aliasRule.chooseFieldDropDown()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PostMarket.Complaintrecords.aliasRule.FieldSelelect()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PostMarket.Complaintrecords.aliasRule.EnterValue()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PostMarket.Complaintrecords.aliasRule.saveButton()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PostMarket.Complaintrecords.aliasRule.Filtered()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PostMarket.Complaintrecords.aliasRule.refresh()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.PostMarket.Complaintrecords.aliasRule.aliasValidation()


    GQ.Logout()



  })

  it('8734_Alias Rule Validation - Product Specific Binder > SmartContent > QualityManagement > Change Controls', () => {
    // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.openPlanet('Product')

    //Toggle Filter
    GQ.Planets.Product.ProductFamily.toggleFilter()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')


    // Click Product Specific Binder
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.openProductBinder('MSAT Product View - Cypress Test Product Specific Binder')

    // Admin Data Binder - Smart Content
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.open()

    //click Document
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.open()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.open()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.aliasRule.open()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.aliasRule.removeAliasRuleBeforeEdit()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.aliasRule.chooseFieldDropDown()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.aliasRule.FieldSelelect()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.aliasRule.EnterValue()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.aliasRule.saveButton()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.aliasRule.Filtered()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.aliasRule.refresh()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.ChangeControls.Changecontrols.aliasRule.aliasValidation()

    GQ.Logout()

  })

  it('8734_Alias Rule Validation - Product Specific Binder > SmartContent > QualityManagement > Escalations', () => {

    GQ.Login()

    // Open Product
    GQ.Planets.openPlanet('Product')

    //Toggle Filter
    GQ.Planets.Product.ProductFamily.toggleFilter()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')


    // Click Product Specific Binder
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.openProductBinder('MSAT Product View - Cypress Test Product Specific Binder')

    // Admin Data Binder - Smart Content
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.open()

    //click Document
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.open()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.open()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.cometEscalations.open()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.cometEscalations.open()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.cometEscalations.aliasRule.open()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.cometEscalations.aliasRule.removeAliasRuleBeforeEdit()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.cometEscalations.aliasRule.chooseFieldDropDown()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.cometEscalations.aliasRule.FieldSelelect()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.cometEscalations.aliasRule.EnterValue()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.cometEscalations.aliasRule.saveButton()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.cometEscalations.aliasRule.Filtered()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.cometEscalations.aliasRule.refresh()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Escalations.cometEscalations.aliasRule.aliasValidation()

  });

  it('8734_Alias Rule Validation - Product Specific Binder > SmartContent > QualityManagement > Nonconformances', () => {

    GQ.Login()

    // Open Product
    GQ.Planets.openPlanet('Product')

    //Toggle Filter
    GQ.Planets.Product.ProductFamily.toggleFilter()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

    // Click Product Specific Binder
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.openProductBinder('MSAT Product View - Cypress Test Product Specific Binder')

    // Admin Data Binder - Smart Content
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.open()

    //click Document
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.open()

    //Nonconformances
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.open()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.open()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.aliasRule.open()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.aliasRule.removeAliasRuleBeforeEdit()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.aliasRule.chooseFieldDropDown()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.aliasRule.FieldSelelect()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.aliasRule.EnterValue()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.aliasRule.saveButton()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.aliasRule.Filtered()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.aliasRule.refresh()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.aliasRule.aliasValidation()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Nonconformances.NonConformances.aliasRule.refresh()


  });

  it('8734_Alias Rule Validation - Product Specific Binder > SmartContent > QualityManagement > Audits', () => {

    GQ.Login()

    // Open Product
    GQ.Planets.openPlanet('Product')

    //Toggle Filter
    GQ.Planets.Product.ProductFamily.toggleFilter()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

    // Click Product Specific Binder
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.openProductBinder('MSAT Product View - Cypress Test Product Specific Binder')

    // Admin Data Binder - Smart Content
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.open()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.open()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Audits.open()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Audits.audits.open()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Audits.audits.aliasRule.open()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Audits.audits.aliasRule.removeAliasRuleBeforeEdit()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Audits.audits.aliasRule.chooseFieldDropDown()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Audits.audits.aliasRule.FieldSelelect()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Audits.audits.aliasRule.EnterValue()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Audits.audits.aliasRule.saveButton()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Audits.audits.aliasRule.Filtered()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Audits.audits.aliasRule.refresh()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Audits.audits.aliasRule.aliasValidation()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Audits.audits.aliasRule.refresh()
  });

  it('8734_Alias Rule Validation - Product Specific Binder > SmartContent > QualityManagement > Account', () => {

    GQ.Login()

    // Open Product
    GQ.Planets.openPlanet('Product')

    //Toggle Filter
    GQ.Planets.Product.ProductFamily.toggleFilter()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

    // Click Product Specific Binder
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.openProductBinder('MSAT Product View - Cypress Test Product Specific Binder')

    // Admin Data Binder - Smart Content
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.open()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.open()

    //Account
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Accounts.open()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Accounts.aliasRule.open()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Accounts.aliasRule.removeAliasRuleBeforeEdit()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Accounts.aliasRule.chooseFieldDropDown()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Accounts.aliasRule.FieldSelelect()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Accounts.aliasRule.EnterValue()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Accounts.aliasRule.saveButton()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Accounts.aliasRule.Filtered()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Accounts.aliasRule.refresh()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.QualityManagement.Accounts.aliasRule.aliasValidation()

  });

  it('8734_Alias Rule Validation - Product Specific Binder > SmartContent > Laboratory Information', () => {
    // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.openPlanet('Product')

    //Toggle Filter
    GQ.Planets.Product.ProductFamily.toggleFilter()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

    // Click Product Specific Binder
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.openProductBinder('MSAT Product View - Cypress Test Product Specific Binder')

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.open()

    //click Document
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.LaboratoryInformation.open()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.LaboratoryInformation.StabilityData.open()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.LaboratoryInformation.StabilityData.aliasRule.open()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.LaboratoryInformation.StabilityData.aliasRule.removeAliasRuleBeforeEdit()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.LaboratoryInformation.StabilityData.aliasRule.chooseFieldDropDown()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.LaboratoryInformation.StabilityData.aliasRule.FieldSelelect()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.LaboratoryInformation.StabilityData.aliasRule.EnterValue()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.LaboratoryInformation.StabilityData.aliasRule.saveButton()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.LaboratoryInformation.StabilityData.aliasRule.Filtered()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.LaboratoryInformation.StabilityData.aliasRule.refresh()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.LaboratoryInformation.StabilityData.aliasRule.aliasValidation()


    GQ.Logout()



  })

  it('8734_Alias Rule Validation - Product Specific Binder > SmartContent > Manufacturing', () => {
    // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.openPlanet('Product')

    //Toggle Filter
    GQ.Planets.Product.ProductFamily.toggleFilter()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

    // Click Product Specific Binder
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.openProductBinder('MSAT Product View - Cypress Test Product Specific Binder')

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.open()

    //click Document
    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Manufacturing.open()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Manufacturing.Materials.open()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Manufacturing.Materials.aliasRule.open()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Manufacturing.Materials.aliasRule.removeAliasRuleBeforeEdit()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Manufacturing.Materials.aliasRule.chooseFieldDropDown()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Manufacturing.Materials.aliasRule.FieldSelelect()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Manufacturing.Materials.aliasRule.EnterValue()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Manufacturing.Materials.aliasRule.saveButton()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Manufacturing.Materials.aliasRule.Filtered()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Manufacturing.Materials.aliasRule.refresh()

    GQ.Planets.Product.ProductFamily.ProductSpecificBinder.SmartContent.Manufacturing.Materials.aliasRule.aliasValidation()


    GQ.Logout()



  })


});