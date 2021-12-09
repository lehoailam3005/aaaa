module.exports.config = {
	name: "zu",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Lê Hoài Lam",
	description: "Dùng nếu Thứ bạn cần không phải là nụ cười !",
	commandCategory: "random-img",
	usages: "zu",
	cooldowns: 1
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://image-random-api-1.vitnamngynaynam.repl.co/kurumi?apikey=0bk3s6IAyq').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({body:  "⚜ 1k flow fb chỉ 40k :3 Liên Hệ : www.facebook.com/lehoailam3005 ⚜",
						attachment: fs.createReadStream(__dirname + `/cache/trinh.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/trinh.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/trinh.${ext}`)).on("close", callback);
			})
}
