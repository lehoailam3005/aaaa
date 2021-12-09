module.exports.config = {
 name: "matnice",
 version: "1.0.0",
 hasPermssion: 0,
 credits: "LAM",
 description: "Nhạc User yêu cầu",
 commandCategory: "Nhạc User yêu cầu",
 usages: "",
 cooldowns: 5,
};

module.exports.run = function({ api, event, args }) {
 const request = require("request");
 const fs = require("fs-extra");
 return request(`https://cdn.discordapp.com/attachments/905335032665755648/917320614174404648/Mat_Nice_Cha_Cha_Tune_-_Ssahita_ft._Duy_LionCukak_Remix-_Audio_Lyrics_Video.mp3`).pipe(fs.createWriteStream(__dirname+'/cache/say.mp3')).on('close',() => api.sendMessage({body: "Thêm bài hát yêu thích của bạn tại link | https://bom.so/9gR41i \n ⚜ 1k Người theo dõi fb chỉ 40k :3 Liên Hệ : www.facebook.com/lehoailam3005 ⚜", attachment: fs.createReadStream(__dirname + "/cache/say.mp3")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/say.mp3")));
}