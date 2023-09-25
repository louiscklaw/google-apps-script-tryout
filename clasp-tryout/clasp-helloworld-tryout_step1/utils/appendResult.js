function appendResult(row, comment_to_write) {
  var output = { state: "init", debug: { comment_to_write }, error: "" };
  try {
    var sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(
      SHEET_STUDENT_PROGRESS
    );

    var result_cell = getCell(sheet, row, COL_STUDENT_PROGRESS_RESULT);
    var result_value = readCell(result_cell);

    if (result_value.trim() == "") {
      writeCell(result_cell, comment_to_write);
    } else {
      writeCell(result_cell, [result_value, comment_to_write].join("\n"));
    }
  } catch (error) {
    output = { ...output, error };
    console.log(output);
  }
}
