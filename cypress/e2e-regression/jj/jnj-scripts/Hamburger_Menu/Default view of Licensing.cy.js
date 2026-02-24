import { GQTest } from '../../jnj-pages/GQTest.js'

describe ('Default view of License',()=>{
    const GQ = new GQTest()

  it('Default view of License', ()=>{
    // Login 
    GQ.Login()

     GQ.HamburgerMenu.open()

     GQ.HamburgerMenu.Licensing.open()

     GQ.HamburgerMenu.Licensing.validateFields()
     
    GQ.HamburgerMenu.Licensing.close()
     
   //Logout
    GQ.Logout()
  })

});