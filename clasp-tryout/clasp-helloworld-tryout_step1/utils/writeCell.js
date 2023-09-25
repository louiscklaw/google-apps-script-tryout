function writeCell(sheet, row, column, content) {
  var output = { state: "init", debug: {}, error: "" };
  try {
    output = { ...output, debug: { ...output.debug, row, column } };
    var cell_address = column + row.toString();
    output = { ...output, debug: { ...output.debug, cell_address } };
    var cell = sheet.getRange(cell_address);

    cell.setValue(content);

    // Browser.msgBox("apple");
  } catch (error) {
    console.log(output);
    console.log(error);
  }
}
