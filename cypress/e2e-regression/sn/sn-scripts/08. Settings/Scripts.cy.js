import { GQTest } from '../../sn-pages/GQTest';
const GQ = new GQTest();
if (!Cypress.env('onlyRunReadOnlyTests')) {
    describe('10. Settings', () => {
        Cypress.config('defaultCommandTimeout', 120000);
        it('Scripts', () => {
            // Login
            GQ.login()

            // Settings Page
            GQ.Menu.openSettings()

            // Scripts Page
            GQ.Menu.Settings.Scripts.openLandingPage()

            // Click the created Script
            GQ.Menu.Settings.Scripts.createNewScript()
            
            // Select 0
            GQ.Menu.Settings.Scripts.selectScriptById(0)

            // Change Name
            GQ.Menu.Settings.Scripts.Script.Home.General.setName('Cypress Script')

            // Save Name
            GQ.Menu.Settings.Scripts.Script.Home.General.save()

            // Script
            GQ.Menu.Settings.Scripts.Script.Home.Script.open()

            // Type in script
            cy.window().then((win) => {
                let aceEditor = win.ace.edit('isc_AceEditor_0_ace');
                aceEditor.setValue(`var globalColors = {};
    
                globalColors.workflowStateNames = {
                    "New":          COLOR_LYELLOW,
                    "Created":      COLOR_LYELLOW,
                    "Checked Out":  "#FFFF00",
                    "Checked In":   COLOR_LCYAN,
                    "In Approval":  COLOR_LLIGHTBLUE,
                    "Approved":     COLOR_LBLUE,
                    "Ready for Release": "#CC99FF",
                    "Released":     COLOR_LGREEN,
                    "Rejected":     COLOR_LRED,
                    "Obsolete":     COLOR_LGRAY,
                    "Not Started":  "#DCCC17", // yellow,
                    "In Process":   "#15AD1F", // green 
                    "In Process*":  "#15AD1F", // green 
                    "On Hold":      "#FF4D15", // red
                    "Complete":     "black",
                    "In Work":      "#15AD1F", // green
                    "Reviewed":     "#DCCC17"
                
                };
                
                
                globalColors.activityStateNames = {
                    "Not Started":  "#DCCC17", // yellow,
                    "In Process":   "#15AD1F", // green 
                    "In Process*":  "#15AD1F", // green 
                    "On Hold":      "#FF4D15", // red
                    "Complete":     "black"
                };
                
                globalColors.riskSeverityLevel = {
                    1: COLOR_GREEN,
                    2: "#34b1eb", // blue
                    3: COLOR_RED
                };
                
                globalColors.riskLevel = {
                    1: COLOR_GREEN,
                    2: "#34b1eb", // blue
                    3: COLOR_RED
                };
                
                globalColors.riskLevelForCharts = {
                    1: COLOR_GREEN,
                    2: "#34b1eb", // blue
                    3: COLOR_RED
                };
                
                globalColors.severityLevel = {
                    1: "#FDEDEC", 
                    2: "#FADBD8",
                    3: "#F5B7B1",
                    4: "#F1948A",
                    5: "#EC7063"
                };
                
                globalColors.severityLevelForCharts = {
                    1: "#FDEDEC", 
                    2: "#FADBD8",
                    3: "#F5B7B1",
                    4: "#F1948A",
                    5: "#EC7063"
                };
                
                globalColors.probabilityLevel = { // gray themed
                    1: "#F8F9F9",
                    2: "#F2F3F4",
                    3: "#E5E7E9",
                    4: "#D7DBDD",
                    5: "#CACFD2"
                };
                
                globalColors.probabilityLevelForCharts = { //gray themed
                    1: "#F8F9F9",
                    2: "#F2F3F4",
                    3: "#E5E7E9",
                    4: "#D7DBDD",
                    5: "#CACFD2"
                }
    `);
            });
            // Save
            GQ.Menu.Settings.Scripts.Script.Home.Script.save()

            // History
            GQ.Menu.Settings.Scripts.Script.History.open()

            // Property Changes
            GQ.Menu.Settings.Scripts.Script.History.openPropertyChanges()

            // // Relationship CHanges
            // GQ.Menu.Settings.Scripts.Script.History.openRelationshipChanges()

            // Home
            GQ.Menu.Settings.Scripts.Script.Home.open()

            // Type in script
            cy.window().then((win) => {
                let aceEditor = win.ace.edit('isc_AceEditor_0_ace');
                aceEditor.setValue(`var globalColors = {}`);
            });

            // Save
            GQ.Menu.Settings.Scripts.Script.Home.Script.save()

            // History
            GQ.Menu.Settings.Scripts.Script.History.open()

            // Property Changes
            GQ.Menu.Settings.Scripts.Script.History.openPropertyChanges()

            // // Relationship CHanges
            // GQ.Menu.Settings.Scripts.Script.History.openRelationshipChanges()
            // Home
            GQ.Menu.Settings.Scripts.Script.Home.open()
           
            // Delete
            GQ.Menu.Settings.Scripts.delete()

            // Logout
            GQ.logout()
        })
    })

}

