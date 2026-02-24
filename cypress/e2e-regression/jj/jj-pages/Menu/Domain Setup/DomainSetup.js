import { Manage } from "./Manage/Manage";

export class DomainSetup{
    open(){
        cy.getSC(
            '//QMainPageBase[ID="MainPage"]/child[Class=QCommandMenu||scClass=Menu||index=4||length=6||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1||roleIndex=0||roleLength=1||scRole=menu]/body/row[icon=Company.svg||itemName=Domain%20Setup||4]/col[fieldName=itemName||1]'
        ).click()
    }
    constructor(){
        this.Manage = new Manage()
    }
}
