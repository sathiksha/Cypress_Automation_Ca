const { SCHelper } = require("../../../../../../../playwright-sc-helper");

export class CTAINDEvents {
  constructor(page) {
    this.page = page;
    this.sc = new SCHelper(page);
  }

  async loadFixture() {
    const data = require("../../../fixtures/regulatoryAffairs.json");
    return data.CTAINDEvents;
  }

  async open() {
    await (await this.sc.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/gridBar/controlTab/member[Class=ToolStripButton||index=5||length=7||classIndex=5||classLength=7||roleIndex=5||roleLength=7||title=CTA-IND%20Events||scRole=button]/')).click();
  }

  async refresh() {
    await (await this.sc.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/component/member[Class=QScreen_Item_Repository_CTAIND_Even||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/member[Class=QScreen_Item_Repository_CTAIND_Even_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/component/gridBar/refreshButton/icon')).click();
  }

  async checkHeaderIcons() {
    await this.page.locator('img[src*="download-button"]').waitFor({ state: 'visible' });
    await this.page.locator('img[src*="print"]').waitFor({ state: 'visible' });
  }

  async openARecord() {
    await (await this.sc.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/component/member[Class=QScreen_Item_Repository_CTAIND_Even||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/member[Class=QScreen_Item_Repository_CTAIND_Even_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/component/body/row[0]/col[fieldName=event_id||1]')).dblclick();
  }

  async openDetails() {
    await (await this.sc.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/component/member[Class=QScreen_Item_Repository_CTAIND_Even||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/component/member[Class=QScreen_GRAInsight_CTAIND_Event_Mai||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=0||length=2||classIndex=0||classLength=2||roleIndex=0||roleLength=2||title=Details||scRole=button]/')).click();
  }

  async checkFormsandFields() {
    const divs = await this.page.locator('td.formCell>div').all();
    for (const div of divs) {
      const classAttr = await div.getAttribute('class');
      if (!classAttr || !classAttr.includes('staticTextItem')) {
        throw new Error(`Element ${div} missing staticTextItem class`);
      }
    }
  }

  async openRelatedObjects() {
    await (await this.sc.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/component/member[Class=QScreen_Item_Repository_CTAIND_Even||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_GRAInsight_CTAIND_Event_Mai||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=1||length=2||classIndex=1||classLength=2||roleIndex=1||roleLength=2||title=Related%20Objects||scRole=button]/')).click();
  }

  async checkRelatedObjects() {
    const data = await this.loadFixture();
    for (const obj of data.relatedObjects) {
      await this.page.locator('td.multiLayoutButtonNoLeftBorderTextSelected,td.multiLayoutButtonText').filter({ hasText: obj }).waitFor({ state: 'visible' });
    }
  }

  async minimizeARecord() {
    await (await this.sc.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/component/member[Class=QScreen_Item_Repository_CTAIND_Even||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/selectorButton/openButton/icon')).click();
  }

  async clickAnywhereElse() {
    await this.page.waitForTimeout(200);
    await this.page.keyboard.press('Escape');
    await this.page.waitForTimeout(200);
  }

  async checkMultiChoicePickerColumns() {
    const data = await this.loadFixture();
    const names = data.multiChoicePickerColumns;

    for (const text of names) {
      await (await this.sc.getSC(
        '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/component/member[Class=QScreen_Item_Repository_BLANDA_Even||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/member[Class=QScreen_Item_Repository_BLANDA_Even_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/component/filterEditor/editRowForm/item[title=' + encodeURI(text) + '||Class=SetFilterItem]/[icon="picker"]'
      )).click({ force: true });
    }
    await this.clickAnywhereElse();
  }

  async checkColumns() {
    const data = await this.loadFixture();
    const expectedColumnNames = data.columnNames;

    const tableInfo = await this.sc.getColumnsAndTypes(
      '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/component/member[Class=QScreen_Item_Repository_CTAIND_Even||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/member[Class=QScreen_Item_Repository_CTAIND_Even_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/component/header/headerButton[fieldName=%2472v]/'
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
    for (const section of data.accordionSections) {
      console.log(`STARTING SECTION: ${section.name}`);

      if (!section.initiallyOpen) {
        await this.page.locator("img[src*='opener_closed.png']").siblings("div").filter({ hasText: section.name }).click({ force: true });
        await this.page.getByText(section.fields[0]).waitFor({ state: 'visible', timeout: 5000 });
      }

      for (const field of section.fields) {
        await this.page.getByText(field).waitFor({ state: 'visible', timeout: 6000 });
      }

      await this.page.locator("img[src*='opener_opened.png']").siblings("div").filter({ hasText: section.name }).click({ force: true });
      await this.page.waitForTimeout(2000);
    }
  }
}