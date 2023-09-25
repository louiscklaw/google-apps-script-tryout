function resetResult(row) {
  var output = { state: "init", debug: {}, error: "" };
  try {
    var sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(
      SHEET_STUDENT_PROGRESS
    );

    var result_cell = getCell(sheet, row, COL_STUDENT_PROGRESS_RESULT);
    return writeCell(result_cell, null);
  } catch (error) {
    console.log("resetResult error");
    output = { ...output, error };
    console.log(output);
    console.log(error);
  }
}
