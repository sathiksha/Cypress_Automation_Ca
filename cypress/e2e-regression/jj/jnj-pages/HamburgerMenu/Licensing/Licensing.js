export class Licensing {

    loadFixture() {
    return cy.fixture("hamburgerMenu").then(data => data.Licensing);
  }

    open(){
        cy.getSC('//QMainPageBase[ID="MainPage"]/child[Class=QCommandMenu||scClass=Menu||index=4||length=6||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1||roleIndex=0||roleLength=1||scRole=menu]/body/row[icon=https%3A%24fs%24%24fs%24im360pre-qa.jnj.com%24fs%24globalq%24fs%24images%24fs%24icons%24fs%2413722013-75e8-41d4-a728-b09ab6aefecb.svg||6]/col[fieldName=icon||0]/valueicon').click()
    }



validateFields() {
  this.loadFixture().then(data => {

    // data = data.Licensing (from your loadFixture)
    const sections = data.accordionSections || [];

    sections.forEach(section => {
      section.fields.forEach(field => {
        cy.log(`Validating Field: ${field}`);
        cy.contains(field, { timeout: 6000 }).should("be.visible");
      });
    });

    cy.log("All fields validated successfully!");
  });
}

close(){
    cy.getSC('//autoID[Class=Dialog||index=8||length=10||classIndex=0||classLength=1||roleIndex=0||roleLength=1||title=Licensing%20Management||scRole=alertdialog]/cancelButton/').click()
}
  
}
export default new Licensing();