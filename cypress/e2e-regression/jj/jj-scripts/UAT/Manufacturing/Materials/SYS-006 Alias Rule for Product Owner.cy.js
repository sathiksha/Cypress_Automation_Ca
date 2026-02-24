import { GQTest } from "../../../../jj-pages/GQTest";
import { ElementLibrary } from "../../../../jj-pages/Navigation Bar/ElementLibrary";
const GQ = new GQTest();
if (!Cypress.env('onlyRunReadOnlyTests')) {
describe('UAT/4.1', () => {
    it('SYS-006 Alias Rule for Product Owner', () => {
        // Login
        GQ.login()

        // Open Product
        GQ.Planets.Product.openLandingPage()

        // Open Product Families
        GQ.Planets.Product.ProductFamilies.openLandingPage()
        
        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()
        
        // Type Name
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')
        
        // Select Parent record
        GQ.Planets.Product.ProductFamilies.ProductFamily.selectParent('APALUTAMIDE')
        
        // Roles
        GQ.Planets.Product.ProductFamilies.ProductFamily.Roles.open()
        
        // Click Product Owner
        GQ.Planets.Product.ProductFamilies.ProductFamily.Roles.selectOwnerByText('Product Owner')
        
        // Content
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.open()

        // Maufacturing records
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.openLandingPage()
        
        // Alias Rule
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.Materials.AliasRule.open()
        
        // Dropdown
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.Materials.AliasRule.newFilter_fieldStartsWithValue(0,'[ None ]','TV-TEC')
        
        // // Type TVTEC
        // GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.Materials.AliasRule.setValue('TV-TEC')
        
        // // Add another
        // GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.Materials.AliasRule.addRow()
        
        
        // Dropdown
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.Materials.AliasRule.newFilter_fieldStartsWithValue(1,'[ None ]','Sa')

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.Materials.AliasRule.savetheValue()
            
        // // Type TVTEC
        // GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.Materials.AliasRule.setValue('Sa')
        
        // // Save
        // cy.clickIfExists(
        //     GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.Materials.AliasRule.save()
        // )
        
        // Click Filtered
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.Materials.Filtered.openLandingPage()
        
        // Refresh Data
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.Materials.Filtered.refresh()
        // Get Row Count
        // cy.waitForRowCount(
        //     '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen2e3ce053-a832-4461-8f95-248aa19f8f16||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen49c4b7e4-845c-4eb1-9d7b-cbc1b7395118||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Content||scClass=VLayout||index=0||length=8||classIndex=0||classLength=1||scClassIndex=0||scClassLength=8]/component/member[Class=QScreenb05d6000-1621-4bd9-80f2-21616b0d6630||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/member[Class=QScreen_Content_Layout||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Product_Records||scClass=VLayout||index=0||length=6||classIndex=0||classLength=1||scClassIndex=0||scClassLength=6]/component/member[Class=QScreen_Content_Product_Records||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Filtered||scClass=VLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=3]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Filtered_Content_Selector_w_Bi||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/rowRangeDisplay/'
        // )
        // cy.getSC(
        //     '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen2e3ce053-a832-4461-8f95-248aa19f8f16||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen49c4b7e4-845c-4eb1-9d7b-cbc1b7395118||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Content||scClass=VLayout||index=0||length=8||classIndex=0||classLength=1||scClassIndex=0||scClassLength=8]/component/member[Class=QScreenb05d6000-1621-4bd9-80f2-21616b0d6630||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/member[Class=QScreen_Content_Layout||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Product_Records||scClass=VLayout||index=0||length=6||classIndex=0||classLength=1||scClassIndex=0||scClassLength=6]/component/member[Class=QScreen_Content_Product_Records||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Filtered||scClass=VLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=3]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Filtered_Content_Selector_w_Bi||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/rowRangeDisplay/'
        // ).invoke('text').then((text) => {
        //     cy.log(text.substring(0, text.length - 6))
        //     cy.wrap(Number(text.substring(0, text.length - 6))).as('brec')
        // })


        // Alias Rule
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.Materials.AliasRule.open()
        
        // Delete Second
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.Materials.AliasRule.deleteRow()

        // // Delete Second
        // GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.Materials.AliasRule.deleteRow()
        
        // Save
        cy.clickIfExists(
            GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ManufacturingRecords.Materials.AliasRule.savetheValue()
        )
        
        // Log out
        GQ.logout()
        })
    })
}
