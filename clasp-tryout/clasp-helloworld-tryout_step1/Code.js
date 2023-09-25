function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu("Automator Menu " + VER)
    .addItem("send 繳費通知 (未通知 -> 已通知)", "processPaymentNotice")
    .addItem("debug-Say Hello", "sayHelloworld")
    .addItem("debug-helloWorldEmail", "helloWorldEmail")
    .addItem("debug-helloWorldWriteCell", "helloWorldWriteCell")
    .addItem("debug-processPaymentNotice", "processPaymentNotice")
    .addToUi();
}
