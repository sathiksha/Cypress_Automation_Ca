import { About } from "./About/About";
import { Licensing } from "./Licensing/Licensing";
import { LockScreen } from "./LockScreen/LockScreen";
import { MyAccount } from "./MyAccount/MyAccount";

export class HamburgerMenu {

  open(){
    cy.getSC('//QMainPageBase[ID="MainPage"]/mainHeader/userMenu/').click()
  }

  constructor() {
    this.About = new About();
    this.Licensing = new Licensing();
    this.LockScreen = new LockScreen();
    this.MyAccount = new MyAccount();
  }
}