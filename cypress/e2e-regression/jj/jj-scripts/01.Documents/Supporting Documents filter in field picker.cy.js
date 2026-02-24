import { GQTest } from '../../jj-pages/GQTest';
require('cypress-xpath');

describe('Sprint 3', () => {
    const GQ = new GQTest();

    it('Allows for Supporting Documents in Product TruVault Records', () => {
        GQ.login();

        GQ.Planets.Documents.openLandingPage();


        GQ.Planets.Documents.Documents.openLandingPage();


        cy.addColumn(GQ.Planets.Documents.Documents.columnHeader(), ['Supporting Documents']);

        GQ.Planets.Documents.Documents.toggleFilter();

        GQ.Planets.Documents.Documents.filterSupportingDocumentRecord('TV-VAL-103605');


        cy.waitForSCDone();
        cy.wait(1000);

        let expectedColumn = [0];

        cy.window().then((win) => {
            let resultObject = {
                rowResults: {},
                rowCount: 0
            };

            let table = win.isc.AutoTest.getElement(
                '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Document_Act||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Item_Repository_TruVault_Rec||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/header/headerButton[fieldName=supporting_documents]/'
            );

            if (!table) {
                cy.log('❌ Table element not found.');
                return;
            }

            let rows = table.querySelectorAll('tbody tr');
            resultObject.rowCount = rows.length;

            expectedColumn.forEach((index) => {
                let row = rows[index];
                if (row) {
                    let cols = row.querySelectorAll('td');
                    let rowArray = [];
                    cols.forEach((col) => {
                        rowArray.push(col.innerText.trim());
                    });
                    resultObject.rowResults[index] = rowArray;
                }
            });

            let firstKey = Object.keys(resultObject.rowResults)[0];
            if (firstKey) {
                let rowArray = resultObject.rowResults[firstKey];
                let lastValue = rowArray[rowArray.length - 1];
                let lastValueArray = lastValue.split(',');

                GQ.Planets.Documents.Documents.expandRecord(0);
                cy.wait(1000);
                GQ.Planets.Documents.Documents.RelatedObjects.open();

                let toCompare = [0, 1, 2, 3, 4, 5];

                cy.window().then((win2) => {
                    let resultObject2 = {
                        rowResults: {},
                        rowCount: 0
                    };

                    let table2 = win2.isc.AutoTest.getElement(
                        '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Document_Act||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Item_Repository_TruVault_Rec||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/expansionLayout[Class=VLayout||index=7||length=8||classIndex=7||classLength=8]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Record_Home||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Related_Objects||scClass=VLayout||index=2||length=3||classIndex=0||classLength=1||scClassIndex=2||scClassLength=3]/body/layoutBody/member[Class=QScreen_Documents||scClass=VLayout||index=0||length=2||classIndex=0||classLength=1||scClassIndex=0||scClassLength=2]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Record_Related_Product_Recor||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/body/row[oid=70a4607d-985d-496c-8e49-25c69e0af07b||itemRef=TV-TEC-172487||0]/col[fieldName=itemRef||1]'
                    );

                    if (!table2) {
                        cy.log('❌ Second table element not found.');
                        return;
                    }

                    let rows2 = table2.querySelectorAll('tbody tr');
                    resultObject2.rowCount = rows2.length;

                    let extractedValues = [];

                    toCompare.forEach((index) => {
                        let row = rows2[index];
                        if (row) {
                            let cols = row.querySelectorAll('td');
                            if (cols.length > 1) {
                                extractedValues.push(cols[1].innerText.trim());
                            }
                        }
                    });

                    cy.log('Original Last Value Array: ' + JSON.stringify(lastValueArray));
                    cy.log('Extracted Values: ' + JSON.stringify(extractedValues));

                    lastValueArray.sort();
                    extractedValues.sort();

                    cy.log('Sorted Last Value Array: ' + JSON.stringify(lastValueArray));
                    cy.log('Sorted Extracted Values: ' + JSON.stringify(extractedValues));

                    for (let i = 0; i < lastValueArray.length; i++) {
                        cy.wrap(lastValueArray[i]).should('equal', extractedValues[i]);
                    }
                });
            } else {
                cy.log('⚠️ No valid row data found in first table.');
            }
        });

        // Home
        GQ.NavBar.Home.openLandingPage()

        // Click product planet
        GQ.Planets.Product.openLandingPage()

        // Open product family 
        GQ.Planets.Product.ProductFamilies.openLandingPage()

        GQ.Planets.Product.ProductFamilies.toggleFilter()

        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('My New Product - BioTherapeutics')

        // Click documents tab
        //    GQ.Planets.Product.ProductFamilies.ProductFamily.Content.Documents.openLandingPage()

        //Click Filtered tab
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.Documents.Filtered.open()

        // Add column
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.Documents.Filtered.addColumnFields('Supporting Documents')

        // Open record
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.Documents.Filtered.openRecord('TV-VAL-103605')

        // Wait
        cy.waitForSCDone()

        cy.wait(1000)

        //Read column
        let expectedColumnInDocuments = [0];

        cy.window().then((win) => {
            let resultObject = {
                rowResults: {},
                rowCount: 0
            };

            let table = win.isc.AutoTest.getElement(
                '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Content||scClass=VLayout||index=0||length=8||classIndex=0||classLength=1||scClassIndex=0||scClassLength=8]/component/member[Class=QScreen_Product_Family__Product_Con||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/member[Class=QScreen_Content_Layout||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Documents||scClass=VLayout||index=0||length=7||classIndex=0||classLength=1||scClassIndex=0||scClassLength=7]/component/member[Class=QScreen_Content_Product_Records||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Filtered_40||scClass=VLayout||index=0||length=4||classIndex=0||classLength=1||scClassIndex=0||scClassLength=4]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Filtered_Content_Selector_w_Bi||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/header/headerButton[fieldName=supporting_documents]/'
            );

            if (!table) {
                cy.log('❌ Table element not found.');
                return;
            }

            let rows = table.querySelectorAll('tbody tr');
            resultObject.rowCount = rows.length;

            expectedColumnInDocuments.forEach((index) => {
                let row = rows[index];
                if (row) {
                    let cols = row.querySelectorAll('td');
                    let rowArray = [];
                    cols.forEach((col) => {
                        rowArray.push(col.innerText.trim());
                    });
                    resultObject.rowResults[index] = rowArray;
                }
            });

            let firstKey = Object.keys(resultObject.rowResults)[0];
            if (firstKey) {
                let rowArray = resultObject.rowResults[firstKey];
                let lastValue = rowArray[rowArray.length - 1];
                let lastValueArray = lastValue.split(',');

                GQ.Planets.Product.ProductFamilies.ProductFamily.Content.Documents.Filtered.expandRecord('TV-VAL-103605');
                cy.wait(1000);
                GQ.Planets.Product.ProductFamilies.ProductFamily.Content.Documents.Filtered.RelatedObjects.open();
                cy.waitForSCDone();

                let toCompareInDocuments = [0, 1, 2, 3, 4, 5];

                cy.window().then((win2) => {
                    let resultObject2 = {
                        rowResults: {},
                        rowCount: 0
                    };

                    let table2 = win2.isc.AutoTest.getElement(
                        '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Mai||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Content||scClass=VLayout||index=0||length=8||classIndex=0||classLength=1||scClassIndex=0||scClassLength=8]/component/member[Class=QScreen_Product_Family__Product_Con||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/member[Class=QScreen_Content_Layout||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Documents||scClass=VLayout||index=0||length=7||classIndex=0||classLength=1||scClassIndex=0||scClassLength=7]/component/member[Class=QScreen_Content_Product_Records||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Filtered_40||scClass=VLayout||index=0||length=4||classIndex=0||classLength=1||scClassIndex=0||scClassLength=4]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Filtered_Content_Selector_w_Bi||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/expansionLayout[Class=VLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Record_Home||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Related_Objects||scClass=VLayout||index=2||length=3||classIndex=0||classLength=1||scClassIndex=2||scClassLength=3]/body/layoutBody/member[Class=QScreen_Documents_1||scClass=VLayout||index=0||length=2||classIndex=0||classLength=1||scClassIndex=0||scClassLength=2]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Record_Related_Product_Recor||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/header/headerButton[fieldName=itemRef]/'
                    );

                    if (!table2) {
                        cy.log('❌ Second table element not found.');
                        return;
                    }

                    let rows2 = table2.querySelectorAll('tbody tr');
                    resultObject2.rowCount = rows2.length;

                    let extractedValues = [];

                    toCompareInDocuments.forEach((index) => {
                        let row = rows2[index];
                        if (row) {
                            let cols = row.querySelectorAll('td');
                            if (cols.length > 1) {
                                extractedValues.push(cols[1].innerText.trim());
                            }
                        }
                    });

                    cy.log('Original Last Value Array: ' + JSON.stringify(lastValueArray));
                    cy.log('Extracted Values:' + JSON.stringify(extractedValues));

                    lastValueArray.sort();
                    extractedValues.sort();

                    cy.log('Sorted Last Value Array: ' + JSON.stringify(lastValueArray));
                    cy.log('Sorted Extracted Values: ' + JSON.stringify(extractedValues));

                    for (let i = 0; i < lastValueArray.length; i++) {
                        cy.wrap(lastValueArray[i]).should('equal', extractedValues[i]);
                    }
                });
            } else {
                cy.log('UIRows object is empty.');
            }
        });
        GQ.logout();
    });
});


