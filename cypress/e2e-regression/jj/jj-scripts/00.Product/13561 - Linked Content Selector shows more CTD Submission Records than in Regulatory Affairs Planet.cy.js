import { GQTest } from '../../jj-pages/GQTest'
// Sprint 7
require('cypress-xpath')
describe('Sprint 7', () => {
    const GQ = new GQTest();
    it('13561 - Linked Content Selector shows more CTD/Submission Records than in Regulatory Affairs Planet', () => {

        // Login
        GQ.login()

        // Regulatory Affairs
        GQ.Planets.RegulatoryAffairs.openLandingPage()

        // CTD/Submission tab
        GQ.Planets.RegulatoryAffairs.CTDSubmissionRecords.open()

        cy.wait(1000)

        // Get row count 
        cy.getRowCount(
            GQ.Planets.RegulatoryAffairs.CTDSubmissionRecords.rowCountID()
        )
        .then(
            (firstCount)=>{
                //GQ.NavBar.relatedPlanets()

                GQ.NavBar.navigateToProduct()

                GQ.Planets.Product.ProductFamilies.openLandingPage()

                GQ.Planets.Product.ProductFamilies.toggleFilter()

                GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')

                GQ.Planets.Product.ProductFamilies.ProductFamily.selectAdmindataBinder('MSAT Product View - Cypress Test Admin Binder')

                GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.open()

                GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.open()

                GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.CTDSubmissionRecords.open()

                GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.CTDSubmissionRecords.clickLinkSiblingIcon()

                GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.CTDSubmissionRecords.refreshRecords()

                cy.getRowCount(
                    GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.CTDSubmissionRecords.rowCountID()
                ).then((adminBinderCount) => {
                    expect(adminBinderCount).to.equal(firstCount)
                })

                GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.CTDSubmissionRecords.clickClose()

                GQ.Planets.Product.ProductFamilies.ProductFamily.selectAdmindataBinder('MSAT Product View - Cypress Test Admin Binder')

                GQ.Planets.Product.ProductFamilies.ProductFamily.clickPlusIcon('MSAT Product View - Cypress Test Admin Binder')

                GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.linkedcontent.openlandingpage()

                GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.linkedcontent.RegulatoryAffairs()

                // GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.linkedcontent.RegulatoryAffairs.CTDSubmissionRecords.open()
                
                GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.linkedcontent.CTDSubmissionRecords.clickLinkSiblingIcon()

                cy.getRowCount(
                    GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.CTDSubmissionRecords.rowCountID()
                ).then((ProductSpecificBinderBinderCount) => {
                    expect(ProductSpecificBinderBinderCount).to.equal(firstCount)
                })

                GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.linkedcontent.CTDSubmissionRecords.clickClose()

                GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.open()

                GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.RegulatoryAffairs.open()

                // GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.RegulatoryAffairs.CTDSubmissionRecords.open()

                GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.RegulatoryAffairs.CTDSubmissionRecords.clickLinkSibling()

                cy.getRowCount(
                    GQ.Planets.Product.ProductFamilies.ProductFamily.LinkedContent.RegulatoryAffairs.CTDSubmissionRecords.rowCountID()
                ).then((userDataBinderBinderCount) => {
                    expect(userDataBinderBinderCount).to.equal(firstCount)
                })                

                GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.LinkedContent.RegulatoryAffairs.CTDSubmissionRecords.clickClose()

                GQ.logout()

             })

    })
})