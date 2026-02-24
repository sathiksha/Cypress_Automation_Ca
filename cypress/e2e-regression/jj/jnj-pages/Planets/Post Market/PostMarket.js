import { Complaints } from "./Complaints/Complaints";
import { Complaintrecords } from "./Complaint records/Complaintrecords";
const { SCHelper } = require("../../../../../../../playwright-sc-helper");

export class PostMarket {
  constructor(page) {
    this.page = page;
    this.sc = new SCHelper(page);
    this.Complaints = new Complaints(page);
    this.Complaintrecords = new Complaintrecords(page);
  }

  async open() {
    // await (await this.sc.getSC('locator')).click(); 
  }
}