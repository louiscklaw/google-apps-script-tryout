function getLastRow() {
  console.log("hello getLastRow");
  SpreadsheetApp.get;
}

function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu("Automator Menu v1.0")
    .addItem("Say Hello", "sayHelloworld")
    .addItem("send 繳費通知 (未通知 -> 已通知 2222)", "getLastRow")
    .addItem("helloWorldEmail", "helloWorldEmail")
    .addToUi();
}
