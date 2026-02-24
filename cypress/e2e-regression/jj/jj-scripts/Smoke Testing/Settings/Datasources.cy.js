import { GQTest } from '../../../jj-pages/GQTest'
const GQ = new GQTest();
if (!Cypress.env('onlyRunReadOnlyTests')) {
    describe('10. Settings', () => {
        Cypress.config('defaultCommandTimeout', 120000);
        it('Datasources', () => {
            // Login
            GQ.login()

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

                    // Verify it is downloaded
                    cy.verifyDownload('Results.xlsx');

                    // Read the data
                    cy.task('readXlsx', { file: 'cypress/downloads/Results.xlsx', sheet: 'Sheet1' }).then((rows) => {
                        expect(rows.length).to.equal(Number(expectedRows))
                    })
                })
        })
    })
}

