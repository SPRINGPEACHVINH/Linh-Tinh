function sendEmail() {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = sheet.getDataRange().getValues();
    var emailadress = new Array;
    var fullname = new Array;
    var infor = new Array;
    var mssv = new Array;
    for (var i = 2; i < data.length; i++) {
        var row = data[i];
        mssv.push(row[1]);
        emailadress.push(row[1] + "@gm.uit.edu.vn");
        fullname.push(row[2]);
        var j = 0;
        infor[j] = new Array(row[4], row[5]);
        j++;
    }
    for (var i = 0; i < fullname.length; i++) {
        var htmlBody = `<!DOCTYPE html>
                        <html>
                            <p>Thân chào bạn <b>${fullname[i]}</b> ,</p> 
                            <p>Đoàn khoa gửi đến bạn thông tin đặt áo khoa 2023 của bạn như sau: </p>
                            <p> &emsp; 
                            <b>+ Size: ${infor[i][0]}</b></p> 
                            <p> &emsp; 
                            <b>+ Số lượng:${infor[i][1]}</b></p>
                            <p>Bạn vui lòng kiểm tra kĩ thông tin và reply lại luồng mail này nếu có gì sai sót nhé.</p>
                            <strong style = "color:red;">Hạn cuối</strong> để báo lại sai sót là: <strong style = "color: red;">23h59 - 12/11/2023.</strong>
                            <p>Thời gian dự kiến có áo là ngày <strong style = "color:red;">19/12/2023.</strong> Thông tin cụ thể về địa điểm và cách thức nhận sẽ được thông báo sau qua mail.</p> 
                            Trân trọng./.
                        </html>`
        MailApp.sendEmail(
            {
                subject: "[Đoàn khoa MTT&TT] Thông báo rà soát thông tin đặt áo",
                htmlBody: htmlBody,
                cc: 'daoxuan.vinh3@gmail.com', emailadress
            }
        )
    }
}