// ***********************************************
require('cypress-xpath');
Cypress.Commands.add('getSc', (selector, options = {}) => {
    return cy.xpath(selector, options);
});

// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --


import addContext from 'mochawesome/addContext';
const { platform } = require('os');
import { compareCsvFiles } from './utils/compareCsvFiles';
import dayjs from 'dayjs';

Cypress.Commands.add('compareCsvFiles', (params) => {
    return compareCsvFiles(params); // Do not treat it as chained
});
Cypress.Commands.add('addContext', (context) => {
    cy.once('test:after:run', (test) => addContext({ test }, context))
});


Cypress.Commands.add('GQLogin', (role) => {
    cy.viewport(Cypress.env('windowWidth'), Cypress.env('windowHeight'))
    // cy.visit(Cypress.env('pre-qaURL'));
    cy.visit(Cypress.env(Cypress.env('ApplicationURL')));
    // cy.visit('http://im360qa.jnj.com:9080/globalq')
    enterCredentials(role);
    cy.getSC(
        '//autoID[Class=QCustomerIntroPage||scClass=VLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=Canvas||index=1||length=2||classIndex=1||classLength=2]/child[Class=LoginWindow||scClass=Window||index=1||length=5||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1||roleIndex=0||roleLength=1||title=Log%20in%20Required||scRole=dialog]/item[0][Class="DynamicForm"]/item[title=Submit||index=3||Class=ButtonItem]/button/'
    ).click();
    // Wait for the page redirect to complete before continuing with the test
    cy.location('hash', { timeout: Cypress.env('loadMainPageWithin') }).should('not.eq', '');

    cy.getSC('//QDiagram[ID=\"isc_QDiagram_0\"]]/');
})


Cypress.Commands.add('GQLoginAndOpenPlanet', (planetName, role) => {
    cy.viewport(Cypress.env('windowWidth'), Cypress.env('windowHeight'))
    cy.visit(Cypress.env('ApplicationURL'));
    enterCredentials(role);
    cy.getSC(
        '//autoID[Class=QCustomerIntroPage||scClass=VLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=Canvas||index=1||length=2||classIndex=1||classLength=2]/child[Class=LoginWindow||scClass=Window||index=1||length=5||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1||roleIndex=0||roleLength=1||title=Log%20in%20Required||scRole=dialog]/item[0][Class="DynamicForm"]/item[title=Submit||index=3||Class=ButtonItem]/button/'
    ).click();
    // Wait for the page redirect to complete before continuing with the test
    cy.location('hash', { timeout: Cypress.env('loadMainPageWithin') }).should('not.eq', '');
    cy.getSC('//QDiagram[ID=\"isc_QDiagram_0\"]]/');

    // cy.wait(1000); // wait for the animation to complete

    cy.readFile('Robot.js').then((fileContent) => {
        cy.log(fileContent)
        cy.window().then((win) => {
            const script = win.document.createElement('script');
            script.textContent = fileContent;
            win.document.body.appendChild(script);
        });
    });
    // cy.window().then(win => {
    //     const scr = win.document.createElement("script");
    //     scr.src = 'https://unpkg.com/gojs@2.3.16/extensions/Robot.js';
    //     // cy.log(scr)
    //     win.document.body.appendChild(scr);
    // })
    let goDiagram = null;
    let goRobot = null;
    cy.window().should("have.property", "Robot")
    cy.window().then(win => {
        goDiagram = win.isc_QDiagram_0.goDelegate.goDiagram;
        goRobot = new win.Robot(goDiagram);
    })
    cy.window().then(win => {

        var nodes = goDiagram.findNodesByExample({ itemName: planetName });
        expect(nodes.count).to.equal(1);

        nodes.each((node) => {
            const loc = node.actualBounds.center;
            goRobot.mouseDown(loc.x, loc.y, 0);
            goRobot.mouseUp(loc.x, loc.y, 0);
        })

    })
})

function getColumnsWithType(id) {
    // Toggle Filter
    let lastIndex = id.lastIndexOf("component/");
    let firstPart = id.substring(0, lastIndex);
    let secondPart = 'component/gridBar/filterButton/'
    cy.log('I just clicked the filter')
    cy.log(firstPart + secondPart)
    cy.getSC(firstPart + secondPart).click({ force: true })
    cy.log('I just clicked the filter')
    cy.waitForSCDone()
    let tableInfo = {
        columns: [],
        types: []
    }
    cy.window().then(win => {
        win.isc.AutoTest.waitForElementClickable(id);
        let element = win.isc.AutoTest.getElement(id);
        let tableID = findNearestParentWithAttributeValue(element, 'eventproxy', 'isc_Toolbar');
        // tableInfo.columns = tableID.querySelectorAll('table > tbody > tr > td > div');

        var nonEmptyDivs_ = tableID.querySelectorAll('table > tbody > tr > td > div:not(:empty)')
        let nonEmptyDivs = []
        nonEmptyDivs_.forEach(function (div) {
            if (div.textContent.trim() !== '') {
                nonEmptyDivs.push(div)
            }
        });

        // Convert NodeList to array for sorting
        var divArray = Array.from(nonEmptyDivs);

        // Sort the divs based on their horizontal position from left to right
        divArray.sort(function (a, b) {
            var aLeft = a.getBoundingClientRect().left;
            var bLeft = b.getBoundingClientRect().left;
            return aLeft - bLeft;
        })
        tableInfo.columns = divArray;
        cy.log(JSON.stringify(tableInfo.columns))
        let formDiv = tableID.parentNode.querySelectorAll('div[eventproxy*="filterEditor"]')[0]
        tableInfo.types = formDiv.querySelectorAll('input[type="text"], span.comboBoxItemPicker, span[aria-label="Show Date Chooser"]');
    })

    return tableInfo;
}
function findNearestParentWithAttributeValue(element, attributeName, attributeValue) {
    var parent = element.parentElement;
    while (parent !== null) {
        if (parent.getAttribute(attributeName) && parent.getAttribute(attributeName).includes(attributeValue)) {
            return parent;
        }
        parent = parent.parentElement;
    }
    return null;
}

function test(id, testObject, isOnly) {
    let lastIndex = id.lastIndexOf("component/");
    let firstPart = id.substring(0, lastIndex);
    cy.waitForSCDone()
    const tableInfo = getColumnsWithType(id);
    cy.window().then(win => {
        let issue = false;
        let startNum = 0;
        if (tableInfo.columns.length > tableInfo.types.length) {
            issue = true;
        }
        if (issue) {
            startNum = 1;
        }
        for (let i = startNum; i < tableInfo.columns.length; i++) {
            if (isOnly) {
                let array = Object.keys(testObject);
                if (!array.includes(tableInfo.columns[i].textContent)) {
                    continue;
                }
            }
            if (tableInfo.columns[i].textContent == '👁') {
                continue
            } else {
                let node = tableInfo.types[i - startNum]
                if (node != null) {
                    if (node.type == 'text') {
                        let subSecondPart = 'component/filterEditor/editRowForm/item[title=' + encodeURI(tableInfo.columns[i].textContent).replace(/\//g, '%24fs%24') + ']/element'
                        cy.log('Testing ' + tableInfo.columns[i].textContent + ' as a ' + ' text box');
                        cy.log(firstPart + subSecondPart)
                        cy.testTextBox(firstPart + subSecondPart, testObject[tableInfo.columns[i].textContent])
                        cy.wait(2000)
                    } else if (node.classList.contains('comboBoxItemPicker')) {
                        cy.log('Testing ' + tableInfo.columns[i].textContent + ' as a ' + 'Dropdown');
                        let subSecondPart = 'component/filterEditor/editRowForm/item[title=' + encodeURI(tableInfo.columns[i].textContent).replace(/\//g, '%24fs%24') + ']/[icon="picker"]'
                        if (testObject[tableInfo.columns[i].textContent]) {
                            let array = testObject[tableInfo.columns[i].textContent]
                            if (typeof array[0] == 'string') {
                                cy.testDropDownByValue(firstPart + subSecondPart, testObject[tableInfo.columns[i].textContent])
                            } else {
                                cy.testDropDownByIndex(firstPart + subSecondPart, testObject[tableInfo.columns[i].textContent])
                            }
                        } else {
                            cy.testDropDownByIndex(firstPart + subSecondPart)
                        }

                        cy.wait(2000)
                    } else if (node.tagName === 'SPAN' && node.getAttribute('aria-label') === 'Show Date Chooser') {
                        cy.log('Testing ' + tableInfo.columns[i].textContent + ' as a ' + 'Date Chooser');
                        let subSecondPart = 'component/filterEditor/editRowForm/item[title=' + encodeURI(tableInfo.columns[i].textContent).replace(/\//g, '%24fs%24') + ']/[icon="picker"]'
                        cy.testDateField(firstPart + subSecondPart, testObject[tableInfo.columns[i].textContent])
                        cy.wait(2000)
                    }
                }
            }
        }
    })
}



Cypress.Commands.add('readTableByRows', (id, rowCount) => {
    let tableInfo = getColumnsWithType(id);
    // cy.log(tableInfo)
    cy.window().then(win => {
        win.isc.AutoTest.waitForElementClickable(id);
        let tableID = win.isc.AutoTest.getElement(id).parentNode;
        let rows = tableID.parentNode.querySelectorAll('[eventproxy^="isc_QSelectorScreenTree_0_body"]')[0].querySelectorAll('table > tbody > tr[role^="treeitem"]')
        for (let j = 0; j < rowCount; j++) {
            let cells = rows[j].querySelectorAll('td > div');
            for (let k = 0; k < cells.length; k++) {
                let value = tableInfo.columns[k].textContent + ' -> ' + cells[k].textContent;
                cy.log(value)
            }
        }
    })
})

Cypress.Commands.add('readTableByColAndgetHierarchy', (id, colNo) => {
    let rowCount = 30;
    let tableInfo = getColumnsWithType(id);
    // cy.log(tableInfo)
    cy.window().then(win => {
        win.isc.AutoTest.waitForElementClickable(id);
        let tableID = win.isc.AutoTest.getElement(id).parentNode;
        let rows = tableID.parentNode.querySelectorAll('[eventproxy^="isc_QSelectorScreenTree_0_body"]')[0].querySelectorAll('table > tbody > tr[role^="treeitem"]')
        let parent = null;
        let children = []
        let count = 0;
        for (let j = 0; j < rowCount; j++) {
            if (rows[j].hasAttribute('aria-owns')) {
                if (count == 0) {
                    let cells = rows[j].querySelectorAll('td > div');
                    parent = cells[colNo].textContent
                }
                count++;
            } else if (count == 1) {
                let cells = rows[j].querySelectorAll('td > div');
                children.push(cells[colNo].textContent)
            } else {
                break;
            }
        }
        let result = {}
        result[parent] = children;
        return cy.wrap(result);
    })
})

Cypress.Commands.add('readTableByCol', (id, colNo) => {
    let rowCount = 30;
    let tableInfo = getColumnsWithType(id);
    cy.log(tableInfo)
    cy.window().then(win => {
        win.isc.AutoTest.waitForElementClickable(id);
        let tableID = win.isc.AutoTest.getElement(id).parentNode;
        let rows = tableID.parentNode.querySelectorAll('[eventproxy^="isc_QSelectorScreenTree_0_body"]')[0].querySelectorAll('table > tbody > tr[role^="treeitem"]')
        cy.log(rows.length)
        for (let j = 0; j < rowCount; j++) {
            let cells = rows[j].querySelectorAll('td > div');
            let value = tableInfo.columns[colNo].textContent + ' -> ' + cells[colNo].textContent;
            cy.log(value)
        }
    })
})

Cypress.Commands.add('getColumnsAndTypes', (id) => {
    return cy.wrap(getColumnsWithType(id))
})

Cypress.Commands.add('autoTestAll', (id, testObject) => {
    test(id, testObject, false)
})

Cypress.Commands.add('autoTestOnly', (id, testObject) => {
    test(id, testObject, true)
})

Cypress.Commands.add('testTextBox', (id, textArray) => {
    if (textArray == null) {
        textArray = ['A', '%', "_"]
    }
    for (let i = 0; i < textArray.length; i++) {
        cy.getSC(id).clear({ force: true }).type(textArray[i] + '{enter}')
    }
    cy.getSC(id).clear({ force: true }).type('{enter}')
})

Cypress.Commands.add('testDropDownByIndex', (id, idArray) => {
    cy.getSC(id).click()
    cy.window().then(win => {
        let rowCountString = id.replace('/[icon="picker"]', '/pickList/body')
        let rowCount = win.isc.AutoTest.getElement(rowCountString).querySelectorAll('tr').length;
        if (!idArray) {
            if (rowCount == 1 || rowCount == 2 || rowCount == 3) {
                for (let i = 0; i < rowCount; i++) {
                    let subString = rowCountString + '/row[' + i + ']/col[isCheckboxField=true||0]/valueicon';
                    cy.log(subString)
                    cy.getSC(subString).click({ force: true })
                    cy.wait(100)
                    cy.getSC(subString).click({ force: true })
                }
            } else if (rowCount > 4) {
                let selectedRows = [];
                while (selectedRows.length < 3) {
                    let randomRow = Math.floor(Math.random() * rowCount);
                    if (!selectedRows.includes(randomRow)) {
                        selectedRows.push(randomRow);
                    }
                }
                selectedRows.forEach(row => {
                    let subString = rowCountString + '/row[' + row + ']/col[isCheckboxField=true||0]/valueicon';
                    cy.log('Going to click -> ' + row)
                    cy.log(subString)
                    cy.getSC(subString).click({ force: true })
                    cy.wait(100)
                    cy.getSC(subString).click({ force: true })
                });
            }

        } else {
            for (let j = 0; j < idArray.length; j++) {
                let subString = rowCountString + '/row[' + idArray[j] + ']/col[isCheckboxField=true||0]/valueicon';
                cy.getSC(subString).click({ force: true })
                cy.getSC(subString).click({ force: true })
            }
        }
    });
    let lastIndex = id.lastIndexOf("component/");
    let firstPart = id.substring(0, lastIndex);
    cy.getSC(firstPart + 'component/').click({ force: true })
})

Cypress.Commands.add('filterText', (id, text) => {
    cy.getSC(id).clear({ force: true }).type(text + '{enter}', { force: true })
})

Cypress.Commands.add('sortDescending', (id, sortID) => {
    cy.getSC(id).rightclick({ force: true })
    cy.getSC(sortID).click()
})

Cypress.Commands.add('clearAndSelectListOfValuesInDropdown', (id, valueArray) => {
    cy.getSC(id).click()
    cy.window().then(win => {
        let clear = id.replace('/[icon="picker"]', '/deselectAllButton/')
        cy.getSC(clear).click()
        let textInput = id.replace('/[icon="picker"]', '/filterForm/item[name=filter||index=0||Class=TextItem]/element')
        let rowCountString = id.replace('/[icon="picker"]', '/pickList/body')
        for (let j = 0; j < valueArray.length; j++) {
            cy.getSC(textInput).clear().type(valueArray[j] + '{enter}')
            let subString = rowCountString + '/row[0]/col[isCheckboxField=true||0]/valueicon';
            cy.getSC(subString).click()
        }
    });
    let lastIndex = id.lastIndexOf("component/");
    let firstPart = id.substring(0, lastIndex);
    cy.getSC(firstPart + 'component/').click()
})

Cypress.Commands.add('selectListOfValuesInDropdown', (id, valueArray) => {
    cy.getSC(id).click()
    cy.window().then(win => {
        let textInput = id.replace('/[icon="picker"]', '/filterForm/item[name=filter||index=0||Class=TextItem]/element')
        let rowCountString = id.replace('/[icon="picker"]', '/pickList/body')
        for (let j = 0; j < valueArray.length; j++) {
            cy.getSC(textInput).clear().type(valueArray[j] + '{enter}')
            let subString = rowCountString + '/row[0]/col[isCheckboxField=true||0]/valueicon';
            cy.getSC(subString).click()
        }
    });
    let lastIndex = id.lastIndexOf("component/");
    let firstPart = id.substring(0, lastIndex);
    cy.getSC(firstPart + 'component/').click()
})

Cypress.Commands.add('selectIndicesInDropdown', (id, idArray) => {
    cy.getSC(id).click({ force: true })
    cy.window().then(win => {
        let rowCountString = id.replace('/[icon="picker"]', '/pickList/body')
        for (let j = 0; j < idArray.length; j++) {
            let subString = rowCountString + '/row[' + idArray[j] + ']/col[isCheckboxField=true||0]/valueicon';
            cy.getSC(subString).click({ force: true })
        }
    });
    let lastIndex = id.lastIndexOf("component/");
    let firstPart = id.substring(0, lastIndex);
    cy.getSC(firstPart + 'component/').click({ force: true })
})

Cypress.Commands.add('testDropDownByValue', (id, valueArray) => {
    cy.getSC(id).click()
    cy.window().then(win => {
        let textInput = id.replace('/[icon="picker"]', '/filterForm/item[name=filter||index=0||Class=TextItem]/element')
        let rowCountString = id.replace('/[icon="picker"]', '/pickList/body')
        for (let j = 0; j < valueArray.length; j++) {
            cy.getSC(textInput).clear().type(valueArray[j] + '{enter}')
            let subString = rowCountString + '/row[0]/col[isCheckboxField=true||0]/valueicon';
            cy.getSC(subString).click()
            cy.getSC(subString).click()
        }
    });
    let lastIndex = id.lastIndexOf("component/");
    let firstPart = id.substring(0, lastIndex);
    cy.getSC(firstPart + 'component/').click()
})

Cypress.Commands.add('testDateField', (id, array) => {
    cy.getSC(id).click()
    let fromDate = id.replace('/[icon="picker"]', '/rangeDialog/rangeForm/item[index=0]/dateRangeForm/item[title=From]/editor/item[index=0]/element')
    let toDate = id.replace('/[icon="picker"]', '/rangeDialog/rangeForm/item[index=0]/dateRangeForm/item[title=To]/editor/item[index=0]/element')
    let okayButton = id.replace('/[icon="picker"]', '/rangeDialog/okButton/')
    if (array) {
        cy.getSC(fromDate).type(array[0])
        cy.getSC(toDate).type(array[1])
    } else {
        cy.getSC(fromDate).type('01/01/2024 00:00')
        cy.getSC(toDate).type('04/01/2024 00:00')
    }
    cy.getSC(okayButton).click()
    cy.wait(2000)
    cy.getSC(id).click()
    cy.getSC(fromDate).clear()
    cy.getSC(toDate).clear()
    cy.getSC(okayButton).click()
})



function enterCredentials(role) {
    if (role != undefined) {
        let users = Cypress.env('users');
        let username;
        let password;
        users.map((obj => {
            if (obj.role == role) {
                username = obj.username;
                password = obj.password;
            }
        }))
        cy.getSC(
            '//autoID[Class=QCustomerIntroPage||scClass=VLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=Canvas||index=1||length=2||classIndex=1||classLength=2]/child[Class=LoginWindow||scClass=Window||index=1||length=5||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1||roleIndex=0||roleLength=1||title=Log%20in%20Required||scRole=dialog]/item[0][Class="DynamicForm"]/item[name=username||title=Username||index=1||Class=TextItem]/element'
        ).type(username);
        cy.getSC(
            '//autoID[Class=QCustomerIntroPage||scClass=VLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=Canvas||index=1||length=2||classIndex=1||classLength=2]/child[Class=LoginWindow||scClass=Window||index=1||length=5||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1||roleIndex=0||roleLength=1||title=Log%20in%20Required||scRole=dialog]/item[0][Class="DynamicForm"]/item[name=password||title=Password||index=2||Class=PasswordItem]/element'
        ).type(password);
    } else {
        cy.getSC(
            '//autoID[Class=QCustomerIntroPage||scClass=VLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=Canvas||index=1||length=2||classIndex=1||classLength=2]/child[Class=LoginWindow||scClass=Window||index=1||length=5||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1||roleIndex=0||roleLength=1||title=Log%20in%20Required||scRole=dialog]/item[0][Class="DynamicForm"]/item[name=username||title=Username||index=1||Class=TextItem]/element'
        ).type(Cypress.env('username'));
        cy.getSC(
            '//autoID[Class=QCustomerIntroPage||scClass=VLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=Canvas||index=1||length=2||classIndex=1||classLength=2]/child[Class=LoginWindow||scClass=Window||index=1||length=5||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1||roleIndex=0||roleLength=1||title=Log%20in%20Required||scRole=dialog]/item[0][Class="DynamicForm"]/item[name=password||title=Password||index=2||Class=PasswordItem]/element'
        ).type(Cypress.env('password'), { log: false });
    }
}

// Cypress.Commands.add('LGFinishLoading', (xpath, lgname, time) => {
//     return cy.window().then((win) => {
//         let check = true;
//         while (check) {
//             let changedNum;
//             cy.xpath(xpath)
//                 .invoke('text')
//                 .then((text) => {
//                     changedNum = text.split(' ')[0];
//                 });
//             if (changedNum == NaN) {
//                 cy.log(changedNum);
//             } else {
//                 const currentTIme = Date.now() - time;
//                 cy.log(`${lgname} records loaded in ${currentTIme}`)
//                 check = false
//             }
//         }
//     });
// })
Cypress.Commands.add('getTime', () => {
    const currentTime = Date.now() - Date.parse(Cypress.env('timeVariable'));
    return cy.wrap(currentTime, { log: false });
})

Cypress.Commands.add('getFinalTime', () => {
    const currentTime = Date.now() - Date.parse(Cypress.env('startTime'));
    return cy.wrap(currentTime, { log: false });
})

Cypress.Commands.add('getCurrentTime', () => {
    return cy.wrap(Date.now(), { log: false });
})

Cypress.Commands.add('RegExAssertion', (xpath, regex) => {
    cy.xpath(xpath).should(($td) => {
        const text = $td.text();
        expect(text).to.match(regex);
    });
})


// Helper to log RPC transactions with standard config
Cypress.Commands.add('GQenableSC_RPCTimeout', () => {

    cy.enableSC_RPCTimeout(
        Cypress.env('rpcLogThreshold'),
        Cypress.env('rpcTimeoutThreshold'),
        {
            logDetail: Cypress.env('rpcLogDetail'),
        }
    );

});

require('cy-verify-downloads').addCustomCommand();

Cypress.Commands.add('clickIfExists', (id) => {
    cy.window().then(win => {

        let exists = win.isc.AutoTest.isElementClickable(id)
        if (exists) {
            cy.log('I am clicking the element as it is available')
            cy.getSC(id).click()
        } else {
            cy.log('I am not clicking as element is not available')
        }

    })
});


Cypress.Commands.add('waitUntilElementVisible', (selector) => {
    cy.waitForSCDone()
    function waitUntilVisible(id) {
        try {
            cy.getSC(id).should('be.visible');
        } catch {
            cy.wait(1000);
            waitUntilVisible()
        }
    }
    waitUntilVisible(selector);
});



Cypress.Commands.add('testLazyCount', (id) => {

    cy.getSC(id).invoke('text').should('include', '150+ items');
    cy.getSC(id).click()
    cy.wait(5000)
    // Cypress.config('defaultCommandTimeout', 20000);
    cy.getSC(id).invoke('text').should('not.include', '[calculating]');
    // Cypress.config('defaultCommandTimeout', 4000);
});
Cypress.Commands.add('getRowCount', (id) => {
    cy.getSC(id).invoke('text').should('not.include', '[calculating]');
    cy.getSC(id).invoke('text').then(
        (texts) => {
            let text = texts.replaceAll(",", "")
            cy.log(text.substring(0, text.length - 6))
            return cy.wrap(text.substring(0, text.length - 6), { log: false });
        }
    )
    // Cypress.config('defaultCommandTimeout', 4000);
});

Cypress.Commands.add('waitForRowCount', (id) => {
    cy.getSC(id).invoke('text').should('not.include', '[calculating]');
});

Cypress.Commands.add('waitForUpdatedRowCount', (id) => {
    cy.getSC(id).invoke('text').should('not.equal', '1 item');
});

Cypress.Commands.add('getRowPosition', (id) => {
    cy.window().then(win => {
        cy.log(cy.wrap(win.isc.AutoTest.getElement(id).closest('tr').rowIndex))
        return cy.wrap(win.isc.AutoTest.getElement(id).closest('tr').rowIndex, { log: false });
    })
});

Cypress.Commands.add('clickPlus', (id, num) => {
    cy.wait(6000)
    cy.window().then(win => {
        win.isc.AutoTest.waitForElementClickable(id);
        let plusButton = win.isc.AutoTest.getElement(id).querySelectorAll('span')[num];
        cy.wrap(plusButton, { log: false }).click({ force: true })
    })
});

Cypress.Commands.add('clearAliasRules', (id, num) => {
    // cy.wait(6000)
    // cy.window().then(win => {
    //     win.isc.AutoTest.waitForElementClickable(id);
    //     let plusButton = win.isc.AutoTest.getElement(id).querySelectorAll('span')[num];
    //     cy.wrap(plusButton, { log: false }).click()
    // })
});


Cypress.Commands.add('uncheckDropdownUntilRowCountReach', (rowCountID, dropdownID, num) => {
    cy.wait(1000)
    cy.window().then(win => {
        let rowCount = win.isc.AutoTest.getElement(rowCountID).querySelector('table > tbody > tr > td').innerHTML.substring(0, 6).replace(',', '')
        let i = 0;
        while (Number(rowCount) > num) {
            cy.getSC(dropdownID).click()
            cy.getSC(dropdownID.replace('[icon="picker"]', 'pickList/body/row[' + i + ']/col[isCheckboxField=true||0]/valueicon')).click()
            cy.getSC(rowCountID).click()
            cy.waitForRowCount(rowCountID)
            rowCount = win.isc.AutoTest.getElement(rowCountID).querySelector('table > tbody > tr > td').innerHTML.substring(0, 6).replace(',', '')
            i++;
        }
    })
});


Cypress.Commands.add('openPlanet', (name) => {
    // Wait for the page redirect to complete before continuing with the test
    cy.location('hash', { timeout: Cypress.env('loadMainPageWithin') }).should('not.eq', '');

    cy.getSC('//QDiagram[ID=\"isc_QDiagram_0\"]]/');
    cy.wait(1000)
    // cy.window().then(win => {
    //     const scr = win.document.createElement("script");
    //     scr.src = "https://unpkg.com/gojs@2.3.16/extensions/Robot.js";
    //     win.document.body.appendChild(scr);
    // })
    cy.readFile('Robot.js').then((fileContent) => {
        cy.log(fileContent)
        cy.window().then((win) => {
            const script = win.document.createElement('script');
            script.textContent = fileContent;
            win.document.body.appendChild(script);
        });
    });

    let goDiagram = null;
    let goRobot = null;
    cy.window().should("have.property", "Robot")
    cy.window().then(win => {
        goDiagram = win.isc_QDiagram_0.goDelegate.goDiagram;
        goRobot = new win.Robot(goDiagram);
    })
    cy.window().then(win => {

        var nodes = goDiagram.findNodesByExample({ itemName: name });
        expect(nodes.count).to.equal(1);


        nodes.each((node) => {
            const loc = node.actualBounds.center;
            goRobot.mouseDown(loc.x, loc.y, 0);
            goRobot.mouseUp(loc.x, loc.y, 0);
        })

    })
})


// ***********************************************
// Standard SmartClient commands from commands.js shipped with the SmartClient SDK are below
// https://smartclient.com/smartclient-latest/isomorphic/system/reference/?id=group..smartClientCypress
// ***********************************************

// This block last updated Sep 14 2023
// CUSTOMIZATIONS:
// - getSC modified to use elementWaitStyle from env.json

// getSC(): Retrieve an element in the DOM based on a SmartClient locator
// This command uses isc.AutoTest.waitForElement to ensure any asynchronous operations
// have completed before the target element is returned.
require('cypress-delete-downloads-folder').addCustomCommand();
Cypress.Commands.add('getSC', (locator, options) => {
    let logCommand = options && options.log;
    if (logCommand == null) logCommand = Cypress.config('scLogCommands');
    if (logCommand) cy.log("getSC() invoked with locator:" + locator);
    cy.getSCTimeout(options).then((scTimeout) => {

        if (options == null) options = {};
        options.timeout = scTimeout;

        // Apply the specified timeout to the cypress then() command
        // Ensure that the timeout applied to waitForElement is greater than
        // this so the test fails consistently if the timeout is exceeded
        let thenTimeout = scTimeout;
        scTimeout += 1000;
        cy.window({ log: false }).then({ timeout: thenTimeout }, (win) => {
            return new Cypress.Promise((resolve) => {

                const waitForElementCallback = (element, done) => {
                    if (!done) {
                        cy.log("AutoTest.waitForElementCallback() timed out for locator:\n" + locator);
                    }
                    // If the locator could not be resolved, element will be null
                    resolve(cy.wrap(element, { log: false }));
                }
                win.isc.AutoTest.waitForElement(locator, waitForElementCallback, options);

            });
        });
    });
});

// Timeout for SmartClient commands().
// - May be specified explicitly in the Options object or specified globally via scCommandTimeout in Cypress config
// - if not explicitly specified, will be derived from AutoTest.waitForTimeOutSeconds on the target.
Cypress.Commands.add('getSCTimeout', (options) => {
    cy.window({ log: false }).then(win => {
        return new Cypress.Promise((resolve) => {
            const scTimeout = ((options != null && options.timeout != null) ?
                options.timeout :
                (Cypress.config('scCommandTimeout') != null ?
                    Cypress.config('scCommandTimeout') :
                    (win.isc.AutoTest.waitForTimeOutSeconds * 1000)
                )
            );
            resolve(scTimeout);
        });
    });
});

Cypress.Commands.add('waitForSCDone', (options) => {
    return cy.window().then((win) => {
        return new Cypress.Promise((resolve) => {
            const myCallback = () => {
                resolve();
            };
            var includeRedraws = options && options.includeRedraws;
            win.isc.AutoTest.waitForSystemDone(myCallback, includeRedraws)
        });
    });
});


// scrollSC(): Scroll the SmartClient component
Cypress.Commands.add('scrollSC', (locator, left, top, options) => {
    return cy.window().then((win) => {
        return new Cypress.Promise((resolve) => {
            const element = cy.getSC(locator);
            let canvas = win.isc.AutoTest.locateCanvasFromDOMElement(element);
            if (canvas != null) {
                // Handle being passed percentage strings ("50%"), or pixel numbers
                // or a mix of both
                let isPercentLeft = win.isc.isA.String(left);
                let isPercentTop = win.isc.isA.String(top);
                if ((left == null || isPercentLeft) && (top == null || isPercentTop)) {
                    canvas.scrollToPercent(left, top);
                } else {
                    if (isPercentLeft) {
                        canvas.scrollToPercent(left);
                        canvas.scrollTo(null, top);
                    } else if (isPercentTop) {
                        canvas.scrollToPercent(null, top);
                        canvas.scrollTo(left);
                    } else {
                        canvas.scrollTo(left, top);
                    }
                }
            }
            resolve(element);
        });
    });
});


// enableSC_RPCTimeout(): Invoked once per page load to log details of slow SmartClient RPC transactions
// If a timeoutThreshold is specified, any transactions which exceed that threshold will cause the test to fail
// The command does the following:
// - It first enables tracking of RPC timing data and then adds a processingCompleteCallback to
//   fire for every SmartClient RPC transaction.</li>
// - The processingCompleteCallback we define will compare the elapsed time for the transaction with
//   the specified thresholds for logging or failure.</li>
// - If either is exceeded it uses a cypress EventEmitter to emit a new cypress event - either "logData" or "failTest"
// - Then the logic to handle those events will do the appropriate thing - log the transaction
//   timing tree to the console or run an assertion comparing the elapsed time to the failure threshold,
//   causing the test to fail.
Cypress.Commands.add('enableSC_RPCTimeout', (logThreshold, timeoutThreshold, options = {}) => {

    if (logThreshold == null) logThreshold = 1000;

    var events = require('events');
    var myEmitter = new events.EventEmitter();

    var undef;

    let action = options.rpcAction || "Complete client-server roundtrip";
    let logDetail = options.logDetail || "detailed";
    let logSuccess = options.logSuccess == undef ? false : options.logSuccess;
    let failOnInvalidTimings = options.failOnInvalidTimings == undef ? true : options.failOnInvalidTimings
    let includeClientTimings = options.includeClientTimings == undef ? true : options.includeClientTimings;
    let includeServerTimings = options.includeServerTimings != undef ? true : options.includeServerTimings;
    return cy.window().then((win) => {

        // If run against a version of SmartClient that doesn't support the necessary APIs warn and return
        if (win.isc.RPCManager.getTransactionDescription == null) {
            cy.log("Unable to track timing data on this version of SmartClient: " + win.isc.version);
            return;
        }

        win.isc.RPCManager.setTimingDataEnabled(true);
        win.isc.RPCManager.addProcessingCompleteCallback(function (transactionNum) {

            // Summary of the transaction (for logging purposes)
            let transactionName = win.isc.RPCManager.getTransactionDescription(transactionNum);

            win.isc.RPCManager.getTimingData(transactionNum, function (timingTree) {

                const transactionNode = timingTree.find(action);
                const elapsed = transactionNode == null ? 0 : transactionNode.elapsed;

                let failTest = false;

                if (failOnInvalidTimings && elapsed <= 0) {
                    myEmitter.emit("logData", {
                        transaction: transactionName,
                        elapsed: elapsed,
                        message: "ERROR: Elapsed time was 0 or negative - indicates a problem with " +
                            "the test or with gathering timing data"
                    });
                    failTest = true;

                } else if (elapsed >= logThreshold) {
                    var maxDepth = 1;  // logDetail = "none" - top-level only
                    if (logDetail == "summary") {
                        maxDepth = 2;
                    } else if (logDetail == "detailed") {
                        maxDepth = 5;
                    } else if (logDetail == "all") {
                        maxDepth = undef;
                    }
                    const formattedTree = win.isc.RPCManager.getFormattedTimingData(transactionNum, null, null,
                        includeClientTimings, includeServerTimings, maxDepth);

                    myEmitter.emit("logData", {
                        transaction: transactionName,
                        elapsed: elapsed,
                        message: "RPC Request exceeded " + logThreshold + "ms:\n" + formattedTree
                    });
                } else if (logSuccess) {
                    myEmitter.emit("logData", {
                        transaction: transactionName,
                        message: "Processing complete callback fired; transaction time was " +
                            "below the error threshold (" + elapsed + "ms)"
                    });
                }

                if (timeoutThreshold != null && elapsed > timeoutThreshold) {
                    // We are logging separately from the function that fails the test by
                    // throwing an error, because the log step never happens if the containing
                    // function fails
                    var msg = "ERROR: Elapsed time (" + elapsed + "ms) was " +
                        "greater than the allowed timeout (" + timeoutThreshold +
                        "ms). Failing this test - see the previously " +
                        "logged timing metrics for more information";
                    myEmitter.emit("logData", {
                        transaction: transactionName,
                        message: msg
                    });
                    failTest = true;
                }
                if (failTest) {
                    myEmitter.emit("failTest", {
                        elapsed: elapsed
                    });
                }

            })
        });
    }).then(() => {
        // Listen to the event and handle Cypress commands outside of the callback
        myEmitter.on("logData", data => {
            let msg = data.transaction + "\n" + data.message;
            cy.log(msg);
            if (!Cypress.config('isInteractive')) {
                cy.task("log", msg);
            }
        });

        myEmitter.on("failTest", data => {
            // Run the wrap() on a timeout of 0 to prevent it from retrying - there's
            // no point because neither "elapsed" not "timeoutThreshold" is going
            // to change
            // no need to log the wrap
            if (failOnInvalidTimings) cy.wrap(data.elapsed, { timeout: 0, log: false }).should("be.greaterThan", 0);
            if (timeoutThreshold != null) cy.wrap(data.elapsed, { timeout: 0, log: false }).should("be.lessThan", timeoutThreshold);
        });

    });
});



Cypress.Commands.add('addTimestampInBanner', (id) => {
    cy.window().then((win) => {
        const timestamp = new Date().toLocaleString();
        const targetElement = win.document.evaluate('(//td[@class="label"])[1]', win.document, null, win.XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        if (targetElement) {
            targetElement.innerHTML = `PQM<sub>360</sub> Workcenter   &emsp;&emsp; &emsp;&emsp; | &emsp;&emsp;   Timestamp: ${timestamp}`;
        }
    });
});


Cypress.Commands.add('removeTimestampInBanner', (id) => {
    cy.window().then((win) => {
        const targetElement = win.document.evaluate('(//td[@class="label"])[1]', win.document, null, win.XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        if (targetElement) {
            targetElement.innerHTML = `PQM<sub>360</sub> Workcenter`;
        }
    });
});

Cypress.Commands.add('stopTimerAndLog', (expectedTime, content, number) => {
    // cy.waitForSCDone();
    cy.getTime().then((time) => {
        cy.addTimestampInBanner()
        cy.screenshot({ capture: 'runner' })
        cy.removeTimestampInBanner()
        if (number == 0) {
            cy.addTestContext('screenshots/' + Cypress.currentTest.title + '.cy.js/' + Cypress.currentTest.titlePath[0] + ' -- ' + Cypress.currentTest.title + '.png')
        } else {
            cy.addTestContext('screenshots/' + Cypress.currentTest.title + '.cy.js/' + Cypress.currentTest.titlePath[0] + ' -- ' + Cypress.currentTest.title + ' (' + number + ').png')
        }
        if (time < expectedTime) {
            cy.logAndReport('PASSED ' + '| This step has taken less than ' + expectedTime / 1000 + ' seconds');
        } else {
            cy.logAndReport('FAILED' + '| This step has taken more than ' + expectedTime / 1000 + ' seconds');
        }
        // cy.logAndReport(content + ' -> ' + time / 1000 + ' seconds')
        const maxLength = 120;
        // Check if content length is greater than maxLength
        if (content.length > maxLength) {
            // Split the content into lines with a maximum length of maxLength at word boundaries
            const words = content.split(/\s+/);
            let currentLine = '';

            for (const word of words) {
                if ((currentLine + word).length <= maxLength) {
                    // Add the word to the current line without exceeding maxLength
                    currentLine += (currentLine === '' ? '' : ' ') + word;
                } else {
                    // Print the current line and start a new line with the current word
                    cy.logAndReport(currentLine);
                    currentLine = word;
                }
            }

            // Print the last line with the time information
            cy.logAndReport(currentLine + ' -> ' + (time / 1000) + ' seconds');
        } else {
            // Print the content on a single line with the time information
            cy.logAndReport(content + ' -> ' + time / 1000 + ' seconds');
        }
    })
});

Cypress.Commands.add('logAndReport', (content) => {
    cy.addTestContext(content)
    cy.log(content)
});

Cypress.Commands.add('resetTimer_', () => {
    cy.getCurrentTime().then((time) => {
        Cypress.env('timeVariable', new Date(time))
    })
});

Cypress.Commands.add('startTimer', (content, number) => {
    cy.waitForSCDone();
    cy.addTimestampInBanner()
    cy.screenshot({ capture: 'runner' })
    cy.removeTimestampInBanner()
    if (number == 0) {
        cy.addTestContext('screenshots/' + Cypress.currentTest.title + '.cy.js/' + Cypress.currentTest.titlePath[0] + ' -- ' + Cypress.currentTest.title + '.png')
    } else {
        cy.addTestContext('screenshots/' + Cypress.currentTest.title + '.cy.js/' + Cypress.currentTest.titlePath[0] + ' -- ' + Cypress.currentTest.title + ' (' + number + ').png')
    }
    cy.logAndReport('Before ' + content)
    cy.resetTimer_()
});

Cypress.Commands.add('addTimestampInLoginBanner', (id) => {
    cy.window().then((win) => {
        const timestamp = new Date().toLocaleString();
        const targetElement = win.document.evaluate('(//td[@class="normal"])[1]', win.document, null, win.XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        if (targetElement) {
            targetElement.innerHTML = `Janssen - PQM<sub>360</sub> Workcenter   &emsp;&emsp; &emsp;&emsp; | &emsp;&emsp;   Timestamp: ${timestamp}`;
            targetElement.style.color = "white";
        }
    });
});

Cypress.Commands.add('logTestCompletion', (id) => {
    // Log total Time Taken
    cy.getFinalTime().then((time) => {
        cy.addTestContext('Total Time Taken -> ' + time / 1000 + ' seconds')
        cy.log('Total Time Taken -> ' + time / 1000 + ' seconds')
    })
    // Test Completed at
    cy.getCurrentTime().then((time) => {
        cy.addTestContext('Test Completed at -> ' + new Date(time))
        cy.log('Test Completed at -> ' + new Date(time))
    })
});

Cypress.Commands.add('filterTextField', (id, text) => {
    cy.getSC(
        id
    ).click()
    cy.getSC(
        id
    ).clear().type(text + '{enter}')
})

Cypress.Commands.add('getRows', (id, array) => {
    let lastIndex = id.lastIndexOf("component/");
    let firstPart = id.substring(0, lastIndex);
    let secondPart = 'component/body'
    let resultObject = {
        rowCount: null,
        rowResults: {}
    }
    cy.window().then((win) => {
        let table = win.isc.AutoTest.getElement(firstPart + secondPart)
        let rows = table.querySelectorAll('tbody tr')
        resultObject.rowCount = rows.length
        // let rowArray = []
        for (let i = 0; i < array.length; i++) {
            let row = rows[array[i]]
            let cells = row.querySelectorAll('td div')
            let cellResults = []
            for (let j = 0; j < cells.length; j++) {
                let cell = cells[j]
                cellResults.push(cell.textContent)
            }
            resultObject.rowResults[array[i]] = cellResults
        }
        // resultObject.rowResults = rowArray
    });
    return cy.wrap(resultObject);
})

Cypress.Commands.add('expectToBeReadOnly', (id) => {
    cy.window().then((win) => {
        let element = win.isc.AutoTest.getElement(id)
        cy.wrap(element.classList.contains('staticTextItem')).should('be.true')
    })
})
Cypress.Commands.add('getMenuItems', (locator) => {
    cy.window().then(win => {
        let array = locator.split('/body')
        let actualLocator = array[0] + '/body'
        let menu = win.isc.AutoTest.getElement(actualLocator)
        let items = []
        let listOfItems = menu.querySelectorAll('tr td div')
        for (let i = 0; i < listOfItems.length; i++) {
            items.push(listOfItems[i].textContent)
        }
        return cy.wrap(items)
    })
})
Cypress.Commands.add('pressEscape', () => {
    cy.wait(200)
    cy.get('body').trigger('keydown', { keyCode: 27 });
    cy.wait(200);
    cy.get('body').trigger('keyup', { keyCode: 27 });
})


Cypress.Commands.add('getPlanetNames', () => {
    let planetNames = []
    // cy.window().then(win => {
    //     const scr = win.document.createElement("script");
    //     scr.src = "https://unpkg.com/gojs@2.3.16/extensions/Robot.js";
    //     win.document.body.appendChild(scr);
    // })
    cy.readFile('Robot.js').then((fileContent) => {
        cy.log(fileContent)
        cy.window().then((win) => {
            const script = win.document.createElement('script');
            script.textContent = fileContent;
            win.document.body.appendChild(script);
        });
    });
    cy.window().should("have.property", "Robot")
    cy.window().then(win => {
        let goDiagram = null;
        let goRobot = null;
        goDiagram = win.isc_QDiagram_0.goDelegate.goDiagram;
        goRobot = new win.Robot(goDiagram);
        let iterator = goDiagram.nodes.iterator
        iterator.each(item => {
            planetNames.push(item.Ci)
            // console.log()   
        })
    })
    return cy.wrap(planetNames)
})
Cypress.Commands.add('verifyTabsavailable', (expectedTabs) => {
    cy.get('div[class="QGridBarForBootStrapScreen"]>div').within(() => {
        let availableNouns = []
        cy.get('div[class="QGridBar"]>div>div:visible').each(($el) => {
            cy.wrap($el).invoke('text').then((nounData) => {
                availableNouns.push(nounData.trim())
            })
            cy.wrap($el).click()
        })
        for (let i = 0; i < expectedTabs.length; i++) {
            cy.wrap(availableNouns).should('include', expectedTabs[i])
        }
    })
})

Cypress.Commands.add('checkForHeartBeatExceptionFor', (rowCountof) => {
    let errorFound = false;
    function processBatch(startIndex, endIndex, totalRecords) {
        cy.wrap(null).then(() => {
            Cypress._.range(startIndex, endIndex).forEach((index) => {
                if (errorFound) return;
                cy.get('div[style="overflow:hidden;;white-space:nowrap;text-overflow:ellipsis;WIDTH:27px;"]').eq(index).click();
                cy.wait(8000)
                cy.get('body').then($body => {
                    if ($body.find('iframe').length > 0) {
                        cy.get('iframe').its('0.contentDocument.body').should('be.visible').then(cy.wrap).then($iframeBody => {
                            if ($iframeBody.text().includes('HeartbeatException')) {
                                cy.log(`HeartbeatException found inside iframe`);
                                errorFound = true;
                                throw new Error(`Error found on row ${index + 1}`);
                            }
                        });
                    }
                })
                cy.get('span[style*="ListGrid/row_expanded.svg"]').click()
            });
            // Scroll every 50 rows
            if (endIndex < totalRecords) {
                cy.get('div[style="overflow:hidden;;white-space:nowrap;text-overflow:ellipsis;WIDTH:345px;"]').eq(startIndex).click().type('{downArrow}'.repeat(61));
                cy.wait(500);
                cy.then(() => processBatch(endIndex + 1, endIndex + 40, totalRecords));
            } else {
                cy.log(`All ${totalRecords} rows tested successfully.`);
            }
        });
    }
    // Start processing in batches
    cy.wrap(null).then(() => processBatch(0, 40, rowCountof));
})

Cypress.Commands.add('filterTheBookmarked', (text) => {
    cy.getSC(
        '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_User_Bookmark||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_User_Bookmark_Selector||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/gridBar/filterButton/icon'
    ).click()

    cy.getSC(
        '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_User_Bookmark||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_User_Bookmark_Selector||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/filterEditor/editRowForm/item[name=itemName||title=Name||index=0||Class=TextItem]/element'
    ).clear().type(text).type('{enter}')

    cy.getSC(
        '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_User_Bookmark||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_User_Bookmark_Selector||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/body/row[0]/col[fieldName=itemName||0]'
    ).click()
})

Cypress.Commands.add('processBatch', (startIndex, endIndex) => {
    let errorFound = false;
    cy.wrap(null).then(() => {
        Cypress._.range(startIndex, endIndex).forEach((index) => {
            if (errorFound) return;
            cy.log(`Checking row of ${index}`);
            cy.get(`tr[aria-posinset="${index}"]>td>div>span[style*="ListGrid/row_collapsed.svg"]`).click({ force: true });
            cy.wait(8000);
            cy.get('body').then($body => {
                if ($body.find('iframe').length > 0) {
                    cy.get('iframe').its('0.contentDocument.body').should('be.visible').then(cy.wrap).then($iframeBody => {
                        if ($iframeBody.text().includes('HeartbeatException')) {
                            cy.log(`HeartbeatException found inside iframe`);
                            errorFound = true;
                            throw new Error(`Error found on row ${index + 1}`);
                        }
                    });
                }
            });
            cy.get('span[style*="ListGrid/row_expanded.svg"]').click({ force: true });
        });
    });
});

// addColumn
Cypress.Commands.add('addColumn', (columnHeader, columnNames) => {
    cy.getSC(columnHeader).rightclick()
    cy.contains('Columns...').click({ force: true })
    columnNames.forEach((columnName) => {
        cy.get('div[eventproxy*="availableView"][class="normal"]').within(() => {
            cy.get('input.textItemLite').clear().type(columnName + '{enter}')
        })
        cy.wait(5000)
        cy.get('div[eventproxy*="fieldPickerWindow_body"][class="windowBody"]').within(() => {
            cy.contains(columnName).click()
            cy.get('img[src*="right.png"]').click()
            cy.get('img[src*="up_first.png"]').click()
        })
    })
    cy.get('td.button').contains('Apply').click()

})

Cypress.Commands.add('aliasRuleFilter', (num, fieldName, operator, value) => {
    cy.get('div[eventproxy="isc_QFilterBuilder_0_clauseStack"][class="normal"]').within(() => {
        if (num != 0) {
            cy.get('img[src*="add.png"]').click()
            cy.get('input.selectItemLiteText').last().click().clear().type(fieldName + '{enter}')
            cy.get('div.selectItemLiteText').last().click()
            cy.contains(operator).click({ force: true })
            cy.get('input[placeholder="Enter a value"]').last().clear().type(value)
        }
        else {
            cy.get('input.selectItemLiteText').first().click().clear().type(fieldName + '{enter}')
            cy.get('div.selectItemLiteText').first().click()
            cy.contains(operator).click({ force: true })
            cy.get('input[placeholder="Enter a value"]').first().clear().type(value)
        }
    })
})

Cypress.Commands.add('aliasRuleNewFilter', (num, fieldName, value) => {
    cy.get('div[eventproxy="isc_QFilterBuilder_0_clauseStack"][class="normal"]').within(() => {
        if (num != 0) {
            cy.get('img[src*="add.png"]').click()
            cy.get('input.selectItemLiteText').last().click().clear().type(fieldName + '{enter}')
            cy.get('input[placeholder="Enter a value"]').last().clear().type(value)
        }
        else {
            cy.get('input.selectItemLiteText').first().click().clear().type(fieldName + '{enter}')
            cy.get('input[placeholder="Enter a value"]').first().clear().type(value)
        }
    })
})

Cypress.Commands.add('excelSerialToDate', (serial) => {
    const excelEpoch = new Date(1899, 11, 30);
    return [-1, 0, 1].map(offset => {
        const date = new Date(excelEpoch.getTime() + (serial + offset) * 86400000);
        return `${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')}/${date.getFullYear()}`;
    });
});

Cypress.Commands.add('decodeHtmlEntities', (str) => {
    const txt = document.createElement("textarea");
    txt.innerHTML = str;
    return txt.value;
});

Cypress.Commands.add('compareColumn', (columnName, excelVal, uiVal, rowNum) => {
    let isDateCols = ['date', 'dt', 'completed on', 'issue entered gcc', 'issue entered pqms', 'issue closed date'];
    if (isDateCols.some(k => columnName.toLowerCase().includes(k))) {
        if (!uiVal || uiVal.trim() === '' || !excelVal) {
            cy.log(`Skipping date validation at row ${rowNum}`);
        } else {
            cy.excelSerialToDate(excelVal).should('include', uiVal);
        }
    } else {
        const normalizedExcel = excelVal ? excelVal.toString().trim() : '';
        const normalizedUI = Cypress._.unescape(uiVal.toString().trim());
        cy.wrap(normalizedUI).then(ui => {
            if (normalizedExcel !== ui) {
                const msg = `Error in row ${rowNum + 1} for "${columnName}": Excel="${normalizedExcel}", UI="${ui}"`;
                cy.log(msg);
                throw new Error(msg);
            }
        });
    }
});
Cypress.Commands.add('addContext', (context) => {
    cy.once('test:after:run', (test) => addContext({ test }, context));
});

Cypress.Commands.add('collectColumnValues', (locatorTemplate) => {
    const collected = [];
    const rowCount = 20;

    return cy.wrap(null).then(() => {
        const collect = (i) => {
            if (i > rowCount) {
                return cy.wrap(collected);
            }

            const locator = locatorTemplate.replace('${i}', i);
            return cy.getSC(locator, { log: false }) // suppress logs here
                .invoke({ log: false }, 'text') // suppress invoke logs
                .then(text => {
                    collected.push(text.trim());
                })
                .then(() => collect(i + 1));
        };

        return collect(1);
    });
});


Cypress.Commands.add('compareRowData', (UIColumns, UIRows, filteredRows, columnMapping, rowNum) => {
    const uiRow = UIRows[rowNum];
    const excelRow = filteredRows[rowNum];
    const filteredUIColumns = UIColumns.map(col => col.trim()).filter(Boolean);

    filteredUIColumns.forEach((uiColumn, j) => {
        let cell = uiRow[j + 1] === '&nbsp;' ? '' : uiRow[j + 1];
        const matchedKey = Object.keys(columnMapping).find(key =>
            key.toLowerCase().replace(/[\s_]+/g, "") === uiColumn.toLowerCase().replace(/[\s_]+/g, "")
        );
        if (!matchedKey) return;
        const mappedCols = columnMapping[matchedKey];
        const excelKeys = Object.keys(excelRow).reduce((acc, key) => {
            acc[key.toLowerCase().replace(/\s+/g, "_")] = excelRow[key];
            return acc;
        }, {});
        const excelVal = mappedCols.map(col => excelKeys[col.toLowerCase().replace(/\s+/g, "_")]).find(v => v);
        cy.compareColumn(uiColumn, excelVal, cell, rowNum);
    });
});


Cypress.Commands.add('processBatchForStreamer', (startIndex, endIndex, UIColumns, filteredRows, columnMapping, config) => {
    let errorFound = false;
    if (startIndex > 0) {
        cy.get(config.rowSelector).eq(0).click().type('{downArrow}'.repeat(startIndex + config.scrollBuffer));
        cy.wait(1000);
    }
    let sampleNumbers = Cypress._.range(startIndex, endIndex + 1);
    cy.log(`Sample number : ${sampleNumbers}, start Index: ${startIndex} and End Index: ${endIndex}`)
    cy.getRows(config.dataRowXPath, sampleNumbers).then(resultObject => {
        let UIRows = resultObject.rowResults;
        sampleNumbers.forEach(index => {
            if (!errorFound) {
                cy.compareRowData(UIColumns, UIRows, filteredRows, columnMapping, index);
            }
        });
    });
});

Cypress.Commands.add('compareRowCount', (config) => {
    cy.getSC(config.rowcountxpath).click()
    cy.getRowCount(config.rowcountxpath).then((num) => {
        cy.log(num)
        expect(filteredRows.length).to.equal(Number(num))
    })
})

Cypress.Commands.add('downloadExcelFile', () => {
    cy.wait(2000)
    cy.get('img[src*="download-button.svg"]:visible').click()
    cy.get('td.selectItemPickerIcon:visible').click()
    cy.get('div[style*="overflow:hidden;;white-space:nowrap;text-overflow:ellipsis;WIDTH:25"]').contains('CSV').click()
    cy.get('td.button:visible').contains('OK').click()
})

Cypress.Commands.add('downloadxlsxFile', () => {
    cy.wait(2000)
    cy.get('img[src*="download-button.svg"]:visible').click()
    cy.get('td.selectItemPickerIcon:visible').click()
    cy.get('div[style*="overflow:hidden;;white-space:nowrap;text-overflow:ellipsis;WIDTH:25"]').contains('Excel').click()
    cy.get('td.button:visible').contains('OK').click()
    cy.getSC('//autoID[Class=VStack||index=7||length=8||classIndex=0||classLength=1]/member[Class=NotifyLabel||index=0||length=1||classIndex=0||classLength=1||title=Results.xlsx%0ADownload%20complete]/', { timeout: 200000 })
})

Cypress.Commands.add('checkforErrorPopup', () => {
    cy.wait(10000)
    cy.get('body').then((body) => {
        if (body.find('div[role="alertdialog"]').length > 0) {
            cy.get('#isc_R5 > img')
                .click({ force: true });
        }
    })
})

Cypress.Commands.add('advancedFiltering', (header, values) => {
    cy.getSC(header).rightclick()
    cy.contains('Advanced filtering...').click()
    cy.get('div[eventproxy="isc_QSelectorScreenList_0_filterWindow"]').should('be.visible').within(() => {
        cy.get('td.button').contains('Clear').click()
        cy.get('input[type="RADIO"]').parent('td').siblings('td').children('label').contains('Match Any').click()
        values.forEach((val, index) => {
            if (index === 0) {
                cy.get('input[placeholder="Enter a value"]').first().type(val)
            } else {
                cy.get('img[src*="add.png"]').click()
                cy.wait(2000)
                cy.get('input[placeholder="Enter a value"]').last().type(val)
                cy.wait(2000)
            }
        })
        cy.get('td.button').contains('Save').click()
    })
})


Cypress.Commands.add('verifyFile', (fileName) => {
    const extensionToSelectorMap = {
        'txt': '#id_viewer',
        'docx': '#id_viewer',
        'pdf': '#virtualListContainer',
        'xlsx': '#ws-canvas',
        'pptx': '#id_panel_thumbnails'
    };

    const ext = fileName.split('.').pop().toLowerCase();
    const expectedSelector = extensionToSelectorMap[ext];

    if (!expectedSelector) {
        throw new Error(`Unsupported file extension: ${ext}`);
    }
    cy.wait(8000)
    cy.get('body').then($body => {
        if ($body.find('iframe').length > 0) {
            cy.get('iframe')
                .its('0.contentDocument.body')
                .should('be.visible')
                .then(cy.wrap)
                .within(() => {
                    cy.get(expectedSelector).should('be.visible');
                });
        } else {
            throw new Error('Iframe not found in body');
        }
    });
})

Cypress.Commands.add('checkBookmarkFunctionality', () => {
    cy.getSC('//QMainPageBase[ID="MainPage"]/mainHeader/bookmark/').click()
    cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_User_Bookmark||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_User_Bookmark_Selector||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/body/row[0]/col[fieldName=creationDate||2]').invoke('text')
        .then((uiDateText) => {
            const uiDateStr = uiDateText.trim();
            const currentDateStr = dayjs().format('MM/DD/YYYY HH:mm');

            cy.log(`UI Time: ${uiDateStr}`);
            cy.log(`Current Time: ${currentDateStr}`);

            // NEW: compare as times with seconds-tolerance instead of strict string equality
            const uiTime = dayjs(uiDateStr, 'MM/DD/YYYY HH:mm');
            const nowTime = dayjs();

            // diff in seconds (uiTime will have seconds = 0 if UI shows only minutes)
            const diffInSeconds = Math.abs(uiTime.diff(nowTime, 'second'));

            // If UI time differs by more than 75 seconds, then sort — this avoids false positives caused by seconds drift.
            if (diffInSeconds > 75) {
                cy.log(`Date mismatch by ${diffInSeconds}s — sorting the table`);
                cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_User_Bookmark||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_User_Bookmark_Selector||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/header/headerButton[fieldName=creationDate]/').click();
            } else {
                cy.log('Date close enough — no need to sort');
            }
        });
    cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_User_Bookmark||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_User_Bookmark_Selector||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/body/row[0]/col[fieldName=creationDate||2]').invoke('text')
        .then((bookmarkdate) => {
            const currentDateStr = dayjs().format('MM/DD/YYYY HH:mm');

            const bookmarkTime = dayjs(bookmarkdate.trim(), 'MM/DD/YYYY HH:mm');
            const currentTime = dayjs(currentDateStr, 'MM/DD/YYYY HH:mm');
            const diffInMinutes = Math.abs(bookmarkTime.diff(currentTime, 'minute'));

            expect(diffInMinutes).to.be.lessThan(2);


            cy.getSC(
                '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_User_Bookmark||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_User_Bookmark_Selector||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/body/row[0]/col[fieldName=itemTypeName||1]'
            ).click()
            cy.getSC(
                '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_User_Bookmark||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_User_Bookmark_Selector||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/gridBar/deleteButton/icon'
            ).click()
            cy.getSC('//Dialog[ID="isc_globalWarn"]/yesButton/').click()
            cy.getSC(
                '//QMainPageBase[ID="MainPage"]/mainHeader/itemRepository/'
            ).click()
        })
})




Cypress.Commands.add('checkRelatedObjects', (actualValues) => {
    if (!Array.isArray(actualValues)) {
        actualValues = [actualValues];
    }

    cy.get('div[eventproxy*="layoutBar_controlTab"][class=normal]')
        .last()
        .within(() => {
            actualValues.forEach((value) => {
                cy.get('td.multiLayoutButtonNoLeftBorderTextSelected, td.multiLayoutButtonText')
                    .contains(value)
                    .click();
                cy.wait(2000);
                checkDataAvailability();
            });
        });

    function checkDataAvailability() {
        cy.get('body', { withinSubject: null }).then((body) => {
            // Only check if the text is visible in the DOM
            if (body.find('div:visible').filter((_, el) =>
                el.innerText.trim().toLowerCase() === 'No items to show'
            ).length > 0) {
                throw new Error('Failing Test Case because of No Data');
            }
        });

    }
});

Cypress.Commands.add('checkDataAvailablity', (actualValues) => {
    cy.get('body', { withinSubject: null }).then((body) => {
        // Only check if the text is visible in the DOM
        if (body.find('div:visible').filter((_, el) =>
            el.innerText.trim().toLowerCase() === 'No items to show'
        ).length > 0) {
            throw new Error('Failing Test Case because of No Data');
        }
    });
})

Cypress.Commands.add('validateTabsAndColumns', (planet, subNoun) => {
    cy.fixture('tabOrderData.json').then((data) => {
        const planetData = data[planet]?.[subNoun];
        expect(planetData, `No data found for ${planet} → ${subNoun}`).to.exist;

        const tabLocator = 'td.multiLayoutButtonTab, td.multiLayoutButtonTabSelected, td.multiLayoutButtonTabOver, td.multiLayoutButtonTabSelectedOver';
        const colLocator = 'td.multiLayoutButtonNoLeftBorderTextSelected, td.multiLayoutButtonText';

        const normalize = (s) => (s || '').toString().trim().toLowerCase();

        const isOrderedSubsequence = (actualArr, expectedArr) => {
            let j = 0;
            for (let i = 0; i < actualArr.length && j < expectedArr.length; i++) {
                if (normalize(actualArr[i]) === normalize(expectedArr[j])) j++;
            }
            return j === expectedArr.length;
        };

        const expectedTabs = planetData.tabs || [];
        const expectedCols = planetData.columns || [];

        cy.get(tabLocator, { timeout: 15000 })
            .filter(':visible')
            .then(($tabs) => {
                const actualTabs = [...$tabs].map((el) => el.innerText.trim());
                cy.log(`Visible Tabs: ${actualTabs.join(' | ')}`);
                cy.log(`Expected Tabs (in order): ${expectedTabs.join(' | ')}`);

                if (expectedTabs.length === 0) {
                    cy.log('No expected tabs provided — skipping tab validation.');
                } else {
                    const ok = isOrderedSubsequence(actualTabs, expectedTabs);
                    if (!ok) {
                        cy.log(`Tabs order mismatch. Actual: ${actualTabs.join(', ')} | Expected: ${expectedTabs.join(', ')}`);
                    }
                    expect(ok, `Expected tabs [${expectedTabs.join(', ')}] to appear in order in visible tabs`).to.be.true;
                }
            });

        const shouldCheckCols =
            expectedCols.length > 0 &&
            expectedTabs.map((t) => normalize(t)).includes(normalize('Related Objects'));

        if (shouldCheckCols) {
            cy.get(tabLocator)
                .filter(':visible')
                .contains('Related Objects')
                .then(($tab) => {
                    if ($tab.length > 0) {
                        cy.log('Related Objects tab is visible. Clicking...');
                        cy.wait(3000)
                        cy.wrap($tab).click({ force: true });
                    } else {
                        cy.log('Related Objects tab is NOT visible — skipping click.');
                    }
                });
        }

        if (shouldCheckCols) {
            cy.get('body').then(($body) => {
                if ($body.find(colLocator).length > 0) {
                    cy.get(colLocator, { timeout: 15000 })
                        .filter(':visible')
                        .then(($cols) => {
                            const actualCols = [...$cols].map((el) => el.innerText.trim());
                            cy.log(`Visible Columns: ${actualCols.join(' | ')}`);
                            cy.log(`Expected Columns (in order): ${expectedCols.join(' | ')}`);

                            if (expectedCols.length === 0) {
                                cy.log('No expected columns provided — skipping column validation.');
                            } else {
                                const okCols = isOrderedSubsequence(actualCols, expectedCols);
                                if (!okCols) {
                                    cy.log(`Columns order mismatch. Actual: ${actualCols.join(', ')} | Expected: ${expectedCols.join(', ')}`);
                                }
                                expect(okCols, `Expected columns [${expectedCols.join(', ')}] to appear in order in visible columns`).to.be.true;
                            }
                        });
                } else {
                    cy.log('No columns found in DOM — skipping column validation.');
                }
            });
        } else {
            cy.log('No Related Objects columns to check (either no expected columns provided or Related Objects not in expected tabs).');
        }
    });
});

Cypress.Commands.add('changePlanet', (planet) => {
    cy.getSC(
        '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/gridBar/menuPlanetsButton/'
    ).click()

    cy.get('tr[role="menuitem"]>td>div').contains(planet).should('be.visible').click()

})

Cypress.Commands.add("zoomOut", (value = 0.5) => {
    cy.document().then((doc) => {
        doc.body.style.zoom = value;
    });
});


