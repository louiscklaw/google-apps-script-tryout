function isCellEmpty(cell) {
  var output = { state: "init", debug: {}, error: {} };
  try {
    // console.log("isCellEmpty:" + cell.getValue());
    var temp = cell.getValue().toString().trim();
    return temp == "";
  } catch (error) {
    console.log("isCellEmpty error");
    output = { ...output, error };
    console.log(output);
  }
}
