export class About {

    open(){
        cy.getSC('//QMainPageBase[ID="MainPage"]/child[Class=QCommandMenu||scClass=Menu||index=4||length=6||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1||roleIndex=0||roleLength=1||scRole=menu]/body/row[icon=https%3A%24fs%24%24fs%24im360pre-qa.jnj.com%24fs%24globalq%24fs%24images%24fs%24icons%24fs%2456f6c307-2249-4315-8380-882f8068d853.svg||itemName=About||0]/col[fieldName=itemName||1]').click()
    cy.wait(2000)
    }

    close(){
        cy.getSC('//autoID[Class=Dialog||index=8||length=9||classIndex=0||classLength=1||roleIndex=0||roleLength=1||title=About%20Optiqs360||scRole=alertdialog]/okButton/').click()
    }
}
export default new About();