import { GQTest } from'../../../jj-pages/GQTest'
const GQ = new GQTest();
if (!Cypress.env('onlyRunReadOnlyTests')) {
    describe('10. Settings', () => {
        Cypress.config('defaultCommandTimeout', 180000);
        it('Types', () => {
            // Login
            GQ.login()

            // Settings Page
            GQ.Menu.openSettings()

            // Open Types
            GQ.Menu.Settings.Types.openLandingPage()
            
            // Click Create new Type
            GQ.Menu.Settings.Types.createNewType()

            // Refresh
            GQ.Menu.Settings.Types.refresh()

            // Click A New Object Type
            GQ.Menu.Settings.Types.openTypeByText('A New Object Type')

            // Home 
            GQ.Menu.Settings.Types.Type.Home.openLandingPage()
            
            // General Page
            GQ.Menu.Settings.Types.Type.Home.General.openLandingPage()

            // General Page
            GQ.Menu.Settings.Types.Type.Home.General.setName('Random Type')

            // Type Class
            GQ.Menu.Settings.Types.Type.Home.General.setClass()
            
            // Save
            GQ.Menu.Settings.Types.Type.Home.General.saveGeneral()
            
            // Icon Prefix
            GQ.Menu.Settings.Types.Type.Home.General.setIconPrefix('AB')
            
            // Open Icon
            GQ.Menu.Settings.Types.Type.Home.General.setIcon('test123')
           
            // Save 
            GQ.Menu.Settings.Types.Type.Home.General.saveGeneral()
            
            // Click Filters
            GQ.Menu.Settings.Types.Type.Home.Filters.openLandingPage()
            
            // Create filter
            GQ.Menu.Settings.Types.Type.Home.Filters.Filter.createNewFilter()
            
            // Click the New Filter
            GQ.Menu.Settings.Types.Type.Home.Filters.Filter.openFilterByText('A New Filter')

            // Click the New Filter
            GQ.Menu.Settings.Types.Type.Home.Filters.Filter.Home.openLandingPage()
 
            // General
            GQ.Menu.Settings.Types.Type.Home.Filters.Filter.Home.General.openLandingPage()

            //SetName
            GQ.Menu.Settings.Types.Type.Home.Filters.Filter.Home.General.setName('New Filter')
            
            // Filter Description
            GQ.Menu.Settings.Types.Type.Home.Filters.Filter.Home.General.setDescription('This is the description for this filter')
            
            // Save filter
            GQ.Menu.Settings.Types.Type.Home.Filters.Filter.Home.General.save()
            
            // Click Form Views
            GQ.Menu.Settings.Types.Type.Home.FormViews.openLandingPage()
            
            // Create a new Form View
            GQ.Menu.Settings.Types.Type.Home.FormViews.FormView.createNewFormView()

            // Click the newly created form view
            GQ.Menu.Settings.Types.Type.Home.FormViews.FormView.openFormViewByText('A New Form View')

            // Open General
            GQ.Menu.Settings.Types.Type.Home.FormViews.FormView.Home.General.openLandingPage()
            
            // Change Name
            GQ.Menu.Settings.Types.Type.Home.FormViews.FormView.Home.General.setName('A New Form View','QForm View')
            
            // Change Desc
            GQ.Menu.Settings.Types.Type.Home.FormViews.FormView.Home.General.setDescription('Form\'s description')
            
            // Columns
            GQ.Menu.Settings.Types.Type.Home.FormViews.FormView.Home.General.setColumns('2')
            
            // Width
            GQ.Menu.Settings.Types.Type.Home.FormViews.FormView.Home.General.setWidth('[150,"*"]')
            //Save
            GQ.Menu.Settings.Types.Type.Home.FormViews.FormView.Home.General.save()
            // Form Fields
            GQ.Menu.Settings.Types.Type.Home.FormViews.FormView.Home.FormFields.openLandingPage()
            // Type in script
            cy.window().then((win) => {
                let aceEditor = win.ace.edit('isc_AceEditor_0_ace');
                aceEditor.setValue(`[
                    {
                        name: "script",
                        title: "Script",
                        editorType: "AceEditorItem",
                        //language: "javascript",
                        showTitle: false,
                        colSpan: 2,
                        width: "*",
                        height: "*"
                    }
                ]
    `);
            })
            // Save
            GQ.Menu.Settings.Types.Type.Home.FormViews.FormView.Home.FormFields.save()

            //Delete
            GQ.Menu.Settings.Types.Type.Home.FormViews.FormView.deleteRecord()
            
            // History
            GQ.Menu.Settings.Types.Type.Home.FormViews.FormView.History.openLandingPage()

            // Property Changes
            GQ.Menu.Settings.Types.Type.Home.FormViews.FormView.History.PropertyChanges.openLandingPage()

            // Home
            GQ.Menu.Settings.Types.Type.Home.openLandingPage()
            // TableViews
            GQ.Menu.Settings.Types.Type.Home.TableViews.openLandingPage()  
            
            // ChartViews
            GQ.Menu.Settings.Types.Type.Home.ChartViews.openLandingPage()
            
            // Diagram Views
            GQ.Menu.Settings.Types.Type.Home.DiagramViews.openLandingPage()
            
            // Screen Views
            GQ.Menu.Settings.Types.Type.Home.ScreenViews.openLandingPage()
            
            // Record Views
            GQ.Menu.Settings.Types.Type.Home.RecordViews.openLandingPage()
            
            // Lifecycle Views
            GQ.Menu.Settings.Types.Type.Home.LifecycleViews.openLandingPage()
            
            // History
            GQ.Menu.Settings.Types.Type.History.openLandingPage()
            
            // Property changes
            GQ.Menu.Settings.Types.Type.History.PropertyChanges.openLandingPage()
            
            // Relationship changes
            GQ.Menu.Settings.Types.Type.History.RelationshipChanges.openLandingPage()
            
            // Home
            GQ.Menu.Settings.Types.Type.Home.openLandingPage()
            
            // General
            GQ.Menu.Settings.Types.Type.Home.General.openLandingPage()
            
            // Name 
            GQ.Menu.Settings.Types.Type.Home.General.setName('Random Type Mod')
            
            // Save
            GQ.Menu.Settings.Types.Type.Home.General.saveGeneral()
            
            // History
            GQ.Menu.Settings.Types.Type.History.openLandingPage()
            
            // Property changes
            GQ.Menu.Settings.Types.Type.History.PropertyChanges.openLandingPage()
            
            // Relationship changes
            GQ.Menu.Settings.Types.Type.History.RelationshipChanges.openLandingPage()
            
            // Home
            GQ.Menu.Settings.Types.Type.Home.openLandingPage()
            
            // Toggle Filter
            GQ.Menu.Settings.Types.ToggleFilter()
            
            // Filter out for 'Random Type'
            GQ.Menu.Settings.Types.searchByText('Random Type Mod')
            
            // Click A New Object Type
            GQ.Menu.Settings.Types.openTypeByText('Random Type Mod')
            
            // //Delete
            // GQ.Menu.Settings.Types.delete()

            // Logout
            GQ.logout()
        })
    })
}

