import { Settings } from "./Settings/Settings"

export class Menu {
    show() {
        cy.getSC(
            '//QMainPageBase[ID="MainPage"]/mainHeader/userMenu/'
        ).click()
    }
    openSettings(){
        this.show()
        cy.getSC(
            '//QMainPageBase[ID="MainPage"]/child[Class=QCommandMenu||scClass=Menu||index=4||length=6||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1||roleIndex=0||roleLength=1||scRole=menu]/body/row[icon=settings.svg||itemName=Settings||6]/col[fieldName=itemName||1]'
        ).click()
    }
    constructor(){
        this.Settings = new Settings()
    }
}