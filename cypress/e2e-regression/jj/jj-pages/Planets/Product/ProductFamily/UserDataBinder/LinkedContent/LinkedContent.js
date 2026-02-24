
import {ChangeControls} from './QualityManagement/ChangeControls'
export class LinkedContent {
    open() {
        cy.getSC(
            '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=2||length=7||classIndex=2||classLength=7||roleIndex=2||roleLength=7||title=Linked%20Content||scRole=button]/'
        ).click()
    }
    linkSibling() {
        cy.getSC(
            '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Linked_Content||scClass=VLayout||index=2||length=7||classIndex=0||classLength=1||scClassIndex=2||scClassLength=7]/body/layoutBody/member[Class=QScreen_Product_Records_1||scClass=VLayout||index=0||length=6||classIndex=0||classLength=1||scClassIndex=0||scClassLength=6]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Product_Records_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/gridBar/linkSiblingItemsButton/icon'
        ).click()
    }
    toggleLinkFilter() {
        cy.getSC(
            '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/child[Class=QMainPagePanel||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_QSelectorList||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/gridBar/filterButton/icon'
        ).click()
    }
    linkRecordByIndex(index) {
        // Click 
        cy.getSC(
            '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/child[Class=QMainPagePanel||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_QSelectorList||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/body/row[' + index + ']/col[fieldName=itemRef||1]'
        ).click()
        // Select
        cy.getSC(
            '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/child[Class=QMainPagePanel||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_QSelectorList||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/gridBar/selectButton/'
        ).click()
    }
    deleteRecordByIndex(index) {
        cy.getSC(
            '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Linked_Content||scClass=VLayout||index=2||length=7||classIndex=0||classLength=1||scClassIndex=2||scClassLength=7]/body/layoutBody/member[Class=QScreen_Documents||scClass=VLayout||index=0||length=6||classIndex=0||classLength=1||scClassIndex=0||scClassLength=6]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Data_Binder_Linked_Content_P||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/body/row[' + index + ']/col[fieldName=itemRef||0]'
        ).click()
        cy.getSC(
            '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Linked_Content||scClass=VLayout||index=2||length=7||classIndex=0||classLength=1||scClassIndex=2||scClassLength=7]/body/layoutBody/member[Class=QScreen_Documents||scClass=VLayout||index=0||length=6||classIndex=0||classLength=1||scClassIndex=0||scClassLength=6]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Data_Binder_Linked_Content_P||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/gridBar/unlinkButton/icon'
        ).click()
    }
    searchAndSelectFirstRow(index) {
        // Click 
        cy.getSC(
            '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/child[Class=QMainPagePanel||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_QSelectorList||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/body/row[' + index + ']/col[fieldName=itemRef||1]'
        ).click()
        // Select
        cy.getSC(
            '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/child[Class=QMainPagePanel||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_QSelectorList||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/gridBar/selectButton/'
        ).click()
    }
    constructor() {
        this.ManufacturingRecords = new ManufacturingRecords()
        this.RegulatoryAffairs = new RegulatoryAffairs()
        this.QualityManagement = new QualityManagement()
    }
}
class RegulatoryAffairs {
    open() {
        cy.getSC(
            '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Linked_Content||scClass=VLayout||index=2||length=7||classIndex=0||classLength=1||scClassIndex=2||scClassLength=7]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=1||length=9||classIndex=1||classLength=9||roleIndex=1||roleLength=9||title=Regulatory%20Affairs||scRole=button]/'
        ).click()
    }
     constructor() {
        this.CTDSubmissionRecords = new CTDSubmissionRecords()
    }
}

class CTDSubmissionRecords{
    clickLinkSibling(){
        cy.getSC(
            '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Linked_Content||scClass=VLayout||index=2||length=7||classIndex=0||classLength=1||scClassIndex=2||scClassLength=7]/body/layoutBody/member[Class=QScreen_Regulatory_Affairs_1||scClass=VLayout||index=1||length=9||classIndex=0||classLength=1||scClassIndex=1||scClassLength=9]/body/layoutBody/member[Class=QScreen_CTDSubmission_Records_1||scClass=VLayout||index=0||length=5||classIndex=0||classLength=1||scClassIndex=0||scClassLength=5]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Data_Binder_Linked_Content_R||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/gridBar/linkSiblingItemsButton/icon'
        ).click()
    }
    rowCountID(){
       return '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/child[Class=QMainPagePanel||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_QSelectorList||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/rowRangeDisplay/'
    }
    clickClose(){
        cy.getSC(
'//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/child[Class=QMainPagePanel||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/child[Class=QImgBase||scClass=Img||index=0||length=2||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1||name=main]/'
        ).click()
    }

}
class ManufacturingRecords {
    open() {
        cy.getSC(
            '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Linked_Content||scClass=VLayout||index=2||length=7||classIndex=0||classLength=1||scClassIndex=2||scClassLength=7]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=5||length=6||classIndex=5||classLength=6||roleIndex=5||roleLength=6||title=Manufacturing%20Records%20||scRole=button]/'
        ).click()
    }
    linkSibling() {
        cy.getSC(
            '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Linked_Content||scClass=VLayout||index=2||length=7||classIndex=0||classLength=1||scClassIndex=2||scClassLength=7]/body/layoutBody/member[Class=QScreen_Manufacturing_Records_||scClass=VLayout||index=5||length=6||classIndex=0||classLength=1||scClassIndex=5||scClassLength=6]/body/layoutBody/member[Class=QScreen_Materials_1||scClass=VLayout||index=0||length=2||classIndex=0||classLength=1||scClassIndex=0||scClassLength=2]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Materials_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/gridBar/linkObjectButton/icon'
        ).click()
    }
    searchAndSelectFirstRow(index) {
        // Click 
        cy.getSC(
            '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/child[Class=QMainPagePanel||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_QSelectorList_Process_Owned||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/body/row[' + index + ']/col[fieldName=Product_Code||1]'
        ).click()
        // Select
        cy.getSC(
            '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/child[Class=QMainPagePanel||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_QSelectorList_Process_Owned||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/gridBar/selectButton/'
        ).click()
    }
    constructor() {
        this.MaterialAndBatchFlow = new MaterialAndBatchFlow()
    }

}
class MaterialAndBatchFlow {
    open() {
        cy.getSC(
            '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Linked_Content||scClass=VLayout||index=2||length=7||classIndex=0||classLength=1||scClassIndex=2||scClassLength=7]/body/layoutBody/member[Class=QScreen_Manufacturing_Records_||scClass=VLayout||index=5||length=6||classIndex=0||classLength=1||scClassIndex=5||scClassLength=6]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=1||length=2||classIndex=1||classLength=2||roleIndex=1||roleLength=2||title=Material%20%26%20Batch%20Flows||scRole=button]/'
            // '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Smart_Content||scClass=VLayout||index=0||length=7||classIndex=0||classLength=1||scClassIndex=0||scClassLength=7]/component/member[Class=QScreen_Data_Binder_Smart_Content_La||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Manufacturing_Records_1||scClass=VLayout||index=6||length=7||classIndex=0||classLength=1||scClassIndex=6||scClassLength=7]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=1||length=2||classIndex=1||classLength=2||roleIndex=1||roleLength=2||title=Material%20%26%20Batch%20Flows||scRole=button]/'
        ).click()
    }
    linkSibling() {
        cy.getSC(
            '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Smart_Content||scClass=VLayout||index=0||length=7||classIndex=0||classLength=1||scClassIndex=0||scClassLength=7]/component/member[Class=QScreen_Data_Binder_Smart_Content_La||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Manufacturing_Records_1||scClass=VLayout||index=6||length=7||classIndex=0||classLength=1||scClassIndex=6||scClassLength=7]/body/layoutBody/member[Class=QScreen_2||scClass=VLayout||index=1||length=2||classIndex=0||classLength=1||scClassIndex=1||scClassLength=2]/component/member[Class=QScreen_Data_Binder_Fineshed_Good_Ba||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Filtered_48||scClass=VLayout||index=0||length=4||classIndex=0||classLength=1||scClassIndex=0||scClassLength=4]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Filtered_48||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/gridBar/linkObjectButton/icon'
        ).click()
    }
    // searchAndSelectFirstRow(index){
    //     // Click 
    //     cy.getSC(
    //         '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/child[Class=QMainPagePanel||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_QSelectorList_Process_Owned||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/body/row['+index+']/col[fieldName=Product_Code||1]'
    //     ).click()
    //      // Select
    //      cy.getSC(
    //         '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/child[Class=QMainPagePanel||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_QSelectorList_Process_Owned||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/gridBar/selectButton/'
    //     ).click()
    // }
}
class QualityManagement{
open(){
    cy.getSC(
        '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Linked_Content||scClass=VLayout||index=2||length=7||classIndex=0||classLength=1||scClassIndex=2||scClassLength=7]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=4||length=9||classIndex=4||classLength=9||roleIndex=4||roleLength=9||title=Quality%20Management||scRole=button]/'
    ).click()
}
constructor(){
this.ChangeControls = new ChangeControls()
}
}