import { Stabilitystudies } from "./Stability studies/Stabilitystudies"
import { StabilityData } from "./Stability Data/StabilityData";
import { ReleaseData } from "./Release Data/ReleaseData";
import { Specifications } from "./Specifications/Specifications";
const { SCHelper } = require("../../../../../../../playwright-sc-helper");

export class LaboratoryInformation {
  constructor(page) {
    this.page = page;
    this.sc = new SCHelper(page);
    this.Stabilitystudies = new Stabilitystudies(page);
    this.StabilityData = new StabilityData(page);
    this.ReleaseData = new ReleaseData(page);
    this.Specifications = new Specifications(page);
  }

  async openLandingPage() {
    // Implement or rely on Planets.openPlanet
    // cy.openPlanet('Laboratory Information')
  }
}