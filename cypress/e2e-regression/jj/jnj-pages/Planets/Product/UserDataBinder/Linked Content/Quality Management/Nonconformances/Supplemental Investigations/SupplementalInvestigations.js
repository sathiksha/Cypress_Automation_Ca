export class SupplementalInvestigations {
  loadFixture() {
    return cy.fixture("qualityManagement");
  }

  open() {
    cy.getSC(
      '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Linked_Content||scClass=VLayout||index=2||length=7||classIndex=0||classLength=1||scClassIndex=2||scClassLength=7]/body/layoutBody/member[Class=QScreen_Quality_Management_1||scClass=VLayout||index=4||length=9||classIndex=0||classLength=1||scClassIndex=4||scClassLength=9]/body/layoutBody/member[Class=QScreen_Nonconformances_2||scClass=VLayout||index=3||length=7||classIndex=0||classLength=1||scClassIndex=3||scClassLength=7]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Data_Binder_Linked_Content_Q||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=3||length=8||classIndex=3||classLength=8||roleIndex=3||roleLength=8||title=Supplemental%20Investigations||scRole=button]/'
    ).click();
  }

  refresh() {
    cy.getSC(
      '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Linked_Content||scClass=VLayout||index=2||length=7||classIndex=0||classLength=1||scClassIndex=2||scClassLength=7]/body/layoutBody/member[Class=QScreen_Quality_Management_1||scClass=VLayout||index=4||length=9||classIndex=0||classLength=1||scClassIndex=4||scClassLength=9]/body/layoutBody/member[Class=QScreen_Nonconformances_2||scClass=VLayout||index=3||length=7||classIndex=0||classLength=1||scClassIndex=3||scClassLength=7]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Data_Binder_Linked_Content_Q||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Supplemental_Investigations_4||scClass=VLayout||index=3||length=8||classIndex=0||classLength=1||scClassIndex=3||scClassLength=8]/component/gridBar/refreshButton/icon'
    ).click();
  }

  checkHeaderIcons() {
    cy.get('img[src*="download-button"]').should("be.visible");
    cy.get('img[src*="print"]').should("be.visible");
  }
  openARecord() {
    cy.getSC(
      '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Linked_Content||scClass=VLayout||index=2||length=7||classIndex=0||classLength=1||scClassIndex=2||scClassLength=7]/body/layoutBody/member[Class=QScreen_Quality_Management_1||scClass=VLayout||index=4||length=9||classIndex=0||classLength=1||scClassIndex=4||scClassLength=9]/body/layoutBody/member[Class=QScreen_Nonconformances_2||scClass=VLayout||index=3||length=7||classIndex=0||classLength=1||scClassIndex=3||scClassLength=7]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Data_Binder_Linked_Content_Q||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Supplemental_Investigations_4||scClass=VLayout||index=3||length=8||classIndex=0||classLength=1||scClassIndex=3||scClassLength=8]/component/body/row[0]/col[fieldName=itemRef||0]'
    ).dblclick();
  }

  openRelatedObjects() {
    cy.contains("Related Objects").click({ force: true });
  }

  checkRelatedObjects() {
    this.loadFixture().then((data) => {
      cy.log("Validating Related Objects");
      data.Nonconformances.SupplementalInvestigations.relatedObjects.forEach(
        (obj) => {
          cy.get(
            "td.multiLayoutButtonNoLeftBorderTextSelected,td.multiLayoutButtonText"
          )
            .contains(obj)
            .should("exist");
        }
      );
    });
  }

  maximizeSelector() {
    cy.getSC(
      '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Linked_Content||scClass=VLayout||index=2||length=7||classIndex=0||classLength=1||scClassIndex=2||scClassLength=7]/body/layoutBody/member[Class=QScreen_Quality_Management_1||scClass=VLayout||index=4||length=9||classIndex=0||classLength=1||scClassIndex=4||scClassLength=9]/body/layoutBody/member[Class=QScreen_Nonconformances_2||scClass=VLayout||index=3||length=7||classIndex=0||classLength=1||scClassIndex=3||scClassLength=7]/selectorButton/openButton/icon'
    ).click();
  }

  rightClickARecord() {
    cy.getSC(
      '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Linked_Content||scClass=VLayout||index=2||length=7||classIndex=0||classLength=1||scClassIndex=2||scClassLength=7]/body/layoutBody/member[Class=QScreen_Quality_Management_1||scClass=VLayout||index=4||length=9||classIndex=0||classLength=1||scClassIndex=4||scClassLength=9]/body/layoutBody/member[Class=QScreen_Nonconformances_2||scClass=VLayout||index=3||length=7||classIndex=0||classLength=1||scClassIndex=3||scClassLength=7]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Data_Binder_Linked_Content_Q||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Supplemental_Investigations_4||scClass=VLayout||index=3||length=8||classIndex=0||classLength=1||scClassIndex=3||scClassLength=8]/component/body/row[0]/col[fieldName=itemName||2]'
    ).rightclick();
  }

  addBookmark() {
    cy.getSC(
      "//Menu[level=0]/body/row[icon=https%3A%24fs%24%24fs%24im360pre-qa.jnj.com%24fs%24globalq%24fs%24images%24fs%24icons%24fs%24bfd97618-7272-4478-bfdf-30a3a4d8c9ae.png||0]/col[fieldName=icon||0]"
    ).click();
  }

  clickAnywhereElse() {
    cy.wait(200);
    cy.get("body").trigger("keydown", { keyCode: 27 });
    cy.wait(200);
    cy.get("body").trigger("keyup", { keyCode: 27 });
  }

  checkColumns() {
    this.loadFixture().then((data) => {
      let expectedColumnNames =
        data.Nonconformances.SupplementalInvestigations.columnNames;

      cy.getColumnsAndTypes(
        '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Linked_Content||scClass=VLayout||index=2||length=7||classIndex=0||classLength=1||scClassIndex=2||scClassLength=7]/body/layoutBody/member[Class=QScreen_Quality_Management_1||scClass=VLayout||index=4||length=9||classIndex=0||classLength=1||scClassIndex=4||scClassLength=9]/body/layoutBody/member[Class=QScreen_Nonconformances_2||scClass=VLayout||index=3||length=7||classIndex=0||classLength=1||scClassIndex=3||scClassLength=7]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Data_Binder_Linked_Content_Q||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Supplemental_Investigations_4||scClass=VLayout||index=3||length=8||classIndex=0||classLength=1||scClassIndex=3||scClassLength=8]/component/header/headerButton[fieldName=itemRef]/'
      ).then((tableInfo) => {
        let availableCols = [];
        tableInfo.columns.map((obj) => {
          availableCols.push(obj.textContent);
        });

        cy.log(availableCols);
        for (let i = 0; i < expectedColumnNames.length; i++) {
          expect(availableCols).to.include(expectedColumnNames[i]);
        }
      });
    });
  }

  checkFormsandFieldsAvailablity() {
    this.loadFixture().then((data) => {
      data.Nonconformances.SupplementalInvestigations.accordionSections.forEach(
        (section) => {
          cy.log(`STARTING SECTION: **${section.name}**`);

          if (!section.initiallyOpen) {
            cy.log(`Opening: ${section.name}`);

            cy.get("img[src*='opener_closed.png']")
              .siblings("div")
              .contains(section.name)
              .click({ force: true });

            cy.contains(section.fields[0], { timeout: 5000 }).should("exist");
          }

          section.fields.forEach((field) => {
            cy.log(`Validating Field: ${field}`);
            cy.contains(field, { timeout: 6000 }).should("exist");
          });

          cy.log(`Closing: ${section.name}`);

          cy.get("img[src*='opener_opened.png']")
            .siblings("div")
            .contains(section.name)
            .click({ force: true });

          cy.wait(2000);
          cy.log(`Completed: ${section.name}`);
          cy.wait(1000);
        }
      );

      cy.log("All accordion sections validated successfully!");
    });
  }

  closeSidePane() {
    cy.getSC(
      '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/selectorButton/'
    ).click();
  }

  linkAContent() {
    cy.getSC(
      '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Linked_Content||scClass=VLayout||index=2||length=7||classIndex=0||classLength=1||scClassIndex=2||scClassLength=7]/body/layoutBody/member[Class=QScreen_Quality_Management_1||scClass=VLayout||index=4||length=9||classIndex=0||classLength=1||scClassIndex=4||scClassLength=9]/body/layoutBody/member[Class=QScreen_Nonconformances_2||scClass=VLayout||index=3||length=7||classIndex=0||classLength=1||scClassIndex=3||scClassLength=7]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Data_Binder_Linked_Content_Q||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Supplemental_Investigations_4||scClass=VLayout||index=3||length=8||classIndex=0||classLength=1||scClassIndex=3||scClassLength=8]/component/gridBar/linkSiblingItemsButton/icon'
    ).click();

    cy.getSC(
      '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/child[Class=QMainPagePanel||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_QSelectorList||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/body/row[0]/col[fieldName=itemName||3]'
    ).click();

    cy.getSC(
      '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/child[Class=QMainPagePanel||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_QSelectorList||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/gridBar/selectButton/'
    ).click();
  }

  constructor() {
    // No sub modules
  }
}
