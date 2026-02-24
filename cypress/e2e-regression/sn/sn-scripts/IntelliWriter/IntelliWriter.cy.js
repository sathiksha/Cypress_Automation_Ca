import { GQTest } from "../../sn-pages/GQTest";

describe('Specific Test Cases', () => {
    Cypress.config('defaultCommandTimeout', 120000);
    it('Test IntelliWriter Functionality', () => {
        const GQ = new GQTest()
        const delay = (delayInms) => {
            return new Promise(resolve => setTimeout(resolve, delayInms));
          };
        // Login
        GQ.login()

        // Element Library
        GQ.NavBar.ElementLibrary.open()

        // Record Management
        GQ.NavBar.ElementLibrary.RecordManagement.open()

        // Open Record
        cy.getSC(
            '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_EL_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_EL_Record_Templates_Activity||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Templates||scClass=VLayout||index=0||length=2||classIndex=0||classLength=1||scClassIndex=0||scClassLength=2]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_EL_Record_Template_Selector_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreena8f5c327-622c-48ff-afec-1aba38a0ac82||scClass=VLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=3]/component/gridBar/filterButton/'
        ).click()

        // Type Test - IntelliWriter
        cy.getSC(
            '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_EL_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_EL_Record_Templates_Activity||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Templates||scClass=VLayout||index=0||length=2||classIndex=0||classLength=1||scClassIndex=0||scClassLength=2]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_EL_Record_Template_Selector_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreena8f5c327-622c-48ff-afec-1aba38a0ac82||scClass=VLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=3]/component/filterEditor/editRowForm/item[name=itemName||title=Templates||index=0||Class=TextItem]/element'
        ).clear().type('TEST - Intelliwriter{enter}')

        // Open the record
        cy.getSC(
            '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_EL_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_EL_Record_Templates_Activity||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Templates||scClass=VLayout||index=0||length=2||classIndex=0||classLength=1||scClassIndex=0||scClassLength=2]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_EL_Record_Template_Selector_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreena8f5c327-622c-48ff-afec-1aba38a0ac82||scClass=VLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=3]/component/body/row[oid=d4483abb-6f37-439d-bcaf-b704e4f95369||itemName=TEST%20-%20Intelliwriter||4]/col[fieldName=itemName||0]'
        ).dblclick()

        // cy.wait(30000)

        // // Select First Paragraph
        // cy.window().then(win => {
        //     let connector = win.isc_QOnlyOfficeEditorCanvas_0.getConnector()
        //     connector.callCommand(function () {
        //         var oDocument = Api.GetDocument();
        //         var paras = oDocument.GetAllParagraphs();
        //         paras[0].Select()
        //     }, true)
        // })

        // cy.log('Selected First Paragraph')

        // cy.wait(5000)
        // // Make as Boilerplate
        // cy.window().then(win => {
        //     win.isc_QOnlyOfficeEditorCanvas_0.markSelectionAsOptiqsCC('boilerplate')
        // })
        // cy.log('Triggered Boilerplate stuff')

        // cy.wait(5000)

        // // Click Okay
        // cy.getSC(
        //     '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_EL_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_EL_Record_Templates_Activity||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Templates||scClass=VLayout||index=0||length=2||classIndex=0||classLength=1||scClassIndex=0||scClassLength=2]/component/member[Class=QScreen_Optiqs_Record_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Design||scClass=VLayout||index=2||length=17||classIndex=0||classLength=1||scClassIndex=2||scClassLength=17]/body/layoutBody/member[Class=QScreen_Files_1||scClass=VLayout||index=0||length=6||classIndex=0||classLength=1||scClassIndex=0||scClassLength=6]/component/item[name=pdf||index=0||Class=QCanvasItem]/canvas/body/member[Class=QOnlyOfficeEditorCanvas||scClass=Canvas||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/optiqsContentControlPromptDialog/item[1][Class="Button"]/'
        // ).click()
        // cy.log('Clicked Okay')

        // cy.wait(5000)

        // // Remove boilerplate
        // cy.window().then(win => {
        //     let connector = win.isc_QOnlyOfficeEditorCanvas_0.getConnector()
        //     // Remove boilerplate
        //     connector.executeMethod("GetAllContentControls", null,
        //         function (data) {
        //             win.isc_QOnlyOfficeEditorCanvas_0.removeStructuredContentControl(data[0], true)
        //         }
        //     );
        // })

        // cy.wait(5000)

        GQ.logout()
    })
})
