function sayHelloworld() {
  console.log('say helloworld')
}

function helloWorldEmail() {
  try {

    var subject = 'Hello from Google Apps Script';
    var body = 'This is the content of the email.';
    var htmlBody = '<h1>This is the content of the email.</h1>';
    var recipient = 'testhelloworld04@gmail.com';
    var sender = 'sender@example.com';

    var options = {
      replyTo: sender,
      to: recipient,
      subject: subject,
      body: body,
      htmlBody: htmlBody
    };

    MailApp.sendEmail(options);



  } catch (err) {
    console.log(err)
  }
}

function helloWorldRemoveSheet() {
  // Browser.msgBox("Hello World!");
  var name = (new Date()).toLocaleDateString();
  try {
    var sheet = SpreadsheetApp.openById('1RVl3rksPRzoG74WM6uDcIxXiW9uX7ppJj7iKr1hEDU0').getSheetByName("9/25/2023");
    SpreadsheetApp.openById('1RVl3rksPRzoG74WM6uDcIxXiW9uX7ppJj7iKr1hEDU0').deleteSheet(sheet)
  } catch (err) {
    console.log(err)
  }
}

function helloWorldListSheets() {
  // Browser.msgBox("Hello World!");
  var name = (new Date()).toLocaleDateString();
  try {
    var sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets();
    console.log(sheets.length)
  } catch (err) {
    console.log(err)
  }
}

function helloWorldNewSheet() {
  // Browser.msgBox("Hello World!");
  console.log('helloworld');
  // var name = (new Date()).toLocaleDateString();
  var name = "blablabla"
  SpreadsheetApp.getActiveSpreadsheet().insertSheet(name);
}

function helloWorldInsertRow() {
  // Browser.msgBox("Hello World!");
  var name = (new Date()).toLocaleDateString();
  try {
    var sheet = SpreadsheetApp.openById('1RVl3rksPRzoG74WM6uDcIxXiW9uX7ppJj7iKr1hEDU0').getSheetByName("blablabla");
    sheet.appendRow([null, '1', '2', '3'])
    sheet.insertRowBefore(1)

    var cell = sheet.getRange(1, 1);
    cell.setValue("1,1");

  } catch (err) {
    console.log(err)
  }
}

function helloWorldReadCell() {
  // Browser.msgBox("Hello World!");
  var name = (new Date()).toLocaleDateString();
  try {
    var sheet = getBlablablaSheet();

    var cell = sheet.getRange("A2");
    console.log(cell.getValue())

    var cell = sheet.getRange(1, 1);
    console.log(cell.getValue());

  } catch (err) {
    console.log(err)
  }
}

function helloWorldDeleteColumn() {
  // Browser.msgBox("Hello World!");
  try {
    var sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName("blablabla");
    // sheet.insertColumnBefore(2)
    // sheet.insertColumnAfter(2)
    sheet.deleteColumn(1)

  } catch (err) {
    console.log(err)
  }
}

function helloWorldInsertColumn() {
  // Browser.msgBox("Hello World!");
  try {
    var sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName("blablabla");
    // sheet.insertColumnBefore(2)
    // sheet.insertColumnAfter(2)
    sheet.insertColumnsAfter(1,2)

  } catch (err) {
    console.log(err)
  }
}

function helloWorldDeleteRow() {
  // Browser.msgBox("Hello World!");
  var name = (new Date()).toLocaleDateString();
  try {
    var sheet = SpreadsheetApp.openById('1RVl3rksPRzoG74WM6uDcIxXiW9uX7ppJj7iKr1hEDU0').getSheetByName("blablabla");
    sheet.deleteRow(1)

  } catch (err) {
    console.log(err)
  }
}

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

    var cell = sheet.getRange(1,1);
    console.log(isCellEmpty(cell))

    var cell = sheet.getRange(2,1);
    console.log(isCellEmpty(cell))

    var cell = sheet.getRange(10,1);
    console.log(isCellEmpty(cell))

  } catch (err) {
    console.log(err)
  }
}
