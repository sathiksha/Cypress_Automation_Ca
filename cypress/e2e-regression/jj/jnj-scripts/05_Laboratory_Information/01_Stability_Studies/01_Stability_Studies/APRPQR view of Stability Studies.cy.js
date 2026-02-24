import { GQTest } from '../../../../jnj-pages/GQTest.js'

describe('APR/PQR view of Stability Studies', () => {
  const GQ = new GQTest()

  it('APR/PQR view of Stability Studies - Planet', () => {

    // Login 
    GQ.Login()

    // Open Product
    GQ.Planets.openPlanet('Product')

    //Toggle Filter
    GQ.Planets.Product.ProductFamily.toggleFilter()

    // Open Product Family
    GQ.Planets.Product.ProductFamily.open('ANTI-TAU')

    // Click Content
    GQ.Planets.Product.ProductFamily.Content.open()

    //Open page
    GQ.Planets.Product.ProductFamily.Content.LaboratoryInformation.open()

    GQ.Planets.Product.ProductFamily.Content.LaboratoryInformation.Stabilitystudies.open()

    GQ.Planets.Product.ProductFamily.Content.LaboratoryInformation.Stabilitystudies.StabilityStudiesAPRPQR.open()

    //Refresh
    GQ.Planets.Product.ProductFamily.Content.LaboratoryInformation.Stabilitystudies.StabilityStudiesAPRPQR.refresh()

    //check Header Icons
    GQ.Planets.Product.ProductFamily.Content.LaboratoryInformation.Stabilitystudies.StabilityStudiesAPRPQR.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.Product.ProductFamily.Content.LaboratoryInformation.Stabilitystudies.StabilityStudiesAPRPQR.checkColumns()

    //Check multi-choice picker Column availability
    GQ.Planets.Product.ProductFamily.Content.LaboratoryInformation.Stabilitystudies.StabilityStudiesAPRPQR.checkMultiChoicePickerColumns()

    //open a Record
    GQ.Planets.Product.ProductFamily.Content.LaboratoryInformation.Stabilitystudies.StabilityStudiesAPRPQR.openARecord()

    //Click Details Tab
    GQ.Planets.Product.ProductFamily.Content.LaboratoryInformation.Stabilitystudies.StabilityStudiesAPRPQR.openDetails()

    //check Forms and Fields
    GQ.Planets.Product.ProductFamily.Content.LaboratoryInformation.Stabilitystudies.StabilityStudiesAPRPQR.checkFormsandFieldsAvailablity()

    //Open related Objects
    GQ.Planets.Product.ProductFamily.Content.LaboratoryInformation.Stabilitystudies.StabilityStudiesAPRPQR.openRelatedObjects()

    //Check Related Objects
    GQ.Planets.Product.ProductFamily.Content.LaboratoryInformation.Stabilitystudies.StabilityStudiesAPRPQR.checkRelatedObjects()

    //minimize the record
    GQ.Planets.Product.ProductFamily.Content.LaboratoryInformation.Stabilitystudies.StabilityStudiesAPRPQR.minimizeARecord()


    //Right Click the record
    GQ.Planets.Product.ProductFamily.Content.LaboratoryInformation.Stabilitystudies.StabilityStudiesAPRPQR.rightClickARecord()

    //Add Bookmark
    GQ.Planets.Product.ProductFamily.Content.LaboratoryInformation.Stabilitystudies.StabilityStudiesAPRPQR.addBookmark()

    //check Bookmark Functionality
    cy.checkBookmarkFunctionality()

    //Logout
    GQ.Logout()

})
});