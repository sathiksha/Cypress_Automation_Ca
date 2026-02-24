export class PackageSets {
  loadFixture() {
    return cy.fixture("regulatoryAffairs");
  }

  open() {
    cy.getSC(
      '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Smart_Content||scClass=VLayout||index=0||length=7||classIndex=0||classLength=1||scClassIndex=0||scClassLength=7]/component/member[Class=QScreen_Data_Binder_Smart_Content_La||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Regulatory_Affairs_2||scClass=VLayout||index=2||length=9||classIndex=0||classLength=1||scClassIndex=2||scClassLength=9]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=4||length=7||classIndex=4||classLength=7||roleIndex=4||roleLength=7||title=Package%20Sets||scRole=button]/'
    ).click();
  }

  clickAll() {
    cy.getSC(
      '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Smart_Content||scClass=VLayout||index=0||length=7||classIndex=0||classLength=1||scClassIndex=0||scClassLength=7]/component/member[Class=QScreen_Data_Binder_Smart_Content_La||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Regulatory_Affairs_2||scClass=VLayout||index=2||length=9||classIndex=0||classLength=1||scClassIndex=2||scClassLength=9]/body/layoutBody/member[Class=QScreen_Package_Sets_1||scClass=VLayout||index=4||length=7||classIndex=0||classLength=1||scClassIndex=4||scClassLength=7]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=3||length=4||classIndex=3||classLength=4||roleIndex=3||roleLength=4||title=All||scRole=button]/'
    ).click();
  }

  refresh() {
    cy.getSC(
      '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Smart_Content||scClass=VLayout||index=0||length=7||classIndex=0||classLength=1||scClassIndex=0||scClassLength=7]/component/member[Class=QScreen_Data_Binder_Smart_Content_La||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Regulatory_Affairs_2||scClass=VLayout||index=2||length=9||classIndex=0||classLength=1||scClassIndex=2||scClassLength=9]/body/layoutBody/member[Class=QScreen_Package_Sets_1||scClass=VLayout||index=4||length=7||classIndex=0||classLength=1||scClassIndex=4||scClassLength=7]/body/layoutBody/member[Class=QScreen_All_52||scClass=VLayout||index=3||length=4||classIndex=0||classLength=1||scClassIndex=3||scClassLength=4]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Filtered_Content_All_Regulat||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/gridBar/refreshButton/icon'
    ).click();
  }
  openARecord() {
    cy.getSC(
      '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Smart_Content||scClass=VLayout||index=0||length=7||classIndex=0||classLength=1||scClassIndex=0||scClassLength=7]/component/member[Class=QScreen_Data_Binder_Smart_Content_La||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Regulatory_Affairs_2||scClass=VLayout||index=2||length=9||classIndex=0||classLength=1||scClassIndex=2||scClassLength=9]/body/layoutBody/member[Class=QScreen_Package_Sets_1||scClass=VLayout||index=4||length=7||classIndex=0||classLength=1||scClassIndex=4||scClassLength=7]/body/layoutBody/member[Class=QScreen_All_52||scClass=VLayout||index=3||length=4||classIndex=0||classLength=1||scClassIndex=3||scClassLength=4]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Filtered_Content_All_Regulat||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/body/row[0]/col[fieldName=%2472v||0]/valueicon'
    ).dblclick();
  }

  openDetails() {
    cy.getSC(
      '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Smart_Content||scClass=VLayout||index=0||length=7||classIndex=0||classLength=1||scClassIndex=0||scClassLength=7]/component/member[Class=QScreen_Data_Binder_Smart_Content_La||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Regulatory_Affairs_2||scClass=VLayout||index=2||length=9||classIndex=0||classLength=1||scClassIndex=2||scClassLength=9]/body/layoutBody/member[Class=QScreen_Package_Sets_1||scClass=VLayout||index=4||length=7||classIndex=0||classLength=1||scClassIndex=4||scClassLength=7]/body/layoutBody/member[Class=QScreen_All_52||scClass=VLayout||index=3||length=4||classIndex=0||classLength=1||scClassIndex=3||scClassLength=4]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Filtered_Content_All_Regulat||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/expansionLayout[Class=VLayout||index=1||length=2||classIndex=1||classLength=2]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_GRAInsight__Package_Set_Object||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=0||length=2||classIndex=0||classLength=2||roleIndex=0||roleLength=2||title=Details||scRole=button]/'
    ).click();
  }

  checkHeaderIcons() {
    cy.get('img[src*="download-button"]').should("be.visible");
    cy.get('img[src*="print"]').should("be.visible");
    cy.get('img[src*="filter"]').should("be.visible");
    cy.get('img[src*="refresh"]').should("be.visible");
  }

  openRelatedObjects() {
    cy.contains("Related Objects").click({ force: true });
    // cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Registration||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Registrations||scClass=VLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=3]/component/member[Class=QScreen_GRAInsight_Registration_Object||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=1||length=2||classIndex=1||classLength=2||roleIndex=1||roleLength=2||title=Related%20Objects||scRole=button]/').click({ force: true });
  }

  checkRelatedObjects() {
    this.loadFixture().then((data) => {
      cy.log("Validating Related Objects");
      data.PackageSets.relatedObjects.forEach((obj) => {
        cy.get(
          "td.multiLayoutButtonNoLeftBorderTextSelected,td.multiLayoutButtonText"
        )
          .contains(obj)
          .should("be.visible");
      });
    });
  }

  minimizeARecord() {
    cy.getSC(
      '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Smart_Content||scClass=VLayout||index=0||length=7||classIndex=0||classLength=1||scClassIndex=0||scClassLength=7]/component/member[Class=QScreen_Data_Binder_Smart_Content_La||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Regulatory_Affairs_2||scClass=VLayout||index=2||length=9||classIndex=0||classLength=1||scClassIndex=2||scClassLength=9]/body/layoutBody/member[Class=QScreen_Package_Sets_1||scClass=VLayout||index=4||length=7||classIndex=0||classLength=1||scClassIndex=4||scClassLength=7]/body/layoutBody/member[Class=QScreen_All_52||scClass=VLayout||index=3||length=4||classIndex=0||classLength=1||scClassIndex=3||scClassLength=4]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Filtered_Content_All_Regulat||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/body/row[0]/col[fieldName=%2472v||0]/valueicon'
    ).click();
  }
  clickAnywhereElse() {
    cy.wait(200);
    cy.get("body").trigger("keydown", { keyCode: 27 });
    cy.wait(200);
    cy.get("body").trigger("keyup", { keyCode: 27 });
  }

  checkMultiChoicePickerColumns() {
    this.loadFixture().then((data) => {
      let names = data.PackageSets.multiChoicePickerColumns;

      names.forEach((text) => {
        cy.log(text, "text");
        if (text === "Manufacturer/Site") {
          cy.getSC(
            '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Smart_Content||scClass=VLayout||index=0||length=7||classIndex=0||classLength=1||scClassIndex=0||scClassLength=7]/component/member[Class=QScreen_Data_Binder_Smart_Content_La||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Regulatory_Affairs_2||scClass=VLayout||index=2||length=9||classIndex=0||classLength=1||scClassIndex=2||scClassLength=9]/body/layoutBody/member[Class=QScreen_Package_Sets_1||scClass=VLayout||index=4||length=7||classIndex=0||classLength=1||scClassIndex=4||scClassLength=7]/body/layoutBody/member[Class=QScreen_All_52||scClass=VLayout||index=3||length=4||classIndex=0||classLength=1||scClassIndex=3||scClassLength=4]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Filtered_Content_All_Regulat||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/filterEditor/editRowForm/item[name=manufacturer||title=Manufacturer%24fs%24Site||index=14||Class=SetFilterItem]/[icon="picker"]'
          ).click({ force: true });

          this.clickAnywhereElse();
          return;
        }

        cy.getSC(
          //Change locator here
          '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Smart_Content||scClass=VLayout||index=0||length=7||classIndex=0||classLength=1||scClassIndex=0||scClassLength=7]/component/member[Class=QScreen_Data_Binder_Smart_Content_La||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Regulatory_Affairs_2||scClass=VLayout||index=2||length=9||classIndex=0||classLength=1||scClassIndex=2||scClassLength=9]/body/layoutBody/member[Class=QScreen_Package_Sets_1||scClass=VLayout||index=4||length=7||classIndex=0||classLength=1||scClassIndex=4||scClassLength=7]/body/layoutBody/member[Class=QScreen_All_52||scClass=VLayout||index=3||length=4||classIndex=0||classLength=1||scClassIndex=3||scClassLength=4]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Filtered_Content_All_Regulat||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/filterEditor/editRowForm/item[title=' +
            encodeURI(text) +
            '||Class=SetFilterItem]/[icon="picker"]'
        ).click({ force: true });
        this.clickAnywhereElse();
      });
    });
  }

  checkColumns() {
    this.loadFixture().then((data) => {
      let expectedColumnNames = data.PackageSets.columnNames;

      cy.getColumnsAndTypes(
        //Change locator here
        '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Smart_Content||scClass=VLayout||index=0||length=7||classIndex=0||classLength=1||scClassIndex=0||scClassLength=7]/component/member[Class=QScreen_Data_Binder_Smart_Content_La||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Regulatory_Affairs_2||scClass=VLayout||index=2||length=9||classIndex=0||classLength=1||scClassIndex=2||scClassLength=9]/body/layoutBody/member[Class=QScreen_Package_Sets_1||scClass=VLayout||index=4||length=7||classIndex=0||classLength=1||scClassIndex=4||scClassLength=7]/body/layoutBody/member[Class=QScreen_All_52||scClass=VLayout||index=3||length=4||classIndex=0||classLength=1||scClassIndex=3||scClassLength=4]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Filtered_Content_All_Regulat||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/header/headerButton[fieldName=product_detail_set_id]/'
      ).then((tableInfo) => {
        let availableCols = [];
        tableInfo.columns.map((obj) => {
          availableCols.push(obj.textContent);
        });

        cy.log(availableCols, "available");
        cy.log(expectedColumnNames, "expected");
        for (let i = 0; i < expectedColumnNames.length; i++) {
          expect(availableCols).to.include(expectedColumnNames[i]);
        }
      });
    });
  }

  checkFormsandFieldsAvailablity() {
    this.loadFixture().then((data) => {
      data.PackageSets.accordionSections.forEach((section) => {
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
      });

      cy.log("All accordion sections validated successfully!");
    });
  }

  closeSidePane() {
    cy.getSC(
      '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/selectorButton/'
    ).click();
  }

  constructor() {
    // No sub modules
  }
}
