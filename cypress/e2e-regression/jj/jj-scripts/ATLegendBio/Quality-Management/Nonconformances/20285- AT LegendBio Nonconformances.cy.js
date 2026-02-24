import { GQTest } from "../../../../jj-pages/GQTest";
import { LegendBio } from "../../../../jj-pages/AT LegendBio/LegendBio"
const GQ = new GQTest();
const ATLegendBio = new LegendBio()

describe('Default view sub tabs of Nonconformances', () => {

    it('Allows ciltacabtagene autoleucel Product Family / Products > Quality Management > Nonconformances > Nonconformances (sub-tab) for LegendBio users only', () => {

        // Login
        GQ.login('AT LegendBio');

        //Open Products
        GQ.Planets.Product.openLandingPage()

        // Product Record
        GQ.Planets.Product.ProductFamilies.openProductFamilyByIndex(0)

        ATLegendBio.QualityManagement.openLandingPage()

        ATLegendBio.QualityManagement.NonConformancesMain.open()

        ATLegendBio.QualityManagement.NonConformancesMain.Nonconformances.open()

        ATLegendBio.QualityManagement.NonConformancesMain.Nonconformances.refresh()

        ATLegendBio.QualityManagement.NonConformancesMain.Nonconformances.viewRelatedToMe()

        // Related to Me And In Approval
        ATLegendBio.QualityManagement.NonConformancesMain.Nonconformances.viewRelatedToMeAndInApproval()

        // Related to Me And Open
        ATLegendBio.QualityManagement.NonConformancesMain.Nonconformances.viewRelatedToMeAndOpen()

        // View All
        ATLegendBio.QualityManagement.NonConformancesMain.Nonconformances.viewAll()

        // Refresh
        ATLegendBio.QualityManagement.NonConformancesMain.Nonconformances.refresh()

        //Chart Icon
        ATLegendBio.QualityManagement.NonConformancesMain.Nonconformances.clickChartIcon()

        // Verify available tabs
        const tabNames = [
            'Analytics',
            'Status',
            'Status/Owner'
        ]
        //chack tab Names
        ATLegendBio.QualityManagement.NonConformancesMain.Nonconformances.checkTabs(tabNames)

        //Close Chart Icon
        ATLegendBio.QualityManagement.NonConformancesMain.Nonconformances.clickChartIcon()

        //Add Show Legend Bio Column to visible state
        cy.addColumn(ATLegendBio.QualityManagement.NonConformancesMain.Nonconformances.headerID(), ['Show Legend Bio'])

        //Toggle Filter
        ATLegendBio.QualityManagement.NonConformancesMain.Nonconformances.toggleFilter()

        //Validate the data should follow for AT Legend Bio
        ATLegendBio.QualityManagement.NonConformancesMain.Nonconformances.checkLegendBioCondition()

        //Open A Record
        ATLegendBio.QualityManagement.NonConformancesMain.Nonconformances.openARecord()

        // Check Content Read Only
        ATLegendBio.QualityManagement.NonConformancesMain.Nonconformances.checkContentReadOnly()

        //Close the Record
        ATLegendBio.QualityManagement.NonConformancesMain.Nonconformances.closeARecord()

        //Download data as csv file
        cy.downloadExcelFile()

        //Verify the excel download
        ATLegendBio.QualityManagement.NonConformancesMain.Nonconformances.verifyFileDownload()

        // Logout
        GQ.logout()
    })

    it('Allows ciltacabtagene autoleucel Product Family / Products > Quality Management > Nonconformances > NC Corrections (sub-tab) for LegendBio users only', () => {

        // Login
        GQ.login('AT LegendBio');

        //Open Products
        GQ.Planets.Product.openLandingPage()

        // Product Record
        GQ.Planets.Product.ProductFamilies.openProductFamilyByIndex(0)

        ATLegendBio.QualityManagement.openLandingPage()

        ATLegendBio.QualityManagement.NonConformancesMain.open()

        ATLegendBio.QualityManagement.NonConformancesMain.NCCorrections.open()

        ATLegendBio.QualityManagement.NonConformancesMain.NCCorrections.refresh()

        // Related to Me
        ATLegendBio.QualityManagement.NonConformancesMain.NCCorrections.viewRelatedToMe()

        // Related to Me And In Approval
        ATLegendBio.QualityManagement.NonConformancesMain.NCCorrections.viewRelatedToMeAndInApproval()

        // Related to Me And Open
        ATLegendBio.QualityManagement.NonConformancesMain.NCCorrections.viewRelatedToMeAndOpen()

        // View All
        ATLegendBio.QualityManagement.NonConformancesMain.NCCorrections.viewAll()

        // Refresh
        ATLegendBio.QualityManagement.NonConformancesMain.NCCorrections.refresh()

        //Chart Icon
        ATLegendBio.QualityManagement.NonConformancesMain.NCCorrections.clickChartIcon()

        // Verify available tabs
        const tabNames = [
            'Analytics',
            'Approved',
            'Approved/Assignee'
        ]
        //chack tab Names
        ATLegendBio.QualityManagement.NonConformancesMain.NCCorrections.checkTabs(tabNames)

        //Close Chart Icon
        ATLegendBio.QualityManagement.NonConformancesMain.NCCorrections.clickChartIcon()

        //Add Show Legend Bio Column to visible state
        cy.addColumn(ATLegendBio.QualityManagement.NonConformancesMain.NCCorrections.headerID(), ['Show Legend Bio'])

        ATLegendBio.QualityManagement.NonConformancesMain.NCCorrections.toggleFilter()

        //Validate the data should follow for AT Legend Bio
        ATLegendBio.QualityManagement.NonConformancesMain.NCCorrections.checkLegendBioCondition()

        //Open A Record
        ATLegendBio.QualityManagement.NonConformancesMain.NCCorrections.openARecord()

        // Check Content Read Only
        ATLegendBio.QualityManagement.NonConformancesMain.NCCorrections.checkContentReadOnly()

        //Close the Record
        ATLegendBio.QualityManagement.NonConformancesMain.NCCorrections.closeARecord()

        //Download data as csv file
        cy.downloadExcelFile()

        //Verify the excel download
        ATLegendBio.QualityManagement.NonConformancesMain.NCCorrections.verifyFileDownload()

        // Logout
        GQ.logout()
    })

    it('Allows ciltacabtagene autoleucel Product Family / Products > Quality Management > Nonconformances > Actions (sub-tab) for LegendBio users only', () => {

        // Login
        GQ.login('AT LegendBio');

        //Open Products
        GQ.Planets.Product.openLandingPage()

        // Product Record
        GQ.Planets.Product.ProductFamilies.openProductFamilyByIndex(0)

        ATLegendBio.QualityManagement.openLandingPage()

        ATLegendBio.QualityManagement.NonConformancesMain.open()

        ATLegendBio.QualityManagement.NonConformancesMain.Actions.open()

        // Related to Me
        ATLegendBio.QualityManagement.NonConformancesMain.Actions.viewRelatedToMe()

        // Related to Me And In Approval
        ATLegendBio.QualityManagement.NonConformancesMain.Actions.viewRelatedToMeAndInApproval()

        // Related to Me And Open
        ATLegendBio.QualityManagement.NonConformancesMain.Actions.viewRelatedToMeAndOpen()

        // View All
        ATLegendBio.QualityManagement.NonConformancesMain.Actions.viewAll()

        // Refresh
        ATLegendBio.QualityManagement.NonConformancesMain.Actions.refresh()

        //Chart Icon
        ATLegendBio.QualityManagement.NonConformancesMain.Actions.clickChartIcon()

        // Verify available tabs
        const tabNames = [
            'Analytics',
            'Status',
            'Status/Owner'
        ]
        //chack tab Names
        ATLegendBio.QualityManagement.NonConformancesMain.Actions.checkTabs(tabNames)

        //Close Chart Icon
        ATLegendBio.QualityManagement.NonConformancesMain.Actions.clickChartIcon()

        //Toggle Filter
        ATLegendBio.QualityManagement.NonConformancesMain.Actions.toggleFilter()

        //Add Show Legend Bio Column to visible state
        cy.addColumn(ATLegendBio.QualityManagement.NonConformancesMain.Actions.headerID(), ['Show Legend Bio'])

        //Validate the data should follow for AT Legend Bio
        ATLegendBio.QualityManagement.NonConformancesMain.Actions.checkLegendBioCondition()

        //Open A Record
        ATLegendBio.QualityManagement.NonConformancesMain.Actions.openARecord()

        // Check Content Read Only
        ATLegendBio.QualityManagement.NonConformancesMain.Actions.checkContentReadOnly()

        //Close the Record
        ATLegendBio.QualityManagement.NonConformancesMain.Actions.closeARecord()

        //Download data as csv file
        cy.downloadExcelFile()

        //Verify the excel download
        ATLegendBio.QualityManagement.NonConformancesMain.Actions.verifyFileDownload()


        // Logout
        GQ.logout()
    })

    it('Allows ciltacabtagene autoleucel Product Family / Products > Quality Management > Nonconformances > NC Investigations (sub-tab) for LegendBio users only', () => {

        // Login
        GQ.login('AT LegendBio');

        //Open Products
        GQ.Planets.Product.openLandingPage()

        // Product Record
        GQ.Planets.Product.ProductFamilies.openProductFamilyByIndex(0)

        ATLegendBio.QualityManagement.openLandingPage()

        ATLegendBio.QualityManagement.NonConformancesMain.open()

        ATLegendBio.QualityManagement.NonConformancesMain.NCInvestigations.open()

        // Related to Me
        ATLegendBio.QualityManagement.NonConformancesMain.NCInvestigations.viewRelatedToMe()

        // View All
        ATLegendBio.QualityManagement.NonConformancesMain.NCInvestigations.viewAll()

        // Refresh
        ATLegendBio.QualityManagement.NonConformancesMain.NCInvestigations.refresh()

        //Chart Icon
        ATLegendBio.QualityManagement.NonConformancesMain.NCInvestigations.clickChartIcon()

        // Verify available tabs
        const tabNames = [
            'Analytics',
            'Status',
            'Status/Owner'
        ]
        //chack tab Names
        ATLegendBio.QualityManagement.NonConformancesMain.NCInvestigations.checkTabs(tabNames)

        //Close Chart Icon
        ATLegendBio.QualityManagement.NonConformancesMain.NCInvestigations.clickChartIcon()

        //Toggle Filter
        ATLegendBio.QualityManagement.NonConformancesMain.NCInvestigations.toggleFilter()

        //Add Show Legend Bio Column to visible state
        cy.addColumn(ATLegendBio.QualityManagement.NonConformancesMain.NCInvestigations.headerID(), ['Show Legend Bio'])

        //Validate the data should follow for AT Legend Bio
        ATLegendBio.QualityManagement.NonConformancesMain.NCInvestigations.checkLegendBioCondition()

        //Open A Record
        ATLegendBio.QualityManagement.NonConformancesMain.NCInvestigations.openARecord()

        // Check Content Read Only
        ATLegendBio.QualityManagement.NonConformancesMain.NCInvestigations.checkContentReadOnly()

        //Close the Record
        ATLegendBio.QualityManagement.NonConformancesMain.NCInvestigations.closeARecord()

        //Download data as csv file
        cy.downloadExcelFile()

        //Verify the excel download
        ATLegendBio.QualityManagement.NonConformancesMain.NCInvestigations.verifyFileDownload()


        // Logout
        GQ.logout()
    })

    it('Allows ciltacabtagene autoleucel Product Family / Products > Quality Management > Nonconformances > Risk Assessments (sub-tab) for LegendBio users only', () => {

        // Login
        GQ.login('AT LegendBio');

        //Open Products
        GQ.Planets.Product.openLandingPage()

        // Product Record
        GQ.Planets.Product.ProductFamilies.openProductFamilyByIndex(0)

        ATLegendBio.QualityManagement.openLandingPage()

        ATLegendBio.QualityManagement.NonConformancesMain.open()

        ATLegendBio.QualityManagement.NonConformancesMain.RiskAssessments.open()

        ATLegendBio.QualityManagement.NonConformancesMain.RiskAssessments.refresh()

        //Related to Me
        ATLegendBio.QualityManagement.NonConformancesMain.RiskAssessments.viewRelatedToMe()

        // View All
        ATLegendBio.QualityManagement.NonConformancesMain.RiskAssessments.viewAll()

        // Refresh
        ATLegendBio.QualityManagement.NonConformancesMain.RiskAssessments.refresh()

        //Chart Icon
        ATLegendBio.QualityManagement.NonConformancesMain.RiskAssessments.clickChartIcon()

        // Verify available tabs
        const tabNames = [
            'Analytics'
        ]
        //chack tab Names
        ATLegendBio.QualityManagement.NonConformancesMain.RiskAssessments.checkTabs(tabNames)

        //Close Chart Icon
        ATLegendBio.QualityManagement.NonConformancesMain.RiskAssessments.clickChartIcon()

        //Add Show Legend Bio Column to visible state
        cy.addColumn(ATLegendBio.QualityManagement.NonConformancesMain.RiskAssessments.headerID(), ['Show Legend Bio'])

        //Toggle Filter
        ATLegendBio.QualityManagement.NonConformancesMain.RiskAssessments.toggleFilter()

        //Validate the data should follow for AT Legend Bio
        ATLegendBio.QualityManagement.NonConformancesMain.RiskAssessments.checkLegendBioCondition()

        //Open A Record
        ATLegendBio.QualityManagement.NonConformancesMain.RiskAssessments.openARecord()

        // Check Content Read Only
        ATLegendBio.QualityManagement.NonConformancesMain.RiskAssessments.checkContentReadOnly()

        //Close the Record
        ATLegendBio.QualityManagement.NonConformancesMain.RiskAssessments.closeARecord()

        //Download data as csv file
        cy.downloadExcelFile()

        //Verify the excel download
        ATLegendBio.QualityManagement.NonConformancesMain.RiskAssessments.verifyFileDownload()

        // Logout
        GQ.logout()
    })

    it('Allows ciltacabtagene autoleucel Product Family / Products > Quality Management > Nonconformances > Laboratory Investigations (sub-tab) for LegendBio users only', () => {

        // Login
        GQ.login('AT LegendBio');

        //Open Products
        GQ.Planets.Product.openLandingPage()

        // Product Record
        GQ.Planets.Product.ProductFamilies.openProductFamilyByIndex(0)

        ATLegendBio.QualityManagement.openLandingPage()

        ATLegendBio.QualityManagement.NonConformancesMain.open()

        ATLegendBio.QualityManagement.NonConformancesMain.LaboratoryInvestigations.open()

        ATLegendBio.QualityManagement.NonConformancesMain.LaboratoryInvestigations.refresh()

        // Related to Me
        ATLegendBio.QualityManagement.NonConformancesMain.LaboratoryInvestigations.viewRelatedToMe()

        // Related to Me And In Approval
        ATLegendBio.QualityManagement.NonConformancesMain.LaboratoryInvestigations.viewRelatedToMeAndInApproval()

        // Related to Me And Open
        ATLegendBio.QualityManagement.NonConformancesMain.LaboratoryInvestigations.viewRelatedToMeAndOpen()

        // View All
        ATLegendBio.QualityManagement.NonConformancesMain.LaboratoryInvestigations.viewAll()

        // Refresh
        ATLegendBio.QualityManagement.NonConformancesMain.LaboratoryInvestigations.refresh()

        //Chart Icon
        ATLegendBio.QualityManagement.NonConformancesMain.LaboratoryInvestigations.clickChartIcon()

        // Verify available tabs
        const tabNames = [
            'Analytics',
            'Status',
            'Status/Owner'
        ]
        //chack tab Names
        ATLegendBio.QualityManagement.NonConformancesMain.LaboratoryInvestigations.checkTabs(tabNames)

        //Close Chart Icon
        ATLegendBio.QualityManagement.NonConformancesMain.LaboratoryInvestigations.clickChartIcon()

        //Add Show Legend Bio Column to visible state
        cy.addColumn(ATLegendBio.QualityManagement.NonConformancesMain.LaboratoryInvestigations.headerID(), ['Show Legend Bio'])

        ATLegendBio.QualityManagement.NonConformancesMain.LaboratoryInvestigations.toggleFilter()

        //Validate the data should follow for AT Legend Bio
        ATLegendBio.QualityManagement.NonConformancesMain.LaboratoryInvestigations.checkLegendBioCondition()

        //Open A Record
        ATLegendBio.QualityManagement.NonConformancesMain.LaboratoryInvestigations.openARecord()

        // Check Content Read Only
        ATLegendBio.QualityManagement.NonConformancesMain.LaboratoryInvestigations.checkContentReadOnly()

        //Close the Record
        ATLegendBio.QualityManagement.NonConformancesMain.LaboratoryInvestigations.closeARecord()

        //Download data as csv file
        cy.downloadExcelFile()

        //Verify the excel download
        ATLegendBio.QualityManagement.NonConformancesMain.LaboratoryInvestigations.verifyFileDownload()

        // Logout
        GQ.logout()
    })

    it('Allows ciltacabtagene autoleucel Product Family / Products > Quality Management > Nonconformances > Containments (sub-tab) for LegendBio users only', () => {

        // Login
        GQ.login('AT LegendBio');

        //Open Products
        GQ.Planets.Product.openLandingPage()

        // Product Record
        GQ.Planets.Product.ProductFamilies.openProductFamilyByIndex(0)

        ATLegendBio.QualityManagement.openLandingPage()

        ATLegendBio.QualityManagement.NonConformancesMain.open()

        ATLegendBio.QualityManagement.NonConformancesMain.Containments.open()

        ATLegendBio.QualityManagement.NonConformancesMain.Containments.refresh()

        //Related to Me
        ATLegendBio.QualityManagement.NonConformancesMain.Containments.viewRelatedToMe()

        // View All
        ATLegendBio.QualityManagement.NonConformancesMain.Containments.viewAll()

        // Refresh
        ATLegendBio.QualityManagement.NonConformancesMain.Containments.refresh()

        //Chart Icon
        ATLegendBio.QualityManagement.NonConformancesMain.Containments.clickChartIcon()

        // Verify available tabs
        const tabNames = [
            'Analytics'
        ]
        //chack tab Names
        ATLegendBio.QualityManagement.NonConformancesMain.Containments.checkTabs(tabNames)

        //Close Chart Icon
        ATLegendBio.QualityManagement.NonConformancesMain.Containments.clickChartIcon()

        //Add Show Legend Bio Column to visible state
        cy.addColumn(ATLegendBio.QualityManagement.NonConformancesMain.Containments.headerID(), ['Show Legend Bio'])

        //Toggle Filter
        ATLegendBio.QualityManagement.NonConformancesMain.Containments.toggleFilter()

        //Validate the data should follow for AT Legend Bio
        ATLegendBio.QualityManagement.NonConformancesMain.Containments.checkLegendBioCondition()

        //Open A Record
        ATLegendBio.QualityManagement.NonConformancesMain.Containments.openARecord()

        // Check Content Read Only
        ATLegendBio.QualityManagement.NonConformancesMain.Containments.checkContentReadOnly()

        //Close the Record
        ATLegendBio.QualityManagement.NonConformancesMain.Containments.closeARecord()

        //Download data as csv file
        cy.downloadExcelFile()

        //Verify the excel download
        ATLegendBio.QualityManagement.NonConformancesMain.Containments.verifyFileDownload()

        // Logout
        GQ.logout()
    })

    it('Allows ciltacabtagene autoleucel Product Family / Products > Quality Management > Nonconformances > Supplemental Investigations (sub-tab) for LegendBio users only', () => {

        // Login
        GQ.login('AT LegendBio');

        //Open Products
        GQ.Planets.Product.openLandingPage()

        // Product Record
        GQ.Planets.Product.ProductFamilies.openProductFamilyByIndex(0)

        ATLegendBio.QualityManagement.openLandingPage()

        ATLegendBio.QualityManagement.NonConformancesMain.open()

        ATLegendBio.QualityManagement.NonConformancesMain.SupplementalInvestigations.open()

        ATLegendBio.QualityManagement.NonConformancesMain.SupplementalInvestigations.refresh()

        // Related to Me
        ATLegendBio.QualityManagement.NonConformancesMain.SupplementalInvestigations.viewRelatedToMe()

        // Related to Me And Open
        ATLegendBio.QualityManagement.NonConformancesMain.SupplementalInvestigations.viewRelatedToMeAndOpen()

        // View All
        ATLegendBio.QualityManagement.NonConformancesMain.SupplementalInvestigations.viewAll()

        // Refresh
        ATLegendBio.QualityManagement.NonConformancesMain.SupplementalInvestigations.refresh()

        //Chart Icon
        ATLegendBio.QualityManagement.NonConformancesMain.SupplementalInvestigations.clickChartIcon()

        // Verify available tabs
        const tabNames = [
            'Analytics',
            'Status',
            'Status/Assignee'
        ]
        //chack tab Names
        ATLegendBio.QualityManagement.NonConformancesMain.SupplementalInvestigations.checkTabs(tabNames)

        //Close Chart Icon
        ATLegendBio.QualityManagement.NonConformancesMain.SupplementalInvestigations.clickChartIcon()

        //Add Show Legend Bio Column to visible state
        cy.addColumn(ATLegendBio.QualityManagement.NonConformancesMain.SupplementalInvestigations.headerID(), ['Show Legend Bio'])

        ATLegendBio.QualityManagement.NonConformancesMain.SupplementalInvestigations.toggleFilter()

        //Validate the data should follow for AT Legend Bio
        ATLegendBio.QualityManagement.NonConformancesMain.SupplementalInvestigations.checkLegendBioCondition()

        //Open A Record
        ATLegendBio.QualityManagement.NonConformancesMain.SupplementalInvestigations.openARecord()

        // Check Content Read Only
        ATLegendBio.QualityManagement.NonConformancesMain.SupplementalInvestigations.checkContentReadOnly()

        //Close the Record
        ATLegendBio.QualityManagement.NonConformancesMain.SupplementalInvestigations.closeARecord()

        //Download data as csv file
        cy.downloadExcelFile()

        //Verify the excel download
        ATLegendBio.QualityManagement.NonConformancesMain.SupplementalInvestigations.verifyFileDownload()

        // Logout
        GQ.logout()
    })
})