function getLastRow(sheet) {
  var output = { state: "init", debug: {}, error: "" };
  try {
    var last_row = -1;
    var row_scan = 9;
    for (let i = 1; i < row_scan; i++) {
      if (checkLastRow(sheet, i)) {
        // print last row number
        last_row = i - 1;
        output = { ...output, debug: { ...output.debug, last_row } };
        console.log("last row is " + last_row.toString());
        break;
      } else {
        // keep going
      }
    }
    return last_row;
  } catch (error) {
    output = { ...output, error };
    console.log(output);
  }
}
