const { SCHelper } = require("../../../../../../../playwright-sc-helper");

export class PackageSets {
  constructor(page) {
    this.page = page;
    this.sc = new SCHelper(page);
  }

  async loadFixture() {
    return require("../../../fixtures/regulatoryAffairs.json");
  }

  async open() {
    await (await this.sc.getSC(
      '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/gridBar/controlTab/member[Class=ToolStripButton||index=4||length=7||classIndex=4||classLength=7||roleIndex=4||roleLength=7||title=Package%20Sets||scRole=button]/'
    )).click();
  }

  async refresh() {
    await (await this.sc.getSC(
      '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/component/member[Class=QScreen_Item_Repository_Package_Sets||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/member[Class=QScreen_Item_Repository_Package_Sets_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/component/gridBar/refreshButton/icon'
    )).click();
  }

  async openARecord() {
    await (await this.sc.getSC(
      '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/component/member[Class=QScreen_Item_Repository_Package_Sets||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/member[Class=QScreen_Item_Repository_Package_Sets_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/component/body/row[0]/col[fieldName=%2472v||0]/valueicon'
    )).dblclick();
  }

  async checkHeaderIcons() {
    await this.page.locator('img[src*="download-button"]').waitFor({ state: 'visible' });
    await this.page.locator('img[src*="print"]').waitFor({ state: 'visible' });
    await this.page.locator('img[src*="filter"]').waitFor({ state: 'visible' });
    await this.page.locator('img[src*="refresh"]').waitFor({ state: 'visible' });
  }

  async openDetails() {
    await (await this.sc.getSC(
      '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/component/member[Class=QScreen_Item_Repository_Package_Sets||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/member[Class=QScreen_Item_Repository_Package_Sets_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/component/expansionLayout[Class=VLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/member[Class=QScreen_GRAInsight__Package_Set_Object||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=0||length=2||classIndex=0||classLength=2||roleIndex=0||roleLength=2||title=Details||scRole=button]/'
    )).click();
  }

  async openRelatedObjects() {
    await this.page.getByText('Related Objects').click({ force: true });
  }

  async checkRelatedObjects() {
    const data = await this.loadFixture();
    for (const obj of data.PackageSets.relatedObjects) {
      await this.page.locator('td.multiLayoutButtonNoLeftBorderTextSelected,td.multiLayoutButtonText').filter({ hasText: obj }).waitFor({ state: 'visible' });
    }
  }

  async minimizeARecord() {
    await (await this.sc.getSC(
      '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/component/member[Class=QScreen_Item_Repository_Package_Sets||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/member[Class=QScreen_Item_Repository_Package_Sets_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/component/body/row[0]/col[fieldName=%2472v||0]/valueicon'
    )).click();
  }

  async clickAnywhereElse() {
    await this.page.waitForTimeout(200);
    await this.page.keyboard.press('Escape');
    await this.page.waitForTimeout(200);
  }

  async checkMultiChoicePickerColumns() {
    const data = await this.loadFixture();
    const names = data.PackageSets.multiChoicePickerColumns;

    for (const text of names) {
      if (text === "Manufacturer/Site") {
        await (await this.sc.getSC(
          '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/component/member[Class=QScreen_Item_Repository_Package_Sets||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/member[Class=QScreen_Item_Repository_Package_Sets_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/component/filterEditor/editRowForm/item[name=manufacturer||title=Manufacturer%24fs%24Site||index=14||Class=SetFilterItem]/[icon="picker"]'
        )).click({ force: true });
        await this.clickAnywhereElse();
        continue;
      }

      await (await this.sc.getSC(
        '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/component/member[Class=QScreen_Item_Repository_Package_Sets||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Item_Repository_Package_Sets_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/filterEditor/editRowForm/item[title=' +
        encodeURI(text) +
        '||Class=SetFilterItem]/[icon="picker"]'
      )).click({ force: true });
      await this.clickAnywhereElse();
    }
  }

  async checkColumns() {
    const data = await this.loadFixture();
    const expectedColumnNames = data.PackageSets.columnNames;

    const tableInfo = await this.sc.getColumnsAndTypes(
      '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/component/member[Class=QScreen_Item_Repository_Package_Sets||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/member[Class=QScreen_Item_Repository_Package_Sets_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/component/header/headerButton[fieldName=product_detail_set_id]/'
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
    for (const section of data.PackageSets.accordionSections) {
      console.log(`STARTING SECTION: ${section.name}`);

      if (!section.initiallyOpen) {
        await this.page.locator("img[src*='opener_closed.png']")
          .siblings("div")
          .filter({ hasText: section.name })
          .click({ force: true });

        await this.page.getByText(section.fields[0]).waitFor({ state: 'attached', timeout: 5000 });
      }

      for (const field of section.fields) {
        await this.page.getByText(field).waitFor({ state: 'attached', timeout: 6000 });
      }

      await this.page.locator("img[src*='opener_opened.png']")
        .siblings("div")
        .filter({ hasText: section.name })
        .click({ force: true });

      await this.page.waitForTimeout(2000);
    }
  }

  async clickFilterMenuButton() {
    await (await this.sc.getSC(
      '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/component/member[Class=QScreen_Item_Repository_Package_Sets||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/member[Class=QScreen_Item_Repository_Package_Sets_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/component/gridBar/filterMenuButton/'
    )).click();
  }

  async verifyDefaultFilter() {
    const btn = await this.sc.getSC(
      '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/component/member[Class=QScreen_Item_Repository_Package_Sets||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/member[Class=QScreen_Item_Repository_Package_Sets_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/component/gridBar/filterMenuButton/'
    );
    await btn.waitFor({ state: 'visible' });
    await this.clickAnywhereElse();
  }

  async selectAllFilter() {
    await this.clickFilterMenuButton();
    await (await this.sc.getSC(
      "//Menu[level=0]/body/row[itemName=All||1]/col[fieldName=itemName||0]"
    )).click();
  }
}
