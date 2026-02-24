import { GQTest } from '../../jnj-pages/GQTest.js'

describe ('Default view of About',()=>{
    const GQ = new GQTest()

  it('Default view of About', ()=>{
    // Login 
    GQ.Login()
    
    GQ.HamburgerMenu.open()

    GQ.HamburgerMenu.About.open()

    GQ.HamburgerMenu.About.close()
   //Logout
    GQ.Logout()
  })

});