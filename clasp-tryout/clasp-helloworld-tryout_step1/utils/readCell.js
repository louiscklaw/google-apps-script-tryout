function readCell(cell) {
  try {
    return cell.getValue() || "";
  } catch (err) {
    console.log("readCell error");
    console.log(err);
  }
}
