function helloWorldWriteCell() {
  // Browser.msgBox("Hello World!");
  try {
    var sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName("TEST");

    var cell = sheet.getRange("A2");
    cell.setValue("111");

    writeCell(sheet, 2, COL_STUDENT_PROGRESS_RESULT, "hello content");

    // var cell = sheet.getRange(1, 1);
    // cell.setValue("1,1");

    // var cell = sheet.getRange(1, 1);
    // cell.setValue(getDayString());

    // var cell = sheet.getRange(1, 1);
    // console.log(isCellEmpty(cell));

    // var cell = sheet.getRange(2, 1);
    // console.log(isCellEmpty(cell));

    // var cell = sheet.getRange(10, 1);
    // console.log(isCellEmpty(cell));
  } catch (err) {
    console.log(err);
  }
}
