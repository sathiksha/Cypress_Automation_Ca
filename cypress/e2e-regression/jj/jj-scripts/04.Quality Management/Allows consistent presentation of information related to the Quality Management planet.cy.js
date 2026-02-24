import { GQTest } from '../../jj-pages/GQTest'
require('cypress-xpath')
describe('Quality Management planet Testing', () => {
    const GQ = new GQTest();
    it('Quality Management planet tabs', () => {

        // Login
        GQ.login()

        // Open Laboratory Information
        GQ.Planets.QualityManagement.openLandingPage()

        const QualityManagementTabs = [
            'Change Controls',
            'Escalations',
            'Nonconformances', 
            'CAPAs', 
            'Audits', 
            'Accounts', 
            'Quality Records by User']

        cy.verifyTabsavailable(QualityManagementTabs)  

        cy.contains('Change Controls').click()

        cy.contains('COMET').should('be.visible')

        const ChangeControlsTabs = [
            'Change Controls',
            'Assessment Executions',
            'Implementations'];

        ChangeControlsTabs.forEach(tab => {
            cy.contains(tab).should('exist');
        });


        cy.contains('Escalations').click()

        cy.contains('COMET').should('be.visible')

        const EscalationsTabs = [
            'Escalations',
            'Assessments',
            'Meetings']

        EscalationsTabs.forEach(tab => {
            cy.contains(tab).should('exist');
        });

        cy.contains('Nonconformances').click()

        cy.contains('COMET').should('be.visible')

        const NonconformancesTabs = [
            'Nonconformances',
            'Containments',
            'NC Investigations',
            'Supplemental Investigations',
            'Laboratory Investigations',
            'NC Corrections',
            'Actions',
            'Risk Assessments'
        ]

        NonconformancesTabs.forEach(tab => {
            cy.contains(tab).should('exist');
        });


        cy.contains('CAPAs').click()

        cy.contains('COMET').should('be.visible')

        const CAPAsTabs = [
            'CAPAs',
            'Interim Controls',
            'CAPA Investigations',
            'Supplemental Investigations',
            'CAPA Implementation',
            'Actions',
            'Effectiveness Plan',
            'Effectiveness Review'
        ]

        CAPAsTabs.forEach(tab => {
            cy.contains(tab).should('exist');
        });

        cy.contains('Audits').click()

        cy.contains('COMET').should('be.visible')

        const AuditsTabs = [
            'Audits',
            'Audit Observation'
        ]

        AuditsTabs.forEach(tab => {
            cy.contains(tab).should('exist');
        });

        cy.contains('Accounts').click()

        cy.contains('COMET').should('be.visible')


        //Quality Records by User
        cy.contains('Quality Records by User').click()

        //Users
        cy.contains('Users').click()

        cy.getSC('//:VLayout[ID="MainPage"]//ListGrid[dataSource="dsQUser"]/body/row[0]/col[0]').click()

        cy.contains('Change Controls').click()

        cy.contains('COMET').should('be.visible')

        const byUserChangeControlsTabs = [
            'Change Controls',
            'Assessment Executions',
            'Implementations'];

        byUserChangeControlsTabs.forEach(tab => {
            cy.contains(tab).should('exist');
        });


        cy.contains('Escalations').click()

        cy.getSC('//:VLayout[ID="MainPage"]//ToolStripMenuButton[title="COMET"]').contains('COMET').should('be.visible')

        const byUserEscalationsTabs = [
            'Escalations',
            'Assessments',
            'Meetings']

        byUserEscalationsTabs.forEach(tab => {
            cy.contains(tab).should('exist');
        });

        cy.contains('Nonconformances').click()

        cy.getSC('//:VLayout[ID="MainPage"]//ToolStripMenuButton[title="COMET"]').contains('COMET').should('be.visible')

        const byUserNonconformancesTabs = [
            'Nonconformances',
            'Containments',
            'NC Investigations',
            'Supplemental Investigations',
            'Laboratory Investigations',
            'NC Corrections',
            'Actions',
            'Risk Assessments'
        ]

        byUserNonconformancesTabs.forEach(tab => {
            cy.contains(tab).should('exist');
        });


        cy.contains('CAPAs').click()

        cy.getSC('//:VLayout[ID="MainPage"]//ToolStripMenuButton[title="COMET"]').contains('COMET').should('be.visible')

        const byUserCAPAsTabs = [
            'CAPAs',
            'Interim Controls',
            'CAPA Investigations',
            'Supplemental Investigations',
            'CAPA Implementation',
            'Actions',
            'Effectiveness Plan',
            'Effectiveness Review'
        ]

        byUserCAPAsTabs.forEach(tab => {
            cy.contains(tab).should('exist');
        });

        cy.contains('Audits').click()

        cy.getSC('//:VLayout[ID="MainPage"]//ToolStripMenuButton[title="COMET"]').contains('COMET').should('be.visible')

        const byUserAuditsTabs = [
            'Audits',
            'Audit Observation'
        ]

        byUserAuditsTabs.forEach(tab => {
            cy.contains(tab).should('exist');
        });

        cy.contains('Accounts').click()

        cy.getSC('//:VLayout[ID="MainPage"]//ToolStripMenuButton[title="COMET"]').contains('COMET').should('be.visible')

        //User Groups
        cy.contains('UserGroups').click()

        cy.getSC('//:VLayout[ID="MainPage"]//ListGrid[dataSource="dsQUserGroup"]/body/row[0]/col[0]').click()

        cy.contains('Change Controls').click({force:true})

        cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Quality_Reco||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_UserGroups||scClass=VLayout||index=1||length=2||classIndex=0||classLength=1||scClassIndex=1||scClassLength=2]/component/member[Class=QScreen_Quality_Records_by_User_Group||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_User_Quality_Records_by_User||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=0||length=7||classIndex=0||classLength=7||roleIndex=0||roleLength=7||title=Change%20Controls||scRole=button]/').click()

        cy.getSC('//:VLayout[ID="MainPage"]//ToolStripMenuButton[title="COMET"]')
        cy.contains('COMET').should('exist')

        const byUserGroupsChangeControlsTabs = [
            'Change Controls',
            'Assessment Executions',
            'Implementations'];

        byUserGroupsChangeControlsTabs.forEach(tab => {
            cy.contains(tab).should('exist');
        });


        cy.contains('Escalations').click({force:true})

        cy.getSC('//:VLayout[ID="MainPage"]//ToolStripMenuButton[title="COMET"]').contains('COMET').should('exist')

        const byUserGroupsEscalationsTabs = [
            'Escalations',
            'Assessments',
            'Meetings']

        byUserGroupsEscalationsTabs.forEach(tab => {
            cy.contains(tab).should('exist');
        });

        cy.contains('Nonconformances').click({force:true})

        cy.getSC('//:VLayout[ID="MainPage"]//ToolStripMenuButton[title="COMET"]').contains('COMET').should('exist')

        const byUserGroupsNonconformancesTabs = [
            'Nonconformances',
            'Containments',
            'NC Investigations',
            'Supplemental Investigations',
            'Laboratory Investigations',
            'NC Corrections',
            'Actions',
            'Risk Assessments'
        ]

        byUserGroupsNonconformancesTabs.forEach(tab => {
            cy.contains(tab).should('exist');
        });


        cy.contains('CAPAs').click({force:true})

        cy.getSC('//:VLayout[ID="MainPage"]//ToolStripMenuButton[title="COMET"]').contains('COMET').should('exist')

        const byUserGroupsCAPAsTabs = [
            'CAPAs',
            'Interim Controls',
            'CAPA Investigations',
            'Supplemental Investigations',
            'CAPA Implementation',
            'Actions',
            'Effectiveness Plan',
            'Effectiveness Review'
        ]

        byUserGroupsCAPAsTabs.forEach(tab => {
            cy.contains(tab).should('exist');
        });

        cy.contains('Audits').click({force:true})

        cy.getSC('//:VLayout[ID="MainPage"]//ToolStripMenuButton[title="COMET"]').contains('COMET').should('exist')

        const byUserGroupsAuditsTabs = [
            'Audits',
            'Audit Observation'
        ]

        byUserGroupsAuditsTabs.forEach(tab => {
            cy.contains(tab).should('exist');
        });

        cy.contains('Accounts').click({force:true})

        cy.getSC('//:VLayout[ID="MainPage"]//ToolStripMenuButton[title="COMET"]').contains('COMET').should('exist')


        // Logout
        GQ.logout()

    })
    it('Quality Management planet tabs - Product Family', () => {

        GQ.login();

        GQ.Planets.Product.openLandingPage()

        // Product Families
        GQ.Planets.Product.ProductFamilies.openLandingPage()

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        // Product Record
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')

        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.QualityManagement.open()

        const QualityManagementTabs = [
            'Change Controls',
            'Escalations',
            'Nonconformances', 
            'CAPAs', 
            'Audits', 
            'Accounts', 
            'by User']

        QualityManagementTabs.forEach(tab => {
            cy.contains(tab).should('exist');
        });  

        cy.contains('Change Controls').click()

        cy.contains('COMET').should('be.visible')

        const ChangeControlsTabs = [
            'Change Controls',
            'Assessment Executions',
            'Implementations'];

        ChangeControlsTabs.forEach(tab => {
            cy.contains(tab).should('exist');
        });


        cy.contains('Escalations').click()

        cy.getSC('//:VLayout[ID="MainPage"]//ToolStripMenuButton[title="COMET"]').contains('COMET').should('exist')

        const EscalationsTabs = [
            'Escalations',
            'Assessments',
            'Meetings']

        EscalationsTabs.forEach(tab => {
            cy.contains(tab).should('exist');
        });

        cy.contains('Nonconformances').click()

        cy.getSC('//:VLayout[ID="MainPage"]//ToolStripMenuButton[title="COMET"]').contains('COMET').should('exist')

        const NonconformancesTabs = [
            'Nonconformances',
            'Containments',
            'NC Investigations',
            'Supplemental Investigations',
            'Laboratory Investigations',
            'NC Corrections',
            'Actions',
            'Risk Assessments'
        ]

        NonconformancesTabs.forEach(tab => {
            cy.contains(tab).should('exist');
        });


        cy.contains('CAPAs').click()

        cy.getSC('//:VLayout[ID="MainPage"]//ToolStripMenuButton[title="COMET"]').contains('COMET').should('exist')

        const CAPAsTabs = [
            'CAPAs',
            'Interim Controls',
            'CAPA Investigations',
            'Supplemental Investigations',
            'CAPA Implementation',
            'Actions',
            'Effectiveness Plan',
            'Effectiveness Review'
        ]

        CAPAsTabs.forEach(tab => {
            cy.contains(tab).should('exist');
        });

        cy.contains('Audits').click()

        cy.getSC('//:VLayout[ID="MainPage"]//ToolStripMenuButton[title="COMET"]').contains('COMET').should('exist')

        const AuditsTabs = [
            'Audits',
            'Audit Observation'
        ]

        AuditsTabs.forEach(tab => {
            cy.contains(tab).should('exist');
        });

        cy.contains('Accounts').click()

        cy.getSC('//:VLayout[ID="MainPage"]//ToolStripMenuButton[title="COMET"]').contains('COMET').should('exist')

        //by User
        cy.contains('by User').click()

        //Users
        cy.contains('Users').click()

        //Click Record
        cy.getSC('//:VLayout[ID="MainPage"]//ListGrid[dataSource="dsQUser"]/body/row[0]/col[0]').click()

        //Click Change Control

        cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Content||scClass=VLayout||index=0||length=8||classIndex=0||classLength=1||scClassIndex=0||scClassLength=8]/component/member[Class=QScreen_Product_Family__Product_Con||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/member[Class=QScreen_Content_Layout||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Quality_Management||scClass=VLayout||index=4||length=8||classIndex=0||classLength=1||scClassIndex=4||scClassLength=8]/body/layoutBody/member[Class=QScreen_by_User||scClass=VLayout||index=9||length=10||classIndex=0||classLength=1||scClassIndex=9||scClassLength=10]/body/layoutBody/member[Class=QScreen_Users||scClass=VLayout||index=0||length=2||classIndex=0||classLength=1||scClassIndex=0||scClassLength=2]/component/member[Class=QScreen_Product_Family_Quality_Recor_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=0||length=6||classIndex=0||classLength=6||roleIndex=0||roleLength=6||title=Change%20Controls||scRole=button]/').click()

        //Click SubNoun of Change Control
        cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Content||scClass=VLayout||index=0||length=8||classIndex=0||classLength=1||scClassIndex=0||scClassLength=8]/component/member[Class=QScreen_Product_Family__Product_Con||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/member[Class=QScreen_Content_Layout||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Quality_Management||scClass=VLayout||index=4||length=8||classIndex=0||classLength=1||scClassIndex=4||scClassLength=8]/body/layoutBody/member[Class=QScreen_by_User||scClass=VLayout||index=9||length=10||classIndex=0||classLength=1||scClassIndex=9||scClassLength=10]/body/layoutBody/member[Class=QScreen_Users_1||scClass=VLayout||index=0||length=2||classIndex=0||classLength=1||scClassIndex=0||scClassLength=2]/component/member[Class=QScreen_Product_Family_Quality_Recor_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Change_Controls_6||scClass=VLayout||index=0||length=6||classIndex=0||classLength=1||scClassIndex=0||scClassLength=6]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=0||length=3||classIndex=0||classLength=3||roleIndex=0||roleLength=3||title=Change%20Controls||scRole=button]/').click()

        cy.contains('COMET').should('exist')

        const byUserChangeControlsTabs = [
            'Change Controls',
            'Assessment Executions',
            'Implementations'];

        byUserChangeControlsTabs.forEach(tab => {
            cy.contains(tab).should('exist');
        });


        cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Content||scClass=VLayout||index=0||length=8||classIndex=0||classLength=1||scClassIndex=0||scClassLength=8]/component/member[Class=QScreen_Product_Family__Product_Con||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/member[Class=QScreen_Content_Layout||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Quality_Management||scClass=VLayout||index=4||length=8||classIndex=0||classLength=1||scClassIndex=4||scClassLength=8]/body/layoutBody/member[Class=QScreen_by_User||scClass=VLayout||index=9||length=10||classIndex=0||classLength=1||scClassIndex=9||scClassLength=10]/body/layoutBody/member[Class=QScreen_Users||scClass=VLayout||index=0||length=2||classIndex=0||classLength=1||scClassIndex=0||scClassLength=2]/component/member[Class=QScreen_Product_Family_Quality_Recor_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=1||length=6||classIndex=1||classLength=6||roleIndex=1||roleLength=6||title=Escalations||scRole=button]/').click()

        cy.getSC('//:VLayout[ID="MainPage"]//ToolStripMenuButton[title="COMET"]').contains('COMET').should('exist')

        const byUserEscalationsTabs = [
            'Escalations',
            'Assessments',
            'Meetings']

        byUserEscalationsTabs.forEach(tab => {
            cy.contains(tab).should('exist');
        });

        cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Content||scClass=VLayout||index=0||length=8||classIndex=0||classLength=1||scClassIndex=0||scClassLength=8]/component/member[Class=QScreen_Product_Family__Product_Con||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/member[Class=QScreen_Content_Layout||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Quality_Management||scClass=VLayout||index=4||length=8||classIndex=0||classLength=1||scClassIndex=4||scClassLength=8]/body/layoutBody/member[Class=QScreen_by_User||scClass=VLayout||index=9||length=10||classIndex=0||classLength=1||scClassIndex=9||scClassLength=10]/body/layoutBody/member[Class=QScreen_Users||scClass=VLayout||index=0||length=2||classIndex=0||classLength=1||scClassIndex=0||scClassLength=2]/component/member[Class=QScreen_Product_Family_Quality_Recor_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=2||length=6||classIndex=2||classLength=6||roleIndex=2||roleLength=6||title=Nonconformances||scRole=button]/').click()

        cy.getSC('//:VLayout[ID="MainPage"]//ToolStripMenuButton[title="COMET"]').contains('COMET').should('exist')

        const byUserNonconformancesTabs = [
            'Nonconformances',
            'Containments',
            'NC Investigations',
            'Supplemental Investigations',
            'Laboratory Investigations',
            'NC Corrections',
            'Actions',
            'Risk Assessments'
        ]

        byUserNonconformancesTabs.forEach(tab => {
            cy.contains(tab).should('exist');
        });


        cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Content||scClass=VLayout||index=0||length=8||classIndex=0||classLength=1||scClassIndex=0||scClassLength=8]/component/member[Class=QScreen_Product_Family__Product_Con||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/member[Class=QScreen_Content_Layout||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Quality_Management||scClass=VLayout||index=4||length=8||classIndex=0||classLength=1||scClassIndex=4||scClassLength=8]/body/layoutBody/member[Class=QScreen_by_User||scClass=VLayout||index=9||length=10||classIndex=0||classLength=1||scClassIndex=9||scClassLength=10]/body/layoutBody/member[Class=QScreen_Users||scClass=VLayout||index=0||length=2||classIndex=0||classLength=1||scClassIndex=0||scClassLength=2]/component/member[Class=QScreen_Product_Family_Quality_Recor_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=3||length=6||classIndex=3||classLength=6||roleIndex=3||roleLength=6||title=CAPAs||scRole=button]/').click()

        cy.getSC('//:VLayout[ID="MainPage"]//ToolStripMenuButton[title="COMET"]').contains('COMET').should('exist')

        const byUserCAPAsTabs = [
            'CAPAs',
            'Interim Controls',
            'CAPA Investigations',
            'Supplemental Investigations',
            'CAPA Implementation',
            'Actions',
            'Effectiveness Plan',
            'Effectiveness Review'
        ]

        byUserCAPAsTabs.forEach(tab => {
            cy.contains(tab).should('exist');
        });

        cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Content||scClass=VLayout||index=0||length=8||classIndex=0||classLength=1||scClassIndex=0||scClassLength=8]/component/member[Class=QScreen_Product_Family__Product_Con||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/member[Class=QScreen_Content_Layout||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Quality_Management||scClass=VLayout||index=4||length=8||classIndex=0||classLength=1||scClassIndex=4||scClassLength=8]/body/layoutBody/member[Class=QScreen_by_User||scClass=VLayout||index=9||length=10||classIndex=0||classLength=1||scClassIndex=9||scClassLength=10]/body/layoutBody/member[Class=QScreen_Users||scClass=VLayout||index=0||length=2||classIndex=0||classLength=1||scClassIndex=0||scClassLength=2]/component/member[Class=QScreen_Product_Family_Quality_Recor_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=4||length=6||classIndex=4||classLength=6||roleIndex=4||roleLength=6||title=Audits||scRole=button]/').click()

        cy.getSC('//:VLayout[ID="MainPage"]//ToolStripMenuButton[title="COMET"]').contains('COMET').should('exist')

        const byUserAuditsTabs = [
            'Audits',
            'Audit Observation'
        ]

        byUserAuditsTabs.forEach(tab => {
            cy.contains(tab).should('exist');
        });

        cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Content||scClass=VLayout||index=0||length=8||classIndex=0||classLength=1||scClassIndex=0||scClassLength=8]/component/member[Class=QScreen_Product_Family__Product_Con||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/member[Class=QScreen_Content_Layout||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Quality_Management||scClass=VLayout||index=4||length=8||classIndex=0||classLength=1||scClassIndex=4||scClassLength=8]/body/layoutBody/member[Class=QScreen_by_User||scClass=VLayout||index=9||length=10||classIndex=0||classLength=1||scClassIndex=9||scClassLength=10]/body/layoutBody/member[Class=QScreen_Users||scClass=VLayout||index=0||length=2||classIndex=0||classLength=1||scClassIndex=0||scClassLength=2]/component/member[Class=QScreen_Product_Family_Quality_Recor_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=5||length=6||classIndex=5||classLength=6||roleIndex=5||roleLength=6||title=Accounts||scRole=button]/').click()

        cy.getSC('//:VLayout[ID="MainPage"]//ToolStripMenuButton[title="COMET"]').contains('COMET').should('exist')

        //User Groups
        cy.contains('UserGroups').click()

        cy.getSC('//:VLayout[ID="MainPage"]//ListGrid[dataSource="dsQUserGroup"]/body/row[0]/col[0]').click()


        cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Content||scClass=VLayout||index=0||length=8||classIndex=0||classLength=1||scClassIndex=0||scClassLength=8]/component/member[Class=QScreen_Product_Family__Product_Con||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/member[Class=QScreen_Content_Layout||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Quality_Management||scClass=VLayout||index=4||length=8||classIndex=0||classLength=1||scClassIndex=4||scClassLength=8]/body/layoutBody/member[Class=QScreen_by_User||scClass=VLayout||index=9||length=10||classIndex=0||classLength=1||scClassIndex=9||scClassLength=10]/body/layoutBody/member[Class=QScreen_UserGroups||scClass=VLayout||index=1||length=2||classIndex=0||classLength=1||scClassIndex=1||scClassLength=2]/component/member[Class=QScreen_Product_Family_Quality_Recor_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=0||length=6||classIndex=0||classLength=6||roleIndex=0||roleLength=6||title=Change%20Controls||scRole=button]/').click()

        cy.getSC('//:VLayout[ID="MainPage"]//ToolStripMenuButton[title="COMET"]')
        cy.contains('COMET').should('exist')

        const byUserGroupsChangeControlsTabs = [
            'Change Controls',
            'Assessment Executions',
            'Implementations'];

        byUserGroupsChangeControlsTabs.forEach(tab => {
            cy.contains(tab).should('exist');
        });


        cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Content||scClass=VLayout||index=0||length=8||classIndex=0||classLength=1||scClassIndex=0||scClassLength=8]/component/member[Class=QScreen_Product_Family__Product_Con||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/member[Class=QScreen_Content_Layout||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Quality_Management||scClass=VLayout||index=4||length=8||classIndex=0||classLength=1||scClassIndex=4||scClassLength=8]/body/layoutBody/member[Class=QScreen_by_User||scClass=VLayout||index=9||length=10||classIndex=0||classLength=1||scClassIndex=9||scClassLength=10]/body/layoutBody/member[Class=QScreen_UserGroups||scClass=VLayout||index=1||length=2||classIndex=0||classLength=1||scClassIndex=1||scClassLength=2]/component/member[Class=QScreen_Product_Family_Quality_Recor_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=1||length=6||classIndex=1||classLength=6||roleIndex=1||roleLength=6||title=Escalations||scRole=button]/').click({force:true})

        cy.getSC('//:VLayout[ID="MainPage"]//ToolStripMenuButton[title="COMET"]').contains('COMET').should('exist')

        const byUserGroupsEscalationsTabs = [
            'Escalations',
            'Assessments',
            'Meetings']

        byUserGroupsEscalationsTabs.forEach(tab => {
            cy.contains(tab).should('exist');
        });

        cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Content||scClass=VLayout||index=0||length=8||classIndex=0||classLength=1||scClassIndex=0||scClassLength=8]/component/member[Class=QScreen_Product_Family__Product_Con||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/member[Class=QScreen_Content_Layout||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Quality_Management||scClass=VLayout||index=4||length=8||classIndex=0||classLength=1||scClassIndex=4||scClassLength=8]/body/layoutBody/member[Class=QScreen_by_User||scClass=VLayout||index=9||length=10||classIndex=0||classLength=1||scClassIndex=9||scClassLength=10]/body/layoutBody/member[Class=QScreen_UserGroups||scClass=VLayout||index=1||length=2||classIndex=0||classLength=1||scClassIndex=1||scClassLength=2]/component/member[Class=QScreen_Product_Family_Quality_Recor_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=2||length=6||classIndex=2||classLength=6||roleIndex=2||roleLength=6||title=Nonconformances||scRole=button]/').click({force:true})

        cy.getSC('//:VLayout[ID="MainPage"]//ToolStripMenuButton[title="COMET"]').contains('COMET').should('exist')

        const byUserGroupsNonconformancesTabs = [
            'Nonconformances',
            'Containments',
            'NC Investigations',
            'Supplemental Investigations',
            'Laboratory Investigations',
            'NC Corrections',
            'Actions',
            'Risk Assessments'
        ]

        byUserGroupsNonconformancesTabs.forEach(tab => {
            cy.contains(tab).should('exist');
        });


        cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Content||scClass=VLayout||index=0||length=8||classIndex=0||classLength=1||scClassIndex=0||scClassLength=8]/component/member[Class=QScreen_Product_Family__Product_Con||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/member[Class=QScreen_Content_Layout||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Quality_Management||scClass=VLayout||index=4||length=8||classIndex=0||classLength=1||scClassIndex=4||scClassLength=8]/body/layoutBody/member[Class=QScreen_by_User||scClass=VLayout||index=9||length=10||classIndex=0||classLength=1||scClassIndex=9||scClassLength=10]/body/layoutBody/member[Class=QScreen_UserGroups||scClass=VLayout||index=1||length=2||classIndex=0||classLength=1||scClassIndex=1||scClassLength=2]/component/member[Class=QScreen_Product_Family_Quality_Recor_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=3||length=6||classIndex=3||classLength=6||roleIndex=3||roleLength=6||title=CAPAs||scRole=button]/').click({force:true})

        cy.getSC('//:VLayout[ID="MainPage"]//ToolStripMenuButton[title="COMET"]').contains('COMET').should('exist')

        const byUserGroupsCAPAsTabs = [
            'CAPAs',
            'Interim Controls',
            'CAPA Investigations',
            'Supplemental Investigations',
            'CAPA Implementation',
            'Actions',
            'Effectiveness Plan',
            'Effectiveness Review'
        ]

        byUserGroupsCAPAsTabs.forEach(tab => {
            cy.contains(tab).should('exist');
        });

        cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Content||scClass=VLayout||index=0||length=8||classIndex=0||classLength=1||scClassIndex=0||scClassLength=8]/component/member[Class=QScreen_Product_Family__Product_Con||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/member[Class=QScreen_Content_Layout||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Quality_Management||scClass=VLayout||index=4||length=8||classIndex=0||classLength=1||scClassIndex=4||scClassLength=8]/body/layoutBody/member[Class=QScreen_by_User||scClass=VLayout||index=9||length=10||classIndex=0||classLength=1||scClassIndex=9||scClassLength=10]/body/layoutBody/member[Class=QScreen_UserGroups||scClass=VLayout||index=1||length=2||classIndex=0||classLength=1||scClassIndex=1||scClassLength=2]/component/member[Class=QScreen_Product_Family_Quality_Recor_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=4||length=6||classIndex=4||classLength=6||roleIndex=4||roleLength=6||title=Audits||scRole=button]/').click({force:true})

        cy.getSC('//:VLayout[ID="MainPage"]//ToolStripMenuButton[title="COMET"]').contains('COMET').should('exist')

        const byUserGroupsAuditsTabs = [
            'Audits',
            'Audit Observation'
        ]

        byUserGroupsAuditsTabs.forEach(tab => {
            cy.contains(tab).should('exist');
        });

        cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Content||scClass=VLayout||index=0||length=8||classIndex=0||classLength=1||scClassIndex=0||scClassLength=8]/component/member[Class=QScreen_Product_Family__Product_Con||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/member[Class=QScreen_Content_Layout||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Quality_Management||scClass=VLayout||index=4||length=8||classIndex=0||classLength=1||scClassIndex=4||scClassLength=8]/body/layoutBody/member[Class=QScreen_by_User||scClass=VLayout||index=9||length=10||classIndex=0||classLength=1||scClassIndex=9||scClassLength=10]/body/layoutBody/member[Class=QScreen_UserGroups||scClass=VLayout||index=1||length=2||classIndex=0||classLength=1||scClassIndex=1||scClassLength=2]/component/member[Class=QScreen_Product_Family_Quality_Recor_1||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=5||length=6||classIndex=5||classLength=6||roleIndex=5||roleLength=6||title=Accounts||scRole=button]/').click({force:true})

        cy.getSC('//:VLayout[ID="MainPage"]//ToolStripMenuButton[title="COMET"]').contains('COMET').should('exist')


        // Logout
        GQ.logout()

    })
    it('Quality Management planet tabs - Product Family - Admin Data binder - Smart Content', () => {

        // Login
         // Login 
        GQ.login()

        // Open Product Planet
        GQ.Planets.Product.openLandingPage()

        // Product Families must be visible
        cy.getSC(GQ.Planets.Product.ProductFamilies.locator).should('be.visible')

        // Products must be visible
        cy.getSC(GQ.Planets.Product.Products.locator).should('be.visible')

        // Large Molecules must be visible
        cy.getSC(GQ.Planets.Product.LargeMolecules.locator).should('be.visible')

        // Small Molecules must be visible
        cy.getSC(GQ.Planets.Product.SmallMolecules.locator).should('be.visible')

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        // Open APALUTAMIDE
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')

        // Refresh
        GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector()

        // Select the linked binder
        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test Admin Binder')

        //Quality Management
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.open()


        //Check Quality Management Tabs
        const QualityManagementTabs = [
            'Change Controls',
            'Escalations',
            'Nonconformances', 
            'CAPAs', 
            'Audits', 
            'Accounts']

        QualityManagementTabs.forEach(tab => {
            cy.contains(tab).should('exist');
        }); 

        //Click Change Controls Main noun
        cy.contains('Change Controls').click()

        //Check COMET Source Selector
        cy.getSC('//:VLayout[ID="MainPage"]//ToolStripMenuButton[title="COMET"]').contains('COMET').should('exist')

        //Check Change Controls sub nouns
        const ChangeControlsTabs = [
            'Change Controls',
            'Assessment Executions',
            'Implementations'];

        ChangeControlsTabs.forEach(tab => {
            cy.contains(tab).should('exist');
        });

        //Click Escalations Noun
        cy.contains('Escalations').click()

        //Check COMET Source Selector
        cy.getSC('//:VLayout[ID="MainPage"]//ToolStripMenuButton[title="COMET"]').contains('COMET').should('exist')

        //Check Escalations Sub nouns
        const EscalationsTabs = [
            'Escalations',
            'Assessments',
            'Meetings']

        EscalationsTabs.forEach(tab => {
            cy.contains(tab).should('exist');
        });

        //Click Nonconformances main noun
        cy.contains('Nonconformances').click()

        //Check COMET Source Selector

        cy.getSC('//:VLayout[ID="MainPage"]//ToolStripMenuButton[title="COMET"]').contains('COMET').should('exist')

        //Check Nonconformances Sub nouns
        const NonconformancesTabs = [
            'Nonconformances',
            'Containments',
            'NC Investigations',
            'Supplemental Investigations',
            'Laboratory Investigations',
            'NC Corrections',
            'Actions',
            'Risk Assessments'
        ]

        NonconformancesTabs.forEach(tab => {
            cy.contains(tab).should('exist');
        });

        //Check CAPAs Main noun
        cy.contains('CAPAs').click()

        //Check COMET Source Selector
        cy.getSC('//:VLayout[ID="MainPage"]//ToolStripMenuButton[title="COMET"]').contains('COMET').should('exist')

        //Check CAPAs sub nouns
        const CAPAsTabs = [
            'CAPAs',
            'Interim Controls',
            'CAPA Investigations',
            'Supplemental Investigations',
            'CAPA Implementation',
            'Actions',
            'Effectiveness Plan',
            'Effectiveness Review'
        ]

        CAPAsTabs.forEach(tab => {
            cy.contains(tab).should('exist');
        });

        //Check Audits Main noun
        cy.contains('Audits').click()
        
        //Check COMET Source Selector
        cy.getSC('//:VLayout[ID="MainPage"]//ToolStripMenuButton[title="COMET"]').contains('COMET').should('exist')

        //Check Audits sub nouns
        const AuditsTabs = [
            'Audits',
            'Audit Observation'
        ]

        AuditsTabs.forEach(tab => {
            cy.contains(tab).should('exist');
        });

        //Check Audits Main noun
        cy.contains('Accounts').click()

        //Check COMET Source Selector
        cy.getSC('//:VLayout[ID="MainPage"]//ToolStripMenuButton[title="COMET"]').contains('COMET').should('exist')


      // Logout
        GQ.logout()

    })
    it('Quality Management planet tabs - Product Family - Admin Data binder - Linked Content', () => {

        // Login
         // Login 
        GQ.login()

        // Open Product Planet
        GQ.Planets.Product.openLandingPage()

        // Product Families must be visible
        cy.getSC(GQ.Planets.Product.ProductFamilies.locator).should('be.visible')

        // Products must be visible
        cy.getSC(GQ.Planets.Product.Products.locator).should('be.visible')

        // Large Molecules must be visible
        cy.getSC(GQ.Planets.Product.LargeMolecules.locator).should('be.visible')

        // Small Molecules must be visible
        cy.getSC(GQ.Planets.Product.SmallMolecules.locator).should('be.visible')

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        // Open APALUTAMIDE
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')

        // Refresh
        GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector()

        // Select the linked binder
        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test Admin Binder')

        //Open Linked Content
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.open()

        //Quality Management
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.open()


        //Check Quality Management Tabs
        const QualityManagementTabs = [
            'Change Controls',
            'Escalations',
            'Nonconformances', 
            'CAPAs', 
            'Audits', 
            'Accounts']

        QualityManagementTabs.forEach(tab => {
            cy.contains(tab).should('exist');
        }); 

        //Click Change Controls Main noun
        cy.contains('Change Controls').click()

        //Check COMET Source Selector
        cy.getSC('//:VLayout[ID="MainPage"]//ToolStripMenuButton[title="COMET"]').contains('COMET').should('exist')

        //Check Change Controls sub nouns
        const ChangeControlsTabs = [
            'Change Controls',
            'Assessment Executions',
            'Implementations'];

        ChangeControlsTabs.forEach(tab => {
            cy.contains(tab).should('exist');
        });

        //Click Escalations Noun
        cy.contains('Escalations').click()

        //Check COMET Source Selector
        cy.getSC('//:VLayout[ID="MainPage"]//ToolStripMenuButton[title="COMET"]').contains('COMET').should('exist')

        //Check Escalations Sub nouns
        const EscalationsTabs = [
            'Escalations',
            'Assessments',
            'Meetings']

        EscalationsTabs.forEach(tab => {
            cy.contains(tab).should('exist');
        });

        //Click Nonconformances main noun
        cy.contains('Nonconformances').click()

        //Check COMET Source Selector

        cy.getSC('//:VLayout[ID="MainPage"]//ToolStripMenuButton[title="COMET"]').contains('COMET').should('exist')

        //Check Nonconformances Sub nouns
        const NonconformancesTabs = [
            'Nonconformances',
            'Containments',
            'NC Investigations',
            'Supplemental Investigations',
            'Laboratory Investigations',
            'NC Corrections',
            'Actions',
            'Risk Assessments'
        ]

        NonconformancesTabs.forEach(tab => {
            cy.contains(tab).should('exist');
        });

        //Check CAPAs Main noun
        cy.contains('CAPAs').click()

        //Check COMET Source Selector
        cy.getSC('//:VLayout[ID="MainPage"]//ToolStripMenuButton[title="COMET"]').contains('COMET').should('exist')

        //Check CAPAs sub nouns
        const CAPAsTabs = [
            'CAPAs',
            'Interim Controls',
            'CAPA Investigations',
            'Supplemental Investigations',
            'CAPA Implementation',
            'Actions',
            'Effectiveness Plan',
            'Effectiveness Review'
        ]

        CAPAsTabs.forEach(tab => {
            cy.contains(tab).should('exist');
        });

        //Check Audits Main noun
        cy.contains('Audits').click()
        
        //Check COMET Source Selector
        cy.getSC('//:VLayout[ID="MainPage"]//ToolStripMenuButton[title="COMET"]').contains('COMET').should('exist')

        //Check Audits sub nouns
        const AuditsTabs = [
            'Audits',
            'Audit Observation'
        ]

        AuditsTabs.forEach(tab => {
            cy.contains(tab).should('exist');
        });

        //Check Audits Main noun
        cy.contains('Accounts').click()

        //Check COMET Source Selector
        cy.getSC('//:VLayout[ID="MainPage"]//ToolStripMenuButton[title="COMET"]').contains('COMET').should('exist')


      // Logout
        GQ.logout()

    })
    it('Quality Management planet tabs - Product Family - User Data binder - Smart Content', () => {

        // Login
         // Login 
        GQ.login()

        // Open Product Planet
        GQ.Planets.Product.openLandingPage()

        // Product Families must be visible
        cy.getSC(GQ.Planets.Product.ProductFamilies.locator).should('be.visible')

        // Products must be visible
        cy.getSC(GQ.Planets.Product.Products.locator).should('be.visible')

        // Large Molecules must be visible
        cy.getSC(GQ.Planets.Product.LargeMolecules.locator).should('be.visible')

        // Small Molecules must be visible
        cy.getSC(GQ.Planets.Product.SmallMolecules.locator).should('be.visible')

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        // Open APALUTAMIDE
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')

        // Refresh
        GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector()

        // Select the linked binder
        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test User Binder')

        //Quality Management
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.QualityManagement.open()


        //Check Quality Management Tabs
        const QualityManagementTabs = [
            'Change Controls',
            'Escalations',
            'Nonconformances', 
            'CAPAs', 
            'Audits', 
            'Accounts']

        QualityManagementTabs.forEach(tab => {
            cy.contains(tab).should('exist');
        }); 

        //Click Change Controls Main noun
        cy.contains('Change Controls').click()

        //Check COMET Source Selector
        cy.getSC('//:VLayout[ID="MainPage"]//ToolStripMenuButton[title="COMET"]').contains('COMET').should('exist')

        //Check Change Controls sub nouns
        const ChangeControlsTabs = [
            'Change Controls',
            'Assessment Executions',
            'Implementations'];

        ChangeControlsTabs.forEach(tab => {
            cy.contains(tab).should('exist');
        });

        //Click Escalations Noun
        cy.contains('Escalations').click()

        //Check COMET Source Selector
        cy.getSC('//:VLayout[ID="MainPage"]//ToolStripMenuButton[title="COMET"]').contains('COMET').should('exist')

        //Check Escalations Sub nouns
        const EscalationsTabs = [
            'Escalations',
            'Assessments',
            'Meetings']

        EscalationsTabs.forEach(tab => {
            cy.contains(tab).should('exist');
        });

        //Click Nonconformances main noun
        cy.contains('Nonconformances').click()

        //Check COMET Source Selector

        cy.getSC('//:VLayout[ID="MainPage"]//ToolStripMenuButton[title="COMET"]').contains('COMET').should('exist')

        //Check Nonconformances Sub nouns
        const NonconformancesTabs = [
            'Nonconformances',
            'Containments',
            'NC Investigations',
            'Supplemental Investigations',
            'Laboratory Investigations',
            'NC Corrections',
            'Actions',
            'Risk Assessments'
        ]

        NonconformancesTabs.forEach(tab => {
            cy.contains(tab).should('exist');
        });

        //Check CAPAs Main noun
        cy.contains('CAPAs').click()

        //Check COMET Source Selector
        cy.getSC('//:VLayout[ID="MainPage"]//ToolStripMenuButton[title="COMET"]').contains('COMET').should('exist')

        //Check CAPAs sub nouns
        const CAPAsTabs = [
            'CAPAs',
            'Interim Controls',
            'CAPA Investigations',
            'Supplemental Investigations',
            'CAPA Implementation',
            'Actions',
            'Effectiveness Plan',
            'Effectiveness Review'
        ]

        CAPAsTabs.forEach(tab => {
            cy.contains(tab).should('exist');
        });

        //Check Audits Main noun
        cy.contains('Audits').click()
        
        //Check COMET Source Selector
        cy.getSC('//:VLayout[ID="MainPage"]//ToolStripMenuButton[title="COMET"]').contains('COMET').should('exist')

        //Check Audits sub nouns
        const AuditsTabs = [
            'Audits',
            'Audit Observation'
        ]

        AuditsTabs.forEach(tab => {
            cy.contains(tab).should('exist');
        });

        //Check Audits Main noun
        cy.contains('Accounts').click()

        //Check COMET Source Selector
        cy.getSC('//:VLayout[ID="MainPage"]//ToolStripMenuButton[title="COMET"]').contains('COMET').should('exist')


      // Logout
        GQ.logout()

    })
    it('Quality Management planet tabs - Product Family - User Data binder - Linked Content', () => {

        // Login
         // Login 
        GQ.login()

        // Open Product Planet
        GQ.Planets.Product.openLandingPage()

        // Product Families must be visible
        cy.getSC(GQ.Planets.Product.ProductFamilies.locator).should('be.visible')

        // Products must be visible
        cy.getSC(GQ.Planets.Product.Products.locator).should('be.visible')

        // Large Molecules must be visible
        cy.getSC(GQ.Planets.Product.LargeMolecules.locator).should('be.visible')

        // Small Molecules must be visible
        cy.getSC(GQ.Planets.Product.SmallMolecules.locator).should('be.visible')

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        // Open APALUTAMIDE
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE')

        // Refresh
        GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector()

        // Select the linked binder
        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test User Binder')

        //Open Linked Content
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.open()

        //Quality Management
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.LinkedContent.qualityManagement.open()


        //Check Quality Management Tabs
        const QualityManagementTabs = [
            'Change Controls',
            'Escalations',
            'Nonconformances', 
            'CAPAs', 
            'Audits', 
            'Accounts']

        QualityManagementTabs.forEach(tab => {
            cy.contains(tab).should('exist');
        }); 

        //Click Change Controls Main noun
        cy.contains('Change Controls').click()

        //Check COMET Source Selector
        cy.getSC('//:VLayout[ID="MainPage"]//ToolStripMenuButton[title="COMET"]').contains('COMET').should('exist')

        //Check Change Controls sub nouns
        const ChangeControlsTabs = [
            'Change Controls',
            'Assessment Executions',
            'Implementations'];

        ChangeControlsTabs.forEach(tab => {
            cy.contains(tab).should('exist');
        });

        //Click Escalations Noun
        cy.contains('Escalations').click()

        //Check COMET Source Selector
        cy.getSC('//:VLayout[ID="MainPage"]//ToolStripMenuButton[title="COMET"]').contains('COMET').should('exist')

        //Check Escalations Sub nouns
        const EscalationsTabs = [
            'Escalations',
            'Assessments',
            'Meetings']

        EscalationsTabs.forEach(tab => {
            cy.contains(tab).should('exist');
        });

        //Click Nonconformances main noun
        cy.contains('Nonconformances').click()

        //Check COMET Source Selector

        cy.getSC('//:VLayout[ID="MainPage"]//ToolStripMenuButton[title="COMET"]').contains('COMET').should('exist')

        //Check Nonconformances Sub nouns
        const NonconformancesTabs = [
            'Nonconformances',
            'Containments',
            'NC Investigations',
            'Supplemental Investigations',
            'Laboratory Investigations',
            'NC Corrections',
            'Actions',
            'Risk Assessments'
        ]

        NonconformancesTabs.forEach(tab => {
            cy.contains(tab).should('exist');
        });

        //Check CAPAs Main noun
        cy.contains('CAPAs').click()

        //Check COMET Source Selector
        cy.getSC('//:VLayout[ID="MainPage"]//ToolStripMenuButton[title="COMET"]').contains('COMET').should('exist')

        //Check CAPAs sub nouns
        const CAPAsTabs = [
            'CAPAs',
            'Interim Controls',
            'CAPA Investigations',
            'Supplemental Investigations',
            'CAPA Implementation',
            'Actions',
            'Effectiveness Plan',
            'Effectiveness Review'
        ]

        CAPAsTabs.forEach(tab => {
            cy.contains(tab).should('exist');
        });

        //Check Audits Main noun
        cy.contains('Audits').click()
        
        //Check COMET Source Selector
        cy.getSC('//:VLayout[ID="MainPage"]//ToolStripMenuButton[title="COMET"]').contains('COMET').should('exist')

        //Check Audits sub nouns
        const AuditsTabs = [
            'Audits',
            'Audit Observation'
        ]

        AuditsTabs.forEach(tab => {
            cy.contains(tab).should('exist');
        });

        //Check Audits Main noun
        cy.contains('Accounts').click()

        //Check COMET Source Selector
        cy.getSC('//:VLayout[ID="MainPage"]//ToolStripMenuButton[title="COMET"]').contains('COMET').should('exist')


      // Logout
        GQ.logout()

    })
    it('Quality Management planet tabs - Product Family - Product Specific Data binder - Smart Content', () => {

        // Login
        GQ.login()

        // Open Product Planet
        GQ.Planets.Product.openLandingPage()

        // Product Families must be visible
        cy.getSC(GQ.Planets.Product.ProductFamilies.locator).should('be.visible')

        // Products must be visible
        cy.getSC(GQ.Planets.Product.Products.locator).should('be.visible')

        // Large Molecules must be visible
        cy.getSC(GQ.Planets.Product.LargeMolecules.locator).should('be.visible')

        // Small Molecules must be visible
        cy.getSC(GQ.Planets.Product.SmallMolecules.locator).should('be.visible')

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        // Product Record
        // Open APALUTAMIDE product family
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE');
        GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector();
        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test Admin Binder');
        // Open Product Specific Binder
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.openlandingpage();
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.Name('Test');
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.dropdown();
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.selectall()
        // Click Plus
        GQ.Planets.Product.ProductFamilies.ProductFamily.clickPlusIcon('MSAT Product View - Cypress Test Admin Binder')
    
        // Click Child
        GQ.Planets.Product.ProductFamilies.ProductFamily.clickChild('MSAT Product View - Cypress Test Admin Binder')

        //Quality Management
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.smartcontent.QualityManagement.open()


        //Check Quality Management Tabs
        const QualityManagementTabs = [
            'Change Controls',
            'Escalations',
            'Nonconformances', 
            'CAPAs', 
            'Audits', 
            'Accounts']

        QualityManagementTabs.forEach(tab => {
            cy.contains(tab).should('exist');
        }); 

        //Click Change Controls Main noun
        cy.contains('Change Controls').click()

        //Check COMET Source Selector
        cy.getSC('//:VLayout[ID="MainPage"]//ToolStripMenuButton[title="COMET"]').contains('COMET').should('exist')

        //Check Change Controls sub nouns
        const ChangeControlsTabs = [
            'Change Controls',
            'Assessment Executions',
            'Implementations'];

        ChangeControlsTabs.forEach(tab => {
            cy.contains(tab).should('exist');
        });

        //Click Escalations Noun
        cy.contains('Escalations').click()

        //Check COMET Source Selector
        cy.getSC('//:VLayout[ID="MainPage"]//ToolStripMenuButton[title="COMET"]').contains('COMET').should('exist')

        //Check Escalations Sub nouns
        const EscalationsTabs = [
            'Escalations',
            'Assessments',
            'Meetings']

        EscalationsTabs.forEach(tab => {
            cy.contains(tab).should('exist');
        });

        //Click Nonconformances main noun
        cy.contains('Nonconformances').click()

        //Check COMET Source Selector

        cy.getSC('//:VLayout[ID="MainPage"]//ToolStripMenuButton[title="COMET"]').contains('COMET').should('exist')

        //Check Nonconformances Sub nouns
        const NonconformancesTabs = [
            'Nonconformances',
            'Containments',
            'NC Investigations',
            'Supplemental Investigations',
            'Laboratory Investigations',
            'NC Corrections',
            'Actions',
            'Risk Assessments'
        ]

        NonconformancesTabs.forEach(tab => {
            cy.contains(tab).should('exist');
        });

        //Check CAPAs Main noun
        cy.contains('CAPAs').click()

        //Check COMET Source Selector
        cy.getSC('//:VLayout[ID="MainPage"]//ToolStripMenuButton[title="COMET"]').contains('COMET').should('exist')

        //Check CAPAs sub nouns
        const CAPAsTabs = [
            'CAPAs',
            'Interim Controls',
            'CAPA Investigations',
            'Supplemental Investigations',
            'CAPA Implementation',
            'Actions',
            'Effectiveness Plan',
            'Effectiveness Review'
        ]

        CAPAsTabs.forEach(tab => {
            cy.contains(tab).should('exist');
        });

        //Check Audits Main noun
        cy.contains('Audits').click()
        
        //Check COMET Source Selector
        cy.getSC('//:VLayout[ID="MainPage"]//ToolStripMenuButton[title="COMET"]').contains('COMET').should('exist')

        //Check Audits sub nouns
        const AuditsTabs = [
            'Audits',
            'Audit Observation'
        ]

        AuditsTabs.forEach(tab => {
            cy.contains(tab).should('exist');
        });

        //Check Audits Main noun
        cy.contains('Accounts').click()

        //Check COMET Source Selector
        cy.getSC('//:VLayout[ID="MainPage"]//ToolStripMenuButton[title="COMET"]').contains('COMET').should('exist')


      // Logout
        GQ.logout()

    })
    it('Quality Management planet tabs - Product Family - Product Specific Data binder - Linked Content', () => {

        // Login 
        GQ.login()

        // Open Product Planet
        GQ.Planets.Product.openLandingPage()

        // Product Families must be visible
        cy.getSC(GQ.Planets.Product.ProductFamilies.locator).should('be.visible')

        // Products must be visible
        cy.getSC(GQ.Planets.Product.Products.locator).should('be.visible')

        // Large Molecules must be visible
        cy.getSC(GQ.Planets.Product.LargeMolecules.locator).should('be.visible')

        // Small Molecules must be visible
        cy.getSC(GQ.Planets.Product.SmallMolecules.locator).should('be.visible')

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter()

        // Product Record
        // Open APALUTAMIDE product family
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE');
        GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector();
        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test Admin Binder');
        // Open Product Specific Binder
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.openlandingpage();
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.Name('Test');
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.dropdown();
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.selectall()
        // Click Plus
        GQ.Planets.Product.ProductFamilies.ProductFamily.clickPlusIcon('MSAT Product View - Cypress Test Admin Binder')
    
        // Click Child
        GQ.Planets.Product.ProductFamilies.ProductFamily.clickChild('MSAT Product View - Cypress Test Admin Binder')

        //Quality Management
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.linkedcontent.openlandingpage()
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.linkedcontent.qualitymanagement()


        //Check Quality Management Tabs
        const QualityManagementTabs = [
            'Change Controls',
            'Escalations',
            'Nonconformances', 
            'CAPAs', 
            'Audits', 
            'Accounts']

        QualityManagementTabs.forEach(tab => {
            cy.contains(tab).should('exist');
        }); 

        //Click Change Controls Main noun
        cy.contains('Change Controls').click()

        //Check COMET Source Selector
        cy.getSC('//:VLayout[ID="MainPage"]//ToolStripMenuButton[title="COMET"]').contains('COMET').should('exist')

        //Check Change Controls sub nouns
        const ChangeControlsTabs = [
            'Change Controls',
            'Assessment Executions',
            'Implementations'];

        ChangeControlsTabs.forEach(tab => {
            cy.contains(tab).should('exist');
        });

        //Click Escalations Noun
        cy.contains('Escalations').click()

        //Check COMET Source Selector
        cy.getSC('//:VLayout[ID="MainPage"]//ToolStripMenuButton[title="COMET"]').contains('COMET').should('exist')

        //Check Escalations Sub nouns
        const EscalationsTabs = [
            'Escalations',
            'Assessments',
            'Meetings']

        EscalationsTabs.forEach(tab => {
            cy.contains(tab).should('exist');
        });

        //Click Nonconformances main noun
        cy.contains('Nonconformances').click()

        //Check COMET Source Selector

        cy.getSC('//:VLayout[ID="MainPage"]//ToolStripMenuButton[title="COMET"]').contains('COMET').should('exist')

        //Check Nonconformances Sub nouns
        const NonconformancesTabs = [
            'Nonconformances',
            'Containments',
            'NC Investigations',
            'Supplemental Investigations',
            'Laboratory Investigations',
            'NC Corrections',
            'Actions',
            'Risk Assessments'
        ]

        NonconformancesTabs.forEach(tab => {
            cy.contains(tab).should('exist');
        });

        //Check CAPAs Main noun
        cy.contains('CAPAs').click()

        //Check COMET Source Selector
        cy.getSC('//:VLayout[ID="MainPage"]//ToolStripMenuButton[title="COMET"]').contains('COMET').should('exist')

        //Check CAPAs sub nouns
        const CAPAsTabs = [
            'CAPAs',
            'Interim Controls',
            'CAPA Investigations',
            'Supplemental Investigations',
            'CAPA Implementation',
            'Actions',
            'Effectiveness Plan',
            'Effectiveness Review'
        ]

        CAPAsTabs.forEach(tab => {
            cy.contains(tab).should('exist');
        });

        //Check Audits Main noun
        cy.contains('Audits').click()
        
        //Check COMET Source Selector
        cy.getSC('//:VLayout[ID="MainPage"]//ToolStripMenuButton[title="COMET"]').contains('COMET').should('exist')

        //Check Audits sub nouns
        const AuditsTabs = [
            'Audits',
            'Audit Observation'
        ]

        AuditsTabs.forEach(tab => {
            cy.contains(tab).should('exist');
        });

        //Check Audits Main noun
        cy.contains('Accounts').click()

        //Check COMET Source Selector
        cy.getSC('//:VLayout[ID="MainPage"]//ToolStripMenuButton[title="COMET"]').contains('COMET').should('exist')


      // Logout
    GQ.logout()
    })
})