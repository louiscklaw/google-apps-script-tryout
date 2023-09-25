function helloWorldNewSheet() {
  // Browser.msgBox("Hello World!");
  console.log("helloworld");
  // var name = (new Date()).toLocaleDateString();
  var name = "blablabla";
  SpreadsheetApp.getActiveSpreadsheet().insertSheet(name);
}
