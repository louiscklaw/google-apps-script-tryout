function helloWorldInsertRow() {
  // Browser.msgBox("Hello World!");
  var name = new Date().toLocaleDateString();
  try {
    var sheet = SpreadsheetApp.openById(
      "1RVl3rksPRzoG74WM6uDcIxXiW9uX7ppJj7iKr1hEDU0"
    ).getSheetByName("blablabla");
    sheet.appendRow([null, "1", "2", "3"]);
    sheet.insertRowBefore(1);

    var cell = sheet.getRange(1, 1);
    cell.setValue("1,1");
  } catch (err) {
    console.log(err);
  }
}
