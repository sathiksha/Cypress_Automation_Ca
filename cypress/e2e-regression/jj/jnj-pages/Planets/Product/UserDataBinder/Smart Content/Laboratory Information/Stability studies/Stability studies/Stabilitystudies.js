export class stabilitystudies {

    loadFixture() {
    return cy.fixture("laboratoryInformation");
  }

  refresh() {

    cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Smart_Content||scClass=VLayout||index=0||length=7||classIndex=0||classLength=1||scClassIndex=0||scClassLength=7]/component/member[Class=QScreen_Data_Binder_Smart_Content_La||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Laboratory_Information_3||scClass=VLayout||index=5||length=9||classIndex=0||classLength=1||scClassIndex=5||scClassLength=9]/body/layoutBody/member[Class=QScreen_Stability_Studies_6||scClass=VLayout||index=0||length=4||classIndex=0||classLength=1||scClassIndex=0||scClassLength=4]/body/layoutBody/member[Class=QScreen_Stability_Studies_7||scClass=VLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=3]/component/member[Class=QScreen_Data_Binder_Content_Studies||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Filtered_90||scClass=VLayout||index=0||length=4||classIndex=0||classLength=1||scClassIndex=0||scClassLength=4]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Data_Binder_Studies_Selector||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen__N_S_X||scClass=VLayout||index=0||length=5||classIndex=0||classLength=1||scClassIndex=0||scClassLength=5]/component/gridBar/refreshButton/').click()
  }

  checkHeaderIcons() {
    cy.get('img[src*="download-button"]').should('be.visible')
    cy.get('img[src*="print"]').should('be.visible')
    cy.get('img[src*="refresh"]').should('be.visible')
    cy.get('img[src*="filter"]').should('be.visible')
    cy.get('[aria-label="- N S X"]').first().should('be.visible').click()
    this.PreDefineFilterOptionValidation()
  }

  PreDefineFilterOptionValidation() {
    cy.get('div:contains("- N S X")').should('be.visible');
    cy.get('div:contains("All")').should('be.visible');
    cy.get('div:contains("Studies With No Results")').should('be.visible');
    cy.get('div:contains("Studies With Results")').should('be.visible');
    cy.get('[aria-label="- N S X"]').first().should('be.visible').click()
  }

  checkColumns() {
    cy.wait(2000)
    cy.fixture('laboratoryInformation').then(data => {
      const expectedColumnNames = data.StabilityStudies.Stabilitystudies.columnNames;

      cy.getColumnsAndTypes(
        '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Smart_Content||scClass=VLayout||index=0||length=7||classIndex=0||classLength=1||scClassIndex=0||scClassLength=7]/component/member[Class=QScreen_Data_Binder_Smart_Content_La||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Laboratory_Information_3||scClass=VLayout||index=5||length=9||classIndex=0||classLength=1||scClassIndex=5||scClassLength=9]/body/layoutBody/member[Class=QScreen_Stability_Studies_6||scClass=VLayout||index=0||length=4||classIndex=0||classLength=1||scClassIndex=0||scClassLength=4]/body/layoutBody/member[Class=QScreen_Stability_Studies_7||scClass=VLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=3]/component/member[Class=QScreen_Data_Binder_Content_Studies||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Filtered_90||scClass=VLayout||index=0||length=4||classIndex=0||classLength=1||scClassIndex=0||scClassLength=4]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Data_Binder_Studies_Selector||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen__N_S_X||scClass=VLayout||index=0||length=5||classIndex=0||classLength=1||scClassIndex=0||scClassLength=5]/component/header/headerButton[fieldName=%2472v]/'
      ).then(tableInfo => {

        const availableCols = tableInfo.columns.map(col => col.textContent.trim());

        cy.log("Available UI Columns:", availableCols);
        cy.log("Expected Columns:", expectedColumnNames);

        expectedColumnNames.forEach(col => {
          expect(availableCols, `Column '${col}' should exist`).to.include(col);
        });

      });
    });
  }

  clickAnywhereElse() {
    cy.wait(200);
    cy.get('body').trigger('keydown', { keyCode: 27 });
    cy.wait(200);
    cy.get('body').trigger('keyup', { keyCode: 27 });
  }

  checkMultiChoicePickerColumns() {
    cy.fixture("laboratoryInformation").then(data => {

      const pickerColumns = data.StabilityStudies.Stabilitystudies.multiChoicePickerColumns;  // FIX ✔

      pickerColumns.forEach(colName => {

        cy.getSC(
          '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Smart_Content||scClass=VLayout||index=0||length=7||classIndex=0||classLength=1||scClassIndex=0||scClassLength=7]/component/member[Class=QScreen_Data_Binder_Smart_Content_La||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Laboratory_Information_3||scClass=VLayout||index=5||length=9||classIndex=0||classLength=1||scClassIndex=5||scClassLength=9]/body/layoutBody/member[Class=QScreen_Stability_Studies_6||scClass=VLayout||index=0||length=4||classIndex=0||classLength=1||scClassIndex=0||scClassLength=4]/body/layoutBody/member[Class=QScreen_Stability_Studies_7||scClass=VLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=3]/component/member[Class=QScreen_Data_Binder_Content_Studies||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Filtered_90||scClass=VLayout||index=0||length=4||classIndex=0||classLength=1||scClassIndex=0||scClassLength=4]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Data_Binder_Studies_Selector||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen__N_S_X||scClass=VLayout||index=0||length=5||classIndex=0||classLength=1||scClassIndex=0||scClassLength=5]/component/filterEditor/editRowForm/item[title=' + encodeURI(colName) + '||index=5||Class=SetFilterItem]/[icon="picker"]'
       
        ).click({ force: true });
      });

      this.clickAnywhereElse();
    });
  }

  refreshIcon() {

    cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Stability_St||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Item_Repository_Stability_St_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Stability_Studies||scClass=VLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=3]/component/gridBar/refreshButton/icon').click()
  }


  openARecord() {

    cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Smart_Content||scClass=VLayout||index=0||length=7||classIndex=0||classLength=1||scClassIndex=0||scClassLength=7]/component/member[Class=QScreen_Data_Binder_Smart_Content_La||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Laboratory_Information_3||scClass=VLayout||index=5||length=9||classIndex=0||classLength=1||scClassIndex=5||scClassLength=9]/body/layoutBody/member[Class=QScreen_Stability_Studies_6||scClass=VLayout||index=0||length=4||classIndex=0||classLength=1||scClassIndex=0||scClassLength=4]/body/layoutBody/member[Class=QScreen_Stability_Studies_7||scClass=VLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=3]/component/member[Class=QScreen_Data_Binder_Content_Studies||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Filtered_90||scClass=VLayout||index=0||length=4||classIndex=0||classLength=1||scClassIndex=0||scClassLength=4]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Data_Binder_Studies_Selector||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen__N_S_X||scClass=VLayout||index=0||length=5||classIndex=0||classLength=1||scClassIndex=0||scClassLength=5]/component/body/row[0]/col[fieldName=STUDY_ID||1]')
    .dblclick()

  }

  openDetails() {
    cy.wait(3000)

    cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Smart_Content||scClass=VLayout||index=0||length=7||classIndex=0||classLength=1||scClassIndex=0||scClassLength=7]/component/member[Class=QScreen_Data_Binder_Smart_Content_La||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Laboratory_Information_3||scClass=VLayout||index=5||length=9||classIndex=0||classLength=1||scClassIndex=5||scClassLength=9]/body/layoutBody/member[Class=QScreen_Stability_Studies_6||scClass=VLayout||index=0||length=4||classIndex=0||classLength=1||scClassIndex=0||scClassLength=4]/body/layoutBody/member[Class=QScreen_Stability_Studies_7||scClass=VLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=3]/component/member[Class=QScreen_Data_Binder_Content_Studies||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Filtered_90||scClass=VLayout||index=0||length=4||classIndex=0||classLength=1||scClassIndex=0||scClassLength=4]/component/member[Class=QScreen_Stability_Study_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Stability_Study_Home||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=3||length=6||classIndex=3||classLength=6||roleIndex=3||roleLength=6||title=Details||scRole=button]/').click()
  }


  checkFormsandFieldsAvailablity() {
    cy.fixture("laboratoryInformation").then(data => {

      const sections = data.StabilityStudies.Stabilitystudies.accordionSections;

      sections.forEach(section => {

        cy.log(`STARTING SECTION: **${section.name}**`);

        // Find the correct row <td> containing the section name
        cy.contains("td", section.name)
          .should("be.visible")
          .then($td => {

            cy.wrap($td).within(() => {

              const isOpened = $td.hasClass("sectionHeaderopened");

              // ---- OPEN IF CLOSED ----
              if (!isOpened) {
                cy.log(`Opening: ${section.name}`);
                cy.get("img[src*='opener_closed']").click({ force: true });
              }

            });
          });

        // ---- VALIDATE FIELDS ----
        section.fields.forEach(field => {
          cy.log(`Validating Field: ${field}`);
          cy.contains(field, { timeout: 8000 }).should("be.visible");
        });

        // ---- CLOSE THE SECTION ----
        cy.contains("td", section.name).then($td => {
          cy.wrap($td).within(() => {

            const isOpenedNow = $td.hasClass("sectionHeaderopened");

            if (isOpenedNow) {
              cy.log(`Closing: ${section.name}`);
              cy.get("img[src*='opener_opened']").click({ force: true });
            }

          });
        });

        cy.wait(300);

        cy.log(`Completed: ${section.name}`);
      });

      cy.log("All accordion sections validated successfully!");
    });
  }

  checkRelatedObjects() {
    cy.fixture("laboratoryInformation").then(data => {
      const relatedObjectsOption = data.StabilityStudies.Stabilitystudies.relatedObjects;

      relatedObjectsOption.forEach(obj => {
        cy.get('td.multiLayoutButtonNoLeftBorderTextSelected,td.multiLayoutButtonText').contains(obj).should("be.visible");
      });
    });
  }


  openRelatedObjects() {

    cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Smart_Content||scClass=VLayout||index=0||length=7||classIndex=0||classLength=1||scClassIndex=0||scClassLength=7]/component/member[Class=QScreen_Data_Binder_Smart_Content_La||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Laboratory_Information_3||scClass=VLayout||index=5||length=9||classIndex=0||classLength=1||scClassIndex=5||scClassLength=9]/body/layoutBody/member[Class=QScreen_Stability_Studies_6||scClass=VLayout||index=0||length=4||classIndex=0||classLength=1||scClassIndex=0||scClassLength=4]/body/layoutBody/member[Class=QScreen_Stability_Studies_7||scClass=VLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=3]/component/member[Class=QScreen_Data_Binder_Content_Studies||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Filtered_90||scClass=VLayout||index=0||length=4||classIndex=0||classLength=1||scClassIndex=0||scClassLength=4]/component/member[Class=QScreen_Stability_Study_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Stability_Study_Home||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=5||length=6||classIndex=5||classLength=6||roleIndex=5||roleLength=6||title=Related%20Objects||scRole=button]/').click()
  }

  minimizeARecord() {
    cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Smart_Content||scClass=VLayout||index=0||length=7||classIndex=0||classLength=1||scClassIndex=0||scClassLength=7]/component/member[Class=QScreen_Data_Binder_Smart_Content_La||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Laboratory_Information_3||scClass=VLayout||index=5||length=9||classIndex=0||classLength=1||scClassIndex=5||scClassLength=9]/body/layoutBody/member[Class=QScreen_Stability_Studies_6||scClass=VLayout||index=0||length=4||classIndex=0||classLength=1||scClassIndex=0||scClassLength=4]/body/layoutBody/member[Class=QScreen_Stability_Studies_7||scClass=VLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=3]/component/member[Class=QScreen_Data_Binder_Content_Studies||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Filtered_90||scClass=VLayout||index=0||length=4||classIndex=0||classLength=1||scClassIndex=0||scClassLength=4]/selectorButton/openButton/icon').click();
  }


  rightClickARecord() {

    cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Smart_Content||scClass=VLayout||index=0||length=7||classIndex=0||classLength=1||scClassIndex=0||scClassLength=7]/component/member[Class=QScreen_Data_Binder_Smart_Content_La||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Laboratory_Information_3||scClass=VLayout||index=5||length=9||classIndex=0||classLength=1||scClassIndex=5||scClassLength=9]/body/layoutBody/member[Class=QScreen_Stability_Studies_6||scClass=VLayout||index=0||length=4||classIndex=0||classLength=1||scClassIndex=0||scClassLength=4]/body/layoutBody/member[Class=QScreen_Stability_Studies_7||scClass=VLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=3]/component/member[Class=QScreen_Data_Binder_Content_Studies||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Filtered_90||scClass=VLayout||index=0||length=4||classIndex=0||classLength=1||scClassIndex=0||scClassLength=4]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Data_Binder_Studies_Selector||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen__N_S_X||scClass=VLayout||index=0||length=5||classIndex=0||classLength=1||scClassIndex=0||scClassLength=5]/component/body/row[0]/col[fieldName=STUDY_ID||1]')
    .rightclick()

  }
  addBookmark() {

    cy.getSC('//Menu[level=0]/body/row[0]/col[fieldName=itemName||1]').click()
  }

  refreshIcon(){

    cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Content||scClass=VLayout||index=0||length=8||classIndex=0||classLength=1||scClassIndex=0||scClassLength=8]/component/member[Class=QScreen_Product_Family__Product_Con||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/member[Class=QScreen_Content_Layout||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Laboratory_Information||scClass=VLayout||index=4||length=9||classIndex=0||classLength=1||scClassIndex=4||scClassLength=9]/body/layoutBody/member[Class=QScreen_Stability_Studies_1||scClass=VLayout||index=0||length=4||classIndex=0||classLength=1||scClassIndex=0||scClassLength=4]/body/layoutBody/member[Class=QScreen_Stability_Studies_2||scClass=VLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=3]/component/member[Class=QScreen_Content_ELIMs_Studies||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Filtered_48||scClass=VLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=3]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Filtered_Content_Selector_EL||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Default||scClass=VLayout||index=0||length=2||classIndex=0||classLength=1||scClassIndex=0||scClassLength=2]/component/gridBar/refreshButton/icon').click()
  }


}