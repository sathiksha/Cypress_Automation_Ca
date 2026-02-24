import { Documents } from "./Documents/Documents";
import { RegulatoryAffairs } from "./Regulatory Affairs/RegulatoryAffairs";
import { PostMarket } from "./Post Market/PostMarket";
import { QualityManagement } from "./Quality Management/QualityManagement";
import { LaboratoryInformation } from "./Laboratory Information/LaboratoryInformation";
import { Manufacturing } from "./Manufacturing/Manufacturing";
import { Training } from "./Training/Training";
import { Product } from "./Product/Product";
const { SCHelper } = require("../../../../../../playwright-sc-helper");

export class Planets {
  constructor(page) {
    this.page = page;
    this.sc = new SCHelper(page);
    this.Documents = new Documents(page);
    this.RegulatoryAffairs = new RegulatoryAffairs(page);
    this.PostMarket = new PostMarket(page);
    this.QualityManagement = new QualityManagement(page);
    this.LaboratoryInformation = new LaboratoryInformation(page);
    this.Manufacturing = new Manufacturing(page);
    this.Product = new Product(page);
    this.Training = new Training(page);
  }

  async openPlanet(planet) {
    // Logic from commands.js/openPlanet
    await this.sc.waitForSCDone();
    const diagram = await this.sc.getSC('//QDiagram[ID=\"isc_QDiagram_0\"]]/');
    // Implement GoJS Robot logic if needed, or simplified navigation
  }
}