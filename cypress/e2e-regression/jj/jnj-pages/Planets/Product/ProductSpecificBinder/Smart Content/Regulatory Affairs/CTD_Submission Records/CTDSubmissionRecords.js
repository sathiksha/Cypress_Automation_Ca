export class CTDSubmissionRecords {


  loadFixture() {
    return cy.fixture("regulatoryAffairs");
  }

  open() {
    cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Smart_Content||scClass=VLayout||index=0||length=7||classIndex=0||classLength=1||scClassIndex=0||scClassLength=7]/component/member[Class=QScreen_Data_Binder_Smart_Content_La||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Regulatory_Affairs_2||scClass=VLayout||index=2||length=9||classIndex=0||classLength=1||scClassIndex=2||scClassLength=9]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=0||length=7||classIndex=0||classLength=7||roleIndex=0||roleLength=7||title=CTD%24fs%24Submission%20Records||scRole=button]/').click();
  }

  closeSidePane() {
    cy.getSC(
      '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/selectorButton/closeButton/icon'
    ).click()
  }

  ctdTraingle() {
    cy.getSC(
      '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Smart_Content||scClass=VLayout||index=0||length=7||classIndex=0||classLength=1||scClassIndex=0||scClassLength=7]/component/member[Class=QScreen_Data_Binder_Smart_Content_La||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Regulatory_Affairs_2||scClass=VLayout||index=2||length=9||classIndex=0||classLength=1||scClassIndex=2||scClassLength=9]/body/layoutBody/member[Class=QScreen_CTDSubmission_Records_2||scClass=VLayout||index=0||length=7||classIndex=0||classLength=1||scClassIndex=0||scClassLength=7]/body/layoutBar/controlTab/member[Class=ToolStripMenuButton||index=0||length=4||classIndex=0||classLength=1||roleIndex=0||roleLength=4||title=CTD%20Triangle||scRole=button]/'
    ).click()
    cy.getSC('//Menu[level=0]/body/row[title=CTD%20Triangle||0]/col[fieldName=title||0]').click()
  }

  refresh() {
    cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Smart_Content||scClass=VLayout||index=0||length=7||classIndex=0||classLength=1||scClassIndex=0||scClassLength=7]/component/member[Class=QScreen_Data_Binder_Smart_Content_La||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Regulatory_Affairs_2||scClass=VLayout||index=2||length=9||classIndex=0||classLength=1||scClassIndex=2||scClassLength=9]/body/layoutBody/member[Class=QScreen_CTDSubmission_Records_2||scClass=VLayout||index=0||length=7||classIndex=0||classLength=1||scClassIndex=0||scClassLength=7]/body/layoutBody/member[Class=QScreen_CTD_Triangle_1||scClass=VLayout||index=0||length=5||classIndex=0||classLength=1||scClassIndex=0||scClassLength=5]/body/layoutBody/member[Class=QScreen_f6c7c834044041fe85b6ab16124dff65||scClass=VLayout||index=0||length=6||classIndex=0||classLength=1||scClassIndex=0||scClassLength=6]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_5efcffa85d37449cb86018c53ba62362||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/gridBar/refreshButton/').click();
  }

  checkHeaderIcons() {
    cy.get('img[src*="download-button"]').should('be.visible')
    cy.get('img[src*="print"]').should('be.visible')
  }
  openARecord() {
    cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Smart_Content||scClass=VLayout||index=0||length=7||classIndex=0||classLength=1||scClassIndex=0||scClassLength=7]/component/member[Class=QScreen_Data_Binder_Smart_Content_La||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Regulatory_Affairs_2||scClass=VLayout||index=2||length=9||classIndex=0||classLength=1||scClassIndex=2||scClassLength=9]/body/layoutBody/member[Class=QScreen_CTDSubmission_Records_2||scClass=VLayout||index=0||length=7||classIndex=0||classLength=1||scClassIndex=0||scClassLength=7]/body/layoutBody/member[Class=QScreen_CTD_Triangle_1||scClass=VLayout||index=0||length=5||classIndex=0||classLength=1||scClassIndex=0||scClassLength=5]/body/layoutBody/member[Class=QScreen_f6c7c834044041fe85b6ab16124dff65||scClass=VLayout||index=0||length=6||classIndex=0||classLength=1||scClassIndex=0||scClassLength=6]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_5efcffa85d37449cb86018c53ba62362||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/body/row[0]/col[fieldName=EDMS_Number||1]').dblclick();
  }

  openDetails() {
    cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Smart_Content||scClass=VLayout||index=0||length=7||classIndex=0||classLength=1||scClassIndex=0||scClassLength=7]/component/member[Class=QScreen_Data_Binder_Smart_Content_La||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Regulatory_Affairs_2||scClass=VLayout||index=2||length=9||classIndex=0||classLength=1||scClassIndex=2||scClassLength=9]/body/layoutBody/member[Class=QScreen_CTDSubmission_Records_2||scClass=VLayout||index=0||length=7||classIndex=0||classLength=1||scClassIndex=0||scClassLength=7]/body/layoutBody/member[Class=QScreen_CTD_Triangle_1||scClass=VLayout||index=0||length=5||classIndex=0||classLength=1||scClassIndex=0||scClassLength=5]/body/layoutBody/member[Class=QScreen_f6c7c834044041fe85b6ab16124dff65||scClass=VLayout||index=0||length=6||classIndex=0||classLength=1||scClassIndex=0||scClassLength=6]/component/member[Class=QScreen_Record_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_RIMDocs_Home||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBar/controlTab/member[Class=ToolStripButton||index=1||length=2||classIndex=1||classLength=2||roleIndex=1||roleLength=2||title=Details||scRole=button]/').click();
  }


  rightClickARecord() {
    cy.wait(5000)
    cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Smart_Content||scClass=VLayout||index=0||length=7||classIndex=0||classLength=1||scClassIndex=0||scClassLength=7]/component/member[Class=QScreen_Data_Binder_Smart_Content_La||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Regulatory_Affairs_2||scClass=VLayout||index=2||length=9||classIndex=0||classLength=1||scClassIndex=2||scClassLength=9]/body/layoutBody/member[Class=QScreen_CTDSubmission_Records_2||scClass=VLayout||index=0||length=7||classIndex=0||classLength=1||scClassIndex=0||scClassLength=7]/body/layoutBody/member[Class=QScreen_CTD_Triangle_1||scClass=VLayout||index=0||length=5||classIndex=0||classLength=1||scClassIndex=0||scClassLength=5]/body/layoutBody/member[Class=QScreen_NonModule_Specific_1||scClass=VLayout||index=5||length=6||classIndex=0||classLength=1||scClassIndex=5||scClassLength=6]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_Data_Binder_NonModule_Speci||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/body/row[0]/col[fieldName=EDMS_Number||1]').rightclick();
  }

  addBookmark() {
    cy.getSC('//Menu[level=0]/body/row[0]/col[fieldName=itemName||1]').click();
  }

  minimizeARecord() {
    cy.getSC('//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Smart_Content||scClass=VLayout||index=0||length=7||classIndex=0||classLength=1||scClassIndex=0||scClassLength=7]/component/member[Class=QScreen_Data_Binder_Smart_Content_La||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Regulatory_Affairs_2||scClass=VLayout||index=2||length=9||classIndex=0||classLength=1||scClassIndex=2||scClassLength=9]/body/layoutBody/member[Class=QScreen_CTDSubmission_Records_2||scClass=VLayout||index=0||length=7||classIndex=0||classLength=1||scClassIndex=0||scClassLength=7]/body/layoutBody/member[Class=QScreen_CTD_Triangle_1||scClass=VLayout||index=0||length=5||classIndex=0||classLength=1||scClassIndex=0||scClassLength=5]/body/layoutBody/member[Class=QScreen_f6c7c834044041fe85b6ab16124dff65||scClass=VLayout||index=0||length=6||classIndex=0||classLength=1||scClassIndex=0||scClassLength=6]/selectorButton/openButton/icon').click();
  }
  clickAnywhereElse() {
    cy.wait(200);
    cy.get('body').trigger('keydown', { keyCode: 27 });
    cy.wait(200);
    cy.get('body').trigger('keyup', { keyCode: 27 });
  }

checkCtdTriangleData() {

  const moduleConfig = [
    { tab: "Module 1 - Reg. & Admin. Info", subs: [] },
    {
      tab: "Module 2 - Summaries & Overviews",
      subs: [
        "Quality Overall Summary",
        "Non-Clinical Summary",
        "Clinical Summary"
      ]
    },
    {
      tab: "Module 3 - Quality",
      subs: [
        "Drug Product",
        "Drug Substance",
        "Regional Information",
        "Appendices"
      ]
    },
    { tab: "Module 4 - Non-Clinical Study Reports", subs: [] },
    { tab: "Module 5 - Clinical Study Reports", subs: [] },
    { tab: "Non-Module Specific", subs: [] }
  ];

  const results = {};
  
  const waitForTableLoad = (retry = 0) => {
    cy.log(`Waiting for table load… Retry #${retry}`);

    return cy.get('div[eventproxy*="rowRangeDisplay"] table tbody tr')
      .its('length')
      .then(len => {
        if (len > 0) return cy.wrap(true);

        if (retry >= 60) {
          throw new Error("Table did not load within 60 seconds");
        }

        cy.wait(1000);
        return waitForTableLoad(retry + 1);
      });
  };

  /* ================= ROW COUNT ================= */

  const getRowCount = () => {
    return cy.get('div[eventproxy*="rowRangeDisplay"]>table>tbody>tr>td:visible')
      .invoke('text')
      .then(text => {
        const count = parseInt(
          (text || '').replace(/,/g, '').match(/\d+/)?.[0] || '0'
        );
        cy.log(`Parsed Count = ${count}`);
        return cy.wrap(count);
      });
  };

  /* ================= ZERO-PROTECTION (30s) ================= */

  const getRowCountWithZeroRetry = (retry = 0) => {
    return getRowCount().then(count => {

      if (count > 0) {
        cy.log(`Final Non-Zero Count = ${count}`);
        return cy.wrap(count);
      }

      cy.log(`⚠️ Count is ZERO → Retry #${retry}`);

      if (retry >= 30) {
        throw new Error(
          "Row count stayed ZERO after 30 seconds. Failing test."
        );
      }

      cy.wait(1000);
      return getRowCountWithZeroRetry(retry + 1);
    });
  };

  /* ================= SUBTAB CLICK (EXACT MATCH) ================= */

  const SUBTAB_SELECTOR =
    'td.multiLayoutButtonNoLeftBorderTextSelected,' +
    'td.multiLayoutButtonNoLeftBorderText,' +
    'td.multiLayoutButtonTextSelected,' +
    'td.multiLayoutButtonText';

  const clickSubTab = (label) => {
    cy.log(`Clicking SubTab: ${label}`);

    return cy.get(SUBTAB_SELECTOR)
      .filter((i, el) => el.innerText.trim() === label)
      .first()
      .click({ force: true });
  };

  /* ================= PRELOAD ================= */

  const preloadAllTabs = () => {
    cy.log("Preloading all tabs and subtabs…");

    return moduleConfig.reduce((chain, mod) => {
      return chain.then(() => {

        cy.contains(
          'td.multiLayoutButtonTabSelected,td.multiLayoutButtonTab',
          mod.tab
        ).click();

        cy.wait(300);

        return mod.subs.reduce((subChain, sub) => {
          return subChain.then(() => {
            clickSubTab(sub);
            cy.wait(300);
          });
        }, cy.wrap(null));

      });
    }, cy.wrap(null));
  };

  /* ================= COLLECT COUNTS ================= */

  const collectCounts = () => {

    return moduleConfig.reduce((chain, mod) => {
      return chain.then(() => {

        cy.log(`Reading TAB: ${mod.tab}`);
        cy.contains(
          'td.multiLayoutButtonTabSelected,td.multiLayoutButtonTab',
          mod.tab
        ).click();

        // ---- Tabs WITHOUT subtabs ----
        if (mod.subs.length === 0) {
          return waitForTableLoad()
            .then(() => getRowCountWithZeroRetry())
            .then(cnt => {
              results[mod.tab] = cnt;
              cy.log(`TAB COUNT (${mod.tab}) = ${cnt}`);
            });
        }

        // ---- Tabs WITH subtabs ----
        cy.log(`Skipping main tab count for ${mod.tab}`);

        return mod.subs.reduce((subChain, sub) => {
          return subChain.then(() => {

            clickSubTab(sub);

            return waitForTableLoad()
              .then(() => getRowCountWithZeroRetry())
              .then(cnt => {
                results[sub] = cnt;
                cy.log(`SUBTAB COUNT (${sub}) = ${cnt}`);
              });

          });
        }, cy.wrap(null));

      });
    }, cy.wrap(null));
  };

  /* ================= CTD TOTAL (UNCHANGED) ================= */

  const fetchTotalCount = () => {
    cy.log("Fetching CTD Triangle TOTAL…");

    return cy.getSC(
      '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Smart_Content||scClass=VLayout||index=0||length=7||classIndex=0||classLength=1||scClassIndex=0||scClassLength=7]/component/member[Class=QScreen_Data_Binder_Smart_Content_La||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Regulatory_Affairs_2||scClass=VLayout||index=2||length=9||classIndex=0||classLength=1||scClassIndex=2||scClassLength=9]/body/layoutBody/member[Class=QScreen_CTDSubmission_Records_2||scClass=VLayout||index=0||length=7||classIndex=0||classLength=1||scClassIndex=0||scClassLength=7]/body/layoutBar/controlTab/member[Class=ToolStripMenuButton||index=0||length=4||classIndex=0||classLength=1||roleIndex=0||roleLength=4||title=CTD%20Triangle||scRole=button]/icon'
    ).click()
      .then(() =>
        cy.getSC('//Menu[level=0]/body/row[title=Filtered||1]/col[fieldName=title||0]')
          .click()
      )
      .then(() => cy.wait(30000))
      .then(() => getRowCount())
      .then(total => {
        results["CTD_TOTAL"] = total;
        cy.log(`CTD TOTAL COUNT = ${total}`);
      });
  };

  /* ================= VALIDATION ================= */

  const validateResults = () => {
    cy.log("Final Summary:");

    Object.entries(results).forEach(([k, v]) =>
      cy.log(`${k} = ${v}`)
    );

    const sumModules = Object.entries(results)
      .filter(([k]) => k !== "CTD_TOTAL")
      .reduce((acc, [, v]) => acc + v, 0);

    cy.log(`Sum of Modules = ${sumModules}`);
    cy.log(`CTD TOTAL     = ${results["CTD_TOTAL"]}`);

    expect(sumModules).to.eq(results["CTD_TOTAL"]);

    cy.log("VALIDATION PASSED — SUM matches CTD TOTAL");
  };

  /* ================= EXECUTION ================= */

  preloadAllTabs()
    .then(() => collectCounts())
    .then(() => fetchTotalCount())
    .then(() => validateResults());
}

  checkMultiChoicePickerColumns() {
    cy.fixture("regulatoryAffairs").then(data => {
      const pickerColumns = data.CTDSubmissionRecords.multiChoicePickerColumns;
      pickerColumns.forEach(colName => {

        cy.getSC(
          '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Smart_Content||scClass=VLayout||index=0||length=7||classIndex=0||classLength=1||scClassIndex=0||scClassLength=7]/component/member[Class=QScreen_Data_Binder_Smart_Content_La||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Regulatory_Affairs_2||scClass=VLayout||index=2||length=9||classIndex=0||classLength=1||scClassIndex=2||scClassLength=9]/body/layoutBody/member[Class=QScreen_CTDSubmission_Records_2||scClass=VLayout||index=0||length=7||classIndex=0||classLength=1||scClassIndex=0||scClassLength=7]/body/layoutBody/member[Class=QScreen_CTD_Triangle_1||scClass=VLayout||index=0||length=5||classIndex=0||classLength=1||scClassIndex=0||scClassLength=5]/body/layoutBody/member[Class=QScreen_f6c7c834044041fe85b6ab16124dff65||scClass=VLayout||index=0||length=6||classIndex=0||classLength=1||scClassIndex=0||scClassLength=6]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_5efcffa85d37449cb86018c53ba62362||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/filterEditor/editRowForm/item[title=' + encodeURI(colName) + '||Class=SetFilterItem]/[icon="picker"]'
        ).click({ force: true });
      });

      this.clickAnywhereElse();
    });
  }

  checkColumns() {
    cy.fixture('regulatoryAffairs').then(data => {
      const expectedColumnNames = data.CTDSubmissionRecords.columnNames;
      cy.getColumnsAndTypes(
        '//QMainPageBase[ID="MainPage"]/member[Class=HLayout||index=2||length=4||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=1||length=3||classIndex=0||classLength=1||scClassIndex=1||scClassLength=3]/member[Class=QScreen_Base_Loader||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_Bootstrap||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Item_Repository_PQM_Product_||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Product_Family__Product_Lan||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/member[Class=QScreen_Data_Binder_Main_Page||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Smart_Content||scClass=VLayout||index=0||length=7||classIndex=0||classLength=1||scClassIndex=0||scClassLength=7]/component/member[Class=QScreen_Data_Binder_Smart_Content_La||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/body/layoutBody/member[Class=QScreen_Regulatory_Affairs_2||scClass=VLayout||index=2||length=9||classIndex=0||classLength=1||scClassIndex=2||scClassLength=9]/body/layoutBody/member[Class=QScreen_CTDSubmission_Records_2||scClass=VLayout||index=0||length=7||classIndex=0||classLength=1||scClassIndex=0||scClassLength=7]/body/layoutBody/member[Class=QScreen_CTD_Triangle_1||scClass=VLayout||index=0||length=5||classIndex=0||classLength=1||scClassIndex=0||scClassLength=5]/body/layoutBody/member[Class=QScreen_f6c7c834044041fe85b6ab16124dff65||scClass=VLayout||index=0||length=6||classIndex=0||classLength=1||scClassIndex=0||scClassLength=6]/member[Class=HLayout||index=0||length=1||classIndex=0||classLength=1]/member[Class=QScreenHolder||scClass=HLayout||index=0||length=3||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/member[Class=QScreen_5efcffa85d37449cb86018c53ba62362||scClass=VLayout||index=0||length=1||classIndex=0||classLength=1||scClassIndex=0||scClassLength=1]/component/header/headerButton[fieldName=EDMS_Number]/'
      ).then(tableInfo => {
        const availableCols = tableInfo.columns.map(col => col.textContent.trim());
        cy.log("Available UI Columns:", availableCols);
        cy.log("Expected Columns:", expectedColumnNames);
        expectedColumnNames.forEach(col => {
          expect(availableCols, `Column '${col}' should exist`).to.include(col);
        });
      });
    });
  }
  checkFormsandFieldsAvailablity() {
    cy.fixture("regulatoryAffairs").then(data => {
      const sections = data.CTDSubmissionRecords.accordionSections;
      const openAccordion = (name) => {
        const icon = `div[aria-label="${name}"] > table > tbody > tr > td > img`;
        cy.log(`Opening accordion: ${name}`);
        cy.wrap(null).then(() => {
          let attempts = 0;
          function tryOpen() {
            attempts++;
            cy.get(icon).invoke("attr", "src").then(src => {
              if (src.includes("opener_opened")) {
                cy.log(`${name} is OPEN`);
                return;
              }
              cy.log(`${name} not open. Clicking attempt ${attempts}`);
              cy.get(icon).click({ force: true });
              cy.wait(1500);

              if (attempts < 4) {
                tryOpen();
              } else {
                throw new Error(`FAILED to open accordion: ${name}`);
              }
            });
          }

          tryOpen();
        });
      };
      const closeAccordion = (name) => {
        const icon = `div[aria-label="${name}"] > table > tbody > tr > td > img`;

        cy.log(`Closing accordion: ${name}`);

        cy.wrap(null).then(() => {
          let attempts = 0;

          function tryClose() {
            attempts++;

            cy.get(icon).invoke("attr", "src").then(src => {

              if (src.includes("opener_closed")) {
                cy.log(`✓ ${name} is CLOSED`);
                return;
              }

              cy.log(`⚠ ${name} still open. Clicking attempt ${attempts}`);
              cy.get(icon).click({ force: true });
              cy.wait(1500);

              if (attempts < 4) {
                tryClose();
              } else {
                throw new Error(`FAILED to close accordion: ${name}`);
              }
            });
          }

          tryClose();
        });
      };
      sections.forEach(section => {
        const name = section.name;

        openAccordion(name);

        section.fields.forEach(field => {
          cy.contains(field, { timeout: 8000 }).should("be.visible");
        });

        closeAccordion(name);
      });
    });
  }
}
