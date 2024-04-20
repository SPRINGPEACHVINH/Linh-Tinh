function sendEmail() {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    // var emailadress = sheet.getRange("B3:B19").getValues();
    var emailadress = [22521666, 22521676, 22520101];
    for (var i = 0; i < emailadress.length; i++) {
        emailadress[i] = emailadress[i] + "@gm.uit.edu.vn"
    }
    console.log(emailadress + "/n");
}
