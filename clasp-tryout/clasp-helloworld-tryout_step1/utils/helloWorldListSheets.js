function helloWorldListSheets() {
  // Browser.msgBox("Hello World!");
  var name = new Date().toLocaleDateString();
  try {
    var sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets();
    console.log(sheets.length);
  } catch (err) {
    console.log(err);
  }
}
