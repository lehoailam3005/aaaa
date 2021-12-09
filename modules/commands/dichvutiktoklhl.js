module.exports.config = {
	name: "dichvutiktok",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "LAM",
	description: "Các gói dịch vụ mạng xã hội TIKTOK",
	commandCategory: "Dịch Vụ TIKTOK",
	cooldowns: 1
};

module.exports.run = ({ event, api }) => api.sendMessage(`╰❥  Bảng giá Buff TIKTOK ❖︵
                                               ✿◕ ‿ ◕✿ 
➻❥ Buff Flow : 69k / 1k flow ( người dùng ) 
➻❥ Buff Flow : 50k / 1k flow ( Clone ) 
➻❥ Buff like : 30k / 1k like  ( Việt )
➻❥ Buff like : 53k / 1k like  ( Tây )
➻❥ Buff View : 30k / 10k View 
⚜ Các bạn cần có thể liên hệ bằng link facebook mình nhé ! | www.facebook.com/lehoailam3005 ⚜  `, event.threadID, event.messageID);