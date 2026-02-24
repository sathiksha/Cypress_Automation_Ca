import { CTDSubmissionRecords } from "./CTD_Submission Records/CTDSubmissionRecords";
import { Products } from "./Products/Products";
import { Applications } from "./Applications/Applications";
import { Registrations } from "./Registrations/Registrations";
import { PackageSets } from "./Package Sets/PackageSets";
import { CTAINDEvents } from "./CTA-IND Events/CTAINDEvents";
import { BLANDAEvents } from "./BLA-NDA Events/BLANDAEvents";
const { SCHelper } = require("../../../../../../../playwright-sc-helper");

export class RegulatoryAffairs {

  constructor(page) {
    this.page = page;
    this.sc = new SCHelper(page);
    this.CTDSubmissionRecords = new CTDSubmissionRecords(page);
    this.Products = new Products(page);
    this.Applications = new Applications(page);
    this.Registrations = new Registrations(page);
    this.PackageSets = new PackageSets(page);
    this.CTAINDEvents = new CTAINDEvents(page);
    this.BLANDAEvents = new BLANDAEvents(page);
  }

  async open() {
    // Example: (await this.sc.getSC('locator')).click(); 
  }
}