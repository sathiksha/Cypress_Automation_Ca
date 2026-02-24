import {GQTest} from '../../jnj-pages/GQTest.js'


if (!Cypress.env('onlyRunReadOnlyTests')) { 
  describe('Settings', () => {
  const GQ = new GQTest();
  function cleanURL(url) {
            if (url.endsWith('/')) {
                return url;
            } else {
                return url + '/';
            }
        }

    Cypress.config('defaultCommandTimeout', 180000);
      it('Automation Testing: Settings > Classes', () => {
          // Login
          GQ.Login()
      
          // Open Settings
          GQ.Menu.openSettings()
      
          // Settings - Open Classes
          GQ.Menu.Settings.Classes.openLandingPage()
          
          // Expand All
          GQ.Menu.Settings.Classes.expandAll()
      
          // Click first element
          cy.getSC(
              GQ.Menu.Settings.Classes.firstElementID()
          ).click()
      
          // Default Fields
          GQ.Menu.Settings.Classes.Class.DefaultFields.open()
      
          // General
          GQ.Menu.Settings.Classes.Class.General.open()
      
          // Select Class by Name
          GQ.Menu.Settings.Classes.selectClassByText('QChartView')
          
          // General
          GQ.Menu.Settings.Classes.Class.General.open()
      
          // Default Fields
          GQ.Menu.Settings.Classes.Class.DefaultFields.open()
      
          // Logout
          GQ.Logout()
      
      })
      it('Automation Testing: Settings > Colors', () => {
          // Login
          GQ.Login()
      
          // Open Settings
          GQ.Menu.openSettings()
      
          // Settings - Open Colors
          GQ.Menu.Settings.Colors.openLandingPage()
          
          GQ.Menu.Settings.Colors.addColor('Red Tint 01','#c30010')
          GQ.Menu.Settings.Colors.addColor('Red Tint 02','#d1001f')
          GQ.Menu.Settings.Colors.addColor('Red Tint 03','#de0a26')
          GQ.Menu.Settings.Colors.addColor('Red Tint 04','#f01e2c')
          GQ.Menu.Settings.Colors.addColor('Red Tint 05','#ff2c2c')
          GQ.Menu.Settings.Colors.addColor('Red Tint 06','#f94449')
          GQ.Menu.Settings.Colors.addColor('Red Tint 07','#ee6b6e')
          GQ.Menu.Settings.Colors.addColor('Red Tint 08','#f69697')
          GQ.Menu.Settings.Colors.addColor('Red Tint 09','#ffcbd1')
      
          GQ.Menu.Settings.Colors.filterForText('Red Tint')
      
          GQ.Menu.Settings.Colors.deleteColor('Red Tint 01')
          GQ.Menu.Settings.Colors.deleteColor('Red Tint 02')
          GQ.Menu.Settings.Colors.deleteColor('Red Tint 03')
          GQ.Menu.Settings.Colors.deleteColor('Red Tint 04')
          GQ.Menu.Settings.Colors.deleteColor('Red Tint 05')
          GQ.Menu.Settings.Colors.deleteColor('Red Tint 06')
          GQ.Menu.Settings.Colors.deleteColor('Red Tint 07')
          GQ.Menu.Settings.Colors.deleteColor('Red Tint 08')
          GQ.Menu.Settings.Colors.deleteColor('Red Tint 09')
      
          // Logout
          GQ.Logout()
      
      })
      it('Automation Testing: Settings > Components', () => {
            // Login
            GQ.Login()

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
            GQ.Logout()
      })
      it('Automation Testing: Settings > Datasources', () => {
            // Login
            GQ.Login()

            // Settings Page
            GQ.Menu.openSettings()

            // Datasource Page
            GQ.Menu.Settings.Datasources.openLandingPage()

            // Create New Datasource
            GQ.Menu.Settings.Datasources.createNewDataSource()

            // Toggle Filter
            GQ.Menu.Settings.Datasources.toggleFilter()

            // Name
            GQ.Menu.Settings.Datasources.selectItemByText('A New Optiqs Data Source')

            GQ.Menu.Settings.Datasources.Datasource.Home.General.setName('CyPress test Datasource')

            GQ.Menu.Settings.Datasources.Datasource.Home.General.toggleAudit()

            // Save
            GQ.Menu.Settings.Datasources.Datasource.Home.General.save()

            // Script
            GQ.Menu.Settings.Datasources.Datasource.Home.Script.open()
            // Type in script
            cy.window().then((win) => {
                let aceEditor = win.ace.edit('isc_AceEditor_1_ace');
                aceEditor.setValue(`<DataSource
        ID="dsMail"
        dropExtraFields="false"
    >
        <fields>
        <field>
            <name>to</name>
            <title>To</title>
            <type>text</type>
        </field>
        <field>
            <name>subject</name>
            <title>Subject</title>
            <type>text</type>
        </field>
        <field>
            <name>message</name>
            <title>Message</title>
            <type>text</type>
        </field>
        <field>
            <name>attachments</name>
            <title>Attachments</title>
            <type>binary</type>
            <maxFileSize>16777215</maxFileSize>
        </field>
        </fields>
        <operationBindings>
            <operationBinding operationType="update" >
                <serverObject className="com.globalq.datasource.MailMgr"  lookupStyle="new" />
                <serverMethod>sendMail</serverMethod>
            </operationBinding>
        </operationBindings>
    </DataSource>
                                `);
            });
            // Save
            GQ.Menu.Settings.Datasources.Datasource.Home.Script.save()
            // History 
            GQ.Menu.Settings.Datasources.Datasource.History.open()

            // Property Changes
            GQ.Menu.Settings.Datasources.Datasource.History.openPropertyChanges()

            // Relationship Changes
            GQ.Menu.Settings.Datasources.Datasource.History.openRelationshipChanges()

            // Home
            GQ.Menu.Settings.Datasources.Datasource.Home.open()

            // Type in script
            cy.window().then((win) => {
                let aceEditor = win.ace.edit('isc_AceEditor_1_ace');
                aceEditor.setValue(`<DataSource
        ID="dsMail"
        dropExtraFields="false"
    >
        <fields>
        <field>
            <name>to</name>
            <title>To</title>
            <type>text</type>
        </field>
        </fields>
        <operationBindings>
            <operationBinding operationType="update" >
                <serverObject className="com.globalq.datasource.MailMgr"  lookupStyle="new" />
                <serverMethod>sendMail</serverMethod>
            </operationBinding>
        </operationBindings>
    </DataSource>
    `);
            });

            // Save
            GQ.Menu.Settings.Datasources.Datasource.Home.Script.save()

            // History 
            GQ.Menu.Settings.Datasources.Datasource.History.open()

            // Property Changes
            GQ.Menu.Settings.Datasources.Datasource.History.openPropertyChanges()

            // Relationship Changes
            GQ.Menu.Settings.Datasources.Datasource.History.openRelationshipChanges()

            // Home
            GQ.Menu.Settings.Datasources.Datasource.Home.open()


            // Filter out 'A New Optiqs Datasource'
            GQ.Menu.Settings.Datasources.selectItemByText('CyPress test Datasource')

            // General
            GQ.Menu.Settings.Datasources.Datasource.Home.General.open()

            // Delete
            GQ.Menu.Settings.Datasources.delete()

            // Toggle Filter
            GQ.Menu.Settings.Datasources.toggleFilter()

            // Refresh
            GQ.Menu.Settings.Datasources.refresh()

            cy.wait(2000)
            cy.deleteDownloadsFolder();
            // Log number of records
            cy.getSC(
                GQ.Menu.Settings.Datasources.rowCountID()
            ).wait(10000).invoke('text')
                .then((rows) => {
                    let expectedRows = rows.substring(0, rows.indexOf(' '));
                    cy.log(expectedRows)
                    GQ.Menu.Settings.Datasources.download()

                    cy.contains("Results.xlsxDownload complete",{timeout:60000}).should('be.visible')

                    // Verify it is downloaded
                    cy.verifyDownload('Results.xlsx');

                    // Read the data
                    cy.task('readXlsx', { file: 'cypress/downloads/Results.xlsx', sheet: 'Sheet1' }).then((rows) => {
                        expect(rows.length).to.equal(Number(expectedRows))
                    })
                })
      })
      it('Automation Testing: Force Publish', () => {
            cy.GQLogin()
            cy.request({
                url: cleanURL(Cypress.env('preqa')) + 'publish.jsp?forcePublish=true',
                timeout: 180000
            }).its('body', { timeout: 180000 }).should('include', 'Publish Configuration Completed successfully, you may close the window.')
      })
      it('Automation Testing: Settings > Icons', () => {
            // Login
            GQ.Login()

            // Settings Page
            GQ.Menu.openSettings()

            // Icons
            GQ.Menu.Settings.Icons.openLandingPage()

            // Toggle Filter
            GQ.Menu.Settings.Icons.toggleFilter()

            // Filter out folders
            GQ.Menu.Settings.Icons.filter('Folder')

            // Refresh 
            GQ.Menu.Settings.Icons.refresh()

            // Toggle Filter
            GQ.Menu.Settings.Icons.toggleFilter()

            // Class Icons
            cy.getSC(
                GQ.Menu.Settings.Icons.classIconsID()
                , { timeout: 60000 }).rightclick()

            // Create New Icon
            cy.getSC(
                GQ.Menu.Settings.Icons.createIconID()
                , { timeout: 60000 }).click()

            // Toggle Filter
            GQ.Menu.Settings.Icons.toggleFilter()

            // Filter out for 'A New Icon'
            GQ.Menu.Settings.Icons.filterAndSelect('A New Icon')

            cy.wait(2000)

            // Change Name
            GQ.Menu.Settings.Icons.Icon.setName('Cypress - Test Icon')

            // Change Description
            GQ.Menu.Settings.Icons.Icon.setDescription('Red Calendar with embedded Green Time Icon')


            // Save
            GQ.Menu.Settings.Icons.Icon.save()

            // Click Image
            GQ.Menu.Settings.Icons.Icon.clickImage()

            // Filter out folders
            GQ.Menu.Settings.Icons.filterAndSelect('Cypress - Test Icon')

            // Remove
            GQ.Menu.Settings.Icons.delete()

            // Refresh
            GQ.Menu.Settings.Icons.refresh()

            // Logout
            GQ.Logout()

      })
      it('Automation Testing: Settings > Screens', () => {
            // Login
            GQ.Login()
    
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
            GQ.Logout()

      })
      it('Automation Testing: Settings > Scripts', () => {
            // Login
            GQ.Login()

            // Settings Page
            GQ.Menu.openSettings()

            // Scripts Page
            GQ.Menu.Settings.Scripts.openLandingPage()

            // Click the created Script
            GQ.Menu.Settings.Scripts.createNewScript()

            // Click the create script
            GQ.Menu.Settings.Scripts.toggleFilter()

            //
            GQ.Menu.Settings.Scripts.selectRecordByText('A New Script')

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

            // Relationship CHanges
            GQ.Menu.Settings.Scripts.Script.History.openRelationshipChanges()

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

            // Relationship CHanges
            GQ.Menu.Settings.Scripts.Script.History.openRelationshipChanges()
            // Home
            GQ.Menu.Settings.Scripts.Script.Home.open()

            GQ.Menu.Settings.Scripts.selectRecordByText('Cypress Script')
           
            // Delete
            GQ.Menu.Settings.Scripts.delete()

            // Logout
            GQ.Logout()
      })
      it('Automation Testing: Settings > Types', () => {
            // Login
            GQ.Login()

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
            GQ.Logout()
      })
      it('Automation Testing: Settings > Types > Icons', () => {
        // Login
        GQ.Login()

        // Settings Page
        GQ.Menu.openSettings()

        // Icons
        GQ.Menu.Settings.Icons.openLandingPage()

        // Toggle Filter
        GQ.Menu.Settings.Icons.toggleFilter()

        // Filter out folders
        GQ.Menu.Settings.Icons.filter('Blue Gear')

        GQ.Menu.Settings.Icons.IconSelect()


        GQ.Menu.Settings.Icons.IconCheckBoxValidation()


        GQ.Menu.Settings.Icons.IconUsedPlaceValidation()

        GQ.Menu.Settings.Icons.IconNotSelectValidation()

        // Logout
        GQ.Logout()

    })

  })
}
