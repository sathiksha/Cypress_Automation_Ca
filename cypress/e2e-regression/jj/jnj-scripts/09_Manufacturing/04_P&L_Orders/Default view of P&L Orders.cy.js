import {GQTest} from '../../../jnj-pages/GQTest.js'

describe('Default view of P&L Orders', () => {
  const GQ = new GQTest()

  it('Default view of P&L Orders - Planet', () => {
    // Login 
    GQ.Login('PQM360 General User')

    //Open Documents Planet
    GQ.Planets.openPlanet('Manufacturing')


    GQ.Planets.Manufacturing.PnLOrders.open()

    //Toggle Filter
    GQ.Planets.Manufacturing.PnLOrders.toggleFilter()

    GQ.Planets.Manufacturing.PnLOrders.selectInternal()

    GQ.Planets.Manufacturing.PnLOrders.verifyPackagingsite()

    GQ.Planets.Manufacturing.PnLOrders.selectExternal()

    GQ.Planets.Manufacturing.PnLOrders.refresh()

    GQ.Planets.Manufacturing.PnLOrders.openARecord()

    GQ.Planets.Manufacturing.PnLOrders.clickGMPReview()

    GQ.Planets.Manufacturing.PnLOrders.PackagingSite.open()

    GQ.Planets.Manufacturing.PnLOrders.PackagingSite.checkHeaderIcons()
   
    //Check Column availability
    GQ.Planets.Manufacturing.PnLOrders.PackagingSite.checkColumns()

    GQ.Planets.Manufacturing.PnLOrders.PackagingSite.checkMultiChoicePickerColumns()

    GQ.Planets.Manufacturing.PnLOrders.PackagingSite.refresh()
    //open a record
    GQ.Planets.Manufacturing.PnLOrders.PackagingSite.openARecord()

    //Click Details Tab
    GQ.Planets.Manufacturing.PnLOrders.PackagingSite.openDetails()

    //check Forms and Fields
    GQ.Planets.Manufacturing.PnLOrders.PackagingSite.checkFormsandFieldsAvailablity()

    //open Related Objects
    GQ.Planets.Manufacturing.PnLOrders.PackagingSite.openRelatedObjects()

    //check Related Objects
    GQ.Planets.Manufacturing.PnLOrders.PackagingSite.checkRelatedObjects()

    //minimize a record
    GQ.Planets.Manufacturing.PnLOrders.PackagingSite.minimizeARecord()

   
    GQ.Logout()
  })
  });