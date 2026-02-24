export class LockScreen {

    open(){
        cy.getSC('//QMainPageBase[ID="MainPage"]/child[Class=QCommandMenu||scClass=Menu||index=4||length=6||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1||roleIndex=0||roleLength=1||scRole=menu]/body/row[icon=lockScreen.svg||itemName=Lock%20Screen||8]/col[fieldName=itemName||1]').click()
    }


validate() {
    cy.log("Validating Lock Screen Popup");

    cy.contains("Log in Required", { timeout: 5000 }).should("be.visible");

    cy.contains("Username").should("be.visible");
    cy.contains("Username").parent().next().find("input").should("be.visible");

    cy.contains("Password").should("be.visible");
}



login() {
    const password = "=T0day3#4";

    // Only type password into Password field
   
cy.contains("Password").parent().next().find("input").type(password);

    // Click Submit
    cy.contains("Submit").click();
}




}
export default new LockScreen();