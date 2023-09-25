function getCell(sheet, row, column) {
  try {
    var cell = sheet.getRange(column + row);
    return cell;
  } catch (err) {
    console.log(err);
  }
}
