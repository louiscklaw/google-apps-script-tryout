function checkEmailQuotaAvailable() {
  var output = { state: "init", debug: {}, error: {} };
  try {
    var emailQuotaRemaining = MailApp.getRemainingDailyQuota();

    return emailQuotaRemaining > 0;
  } catch (error) {
    console.log(error);
  }
}
