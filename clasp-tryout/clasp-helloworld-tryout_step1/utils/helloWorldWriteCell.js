function helloWorldWriteCell() {
  // Browser.msgBox("Hello World!");
  try {
    var sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName("blablabla");

    var cell = sheet.getRange("A2");
    cell.setValue("A2");

    var cell = sheet.getRange(1, 1);
    cell.setValue("1,1");

    var cell = sheet.getRange(1, 1);
    cell.setValue(getDayString());

    var cell = sheet.getRange(1, 1);
    console.log(isCellEmpty(cell));

    var cell = sheet.getRange(2, 1);
    console.log(isCellEmpty(cell));

    var cell = sheet.getRange(10, 1);
    console.log(isCellEmpty(cell));
  } catch (err) {
    console.log(err);
  }
}
