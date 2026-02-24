import { GQTest } from '../../jj-pages/GQTest'
// Sprint 6
require('cypress-xpath')
if (!Cypress.env('onlyRunReadOnlyTests')) {
describe('Sprint 6', () => {
    const GQ = new GQTest();
    it('12692-Allows a controlled list of Organizations for user assignment', () => {

        // Login 
        GQ.login("PQM360 System Administrator")

        // Go to element library
        GQ.NavBar.ElementLibrary.openLandingPage()

        // User Reporting
        GQ.NavBar.ElementLibrary.UserReporting.open()

        // Organization
        cy.getSC(
            GQ.NavBar.ElementLibrary.UserReporting.Organization.ReadOrganization()
        ).should('be.visible')

        // Function
        cy.getSC(
            GQ.NavBar.ElementLibrary.UserReporting.Function.ReadFunction()
        ).should('be.visible')

        // Department
        cy.getSC(
            GQ.NavBar.ElementLibrary.UserReporting.Department.ReadDepartment()
        ).should('be.visible')

        // Site
        cy.getSC(
            GQ.NavBar.ElementLibrary.UserReporting.Site.ReadSite()
        ).should('be.visible')

        // Organization
        GQ.NavBar.ElementLibrary.UserReporting.Organization.open()

        // Create Organization
        GQ.NavBar.ElementLibrary.UserReporting.Organization.createNewOrganization('Test')

        // Select Test 
        GQ.NavBar.ElementLibrary.UserReporting.Organization.selectOrganizationByText('Test')

        // Modify Name
        GQ.NavBar.ElementLibrary.UserReporting.Organization.modifyOrganizationName('Test Modified')
        
        // Modify Description
        GQ.NavBar.ElementLibrary.UserReporting.Organization.modifyOrganizationDescription('Test Organization')

        // Save 
        GQ.NavBar.ElementLibrary.UserReporting.Organization.save()

        // Link User
        GQ.NavBar.ElementLibrary.UserReporting.Organization.linkUserByText('test user',0)

        cy.waitForSCDone()
    
        let sampleNumber = [0];
        let expectedValue = ["Test Modified"];
        cy.getRows('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_EL_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_EL_Organizations_Activity||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Base_Main_Noun_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Home||scClass=VLayout||index=0||length=9||classIndex=0||classLength=1||scClassIndex=0||scClassLength=9]/component/member[Class=QScreen_Organization_Home||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/item[name=assignedUsers||title=Assigned%20Users||index=3||Class=QCanvasItem]/canvas/member[Class=QScreen_Organization_Assigned_Users_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/body/row[oid=0195a7de-7db1-71df-ac20-62c51827b741||itemName=Cypress%20Test%20%20User||0]/col[fieldName=itemName||0]', sampleNumber)
        .then((resultObject) => {
            cy.log('The table has ' + resultObject.rowCount + ' rows available');
            let UIRows = resultObject.rowResults;
            sampleNumber.forEach((randomIndex) => {
                let rowData = UIRows[randomIndex];
                cy.log('Extracted Row Data:');
                rowData.forEach((value, index) => {
                    cy.log('Index ' + index + ': "' + value + '"');
                });
                if (rowData.length > 8) {
                    let extractedValue = rowData[8].trim();
                    cy.log('Extracted 8th value: "' + extractedValue + '"');
                    expect(extractedValue).to.eq(expectedValue[0], 'Assertion: Extracted value should match expected value');
                } else {
                    cy.log('Row does not contain at least 8 values. Stopping test.');
                    return false;
                }
            });
        });
        

        // Delete
        GQ.NavBar.ElementLibrary.UserReporting.Organization.deleteOrganizationByText('Test Modified')

        // Error Message
        cy.getSC(GQ.NavBar.ElementLibrary.UserReporting.Organization.message).invoke('text').then((title)=>{
            cy.wrap(title).should('equal', "STOP: You are attempting to delete an Organization that has currently assigned users. First un-assign this Organization from all users and then repeat this delete operation.")
        })

        // Click Ok
        GQ.NavBar.ElementLibrary.UserReporting.Organization.clickOKWarningMessage()

        // Unlink user
        GQ.NavBar.ElementLibrary.UserReporting.Organization.unlinkUserByIndex('test user',0)

        // Delete Test Modified
        GQ.NavBar.ElementLibrary.UserReporting.Organization.deleteOrganizationByText('Test Modified')

        // Logout
        GQ.logout()

    })
})
}
