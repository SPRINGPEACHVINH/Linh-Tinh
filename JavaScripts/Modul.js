function SendEmail() {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = sheet.getDataRange().getValues();
    var Name = new Array;
    var SDT = new Array;
    var Room = new Array;
    var Time = new Array;
    var Purpose = new Array;
    for (var i = 2; i < data.length; i++) {
        var row = data[i];
        Name.push(row[2]);
        SDT.push(row[4]);
        Room.push(row[5]);
        var date = new Date();
        date = row[6];
        var month = date.getMonth() + 1;
        Time.push(row[7] + " ngày " + date.getDate() + "/" + month + "/" + date.getFullYear());
        Purpose.push(row[8]);
    }
    var MainBody = `<p>1. Hoạt động 1:</p>
                    <p> &emsp;
                        + Thời gian: ${Time[0]} </p> 
                    <p> &emsp; 
                        + Địa điểm: ${Room[0]}</p> 
                    <p> &emsp; 
                        + Người phụ trách: ${Name[0]} (Sđt: ${SDT[0]})</p>
                    <p> &emsp; 
                        + CSVC cần hỗ trợ: Remote máy chiếu, remote máy lạnh, micro.</p>`;
    for (var i = 1; i < Name.length; i++) {
        var temp = i + 1;
        MainBody += `<p> ${temp}. Hoạt động ${temp}:</p> 
                     <p> &emsp; 
                      + Thời gian: ${Time[i]}</p>
                     <p> &emsp; 
                      + Địa điểm: ${Room[i]}</p>
                     <p> &emsp; 
                      + Người phụ trách: ${Name[i]} (Sđt: ${SDT[i]})</p>
                     <p> &emsp; 
                      + CSVC cần hỗ trợ: Remote máy chiếu, remote máy lạnh, micro.</p>`;
    }
    var htmlBody = `<!DOCTYPE html>
                    <html>
                    <p>Kính chào văn phòng,</p>
                    <p></p>
                    <p>Đoàn khoa MMT&TT xin gửi lịch mượn phòng tuần ... như sau:</p>`;
    htmlBody += MainBody;
    console.log(htmlBody);
    htmlBody += `Trân trọng./.
                 </html>`;
    console.log(htmlBody);
    MailApp.sendEmail({
      to: "22521666@gm.uit.edu.vn",
      subject: "[TEST] Đoàn khoa MMT&TT xin gửi lịch mượn phòng tuần ... như sau:",
      htmlbody: htmlBody,
      cc: "22520758@gm.uit.edu.vn"
    }
    )
}