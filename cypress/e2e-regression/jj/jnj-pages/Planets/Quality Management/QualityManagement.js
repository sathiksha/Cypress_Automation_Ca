import { ChangeControls } from "./ChangeControls/ChangeControls";
import { Escalations } from "./Escalations/Escalations";
import { Nonconformances } from "./Nonconformances/Nonconformances";
import { CAPAs } from "./CAPAs/CAPAs";
import { Audits } from "./Audits/Audits";
import { Accounts } from "./Accounts/Accounts";
import { Accounts_TW } from "./Accounts/Account_TW";
import { QualityRecordsByUser } from "./Quality Records By User/QualityRecordsByUser";
const { SCHelper } = require("../../../../../../../playwright-sc-helper");

export class QualityManagement {
  constructor(page) {
    this.page = page;
    this.sc = new SCHelper(page);
    this.ChangeControls = new ChangeControls(page);
    this.Escalations = new Escalations(page);
    this.Nonconformances = new Nonconformances(page);
    this.CAPAs = new CAPAs(page);
    this.Audits = new Audits(page);
    this.Accounts = new Accounts(page);
    this.Accounts_TW = new Accounts_TW(page);
    this.QualityRecordsByUser = new QualityRecordsByUser(page);
  }

  async open() {
    // await (await this.sc.getSC('locator')).click(); 
  }
}