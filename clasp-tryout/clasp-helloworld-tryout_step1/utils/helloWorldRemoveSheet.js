function helloWorldRemoveSheet() {
  // Browser.msgBox("Hello World!");
  var name = new Date().toLocaleDateString();
  try {
    var sheet = SpreadsheetApp.openById(
      "1RVl3rksPRzoG74WM6uDcIxXiW9uX7ppJj7iKr1hEDU0"
    ).getSheetByName("9/25/2023");
    SpreadsheetApp.openById(
      "1RVl3rksPRzoG74WM6uDcIxXiW9uX7ppJj7iKr1hEDU0"
    ).deleteSheet(sheet);
  } catch (err) {
    console.log(err);
  }
}
