function helloWorldEmail() {
  try {
    var subject = "Hello from Google Apps Script";
    var body = "This is the content of the email.";
    var htmlBody = "<h1>This is the content of the email.</h1>";
    var recipient = "testhelloworld04@gmail.com";
    var sender = "sender@example.com";

    var options = {
      replyTo: sender,
      to: recipient,
      subject: subject,
      body: body,
      htmlBody: htmlBody,
    };

    MailApp.sendEmail(options);
  } catch (err) {
    console.log(err);
  }
}
