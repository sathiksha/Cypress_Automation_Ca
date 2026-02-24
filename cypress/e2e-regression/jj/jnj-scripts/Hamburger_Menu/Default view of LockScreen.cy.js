import { GQTest } from '../../jnj-pages/GQTest.js'

describe ('Default view of LockScreen',()=>{
    const GQ = new GQTest()

  it('Default view of LockScreen', ()=>{
    // Login 
    GQ.Login()

     GQ.HamburgerMenu.open()

     GQ.HamburgerMenu.LockScreen.open()

     GQ.HamburgerMenu.LockScreen.validate()

     GQ.HamburgerMenu.LockScreen.login()

   //Logout
    GQ.Logout()
  })

});