function helloWorldReadCell() {
  // Browser.msgBox("Hello World!");
  var name = new Date().toLocaleDateString();
  try {
    var sheet = getBlablablaSheet();

    var cell = sheet.getRange("A2");
    console.log(cell.getValue());

    var cell = sheet.getRange(1, 1);
    console.log(cell.getValue());
  } catch (err) {
    console.log(err);
  }
}
