import { GQTest } from "../../../jnj-pages/GQTest.js";

describe("Default view of LOC Products", () => {
  const GQ = new GQTest();

  it("Default view of LOC Products - Planet", () => {
    // Login
    GQ.Login();

    //Open Planet
    GQ.Planets.openPlanet("Regulatory Affairs");

    GQ.Planets.RegulatoryAffairs.Registrations.open();
    //Open page
    GQ.Planets.RegulatoryAffairs.Registrations.IncludedLoc.open();

    //Refresh
    GQ.Planets.RegulatoryAffairs.Registrations.IncludedLoc.refresh();

    //check Header Icons
    GQ.Planets.RegulatoryAffairs.Registrations.IncludedLoc.checkHeaderIcons();

    //Check Column availability
    GQ.Planets.RegulatoryAffairs.Registrations.IncludedLoc.checkColumns();

    //Check multi-choice picker Column availability
    GQ.Planets.RegulatoryAffairs.Registrations.IncludedLoc.checkMultiChoicePickerColumns();

    //open a Record
    GQ.Planets.RegulatoryAffairs.Registrations.IncludedLoc.openARecord();

    //Click Details Tab
    GQ.Planets.RegulatoryAffairs.Registrations.IncludedLoc.openCandidateMaterials();

    //Open related Objects
    GQ.Planets.RegulatoryAffairs.Registrations.IncludedLoc.openMatchExplanation();

    GQ.Planets.RegulatoryAffairs.Registrations.IncludedLoc.openAllMaterials()

    //minimize the record
    GQ.Planets.RegulatoryAffairs.Registrations.IncludedLoc.minimizeARecord();

    //Logout
    GQ.Logout();
  });
 }); 