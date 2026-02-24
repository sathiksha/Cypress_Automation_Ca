import { GQTest } from '../../jnj-pages/GQTest'

describe('8734_Alias Rule Validation', () => {
    const GQ = new GQTest()

    it('8734_Header Validation - Product > Content > Header', () => {
        // Login 
        GQ.Login()

        // Open Product
        GQ.Planets.openPlanet('Product')

        //Toggle Filter
        GQ.Planets.Product.ProductFamily.toggleFilter()

        // Open Product Family
        GQ.Planets.Product.ProductFamily.open('APALUTAMIDE')

        // Click Content
        GQ.Planets.Product.ProductFamily.Content.open()

        //click Document
        GQ.Planets.Product.ProductFamily.Content.Documents.open()

        GQ.Planets.Product.ProductFamily.Content.Documents.checkDocumentValidation()

        GQ.Planets.Product.ProductFamily.Content.Documents.homeheaderValidation()

        GQ.Planets.Product.ProductFamily.Content.Documents.ActionItemValidation()

        GQ.Planets.Product.ProductFamily.Content.Documents.NoteValidation()

        GQ.Planets.Product.ProductFamily.Content.Documents.RoleValidation()

        GQ.Planets.Product.ProductFamily.Content.Documents.HistoryValidation()

        GQ.Planets.Product.ProductFamily.Content.Documents.AdminValidation()

        GQ.Planets.Product.ProductFamily.Content.Documents.HomTabValidation()


        GQ.Logout()



    })


});