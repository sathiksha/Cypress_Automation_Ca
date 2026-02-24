import { GQTest } from '../../jj-pages/GQTest';
// Sprint 15
require('cypress-xpath');

describe('Allows Related Objects of Regulatory Affairs - Products, Registrations, PackageSets, BLA-NDA', () => {
    const GQ = new GQTest();

    it('Allows Related Objects of Regulatory Affairs from Planet', () => {
        // User login
        GQ.login();

        // Open Regulatory Affairs planet
        GQ.Planets.RegulatoryAffairs.openLandingPage();

        // Open Products
        GQ.Planets.RegulatoryAffairs.Products.openLandingPage();

        GQ.Planets.RegulatoryAffairs.Products.expandrecord(0);

        // Open Related Objects
        GQ.Planets.RegulatoryAffairs.Products.relatedobject();

        const productsTabs = [
            'Applications',
            'Registrations',
            'Package Sets',
            'Material Codes'
        ];

        // Verify that each tab is visible
        productsTabs.forEach(tab => {
            cy.contains(tab)
                .should('be.visible')
                .then(($tab) => {
                    const parentTr = $tab.closest('tr');
                    cy.wrap(parentTr).should('have.css', 'visibility', 'visible');
                });
        });

        // Open Registrations
        GQ.Planets.RegulatoryAffairs.Registration.openLandingPage();

        GQ.Planets.RegulatoryAffairs.Registration.expandrecord(0);

        // Open Related Objects

        cy.contains('Related Objects').should('be.visible').click()
        // GQ.Planets.RegulatoryAffairs.Registration.relatedobject();

        const registrationTabs = [
            'Applications',
            'Package Sets'
        ];

        // Verify that each tab is visible
        registrationTabs.forEach(tab => {
            cy.contains(tab)
                .should('be.visible')
                .then(($tab) => {
                    const parentTr = $tab.closest('tr');
                    cy.wrap(parentTr).should('have.css', 'visibility', 'visible');
                });
        });

        // Open Package Sets
        GQ.Planets.RegulatoryAffairs.Packageset.openLandingPage();

        GQ.Planets.RegulatoryAffairs.Packageset.expandrecord(0);

        // Open Related Objects
        cy.contains('Related Objects').should('be.visible').click()

        const packageSetTabs = [
            'Products',
            'Applications',
            'Registrations'
        ];

        // Verify that each tab is visible
        packageSetTabs.forEach(tab => {
            cy.contains(tab)
                .should('be.visible')
                .then(($tab) => {
                    const parentTr = $tab.closest('tr');
                    cy.wrap(parentTr).should('have.css', 'visibility', 'visible');
                });
        });

        // Open BLA-NDA Events
        GQ.Planets.RegulatoryAffairs.BLANDA.openLandingPage();

        GQ.Planets.RegulatoryAffairs.BLANDA.expandrecord(0);

        // Open Related Objects
        cy.contains('Related Objects').should('be.visible').click()

        const BLANDATabs = [
            'Applications',
            'Change Controls'
        ];

        // Verify that each tab is visible
        BLANDATabs.forEach(tab => {
            cy.contains(tab)
                .should('be.visible')
                .then(($tab) => {
                    const parentTr = $tab.closest('tr');
                    cy.wrap(parentTr).should('have.css', 'visibility', 'visible');
                });
        });
        // Log out after completing the test
        GQ.logout();
    });
    it('Allows Related Objects of Regulatory Affairs from Product Family', () => {
        // User login
        GQ.login();
        // Open Product Planet and navigate to the Product Families

        GQ.Planets.Product.openLandingPage();
        GQ.Planets.Product.ProductFamilies.openLandingPage();

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter();

        // Open APALUTAMIDE
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE');
        // GQ.Planets.Product.ProductFamilies.ProductFamily.Content.open();
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.openRegulatoryAffairs();

        //Open Products
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.products.openLandingPage();
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.products.expandrecord(0);
        // GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.products.relatedobject();

        //Open Related Objects
        cy.get('td[class="multiLayoutButtonTab"]:visible').contains('Related Objects').should('exist').click({force:true})

        const productsTabs = [
            'Applications',
            'Registrations',
            'Package Sets',
            'Material Codes'
        ];

        // Verify Related Objects Tab
            productsTabs.forEach(tab => {
            cy.get('td[class="multiLayoutButtonText"]:visible').contains(tab)
                .should('be.visible')
                .then(($tab) => {
                    const parentTr = $tab.closest('tr');
                    cy.wrap(parentTr).should('have.css', 'visibility', 'visible');
                });
        });

        //Open Registerations
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.registrations.openLandingPage();
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.registrations.expandrecord(0);
        //Open Related Objects
        cy.get('td[class="multiLayoutButtonTab"]:visible').contains('Related Objects').should('exist').click({force:true})

        const registrationTabs = [
            'Applications',
            'Package Sets'
        ];

        // Verify Related Objects Tab
            registrationTabs.forEach(tab => {
            cy.get('td[class="multiLayoutButtonText"]:visible').contains(tab)
                .should('be.visible')
                .then(($tab) => {
                    const parentTr = $tab.closest('tr');
                    cy.wrap(parentTr).should('have.css', 'visibility', 'visible');
                });
        });

        //Open Package Sets
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.packageSet.openLandingPage();
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.packageSet.expandrecord(0);

        //Open Related Objects
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.packageSet.relatedobject()

        const packageSetTabs = [
            'Products',
            'Applications',
            'Registrations'
        ];

        // Verify Related Objects Tab
            packageSetTabs.forEach(tab => {
            cy.get('td[class="multiLayoutButtonText"]:visible').contains(tab)
                .should('be.visible')
                .then(($tab) => {
                    const parentTr = $tab.closest('tr');
                    cy.wrap(parentTr).should('have.css', 'visibility', 'visible');
                });
        });

        //Open BLA-NDA
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.BALNDA.openLandingPage();
        GQ.Planets.Product.ProductFamilies.ProductFamily.Content.RegulatoryRecords.BALNDA.expandrecord(0);

        //Open Related Objects
        cy.get('td[class="multiLayoutButtonTab"]:visible').contains('Related Objects').should('exist').click({force:true})


        // Verify Related Objects Tab
        const BLANDATabs = [
            'Applications',
            'Change Controls'
        ];
            BLANDATabs.forEach(tab => {
            cy.get('td[class="multiLayoutButtonText"]:visible').contains(tab)
                .should('be.visible')
                .then(($tab) => {
                    const parentTr = $tab.closest('tr');
                    cy.wrap(parentTr).should('have.css', 'visibility', 'visible');
                });
        });

        // Log out after completing the test
        GQ.logout();
    });
    it('Allows Related Objects of Regulatory Affairs from Admin Data Binder', () => {
        // User login
        GQ.login();
        // Open Product Planet and navigate to the Product Families

        GQ.Planets.Product.openLandingPage();
        GQ.Planets.Product.ProductFamilies.openLandingPage();

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter();

        // Open APALUTAMIDE
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE');

        //Open Admin Data Binder
        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test Admin Binder')

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.open()

        //Open Regulatory Affairs
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.regulatoryAffairs.open();        
        // //Open Products
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.regulatoryAffairs.products.openProducts();
        //Expand record
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.regulatoryAffairs.products.expandrecord(0)
        //Open Related Objects
        cy.get('td[class="multiLayoutButtonTab"]:visible').contains('Related Objects').should('exist').click({force:true})

        const productsTabs = [
            'Applications',
            'Registrations',
            'Package Sets',
            'Material Codes'
        ];

        // Verify Related Objects Tab
            productsTabs.forEach(tab => {
            cy.get('td[class="multiLayoutButtonText"]:visible').contains(tab)
                .should('be.visible')
                .then(($tab) => {
                    const parentTr = $tab.closest('tr');
                    cy.wrap(parentTr).should('have.css', 'visibility', 'visible');
                });
        });
      
        //Open Registrations
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.regulatoryAffairs.registrations.open();
        //Expand record
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.regulatoryAffairs.registrations.expandrecord(0)
        //Open Related Objects
        cy.get('td[class="multiLayoutButtonTab"]:visible').contains('Related Objects').should('exist').click({force:true})

        const registrationTabs = [
            'Applications',
            'Package Sets'
        ];

        // Verify Related Objects Tab
            registrationTabs.forEach(tab => {
            cy.get('td[class="multiLayoutButtonText"]:visible').contains(tab)
                .should('be.visible')
                .then(($tab) => {
                    const parentTr = $tab.closest('tr');
                    cy.wrap(parentTr).should('have.css', 'visibility', 'visible');
                });
        });

        //Open PackageSets
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.regulatoryAffairs.packageSet.open();
        //Expand record
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.regulatoryAffairs.packageSet.openrecord();
        //Open Related Objects
        cy.get('td[class="multiLayoutButtonTab"]:visible').contains('Related Objects').should('exist').click({force:true})

        const packageSetTabs = [
            'Products',
            'Applications',
            'Registrations'
        ];

        // Verify Related Objects Tab
            packageSetTabs.forEach(tab => {
            cy.get('td[class="multiLayoutButtonText"]:visible').contains(tab)
                .should('be.visible')
                .then(($tab) => {
                    const parentTr = $tab.closest('tr');
                    cy.wrap(parentTr).should('have.css', 'visibility', 'visible');
                });
        });

        //Open PackageSets
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.regulatoryAffairs.BLANDA.open();
        //Expand record
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.regulatoryAffairs.BLANDA.expandrecord(0)
        //Open Related Objects
        cy.get('td[class="multiLayoutButtonTab"]:visible').contains('Related Objects').should('exist').click({force:true})

        // Verify Related Objects Tab
        const BLANDATabs = [
            'Applications',
            'Change Controls'
        ];
            BLANDATabs.forEach(tab => {
            cy.get('td[class="multiLayoutButtonText"]:visible').contains(tab)
                .should('be.visible')
                .then(($tab) => {
                    const parentTr = $tab.closest('tr');
                    cy.wrap(parentTr).should('have.css', 'visibility', 'visible');
                });
        });

        // Log out after completing the test
        GQ.logout();
    });
    it('Allows Related Objects of Regulatory Affairs from User Data Binder', () => {
        // User login
        GQ.login();
        // Open Product Planet and navigate to the Product Families

        GQ.Planets.Product.openLandingPage();
        GQ.Planets.Product.ProductFamilies.openLandingPage();

        // Toggle Filter
        GQ.Planets.Product.ProductFamilies.toggleFilter();

        // Open APALUTAMIDE
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE');

        //Open Admin Data Binder
        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test User Binder')

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.open()

        //Open Regulatory Affairs
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.regulatoryAffairs.open();        
        //Open Products
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.regulatoryAffairs.products.openProducts();
        //Expand record
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.regulatoryAffairs.products.expandrecord(0)
        //Open Related Objects
        cy.get('td[class="multiLayoutButtonTab"]:visible').contains('Related Objects').should('exist').click({force:true})

        const productsTabs = [
            'Applications',
            'Registrations',
            'Package Sets',
            'Material Codes'
        ];

        // Verify Related Objects Tab
            productsTabs.forEach(tab => {
            cy.get('td[class="multiLayoutButtonText"]:visible').contains(tab)
                .should('be.visible')
                .then(($tab) => {
                    const parentTr = $tab.closest('tr');
                    cy.wrap(parentTr).should('have.css', 'visibility', 'visible');
                });
        });
      
        //Open Registrations
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.regulatoryAffairs.registrations.open();
        //Expand record
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.regulatoryAffairs.registrations.expandrecord(0)
        //Open Related Objects
        cy.get('td[class="multiLayoutButtonTab"]:visible').contains('Related Objects').should('exist').click({force:true})

        const registrationTabs = [
            'Applications',
            'Package Sets'
        ];

        // Verify Related Objects Tab
            registrationTabs.forEach(tab => {
            cy.get('td[class="multiLayoutButtonText"]:visible').contains(tab)
                .should('be.visible')
                .then(($tab) => {
                    const parentTr = $tab.closest('tr');
                    cy.wrap(parentTr).should('have.css', 'visibility', 'visible');
                });
        });

        //Open PackageSets
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.regulatoryAffairs.packageSet.open();
        cy.wait(2000)
        //Expand record

        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.regulatoryAffairs.packageSet.openrecord(0);
        //Open Related Objects
        cy.get('td[class="multiLayoutButtonTab"]:visible').contains('Related Objects').should('exist').click({force:true})

        const packageSetTabs = [
            'Products',
            'Applications',
            'Registrations'
        ];

        // Verify Related Objects Tab
            packageSetTabs.forEach(tab => {
            cy.get('td[class="multiLayoutButtonText"]:visible').contains(tab)
                .should('be.visible')
                .then(($tab) => {
                    const parentTr = $tab.closest('tr');
                    cy.wrap(parentTr).should('have.css', 'visibility', 'visible');
                });
        });

        //Open PackageSets
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.regulatoryAffairs.BLANDA.open();
        //Expand record
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.regulatoryAffairs.BLANDA.expandrecord(0)
        //Open Related Objects
        cy.get('td[class="multiLayoutButtonTab"]:visible').contains('Related Objects').should('exist').click({force:true})

        // Verify Related Objects Tab
        const BLANDATabs = [
            'Applications',
            'Change Controls'
        ];
            BLANDATabs.forEach(tab => {
            cy.get('td[class="multiLayoutButtonText"]:visible').contains(tab)
                .should('be.visible')
                .then(($tab) => {
                    const parentTr = $tab.closest('tr');
                    cy.wrap(parentTr).should('have.css', 'visibility', 'visible');
                });
        });

        // Log out after completing the test
        GQ.logout();
    });
    it('Allows Related Objects of Regulatory Affairs from Product Specific Binder', () => {
        // User login
        GQ.login();
        // Open Product Planet and navigate to the Product Families

        GQ.Planets.Product.openLandingPage();
        GQ.Planets.Product.ProductFamilies.openLandingPage();

        GQ.Planets.Product.ProductFamilies.toggleFilter();
    
        // Open APALUTAMIDE product family
        GQ.Planets.Product.ProductFamilies.openProductFamilyByText('APALUTAMIDE');
        GQ.Planets.Product.ProductFamilies.ProductFamily.refreshSelector();
        GQ.Planets.Product.ProductFamilies.ProductFamily.selectRow('MSAT Product View - Cypress Test Admin Binder');
        // Open Product Specific Binder
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.openlandingpage();
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.Name('Test');
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.dropdown();
        // cy.get('[id^="isc_"] > .comboBoxItemPicker').click()
        GQ.Planets.Product.ProductFamilies.ProductFamily.ProductSpecificBinder.selectall()
        // Click Plus
        GQ.Planets.Product.ProductFamilies.ProductFamily.clickPlusIcon('MSAT Product View - Cypress Test Admin Binder')
    
        // Click Child
        GQ.Planets.Product.ProductFamilies.ProductFamily.clickChild('MSAT Product View - Cypress Test Admin Binder')

        cy.wait(5000);


        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.open()

        //Open Regulatory Affairs
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.regulatoryAffairs.open();        
        // //Open Products
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.regulatoryAffairs.products.openProducts();
        //Expand record
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.regulatoryAffairs.products.expandrecord(0)
        //Open Related Objects
        cy.get('td[class="multiLayoutButtonTab"]:visible').contains('Related Objects').should('exist').click({force:true})

        const productsTabs = [
            'Applications',
            'Registrations',
            'Package Sets',
            'Material Codes'
        ];

        // Verify Related Objects Tab
            productsTabs.forEach(tab => {
            cy.get('td[class="multiLayoutButtonText"]:visible').contains(tab)
                .should('be.visible')
                .then(($tab) => {
                    const parentTr = $tab.closest('tr');
                    cy.wrap(parentTr).should('have.css', 'visibility', 'visible');
                });
        });
      
        //Open Registrations
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.regulatoryAffairs.registrations.open();
        //Expand record
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.regulatoryAffairs.registrations.expandrecord(0)
        //Open Related Objects
        cy.get('td[class="multiLayoutButtonTab"]:visible').contains('Related Objects').should('exist').click({force:true})

        const registrationTabs = [
            'Applications',
            'Package Sets'
        ];

        // Verify Related Objects Tab
            registrationTabs.forEach(tab => {
            cy.get('td[class="multiLayoutButtonText"]:visible').contains(tab)
                .should('be.visible')
                .then(($tab) => {
                    const parentTr = $tab.closest('tr');
                    cy.wrap(parentTr).should('have.css', 'visibility', 'visible');
                });
        });

        //Open PackageSets
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.regulatoryAffairs.packageSet.open();
        //Expand record
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.regulatoryAffairs.packageSet.openrecord();
        //Open Related Objects
        cy.get('td[class="multiLayoutButtonTab"]:visible').contains('Related Objects').should('exist').click({force:true})

        const packageSetTabs = [
            'Products',
            'Applications',
            'Registrations'
        ];

        // Verify Related Objects Tab
            packageSetTabs.forEach(tab => {
            cy.get('td[class="multiLayoutButtonText"]:visible').contains(tab)
                .should('be.visible')
                .then(($tab) => {
                    const parentTr = $tab.closest('tr');
                    cy.wrap(parentTr).should('have.css', 'visibility', 'visible');
                });
        });

        //Open PackageSets
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.regulatoryAffairs.BLANDA.open();
        //Expand record
        GQ.Planets.Product.ProductFamilies.ProductFamily.AdminDataBinder.SmartContent.regulatoryAffairs.BLANDA.expandrecord(0)
        //Open Related Objects
        cy.get('td[class="multiLayoutButtonTab"]:visible').contains('Related Objects').should('exist').click({force:true})

        // Verify Related Objects Tab
        const BLANDATabs = [
            'Applications',
            'Change Controls'
        ];
            BLANDATabs.forEach(tab => {
            cy.get('td[class="multiLayoutButtonText"]:visible').contains(tab)
                .should('be.visible')
                .then(($tab) => {
                    const parentTr = $tab.closest('tr');
                    cy.wrap(parentTr).should('have.css', 'visibility', 'visible');
                });
        });

        // Log out after completing the test
        GQ.logout();
    });
});
