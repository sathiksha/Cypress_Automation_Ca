export class Containments {

  open() {
    cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Linked_Content||scClass=VLayout||index=2||length=7||classIndex=0||classLength=1||scClassIndex=2||scClassLength=7]/body/layoutBody/member[Class=QScreen_Quality_Management_1||scClass=VLayout||index=4||length=9||classIndex=0||classLength=1||scClassIndex=4||scClassLength=9]/body/layoutBody/member[Class=QScreen_Nonconformances_2||scClass=VLayout||index=3||length=7||classIndex=0||classLength=1||scClassIndex=3||scClassLength=7]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Data_Binder_Linked_Content_Q||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=1||length=8||classIndex=1||classLength=8||roleIndex=1||roleLength=8||title=Containments||scRole=button]/').click()
  }
 linkARecord() {
    cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Linked_Content||scClass=VLayout||index=2||length=7||classIndex=0||classLength=1||scClassIndex=2||scClassLength=7]/body/layoutBody/member[Class=QScreen_Quality_Management_1||scClass=VLayout||index=4||length=9||classIndex=0||classLength=1||scClassIndex=4||scClassLength=9]/body/layoutBody/member[Class=QScreen_Nonconformances_2||scClass=VLayout||index=3||length=7||classIndex=0||classLength=1||scClassIndex=3||scClassLength=7]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Data_Binder_Linked_Content_Q||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Containments_2||scClass=VLayout||index=1||length=8||classIndex=0||classLength=1||scClassIndex=1||scClassLength=8]/component/gridBar/linkSiblingItemsButton/icon').click()

    cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/child[Class=QMainPagePanel||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_QSelectorList||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/body/row[0]/col[fieldName=description||3]').click()

    cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/child[Class=QMainPagePanel||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_QSelectorList||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/gridBar/selectButton/icon').click()
  }

  refresh() {
    cy.getSC(
      '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Linked_Content||scClass=VLayout||index=2||length=7||classIndex=0||classLength=1||scClassIndex=2||scClassLength=7]/body/layoutBody/member[Class=QScreen_Quality_Management_1||scClass=VLayout||index=4||length=9||classIndex=0||classLength=1||scClassIndex=4||scClassLength=9]/body/layoutBody/member[Class=QScreen_Nonconformances_2||scClass=VLayout||index=3||length=7||classIndex=0||classLength=1||scClassIndex=3||scClassLength=7]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Data_Binder_Linked_Content_Q||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Containments_2||scClass=VLayout||index=1||length=8||classIndex=0||classLength=1||scClassIndex=1||scClassLength=8]/component/gridBar/refreshButton/icon'
      ).click();
  }


  checkColumns() {
    cy.fixture('qualityManagement').then(data => {
      const expectedColumnNames = data.Nonconformances.Containments.columnNames;

      cy.getColumnsAndTypes(
        '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Linked_Content||scClass=VLayout||index=2||length=7||classIndex=0||classLength=1||scClassIndex=2||scClassLength=7]/body/layoutBody/member[Class=QScreen_Quality_Management_1||scClass=VLayout||index=4||length=9||classIndex=0||classLength=1||scClassIndex=4||scClassLength=9]/body/layoutBody/member[Class=QScreen_Nonconformances_2||scClass=VLayout||index=3||length=7||classIndex=0||classLength=1||scClassIndex=3||scClassLength=7]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Data_Binder_Linked_Content_Q||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Containments_2||scClass=VLayout||index=1||length=8||classIndex=0||classLength=1||scClassIndex=1||scClassLength=8]/component/header/headerButton[fieldName=itemRef]/'
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

  checkEyeIconColumn() {

    const checkWithRetry = (retry = 0) => {

      cy.log(`Checking 👁 icon column… Retry #${retry}`);

      cy.get('div[role="button"][aria-label="👁"]')
        .then($el => {

          if ($el.length > 0) {
            cy.log('👁 icon column found');
            return;
          }

          if (retry >= 10) {
            throw new Error('👁 icon column not found after retries');
          }

          cy.wait(500);
          checkWithRetry(retry + 1);
        });
    };

    checkWithRetry();
  }
  clickAnywhereElse() {
    cy.wait(200);
    cy.get('body').trigger('keydown', { keyCode: 27 });
    cy.wait(200);
    cy.get('body').trigger('keyup', { keyCode: 27 });
  }


 openARecord() {
    cy.getSC(
      '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Linked_Content||scClass=VLayout||index=2||length=7||classIndex=0||classLength=1||scClassIndex=2||scClassLength=7]/body/layoutBody/member[Class=QScreen_Quality_Management_1||scClass=VLayout||index=4||length=9||classIndex=0||classLength=1||scClassIndex=4||scClassLength=9]/body/layoutBody/member[Class=QScreen_Nonconformances_2||scClass=VLayout||index=3||length=7||classIndex=0||classLength=1||scClassIndex=3||scClassLength=7]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Data_Binder_Linked_Content_Q||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Containments_2||scClass=VLayout||index=1||length=8||classIndex=0||classLength=1||scClassIndex=1||scClassLength=8]/component/body/row[0]/col[fieldName=itemRef||0]'
    ).dblclick()
  }

  openDetails() {
    cy.getSC(
      '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Linked_Content||scClass=VLayout||index=2||length=7||classIndex=0||classLength=1||scClassIndex=2||scClassLength=7]/body/layoutBody/member[Class=QScreen_Quality_Management_1||scClass=VLayout||index=4||length=9||classIndex=0||classLength=1||scClassIndex=4||scClassLength=9]/body/layoutBody/member[Class=QScreen_Nonconformances_2||scClass=VLayout||index=3||length=7||classIndex=0||classLength=1||scClassIndex=3||scClassLength=7]/component/member[Class=QScreen_Comet_Objects_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Home_2||scClass=VLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=3]/component/member[Class=QScreen_Comet_Objects_Home||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=0||length=2||classIndex=0||classLength=2||roleIndex=0||roleLength=2||title=Details||scRole=button]/'
    ).click()
  }

  checkFormsandFields(moduleKey, subModuleKey) {

    cy.fixture('qualityManagement').then(data => {

      const moduleData = data[moduleKey]?.[subModuleKey];

      if (!moduleData) {
        throw new Error(`Invalid fixture path: ${moduleKey} → ${subModuleKey}`);
      }

      const sections = normalizeAccordionSections(moduleData.accordionSections);

      if (sections.length) {

        sections.forEach(section => {

          if (section.name) {
            cy.log(`SECTION: ${section.name}`);
            openAccordionIfClosed(section.name);
          }

          section.fields.forEach(field => {
            cy.log(`Validating field: ${field}`);
            ensureFieldVisible(field);
            cy.get(FIELD_LOCATOR).contains(field).should('exist');
          });

          if (section.name) {
            closeAccordionIfOpen(section.name);
          }
        });

      }
      // 🔹 CASE: NO ACCORDIONS, BUT DIRECT FIELDS
      else if (moduleData.fields?.length) {

        moduleData.fields.forEach(field => {
          cy.log(`Validating field: ${field}`);
          ensureFieldVisible(field);
          cy.get(FIELD_LOCATOR).contains(field).should('exist');
        });

      }
      else {
        cy.log('No form fields to validate for this module');
      }

      cy.log('Form & field validation completed successfully');
    });
  }

  openRelatedObjects() {
    cy.getSC(
      '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Linked_Content||scClass=VLayout||index=2||length=7||classIndex=0||classLength=1||scClassIndex=2||scClassLength=7]/body/layoutBody/member[Class=QScreen_Quality_Management_1||scClass=VLayout||index=4||length=9||classIndex=0||classLength=1||scClassIndex=4||scClassLength=9]/body/layoutBody/member[Class=QScreen_Nonconformances_2||scClass=VLayout||index=3||length=7||classIndex=0||classLength=1||scClassIndex=3||scClassLength=7]/component/member[Class=QScreen_Comet_Objects_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Home_2||scClass=VLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=3]/component/member[Class=QScreen_Comet_Objects_Home||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=1||length=2||classIndex=1||classLength=2||roleIndex=1||roleLength=2||title=Related%20Objects||scRole=button]/'
    ).click()
  }

  checkRelatedObjects() {
    cy.fixture("qualityManagement").then(data => {
      const relatedObj = data.Nonconformances.Containments.relatedObjects;
      cy.log("Validating Related Objects");
      relatedObj.forEach(obj => {
        cy.get('td.multiLayoutButtonNoLeftBorderTextSelected,td.multiLayoutButtonText').contains(obj).should("be.visible");
      });
    })
  }

  minimizeARecord() {
    cy.getSC(
      '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Linked_Content||scClass=VLayout||index=2||length=7||classIndex=0||classLength=1||scClassIndex=2||scClassLength=7]/body/layoutBody/member[Class=QScreen_Quality_Management_1||scClass=VLayout||index=4||length=9||classIndex=0||classLength=1||scClassIndex=4||scClassLength=9]/body/layoutBody/member[Class=QScreen_Nonconformances_2||scClass=VLayout||index=3||length=7||classIndex=0||classLength=1||scClassIndex=3||scClassLength=7]/selectorButton/openButton/icon'
    ).click()
  }

  rightClickARecord() {
    cy.getSC(
      '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Linked_Content||scClass=VLayout||index=2||length=7||classIndex=0||classLength=1||scClassIndex=2||scClassLength=7]/body/layoutBody/member[Class=QScreen_Quality_Management_1||scClass=VLayout||index=4||length=9||classIndex=0||classLength=1||scClassIndex=4||scClassLength=9]/body/layoutBody/member[Class=QScreen_Nonconformances_2||scClass=VLayout||index=3||length=7||classIndex=0||classLength=1||scClassIndex=3||scClassLength=7]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Data_Binder_Linked_Content_Q||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Containments_2||scClass=VLayout||index=1||length=8||classIndex=0||classLength=1||scClassIndex=1||scClassLength=8]/component/body/row[0]/col[fieldName=itemRef||0]'
    ).rightclick()
  }

  addBookmark() {
    cy.getSC('//Menu[level=0]/body/row[0]/col[fieldName=itemName||1]').click();
  }
}
const FIELD_LOCATOR = 'td.formTitle[align="left"]';

const SCROLL_CLICK_LOCATOR =
  '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Smart_Content||scClass=VLayout||index=0||length=7||classIndex=0||classLength=1||scClassIndex=0||scClassLength=7]/component/member[Class=QScreen_Data_Binder_Smart_Content_La||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Quality_Management_2||scClass=VLayout||index=4||length=9||classIndex=0||classLength=1||scClassIndex=4||scClassLength=9]/body/layoutBody/member[Class=QScreen_Nonconformances_5||scClass=VLayout||index=3||length=7||classIndex=0||classLength=1||scClassIndex=3||scClassLength=7]/body/layoutBody/member[Class=QScreen_Containments_2||scClass=VLayout||index=1||length=8||classIndex=0||classLength=1||scClassIndex=1||scClassLength=8]/body/layoutBody/member[Class=QScreen_All_68||scClass=VLayout||index=1||length=2||classIndex=0||classLength=1||scClassIndex=1||scClassLength=2]/component/member[Class=QScreen_Comet_Objects_Home||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Details||scClass=VLayout||index=0||length=2||classIndex=0||classLength=1||scClassIndex=0||scClassLength=2]/component/vscrollbar/blank10'
  


function ensureFieldVisible(fieldName, attempt = 0) {
  if (attempt > 50) {
    throw new Error(`Field "${fieldName}" not visible after 50 scroll attempts`);
  }

  cy.get('body').then($body => {
    const field = $body.find(`${FIELD_LOCATOR}:contains("${fieldName}")`);

    if (field.length && Cypress.$(field).is(':visible')) {
      cy.log(`Field visible: ${fieldName}`);
      return;
    }

    cy.log(`Scrolling to find: ${fieldName}`);
    cy.getSC(SCROLL_CLICK_LOCATOR).click({ force: true });
    cy.wait(300);

    ensureFieldVisible(fieldName, attempt + 1);
  });
}


function openAccordionIfClosed(sectionName) {
  cy.get('body').then($body => {
    const closed = $body
      .find("img[src*='opener_closed']")
      .siblings("div")
      .filter(`:contains("${sectionName}")`);

    if (closed.length) {
      cy.log(`Opening accordion: ${sectionName}`);
      cy.wrap(closed.first()).click({ force: true });
      cy.wait(500);
    }
  });
}

function closeAccordionIfOpen(sectionName) {
  cy.get('body').then($body => {
    const opened = $body
      .find("img[src*='opener_opened']")
      .siblings("div")
      .filter(`:contains("${sectionName}")`);

    if (opened.length) {
      cy.log(`Closing accordion: ${sectionName}`);
      cy.wrap(opened.first()).click({ force: true });
      cy.wait(500);
    }
  });
}

function normalizeAccordionSections(rawSections) {

  if (Array.isArray(rawSections) && typeof rawSections[0] === 'object') {
    return rawSections;
  }

  if (Array.isArray(rawSections) && typeof rawSections[0] === 'string') {
    return [{
      name: null,
      fields: rawSections
    }];
  }
  return [];
}
