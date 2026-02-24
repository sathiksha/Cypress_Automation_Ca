export class Meetings {

  open() {
    cy.getSC(
      '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Escalations_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Item_Repository_Escalation_S||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=2||length=3||classIndex=2||classLength=3||roleIndex=2||roleLength=3||title=Meetings||scRole=button]/'
    ).click()
  }

  refresh() {
    cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Escalations_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Item_Repository_Escalation_S||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Meetings||scClass=VLayout||index=2||length=3||classIndex=0||classLength=1||scClassIndex=2||scClassLength=3]/component/gridBar/refreshButton/icon').click()
  }
  checkColumns() {
    cy.fixture('qualityManagement').then(data => {
      const expectedColumnNames = data.Escalations.Meetings.columnNames;

      cy.getColumnsAndTypes(
        '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Escalations_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Item_Repository_Escalation_S||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Meetings||scClass=VLayout||index=2||length=3||classIndex=0||classLength=1||scClassIndex=2||scClassLength=3]/component/header/headerButton[fieldName=name]/'
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


  checkMultiChoicePickerColumns() {
    cy.fixture("qualityManagement").then(data => {
      const pickerColumns = data.Escalations.Meetings.multiChoicePickerColumns;
      pickerColumns.forEach(colName => {
        cy.getSC(
          '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Escalations_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Item_Repository_Escalation_S||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Meetings||scClass=VLayout||index=2||length=3||classIndex=0||classLength=1||scClassIndex=2||scClassLength=3]/component/filterEditor/editRowForm/item[title=' + encodeURI(colName) + '||Class=SetFilterItem]/[icon="picker"]'
        ).click({ force: true })
      })
      this.clickAnywhereElse();
    });
  }


  checkPredefinedFilters() {
    this.openPredefinedFilter()
    cy.getSC('//Menu[level=0]/body/row[itemName=All||0]/col[fieldName=itemName||0]').click()
    this.openPredefinedFilter()
    cy.getSC('//Menu[level=0]/body/row[itemName=Related%20to%20Me||1]/col[fieldName=itemName||0]').click()
    this.openPredefinedFilter()
    cy.getSC('//Menu[level=0]/body/row[itemName=Related%20to%20Me%20and%20Open||2]/col[fieldName=itemName||0]').click()
    this.openPredefinedFilter()
    cy.getSC('//Menu[level=0]/body/row[itemName=All||0]/col[fieldName=itemName||0]').click()
  }
  openPredefinedFilter() {
    cy.getSC(
      '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Escalations_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Item_Repository_Escalation_S||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Meetings||scClass=VLayout||index=2||length=3||classIndex=0||classLength=1||scClassIndex=2||scClassLength=3]/component/gridBar/filterMenuButton/icon'
    ).click({ force: true })
    cy.get('body').then((body) => {
      if (body.find(':contains("Related to Me")').length > 0) {
        cy.log('Predefined Filter Opened')
      }
      else {
        cy.getSC(
          '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Escalations_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Item_Repository_Escalation_S||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Meetings||scClass=VLayout||index=2||length=3||classIndex=0||classLength=1||scClassIndex=2||scClassLength=3]/component/gridBar/filterMenuButton/icon'
        ).click({ force: true })
      }
    })

  }

  openARecord() {
    cy.getSC(
      '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Escalations_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Item_Repository_Escalation_S||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Meetings||scClass=VLayout||index=2||length=3||classIndex=0||classLength=1||scClassIndex=2||scClassLength=3]/component/body/row[0]/col[fieldName=name||1]'
    ).dblclick()
  }

  openDetails() {
    cy.getSC(
      '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Escalations_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Escalation_Meeting_Object_Ma||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Home_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Escalation_Meeting_Object_Ho||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=0||length=1||classIndex=0||classLength=1||roleIndex=0||roleLength=1||title=Details||scRole=button]/'
    ).click()
  }

  checkFormsandFields() {
      cy.fixture('qualityManagement').then(data => {
        const fieldNames = data.Escalations.Meetings.fieldNames;
        fieldNames.forEach(fieldName => {
          ensureFieldVisible(fieldName);
          cy.get(FIELD_LOCATOR).contains(fieldName).should('exist');
        });
      });
    }

  minimizeARecord() {
    cy.getSC(
      '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Escalations_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/selectorButton/openButton/icon'
    ).click()
  }

  rightClickARecord() {
    cy.getSC(
      '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Escalations_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Item_Repository_Escalation_S||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Meetings||scClass=VLayout||index=2||length=3||classIndex=0||classLength=1||scClassIndex=2||scClassLength=3]/component/body/row[0]/col[fieldName=name||1]'
    ).rightclick()
  }

  addBookmark() {
    cy.getSC('//Menu[level=0]/body/row[0]/col[fieldName=itemName||1]').click();
  }

  clickChartIcon() {
    cy.getSC(
      '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Escalations_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Item_Repository_Escalation_S||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Meetings||scClass=VLayout||index=2||length=3||classIndex=0||classLength=1||scClassIndex=2||scClassLength=3]/component/gridBar/chartButton/icon'
    ).click({ force: true })
  }
  constructor() {
    this.Analytics = new Analytics()
    this.Status = new Status()
    this.StausorOwner = new StatusorOwner()
  }
}

class Analytics {

  open() {
    cy.getSC(
      '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Escalations_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Item_Repository_Escalation_S||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Meetings||scClass=VLayout||index=2||length=3||classIndex=0||classLength=1||scClassIndex=2||scClassLength=3]/component/chartView/member[Class=QScreen_Comet_Meeting_Charts||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=0||length=3||classIndex=0||classLength=3||roleIndex=0||roleLength=3||title=Analytics||scRole=button]/'
    ).click()
  }
  refresh() {
    cy.getSC(
      '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Escalations_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Item_Repository_Escalation_S||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Meetings||scClass=VLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/component/chartView/member[Class=QScreen_Comet_Meeting_Charts||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Analytics||scClass=VLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=3]/component/gridBar/refreshButton/'
    ).click()
  }
  filter() {
    cy.getSC(
      '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Escalations_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Item_Repository_Escalation_S||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Meetings||scClass=VLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/component/chartView/member[Class=QScreen_Comet_Meeting_Charts||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Analytics||scClass=VLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=3]/component/gridBar/facetFilterEditorButton/icon'
    ).click()
  }

  // checkFilterFunctionality() {

  //   const toSentenceCase = (str) =>
  //     str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

  //   const toLower = (str) => str.toLowerCase();
  //   cy.get('tbody>tr>td.innerHeader>div').eq(0).invoke('text').then((rowText) => {

  //     const rowValue = rowText.trim();
  //     cy.log(`Row Value: ${rowValue}`);
  //     cy.get('td.multicomboxButton[align="left"]').first().invoke('text').then((rowAttrText) => {

  //       const rowAttributeUI = rowAttrText.trim();
  //       const rowAttrName = toLower(rowAttributeUI);
  //       const rowAttrTitle = toSentenceCase(rowAttributeUI);

  //       cy.log(`Row Attribute UI: ${rowAttributeUI}`);

  //       cy.get('td.multicomboxButton[align="left"]').last().invoke('text').then((colAttrText) => {

  //         const columnAttributeUI = colAttrText.trim();
  //         const columnAttrTitle = toSentenceCase(columnAttributeUI);

  //         cy.get('td[align="left"][valign="center"]').eq(0).invoke('text').then((colText) => {

  //           const columnValue = colText.trim();
  //           cy.log(`Column Value: ${columnValue}`);

  //           cy.get('form[id*="isc"]:visible')
  //             .last()
  //             .within(() => {

  //               cy.get('span.comboBoxItemPicker', { timeout: 2000 }).then($picker => {

  //                 if ($picker.length > 0) {

  //                   cy.log('Detected DROPDOWN filter');
  //                   cy.wrap($picker).first().click({ force: true });
  //                   cy.wait(5000);

  //                   cy.getSC(
  //                     `//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Escalations_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Item_Repository_Escalation_S||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Meetings||scClass=VLayout||index=2||length=3||classIndex=0||classLength=1||scClassIndex=2||scClassLength=3]/component/chartView/member[Class=QScreen_Comet_Meeting_Charts||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Analytics||scClass=VLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=3]/component/member[Class=DynamicForm||index=2||length=4||classIndex=1||classLength=2]/item[name=${rowAttrName}||title=${rowAttrTitle}||index=0||Class=SetFilterItem]/deselectAllButton/`
  //                   ).click({ force: true });

  //                   cy.getSC(
  //                     `//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Escalations_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Item_Repository_Escalation_S||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Meetings||scClass=VLayout||index=2||length=3||classIndex=0||classLength=1||scClassIndex=2||scClassLength=3]/component/chartView/member[Class=QScreen_Comet_Meeting_Charts||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Analytics||scClass=VLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=3]/component/member[Class=DynamicForm||index=2||length=4||classIndex=1||classLength=2]/item[name=${rowAttrName}||title=${rowAttrTitle}||index=0||Class=SetFilterItem]/filterForm/item[name=filter||index=0||Class=TextItem]/element`
  //                   ).click().clear().type(`${rowValue}{enter}`);

  //                   cy.getSC(
  //                     `//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Escalations_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Item_Repository_Escalation_S||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Meetings||scClass=VLayout||index=2||length=3||classIndex=0||classLength=1||scClassIndex=2||scClassLength=3]/component/chartView/member[Class=QScreen_Comet_Meeting_Charts||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Analytics||scClass=VLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=3]/component/member[Class=DynamicForm||index=2||length=4||classIndex=1||classLength=2]/item[name=${rowAttrName}||title=${rowAttrTitle}|value=||index=0||Class=SetFilterItem]/pickList/body/row[status=Closed||0]/col[isCheckboxField=true||0]/valueicon`
  //                   ).click({ force: true });

  //                   return;
  //                 }
  //                 cy.log('Detected TEXT filter');

  //                 cy.getSC(`//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Escalations_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Item_Repository_Escalation_S||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Meetings||scClass=VLayout||index=2||length=3||classIndex=0||classLength=1||scClassIndex=2||scClassLength=3]/component/chartView/member[Class=QScreen_Comet_Meeting_Charts||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Analytics||scClass=VLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=3]/component/member[Class=DynamicForm||index=2||length=4||classIndex=1||classLength=2]/item[title=${columnAttrTitle}||index=1||Class=TextItem]/element`).click().clear().type(`${columnValue}{enter}`);
  //               });
  //             });
  //         });
  //       });
  //     });
  //   });
  // }
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
      '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Escalations_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Item_Repository_Escalation_S||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Meetings||scClass=VLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/component/chartView/member[Class=QScreen_Comet_Meeting_Charts||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Analytics||scClass=VLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=3]/component/gridBar/facetPickerButton/icon'
    ).click()
  }
  removeAllColumnAttributes() {
    for (let i = 0; i < 5; i++) {
      cy.wait(500)
      cy.clickIfExists(
        '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Escalations_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Item_Repository_Escalation_S||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Meetings||scClass=VLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/component/chartView/member[Class=QScreen_Comet_Meeting_Charts||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Analytics||scClass=VLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=3]/component/member[Class=DynamicForm||index=1||length=4||classIndex=0||classLength=2]/item[name=columnFacets||title=Column%20Attribute(s)||value=ownerid_name||index=2||Class=QMultiComboBoxItem]/button[Class=IButton||index=0||length=1||classIndex=0||classLength=1||roleIndex=0||roleLength=1||scRole=button]/icon'
      )
    }
  }
  removeAllRowAttributes() {
    for (let i = 0; i < 5; i++) {
      cy.wait(500)
      cy.clickIfExists(
        '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Escalations_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Item_Repository_Escalation_S||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Meetings||scClass=VLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/component/chartView/member[Class=QScreen_Comet_Meeting_Charts||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Analytics||scClass=VLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=3]/component/member[Class=DynamicForm||index=1||length=4||classIndex=0||classLength=2]/item[name=rowFacets||title=Row%20Attribute(s)||value=ownerid_name||index=0||Class=QMultiComboBoxItem]/button[Class=IButton||index=1||length=2||classIndex=0||classLength=1||roleIndex=0||roleLength=1||scRole=button]/icon'
      )
    }
  }
  addRowAttributeClick() {
    cy.getSC(
      '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Escalations_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Item_Repository_Escalation_S||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Meetings||scClass=VLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/component/chartView/member[Class=QScreen_Comet_Meeting_Charts||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Analytics||scClass=VLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=3]/component/member[Class=DynamicForm||index=1||length=4||classIndex=0||classLength=2]/item[name=rowFacets||title=Row%20Attribute(s)||index=0||Class=QMultiComboBoxItem]/comboForm/item[title=Row%20Attribute(s)||index=0||Class=ComboBoxItem]/[icon="picker"]'
    ).click()
    cy.wait(2000)
    cy.getSC(
      '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Escalations_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Item_Repository_Escalation_S||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Meetings||scClass=VLayout||index=2||length=3||classIndex=0||classLength=1||scClassIndex=2||scClassLength=3]/component/chartView/member[Class=QScreen_Comet_Meeting_Charts||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Analytics||scClass=VLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=3]/component/member[Class=DynamicForm||index=1||length=4||classIndex=0||classLength=2]/item[name=rowFacets||title=Row%20Attribute(s)||index=0||Class=QMultiComboBoxItem]/comboForm/item[title=Row%20Attribute(s)||index=0||Class=ComboBoxItem]/pickList/body/row[rowFacets=status||0]/col[fieldName=rowFacets||0]'
    ).click()
  }

  addColumnAttributeClick() {
    cy.getSC(
      '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Escalations_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Item_Repository_Escalation_S||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Meetings||scClass=VLayout||index=2||length=3||classIndex=0||classLength=1||scClassIndex=2||scClassLength=3]/component/chartView/member[Class=QScreen_Comet_Meeting_Charts||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Analytics||scClass=VLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=3]/component/member[Class=DynamicForm||index=1||length=4||classIndex=0||classLength=2]/item[name=columnFacets||title=Column%20Attribute(s)||index=2||Class=QMultiComboBoxItem]/comboForm/item[title=Column%20Attribute(s)||index=0||Class=ComboBoxItem]/[icon="picker"]'
    ).click()

    cy.getSC(
      '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Escalations_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Item_Repository_Escalation_S||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Meetings||scClass=VLayout||index=2||length=3||classIndex=0||classLength=1||scClassIndex=2||scClassLength=3]/component/chartView/member[Class=QScreen_Comet_Meeting_Charts||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Analytics||scClass=VLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=3]/component/member[Class=DynamicForm||index=1||length=4||classIndex=0||classLength=2]/item[name=columnFacets||title=Column%20Attribute(s)||index=2||Class=QMultiComboBoxItem]/comboForm/item[title=Column%20Attribute(s)||index=0||Class=ComboBoxItem]/pickList/body/row[columnFacets=ownerid_name||0]/col[fieldName=columnFacets||0]'
    ).click()
  }

  // checkRowValues() {
  //   cy.fixture('qualityManagement').then(data => {
  //     const actualValues = data.Escalations.Meetings.analyticsDropdownValues;
  //     cy.get('div[eventproxy="isc_PickListMenu_0"][class="listGrid"]').within(() => {
  //       cy.get('td.cell > div').each(($el) => {
  //         const cleaned = $el.text().replace(/\s+/g, ' ').trim().toLowerCase();
  //         actualValues.push(cleaned);
  //       }).then(() => {
  //         expectedValues.forEach(expected => {
  //           const expectedCleaned = expected.replace(/\s+/g, ' ').trim().toLowerCase();

  //           expect(
  //             actualValues.includes(expectedCleaned),
  //             `Expected value "${expected}" not found in cleaned UI values: ${JSON.stringify(actualValues)}`
  //           ).to.be.true;
  //         });
  //       });
  //     });
  //   })
  // }
  checkRowValues() {

    cy.getSC(
      '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Escalations_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Item_Repository_Escalation_S||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Meetings||scClass=VLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/component/chartView/member[Class=QScreen_Comet_Meeting_Charts||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Analytics||scClass=VLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=3]/component/member[Class=DynamicForm||index=1||length=4||classIndex=0||classLength=2]/item[name=rowFacets||title=Row%20Attribute(s)||index=0||Class=QMultiComboBoxItem]/comboForm/item[title=Row%20Attribute(s)||index=0||Class=ComboBoxItem]/[icon="picker"]'
    ).click()

    cy.fixture('qualityManagement').then(data => {

      // ✅ Expected values from fixture
      const expectedValues = data.Escalations.Meetings.analyticsDropdownValues;

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

    });

  }

}

class Status {
  open() {
    cy.getSC(
      '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Escalations_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Item_Repository_Escalation_S||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Meetings||scClass=VLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/component/chartView/member[Class=QScreen_Comet_Meeting_Charts||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=1||length=3||classIndex=1||classLength=3||roleIndex=1||roleLength=3||title=Status||scRole=button]/'
    ).click()
  }
  refresh() {
    cy.getSC(
      '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Escalations_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Item_Repository_Escalation_S||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Meetings||scClass=VLayout||index=2||length=3||classIndex=0||classLength=1||scClassIndex=2||scClassLength=3]/component/chartView/member[Class=QScreen_Comet_Meeting_Charts||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Status||scClass=VLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/component/gridBar/refreshButton/icon'
    ).click()
  }
  checkGraphs() {

    cy.fixture('qualityManagement').then(data => {
      const chartTypes = data.Escalations.Meetings.chartTypes;
      chartTypes.forEach((chartType) => {
        cy.log(`Validating chart type: ${chartType}`);
        cy.getSC(
          '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Escalations_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Item_Repository_Escalation_S||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Meetings||scClass=VLayout||index=2||length=3||classIndex=0||classLength=1||scClassIndex=2||scClassLength=3]/component/chartView/member[Class=QScreen_Comet_Meeting_Charts||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Status||scClass=VLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/component/gridBar/chartTypeMenuButton/'
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

class StatusorOwner {
  open() {
    cy.getSC(
      '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Escalations_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Item_Repository_Escalation_S||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Meetings||scClass=VLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/component/chartView/member[Class=QScreen_Comet_Meeting_Charts||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=2||length=3||classIndex=2||classLength=3||roleIndex=2||roleLength=3||title=Status%24fs%24Owner||scRole=button]/'
    ).click()
  }
  refresh() {
    cy.getSC(
      '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Escalations_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Item_Repository_Escalation_S||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Meetings||scClass=VLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/component/chartView/member[Class=QScreen_Comet_Meeting_Charts||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_StatusOwner||scClass=VLayout||index=2||length=3||classIndex=0||classLength=1||scClassIndex=2||scClassLength=3]/component/gridBar/refreshButton/icon'
    ).click()
  }
}

const FIELD_LOCATOR = 'td.formTitle[align="left"]';

const SCROLL_CLICK_LOCATOR =
  '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Escalations_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Escalation_Meeting_Object_Ma||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Home||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Escalation_Meeting_Object_Ho||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Details||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/vscrollbar/blank10'


function ensureFieldVisible(fieldName, attempt = 0) {
  if (attempt > 50) {
    throw new Error(`❌ Field "${fieldName}" not visible after 50 scroll attempts`);
  }

  cy.log(`🔍 Checking visibility of: ${fieldName} | Attempt: ${attempt}`);

  return cy.get('body').then($body => {
    const field = $body.find(`${FIELD_LOCATOR}:contains("${fieldName}")`);

    if (field.length && Cypress.$(field).is(':visible')) {
      cy.log(`✅ Field visible: ${fieldName}`);
      return;
    }

    cy.log(`⬇️ Field not visible, clicking scrollbar`);
    cy.getSC(SCROLL_CLICK_LOCATOR).click({ force: true });

    cy.wait(300); // allow UI to render

    ensureFieldVisible(fieldName, attempt + 1);
  });
}




