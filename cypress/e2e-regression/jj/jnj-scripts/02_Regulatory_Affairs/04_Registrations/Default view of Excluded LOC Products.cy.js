import { GQTest } from "../../../jnj-pages/GQTest.js";

describe("Default view of Excluded LOC", () => {
  const GQ = new GQTest();

  it("Default view of Excluded LOC - Planet", () => {
    // Login
    GQ.Login();

    //Open Planet
    GQ.Planets.openPlanet("Regulatory Affairs");

    GQ.Planets.RegulatoryAffairs.Registrations.open();

    //Open page
    GQ.Planets.RegulatoryAffairs.Registrations.ExcludedLoc.open();

    //Refresh
    GQ.Planets.RegulatoryAffairs.Registrations.ExcludedLoc.refresh();

    //check Header Icons
    GQ.Planets.RegulatoryAffairs.Registrations.ExcludedLoc.checkHeaderIcons();

    //Check Column availability
    GQ.Planets.RegulatoryAffairs.Registrations.ExcludedLoc.checkColumns();

    //Check multi-choice picker Column availability
    GQ.Planets.RegulatoryAffairs.Registrations.ExcludedLoc.checkMultiChoicePickerColumns();

    //open a Record
    GQ.Planets.RegulatoryAffairs.Registrations.ExcludedLoc.openARecord();

    //Click Details Tab
    GQ.Planets.RegulatoryAffairs.Registrations.ExcludedLoc.openCandidateMaterials();

    //Open related Objects
    GQ.Planets.RegulatoryAffairs.Registrations.ExcludedLoc.openMatchExplanation();

    GQ.Planets.RegulatoryAffairs.Registrations.ExcludedLoc.openAllMaterials()

    //minimize the record
    GQ.Planets.RegulatoryAffairs.Registrations.ExcludedLoc.minimizeARecord();

    //Logout
    GQ.Logout();
  });
 }); 