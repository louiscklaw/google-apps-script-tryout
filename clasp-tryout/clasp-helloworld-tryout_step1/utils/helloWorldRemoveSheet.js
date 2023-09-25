function helloWorldRemoveSheet() {
  // Browser.msgBox("Hello World!");
  var name = new Date().toLocaleDateString();
  try {
    var sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName("9/25/2023");
    SpreadsheetApp.openById(SHEET_ID).deleteSheet(sheet);
  } catch (err) {
    console.log(err);
  }
}
