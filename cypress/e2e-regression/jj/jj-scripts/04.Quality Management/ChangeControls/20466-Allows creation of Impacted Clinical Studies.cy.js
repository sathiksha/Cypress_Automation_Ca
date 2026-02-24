import { GQTest } from "../../../jj-pages/GQTest";
const GQ = new GQTest();

describe('Allows creation of Impacted Clinical Studies', () => {
    it('20948 - Allows creation of Impacted Clinical Studies for QA CSC users - Quality Management', () => {
        const GQ = new GQTest();
        // Login
        GQ.login("PQM360 General User");

        // Open Quality Management
        GQ.Planets.QualityManagement.openLandingPage()

        // ChangeControls
        GQ.Planets.QualityManagement.ChangeControls.openLandingPage()

        // Comet
        GQ.Planets.QualityManagement.ChangeControls.viewComet()

        GQ.Planets.QualityManagement.ChangeControls.Comet.openRecordByIndex(0)

        GQ.Planets.QualityManagement.ChangeControls.Comet.relatedObjects()

        GQ.Planets.QualityManagement.ChangeControls.Comet.clickClinicalStudies()

        GQ.Planets.QualityManagement.ChangeControls.Comet.addNewClincalStudyandcheckduplicateanddelete()

        // Logout
        GQ.logout()
    })
    it('20948 - Allows creation of Impacted Clinical Studies for Non-QA CSC users - Quality Management', () => {
        const GQ = new GQTest();
        // Login
        GQ.login();

        // Open Quality Management
        GQ.Planets.QualityManagement.openLandingPage()

        // ChangeControls
        GQ.Planets.QualityManagement.ChangeControls.openLandingPage()

        // Comet
        GQ.Planets.QualityManagement.ChangeControls.viewComet()

        GQ.Planets.QualityManagement.ChangeControls.Comet.openRecordByIndex(0)

        GQ.Planets.QualityManagement.ChangeControls.Comet.relatedObjects()

        GQ.Planets.QualityManagement.ChangeControls.Comet.clickClinicalStudies()

        GQ.Planets.QualityManagement.ChangeControls.Comet.clinicalStudyCheckForNonQaCscUsers()

        // Logout
        GQ.logout()
    })

     it('20948 - Allows creation of Impacted Clinical Studies for QA CSC users - Product', () => {
        const GQ = new GQTest();
        // Login
        GQ.login("PQM360 General User");

        // Open product
        GQ.Planets.Product.openLandingPage()

        // product family
        GQ.Planets.Product.ProductFamilies.openLandingPage()

        // Comet
        GQ.Planets.Product.ProductFamilies.openProductFamilyByIndex(0)

        GQ.Planets.Product.ProductFamilies.clickQualityManagement()

        GQ.Planets.Product.ProductFamilies.openCometRecordByIndex(0)

        GQ.Planets.Product.ProductFamilies.relatedObjects()

        GQ.Planets.Product.ProductFamilies.clickClinicalStudies()

        GQ.Planets.Product.ProductFamilies.addNewClincalStudyandcheckduplicateanddelete()

        // Logout
        GQ.logout()
    })

it('20948 - Allows creation of Impacted Clinical Studies for Non-QA CSC users - Product', () => {
        const GQ = new GQTest();
        // Login
        GQ.login();

        // Open product
        GQ.Planets.Product.openLandingPage()

        // product family
        GQ.Planets.Product.ProductFamilies.openLandingPage()

        // Comet
        GQ.Planets.Product.ProductFamilies.openProductFamilyByIndex(0)

        GQ.Planets.Product.ProductFamilies.clickQualityManagement()

        GQ.Planets.Product.ProductFamilies.openCometRecordByIndex(0)

        GQ.Planets.Product.ProductFamilies.relatedObjects()

        GQ.Planets.Product.ProductFamilies.clickClinicalStudies()

        GQ.Planets.Product.ProductFamilies.clinicalStudyCheckForNonQaCscUsers()
        // Logout
        GQ.logout()
    })

})