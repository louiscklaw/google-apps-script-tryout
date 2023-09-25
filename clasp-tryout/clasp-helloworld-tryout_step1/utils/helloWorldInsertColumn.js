function helloWorldInsertColumn() {
  // Browser.msgBox("Hello World!");
  try {
    var sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName("blablabla");
    // sheet.insertColumnBefore(2)
    // sheet.insertColumnAfter(2)
    sheet.insertColumnsAfter(1, 2);
  } catch (err) {
    console.log(err);
  }
}
