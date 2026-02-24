import { GQTest } from "../../../../jj-pages/GQTest";
import { LegendBio } from "../../../../jj-pages/AT LegendBio/LegendBio"
const InputData = require('../../../../../../../InputData.json');
const GQ = new GQTest();
const ATLegendBio = new LegendBio()

describe('Related Objects of Change Controls (COMET)', () => {

    beforeEach(() => {
        GQ.login('AT LegendBio');
        GQ.Planets.Product.openLandingPage();
        GQ.Planets.Product.ProductFamilies.openProductFamilyByIndex(0);
        ATLegendBio.QualityManagement.openLandingPage();
        ATLegendBio.QualityManagement.CAPAsMain.open()
    });

    afterEach(() => {
        cy.then(() => {
            GQ.logout();
        });
    });

    it('Allows ciltacabtagene autoleucel Product Family / Products > Quality Management > CAPAs > Interim Controls (sub-tab) for LegendBio users only', () => {
        ATLegendBio.QualityManagement.CAPAsMain.InterimControls.open();

        let expectedColumnsQXD = [
            'Number',
            '👁',
            'Description',
            'Source CAPA',
            'Assignee',
            'Due Date',
            'Status',
            'Containment Summary',
            'Completion Date',
            'Created Date',
            'Created By',
            'Responsible Person'
        ]

        cy.getColumnsAndTypes(
            ATLegendBio.QualityManagement.CAPAsMain.InterimControls.headerID()
        ).then(tableInfo => {
            let availableCols = []
            tableInfo.columns.map((obj) => {
                availableCols.push(obj.textContent)
            })
            cy.log(availableCols)
            for (let i = 0; i < expectedColumnsQXD.length; i++) {
                expect(availableCols).to.include(expectedColumnsQXD[i])
            }

        })

        const namesList = [
            'Status',
        ]

        ATLegendBio.QualityManagement.CAPAsMain.InterimControls.checkMultiChoicePickerColumns(namesList)

        ATLegendBio.QualityManagement.CAPAsMain.InterimControls.refresh()
        ATLegendBio.QualityManagement.CAPAsMain.InterimControls.viewRelatedToMe()
        ATLegendBio.QualityManagement.CAPAsMain.InterimControls.ViewRelatedToMeValidation('Related to Me');
        ATLegendBio.QualityManagement.CAPAsMain.InterimControls.viewRelatedToMeAndOpen()
        ATLegendBio.QualityManagement.CAPAsMain.InterimControls.ViewRelatedToMeAndOpenValidation('Related to Me and Open');

        ATLegendBio.QualityManagement.CAPAsMain.InterimControls.viewAll()
        ATLegendBio.QualityManagement.CAPAsMain.InterimControls.ViewAllValidation('All');
        ATLegendBio.QualityManagement.CAPAsMain.InterimControls.clickChartIcon()

        const tabNames = [
            'Analytics',
            'Status',
            'Status/Assignee'
        ]
        ATLegendBio.QualityManagement.CAPAsMain.InterimControls.checkTabs(tabNames)
        ATLegendBio.QualityManagement.CAPAsMain.InterimControls.clickChartIcon()

        cy.downloadExcelFile()
        ATLegendBio.QualityManagement.CAPAsMain.InterimControls.verifyFileDownload()

        cy.addColumn(ATLegendBio.QualityManagement.CAPAsMain.InterimControls.headerID(), ['Show Legend Bio'])

        ATLegendBio.QualityManagement.CAPAsMain.InterimControls.checkLegendBioCondition()
        ATLegendBio.QualityManagement.CAPAsMain.InterimControls.openRecord()
        ATLegendBio.QualityManagement.CAPAsMain.InterimControls.checkContentReadOnly()
    });


    it('Allows ciltacabtagene autoleucel Product Family / Products > Quality Management > CAPAs > CAPA Investigations (sub-tab) for LegendBio users only', () => {
        ATLegendBio.QualityManagement.CAPAsMain.CAPAsInvestigations.Open();

        let expectedColumnsQXD = [
            'Number',
            '👁',
            'What',
            'Source CAPA',
            'Created Date',
            'Owner',
            'Status',
            'Stage',
            'Investigation Type',
            'Completed By',
            'Completed On'
        ]

        cy.getColumnsAndTypes(
            ATLegendBio.QualityManagement.CAPAsMain.CAPAsInvestigations.headerID()
        ).then(tableInfo => {
            let availableCols = []
            tableInfo.columns.map((obj) => {
                availableCols.push(obj.textContent)
            })
            cy.log(availableCols)
            for (let i = 0; i < expectedColumnsQXD.length; i++) {
                expect(availableCols).to.include(expectedColumnsQXD[i])
            }

        })

        const namesList = [
            'Status',
            'Stage'
        ]
        ATLegendBio.QualityManagement.CAPAsMain.CAPAsInvestigations.checkMultiChoicePickerColumns(namesList)
        ATLegendBio.QualityManagement.CAPAsMain.CAPAsInvestigations.refresh()

        ATLegendBio.QualityManagement.CAPAsMain.CAPAsInvestigations.viewRelatedToMe()
        ATLegendBio.QualityManagement.CAPAsMain.CAPAsInvestigations.ViewRelatedToMeValidation('Related to Me')

        ATLegendBio.QualityManagement.CAPAsMain.CAPAsInvestigations.viewRelatedToMeAndOpen()
        ATLegendBio.QualityManagement.CAPAsMain.CAPAsInvestigations.ViewRelatedToMeAndOpenValidation('Related to Me and Open');

        ATLegendBio.QualityManagement.CAPAsMain.CAPAsInvestigations.viewRelatedToMeAndInApproval()
        ATLegendBio.QualityManagement.CAPAsMain.CAPAsInvestigations.ViewRelatedToMeApproveValidation('Related to Me and In Approval');

        ATLegendBio.QualityManagement.CAPAsMain.CAPAsInvestigations.viewAll()
        ATLegendBio.QualityManagement.CAPAsMain.CAPAsInvestigations.ViewAllValidation('All');

        ATLegendBio.QualityManagement.CAPAsMain.CAPAsInvestigations.clickChartIcon()

        const tabNames = [
            'Analytics',
            'Status',
            'Status/Owner'
        ]
        ATLegendBio.QualityManagement.CAPAsMain.CAPAsInvestigations.checkTabs(tabNames)
        ATLegendBio.QualityManagement.CAPAsMain.CAPAsInvestigations.clickChartIcon()

        cy.downloadExcelFile()
        ATLegendBio.QualityManagement.CAPAsMain.CAPAsInvestigations.verifyFileDownload()

        cy.addColumn(ATLegendBio.QualityManagement.CAPAsMain.CAPAsInvestigations.headerID(), ['Show Legend Bio'])
        ATLegendBio.QualityManagement.CAPAsMain.CAPAsInvestigations.checkLegendBioCondition()

        ATLegendBio.QualityManagement.CAPAsMain.CAPAsInvestigations.openARecord()
        ATLegendBio.QualityManagement.CAPAsMain.CAPAsInvestigations.checkContentReadOnly()

    });

    it('Allows ciltacabtagene autoleucel Product Family / Products > Quality Management > CAPAs > Supplemental Investigations (sub-tab) for LegendBio users only', () => {
        ATLegendBio.QualityManagement.CAPAsMain.SupplementalInvestigations.open();

        let expectedColumnsQXD = [
            'Number',
            '👁',
            'Description',
            'Related CAPA',
            'Parent Investigation',
            'Due Date',
            'Assignee',
            'Status'
        ]

        cy.getColumnsAndTypes(
            ATLegendBio.QualityManagement.CAPAsMain.SupplementalInvestigations.headerID()
        ).then(tableInfo => {
            let availableCols = []
            tableInfo.columns.map((obj) => {
                availableCols.push(obj.textContent)
            })
            cy.log(availableCols)
            for (let i = 0; i < expectedColumnsQXD.length; i++) {
                expect(availableCols).to.include(expectedColumnsQXD[i])
            }

        })

        const namesList = [
            'Status',

        ]

        ATLegendBio.QualityManagement.CAPAsMain.SupplementalInvestigations.checkMultiChoicePickerColumns(namesList)

        ATLegendBio.QualityManagement.CAPAsMain.SupplementalInvestigations.viewRelatedToMe()
        ATLegendBio.QualityManagement.CAPAsMain.SupplementalInvestigations.ViewRelatedToMeValidation('Related to Me');
        ATLegendBio.QualityManagement.CAPAsMain.SupplementalInvestigations.viewRelatedToMeAndOpen()
        ATLegendBio.QualityManagement.CAPAsMain.SupplementalInvestigations.ViewRelatedToMeAndOpenValidation('Related to Me and Open');

        ATLegendBio.QualityManagement.CAPAsMain.SupplementalInvestigations.viewAll()
        ATLegendBio.QualityManagement.CAPAsMain.SupplementalInvestigations.ViewAllValidation('All');

        ATLegendBio.QualityManagement.CAPAsMain.SupplementalInvestigations.refresh()
        ATLegendBio.QualityManagement.CAPAsMain.SupplementalInvestigations.clickChartIcon()

        const tabNames = [
            'Analytics',
            'Status',
            'Status/Assignee'
        ]
        ATLegendBio.QualityManagement.CAPAsMain.SupplementalInvestigations.checkTabs(tabNames)
        ATLegendBio.QualityManagement.CAPAsMain.SupplementalInvestigations.clickChartIcon()

        cy.downloadExcelFile()
        ATLegendBio.QualityManagement.CAPAsMain.SupplementalInvestigations.verifyFileDownload()
        cy.addColumn(ATLegendBio.QualityManagement.CAPAsMain.SupplementalInvestigations.headerID(), ['Show Legend Bio'])

        ATLegendBio.QualityManagement.CAPAsMain.SupplementalInvestigations.checkLegendBioCondition()

        ATLegendBio.QualityManagement.CAPAsMain.SupplementalInvestigations.openRecord()

        ATLegendBio.QualityManagement.CAPAsMain.SupplementalInvestigations.checkContentReadOnly()

    });

    it('Allows ciltacabtagene autoleucel Product Family / Products > Quality Management > CAPAs > CAPA Implementation (sub-tab) for LegendBio users only', () => {
        ATLegendBio.QualityManagement.CAPAsMain.CAPAImplementation.open();

        let expectedColumnsQXD = [
            'Number',
            '👁',
            'Name',
            'Description',
            'Related CAPA',
            'Action Category',
            'Action Plan Type',
            'PV Relevant',
            'Assignee',
            'Approved',
            'Days Required',
            'Created Date',
            'Is Complete',
            'Completion Date',
            'Completed By'
        ]

        cy.getColumnsAndTypes(
            ATLegendBio.QualityManagement.CAPAsMain.CAPAImplementation.headerID()
        ).then(tableInfo => {
            let availableCols = []
            tableInfo.columns.map((obj) => {
                availableCols.push(obj.textContent)
            })
            cy.log(availableCols)
            for (let i = 0; i < expectedColumnsQXD.length; i++) {
                expect(availableCols).to.include(expectedColumnsQXD[i])
            }

        })


        const namesList = [
            'Action Category',
            'Action Plan Type',
            'PV Relevant',
            'Approved',
            'Is Complete',

        ]

        ATLegendBio.QualityManagement.CAPAsMain.CAPAImplementation.checkMultiChoicePickerColumns(namesList)

        ATLegendBio.QualityManagement.CAPAsMain.CAPAImplementation.viewRelatedToMe()
        ATLegendBio.QualityManagement.CAPAsMain.CAPAImplementation.ViewRelatedToMeValidation('Related to Me');

        ATLegendBio.QualityManagement.CAPAsMain.CAPAImplementation.viewRelatedToMeAndOpen()
        ATLegendBio.QualityManagement.CAPAsMain.CAPAImplementation.ViewRelatedToMeAndOpenValidation('Related to Me and Open');

        ATLegendBio.QualityManagement.CAPAsMain.CAPAImplementation.viewRelatedToMeAndInApproval()
        ATLegendBio.QualityManagement.CAPAsMain.CAPAImplementation.RelatedToMeAndApprovalValidation('Related to Me and In Approval');

        ATLegendBio.QualityManagement.CAPAsMain.CAPAImplementation.viewAll()
        ATLegendBio.QualityManagement.CAPAsMain.CAPAImplementation.ViewAllValidation('All');
        ATLegendBio.QualityManagement.CAPAsMain.CAPAImplementation.refresh()
        ATLegendBio.QualityManagement.CAPAsMain.CAPAImplementation.clickChartIcon()

        const tabNames = [
            'Analytics',
            'Approved',
            'Approved/Assignee'
        ]
        ATLegendBio.QualityManagement.CAPAsMain.SupplementalInvestigations.checkTabs(tabNames)
        ATLegendBio.QualityManagement.CAPAsMain.CAPAImplementation.clickChartIcon()

        cy.downloadExcelFile()
        ATLegendBio.QualityManagement.CAPAsMain.CAPAImplementation.verifyFileDownload()

        cy.addColumn(ATLegendBio.QualityManagement.CAPAsMain.CAPAImplementation.headerID(), ['Show Legend Bio'])
        ATLegendBio.QualityManagement.CAPAsMain.CAPAImplementation.checkLegendBioCondition()
        ATLegendBio.QualityManagement.CAPAsMain.CAPAImplementation.openRecord()

        ATLegendBio.QualityManagement.CAPAsMain.CAPAImplementation.checkContentReadOnly()
    });


    it('Allows ciltacabtagene autoleucel Product Family / Products > Quality Management > CAPAs > Effectiveness Review (sub-tab) for LegendBio users only', () => {
        ATLegendBio.QualityManagement.CAPAsMain.EffectivenessReview.open();

        let expectedColumnsQXD = [
            'Number',
            '👁',
            'Name',
            'Source CAPA',
            'Source NC',
            'Approval Status',
            'Status',
            'Reviewed On',
            'Reviewed By',
            'Resolution',
            'Owner',
            'Extensions Requested',
            'Extensions Granted',
            'Related Effectiveness Plan',
            'Effectiveness Plan Status',
            'Effectiveness Plan Outcome'

        ]

        cy.getColumnsAndTypes(
            ATLegendBio.QualityManagement.CAPAsMain.EffectivenessReview.headerID()
        ).then(tableInfo => {
            let availableCols = []
            tableInfo.columns.map((obj) => {
                availableCols.push(obj.textContent)
            })
            cy.log(availableCols)
            for (let i = 0; i < expectedColumnsQXD.length; i++) {
                expect(availableCols).to.include(expectedColumnsQXD[i])
            }

        })

        const namesList = [
            'Approval Status',
            'Status',
            'Resolution',
            'Extensions Requested',
            'Extensions Granted',
            'Related Effectiveness Plan'

        ]

        ATLegendBio.QualityManagement.CAPAsMain.EffectivenessReview.checkMultiChoicePickerColumns(namesList)
        ATLegendBio.QualityManagement.CAPAsMain.EffectivenessReview.viewRelatedToMe()
        ATLegendBio.QualityManagement.CAPAsMain.EffectivenessReview.ViewRelatedToMeValidation('Related to Me');

        ATLegendBio.QualityManagement.CAPAsMain.EffectivenessReview.viewRelatedToMeAndOpen()
        ATLegendBio.QualityManagement.CAPAsMain.EffectivenessReview.ViewRelatedToMeAndOpenValidation('Related to Me and Open');

        ATLegendBio.QualityManagement.CAPAsMain.EffectivenessReview.viewRelatedToMeAndInApproval()
        ATLegendBio.QualityManagement.CAPAsMain.EffectivenessReview.RelatedToMeAndApprovalValidation('Related to Me and In Approval');
        ATLegendBio.QualityManagement.CAPAsMain.EffectivenessReview.viewAll()
        ATLegendBio.QualityManagement.CAPAsMain.EffectivenessReview.ViewAllValidation('All');

        ATLegendBio.QualityManagement.CAPAsMain.EffectivenessReview.refresh()
        ATLegendBio.QualityManagement.CAPAsMain.EffectivenessReview.clickChartIcon()

        const tabNames = [
            'Analytics',
            'Status',
            'Status/Owner'
        ]
        ATLegendBio.QualityManagement.CAPAsMain.EffectivenessReview.checkTabs(tabNames)
        ATLegendBio.QualityManagement.CAPAsMain.EffectivenessReview.clickChartIcon()

        cy.downloadExcelFile()
        ATLegendBio.QualityManagement.CAPAsMain.EffectivenessReview.verifyFileDownload()

        cy.addColumn(ATLegendBio.QualityManagement.CAPAsMain.EffectivenessReview.headerID(), ['Show Legend Bio'])
        ATLegendBio.QualityManagement.CAPAsMain.EffectivenessReview.checkLegendBioCondition()
        ATLegendBio.QualityManagement.CAPAsMain.EffectivenessReview.openRecord()
        ATLegendBio.QualityManagement.CAPAsMain.EffectivenessReview.checkContentReadOnly()

    });

    it('Allows ciltacabtagene autoleucel Product Family / Products > Quality Management > CAPAs > Actions (sub-tab) for LegendBio users only', () => {
        ATLegendBio.QualityManagement.CAPAsMain.Actions.open();

        let expectedColumnsQXD = [
            'Number',
            '👁',
            'Name',
            'Related CAPA',
            'Status',
            'Stage',
            'Created Date',
            'Description',
            'Action Type',
            'Related Action Plan',
            'Related Action Plan Type',
            'Material or Item',
            'Owner',
            'Assignee',
            'Due Date',
            'Completion Date',
            'Completion Comment'
        ]

        cy.getColumnsAndTypes(
            ATLegendBio.QualityManagement.CAPAsMain.Actions.headerID()
        ).then(tableInfo => {
            let availableCols = []
            tableInfo.columns.map((obj) => {
                availableCols.push(obj.textContent)
            })
            cy.log(availableCols)
            for (let i = 0; i < expectedColumnsQXD.length; i++) {
                expect(availableCols).to.include(expectedColumnsQXD[i])
            }

        })

        const namesList = [
            'Status',
            'Stage',
            'Action Type',
            'Related Action Plan Type',
            'Is Complete'

        ]

        ATLegendBio.QualityManagement.CAPAsMain.Actions.checkMultiChoicePickerColumns(namesList)

        ATLegendBio.QualityManagement.CAPAsMain.Actions.viewRelatedToMe()
        ATLegendBio.QualityManagement.CAPAsMain.Actions.ViewRelatedToMeValidation('Related to Me');
        ATLegendBio.QualityManagement.CAPAsMain.Actions.viewRelatedToMeAndOpen()
        ATLegendBio.QualityManagement.CAPAsMain.Actions.ViewRelatedToMeAndOpenValidation('Related to Me and Open')
        ATLegendBio.QualityManagement.CAPAsMain.Actions.viewRelatedToMeAndInApproval()
        ATLegendBio.QualityManagement.CAPAsMain.Actions.RelatedToMeAndApprovalValidation('Related to Me and In Approval')
        ATLegendBio.QualityManagement.CAPAsMain.Actions.viewAll()
        ATLegendBio.QualityManagement.CAPAsMain.Actions.ViewAllValidation('All');

        ATLegendBio.QualityManagement.CAPAsMain.Actions.refresh()
        ATLegendBio.QualityManagement.CAPAsMain.Actions.clickChartIcon()
        const tabNames = [
            'Analytics',
            'Status',
            'Status/Owner'
        ]
        ATLegendBio.QualityManagement.CAPAsMain.SupplementalInvestigations.checkTabs(tabNames)
        ATLegendBio.QualityManagement.CAPAsMain.Actions.clickChartIcon()

        cy.downloadExcelFile()
        ATLegendBio.QualityManagement.CAPAsMain.Actions.verifyFileDownload()
        cy.addColumn(ATLegendBio.QualityManagement.CAPAsMain.Actions.headerID(), ['Show Legend Bio'])

        ATLegendBio.QualityManagement.CAPAsMain.Actions.checkLegendBioCondition()
        ATLegendBio.QualityManagement.CAPAsMain.Actions.openRecord()
        ATLegendBio.QualityManagement.CAPAsMain.Actions.checkContentReadOnly()
    });
});