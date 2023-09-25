function getSheetStudentProgress() {
  try {
    var sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(
      SHEET_STUDENT_PROGRESS
    );
    return sheet;
  } catch (error) {
    console.log(error);
  }
}
