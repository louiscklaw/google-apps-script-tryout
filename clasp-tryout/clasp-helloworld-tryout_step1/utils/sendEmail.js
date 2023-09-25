function sendEmail(options) {
  var output = { state: "init", debug: {}, error: {} };
  try {
    MailApp.sendEmail(options);
    output = { ...output, state: "done" };
  } catch (error) {
    output = { ...output, error };
    console.log("sendEmail error");
    console.log(error);
  }
}
