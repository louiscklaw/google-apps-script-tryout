function checkNotNotifiedForPayment(cell_value) {
  var output = { state: "init", debug: {}, error: "" };
  try {
    return cell_value == CONST_NOT_NOTIFIED;
  } catch (error) {
    output = { ...output, error };
    console.log(output);
  }
}
