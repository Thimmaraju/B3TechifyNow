// This utility reads job title data from an Excel file using xlsx package
const xlsx = require('xlsx');
const path = require('path');

function getJobTitleDataFromExcel() {
    const filePath = path.resolve(__dirname, '../../testdata/jobtitle.xlsx');
    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const data = xlsx.utils.sheet_to_json(worksheet);
    // Returns array of objects, each representing a row
    return data;
}

module.exports = { getJobTitleDataFromExcel };
