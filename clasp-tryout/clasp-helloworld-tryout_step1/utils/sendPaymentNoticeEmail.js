function sendPaymentNoticeEmail(row) {
  var output = { state: "init", debug: {}, error: {} };
  var sheet = getSheetStudentProgress();
  var student_email_address_cell = getCell(
    sheet,
    row,
    COL_STUDENT_PROGRESS_EMAIL_ADDRESS
  );
  var student_email_address = readCell(student_email_address_cell);

  try {
    var subject = email_title("chinese course");
    // var body = email_content("中文名", "chinese 中文科", "CHI001");
    var htmlBody = email_content("中文名", "chinese 中文科", "CHI001");
    var recipient = student_email_address;
    var sender = "sender@example.com";

    var options = {
      replyTo: sender,
      to: recipient,
      subject: subject,
      // body: body,
      htmlBody: htmlBody,
    };

    sendEmail(options);
    appendResult(row, "send email done");

    output = { ...output, state: "send email done" };
  } catch (error) {
    output = { ...output, error };
    console.log("sendEmail error");
    console.log(error);
  }
}
