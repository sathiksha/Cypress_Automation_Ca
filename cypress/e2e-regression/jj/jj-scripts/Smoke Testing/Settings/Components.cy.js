import { GQTest } from '../../../jj-pages/GQTest'
const GQ = new GQTest();
if (!Cypress.env('onlyRunReadOnlyTests')) {
    describe('10. Settings', () => {
        Cypress.config('defaultCommandTimeout', 180000);
        it('Components', () => {
            // Login
            GQ.login()

            // Settings Page
            GQ.Menu.openSettings()

            // Settings - Open Components
            GQ.Menu.Settings.Components.openLandingPage()

            // Create Component
            GQ.Menu.Settings.Components.createNewComponents()

            // Toggle Filter
            GQ.Menu.Settings.Components.toggleSelectorFilter()

            // Name
            GQ.Menu.Settings.Components.selectComponent('A New Component Config')

            // Opn General Page
            GQ.Menu.Settings.Components.Component.Home.General.open()

            // Change class name
            GQ.Menu.Settings.Components.Component.Home.General.setName('foo')

            // Change base
            GQ.Menu.Settings.Components.Component.Home.General.setBase('QBase')

            // Save
            GQ.Menu.Settings.Components.Component.Home.General.save()

            // Script
            GQ.Menu.Settings.Components.Component.Home.Script.open()

            // Type in script
            cy.window().then((win) => {
                let aceEditor = win.ace.edit('isc_AceEditor_0_ace');
                aceEditor.setValue(`
                ({
                    defaultLayoutAlign:"center",
                    layoutStartMargin: 4,
                    align: "left",
                    canHover: true,
                
                    addLabels: function () {
                
                        this.addMember( isc.QLabelWithTitle.create({}) );
                        this.addMember( isc.QLabelWithTitle.create({}) );
                        this.addMember( isc.QLabelContextMenu.create({
                            limitContextCommands:[
                                "Complete",
                                "Submit",
                                "Pull Back"
                            ],
                        }) );
                    },
                    
                    updateFields: function( obj ){
                
                        if ( !obj ) return;
                        var typeIdToUse = obj.typeId;
                
                        this.members[0].setIcon( GQ.iconMgr.getIconToUseFromTypeId( typeIdToUse ) );
                        this.members[0].fontSize = "11.5pt";
                        this.members[0].delim = "";
                        this.members[0].value = "<b>" + obj.itemName + "</b>";
                        this.members[0].markForRedraw();
                
                        this.members[1].title = "State";
                        this.members[1].delim = "";
                        this.members[1].value = obj.workflowStateName;
                        this.members[1].valueColor = globalWorkflowStateHelper.getColor( obj );
                        this.members[1].markForRedraw();
                
                        this.members[2].obj = obj;
                        this.members[2].cursor = "pointer";
                        this.members[2].delim = "";
                        this.members[2].value = "&nbsp;&nbsp;<i class='fal fa-bars'></i>";
                        this.members[2].markForRedraw();
                
                    }
                })
                `);
            });
            // Save
            GQ.Menu.Settings.Components.Component.Home.Script.save()

            // History
            GQ.Menu.Settings.Components.Component.History.open()

            // Property Changes
            GQ.Menu.Settings.Components.Component.History.openPropertyChanges()

            // Relationship Changes
            GQ.Menu.Settings.Components.Component.History.openRelationShipChanges()

            // Home
            GQ.Menu.Settings.Components.Component.Home.open()
            // Script
            GQ.Menu.Settings.Components.Component.Home.Script.open()
            // Type in script
            cy.window().then((win) => {
                let aceEditor = win.ace.edit('isc_AceEditor_0_ace');
                aceEditor.setValue(`
                {}
                `);
            });
            // Save
            GQ.Menu.Settings.Components.Component.Home.Script.save()
            // History
            GQ.Menu.Settings.Components.Component.History.open()
            // Property Changes
            GQ.Menu.Settings.Components.Component.History.openPropertyChanges()
            // Relationship Changes
            GQ.Menu.Settings.Components.Component.History.openRelationShipChanges()
            // Home
            GQ.Menu.Settings.Components.Component.Home.open()
            // Filter out
            GQ.Menu.Settings.Components.selectComponent('foo')
            // Delete
            GQ.Menu.Settings.Components.delete()
            // Refresh
            GQ.Menu.Settings.Components.refresh()

            // Logout
            GQ.logout()
        })
    })
}

