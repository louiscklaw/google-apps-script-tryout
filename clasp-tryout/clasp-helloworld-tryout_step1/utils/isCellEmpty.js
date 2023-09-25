function isCellEmpty(cell) {
  // console.log("isCellEmpty:" + cell.getValue());
  var temp = cell.getValue().toString().trim();
  return temp == "";
}
