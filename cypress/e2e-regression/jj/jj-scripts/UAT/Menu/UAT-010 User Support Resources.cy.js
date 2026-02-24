import { GQTest } from "../../../jj-pages/GQTest";
const GQ = new GQTest();
if (!Cypress.env('onlyRunReadOnlyTests')) {
describe('UAT/4.0', () => {
   it('UAT-010 User Support Resources', () => {
      // Login to planet Page
      GQ.login('PQM360 General User')
      // clcik on hamburger icon
      cy.wait(5000)
      GQ.Menu.show()

      cy.window().then(win => {
         let availableCols = []
         let menu = win.isc.AutoTest.getElement('//QMainPageBase[ID="MainPage"]/child[Class=QCommandMenu||scClass=Menu||index=4||length=6||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1||roleIndex=0||roleLength=1||scRole=menu]/body/')
         const divs = menu.querySelectorAll('tr td div');
         const targetDivs = Array.from(divs).filter(div => 
            div.style.overflow === 'hidden' &&
            div.style.whiteSpace === 'nowrap' &&
            div.style.textOverflow === 'ellipsis'
         );
         for (let i = 0; i < targetDivs.length; i++) {
             availableCols.push(targetDivs[i].innerHTML)
         }
         expect(availableCols).to.include('Support Ticket')
     })

     GQ.Menu.show()
      // //click Support ticket
      // GQ.Menu.openSupport()
      // //navigate to previous tab
      // cy.go('back')
      //click log out
      GQ.logout()
   })
})
}