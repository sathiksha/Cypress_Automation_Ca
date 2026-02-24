import { AdminDataBinder } from "./DataManagement/AdminDataBinder"
import { DataFolder } from "./DataManagement/DataFolder"
import { DataSpecification } from "./DataManagement/DataSpecification"
import { DataTypes } from "./DataManagement/DataTypes"
import { DocumentReviewProjects } from "./DataManagement/DocumentReviewProjects"
import { Lifecycles } from "./DataManagement/Lifecycles"
import { OrderReleasePlans } from "./DataManagement/OrderReleasePlans"
import { UserDataBinder } from "./DataManagement/UserDataBinder"

export class DataManagement{
    open(){
        cy.getSC(
            '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_EL_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/gridBar/menuPlanetsButton/'
        ).click()
        cy.getSC(
            '//Menu[level=0]/body/row[itemName=Data%20Management||0]/col[fieldName=itemName||0]'
        ).click()
    }
    constructor(){
        this.AdminDataBinder = new AdminDataBinder()
        this.UserDataBinder = new UserDataBinder()
        this.DataSpecification = new DataSpecification()
        this.OrderReleasePlans = new OrderReleasePlans()
        this.DocumentReviewProjects = new DocumentReviewProjects()
        this.DataFolder = new DataFolder()
        this.DataTypes = new DataTypes()
        this.Lifecycles = new Lifecycles()
    }
}