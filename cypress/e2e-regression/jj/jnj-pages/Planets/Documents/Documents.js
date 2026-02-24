const { SCHelper } = require("../../../../../../playwright-sc-helper");

export class Documents {
  constructor(page) {
    this.page = page;
    this.sc = new SCHelper(page);
  }

  async loadFixture() {
    return require("../../../fixtures/documents.json");
  }

  async open() {
    await (await this.sc.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/gridBar/controlTab/member[Class=ToolStripButton||index=0||length=1||classIndex=0||classLength=1||roleIndex=0||roleLength=1||title=Documents||scRole=button]/')).click();
  }

  async refresh() {
    await (await this.sc.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/component/member[Class=QScreen_Item_Repository_Document_Act||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Item_Repository_TruVault_Rec||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/component/gridBar/refreshButton/icon')).click();
  }

  async checkHeaderIcons() {
    await this.page.locator('img[src*="download-button"]').waitFor({ state: 'visible' });
    await this.page.locator('img[src*="print"]').waitFor({ state: 'visible' });
  }

  async openARecord() {
    await (await this.sc.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/component/member[Class=QScreen_Item_Repository_Document_Act||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Item_Repository_TruVault_Rec||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/component/body/row[0]/col[fieldName=itemRef||1]')).dblclick();
  }

  async openDetails() {
    await (await this.sc.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/component/member[Class=QScreen_Item_Repository_Document_Act||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/component/member[Class=QScreen_Record_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Record_Home||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=1||length=3||classIndex=1||classLength=3||roleIndex=1||roleLength=3||title=Details||scRole=button]/')).click();
  }

  async openRelatedObjects() {
    await (await this.sc.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/component/member[Class=QScreen_Item_Repository_Document_Act||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/component/member[Class=QScreen_Record_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Record_Home||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=2||length=3||classIndex=2||classLength=3||roleIndex=2||roleLength=3||title=Related%20Objects||scRole=button]/')).click();
  }

  async checkFormsandFields() {
    const divs = await this.page.locator('td.formCell>div').all();
    for (const div of divs) {
      const classAttr = await div.getAttribute('class');
      if (!classAttr || !classAttr.includes('staticTextItem')) {
        throw new Error('Element missing staticTextItem class');
      }
    }
  }

  async checkRelatedObjects() {
    const data = await this.loadFixture();
    for (const obj of data.relatedObjects) {
      await this.page.locator('td.multiLayoutButtonNoLeftBorderTextSelected,td.multiLayoutButtonText').filter({ hasText: obj }).waitFor({ state: 'visible' });
    }
  }

  async rightClickARecord() {
    await (await this.sc.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/component/member[Class=QScreen_Item_Repository_Document_Act||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Item_Repository_TruVault_Rec||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/component/body/row[0]/col[fieldName=itemRef||1]')).click({ button: 'right' });
  }

  async addBookmark() {
    await (await this.sc.getSC('//Menu[level=0]/body/row[0]/col[fieldName=itemName||1]')).click();
  }

  async columnHeaderId() {
    await (await this.sc.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/component/member[Class=QScreen_Item_Repository_Document_Act||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Item_Repository_TruVault_Rec||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/component/header/headerButton[fieldName=itemRef]/')).click();
  }

  async expandRecord() {
    await (await this.sc.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/component/member[Class=QScreen_Item_Repository_Document_Act||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Item_Repository_TruVault_Rec||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/component/body/row[0]/col[fieldName=%2472v||0]/valueicon')).click();
  }

  async minimizeARecord() {
    await (await this.sc.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/component/member[Class=QScreen_Item_Repository_Document_Act||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/selectorButton/openButton/icon')).click();
  }

  async clickAnywhereElse() {
    await this.page.waitForTimeout(200);
    await this.page.keyboard.down('Escape');
    await this.page.waitForTimeout(200);
    await this.page.keyboard.up('Escape');
  }

  async selectcolumn() {
    await (await this.sc.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/component/member[Class=QScreen_Item_Repository_Document_Act||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Item_Repository_TruVault_Rec||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/header/headerButton[fieldName=itemRef]/')).click({ button: 'right' });
    await (await this.sc.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/component/member[Class=QScreen_Item_Repository_Document_Act||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Item_Repository_TruVault_Rec||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/component/headerContextMenu[Class=Menu||index=0||length=1||classIndex=0||classLength=1||roleIndex=0||roleLength=1||scRole=menu]/body/row[title=Columns...||7]/col[fieldName=title||1]')).click();
  }

  async checkAvailableFields() {
    const data = await this.loadFixture();
    const expectedFields = data.availableFields;
    const picker = this.page.locator('div[eventproxy*="fieldPickerWindow_fieldPicker"]');
    await picker.waitFor({ state: 'visible' });

    const divs = await picker.locator('div').all();
    const availableFields = [];
    for (const div of divs) {
      const text = (await div.innerText())?.trim();
      if (text) {
        availableFields.push(text);
      }
    }

    const uniqueAvailableFields = [...new Set(availableFields)];
    for (const field of expectedFields) {
      if (!uniqueAvailableFields.includes(field)) {
        throw new Error(`Field ${field} not found in available fields`);
      }
    }
  }

  async checkMultiChoicePickerColumns() {
    const data = await this.loadFixture();
    const names = data.multiChoicePickerColumns;

    for (const text of names) {
      await (await this.sc.getSC(
        '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/component/member[Class=QScreen_Item_Repository_Document_Act||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Item_Repository_TruVault_Rec||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/component/filterEditor/editRowForm/item[title=' + encodeURI(text) + '||Class=SetFilterItem]/[icon="picker"]'
      )).click({ force: true });
    }
    await this.clickAnywhereElse();
  }

  async checkColumns() {
    const data = await this.loadFixture();
    const expectedColumnNames = data.columnNames;

    const tableInfo = await this.sc.getColumnsAndTypes(
      '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/component/member[Class=QScreen_Item_Repository_Document_Act||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Item_Repository_TruVault_Rec||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||classLength=1]/component/header/headerButton[fieldName=itemRef]/'
    );

    const availableCols = tableInfo.columns.map(obj => obj.textContent);
    for (const name of expectedColumnNames) {
      if (!availableCols.includes(name)) {
        throw new Error(`Column ${name} not found in available columns`);
      }
    }
  }

  async checkFormsandFieldsAvailablity() {
    const data = await this.loadFixture();
    for (const section of data.accordionSections) {
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
