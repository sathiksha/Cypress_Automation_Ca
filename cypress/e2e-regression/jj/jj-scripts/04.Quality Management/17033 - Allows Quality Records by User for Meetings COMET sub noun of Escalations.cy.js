import { GQTest } from '../../jj-pages/GQTest'
import { Dayjs } from 'dayjs';
// Sprint 15
require('cypress-xpath')
describe('Sprint 15', () => {
  const GQ = new GQTest();
  it('Allows Quality Records by User for Meetings (COMET) sub noun of Escalations', () => {

// Login

    GQ.login();
    // Open Quality Management
    GQ.Planets.QualityManagement.openLandingPage();
    GQ.Planets.QualityManagement.QualityRecordsByUser.openLandingPage();
    GQ.Planets.QualityManagement.QualityRecordsByUser.clickAPerson('Hetal Raval');

    GQ.Planets.QualityManagement.QualityRecordsByUser.Escalations.open();
    GQ.Planets.QualityManagement.QualityRecordsByUser.Escalations.Meetings.open();

    let expectedColumnsQXD = [
      'Number',
      '👁', 
      'Title', 
      'Description of Issue', 
      'Status', 
      'Owner',
      'Meeting Date', 
      'Initial or Follow Up Meeting', 
      'Related Escalation', 
      'Related Escalation Level', 
      'Meeting  Attendees'];

   // Read column
    cy.getColumnsAndTypes(GQ.Planets.QualityManagement.QualityRecordsByUser.Escalations.Meetings.getColumnID()).then(tableInfo => {
      let availableCols = [];
      tableInfo.columns.map(obj => {
        availableCols.push(obj.textContent);
      });
      cy.log(JSON.stringify(availableCols));
      for (let i = 0; i < expectedColumnsQXD.length; i++) {
        expect(availableCols).to.include(expectedColumnsQXD[i]);
      }
    });



    // Verify Multichoice picker
    const namesList = [
      'Status',  
      'Initial or Follow Up Meeting',
      'Related Escalation Level'
      ];  

    GQ.Planets.QualityManagement.QualityRecordsByUser.Escalations.Meetings.checkMultiChoicePickerColumns(namesList);
    GQ.Planets.QualityManagement.QualityRecordsByUser.Escalations.Meetings.toggleFilterIcon();


    GQ.Planets.QualityManagement.QualityRecordsByUser.Escalations.Meetings.rightClickBookmark();
    GQ.Planets.QualityManagement.QualityRecordsByUser.Escalations.Meetings.checkBookmarkFunationality();
    GQ.Planets.QualityManagement.QualityRecordsByUser.Escalations.Meetings.openARecord(0);

    const form = [
      'Objective:', 
      'Decisions:', 
      'Follow Up Meeting Required:', 
      'Further Escalation Required:', 
      'If No Field Action, Document Rationale:', 
      'Next Step(s):', 
      'Facilitator:', 
      'Additional Information/Escalation Update:', 
      'Author of Minutes:', 
      'Initial Date Minutes Issued:', 
      'Final Date Minutes Issued:'];

    GQ.Planets.QualityManagement.QualityRecordsByUser.Escalations.Meetings.checkformsfields(form);
    GQ.logout();
  });

  it("Allows by User for Meetings (COMET) sub noun of Escalations in Product Family", () => {
 //     const GQ = new _GQTest.GQTest();
      // Login
      GQ.login();
      GQ.Planets.Product.openLandingPage();
      // Product Families
      GQ.Planets.Product.ProductFamilies.openLandingPage();
      // Toggle Filter
      GQ.Planets.Product.ProductFamilies.toggleFilter();
      // Product Record
      GQ.Planets.Product.ProductFamilies.openProductFamilyByText('My Family Test - Cypress');
      // Content
      GQ.Planets.Product.ProductFamilies.ProductFamily.Content.open();
      GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.openLandingPage();
      GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.byUser.open();

      GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.byUser.clickAPerson('Hetal Raval');
      GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.byUser.openEscalations();
      GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.byUser.openMeetings();

      let expectedColumnsQXD = [
        'Number', 
        '👁', 
        'Title', 
        'Description of Issue', 
        'Status', 
        'Owner', 
        'Meeting Date', 
        'Initial or Follow Up Meeting', 
        'Related Escalation', 
        'Related Escalation Level', 
        'Meeting  Attendees'];
      // Read column
      cy.getColumnsAndTypes(
            GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.byUser.byUserMeetings.getColumnID()
        ).then(tableInfo => {
            let availableCols = []
            tableInfo.columns.map((obj) => {
                availableCols.push(obj.textContent)
            })
            cy.log(availableCols)
            for (let i = 0; i < expectedColumnsQXD.length; i++) {
                expect(availableCols).to.include(expectedColumnsQXD[i])
            }
      })

      // Verify Multichoice picker
      const namesList = [
        'Status',  
        'Initial or Follow Up Meeting',
        'Related Escalation Level'
        ];  

      GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.byUser.byUserMeetings.checkMultiChoicePickerColumns(namesList);
      GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.byUser.byUserMeetings.toggleFilterIcon();

      GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.byUser.byUserMeetings.rightClickBookmark();
      GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.byUser.byUserMeetings.checkBookmarkFunationality();
      GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.byUser.byUserMeetings.openARecord(0);
   
      const form = [
        
        'Objective:',         
        'Decisions:',         
        'Follow Up Meeting Required:',         
        'Further Escalation Required:',         
        'If No Field Action, Document Rationale:', 
        'Next Step(s):', 
        'Facilitator:', 
        'Additional Information/Escalation Update:', 
        'Author of Minutes:', 
        'Initial Date Minutes Issued:', 
        'Final Date Minutes Issued:'];

      GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityRecords.byUser.byUserMeetings.checkformsfields(form);
      GQ.logout();
  });
})