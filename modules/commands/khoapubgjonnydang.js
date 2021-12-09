
module.exports.config = {
    name: "khoapugJohnnyĐặng",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "LAM",
    description: "",
    commandCategory: "không cần dấu lệnh",
    usages: "",
    cooldowns: 0,
    denpendencies: {
        "fs": "",
        "request": ""
    }
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "11573034828_1575.gif")) request("https://cdn.discordapp.com/attachments/914215951921184769/915998060188950618/11573034828_1575.gif").pipe(fs.createWriteStream(dirMaterial + "11573034828_1575.gif"));
}
module.exports.handleEvent = async ({ event, api, Currencies,Users, args, utils, global, client }) => {
    const fs = require("fs");
    let name = await Users.getNameUser(event.senderID)
    var msg = {
                body: `Quá ghê gớm 😬😱\nVà đây là Thánh Bú Liếm 🤩\nJohnny Đặng uiiii...🥶😰một tình huống lừa 35 tỷ cực gắt!!🙄🤢\n*music🎼🎼🎼\nThẹn thùng nhìn Johnny Đặng quay gót đi mãi☹️😭\nKhoa đứng chết lặng trong tim💔😭\nDù rằng bên Khoa đã có ai🤨\nNhưng nơi đây Johnny Đặng vẫn còn chờ...😭😅`,
                attachment: fs.createReadStream(__dirname + `/noprefix/11573034828_1575.gif`)
            }
    if (event.body.toLowerCase() == "khoa pug"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "Johnny Đặng"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
        };
module.exports.run = async ({ event, api, Currencies, args, utils }) => {
return api.sendMessage("Dùng sai cách rồi lêu lêu",event.threadID)
    }