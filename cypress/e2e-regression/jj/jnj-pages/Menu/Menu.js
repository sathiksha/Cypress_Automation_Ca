import { Settings } from "./Settings/Settings"
// import { DomainSetup } from "./Domain Setup/DomainSetup"
// import { MyAccount } from "./Planets/MyAccount.cy.js";

export class Menu {
    show() {
        cy.getSC(
            '//QMainPageBase[ID="MainPage"]/mainHeader/userMenu/'
        ).click()
    }
    openSettings() {
        this.show()
        cy.getSC(
            '//QMainPageBase[ID="MainPage"]/child[Class=QCommandMenu||scClass=Menu||index=4||length=6||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1||roleIndex=0||roleLength=1||scRole=menu]/body/row[icon=settings.svg||itemName=Settings||6]/col[fieldName=itemName||1]'
        ).click()
    }
    openSupport() {
        cy.getSC(
            '//QMainPageBase[ID="MainPage"]/child[Class=QCommandMenu||scClass=Menu||index=4||length=6||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1||roleIndex=0||roleLength=1||scRole=menu]/body/row[icon=http%3A%24fs%24%24fs%24azrhsonvaw0006.jnj.com%3A8080%24fs%24globalq%24fs%24images%24fs%24icons%24fs%2465598a7c-7075-42e4-ae6b-ba90edfecc91.png||itemName=Support%20Ticket||2]/col[fieldName=itemName||1]'
        ).click()
    }
    openlicensing() {
        cy.getSC('//QMainPageBase[ID="MainPage"]/child[Class=QCommandMenu||scClass=Menu||index=4||length=6||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1||roleIndex=0||roleLength=1||scRole=menu]/body/row[icon=https%3A%24fs%24%24fs%24im360pre-qa.jnj.com%24fs%24globalq%24fs%24images%24fs%24icons%24fs%2413722013-75e8-41d4-a728-b09ab6aefecb.svg||itemName=Licensing||6]/col[fieldName=itemName||1]')
            .click()
    }

    constructor() {
        this.Settings = new Settings()
    }
}
