const email_title = (course_title) => `${course_title} 取錄及付款通知`;

const email_content = (chinese_name, course_name, course_code) => {
  return `
<中文姓名> 你好，

多謝閣下報名參加

${course_name}
${course_code}

很高興通知您，課程即將開辦，請閣下於盡快完成付款收續，以確認報名。

繳費方式 :
請按下方連結下載轉數快/ FPS 二維碼，並使用各大銀行的手機現財App 内掃描二維碼會直接付款。

<付款連結>

請保留付款截圖或證明後，貼上附件後回覆本電郵。


如付款有任何困難，請聯絡 9134 7967 或 回覆本電郵即可
如課程前7天前仍未付款者，本司有權將課程名額轉讓至候補名單

最後，附上二維碼付款指引教學，以供參考。謝謝 😊

<附件 - 智豐收二維碼付款指引.pdf>

樂歷課程報名處
<今日日期>

  `.trim();
};
