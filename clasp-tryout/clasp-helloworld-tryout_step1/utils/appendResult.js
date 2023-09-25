function appendResult(row, comment_to_write) {
  var output = { state: "init", debug: { comment_to_write }, error: "" };
  try {
    var sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(
      SHEET_STUDENT_PROGRESS
    );

    writeCell(sheet, row, COL_STUDENT_PROGRESS_RESULT, comment_to_write);
  } catch (error) {
    output = { ...output, error };
    console.log(output);
  }
}
