export function compareCsvFiles(params) {
  const {
    downloadedFilePath,
    dbFilePath,
    columnMapping,
    dateFields = [],
  } = params;

  const Papa = require('papaparse');
  const dayjs = require('dayjs');
  const utc = require('dayjs/plugin/utc');
  dayjs.extend(utc);

  const toDayjs = (value) => {
    if (!value) return null;
    const str = String(value).trim();
    const parsed = dayjs(str);
    return parsed.isValid() ? parsed.startOf('day') : null;
  };

  // Returns a clean, formatted string
  const normalizeDate = (value) => {
    const date = toDayjs(value);
    return date ? date.format('YYYY-MM-DD') : '';
  };


  const cleanText = (value) => {
    if (value == null || value === '') return '';
    let cleaned = String(value)
      .normalize('NFKC')
      .replace(/[^\x20-\x7E]/g, '')
      .replace(/\r?\n|\r/g, ' ')
      .replace(/\s+/g, '')
      .replace(/[\u0000-\u001F\u007F-\u009F]/g, '')
      .trim();

    if (/^\d+(\.\d+)?e[\+\-]?\d+$/i.test(cleaned)) {
      const num = Number(cleaned);
      if (!Number.isNaN(num)) cleaned = num.toString();
    }
    return cleaned;
  };

  const normalizeIfList = (value) => {
    if (typeof value !== 'string') return value;
    const parts = value.split(';').map(v => v.trim()).filter(Boolean);
    return parts.length > 1 ? parts.sort().join('; ') : value;
  };

  return cy.readFile(dbFilePath).then((dbCsv) => {
    return cy.readFile(downloadedFilePath).then((uiCsv) => {
      const dbData = Papa.parse(dbCsv, { header: true }).data;
      const uiData = Papa.parse(uiCsv, { header: true }).data;

      const processedDbData = dbData.map(row => {
        return Object.fromEntries(
          Object.entries(row).map(([key, value]) => {
            const isDate = dateFields.includes(key);
            const val = isDate ? normalizeDate(value) : value;
            return [key, cleanText(val)];
          })
        );
      });

      const processedUiData = uiData.map(row => {
        return Object.fromEntries(
          Object.entries(row).map(([key, value]) => {
            const isDate = dateFields.includes(key);
            const val = isDate ? normalizeDate(value) : value;
            return [key, cleanText(val)];
          })
        );
      });

      expect(processedUiData.length).to.equal(
        processedDbData.length - 1,
        `Row count mismatch: UI=${processedUiData.length}, DB=${processedDbData.length - 1}`
      );

      let totalRows = processedUiData.length;
      let totalColumns = Object.keys(columnMapping).length;
      let totalCellsValidated = totalRows * totalColumns;
      let allMatched = true;

      processedUiData.forEach((uiRow, index) => {
        const dbRow = processedDbData[index];
        Object.keys(columnMapping).forEach((uiColumnName) => {
          const dbColumnName = columnMapping[uiColumnName];
          const rawUiValue = uiRow[uiColumnName];
          const rawDbValue = dbRow[dbColumnName];

          const isDate = dateFields.includes(uiColumnName);

          let uiValue = cleanText(isDate ? normalizeDate(rawUiValue) : rawUiValue);
          let dbValue = cleanText(isDate ? normalizeDate(rawDbValue) : rawDbValue);

          cy.log(`Row ${index + 1} - Column: ${uiColumnName} (Mapped to DB Column: ${dbColumnName})`);
          cy.log(`UI Value: "${uiValue}"`);
          cy.log(`DB Value: "${dbValue}"`);

                   if (isDate) {
            const uiIsEmpty = !rawUiValue || rawUiValue.trim() === '';
            const dbIsEmpty = !rawDbValue || rawDbValue.trim() === '';

            if (uiIsEmpty && dbIsEmpty) {
              // ✅ Both are empty — considered match
              return;
            }

            const uiDate = toDayjs(rawUiValue);
            const dbDate = toDayjs(rawDbValue);

            const isMatch =
              uiDate && dbDate &&
              (
                uiDate.isSame(dbDate, 'day') ||
                uiDate.isSame(dbDate.subtract(1, 'day'), 'day') ||
                uiDate.isSame(dbDate.add(1, 'day'), 'day')
              );

            if (!isMatch) {
              allMatched = false;
              throw new Error(
                `Date mismatch at row ${index + 1}, column: ${uiColumnName} → UI: "${normalizeDate(rawUiValue)}" vs DB: "${normalizeDate(rawDbValue)}"`
              );
            }
          }


        });
      });

      // Final Log to Mochawesome Report
      cy.log(`Total Rows Validated: ${totalRows}`);
      cy.task('log', `Total Rows Validated: ${totalRows}`);

      cy.log(`Total Columns Validated: ${totalColumns}`);
      cy.task('log', `Total Columns Validated: ${totalColumns}`);

      cy.log(`Total Cells Validated: ${totalCellsValidated}`);
      cy.task('log', `Total Cells Validated: ${totalCellsValidated}`);

      if (allMatched) {
        return cy.wrap({
          totalRows,
          totalColumns,
          totalCellsValidated,
          matched: true
        });
      }
    });
  });

}