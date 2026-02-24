const { SCHelper } = require("../../../../../../../playwright-sc-helper");

export class Products {
  constructor(page) {
    this.page = page;
    this.sc = new SCHelper(page);
  }

  async loadFixture() {
    return require("../../../fixtures/regulatoryAffairs.json");
  }

  async open() {
    await (await this.sc.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/gridBar/controlTab/member[Class=ToolStripButton||index=1||length=7||classIndex=1||classLength=7||roleIndex=1||roleLength=7||title=Products||scRole=button]/')).click();
  }

  async refresh() {
    await (await this.sc.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Regulatory_P||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Item_Repository_Regulatory_P_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/gridBar/refreshButton/icon')).click();
  }

  async checkHeaderIcons() {
    await this.page.locator('img[src*="download-button"]').waitFor({ state: 'visible' });
    await this.page.locator('img[src*="print"]').waitFor({ state: 'visible' });
  }

  async openARecord() {
    await (await this.sc.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Regulatory_P||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Item_Repository_Regulatory_P_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/body/row[0]/col[fieldName=product_id||1]')).dblclick();
  }

  async openDetails() {
    await (await this.sc.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Regulatory_P||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_GRAInsight_Products_Main_Pag||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Details||scClass=VLayout||index=0||length=2||classIndex=0||classLength=1||scClassIndex=0||scClassLength=2]/component/item[value=Details||index=0||Class=SectionItem]/canvas/')).click();
  }


  openRelatedObjects() {
    cy.getSC('locator').click();
  }

  async checkFormsandFields() {
    const divs = await this.page.locator('td.formCell>div').all();
    for (const div of divs) {
      const className = await div.getAttribute('class');
      if (!className || !className.includes('staticTextItem')) {
        throw new Error(`Element ${div} does not have class staticTextItem`);
      }
    }
  }


  async checkRelatedObjects() {
    const data = await this.loadFixture();
    for (const obj of data.Products.relatedObjects) {
      await this.page.locator('td.multiLayoutButtonNoLeftBorderTextSelected,td.multiLayoutButtonText').filter({ hasText: obj }).waitFor({ state: 'visible' });
    }
  }


  async rightClickARecord() {
    await (await this.sc.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Regulatory_P||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Item_Repository_Regulatory_P_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/body/row[0]/col[fieldName=product_id||1]')).click({ button: 'right' });
  }

  async addBookmark() {
    await (await this.sc.getSC('//Menu[level=0]/body/row[itemName=Add%20Bookmark||0]/col[fieldName=itemName||1]')).click();
  }

  expandRecord() {
    cy.getSC('locator').click();
  }

  async minimizeARecord() {
    await (await this.sc.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Regulatory_P||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/selectorButton/openButton')).click();
  }
  async clickAnywhereElse() {
    await this.page.waitForTimeout(200);
    await this.page.keyboard.press('Escape');
    await this.page.waitForTimeout(200);
  }

  async checkMultiChoicePickerColumns() {
    const data = await this.loadFixture();
    const names = data.Products.multiChoicePickerColumns;

    for (const text of names) {
      const picker = await this.sc.getSC(
        //Change locator here
        '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Regulatory_P||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Item_Repository_Regulatory_P_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/filterEditor/editRowForm/item[title=' + encodeURI(text) + '||Class=SetFilterItem]/[icon="picker"]'
      );
      await picker.click({ force: true });
    }
    await this.clickAnywhereElse();
  }

  async checkColumns() {
    const data = await this.loadFixture();
    const expectedColumnNames = data.Products.columnNames;

    const tableInfo = await this.sc.getColumnsAndTypes(
      //Change locator here
      '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Regulatory_P||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Item_Repository_Regulatory_P_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/header/headerButton[fieldName=product_id]/'
    );

    const availableCols = tableInfo.columns.map(obj => obj.textContent);
    for (const name of expectedColumnNames) {
      if (!availableCols.includes(name)) {
        throw new Error(`Column ${name} not found in ${availableCols}`);
      }
    }
  }

  async checkFormsandFieldsAvailablity() {
    const data = await this.loadFixture();
    for (const section of data.Products.accordionSections) {
      console.log(`STARTING SECTION: ${section.name}`);
      if (!section.initiallyOpen) {
        console.log(`Opening: ${section.name}`);
        await this.page.locator("img[src*='opener_closed.png']").locator('xpath=..').locator('div').filter({ hasText: section.name }).click({ force: true });
        await this.page.getByText(section.fields[0]).waitFor({ state: 'visible', timeout: 5000 });
      }

      for (const field of section.fields) {
        console.log(`Validating Field: ${field}`)
        await this.page.getByText(field).waitFor({ state: 'visible', timeout: 6000 });
      }

      console.log(`Closing: ${section.name}`);
      await this.page.locator("img[src*='opener_opened.png']").locator('xpath=..').locator('div').filter({ hasText: section.name }).click({ force: true });
      await this.page.waitForTimeout(2000);
      console.log(`Completed: ${section.name}`);
      await this.page.waitForTimeout(1000);
    }

    console.log("All accordion sections validated successfully!")
  }
}
