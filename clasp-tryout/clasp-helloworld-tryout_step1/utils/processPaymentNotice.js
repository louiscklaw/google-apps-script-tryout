function processPaymentNotice() {
  var output = { state: "init", debug: {}, error: "" };
  try {
    var sheet = getSheetStudentProgress();
    var last_row = getLastRow(sheet);
    output = { ...output, debug: { ...output.debug, last_row } };

    for (var i = ROW_START; i < last_row + 1; i++) {
      var email_cell = getCell(sheet, i, COL_STUDENT_PROGRESS_EMAIL_ADDRESS);
      var payment_progress_cell = getCell(
        sheet,
        i,
        COL_STUDENT_PROGRESS_PAYMENT_PROGRESS
      );
      var payment_progress = readCell(payment_progress_cell);

      if (checkNotNotifiedForPayment(payment_progress)) {
        resetResult(i);
        appendResult(
          i,
          `not notified(${CONST_NOT_NOTIFIED}), proceed send payment notification email`
        );

        sendPaymentNoticeEmail(i);
      } else {
        resetResult(i);
        appendResult(i, `not "${CONST_NOT_NOTIFIED}" skipping`);

        // var student_email = readCell(email_cell);
      }
    }
  } catch (error) {
    output = { ...output, error };
    console.log(output);
  }
}
