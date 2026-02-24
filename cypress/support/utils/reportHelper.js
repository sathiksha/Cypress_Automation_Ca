function getCleanTimestamp() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hour = String(now.getHours()).padStart(2, '0');
  const minute = String(now.getMinutes()).padStart(2, '0');
  return `${year}-${month}-${day}-${hour}${minute}`;
}

// Clears the report.txt before tests run
function clearReportFile(path) {
  return cy.writeFile(path, '');
}

// Your existing writeReportFile (keep unchanged)
function writeReportFile(result, reportFilePath) {
  const report = [];

  if (result && result.matched) {
    report.push(`Total Rows Validated: ${result.totalRows}`);
    report.push(`Total Columns Validated: ${result.totalColumns}`);
    report.push(`Total Cells Validated: ${result.totalCellsValidated}`);
  } else {
    report.push('Mismatch found in CSV comparison');
  }

  return cy.writeFile(reportFilePath, report.join('\n'), { flag: 'a+' });
}

// **New helper to append a custom line to report**
function appendValidationLine(line, reportFilePath) {
  return cy.writeFile(reportFilePath, line + '\n', { flag: 'a+' });
}

// // Renames the report.txt to timestamped file after test
function renameReportFile() {
  return cy.task('renameReportFiles', getCleanTimestamp());
}

module.exports = {
  clearReportFile,
  writeReportFile,
  appendValidationLine,  // new export
  renameReportFile,
  getCleanTimestamp
};
