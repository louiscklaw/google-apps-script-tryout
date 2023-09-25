function appendResult(row) {
  try {
    var sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(
      SHEET_STUDENT_PROGRESS
    );
  } catch (error) {
    console.log(error);
  }
}
