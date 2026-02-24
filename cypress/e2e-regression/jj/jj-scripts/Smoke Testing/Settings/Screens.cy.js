import { GQTest } from '../../../jj-pages/GQTest'
const GQ = new GQTest();
if (!Cypress.env('onlyRunReadOnlyTests')) {
    describe('10. Settings', () => {
        Cypress.config('defaultCommandTimeout', 180000);
        it('Screens', () => {
            // Login
            GQ.login()
    
            // Settings Page
            GQ.Menu.openSettings()
    
            // Screens
            GQ.Menu.Settings.Screens.openLandingPage()
            
            // Open Pending Trash
            cy.getSC(
                GQ.Menu.Settings.Screens.pendingTrashID()
                , { timeout: 60000 }).click()

            // Click Create New Screen
            GQ.Menu.Settings.Screens.createChildScreen()

            // Click the created screen
            GQ.Menu.Settings.Screens.openRecordByTextAndIndex('A New Screen', 6)
            
            // Change Name
            GQ.Menu.Settings.Screens.Screen.Home.General.setName('Random Screen Name')

            // Change Description
            GQ.Menu.Settings.Screens.Screen.Home.General.setDescription('Random Description')

            // Set Attributes
            GQ.Menu.Settings.Screens.Screen.Home.General.setAttributes()

            // Save the screen
            GQ.Menu.Settings.Screens.Screen.Home.General.saveGeneral()

            // Click History 
            GQ.Menu.Settings.Screens.Screen.History.open()

            // Property Changes
            GQ.Menu.Settings.Screens.Screen.History.openPropertyChanges()

            // Relationship changes
            GQ.Menu.Settings.Screens.Screen.History.openRelationshipChanges()
           
            // Click Home
            GQ.Menu.Settings.Screens.Screen.Home.open()

            // Click Show Header
            GQ.Menu.Settings.Screens.Screen.Home.General.toggleShowHeader()

            // Save the screen
            GQ.Menu.Settings.Screens.Screen.Home.General.saveGeneral()

           // Click History 
            GQ.Menu.Settings.Screens.Screen.History.open()

            // Property Changes
            GQ.Menu.Settings.Screens.Screen.History.openPropertyChanges()

            // Relationship changes
            GQ.Menu.Settings.Screens.Screen.History.openRelationshipChanges()

            // Click Home
            GQ.Menu.Settings.Screens.Screen.Home.open()

            // Click Script
            GQ.Menu.Settings.Screens.Screen.Home.Script.open()

            // Type in script
            cy.window().then((win) => {
                let aceEditor = win.ace.edit('isc_AceEditor_0_ace');
                aceEditor.setValue(`({
                    onPreActivate: function ( activateInfo ) {
                        
                        activateInfo.reFetchActiveItem = true;
                        return true;
                    }
                })`);
            });
            
            // Save Script
            GQ.Menu.Settings.Screens.Screen.Home.Script.save()

            // Click Header Props
            GQ.Menu.Settings.Screens.Screen.Home.Header.open()

            // Set Header Properties
            GQ.Menu.Settings.Screens.Screen.Home.Header.setHeaderProps()
           
            // Save
            GQ.Menu.Settings.Screens.Screen.Home.Header.saveProps()

            // General Screen
            GQ.Menu.Settings.Screens.Screen.Home.General.open()

            // Click Header Props
            GQ.Menu.Settings.Screens.Screen.Home.Header.open()

            // Click Script
            GQ.Menu.Settings.Screens.Screen.Home.Script.open()

            // Children list
            GQ.Menu.Settings.Screens.Screen.Home.ChildrenList.open()
           
            // Children Tree
            GQ.Menu.Settings.Screens.Screen.Home.ChildrenTree.open()
            
            // Where used
            GQ.Menu.Settings.Screens.Screen.Home.WhereUsed.open()

            // Click History 
            GQ.Menu.Settings.Screens.Screen.History.open()

            // Property Changes
            GQ.Menu.Settings.Screens.Screen.History.openPropertyChanges()

            // Relationship changes
            GQ.Menu.Settings.Screens.Screen.History.openRelationshipChanges()
            
            // Delete
            GQ.Menu.Settings.Screens.delete()

            // Logout
            GQ.logout()

        })
    });
}
