import { GQTest } from '../../../jj-pages/GQTest';
import { LegendBio } from "../../../../jj/jj-pages/AT LegendBio/LegendBio";
// const InputData = require('../../../../../../InputData.json');

const GQ = new GQTest();
const ATLegendBio = new LegendBio();

describe('General Navigation and Product Family Access', () => {

    beforeEach(() => {
        GQ.login('AT LegendBio');
        GQ.Planets.Product.openLandingPage();
        GQ.Planets.Product.ProductFamilies.openProductFamilyByIndex(0);
    });

    afterEach(() => {

        cy.then(() => {
            GQ.logout();
        });
    });

    it('should display the Hamburger list menu options', () => {
        const hamburgerOptionsList = [
            'About',
            'My Account',
            'Support Ticket',
            'Lock Screen',
            'Logout'
        ];

        ATLegendBio.mainPage.getHamburgerMenuOptionsValidation(hamburgerOptionsList);
    });

    it('should validate visibility of all tabs for LegendBio users', () => {
        ATLegendBio.mainPage.getDocumentTabValidation().should('contain', 'Document');
        ATLegendBio.mainPage.getQualityManagementTabValidation().should('contain', 'Quality Management');
        ATLegendBio.mainPage.getLaboratoryInformationTabValidation().should('contain', 'Laboratory Informatio');
        ATLegendBio.mainPage.getManufacturingTabValidation().should('contain', 'Manufacturing');
        ATLegendBio.mainPage.SampleRecordsSectionMinimize();

    });

    it('should restrict Planet menu navigation and display only the ciltacabtagene autoleucel Product Family with its child Products', () => {

        ATLegendBio.mainPage.PlanetHomeIcon();
        GQ.Planets.Product.openLandingPage();

        ATLegendBio.mainPage.ProductFamilyMinimize();
        ATLegendBio.mainPage.ProductFamilymaximizeandMinimizeArrow();
        ATLegendBio.mainPage.ProductFamilymaximizeandMinimizeArrow();

        GQ.Planets.Product.ProductFamilies.openProductFamilyByIndex(0);
        ATLegendBio.mainPage.ChildProductVisbilityValidation({ timeout: 12000 });
    });

    it('should display the Content tab and should not display hamburger in the main Header', () => {

        ATLegendBio.mainPage.ContentTabValidation().should('contain', 'Content');
        ATLegendBio.mainPage.ValidateHumberNotDisplayedInMainHeader();
        ATLegendBio.mainPage.ValidateBookMarkNotDisplayedInMainHeader();

    });

    it('should display the Refresh icon only in the Grid menu and should not have access for admin and user data binder', () => {
        ATLegendBio.mainPage.validateOnlyRefreshIconVisible({ timeout: 12000 });

        const roles = [
            "Admin Binder",
            "User Binder",
            "Admin",
            "User"
        ];

        ATLegendBio.mainPage.getProductFamilyAccessRoles({ timeout: 12000 }).then(actualRoles => {
            roles.forEach(role => {
                expect(actualRoles).not.to.include(role);
            });
        });

    });




});
