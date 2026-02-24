export class MyAccount {
    open() {
        cy.getSC(
            '//QMainPageBase[ID="MainPage"]/child[Class=QCommandMenu||scClass=Menu||index=4||length=6||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1||roleIndex=0||roleLength=1||scRole=menu]/body/row[icon=account.svg||itemName=My%20Account||1]/col[fieldName=itemName||1]'
        ).click()
    }
    typeFirstName(value) {
        cy.getSC(
            '//autoID[Class=Dialog||index=3||length=4||classIndex=0||classLength=1||roleIndex=0||roleLength=1||title=Account||scRole=alertdialog]/item[0][Class="QScreen_Command_Account_Details"]/component/item[name=firstName||title=First%20Name||index=1||Class=TextItem]/element'
        ).clear().type(value)
    }
    typeLastName(value) {
        cy.getSC(
            '//autoID[Class=Dialog||index=3||length=4||classIndex=0||classLength=1||roleIndex=0||roleLength=1||title=Account||scRole=alertdialog]/item[0][Class="QScreen_Command_Account_Details"]/component/item[name=lastName||title=Last%20Name||index=2||Class=TextItem]/element'
        ).clear().type(value)
    }

    typeTitle(value) {
        cy.getSC(
            '//autoID[Class=Dialog||index=3||length=4||classIndex=0||classLength=1||roleIndex=0||roleLength=1||title=Account||scRole=alertdialog]/item[0][Class="QScreen_Command_Account_Details"]/component/item[name=userTitle||title=Title||index=3||Class=TextItem]/element'
        ).clear().type(value)
    }

    typeEmail(value) {
        cy.getSC(
            '//autoID[Class=Dialog||index=3||length=4||classIndex=0||classLength=1||roleIndex=0||roleLength=1||title=Account||scRole=alertdialog]/item[0][Class="QScreen_Command_Account_Details"]/component/item[name=email||title=Email||index=4||Class=TextItem]/element'
        ).clear().type(value)
    }
    typePhone(value) {
        cy.getSC(
            '//autoID[Class=Dialog||index=3||length=4||classIndex=0||classLength=1||roleIndex=0||roleLength=1||title=Account||scRole=alertdialog]/item[0][Class="QScreen_Command_Account_Details"]/component/item[name=phone||title=Phone||index=5||Class=TextItem]/element'
        ).clear().type(value)
    }

    typeAddress(value) {
        cy.getSC(
            '//autoID[Class=Dialog||index=3||length=4||classIndex=0||classLength=1||roleIndex=0||roleLength=1||title=Account||scRole=alertdialog]/item[0][Class="QScreen_Command_Account_Details"]/component/item[name=siteAddress||title=Address||index=6||Class=TextAreaItem]/element'
        ).clear().type(value)
    }

    TypeEmployeeWWID(value) {
        cy.getSC(
            '//autoID[Class=Dialog||index=10||length=11||classIndex=0||classLength=1||roleIndex=0||roleLength=1||title=Account||scRole=alertdialog]/item[0][Class="QScreen_Command_Account_Details"]/component/item[name=Employee_WWID||title=Employee%20WWID||index=7||Class=TextItem]/element'
        ).clear().type(value)
    }
    expandUserInformation() {
        cy.getSC(
            '//autoID[Class=Dialog||index=10||length=11||classIndex=0||classLength=1||roleIndex=0||roleLength=1||title=Account||scRole=alertdialog]/item[0][Class="QScreen_Command_Account_Details"]/component/item[value=User%20Information||index=0||Class=SectionItem]/canvas/'
        ).click()
    }
    expandUserReporting() {
        cy.getSC(
            '//autoID[Class=Dialog||index=10||length=11||classIndex=0||classLength=1||roleIndex=0||roleLength=1||title=Account||scRole=alertdialog]/item[0][Class="QScreen_Command_Account_Details"]/component/item[value=User%20Reporting||index=9||Class=SectionItem]/canvas/'
        ).click()
    }
    clickCancel() {
        cy.getSC(
            '//autoID[Class=Dialog||index=10||length=11||classIndex=0||classLength=1||roleIndex=0||roleLength=1||title=Account||scRole=alertdialog]/cancelButton/'
        ).click()
    }
}