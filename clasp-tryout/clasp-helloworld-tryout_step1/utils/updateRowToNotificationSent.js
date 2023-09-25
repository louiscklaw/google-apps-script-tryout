function updateRowToNotificationSent(row) {
  var output = { state: "init", debug: { row }, error: {} };
  try {
    var sheet = getSheetStudentProgress();
    var payment_progress_cell = getCell(
      sheet,
      row,
      COL_STUDENT_PROGRESS_PAYMENT_PROGRESS
    );
    writeCell(payment_progress_cell, CONST_NOTIFIED_ALREADY);

    return;
  } catch (error) {
    output = { ...output, error };
    console.log(error);
  }
}
