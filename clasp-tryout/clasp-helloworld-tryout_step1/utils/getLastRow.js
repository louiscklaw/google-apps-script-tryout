function getLastRow() {
  try {
    var sheet = getSheetStudentProgress();
    var row_scan = 9;
    for (let i = 1; i < row_scan; i++) {
      if (checkLastRow(sheet, i)) {
        // print last row number
        var last_row = i - 1;
        console.log("last row is " + last_row.toString());
        break;
      } else {
        // keep going
      }
    }
  } catch (error) {
    console.log(error);
  }
}
