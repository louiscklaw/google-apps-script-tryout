function helloWorldDeleteRow() {
  // Browser.msgBox("Hello World!");
  var name = new Date().toLocaleDateString();
  try {
    var sheet = SpreadsheetApp.openById(
      "1RVl3rksPRzoG74WM6uDcIxXiW9uX7ppJj7iKr1hEDU0"
    ).getSheetByName("blablabla");
    sheet.deleteRow(1);
  } catch (err) {
    console.log(err);
  }
}
