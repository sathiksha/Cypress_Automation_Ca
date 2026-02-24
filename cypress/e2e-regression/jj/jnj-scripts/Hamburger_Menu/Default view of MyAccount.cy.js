import { GQTest } from '../../jnj-pages/GQTest.js'

describe ('Default view of MyAccount',()=>{
    const GQ = new GQTest()

  it('Default view of Account', ()=>{
    // Login 
    GQ.Login()

    GQ.HamburgerMenu.open()

    GQ.HamburgerMenu.MyAccount.open()

    GQ.HamburgerMenu.MyAccount.checkFieldsAvailablity()

    GQ.HamburgerMenu.MyAccount.close()

   //Logout
    GQ.Logout()
  })

});