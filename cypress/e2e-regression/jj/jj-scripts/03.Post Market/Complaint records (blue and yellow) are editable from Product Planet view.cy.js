import { GQTest } from "../../jj-pages/GQTest";
const GQ = new GQTest();
describe('Bug Tracking Tests', () => {
    it('9457-Complaint records (blue and yellow) are editable from Product Planet view.cy.js', () => {
        // Login 
        GQ.login('PQM360 General User')

        // Open Regulatory Affairs
        GQ.Planets.Product.openLandingPage()

        GQ.Planets.Product.ProductFamilies.toggleFilter()

        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('SP-Test2')

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ComplaintRecords.openLandingPage()

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.ComplaintRecords.Filtered.openRecordByIndex(1)


        cy.expectToBeReadOnly(
            '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Content||scClass=VLayout||index=0||length=8||classIndex=0||classLength=1||scClassIndex=0||scClassLength=8]/component/member[Class=QScreen_Product_Family__Product_Con||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/member[Class=QScreen_Content_Layout||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Post_Market||scClass=VLayout||index=3||length=8||classIndex=0||classLength=1||scClassIndex=3||scClassLength=8]/body/layoutBody/member[Class=QScreen_Complaint_Records||scClass=VLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/body/layoutBody/member[Class=QScreen_Filtered_8||scClass=VLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=3]/component/member[Class=QScreen_PQMS_Complaint_Record_Main_P||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_PQMS_Complaint_Record_Home||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Details||scClass=VLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=3]/component/item[name=JNJ_AWARE_DT||title=Awareness%20Date%3A||value=Tue Feb 04 2025 12:00:00 GMT+0530 (India Standard Time)||index=0||Class=DateItem]/item[name=dateTextField||title=Awareness%20Date%3A||value=02%24fs%2404%24fs%242025||index=0||Class=TextItem]/textbox'
        )

        // Make sure it is there
        GQ.logout()

    })
})