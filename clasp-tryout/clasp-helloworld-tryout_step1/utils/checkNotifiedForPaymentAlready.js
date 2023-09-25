function checkNotifiedForPaymentAlready(cell_value) {
  var output = { state: "init", debug: {}, error: "" };
  try {
    return cell_value == CONST_NOTIFIED_ALREADY;
  } catch (error) {
    output = { ...output, error };
    console.log(output);
  }
}
