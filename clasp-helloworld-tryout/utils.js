function isCellEmpty(cell) {
  sayHelloworld();
  console.log(cell.getValue());
  var temp = cell.getValue().toString().trim();
  return temp == "";
}

function getBlablablaSheet() {
  try {
    var sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName("blablabla");
    return sheet;
  } catch (err) {
    console.error(err);
  }
}

function getDayString() {
  return Utilities.formatDate(new Date(), "GMT+8", "yyyy-MM-dd HH:mm");
}
