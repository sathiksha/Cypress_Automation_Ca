import { Menu } from "./Menu/Menu";
import { NavBar } from "./Navigation Bar/NavBar"
import { Planets } from "./Planets/Planets";

export class GQTest {
    logout() {
        //Click Hamburger icon
        cy.getSC(
            '//QMainPageBase[ID="MainPage"]/mainHeader/userMenu/').click()
        cy.wait(2000)
         cy.getSC(
            '//QMainPageBase[ID="MainPage"]/mainHeader/userMenu/').click()
        //Click Log out
        cy.getSC(
            '//QMainPageBase[ID="MainPage"]/child[Class=QCommandMenu||scClass=Menu||index=4||length=6||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1||roleIndex=0||roleLength=1||scRole=menu]/body/row[icon=logout.svg||itemName=Logout||8]/col[fieldName=itemName||1]'
        ).click({force:true})
    }

    login(username, password) {
        if (username == null && password == null) {
            cy.GQLogin()
        } else if (username != null && password == null) {
            cy.GQLogin(username)
        } else if (username != null && password != null) {
            // cy.GQLogin(username)
        }
    }
    constructor() {
        this.NavBar = new NavBar();
        this.Planets = new Planets();
        this.Menu = new Menu()
    }
}