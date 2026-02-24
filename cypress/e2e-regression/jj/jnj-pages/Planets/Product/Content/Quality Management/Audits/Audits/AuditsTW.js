export class AuditsTW {

  open() {
    cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Content||scClass=VLayout||index=0||length=8||classIndex=0||classLength=1||scClassIndex=0||scClassLength=8]/component/member[Class=QScreen_Product_Family__Product_Con||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/member[Class=QScreen_Content_Layout||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Quality_Management||scClass=VLayout||index=3||length=9||classIndex=0||classLength=1||scClassIndex=3||scClassLength=9]/body/layoutBody/member[Class=QScreen_Audits_2||scClass=VLayout||index=7||length=10||classIndex=0||classLength=1||scClassIndex=7||scClassLength=10]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=0||length=2||classIndex=0||classLength=2||roleIndex=0||roleLength=2||title=Audits||scRole=button]/').click()
  }

  trackwiseSourceSelector() {
    cy.getSC(
      '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Content||scClass=VLayout||index=0||length=8||classIndex=0||classLength=1||scClassIndex=0||scClassLength=8]/component/member[Class=QScreen_Product_Family__Product_Con||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/member[Class=QScreen_Content_Layout||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Quality_Management||scClass=VLayout||index=3||length=9||classIndex=0||classLength=1||scClassIndex=3||scClassLength=9]/body/layoutBody/member[Class=QScreen_Audits_2||scClass=VLayout||index=7||length=10||classIndex=0||classLength=1||scClassIndex=7||scClassLength=10]/body/layoutBody/member[Class=QScreen_Audits_3||scClass=VLayout||index=0||length=2||classIndex=0||classLength=1||scClassIndex=0||scClassLength=2]/body/layoutBar/controlTab/member[Class=ToolStripMenuButton||index=0||length=1||classIndex=0||classLength=1||roleIndex=0||roleLength=1||title=COMET||scRole=button]/icon'
    ).click()
    cy.getSC('//Menu[level=0]/body/row[title=Trackwise||1]/col[fieldName=title||1]').click()
  }

  openAll(){
    cy.getSC(
      '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Content||scClass=VLayout||index=0||length=8||classIndex=0||classLength=1||scClassIndex=0||scClassLength=8]/component/member[Class=QScreen_Product_Family__Product_Con||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/member[Class=QScreen_Content_Layout||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Quality_Management||scClass=VLayout||index=3||length=9||classIndex=0||classLength=1||scClassIndex=3||scClassLength=9]/body/layoutBody/member[Class=QScreen_Audits_2||scClass=VLayout||index=7||length=10||classIndex=0||classLength=1||scClassIndex=7||scClassLength=10]/body/layoutBody/member[Class=QScreen_Audits_3||scClass=VLayout||index=0||length=2||classIndex=0||classLength=1||scClassIndex=0||scClassLength=2]/body/layoutBody/member[Class=QScreen_Trackwise_10||scClass=VLayout||index=1||length=2||classIndex=0||classLength=1||scClassIndex=1||scClassLength=2]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=2||length=3||classIndex=2||classLength=3||roleIndex=2||roleLength=3||title=All||scRole=button]/'
    ).click()
  }

  refresh() {
    cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Content||scClass=VLayout||index=0||length=8||classIndex=0||classLength=1||scClassIndex=0||scClassLength=8]/component/member[Class=QScreen_Product_Family__Product_Con||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/member[Class=QScreen_Content_Layout||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Quality_Management||scClass=VLayout||index=3||length=9||classIndex=0||classLength=1||scClassIndex=3||scClassLength=9]/body/layoutBody/member[Class=QScreen_Audits_2||scClass=VLayout||index=7||length=10||classIndex=0||classLength=1||scClassIndex=7||scClassLength=10]/body/layoutBody/member[Class=QScreen_Audits_3||scClass=VLayout||index=0||length=2||classIndex=0||classLength=1||scClassIndex=0||scClassLength=2]/body/layoutBody/member[Class=QScreen_Trackwise_10||scClass=VLayout||index=1||length=2||classIndex=0||classLength=1||scClassIndex=1||scClassLength=2]/body/layoutBody/member[Class=QScreen_All_41||scClass=VLayout||index=2||length=3||classIndex=0||classLength=1||scClassIndex=2||scClassLength=3]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_All_Selector_Trackwise||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/gridBar/refreshButton/icon').click();
  }


  checkColumns() {
    cy.fixture('qualityManagement').then(data => {
      const expectedColumnNames = data.Audits.AuditsTW.columnNames;

      cy.getColumnsAndTypes(
        '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Content||scClass=VLayout||index=0||length=8||classIndex=0||classLength=1||scClassIndex=0||scClassLength=8]/component/member[Class=QScreen_Product_Family__Product_Con||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/member[Class=QScreen_Content_Layout||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Quality_Management||scClass=VLayout||index=3||length=9||classIndex=0||classLength=1||scClassIndex=3||scClassLength=9]/body/layoutBody/member[Class=QScreen_Audits_2||scClass=VLayout||index=7||length=10||classIndex=0||classLength=1||scClassIndex=7||scClassLength=10]/body/layoutBody/member[Class=QScreen_Audits_3||scClass=VLayout||index=0||length=2||classIndex=0||classLength=1||scClassIndex=0||scClassLength=2]/body/layoutBody/member[Class=QScreen_Trackwise_10||scClass=VLayout||index=1||length=2||classIndex=0||classLength=1||scClassIndex=1||scClassLength=2]/body/layoutBody/member[Class=QScreen_All_41||scClass=VLayout||index=2||length=3||classIndex=0||classLength=1||scClassIndex=2||scClassLength=3]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_All_Selector_Trackwise||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/header/headerButton[fieldName=itemRef]/'
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

  checkMultiChoicePickerColumns() {
    cy.fixture("qualityManagement").then(data => {
      const pickerColumns = data.Audits.AuditsTW.multiChoicePickerColumns;
      pickerColumns.forEach(colName => {
        cy.getSC(
          '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Content||scClass=VLayout||index=0||length=8||classIndex=0||classLength=1||scClassIndex=0||scClassLength=8]/component/member[Class=QScreen_Product_Family__Product_Con||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/member[Class=QScreen_Content_Layout||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Quality_Management||scClass=VLayout||index=3||length=9||classIndex=0||classLength=1||scClassIndex=3||scClassLength=9]/body/layoutBody/member[Class=QScreen_Audits_2||scClass=VLayout||index=7||length=10||classIndex=0||classLength=1||scClassIndex=7||scClassLength=10]/body/layoutBody/member[Class=QScreen_Audits_3||scClass=VLayout||index=0||length=2||classIndex=0||classLength=1||scClassIndex=0||scClassLength=2]/body/layoutBody/member[Class=QScreen_Trackwise_10||scClass=VLayout||index=1||length=2||classIndex=0||classLength=1||scClassIndex=1||scClassLength=2]/body/layoutBody/member[Class=QScreen_All_41||scClass=VLayout||index=2||length=3||classIndex=0||classLength=1||scClassIndex=2||scClassLength=3]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_All_Selector_Trackwise||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/filterEditor/editRowForm/item[title=' + encodeURIComponent(colName) + '||Class=SetFilterItem]/[icon="picker"]'
        ).click({ force: true })
      })
      this.clickAnywhereElse();
    });
  }
  clickAnywhereElse() {
    cy.wait(200);
    cy.get('body').trigger('keydown', { keyCode: 27 });
    cy.wait(200);
    cy.get('body').trigger('keyup', { keyCode: 27 });
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

  openARecord() {
    cy.getSC(
      '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Content||scClass=VLayout||index=0||length=8||classIndex=0||classLength=1||scClassIndex=0||scClassLength=8]/component/member[Class=QScreen_Product_Family__Product_Con||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/member[Class=QScreen_Content_Layout||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Quality_Management||scClass=VLayout||index=3||length=9||classIndex=0||classLength=1||scClassIndex=3||scClassLength=9]/body/layoutBody/member[Class=QScreen_Audits_2||scClass=VLayout||index=7||length=10||classIndex=0||classLength=1||scClassIndex=7||scClassLength=10]/body/layoutBody/member[Class=QScreen_Audits_3||scClass=VLayout||index=0||length=2||classIndex=0||classLength=1||scClassIndex=0||scClassLength=2]/body/layoutBody/member[Class=QScreen_Trackwise_10||scClass=VLayout||index=1||length=2||classIndex=0||classLength=1||scClassIndex=1||scClassLength=2]/body/layoutBody/member[Class=QScreen_All_41||scClass=VLayout||index=2||length=3||classIndex=0||classLength=1||scClassIndex=2||scClassLength=3]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_All_Selector_Trackwise||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/body/row[0]/col[fieldName=itemRef||1]'
    ).dblclick()
  }

  openDetails() {
    cy.getSC(
      '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Content||scClass=VLayout||index=0||length=8||classIndex=0||classLength=1||scClassIndex=0||scClassLength=8]/component/member[Class=QScreen_Product_Family__Product_Con||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/member[Class=QScreen_Content_Layout||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Quality_Management||scClass=VLayout||index=3||length=9||classIndex=0||classLength=1||scClassIndex=3||scClassLength=9]/body/layoutBody/member[Class=QScreen_Audits_2||scClass=VLayout||index=7||length=10||classIndex=0||classLength=1||scClassIndex=7||scClassLength=10]/body/layoutBody/member[Class=QScreen_Audits_3||scClass=VLayout||index=0||length=2||classIndex=0||classLength=1||scClassIndex=0||scClassLength=2]/body/layoutBody/member[Class=QScreen_Trackwise_10||scClass=VLayout||index=1||length=2||classIndex=0||classLength=1||scClassIndex=1||scClassLength=2]/body/layoutBody/member[Class=QScreen_All_41||scClass=VLayout||index=2||length=3||classIndex=0||classLength=1||scClassIndex=2||scClassLength=3]/component/member[Class=QScreen_TrackWise_Audit_Home||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=0||length=2||classIndex=0||classLength=2||roleIndex=0||roleLength=2||title=Details||scRole=button]/'
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
      '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Content||scClass=VLayout||index=0||length=8||classIndex=0||classLength=1||scClassIndex=0||scClassLength=8]/component/member[Class=QScreen_Product_Family__Product_Con||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/member[Class=QScreen_Content_Layout||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Quality_Management||scClass=VLayout||index=3||length=9||classIndex=0||classLength=1||scClassIndex=3||scClassLength=9]/body/layoutBody/member[Class=QScreen_Audits_2||scClass=VLayout||index=7||length=10||classIndex=0||classLength=1||scClassIndex=7||scClassLength=10]/body/layoutBody/member[Class=QScreen_Audits_3||scClass=VLayout||index=0||length=2||classIndex=0||classLength=1||scClassIndex=0||scClassLength=2]/body/layoutBody/member[Class=QScreen_Trackwise_10||scClass=VLayout||index=1||length=2||classIndex=0||classLength=1||scClassIndex=1||scClassLength=2]/body/layoutBody/member[Class=QScreen_All_41||scClass=VLayout||index=2||length=3||classIndex=0||classLength=1||scClassIndex=2||scClassLength=3]/component/member[Class=QScreen_TrackWise_Audit_Home||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=1||length=2||classIndex=1||classLength=2||roleIndex=1||roleLength=2||title=Related%20Objects||scRole=button]/'
    ).click()
  }

  checkRelatedObjects() {
    cy.fixture("qualityManagement").then(data => {
      const relatedObj = data.Audits.AuditsTW.relatedObjects;
      cy.log("Validating Related Objects");
      relatedObj.forEach(obj => {
        cy.get('td.multiLayoutButtonNoLeftBorderTextSelected,td.multiLayoutButtonText').contains(obj).should("exist");
      });
    })
  }

  minimizeARecord() {
    cy.getSC(
      '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Content||scClass=VLayout||index=0||length=8||classIndex=0||classLength=1||scClassIndex=0||scClassLength=8]/component/member[Class=QScreen_Product_Family__Product_Con||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/member[Class=QScreen_Content_Layout||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Quality_Management||scClass=VLayout||index=3||length=9||classIndex=0||classLength=1||scClassIndex=3||scClassLength=9]/body/layoutBody/member[Class=QScreen_Audits_2||scClass=VLayout||index=7||length=10||classIndex=0||classLength=1||scClassIndex=7||scClassLength=10]/body/layoutBody/member[Class=QScreen_Audits_3||scClass=VLayout||index=0||length=2||classIndex=0||classLength=1||scClassIndex=0||scClassLength=2]/body/layoutBody/member[Class=QScreen_Trackwise_10||scClass=VLayout||index=1||length=2||classIndex=0||classLength=1||scClassIndex=1||scClassLength=2]/body/layoutBody/member[Class=QScreen_All_41||scClass=VLayout||index=2||length=3||classIndex=0||classLength=1||scClassIndex=2||scClassLength=3]/selectorButton/openButton/icon'
    ).click()
  }

  rightClickARecord() {
    cy.getSC(
      '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Content||scClass=VLayout||index=0||length=8||classIndex=0||classLength=1||scClassIndex=0||scClassLength=8]/component/member[Class=QScreen_Product_Family__Product_Con||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/member[Class=QScreen_Content_Layout||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Quality_Management||scClass=VLayout||index=3||length=9||classIndex=0||classLength=1||scClassIndex=3||scClassLength=9]/body/layoutBody/member[Class=QScreen_Audits_2||scClass=VLayout||index=7||length=10||classIndex=0||classLength=1||scClassIndex=7||scClassLength=10]/body/layoutBody/member[Class=QScreen_Audits_3||scClass=VLayout||index=0||length=2||classIndex=0||classLength=1||scClassIndex=0||scClassLength=2]/body/layoutBody/member[Class=QScreen_Trackwise_10||scClass=VLayout||index=1||length=2||classIndex=0||classLength=1||scClassIndex=1||scClassLength=2]/body/layoutBody/member[Class=QScreen_All_41||scClass=VLayout||index=2||length=3||classIndex=0||classLength=1||scClassIndex=2||scClassLength=3]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_All_Selector_Trackwise||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/body/row[0]/col[fieldName=itemRef||1]'
    ).rightclick()
  }

  addBookmark() {
    cy.getSC('//Menu[level=0]/body/row[0]/col[fieldName=itemName||1]').click();
  }

  clickChartIcon() {
    cy.getSC(
      '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Content||scClass=VLayout||index=0||length=8||classIndex=0||classLength=1||scClassIndex=0||scClassLength=8]/component/member[Class=QScreen_Product_Family__Product_Con||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/member[Class=QScreen_Content_Layout||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Quality_Management||scClass=VLayout||index=3||length=9||classIndex=0||classLength=1||scClassIndex=3||scClassLength=9]/body/layoutBody/member[Class=QScreen_Audits_2||scClass=VLayout||index=7||length=10||classIndex=0||classLength=1||scClassIndex=7||scClassLength=10]/body/layoutBody/member[Class=QScreen_Audits_3||scClass=VLayout||index=0||length=2||classIndex=0||classLength=1||scClassIndex=0||scClassLength=2]/body/layoutBody/member[Class=QScreen_Trackwise_10||scClass=VLayout||index=1||length=2||classIndex=0||classLength=1||scClassIndex=1||scClassLength=2]/body/layoutBody/member[Class=QScreen_All_41||scClass=VLayout||index=2||length=3||classIndex=0||classLength=1||scClassIndex=2||scClassLength=3]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_All_Selector_Trackwise||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/gridBar/chartButton/icon'
    ).click({ force: true })
    cy.get('body').then((body) => {
      if (body.find('div[aria-label="Facet Picker"]').length > 0) {
        cy.log('Chart opened')
      }
      else {
        cy.getSC(
          '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Content||scClass=VLayout||index=0||length=8||classIndex=0||classLength=1||scClassIndex=0||scClassLength=8]/component/member[Class=QScreen_Product_Family__Product_Con||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/member[Class=QScreen_Content_Layout||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Quality_Management||scClass=VLayout||index=3||length=9||classIndex=0||classLength=1||scClassIndex=3||scClassLength=9]/body/layoutBody/member[Class=QScreen_Audits_2||scClass=VLayout||index=7||length=10||classIndex=0||classLength=1||scClassIndex=7||scClassLength=10]/body/layoutBody/member[Class=QScreen_Audits_3||scClass=VLayout||index=0||length=2||classIndex=0||classLength=1||scClassIndex=0||scClassLength=2]/body/layoutBody/member[Class=QScreen_Trackwise_10||scClass=VLayout||index=1||length=2||classIndex=0||classLength=1||scClassIndex=1||scClassLength=2]/body/layoutBody/member[Class=QScreen_All_41||scClass=VLayout||index=2||length=3||classIndex=0||classLength=1||scClassIndex=2||scClassLength=3]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_All_Selector_Trackwise||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/gridBar/chartButton/icon'
        ).click({ force: true })
      }
    })
  }
  constructor() {
    this.Analytics = new Analytics()
    this.State = new State()
    this.StateorAssignedTo = new StateorAssignedTo()
  }

}

class Analytics {

  open() {
    cy.getSC(
      '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Content||scClass=VLayout||index=0||length=8||classIndex=0||classLength=1||scClassIndex=0||scClassLength=8]/component/member[Class=QScreen_Product_Family__Product_Con||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/member[Class=QScreen_Content_Layout||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Quality_Management||scClass=VLayout||index=3||length=9||classIndex=0||classLength=1||scClassIndex=3||scClassLength=9]/body/layoutBody/member[Class=QScreen_Audits_2||scClass=VLayout||index=7||length=10||classIndex=0||classLength=1||scClassIndex=7||scClassLength=10]/body/layoutBody/member[Class=QScreen_Audits_3||scClass=VLayout||index=0||length=2||classIndex=0||classLength=1||scClassIndex=0||scClassLength=2]/body/layoutBody/member[Class=QScreen_Trackwise_10||scClass=VLayout||index=1||length=2||classIndex=0||classLength=1||scClassIndex=1||scClassLength=2]/body/layoutBody/member[Class=QScreen_All_41||scClass=VLayout||index=2||length=3||classIndex=0||classLength=1||scClassIndex=2||scClassLength=3]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_All_Selector_Trackwise||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/chartView/member[Class=QScreen_TrackWise_Audit_Charts||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=0||length=3||classIndex=0||classLength=3||roleIndex=0||roleLength=3||title=Analytics||scRole=button]/'
    ).click()
  }
  refresh() {
    cy.getSC(
      '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Content||scClass=VLayout||index=0||length=8||classIndex=0||classLength=1||scClassIndex=0||scClassLength=8]/component/member[Class=QScreen_Product_Family__Product_Con||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/member[Class=QScreen_Content_Layout||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Quality_Management||scClass=VLayout||index=3||length=9||classIndex=0||classLength=1||scClassIndex=3||scClassLength=9]/body/layoutBody/member[Class=QScreen_Audits_2||scClass=VLayout||index=7||length=10||classIndex=0||classLength=1||scClassIndex=7||scClassLength=10]/body/layoutBody/member[Class=QScreen_Audits_3||scClass=VLayout||index=0||length=2||classIndex=0||classLength=1||scClassIndex=0||scClassLength=2]/body/layoutBody/member[Class=QScreen_Trackwise_10||scClass=VLayout||index=1||length=2||classIndex=0||classLength=1||scClassIndex=1||scClassLength=2]/body/layoutBody/member[Class=QScreen_All_41||scClass=VLayout||index=2||length=3||classIndex=0||classLength=1||scClassIndex=2||scClassLength=3]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_All_Selector_Trackwise||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/chartView/member[Class=QScreen_TrackWise_Audit_Charts||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Analytics||scClass=VLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=3]/component/gridBar/refreshButton/icon'
    ).click()
  }
  filter() {
    cy.getSC(
      '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Content||scClass=VLayout||index=0||length=8||classIndex=0||classLength=1||scClassIndex=0||scClassLength=8]/component/member[Class=QScreen_Product_Family__Product_Con||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/member[Class=QScreen_Content_Layout||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Quality_Management||scClass=VLayout||index=3||length=9||classIndex=0||classLength=1||scClassIndex=3||scClassLength=9]/body/layoutBody/member[Class=QScreen_Audits_2||scClass=VLayout||index=7||length=10||classIndex=0||classLength=1||scClassIndex=7||scClassLength=10]/body/layoutBody/member[Class=QScreen_Audits_3||scClass=VLayout||index=0||length=2||classIndex=0||classLength=1||scClassIndex=0||scClassLength=2]/body/layoutBody/member[Class=QScreen_Trackwise_10||scClass=VLayout||index=1||length=2||classIndex=0||classLength=1||scClassIndex=1||scClassLength=2]/body/layoutBody/member[Class=QScreen_All_41||scClass=VLayout||index=2||length=3||classIndex=0||classLength=1||scClassIndex=2||scClassLength=3]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_All_Selector_Trackwise||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/chartView/member[Class=QScreen_TrackWise_Audit_Charts||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Analytics||scClass=VLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=3]/component/gridBar/facetFilterEditorButton/icon'
    ).click()
  }

  checkFilterFunctionality() {

    const toSentenceCase = (str) =>
      str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

    const toLower = (str) => str.toLowerCase();

    cy.get('tbody>tr>td.innerHeader>div').eq(0).invoke('text').then(rowText => {

      const rowValue = rowText.trim();
      cy.log(`Row Value: ${rowValue}`);

      cy.get('td.multicomboxButton[align="left"]').first().invoke('text').then(rowAttrText => {

        const rowAttributeUI = rowAttrText.trim(); // Status
        const rowAttrName = toLower(rowAttributeUI); // status
        const rowAttrTitle = toSentenceCase(rowAttributeUI); // Status

        cy.get('td.multicomboxButton[align="left"]').last().invoke('text').then(colAttrText => {

          const columnAttributeUI = colAttrText.trim(); // Owner
          const columnAttrTitle = toSentenceCase(columnAttributeUI);

          cy.get('td[align="left"][valign="center"]').eq(0).invoke('text').then(colText => {

            const columnValue = colText.trim(); // Alison

            cy.get('form[id*="isc"]:visible').last().within(() => {

              /* ===============================
                 🔹 ROW FILTER (Status)
              =============================== */
              cy.get('span.comboBoxItemPicker', { timeout: 2000 }).then($rowPicker => {

                if ($rowPicker.length > 0) {
                  cy.log('Row filter: DROPDOWN');

                  cy.wrap($rowPicker).first().click({ force: true });
                  cy.wait(3000);

                  cy.getSC(
                    `//QMainPageBase[ID="MainPage"]//item[name=${rowAttrName}||title=${rowAttrTitle}||Class=SetFilterItem]/deselectAllButton/`
                  ).click({ force: true });

                  cy.getSC(
                    `//QMainPageBase[ID="MainPage"]//item[name=${rowAttrName}||title=${rowAttrTitle}||Class=SetFilterItem]
                   /filterForm/item[name=filter||Class=TextItem]/element`
                  ).click().clear().type(`${rowValue}{enter}`);

                  cy.getSC(
                    `//QMainPageBase[ID="MainPage"]//item[name=${rowAttrName}||title=${rowAttrTitle}||Class=SetFilterItem]
                   /pickList/body/row[0]/col[isCheckboxField=true||0]/valueicon`
                  ).click({ force: true });

                } else {
                  cy.log('Row filter: TEXT');

                  cy.getSC(
                    `//QMainPageBase[ID="MainPage"]//item[name=${rowAttrName}||title=${rowAttrTitle}||Class=TextItem]/element`
                  ).click().clear().type(`${rowValue}{enter}`);
                }
              });

              /* ===============================
                 🔹 COLUMN FILTER (Owner)
              =============================== */
              cy.get('span.comboBoxItemPicker', { timeout: 2000 }).then($colPicker => {

                if ($colPicker.length > 0) {
                  cy.log('Column filter: DROPDOWN');

                  cy.wrap($colPicker).last().click({ force: true });
                  cy.wait(3000);

                  cy.getSC(
                    `//QMainPageBase[ID="MainPage"]//item[title=${columnAttrTitle}||Class=SetFilterItem]/deselectAllButton/`
                  ).click({ force: true });

                  cy.getSC(
                    `//QMainPageBase[ID="MainPage"]//item[title=${columnAttrTitle}||Class=SetFilterItem]
                   /filterForm/item[name=filter||Class=TextItem]/element`
                  ).click().clear().type(`${columnValue}{enter}`);

                  cy.getSC(
                    `//QMainPageBase[ID="MainPage"]//item[title=${columnAttrTitle}||Class=SetFilterItem]
                   /pickList/body/row[0]/col[isCheckboxField=true||0]/valueicon`
                  ).click({ force: true });

                } else {
                  cy.log('Column filter: TEXT');

                  cy.getSC(
                    `//QMainPageBase[ID="MainPage"]//item[title=${columnAttrTitle}||Class=TextItem]/element`
                  ).click().clear().type(`${columnValue}{enter}`);
                }
              });

            });
          });
        });
      });
    });
  }

  facetPicker() {
    cy.getSC(
      '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Content||scClass=VLayout||index=0||length=8||classIndex=0||classLength=1||scClassIndex=0||scClassLength=8]/component/member[Class=QScreen_Product_Family__Product_Con||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/member[Class=QScreen_Content_Layout||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Quality_Management||scClass=VLayout||index=3||length=9||classIndex=0||classLength=1||scClassIndex=3||scClassLength=9]/body/layoutBody/member[Class=QScreen_Audits_2||scClass=VLayout||index=7||length=10||classIndex=0||classLength=1||scClassIndex=7||scClassLength=10]/body/layoutBody/member[Class=QScreen_Audits_3||scClass=VLayout||index=0||length=2||classIndex=0||classLength=1||scClassIndex=0||scClassLength=2]/body/layoutBody/member[Class=QScreen_Trackwise_10||scClass=VLayout||index=1||length=2||classIndex=0||classLength=1||scClassIndex=1||scClassLength=2]/body/layoutBody/member[Class=QScreen_All_41||scClass=VLayout||index=2||length=3||classIndex=0||classLength=1||scClassIndex=2||scClassLength=3]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_All_Selector_Trackwise||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/chartView/member[Class=QScreen_TrackWise_Audit_Charts||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Analytics||scClass=VLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=3]/component/gridBar/facetPickerButton/icon'
    ).click()
  }
removeRowAttributes(){
  cy.getSC(
    '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Content||scClass=VLayout||index=0||length=8||classIndex=0||classLength=1||scClassIndex=0||scClassLength=8]/component/member[Class=QScreen_Product_Family__Product_Con||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/member[Class=QScreen_Content_Layout||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Quality_Management||scClass=VLayout||index=3||length=9||classIndex=0||classLength=1||scClassIndex=3||scClassLength=9]/body/layoutBody/member[Class=QScreen_Audits_2||scClass=VLayout||index=7||length=10||classIndex=0||classLength=1||scClassIndex=7||scClassLength=10]/body/layoutBody/member[Class=QScreen_Audits_3||scClass=VLayout||index=0||length=2||classIndex=0||classLength=1||scClassIndex=0||scClassLength=2]/body/layoutBody/member[Class=QScreen_Trackwise_10||scClass=VLayout||index=1||length=2||classIndex=0||classLength=1||scClassIndex=1||scClassLength=2]/body/layoutBody/member[Class=QScreen_All_41||scClass=VLayout||index=2||length=3||classIndex=0||classLength=1||scClassIndex=2||scClassLength=3]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_All_Selector_Trackwise||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/chartView/member[Class=QScreen_TrackWise_Audit_Charts||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Analytics||scClass=VLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=3]/component/member[Class=DynamicForm||index=1||length=4||classIndex=0||classLength=2]/item[name=rowFacets||title=Row%20Attribute(s)||value=AUDIT_DEPARTMENTS||index=0||Class=QMultiComboBoxItem]/button[Class=IButton||index=1||length=2||classIndex=0||classLength=1||roleIndex=0||roleLength=1||title=Audit%20Departments||scRole=button]/icon'
  ).click()
  cy.wait(2000)
}
removeColumnAttributes(){
  cy.getSC(
    '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Content||scClass=VLayout||index=0||length=8||classIndex=0||classLength=1||scClassIndex=0||scClassLength=8]/component/member[Class=QScreen_Product_Family__Product_Con||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/member[Class=QScreen_Content_Layout||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Quality_Management||scClass=VLayout||index=3||length=9||classIndex=0||classLength=1||scClassIndex=3||scClassLength=9]/body/layoutBody/member[Class=QScreen_Audits_2||scClass=VLayout||index=7||length=10||classIndex=0||classLength=1||scClassIndex=7||scClassLength=10]/body/layoutBody/member[Class=QScreen_Audits_3||scClass=VLayout||index=0||length=2||classIndex=0||classLength=1||scClassIndex=0||scClassLength=2]/body/layoutBody/member[Class=QScreen_Trackwise_10||scClass=VLayout||index=1||length=2||classIndex=0||classLength=1||scClassIndex=1||scClassLength=2]/body/layoutBody/member[Class=QScreen_All_41||scClass=VLayout||index=2||length=3||classIndex=0||classLength=1||scClassIndex=2||scClassLength=3]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_All_Selector_Trackwise||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/chartView/member[Class=QScreen_TrackWise_Audit_Charts||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Analytics||scClass=VLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=3]/component/member[Class=DynamicForm||index=1||length=4||classIndex=0||classLength=2]/item[name=columnFacets||title=Column%20Attribute(s)||value=STATE||index=2||Class=QMultiComboBoxItem]/button[Class=IButton||index=1||length=2||classIndex=0||classLength=1||roleIndex=0||roleLength=1||title=State||scRole=button]/icon'
  ).click()
}
  addRowAttributeClick() {
    cy.getSC(
      '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Content||scClass=VLayout||index=0||length=8||classIndex=0||classLength=1||scClassIndex=0||scClassLength=8]/component/member[Class=QScreen_Product_Family__Product_Con||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/member[Class=QScreen_Content_Layout||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Quality_Management||scClass=VLayout||index=3||length=9||classIndex=0||classLength=1||scClassIndex=3||scClassLength=9]/body/layoutBody/member[Class=QScreen_Audits_2||scClass=VLayout||index=7||length=10||classIndex=0||classLength=1||scClassIndex=7||scClassLength=10]/body/layoutBody/member[Class=QScreen_Audits_3||scClass=VLayout||index=0||length=2||classIndex=0||classLength=1||scClassIndex=0||scClassLength=2]/body/layoutBody/member[Class=QScreen_Trackwise_10||scClass=VLayout||index=1||length=2||classIndex=0||classLength=1||scClassIndex=1||scClassLength=2]/body/layoutBody/member[Class=QScreen_All_41||scClass=VLayout||index=2||length=3||classIndex=0||classLength=1||scClassIndex=2||scClassLength=3]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_All_Selector_Trackwise||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/chartView/member[Class=QScreen_TrackWise_Audit_Charts||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Analytics||scClass=VLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=3]/component/member[Class=DynamicForm||index=1||length=4||classIndex=0||classLength=2]/item[name=rowFacets||title=Row%20Attribute(s)||index=0||Class=QMultiComboBoxItem]/comboForm/item[title=Row%20Attribute(s)||index=0||Class=ComboBoxItem]/[icon="picker"]'
    ).click()

    cy.fixture('qualityManagement').then(data => {

      // ✅ Expected values from fixture
      const expectedValues = data.Audits.AuditsTW.analyticsDropdownValues;

      // ✅ Actual values from UI
      const actualValues = [];

      cy.get('div[eventproxy="isc_PickListMenu_0"][class="listGrid"]')
        .within(() => {

          cy.get('td.cell > div,td.cellSelected > div').each(($el) => {
            const cleaned = $el.text()
              .replace(/\s+/g, ' ')
              .trim()
              .toLowerCase();

            actualValues.push(cleaned);
          })
            .then(() => {

              // 🔍 Debug logs (optional but useful)
              cy.log(`Expected: ${JSON.stringify(expectedValues)}`);
              cy.log(`Actual UI: ${JSON.stringify(actualValues)}`);

              expectedValues.forEach(expected => {
                const expectedCleaned = expected
                  .replace(/\s+/g, ' ')
                  .trim()
                  .toLowerCase();

                expect(
                  actualValues.includes(expectedCleaned),
                  `Expected value "${expected}" not found in UI values: ${JSON.stringify(actualValues)}`
                ).to.be.true;
              });

            });

        });

    })

    cy.getSC(
      '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Content||scClass=VLayout||index=0||length=8||classIndex=0||classLength=1||scClassIndex=0||scClassLength=8]/component/member[Class=QScreen_Product_Family__Product_Con||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/member[Class=QScreen_Content_Layout||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Quality_Management||scClass=VLayout||index=3||length=9||classIndex=0||classLength=1||scClassIndex=3||scClassLength=9]/body/layoutBody/member[Class=QScreen_Audits_2||scClass=VLayout||index=7||length=10||classIndex=0||classLength=1||scClassIndex=7||scClassLength=10]/body/layoutBody/member[Class=QScreen_Audits_3||scClass=VLayout||index=0||length=2||classIndex=0||classLength=1||scClassIndex=0||scClassLength=2]/body/layoutBody/member[Class=QScreen_Trackwise_10||scClass=VLayout||index=1||length=2||classIndex=0||classLength=1||scClassIndex=1||scClassLength=2]/body/layoutBody/member[Class=QScreen_All_41||scClass=VLayout||index=2||length=3||classIndex=0||classLength=1||scClassIndex=2||scClassLength=3]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_All_Selector_Trackwise||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/chartView/member[Class=QScreen_TrackWise_Audit_Charts||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Analytics||scClass=VLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=3]/component/member[Class=DynamicForm||index=1||length=4||classIndex=0||classLength=2]/item[name=rowFacets||title=Row%20Attribute(s)||index=0||Class=QMultiComboBoxItem]/comboForm/item[title=Row%20Attribute(s)||index=0||Class=ComboBoxItem]/[icon="picker"]'
    ).click()

  }

  addColumnAttributeClick() {
    cy.getSC(
      '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Content||scClass=VLayout||index=0||length=8||classIndex=0||classLength=1||scClassIndex=0||scClassLength=8]/component/member[Class=QScreen_Product_Family__Product_Con||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/member[Class=QScreen_Content_Layout||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Quality_Management||scClass=VLayout||index=3||length=9||classIndex=0||classLength=1||scClassIndex=3||scClassLength=9]/body/layoutBody/member[Class=QScreen_Audits_2||scClass=VLayout||index=7||length=10||classIndex=0||classLength=1||scClassIndex=7||scClassLength=10]/body/layoutBody/member[Class=QScreen_Audits_3||scClass=VLayout||index=0||length=2||classIndex=0||classLength=1||scClassIndex=0||scClassLength=2]/body/layoutBody/member[Class=QScreen_Trackwise_10||scClass=VLayout||index=1||length=2||classIndex=0||classLength=1||scClassIndex=1||scClassLength=2]/body/layoutBody/member[Class=QScreen_All_41||scClass=VLayout||index=2||length=3||classIndex=0||classLength=1||scClassIndex=2||scClassLength=3]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_All_Selector_Trackwise||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/chartView/member[Class=QScreen_TrackWise_Audit_Charts||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Analytics||scClass=VLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=3]/component/member[Class=DynamicForm||index=1||length=4||classIndex=0||classLength=2]/item[name=columnFacets||title=Column%20Attribute(s)||index=2||Class=QMultiComboBoxItem]/comboForm/item[title=Column%20Attribute(s)||index=0||Class=ComboBoxItem]/[icon="picker"]'
    ).click()

    cy.fixture('qualityManagement').then(data => {

      // ✅ Expected values from fixture
      const expectedValues = data.Audits.AuditsTW.analyticsDropdownValues;

      // ✅ Actual values from UI
      const actualValues = [];

      cy.get('div[eventproxy="isc_PickListMenu_0"][class="listGrid"]')
        .within(() => {

          cy.get('td.cell > div,td.cellSelected > div').each(($el) => {
            const cleaned = $el.text()
              .replace(/\s+/g, ' ')
              .trim()
              .toLowerCase();

            actualValues.push(cleaned);
          })
            .then(() => {

              // 🔍 Debug logs (optional but useful)
              cy.log(`Expected: ${JSON.stringify(expectedValues)}`);
              cy.log(`Actual UI: ${JSON.stringify(actualValues)}`);

              expectedValues.forEach(expected => {
                const expectedCleaned = expected
                  .replace(/\s+/g, ' ')
                  .trim()
                  .toLowerCase();

                expect(
                  actualValues.includes(expectedCleaned),
                  `Expected value "${expected}" not found in UI values: ${JSON.stringify(actualValues)}`
                ).to.be.true;
              });

            });

        });

    })

    cy.getSC(
      '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Content||scClass=VLayout||index=0||length=8||classIndex=0||classLength=1||scClassIndex=0||scClassLength=8]/component/member[Class=QScreen_Product_Family__Product_Con||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/member[Class=QScreen_Content_Layout||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Quality_Management||scClass=VLayout||index=3||length=9||classIndex=0||classLength=1||scClassIndex=3||scClassLength=9]/body/layoutBody/member[Class=QScreen_Audits_2||scClass=VLayout||index=7||length=10||classIndex=0||classLength=1||scClassIndex=7||scClassLength=10]/body/layoutBody/member[Class=QScreen_Audits_3||scClass=VLayout||index=0||length=2||classIndex=0||classLength=1||scClassIndex=0||scClassLength=2]/body/layoutBody/member[Class=QScreen_Trackwise_10||scClass=VLayout||index=1||length=2||classIndex=0||classLength=1||scClassIndex=1||scClassLength=2]/body/layoutBody/member[Class=QScreen_All_41||scClass=VLayout||index=2||length=3||classIndex=0||classLength=1||scClassIndex=2||scClassLength=3]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_All_Selector_Trackwise||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/chartView/member[Class=QScreen_TrackWise_Audit_Charts||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Analytics||scClass=VLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=3]/component/member[Class=DynamicForm||index=1||length=4||classIndex=0||classLength=2]/item[name=columnFacets||title=Column%20Attribute(s)||index=2||Class=QMultiComboBoxItem]/comboForm/item[title=Column%20Attribute(s)||index=0||Class=ComboBoxItem]/[icon="picker"]'
    ).click()
  }
}

class State {
  open() {
    cy.getSC(
      '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Content||scClass=VLayout||index=0||length=8||classIndex=0||classLength=1||scClassIndex=0||scClassLength=8]/component/member[Class=QScreen_Product_Family__Product_Con||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/member[Class=QScreen_Content_Layout||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Quality_Management||scClass=VLayout||index=3||length=9||classIndex=0||classLength=1||scClassIndex=3||scClassLength=9]/body/layoutBody/member[Class=QScreen_Audits_2||scClass=VLayout||index=7||length=10||classIndex=0||classLength=1||scClassIndex=7||scClassLength=10]/body/layoutBody/member[Class=QScreen_Audits_3||scClass=VLayout||index=0||length=2||classIndex=0||classLength=1||scClassIndex=0||scClassLength=2]/body/layoutBody/member[Class=QScreen_Trackwise_10||scClass=VLayout||index=1||length=2||classIndex=0||classLength=1||scClassIndex=1||scClassLength=2]/body/layoutBody/member[Class=QScreen_All_41||scClass=VLayout||index=2||length=3||classIndex=0||classLength=1||scClassIndex=2||scClassLength=3]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_All_Selector_Trackwise||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/chartView/member[Class=QScreen_TrackWise_Audit_Charts||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=1||length=3||classIndex=1||classLength=3||roleIndex=1||roleLength=3||title=State||scRole=button]/'
    ).click()
  }
  refresh() {
    cy.getSC(
      '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Content||scClass=VLayout||index=0||length=8||classIndex=0||classLength=1||scClassIndex=0||scClassLength=8]/component/member[Class=QScreen_Product_Family__Product_Con||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/member[Class=QScreen_Content_Layout||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Quality_Management||scClass=VLayout||index=3||length=9||classIndex=0||classLength=1||scClassIndex=3||scClassLength=9]/body/layoutBody/member[Class=QScreen_Audits_2||scClass=VLayout||index=7||length=10||classIndex=0||classLength=1||scClassIndex=7||scClassLength=10]/body/layoutBody/member[Class=QScreen_Audits_3||scClass=VLayout||index=0||length=2||classIndex=0||classLength=1||scClassIndex=0||scClassLength=2]/body/layoutBody/member[Class=QScreen_Trackwise_10||scClass=VLayout||index=1||length=2||classIndex=0||classLength=1||scClassIndex=1||scClassLength=2]/body/layoutBody/member[Class=QScreen_All_41||scClass=VLayout||index=2||length=3||classIndex=0||classLength=1||scClassIndex=2||scClassLength=3]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_All_Selector_Trackwise||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/chartView/member[Class=QScreen_TrackWise_Audit_Charts||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_State||scClass=VLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/component/gridBar/refreshButton/icon'
    ).click()
  }
  checkGraphs() {
    cy.fixture('qualityManagement').then(data => {
      const chartTypes = data.Audits.AuditsTW.chartValues;
      chartTypes.forEach((chartType) => {
        cy.log(`Validating chart type: ${chartType}`);
        cy.getSC(
          '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Content||scClass=VLayout||index=0||length=8||classIndex=0||classLength=1||scClassIndex=0||scClassLength=8]/component/member[Class=QScreen_Product_Family__Product_Con||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/member[Class=QScreen_Content_Layout||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Quality_Management||scClass=VLayout||index=3||length=9||classIndex=0||classLength=1||scClassIndex=3||scClassLength=9]/body/layoutBody/member[Class=QScreen_Audits_2||scClass=VLayout||index=7||length=10||classIndex=0||classLength=1||scClassIndex=7||scClassLength=10]/body/layoutBody/member[Class=QScreen_Audits_3||scClass=VLayout||index=0||length=2||classIndex=0||classLength=1||scClassIndex=0||scClassLength=2]/body/layoutBody/member[Class=QScreen_Trackwise_10||scClass=VLayout||index=1||length=2||classIndex=0||classLength=1||scClassIndex=1||scClassLength=2]/body/layoutBody/member[Class=QScreen_All_41||scClass=VLayout||index=2||length=3||classIndex=0||classLength=1||scClassIndex=2||scClassLength=3]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_All_Selector_Trackwise||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/chartView/member[Class=QScreen_TrackWise_Audit_Charts||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_State||scClass=VLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/component/gridBar/chartTypeMenuButton/icon'
        ).click();

        cy.getSC(
          `//Menu[level=0]/body/row[itemName=${chartType}]/col[fieldName=itemName||0]`
        ).then($el => {
          cy.wrap($el)
            .should('be.visible')
            .click();
        });


        cy.get('canvas[id*="isc_QChart"]', { timeout: 10000 }).should('be.visible');
      });

    });
  }


}

class StateorAssignedTo {
  open() {
    cy.getSC(
      '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Content||scClass=VLayout||index=0||length=8||classIndex=0||classLength=1||scClassIndex=0||scClassLength=8]/component/member[Class=QScreen_Product_Family__Product_Con||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/member[Class=QScreen_Content_Layout||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Quality_Management||scClass=VLayout||index=3||length=9||classIndex=0||classLength=1||scClassIndex=3||scClassLength=9]/body/layoutBody/member[Class=QScreen_Audits_2||scClass=VLayout||index=7||length=10||classIndex=0||classLength=1||scClassIndex=7||scClassLength=10]/body/layoutBody/member[Class=QScreen_Audits_3||scClass=VLayout||index=0||length=2||classIndex=0||classLength=1||scClassIndex=0||scClassLength=2]/body/layoutBody/member[Class=QScreen_Trackwise_10||scClass=VLayout||index=1||length=2||classIndex=0||classLength=1||scClassIndex=1||scClassLength=2]/body/layoutBody/member[Class=QScreen_All_41||scClass=VLayout||index=2||length=3||classIndex=0||classLength=1||scClassIndex=2||scClassLength=3]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_All_Selector_Trackwise||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/chartView/member[Class=QScreen_TrackWise_Audit_Charts||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=2||length=3||classIndex=2||classLength=3||roleIndex=2||roleLength=3||title=State%24fs%24Assigned%20To||scRole=button]/'
    ).click()
  }
  refresh() {
    cy.getSC(
      '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Content||scClass=VLayout||index=0||length=8||classIndex=0||classLength=1||scClassIndex=0||scClassLength=8]/component/member[Class=QScreen_Product_Family__Product_Con||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/member[Class=QScreen_Content_Layout||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Quality_Management||scClass=VLayout||index=3||length=9||classIndex=0||classLength=1||scClassIndex=3||scClassLength=9]/body/layoutBody/member[Class=QScreen_Audits_2||scClass=VLayout||index=7||length=10||classIndex=0||classLength=1||scClassIndex=7||scClassLength=10]/body/layoutBody/member[Class=QScreen_Audits_3||scClass=VLayout||index=0||length=2||classIndex=0||classLength=1||scClassIndex=0||scClassLength=2]/body/layoutBody/member[Class=QScreen_Trackwise_10||scClass=VLayout||index=1||length=2||classIndex=0||classLength=1||scClassIndex=1||scClassLength=2]/body/layoutBody/member[Class=QScreen_All_41||scClass=VLayout||index=2||length=3||classIndex=0||classLength=1||scClassIndex=2||scClassLength=3]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_All_Selector_Trackwise||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/chartView/member[Class=QScreen_TrackWise_Audit_Charts||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_StateAssigned_To||scClass=VLayout||index=2||length=3||classIndex=0||classLength=1||scClassIndex=2||scClassLength=3]/component/gridBar/refreshButton/icon'
    ).click()
  }
}
const FIELD_LOCATOR = 'td.formTitle[align="left"]';

const SCROLL_CLICK_LOCATOR =
  '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Content||scClass=VLayout||index=0||length=8||classIndex=0||classLength=1||scClassIndex=0||scClassLength=8]/component/member[Class=QScreen_Product_Family__Product_Con||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/member[Class=QScreen_Content_Layout||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Quality_Management||scClass=VLayout||index=3||length=9||classIndex=0||classLength=1||scClassIndex=3||scClassLength=9]/body/layoutBody/member[Class=QScreen_Audits_2||scClass=VLayout||index=7||length=10||classIndex=0||classLength=1||scClassIndex=7||scClassLength=10]/body/layoutBody/member[Class=QScreen_Audits_3||scClass=VLayout||index=0||length=2||classIndex=0||classLength=1||scClassIndex=0||scClassLength=2]/body/layoutBody/member[Class=QScreen_Trackwise_10||scClass=VLayout||index=1||length=2||classIndex=0||classLength=1||scClassIndex=1||scClassLength=2]/body/layoutBody/member[Class=QScreen_All_41||scClass=VLayout||index=2||length=3||classIndex=0||classLength=1||scClassIndex=2||scClassLength=3]/component/member[Class=QScreen_TrackWise_Audit_Home||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Details||scClass=VLayout||index=0||length=2||classIndex=0||classLength=1||scClassIndex=0||scClassLength=2]/component/vscrollbar/blank10'


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
