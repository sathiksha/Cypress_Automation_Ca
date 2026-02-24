import { Test } from 'mocha';
import { GQTest } from '../../jj-pages/GQTest';
// Sprint 4
require('cypress-xpath');

describe('Allows tree type multi-choice picker for "Data Types to Show" of Laboratory Information', () => {
    const GQ = new GQTest();
    const dropdown = GQ.NavBar.ElementLibrary.DataManagement.UserDataBinder.dropdown; 

    it('Admin Data Binders from Data Management', () => {

        // Login
        GQ.login();

        // Navigate to the Landing Page
        GQ.NavBar.ElementLibrary.openLandingPage();

        // Navigate to Data Management
        GQ.NavBar.ElementLibrary.DataManagement.open();

        // Open Admin Data Binder
        GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.open();

        // Search for the created item (TESTING FOR ADMIN DATA)
        GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.selectRowByText('Admin Data Binder Test');
        // GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.clickPullBack();
        // GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.clickHamburger();
        // GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.clickCheckOut();
        GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.dropdown.openLandingPage();
        // GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.dropdown.LaboratoryInformation.clickLaboratoryInfo();
        // GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.dropdown.LaboratoryInformation.clickLaboratoryInfo();

        // GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.dropdown()

        //Click the Laboratory Information
        cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_EL_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_EL_Admin_Data_Binder_Activit||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Admin_Data_Binder_Main_Page_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Home_2||scClass=VLayout||index=0||length=6||classIndex=0||classLength=1||scClassIndex=0||scClassLength=6]/component/item[name=dataTabsToShow||title=Data%20Types%20to%20Show||index=3||Class=MultiPickerItem]/pickTree/body/row[id=laboratory_information||itemname=Laboratory%20Information||20]/col[fieldName=itemname||0]/extra').click()

        const parent = 'Laboratory Information';
        const expectedChildren = [
            'Stability Studies',
            'Stability Data',
            'Release Data',
            'Specifications'
        ];

        cy.get('div[eventproxy*="pickerLayout"]').within(() => {
            cy.get('tr[role="treeitem"][aria-selected="true"]').then(($rows) => {
                const checkedNames = new Set()
                $rows.each((i, row) => {
                    const name = Cypress.$(row).find('td:last-child').contents().filter(function () {
                        return this.nodeType === 3;
                    }).text().trim()
                    checkedNames.add(name)
                })
                cy.log('Selected Items after selecting parent:', [...checkedNames].join(', '))
                //Verify all the childs of Laboratory Information selected
                expect(checkedNames.has(parent)).to.be.true;
                expectedChildren.forEach((child) => {
                    expect(checkedNames.has(child), `Child "${child}" should be checked`).to.be.true;
                })
            })

            //Clear all
            cy.get('#isc_EF > table > tbody > tr > .toolStripButton').click()

            // Assert nothing is selected
            cy.get('tr[role="treeitem"][aria-selected="true"]').should('have.length', 0)

            //Select one child only (Release Data)
            cy.contains('tr[role="treeitem"]', 'Release Data').find('.checkboxFalse').click()

            cy.get('tr[role="treeitem"][aria-selected="true"]').then(($rows) => {
                const checkedNames = new Set()

                $rows.each((i, row) => {
                    const name = Cypress.$(row)
                        .find('td:last-child')
                        .contents()
                        .filter(function () {
                            return this.nodeType === 3;
                        })
                        .text()
                        .trim()
                    checkedNames.add(name)
                })

                const nameArray = Array.from(checkedNames)
                cy.log('Selected Items after selecting Release Data:', nameArray.join(', '))

                //Assertion only Release Data and Laboratory Information selected
                expect(checkedNames.has('Release Data'), 'Release Data should be selected').to.be.true;
                expect(checkedNames.has('Laboratory Information'), 'Parent should be selected').to.be.true;
                const otherChildren = [
                    'Stability Studies',
                    'Stability Data',
                    'Specifications'
                ];
                otherChildren.forEach(child => {
                    expect(checkedNames.has(child), `Child "${child}" should NOT be selected`).to.be.false;
                })
            })
            //Uncheck Laboratory Infromation
            cy.getSC(
                '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_EL_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_EL_Admin_Data_Binder_Activit||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Admin_Data_Binder_Main_Page_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Home_2||scClass=VLayout||index=0||length=6||classIndex=0||classLength=1||scClassIndex=0||scClassLength=6]/component/item[name=dataTabsToShow||title=Data%20Types%20to%20Show||value=stability_study,stability_data,release_data,specification||index=3||Class=MultiPickerItem]/pickTree/body/row[id=laboratory_information||itemname=Laboratory%20Information||20]/col[fieldName=itemname||0]/extra'
            ).click()

            cy.get('tr[role="treeitem"][aria-selected="true"]').should('have.length', 0)

            cy.contains('tr', 'Laboratory Information').find('td').eq(1).find('span').should('have.class', 'checkboxFalse')
            cy.contains('tr', 'Stability Studies').find('td').eq(1).find('span').should('have.class', 'checkboxFalse')
            cy.contains('tr', 'Stability Data').find('td').eq(1).find('span').should('have.class', 'checkboxFalse')
            cy.contains('tr', 'Specifications').find('td').eq(1).find('span').should('have.class', 'checkboxFalse')

    //Click the Laboratory Information
    cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_EL_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_EL_Admin_Data_Binder_Activit||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Admin_Data_Binder_Main_Page_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Home_2||scClass=VLayout||index=0||length=6||classIndex=0||classLength=1||scClassIndex=0||scClassLength=6]/component/item[name=dataTabsToShow||title=Data%20Types%20to%20Show||index=3||Class=MultiPickerItem]/pickTree/body/row[id=laboratory_information||itemname=Laboratory%20Information||20]/col[fieldName=itemname||0]/extra').click()

    //Click the dropdown of Data Types to Show
    GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.dropdown.openLandingPage();
    //Click Ok
    cy.getSC(
        '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_EL_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_EL_Admin_Data_Binder_Activit||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Admin_Data_Binder_Main_Page_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Home_2||scClass=VLayout||index=0||length=6||classIndex=0||classLength=1||scClassIndex=0||scClassLength=6]/component/gridBar/saveButton/icon'
    ).click()
            
    })
    
    //Click SmartContent
    cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_EL_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_EL_Admin_Data_Binder_Activit||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Admin_Data_Binder_Main_Page_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=2||length=6||classIndex=2||classLength=6||roleIndex=2||roleLength=6||title=Smart%20Content||scRole=button]/').click()

    //Laboratory Information
    cy.getSC(
        '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_EL_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_EL_Admin_Data_Binder_Activit||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Admin_Data_Binder_Main_Page_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Smart_Content_1||scClass=VLayout||index=2||length=6||classIndex=0||classLength=1||scClassIndex=2||scClassLength=6]/component/member[Class=QScreen_Data_Binder_Smart_Content_La||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=5||length=9||classIndex=5||classLength=9||roleIndex=5||roleLength=9||title=Laboratory%20Information||scRole=button]/'
    ).click()

    //Check Stability Data
    cy.getSC(
        '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_EL_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_EL_Admin_Data_Binder_Activit||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Admin_Data_Binder_Main_Page_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Smart_Content_1||scClass=VLayout||index=2||length=6||classIndex=0||classLength=1||scClassIndex=2||scClassLength=6]/component/member[Class=QScreen_Data_Binder_Smart_Content_La||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Laboratory_Information_3||scClass=VLayout||index=5||length=9||classIndex=0||classLength=1||scClassIndex=5||scClassLength=9]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=0||length=4||classIndex=0||classLength=4||roleIndex=0||roleLength=4||title=Stability%20Studies||scRole=button]/'
    ).click()

    const laboratoryInformationTabs= [
    'Stability Studies',
    'Stability Data',
    'Release Data',
    'Specifications'
    ];

    laboratoryInformationTabs.forEach(tab => {
        cy.contains(tab).should('exist');
    });

    
    //Check Subnouns
    //Check Stability Studies
    cy.getSC(
        '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_EL_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_EL_Admin_Data_Binder_Activit||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Admin_Data_Binder_Main_Page_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Smart_Content_1||scClass=VLayout||index=2||length=6||classIndex=0||classLength=1||scClassIndex=2||scClassLength=6]/component/member[Class=QScreen_Data_Binder_Smart_Content_La||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Laboratory_Information_3||scClass=VLayout||index=5||length=9||classIndex=0||classLength=1||scClassIndex=5||scClassLength=9]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=0||length=4||classIndex=0||classLength=4||roleIndex=0||roleLength=4||title=Stability%20Studies||scRole=button]/'
    ).click()

        const stabilityStudiesTabs = [
        'Stability Studies',
        'Forecasts',
        'Inventories'
        ];

        stabilityStudiesTabs.forEach(tab => {
            cy.contains(tab).should('exist');
        });


        //Clear all
        GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.Home.openLandingPage();
        GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.dropdown.openLandingPage();
        cy.get('#isc_EF > table > tbody > tr > .toolStripButton').click()
        //Click Save
        cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_EL_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_EL_Admin_Data_Binder_Activit||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Admin_Data_Binder_Main_Page_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Home_2||scClass=VLayout||index=0||length=6||classIndex=0||classLength=1||scClassIndex=0||scClassLength=6]/component/gridBar/saveButton/icon').dblclick()

    
        GQ.logout();

    })
    it('User Data Binder from Data Management', () => {

        // Login
        GQ.login();

        // Navigate to the Landing Page
        GQ.NavBar.ElementLibrary.openLandingPage();

        // Navigate to Data Management
        GQ.NavBar.ElementLibrary.DataManagement.open();

        // Open User Data Binder
        GQ.NavBar.ElementLibrary.DataManagement.UserDataBinder.open()

        // Search for the created item (TESTING FOR USER DATA)


        GQ.NavBar.ElementLibrary.DataManagement.UserDataBinder.open();
        GQ.NavBar.ElementLibrary.DataManagement.UserDataBinder.toggleSelector();
        GQ.NavBar.ElementLibrary.DataManagement.UserDataBinder.selectRowByText('User Data Binder Test');

        // Dropdown interactions
        dropdown.openLandingPage();
        // GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.dropdown.LaboratoryInformation.clickLaboratoryInfo();
        // GQ.NavBar.ElementLibrary.DataManagement.AdminDataBinder.dropdown.LaboratoryInformation.clickLaboratoryInfo();

        // GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.dropdown()

        //Click the Laboratory Information
        cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_EL_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_EL_Data_Binder_Activity||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page_Setup||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Home_3||scClass=VLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=3]/component/item[name=dataTabsToShow||title=Data%20Types%20to%20Show||index=2||Class=MultiPickerItem]/pickTree/body/row[id=laboratory_information||itemname=Laboratory%20Information||20]/col[fieldName=itemname||0]/extra').click()

        const parent = 'Laboratory Information';
        const expectedChildren = [
            'Stability Studies',
            'Stability Data',
            'Release Data',
            'Specifications'
        ];

        cy.get('div[eventproxy*="pickerLayout"]').within(() => {
            cy.get('tr[role="treeitem"][aria-selected="true"]').then(($rows) => {
                const checkedNames = new Set()
                $rows.each((i, row) => {
                    const name = Cypress.$(row).find('td:last-child').contents().filter(function () {
                        return this.nodeType === 3;
                    }).text().trim()
                    checkedNames.add(name)
                })
                cy.log('Selected Items after selecting parent:', [...checkedNames].join(', '))
                //Verify all the childs of Laboratory Information selected
                expect(checkedNames.has(parent)).to.be.true;
                expectedChildren.forEach((child) => {
                    expect(checkedNames.has(child), `Child "${child}" should be checked`).to.be.true;
                })
            })

            //Clear all
            cy.get('#isc_J8 > table > tbody > tr > .toolStripButton').click()

            // Assert nothing is selected
            cy.get('tr[role="treeitem"][aria-selected="true"]').should('have.length', 0)

            //Select one child only (Release Data)
            cy.contains('tr[role="treeitem"]', 'Release Data').find('.checkboxFalse').click()

            cy.get('tr[role="treeitem"][aria-selected="true"]').then(($rows) => {
                const checkedNames = new Set()

                $rows.each((i, row) => {
                    const name = Cypress.$(row)
                        .find('td:last-child')
                        .contents()
                        .filter(function () {
                            return this.nodeType === 3;
                        })
                        .text()
                        .trim()
                    checkedNames.add(name)
                })

                const nameArray = Array.from(checkedNames)
                cy.log('Selected Items after selecting Release Data:', nameArray.join(', '))

                //Assertion only Release Data and Laboratory Information selected
                expect(checkedNames.has('Release Data'), 'Release Data should be selected').to.be.true;
                expect(checkedNames.has('Laboratory Information'), 'Parent should be selected').to.be.true;
                const otherChildren = [
                    'Stability Studies',
                    'Stability Data',
                    'Specifications'
                ];
                otherChildren.forEach(child => {
                    expect(checkedNames.has(child), `Child "${child}" should NOT be selected`).to.be.false;
                })
            })
            //Uncheck Laboratory Infromation
            cy.getSC(
                '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_EL_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_EL_Data_Binder_Activity||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page_Setup||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Home_3||scClass=VLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=3]/component/item[name=dataTabsToShow||title=Data%20Types%20to%20Show||value=stability_study,stability_data,release_data,specification||index=2||Class=MultiPickerItem]/pickTree/body/row[id=laboratory_information||itemname=Laboratory%20Information||20]/col[fieldName=itemname||0]/extra'
            ).click()

            cy.get('tr[role="treeitem"][aria-selected="true"]').should('have.length', 0)

            cy.contains('tr', 'Laboratory Information').find('td').eq(1).find('span').should('have.class', 'checkboxFalse')
            cy.contains('tr', 'Stability Studies').find('td').eq(1).find('span').should('have.class', 'checkboxFalse')
            cy.contains('tr', 'Stability Data').find('td').eq(1).find('span').should('have.class', 'checkboxFalse')
            cy.contains('tr', 'Specifications').find('td').eq(1).find('span').should('have.class', 'checkboxFalse')

    //Click the Laboratory Information
    cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_EL_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_EL_Data_Binder_Activity||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page_Setup||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Home_3||scClass=VLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=3]/component/item[name=dataTabsToShow||title=Data%20Types%20to%20Show||index=2||Class=MultiPickerItem]/pickTree/body/row[id=laboratory_information||itemname=Laboratory%20Information||20]/col[fieldName=itemname||0]/extra').click()

        dropdown.openLandingPage()
        dropdown.save();
        dropdown.SmartContent();
            
    })

    //Laboratory Information
    cy.getSC(
        '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_EL_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_EL_Data_Binder_Activity||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page_Setup||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Smart_Content_2||scClass=VLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/component/member[Class=QScreen_Data_Binder_Smart_Content_La||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=5||length=9||classIndex=5||classLength=9||roleIndex=5||roleLength=9||title=Laboratory%20Information||scRole=button]/'
    ).click()

    //Check Stability Data
    cy.getSC(
        '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_EL_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_EL_Data_Binder_Activity||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page_Setup||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Smart_Content_2||scClass=VLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/component/member[Class=QScreen_Data_Binder_Smart_Content_La||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Laboratory_Information_3||scClass=VLayout||index=5||length=9||classIndex=0||classLength=1||scClassIndex=5||scClassLength=9]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=0||length=4||classIndex=0||classLength=4||roleIndex=0||roleLength=4||title=Stability%20Studies||scRole=button]/'
    ).click()

    const laboratoryInformationTabs= [
    'Stability Studies',
    'Stability Data',
    'Release Data',
    'Specifications'
    ];

    laboratoryInformationTabs.forEach(tab => {
        cy.contains(tab).should('exist');
    });

    
    //Check Subnouns
    //Check Stability Studies
    cy.getSC(
        '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_EL_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_EL_Data_Binder_Activity||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page_Setup||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Smart_Content_2||scClass=VLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/component/member[Class=QScreen_Data_Binder_Smart_Content_La||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Laboratory_Information_3||scClass=VLayout||index=5||length=9||classIndex=0||classLength=1||scClassIndex=5||scClassLength=9]/body/layoutBody/member[Class=QScreen_Stability_Studies_6||scClass=VLayout||index=0||length=4||classIndex=0||classLength=1||scClassIndex=0||scClassLength=4]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=0||length=3||classIndex=0||classLength=3||roleIndex=0||roleLength=3||title=Stability%20Studies||scRole=button]/'
    ).click()

        const stabilityStudiesTabs = [
        'Stability Studies',
        'Forecasts',
        'Inventories'
        ];

        stabilityStudiesTabs.forEach(tab => {
            cy.contains(tab).should('exist');
        });

        //Clear All
        GQ.NavBar.ElementLibrary.DataManagement.UserDataBinder.Home.openLandingPage();
        dropdown.openLandingPage();
        cy.get('#isc_J8 > table > tbody > tr > .toolStripButton').click()
        dropdown.save();
        dropdown.save();

    
        GQ.logout();

    })
    it('Product Specific Binder', () => {
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

        //Click Product Specific Binder Icon
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.openlandingpage()

        //Create Product Specific Binder
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.Name('Test')

        //Click the dropdown of Data Types to Show
        cy.get('#isc_YT > .comboBoxItemPicker').click()
        // GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.dropdown();

        //Click the Laboratory Information
        cy.getSC('//autoID[Class=Dialog||index=5||length=8||classIndex=0||classLength=1||roleIndex=0||roleLength=1||title=Create%20Product%20Specific%20Folder||scRole=alertdialog]/item[0][Class="QScreen_Command_Create_Properties"]/component/item[name=dataTabsToShow||title=Data%20Types%20to%20Show||index=1||Class=MultiPickerItem]/pickTree/body/row[id=laboratory_information||itemname=Laboratory%20Information||20]/col[fieldName=itemname||0]/extra').click()

        const parent = 'Laboratory Information';
        const expectedChildren = [
            'Stability Studies',
            'Stability Data',
            'Release Data',
            'Specifications'
        ];

        cy.get('div[eventproxy*="pickerLayout"]').within(() => {
            cy.get('tr[role="treeitem"][aria-selected="true"]').then(($rows) => {
                const checkedNames = new Set()
                $rows.each((i, row) => {
                    const name = Cypress.$(row).find('td:last-child').contents().filter(function () {
                        return this.nodeType === 3;
                    }).text().trim()
                    checkedNames.add(name)
                })
                cy.log('Selected Items after selecting parent:', [...checkedNames].join(', '))
                //Verify all the childs of Laboratory Information selected
                expect(checkedNames.has(parent)).to.be.true;
                expectedChildren.forEach((child) => {
                    expect(checkedNames.has(child), `Child "${child}" should be checked`).to.be.true;
                })
            })

            //Clear all
            cy.get('#isc_ZE > table > tbody > tr > .toolStripButton').click()

            // Assert nothing is selected
            cy.get('tr[role="treeitem"][aria-selected="true"]').should('have.length', 0)

            //Select one child only (Release Data)
            cy.contains('tr[role="treeitem"]', 'Release Data').find('.checkboxFalse').click()

            cy.get('tr[role="treeitem"][aria-selected="true"]').then(($rows) => {
                const checkedNames = new Set()

                $rows.each((i, row) => {
                    const name = Cypress.$(row)
                        .find('td:last-child')
                        .contents()
                        .filter(function () {
                            return this.nodeType === 3;
                        })
                        .text()
                        .trim()
                    checkedNames.add(name)
                })

                const nameArray = Array.from(checkedNames)
                cy.log('Selected Items after selecting Release Data:', nameArray.join(', '))

                //Assertion only Release Data and Laboratory Information selected
                expect(checkedNames.has('Release Data'), 'Release Data should be selected').to.be.true;
                expect(checkedNames.has('Laboratory Information'), 'Parent should be selected').to.be.true;
                const otherChildren = [
                    'Stability Studies',
                    'Stability Data',
                    'Specifications'
                ];
                otherChildren.forEach(child => {
                    expect(checkedNames.has(child), `Child "${child}" should NOT be selected`).to.be.false;
                })
            })
            //Uncheck Laboratory Infromation
            cy.getSC(
                '//autoID[Class=Dialog||index=5||length=8||classIndex=0||classLength=1||roleIndex=0||roleLength=1||title=Create%20Product%20Specific%20Folder||scRole=alertdialog]/item[0][Class="QScreen_Command_Create_Properties"]/component/item[name=dataTabsToShow||title=Data%20Types%20to%20Show||value=stability_study,stability_data,release_data,specification||index=1||Class=MultiPickerItem]/pickTree/body/row[id=laboratory_information||itemname=Laboratory%20Information||20]/col[fieldName=itemname||0]/extra'
            ).click()

            cy.get('tr[role="treeitem"][aria-selected="true"]').should('have.length', 0)

            cy.contains('tr', 'Laboratory Information').find('td').eq(1).find('span').should('have.class', 'checkboxFalse')
            cy.contains('tr', 'Stability Studies').find('td').eq(1).find('span').should('have.class', 'checkboxFalse')
            cy.contains('tr', 'Stability Data').find('td').eq(1).find('span').should('have.class', 'checkboxFalse')
            cy.contains('tr', 'Specifications').find('td').eq(1).find('span').should('have.class', 'checkboxFalse')

    //Click the Laboratory Information
    cy.getSC('//autoID[Class=Dialog||index=5||length=8||classIndex=0||classLength=1||roleIndex=0||roleLength=1||title=Create%20Product%20Specific%20Folder||scRole=alertdialog]/item[0][Class="QScreen_Command_Create_Properties"]/component/item[name=dataTabsToShow||title=Data%20Types%20to%20Show||index=1||Class=MultiPickerItem]/pickTree/body/row[id=laboratory_information||itemname=Laboratory%20Information||20]/col[fieldName=itemname||0]/extra').click()

    //Click the dropdown of Data Types to Show
    GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.dropdown()
    //Ok
    cy.getSC(
        '//autoID[Class=Dialog||index=9||length=10||classIndex=1||classLength=2||roleIndex=1||roleLength=2||title=Create%20Product%20Specific%20Folder||scRole=alertdialog]/okButton/'
    ).click()
            
        })
    GQ.Planets.Product.ProductFamilies.ProductFamily.clickPlusIcon('MSAT Product View - Cypress Test Admin Binder')
 
    // Click Child
    GQ.Planets.Product.ProductFamilies.ProductFamily.clickChild('MSAT Product View - Cypress Test Admin Binder')
    
    //Click SmartContent
    GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.smartcontent.open()

    //Laboratory Information
    cy.getSC(
        '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Smart_Content||scClass=VLayout||index=0||length=7||classIndex=0||classLength=1||scClassIndex=0||scClassLength=7]/component/member[Class=QScreen_Data_Binder_Smart_Content_La||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=5||length=9||classIndex=5||classLength=9||roleIndex=5||roleLength=9||title=Laboratory%20Information||scRole=button]/'
    ).click()

    
    //Check Stability Studies
    cy.getSC(
        '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Smart_Content||scClass=VLayout||index=0||length=7||classIndex=0||classLength=1||scClassIndex=0||scClassLength=7]/component/member[Class=QScreen_Data_Binder_Smart_Content_La||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Laboratory_Information_3||scClass=VLayout||index=5||length=9||classIndex=0||classLength=1||scClassIndex=5||scClassLength=9]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=0||length=4||classIndex=0||classLength=4||roleIndex=0||roleLength=4||title=Stability%20Studies||scRole=button]/'
    ).click()

    const laboratoryInformationTabs= [
    'Stability Studies',
    'Stability Data',
    'Release Data',
    'Specifications'
    ];

    laboratoryInformationTabs.forEach(tab => {
        cy.contains(tab).should('exist');
    });

    //Check Subnouns
    //Check Stability Studies
    cy.getSC(
        '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Smart_Content||scClass=VLayout||index=0||length=7||classIndex=0||classLength=1||scClassIndex=0||scClassLength=7]/component/member[Class=QScreen_Data_Binder_Smart_Content_La||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Laboratory_Information_3||scClass=VLayout||index=5||length=9||classIndex=0||classLength=1||scClassIndex=5||scClassLength=9]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=0||length=4||classIndex=0||classLength=4||roleIndex=0||roleLength=4||title=Stability%20Studies||scRole=button]/'
    ).click()

        const stabilityStudiesTabs = [
        'Stability Studies',
        'Forecasts',
        'Inventories'
        ];

        stabilityStudiesTabs.forEach(tab => {
            cy.contains(tab).should('exist');
        });

        GQ.logout();
        
    })
    it('User Data Binder from Product Family', () => {
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
        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('Cypress Test User Data Binder')

        // Click Home
        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.Home.open();

        //Click the dropdown of Data Types to Show
        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.Home.openDropdown();

        //Click the Laboratory Information
        cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Home_1||scClass=VLayout||index=1||length=7||classIndex=0||classLength=1||scClassIndex=1||scClassLength=7]/component/item[name=dataTabsToShow||title=Data%20Types%20to%20Show||value=||index=2||Class=MultiPickerItem]/pickTree/body/row[id=laboratory_information||itemname=Laboratory%20Information||20]/col[fieldName=itemname||0]/extra').click()

        const parent = 'Laboratory Information';
        const expectedChildren = [
            'Stability Studies',
            'Stability Data',
            'Release Data',
            'Specifications'
        ];

        cy.get('div[eventproxy*="pickerLayout"]').within(() => {
            cy.get('tr[role="treeitem"][aria-selected="true"]').then(($rows) => {
                const checkedNames = new Set()
                $rows.each((i, row) => {
                    const name = Cypress.$(row).find('td:last-child').contents().filter(function () {
                        return this.nodeType === 3;
                    }).text().trim()
                    checkedNames.add(name)
                })
                cy.log('Selected Items after selecting parent:', [...checkedNames].join(', '))
                //Verify all the childs of Laboratory Information selected
                expect(checkedNames.has(parent)).to.be.true;
                expectedChildren.forEach((child) => {
                    expect(checkedNames.has(child), `Child "${child}" should be checked`).to.be.true;
                })
            })

            //Clear all
            cy.get('#isc_VS > table > tbody > tr > .toolStripButton').click()

            // Assert nothing is selected
            cy.get('tr[role="treeitem"][aria-selected="true"]').should('have.length', 0)

            //Select one child only (Release Data)
            cy.contains('tr[role="treeitem"]', 'Release Data').find('.checkboxFalse').click()

            cy.get('tr[role="treeitem"][aria-selected="true"]').then(($rows) => {
                const checkedNames = new Set()

                $rows.each((i, row) => {
                    const name = Cypress.$(row)
                        .find('td:last-child')
                        .contents()
                        .filter(function () {
                            return this.nodeType === 3;
                        })
                        .text()
                        .trim()
                    checkedNames.add(name)
                })

                const nameArray = Array.from(checkedNames)
                cy.log('Selected Items after selecting Release Data:', nameArray.join(', '))

                //Assertion only Release Data and Laboratory Information selected
                expect(checkedNames.has('Release Data'), 'Release Data should be selected').to.be.true;
                expect(checkedNames.has('Laboratory Information'), 'Parent should be selected').to.be.true;
                const otherChildren = [
                    'Stability Studies',
                    'Stability Data',
                    'Specifications'
                ];
                otherChildren.forEach(child => {
                    expect(checkedNames.has(child), `Child "${child}" should NOT be selected`).to.be.false;
                })
            })
            //Uncheck Laboratory Infromation
            cy.getSC(
                '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Home_1||scClass=VLayout||index=1||length=7||classIndex=0||classLength=1||scClassIndex=1||scClassLength=7]/component/item[name=dataTabsToShow||title=Data%20Types%20to%20Show||value=stability_study,stability_data,release_data,specification||index=2||Class=MultiPickerItem]/pickTree/body/row[id=laboratory_information||itemname=Laboratory%20Information||20]/col[fieldName=itemname||0]/extra'
            ).click()

            cy.get('tr[role="treeitem"][aria-selected="true"]').should('have.length', 0)

            cy.contains('tr', 'Laboratory Information').find('td').eq(1).find('span').should('have.class', 'checkboxFalse')
            cy.contains('tr', 'Stability Studies').find('td').eq(1).find('span').should('have.class', 'checkboxFalse')
            cy.contains('tr', 'Stability Data').find('td').eq(1).find('span').should('have.class', 'checkboxFalse')
            cy.contains('tr', 'Specifications').find('td').eq(1).find('span').should('have.class', 'checkboxFalse')
    //Click the Laboratory Information
    cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Home_1||scClass=VLayout||index=1||length=7||classIndex=0||classLength=1||scClassIndex=1||scClassLength=7]/component/item[name=dataTabsToShow||title=Data%20Types%20to%20Show||value=||index=2||Class=MultiPickerItem]/pickTree/body/row[id=laboratory_information||itemname=Laboratory%20Information||20]/col[fieldName=itemname||0]/extra').click()
    cy.wait(5000);

    //Click Save
    cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Home_1||scClass=VLayout||index=1||length=7||classIndex=0||classLength=1||scClassIndex=1||scClassLength=7]/component/gridBar/saveButton/icon').dblclick();  
    })
    cy.wait(5000);
    
    
    //Click SmartContent
    cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=0||length=7||classIndex=0||classLength=7||roleIndex=0||roleLength=7||title=Smart%20Content||scRole=button]/').click()

    //Laboratory Information
    cy.getSC(
        '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Smart_Content||scClass=VLayout||index=0||length=7||classIndex=0||classLength=1||scClassIndex=0||scClassLength=7]/component/member[Class=QScreen_Data_Binder_Smart_Content_La||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=5||length=9||classIndex=5||classLength=9||roleIndex=5||roleLength=9||title=Laboratory%20Information||scRole=button]/'
    ).click()

    //Check Stability Studies
    cy.getSC(
        '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Smart_Content||scClass=VLayout||index=0||length=7||classIndex=0||classLength=1||scClassIndex=0||scClassLength=7]/component/member[Class=QScreen_Data_Binder_Smart_Content_La||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Laboratory_Information_3||scClass=VLayout||index=5||length=9||classIndex=0||classLength=1||scClassIndex=5||scClassLength=9]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=0||length=4||classIndex=0||classLength=4||roleIndex=0||roleLength=4||title=Stability%20Studies||scRole=button]/'
    ).click()

    const laboratoryInformationTabs= [
    'Stability Studies',
    'Stability Data',
    'Release Data',
    'Specifications'
    ];

    laboratoryInformationTabs.forEach(tab => {
        cy.contains(tab).should('exist');
    });

    
    //Check Subnouns
    //Check Stability Studies
    cy.getSC(
        '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Smart_Content||scClass=VLayout||index=0||length=7||classIndex=0||classLength=1||scClassIndex=0||scClassLength=7]/component/member[Class=QScreen_Data_Binder_Smart_Content_La||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Laboratory_Information_3||scClass=VLayout||index=5||length=9||classIndex=0||classLength=1||scClassIndex=5||scClassLength=9]/body/layoutBody/member[Class=QScreen_Stability_Studies_6||scClass=VLayout||index=0||length=4||classIndex=0||classLength=1||scClassIndex=0||scClassLength=4]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=0||length=3||classIndex=0||classLength=3||roleIndex=0||roleLength=3||title=Stability%20Studies||scRole=button]/'
    ).click()

        const stabilityStudiesTabs = [
        'Stability Studies',
        'Forecasts',
        'Inventories'
        ];

        stabilityStudiesTabs.forEach(tab => {
            cy.contains(tab).should('exist');
        });

        //Clear all
        //Home
        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.Home.open();
        GQ.Planets.Product.ProductFamilies.ProductFamily.UserDataBinder.Home.openDropdown();
        cy.get('#isc_VS > table > tbody > tr > .toolStripButton').click()
        //Click Save
        cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Home_1||scClass=VLayout||index=1||length=7||classIndex=0||classLength=1||scClassIndex=1||scClassLength=7]/component/gridBar/saveButton/icon').dblclick()

        GQ.logout();

    })
})
