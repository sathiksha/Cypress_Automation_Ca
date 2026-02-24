import { GQTest } from '../../jj-pages/GQTest'
// Sprint 3
require('cypress-xpath')
describe('Sprint 6', () => {
    const GQ = new GQTest();
    it('13184 - Allows users to manage their User account information', () => {

        GQ.login('PQM360 General User')

        GQ.Menu.show()

        GQ.Menu.MyAccount.open()

        cy.contains('User Information').should('be.visible')
        cy.contains('First Name').should('be.visible')

        GQ.Menu.MyAccount.typeFirstName('Val')

        cy.contains('Last Name').should('be.visible')

        GQ.Menu.MyAccount.typeLastName('test5')

        cy.contains('Title').should('be.visible')

        GQ.Menu.MyAccount.typeTitle('xxxxxxx')

        cy.contains('Phone').should('be.visible')

        GQ.Menu.MyAccount.typePhone('00000000000000')

        cy.contains('Email').should('be.visible')

        GQ.Menu.MyAccount.typeEmail('yyyyyy')

        cy.contains('Address').should('be.visible')

        GQ.Menu.MyAccount.typeAddress('zzzz')

        cy.contains('Employee WWID').should('be.visible')

        GQ.Menu.MyAccount.TypeEmployeeWWID('123')


        GQ.Menu.MyAccount.expandUserInformation()
        
        cy.contains('User Reporting').should('be.visible')
        cy.contains('Organization:').should('be.visible')
        cy.contains('Function:').should('be.visible')
        cy.contains('Department:').should('be.visible')
        cy.contains('Site:').should('be.visible')

        GQ.Menu.MyAccount.expandUserReporting()

        cy.contains('Account Information').should('be.visible')
        cy.contains('Account Name:').should('be.visible')
        cy.contains('eSignature ID:').should('be.visible')
        cy.contains('WorkCenter License').should('be.visible')
        cy.contains('IntelliWriter License').should('be.visible')

        GQ.Menu.MyAccount.clickCancel()

        GQ.logout()

    })
})
