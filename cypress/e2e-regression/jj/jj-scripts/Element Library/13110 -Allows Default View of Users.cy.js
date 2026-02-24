import { GQTest } from '../../jj-pages/GQTest'
// Sprint 6
require('cypress-xpath')
describe('Sprint 6', () => {
    const GQ = new GQTest();
    it('13249-Allows enforcement of customer license quantities', () => {

        // Login 
        GQ.login("PQM360 System Administrator")

        // Menu
        GQ.Menu.show()

        // Open Domain Setup
        GQ.Menu.DomainSetup.open()

        // Manage
        GQ.Menu.DomainSetup.Manage.open()

        // Users tab
        GQ.Menu.DomainSetup.Manage.Users.open()

        // Verify columns
        let expectedColumnsQXD = [
            'Name',
            'Account',
            'Title',
            'Email',
            'Phone',
            'Workcenter',
            'IntelliWriter',
            'Organization',
            'Function',
            'Department',
            'Site'
        ]

        cy.getColumnsAndTypes(
            GQ.Menu.DomainSetup.Manage.Users.getColumnsID()
        )
        .then(tableInfo => {
            let availableCols = []
            tableInfo.columns.map((obj) => {
                availableCols.push(obj.textContent)
            })
            cy.log(availableCols)
            for (let i = 0; i < expectedColumnsQXD.length; i++) {
                expect(availableCols).to.include(expectedColumnsQXD[i])
            }
        })
        // Select User
        GQ.Menu.DomainSetup.Manage.Users.openUserNameByText('Cypress','Cypress Test User')

        /// Check Multi Choice picker
        const namesList = ['User Information','User Reporting','Account Information']
        
        cy.get('tbody tr td div').then(($labels) => {
            const labelTexts = Array.from($labels).map(label => label.innerText.trim());
            namesList.forEach(value => {
                expect(labelTexts).to.include(value, `${value} is present in the list`);
            });
        });

        const expectedValues = [
            'First Name', 'Last Name', 'Title', 'Email', 'Phone', 'Address', 
            'Employee WWID', 'Organization', 'Function', 'Department', 
            'Site', 'Account Name:', 'eSignature ID:', 
            'WorkCenter License', 'IntelliWriter License'
        ];
         
        GQ.Menu.DomainSetup.Manage.Users.User.openDetails()

        cy.get('tbody tr td label').then(($labels) => {
            const labelTexts = Array.from($labels).map(label => label.innerText.trim());
            expectedValues.forEach(value => {
                expect(labelTexts).to.include(value, `${value} is present in the list`);
            });
        });

        // Log out
        GQ.logout()

        
        
    })
})