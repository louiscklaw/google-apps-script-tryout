function helloWorldDeleteRow() {
  // Browser.msgBox("Hello World!");
  var name = new Date().toLocaleDateString();
  try {
    var sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName("blablabla");
    sheet.deleteRow(1);
  } catch (err) {
    console.log(err);
  }
}
