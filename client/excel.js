const XLSX = require("xlsx");

const workbook = XLSX.readFile("dummyexcel.xlsx");

let worksheets = {};
for (const sheetName of workbook.sheetNames) {
    worksheets[sheetName] = XLSX.utils.sheet_to_html(workbook.Sheets[sheetname]);
}