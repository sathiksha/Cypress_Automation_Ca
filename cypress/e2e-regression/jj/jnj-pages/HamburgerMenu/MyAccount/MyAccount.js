export class MyAccount {

    open(){
        cy.getSC('//QMainPageBase[ID="MainPage"]/child[Class=QCommandMenu||scClass=Menu||index=4||length=6||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1||roleIndex=0||roleLength=1||scRole=menu]/body/row[icon=account.svg||itemName=My%20Account||1]/col[fieldName=itemName||1]').click()
    }



checkFieldsAvailablity() {
  cy.fixture("hamburgerMenu").then(data => {

    const sections = data.MyAccount.accordionSections;

    sections.forEach(section => {

      cy.log(`STARTING SECTION: **${section.name}**`);

      // ---- FIND SECTION HEADER <td> ----
      cy.contains("td", section.name, { timeout: 8000 })
        .should("be.visible")
        .then($td => {

          const isOpened = $td.hasClass("sectionHeaderopened");

          // ---- OPEN IF CLOSED ----
          if (!isOpened) {
            cy.log(`Opening: ${section.name}`);
            cy.wrap($td)
              .parent()
              .find("img[src*='opener_closed']")
              .click({ force: true });
          }
        });

      // ---- VALIDATE FIELDS (supports greyed-out SmartClient labels) ----
      section.fields.forEach(field => {
        cy.log(`Validating Field: ${field}`);

        // SmartClient-friendly textContent scanning
        cy.get("body *").then($els => {
          const match = [...$els].find(el =>
            el.textContent && el.textContent.trim().includes(field)
          );

          expect(
            match,
            `Expected to find field text: ${field}`
          ).to.not.be.undefined;
        });
      });

      // ---- CLOSE THE SECTION ----
      cy.contains("td", section.name, { timeout: 8000 }).then($td => {

        const isOpenedNow = $td.hasClass("sectionHeaderopened");

        if (isOpenedNow) {
          cy.log(`Closing: ${section.name}`);
          cy.wrap($td)
            .parent()
            .find("img[src*='opener_opened']")
            .click({ force: true });
        }
      });

      cy.wait(200);
      cy.log(`Completed: ${section.name}`);
    });

    cy.log("All accordion sections validated successfully!");
  });
}


    close(){
        cy.getSC('//autoID[Class=Dialog||index=5||length=6||classIndex=0||classLength=1||roleIndex=0||roleLength=1||title=Account||scRole=alertdialog]/okButton/').click()
    }
}
export default new MyAccount();