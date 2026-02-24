import { GQTest } from "../../jj-pages/GQTest";
const GQ = new GQTest();
describe('10403_PSF_Document-ChangeControl_Clinical_Studies-Nonconformances_Clinical_Studies', () => {

    it('16409-Manufacturing > P&L Orders > PSF_Document and Nonconformances related to Clinical Studies for QA CSC users', () => {
        // Login
        GQ.login("PQM360 General User")

        GQ.Planets.Documents.openLandingPage()

        GQ.Planets.Documents.Documents.openLandingPage()

        //Documents Planet ID
        GQ.Planets.Manufacturing.PandLOrders.clinicalID()

        GQ.Planets.Manufacturing.PandLOrders.open()

        GQ.Planets.Manufacturing.PandLOrders.clinicalIDEnter()

        GQ.Planets.Manufacturing.PandLOrders.openRecord()

        GQ.Planets.Manufacturing.PandLOrders.GMPReview()

        GQ.Planets.Manufacturing.PandLOrders.PSF()

        GQ.Planets.Manufacturing.PandLOrders.PSFValidation()

        GQ.Planets.Manufacturing.PandLOrders.PSFTabValidation()

        GQ.Planets.Manufacturing.PandLOrders.PSFTabColorValidation()


        // Nonconformances related to Clinical Studies

        GQ.Planets.Manufacturing.PandLOrders.NoncomformancesOpen()

        GQ.Planets.Manufacturing.PandLOrders.NoncomformancesValidation()

        GQ.Planets.Manufacturing.PandLOrders.NoncomformancesTabValidation()

        GQ.Planets.Manufacturing.PandLOrders.checkHeaderIcons()

        GQ.Planets.Manufacturing.PandLOrders.checkColumns()

        GQ.Planets.Manufacturing.PandLOrders.checkMultiChoicePickerColumns()

        GQ.Planets.Manufacturing.PandLOrders.refreshIcon()

        GQ.Planets.Manufacturing.PandLOrders.openARecord()

        GQ.Planets.Manufacturing.PandLOrders.openDetails()

        GQ.Planets.Manufacturing.PandLOrders.checkFormsandFieldsAvailablity()

        GQ.Planets.Manufacturing.PandLOrders.openRelatedObjects()

        GQ.Planets.Manufacturing.PandLOrders.checkRelatedObjects()

        GQ.Planets.Manufacturing.PandLOrders.minimizeARecord()

        GQ.Planets.Manufacturing.PandLOrders.NonconformancesTabSelectedColorValidation()

        GQ.Planets.Manufacturing.PandLOrders.ChangeControlsTabColorValidation()

    })


    it('16409-Manufacturing > P&L Orders > Change Control related to Clinical Studies for QA CSC users', () => {
        // Login
        GQ.login('PQM360 General User')

        // Open Manufacturing
        GQ.Planets.Manufacturing.openLandingPage()

        GQ.Planets.Manufacturing.PandLOrders.open()

        GQ.Planets.Manufacturing.PandLOrders.StudyID()

        GQ.Planets.Manufacturing.PandLOrders.OpenChangeControl()

        GQ.Planets.Manufacturing.PandLOrders.openStatusRecordStudyID()


        GQ.Planets.Manufacturing.PandLOrders.retriveRecordNumber()


        GQ.Planets.Manufacturing.PandLOrders.PandLOrdersOpen()


        GQ.Planets.Manufacturing.PandLOrders.SearchStudyID()


        GQ.Planets.Manufacturing.PandLOrders.StudyIDValidation()



    })

})