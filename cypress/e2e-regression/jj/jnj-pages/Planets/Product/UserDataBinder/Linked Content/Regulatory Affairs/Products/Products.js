export class Products {
  loadFixture() {
    return cy.fixture("regulatoryAffairs");
  }
  open() { cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Linked_Content||scClass=VLayout||index=2||length=7||classIndex=0||classLength=1||scClassIndex=2||scClassLength=7]/body/layoutBody/member[Class=QScreen_Regulatory_Affairs_1||scClass=VLayout||index=1||length=9||classIndex=0||classLength=1||scClassIndex=1||scClassLength=9]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=3||length=5||classIndex=3||classLength=5||roleIndex=3||roleLength=5||title=Products||scRole=button]/').click(); }
  refresh() { cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Linked_Content||scClass=VLayout||index=2||length=7||classIndex=0||classLength=1||scClassIndex=2||scClassLength=7]/body/layoutBody/member[Class=QScreen_Regulatory_Affairs_1||scClass=VLayout||index=1||length=9||classIndex=0||classLength=1||scClassIndex=1||scClassLength=9]/body/layoutBody/member[Class=QScreen_Products_2||scClass=VLayout||index=3||length=5||classIndex=0||classLength=1||scClassIndex=3||scClassLength=5]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Data_Binder_Linked_Content_G||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/gridBar/refreshButton/icon').click(); }
  checkColumns() { 
    this.loadFixture().then(data => {

      let expectedColumnNames = data.Products.columnNames;

      cy.getColumnsAndTypes(
        //Change locator here
        '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Linked_Content||scClass=VLayout||index=2||length=7||classIndex=0||classLength=1||scClassIndex=2||scClassLength=7]/body/layoutBody/member[Class=QScreen_Regulatory_Affairs_1||scClass=VLayout||index=1||length=9||classIndex=0||classLength=1||scClassIndex=1||scClassLength=9]/body/layoutBody/member[Class=QScreen_Products_2||scClass=VLayout||index=3||length=5||classIndex=0||classLength=1||scClassIndex=3||scClassLength=5]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Data_Binder_Linked_Content_G||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/header/headerButton[fieldName=product_id]/'
      ).then(tableInfo => {
        let availableCols = [];
        tableInfo.columns.map((obj) => {
          availableCols.push(obj.textContent);
        });

        cy.log(availableCols);
        for (let i = 0; i < expectedColumnNames.length; i++) {
          expect(availableCols).to.include(expectedColumnNames[i]);
        }
      })
    });
  }
  checkHeaderIcons(){
    cy.get('img[src*="dynamic"]').should("be.visible");
    cy.get('img[src*="download-button"]').should("be.visible");
    cy.get('img[src*="print"]').should("be.visible");
    cy.get('img[src*="filter"]').should("be.visible");
    cy.get('img[src*="refresh"]').should("be.visible");
  }
  checkMultiChoicePickerColumns() { 
    this.loadFixture().then(data => {

      let names = data.Products.multiChoicePickerColumns;

      names.forEach((text) => {
        cy.getSC(
          //Change locator here
          '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Linked_Content||scClass=VLayout||index=2||length=7||classIndex=0||classLength=1||scClassIndex=2||scClassLength=7]/body/layoutBody/member[Class=QScreen_Regulatory_Affairs_1||scClass=VLayout||index=1||length=9||classIndex=0||classLength=1||scClassIndex=1||scClassLength=9]/body/layoutBody/member[Class=QScreen_Products_2||scClass=VLayout||index=3||length=5||classIndex=0||classLength=1||scClassIndex=3||scClassLength=5]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Data_Binder_Linked_Content_G||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/filterEditor/editRowForm/item[title=' + encodeURI(text) + '||Class=SetFilterItem]/[icon="picker"]'
        ).click({ force: true });
      });
      this.clickAnywhereElse();
    });
  }
  clickAnywhereElse() {
    cy.wait(200);
    cy.get('body').trigger('keydown', { keyCode: 27 });
    cy.wait(200);
    cy.get('body').trigger('keyup', { keyCode: 27 });
  }
  openARecord() { 
    cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Linked_Content||scClass=VLayout||index=2||length=7||classIndex=0||classLength=1||scClassIndex=2||scClassLength=7]/body/layoutBody/member[Class=QScreen_Regulatory_Affairs_1||scClass=VLayout||index=1||length=9||classIndex=0||classLength=1||scClassIndex=1||scClassLength=9]/body/layoutBody/member[Class=QScreen_Products_2||scClass=VLayout||index=3||length=5||classIndex=0||classLength=1||scClassIndex=3||scClassLength=5]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Data_Binder_Linked_Content_G||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/gridBar/filterButton/icon').click();
    cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Linked_Content||scClass=VLayout||index=2||length=7||classIndex=0||classLength=1||scClassIndex=2||scClassLength=7]/body/layoutBody/member[Class=QScreen_Regulatory_Affairs_1||scClass=VLayout||index=1||length=9||classIndex=0||classLength=1||scClassIndex=1||scClassLength=9]/body/layoutBody/member[Class=QScreen_Products_2||scClass=VLayout||index=3||length=5||classIndex=0||classLength=1||scClassIndex=3||scClassLength=5]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Data_Binder_Linked_Content_G||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/body/row[oid=019b3631-d890-75b0-84fc-da6c7bfc2965||product_id=26107293||0]/col[fieldName=product_id||0]').dblclick(); 
  }
  openDetails() { cy.getSC('locator').click(); }
  checkFormsandFieldsAvailablity() { 
    this.loadFixture().then(data => {

      data.Products.accordionSections.forEach(section => {

        cy.log(`STARTING SECTION: **${section.name}**`);

        if (!section.initiallyOpen) {
          cy.log(`Opening: ${section.name}`);

          cy.get("img[src*='opener_closed.png']").siblings("div").contains(section.name).click({ force: true });

          cy.contains(section.fields[0], { timeout: 5000 });
        }

        section.fields.forEach(field => {
          cy.log(`Validating Field: ${field}`)
          cy.contains(field, { timeout: 6000 });
        });

        cy.log(`Closing: ${section.name}`);

        cy.get("img[src*='opener_opened.png']").siblings("div").contains(section.name).click({ force: true });

        cy.wait(2000);
        cy.log(`Completed: ${section.name}`);
        cy.wait(1000);
      });

      cy.log("All accordion sections validated successfully!")
    });
  }
  checkFormsandFields() { cy.getSC('locator').click(); }
  openRelatedObjects() { cy.getSC('locator').click(); }
  checkRelatedObjects() { 
    this.loadFixture().then(data => {
      cy.log("Validating Related Objects");
      data.Products.relatedObjects.forEach(obj => {
        cy.get('td.multiLayoutButtonNoLeftBorderTextSelected,td.multiLayoutButtonText').contains(obj).should("be.visible");
      });
    });
  }
  rightClickARecord() { 
    cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Linked_Content||scClass=VLayout||index=2||length=7||classIndex=0||classLength=1||scClassIndex=2||scClassLength=7]/body/layoutBody/member[Class=QScreen_Regulatory_Affairs_1||scClass=VLayout||index=1||length=9||classIndex=0||classLength=1||scClassIndex=1||scClassLength=9]/body/layoutBody/member[Class=QScreen_Products_2||scClass=VLayout||index=3||length=5||classIndex=0||classLength=1||scClassIndex=3||scClassLength=5]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Data_Binder_Linked_Content_G||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/body/row[0]/col[fieldName=product_id||0]').rightclick(); }
  addBookmark() { cy.getSC('//Menu[level=0]/body/row[itemName=Add%20Bookmark||0]/col[fieldName=itemName||1]').click(); }
  columnHeaderId() { cy.getSC('locator').click(); }
  expandRecord() { cy.getSC('locator').click(); }
  bookmarkARecord() { cy.getSC('locator').click(); }
  checkBookmarkFunctionality() { cy.getSC('locator').click(); }
  minimizeARecord() { cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Linked_Content||scClass=VLayout||index=2||length=7||classIndex=0||classLength=1||scClassIndex=2||scClassLength=7]/body/layoutBody/member[Class=QScreen_Regulatory_Affairs_1||scClass=VLayout||index=1||length=9||classIndex=0||classLength=1||scClassIndex=1||scClassLength=9]/body/layoutBody/member[Class=QScreen_Products_2||scClass=VLayout||index=3||length=5||classIndex=0||classLength=1||scClassIndex=3||scClassLength=5]/selectorButton/openButton/icon').click(); }

  constructor() {
    // No sub modules
  }
}