module.exports.config = {
 name: "amthambenemcover",
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
 return request(`https://cdn.discordapp.com/attachments/905335032665755648/917078750221459496/-_am_tham_ben_em_-_-_slowed_my_girl_ct_-_son_tung_m-tp_cover_clow_-_roi_xa_lang_thinh_buoc_i..mp3`).pipe(fs.createWriteStream(__dirname+'/cache/say.mp3')).on('close',() => api.sendMessage({body: "bài hát yêu thích của bạn tại link | https://bom.so/9gR41i \n ⚜ 1k Người theo dõi fb chỉ 40k :3 Liên Hệ : www.facebook.com/lehoailam3005 ⚜", attachment: fs.createReadStream(__dirname + "/cache/say.mp3")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/say.mp3")));
}