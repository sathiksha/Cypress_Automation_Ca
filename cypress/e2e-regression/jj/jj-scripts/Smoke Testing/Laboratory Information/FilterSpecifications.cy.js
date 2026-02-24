import { GQTest } from "../../../jj-pages/GQTest";
describe("05. Laboratory Information", () => {
  Cypress.config("defaultCommandTimeout", 180000);
  it("Filter Release Data", () => {
    const GQ = new GQTest();
    // Login
    GQ.login();

    // Open Laboratory Information
    GQ.Planets.LaboratoryInformation.openLandingPage();

    GQ.Planets.LaboratoryInformation.LaboratoryRecords.Specifications.open()

    GQ.Planets.LaboratoryInformation.LaboratoryRecords.Specifications.openReleaseSpecificationIALDownloadView();

    cy.autoTestAll(
      GQ.Planets.LaboratoryInformation.LaboratoryRecords.Specifications.releaseSpecificationIALDownloadGridID(),
      {}
    );

    GQ.Planets.LaboratoryInformation.LaboratoryRecords.Specifications.openStandardSpecificationIALDownloadView();

    cy.autoTestAll(
      GQ.Planets.LaboratoryInformation.LaboratoryRecords.Specifications.standardSpecificationIALDownloadGridID(),
      {}
    );

    GQ.Planets.LaboratoryInformation.LaboratoryRecords.Specifications.openStandardView();

    cy.autoTestAll(
      GQ.Planets.LaboratoryInformation.LaboratoryRecords.Specifications.StandardGridID(),
      {}
    );
    GQ.logout();
  });
});
