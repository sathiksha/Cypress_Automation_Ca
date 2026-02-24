import { Materials } from "./Materials/Materials";
import { Batches } from "./Batches/Batches";
import { BatchFlows } from "./Batch Flows/BatchFlows";
import { PnLOrders } from "./P&L Orders/P&L Orders";
const { SCHelper } = require("../../../../../../../playwright-sc-helper");

export class Manufacturing {
  constructor(page) {
    this.page = page;
    this.sc = new SCHelper(page);
    this.Materials = new Materials(page);
    this.Batches = new Batches(page);
    this.BatchFlows = new BatchFlows(page);
    this.PnLOrders = new PnLOrders(page);
  }

  async open() {
    // await (await this.sc.getSC('locator')).click(); 
  }
}