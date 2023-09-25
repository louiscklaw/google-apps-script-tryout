function writeCell(cell, content) {
  var output = { state: "init", debug: {}, error: "" };
  try {
    cell.setValue(content);
  } catch (error) {
    console.log("writeCell error");
    console.log(output);
    console.log(error);
  }
}
