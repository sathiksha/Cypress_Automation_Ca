/**
 * FINAL PRODUCTION-GRADE generatePOM.js
 *
 * ✔ Correct import path resolution (always starts with "./")
 * ✔ Avoid duplicate class imports
 * ✔ Final pages get full methods
 * ✔ Intermediate folders get open() only
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.join("cypress", "e2e-regression", "jj", "jnj-pages");

/* ================= FULL METHOD BLOCK (FINAL PAGES ONLY) ================ */
const fullMethodBlock = `
  open() { cy.getSC('locator').click(); }
  refresh() { cy.getSC('locator').click(); }
  checkColumns() { cy.getSC('locator').click(); }
  checkMultiChoicePickerColumns() { cy.getSC('locator').click(); }
  openARecord() { cy.getSC('locator').click(); }
  openDetails() { cy.getSC('locator').click(); }
  checkFormsandFieldsAvailablity() { cy.getSC('locator').click(); }
  checkFormsandFields() { cy.getSC('locator').click(); }
  openRelatedObjects() { cy.getSC('locator').click(); }
  checkRelatedObjects() { cy.getSC('locator').click(); }
  rightClickARecord() { cy.getSC('locator').click(); }
  addBookmark() { cy.getSC('locator').click(); }
  columnHeaderId() { cy.getSC('locator').click(); }
  expandRecord() { cy.getSC('locator').click(); }
  bookmarkARecord() { cy.getSC('locator').click(); }
  checkBookmarkFunctionality() { cy.getSC('locator').click(); }
  minimizeARecord() { cy.getSC('locator').click(); }
`;

/* =========== CONTAINER PAGES ONLY GET open() ============ */
const containerMethod = `
  open() { cy.getSC('locator').click(); }
`;

/* =========== Convert folder -> ClassName.js ============ */
function toClassName(name) {
  return name.replace(/\s+/g, "").replace(/[^a-zA-Z0-9]/g, "");
}

/* ========= Write file helper ========= */
function writeFile(file, content) {
  fs.writeFileSync(file, content, "utf8");
  console.log("✔ Created:", file);
}

/* ========== Correct import resolver (ENSURES ./ prefix) =========== */
function getImportPath(currentFolder, targetFolder, jsClassName) {
  let rel = path.relative(currentFolder, targetFolder).replace(/\\/g, "/");

  if (!rel.startsWith(".")) rel = "./" + rel;
  else if (!rel.startsWith("./")) rel = "./" + rel.replace(/^\./, "");

  return `${rel}/${jsClassName}`;
}

/* ================= STRUCTURED CONTENT ================== */
const structuredContent = {
  "Documents": {},
  "Regulatory Affairs": {
    "CTD_Submission Records": {},
    "Products": {},
    "Applications": {},
    "Registrations": {},
    "Package Sets": {},
    "CTA-IND Events": {},
    "BLA-NDA Events": {},
  },
  "Post Market": {
    "Complaints": {},
    "Complaint records": {},
  },
  "Quality Management": {
    "Change Controls": {
      "Change Controls": {},
      "Assessment Executions": {},
      "Implementations": {},
    },
    "Escalations": {
      "Escalations": {},
      "Assessments": {},
      "Meetings": {},
    },
    "Nonconformances": {
      "Nonconformances": {},
      "Containments": {},
      "NC Investigations": {},
      "Supplemental Investigations": {},
      "Laboratory Investigations": {},
      "NC Corrections": {},
      "Actions": {},
      "Risk Assessments": {},
    },
    "CAPAs": {
      "CAPAs": {},
      "Interim Controls": {},
      "CAPA Investigations": {},
      "Supplemental Investigations": {},
      "CAPA Implementation": {},
      "Actions": {},
      "Effectiveness Plan": {},
      "Effectiveness Review": {},
    },
    "Audits": {
      "Audits": {},
      "Audit Observations": {},
    },
    "Accounts": {},
  },
  "Laboratory Information": {
    "Stability studies": {
      "Stability studies": {},
      "Forecasts": {},
      "Inventories": {},
    },
    "Stability Data": {},
    "Release Data": {},
    "Specifications": {},
  },
  "Manufacturing": {
    "Materials": {},
    "Batches": {},
    "Batch Flows": {},
  },
};

/* =================== ROOT STRUCTURE ======================= */
const PLANETS = {
  "Planets": {
    "Documents": {},
    "Regulatory Affairs": structuredContent["Regulatory Affairs"],
    "Post Market": structuredContent["Post Market"],
    "Quality Management": structuredContent["Quality Management"],
    "Laboratory Information": structuredContent["Laboratory Information"],
    "Manufacturing": structuredContent["Manufacturing"],
    "Product": {
      "ProductFamily": {},
      "Content": structuredContent,
      "AdminDataBinder": {
        "Smart Content": structuredContent,
        "Linked Content": structuredContent,
      },
      "UserDataBinder": {
        "Smart Content": structuredContent,
        "Linked Content": structuredContent,
      },
      "ProductSpecificBinder": {
        "Smart Content": structuredContent,
        "Linked Content": structuredContent,
      },
    },
  },
};

/* ================= RECURSIVE NODE GENERATOR ================= */
function generateNode(currentPath, node) {
  for (const folderName of Object.keys(node)) {
    const folder = path.join(currentPath, folderName);
    fs.mkdirSync(folder, { recursive: true });

    const className = toClassName(folderName);
    const fileName = path.join(folder, `${className}.js`);
    const children = Object.keys(node[folderName]);
    const isLeaf = children.length === 0;

    let imports = "";
    let constructorAssign = "";

    children.forEach((childName) => {
      const childClass = toClassName(childName);

      if (childClass === className) return;

      const childFolder = path.join(folder, childName);
      const importPath = getImportPath(folder, childFolder, childClass);

      imports += `import { ${childClass} } from "${importPath}";\n`;
      constructorAssign += `    this.${childClass} = new ${childClass}();\n`;
    });

    let fileContent = "";

    if (isLeaf) {
      fileContent = `${imports}export class ${className} {
${fullMethodBlock}
  constructor() {
${constructorAssign || "    // No sub modules"}
  }
}`;
    } else {
      fileContent = `${imports}export class ${className} {
${containerMethod}
  constructor() {
${constructorAssign || "    // No child modules"}
  }
}`;
    }

    writeFile(fileName, fileContent);

    if (!isLeaf) generateNode(folder, node[folderName]);
  }
}

/* ===================== RUN IT ========================== */
console.log("🚀 Generating POM into:", ROOT);
generateNode(ROOT, PLANETS);
console.log("✔ POM generation complete!");
