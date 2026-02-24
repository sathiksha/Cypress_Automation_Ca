import { Mod1 } from "./CTD Triangle/Mod1"
import { Mod2 } from "./CTD Triangle/Mod2"
import { Mod3 } from "./CTD Triangle/Mod3"
import { Mod4 } from "./CTD Triangle/Mod4"
import { Mod5 } from "./CTD Triangle/Mod5"

export class CTDTriangle {
    open(){
        cy.getSC(
            '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Content||scClass=VLayout||index=0||length=8||classIndex=0||classLength=1||scClassIndex=0||scClassLength=8]/component/member[Class=QScreen_Product_Family__Product_Con||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/member[Class=QScreen_Content_Layout||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Regulatory_Records||scClass=VLayout||index=1||length=6||classIndex=0||classLength=1||scClassIndex=1||scClassLength=6]/component/member[Class=QScreen_Content_Regulatory_Records||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Filtered_1||scClass=VLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=3]/body/layoutBar/controlTab/member[Class=ToolStripMenuButton||index=0||length=1||classIndex=0||classLength=1||roleIndex=0||roleLength=1||title=CTD%20Triangle||scRole=button]/'
        ).click()
        cy.getSC(
            '//Menu[level=0]/body/row[title=CTD%20Triangle||0]/col[fieldName=title||0]'
        ).click()
    }
    constructor() {
        this.navigationPath = 'Login -> Product Planet -> Product Families -> Any Product Family -> Content -> Regulatory Records -> Filtered -> CTD Triangle'
        this.Mod1 = new Mod1()
        this.Mod2 = new Mod2()
        this.Mod3 = new Mod3()
        this.Mod4 = new Mod4()
        this.Mod5 = new Mod5()
    }
}