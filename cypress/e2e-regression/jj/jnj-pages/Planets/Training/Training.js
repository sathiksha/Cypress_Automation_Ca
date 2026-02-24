import { Transcripts } from "./Transcripts";
const { SCHelper } = require("../../../../../../../playwright-sc-helper");

export class Training {
  constructor(page) {
    this.page = page;
    this.sc = new SCHelper(page);
    this.Transcripts = new Transcripts(page);
  }

  async open() {
    // await (await this.sc.getSC('locator')).click(); 
  }
}