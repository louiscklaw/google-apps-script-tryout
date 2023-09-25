function sendPaymentNoticeEmail(row) {
  var output = { state: "init", debug: {}, error: {} };
  var sheet = getSheetStudentProgress();

  // var filename = "payment_guide.pdf";
  var file_id = "1J-x4iudUq3No5vU649dt2RrTO9pPcehz";
  var file = DriveApp.getFileById(file_id);

  // NOTE: student email?
  var student_email_address_cell = getCell(
    sheet,
    row,
    COL_STUDENT_PROGRESS_EMAIL_ADDRESS
  );
  var student_email_address = readCell(student_email_address_cell);

  var student_chinese_name_cell = getCell(
    sheet,
    row,
    COL_STUDENT_PROGRESS_CHINESE_NAME
  );
  var student_chinese_name = readCell(student_chinese_name_cell);

  // NOTE: courase_name
  var course_offered_cell = getCell(
    sheet,
    row,
    COL_STUDENT_PROGRESS_COURSE_OFFERED
  );
  var course_offered = readCell(course_offered_cell);
  if (course_offered == "") {
    output = {
      ...output,
      debug: {
        ...output.debug,
        remarks: {
          course_offered,
          comment: "found empty",
        },
      },
    };
  }

  // NOTE: course_code
  var course_code_cell = getCell(sheet, row, COL_STUDENT_PROGRESS_COURSE_CODE);
  var course_code = readCell(course_code_cell);
  if (course_code == "") {
    output = {
      ...output,
      debug: {
        ...output.debug,
        remarks: {
          course_code,
          comment: "found empty",
        },
      },
    };
  }

  // NOTE: payment_link
  var payment_link_cell = getCell(
    sheet,
    row,
    COL_STUDENT_PROGRESS_PAYMENT_LINK
  );
  var payment_link = readCell(payment_link_cell);
  if (payment_link == "") {
    output = {
      ...output,
      debug: {
        ...output.debug,
        remarks: {
          payment_link,
          comment: "found empty",
        },
      },
    };
  }

  // NOTE: courase_name
  // NOTE: courase_name

  try {
    var subject = email_title(course_offered);
    // var body = email_content("中文名", "chinese 中文科", "CHI001");
    var htmlBody = email_content(
      student_chinese_name,
      course_offered,
      course_code,
      payment_link,
      getChineseDayString()
    );
    var recipient = student_email_address;

    // TODO: on behalf of who ?
    var sender = "sender@example.com";

    var options = {
      replyTo: sender,
      to: recipient,
      subject: subject,
      // body: body,
      htmlBody: htmlBody,
      attachments: [file.getAs(MimeType.PDF)],
    };

    sendEmail(options);
    appendResult(row, "send email done");

    output = { ...output, state: "send email done" };
  } catch (error) {
    output = { ...output, error };
    console.log("sendEmail error");
    console.log(error);
    throw error;
  }
}
