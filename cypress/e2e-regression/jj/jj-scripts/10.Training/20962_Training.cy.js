import { GQTest } from "../../jj-pages/GQTest";
const GQ = new GQTest();

describe('20962_Allows default view of Transcripts', () => {

    it('Planet > Training', () => {
        // Login
        GQ.login();

        // Open Training
        GQ.Planets.Training.open();

        GQ.Planets.openDropdownmenu()

        GQ.Planets.checkPlanetAvailablity(`${"Training"}`)

         GQ.Planets.Training.checkMainNouns(['Transcripts','Quick Help'])

        // Expected columns
        let expectedColumns = [
            'Course Code',
            'Title',
            'Version',
            'Curriculum',
            'WIID',
            'User Full Name',
            'Type',
            'Status',
            'Due Date',
            'Assigned Date',
            'Completed Date'
        ];

        // Read and verify columns
        cy.wait(1000);

        cy.getColumnsAndTypes(
            GQ.Planets.Training.getColumnID()
        ).then(tableInfo => {
            let availableCols = []
            tableInfo.columns.map((obj) => {
                availableCols.push(obj.textContent)
            })
            cy.log(availableCols)
            for (let i = 0; i < expectedColumns.length; i++) {
                expect(availableCols).to.include(expectedColumns[i])
            }
        })

        // Verify Multichoice picker
        const namesList = ['Curriculum','Type','Status'];

        GQ.Planets.Training.checkMultiChoicePickerColumns(namesList);

        cy.wait(4000);

        // Logout
        GQ.logout();
    });

    it('Product > Training', () => {
        // Login
        GQ.login();

        // Navigate to Product planet
        GQ.Planets.Product.openLandingPage();

        // Open Product Families
        GQ.Planets.Product.ProductFamilies.openLandingPage();

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter();

        // Open specific Product Family
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('ciltacabtagene autoleuce');

        GQ.Planets.Product.Training.checkTabAvailablity()
        
        GQ.Planets.Product.Training.open();

        // Expected columns
        let expectedColumns = [
            'Course Code',
            'Title',
            'Version',
            'Curriculum',
            'WIID',
            'User Full Name',
            'Type',
            'Status',
            'Due Date',
            'Assigned Date',
            'Completed Date'
        ];

        // Read and verify columns
        cy.getColumnsAndTypes(
            GQ.Planets.Product.Training.getColumnID()
        ).then(tableInfo => {
            let availableCols = []
            tableInfo.columns.map((obj) => {
                availableCols.push(obj.textContent)
            })
            cy.log(availableCols)
            for (let i = 0; i < expectedColumns.length; i++) {
                expect(availableCols).to.include(expectedColumns[i])
            }
        })

        // Verify Multichoice picker
        const namesList = ['Curriculum','Type','Status'];
        GQ.Planets.Product.Training.checkMultiChoicePickerColumns(namesList);

        cy.wait(2000);

        // Logout
        GQ.logout();
    });

});
