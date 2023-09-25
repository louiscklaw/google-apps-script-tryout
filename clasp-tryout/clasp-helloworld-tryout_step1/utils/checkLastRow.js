function checkLastRow(sheet, current_row) {
  // return true if considered last row, false if not
  try {
    var current_row_cell = readCell(
      sheet,
      current_row,
      COL_STUDENT_PROGRESS_EMAIL_ADDRESS
    );
    var current_row_cell_1 = readCell(
      sheet,
      current_row + 1,
      COL_STUDENT_PROGRESS_EMAIL_ADDRESS
    );

    var current_row_cell_2 = readCell(
      sheet,
      current_row + 2,
      COL_STUDENT_PROGRESS_EMAIL_ADDRESS
    );

    var current_row_cell_3 = readCell(
      sheet,
      current_row + 3,
      COL_STUDENT_PROGRESS_EMAIL_ADDRESS
    );

    var current_row_cell_4 = readCell(
      sheet,
      current_row + 4,
      COL_STUDENT_PROGRESS_EMAIL_ADDRESS
    );

    var current_row_cell_5 = readCell(
      sheet,
      current_row + 5,
      COL_STUDENT_PROGRESS_EMAIL_ADDRESS
    );

    var check_is_empty = [
      isCellEmpty(current_row_cell),
      isCellEmpty(current_row_cell_1),
      isCellEmpty(current_row_cell_2),
      isCellEmpty(current_row_cell_3),
      isCellEmpty(current_row_cell_4),
      isCellEmpty(current_row_cell_5),
    ];

    return check_is_empty.indexOf(false) < 0;
  } catch (error) {
    console.log("getLastRow: error");
    return false;
  }
}
