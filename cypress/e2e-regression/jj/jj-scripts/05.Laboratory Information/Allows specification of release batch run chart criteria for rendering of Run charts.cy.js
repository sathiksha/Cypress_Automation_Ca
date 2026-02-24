import { GQTest } from '../../jj-pages/GQTest'
describe('05. Laboratory Information', () => {
    Cypress.config('defaultCommandTimeout', 200000);
    it('Allows specification of release batch run chart criteria for rendering of Run charts - ProductFamily', () => {
        const GQ = new GQTest();
        // Login
        GQ.login();

        GQ.Planets.Product.openLandingPage()

        // Product Families
        GQ.Planets.Product.ProductFamilies.openLandingPage()

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        // Product Record
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')

        //Laboratory Information
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.openLandingPage()

        //Release Data
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.ReleaseData.open()

        cy.wait(10000);

        //Chart
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.ReleaseData.openChart()

        cy.wait(20000);
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.ReleaseData.Readcolumn()
        
        //Chart Multi choice picker
        //Product Type
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.ReleaseData.productype()
       
        //Material Code
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.ReleaseData.Materialcode()
        
        //Analysis
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.ReleaseData.Analysis()
       
        //Measurement
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.ReleaseData.Measurement()
    
        //Limit Type ID
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.ReleaseData.limitTypeId()
        
        //Batch
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.ReleaseData.batch()
        
        //Manufacturing Site
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.ReleaseData.Manufacturingsite()
        
        //Manufacturing Date
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.ReleaseData.Manufacturingdate()
            //Cancel
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.ReleaseData.cancel()
        
        //Verification Status text
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.ReleaseData.verificationtext()
        
        //Recent Batches to Plot
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.ReleaseData.Recentbatches();
        //10 Plots
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.ReleaseData.Plots();
        // cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Content||scClass=VLayout||index=0||length=8||classIndex=0||classLength=1||scClassIndex=0||scClassLength=8]/component/member[Class=QScreen_Product_Family__Product_Con||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/member[Class=QScreen_Content_Layout||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Laboratory_Information||scClass=VLayout||index=5||length=8||classIndex=0||classLength=1||scClassIndex=5||scClassLength=8]/body/layoutBody/member[Class=QScreen_Release_Data||scClass=VLayout||index=2||length=4||classIndex=0||classLength=1||scClassIndex=2||scClassLength=4]/component/member[Class=QScreen_Content_ELIMs_Released_Data||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Charts||scClass=VLayout||index=3||length=4||classIndex=0||classLength=1||scClassIndex=3||scClassLength=4]/component/searchFormEditor/item[name=recentBatchesToPlot||title=Recent%20Batches%20to%20Plot||value=all||index=8||Class=SelectItem]/[icon="picker"]').click({force:true})
    
        //Apply
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.ReleaseData.clickApply();

        cy.wait(20000);

        //Reset
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.LaboratoryRecords.ReleaseData.clickReset();

        GQ.logout();
    })
})