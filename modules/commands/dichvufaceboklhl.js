module.exports.config = {
	name: "dichvufacebook",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "LAM",
	description: "Các gói dịch vụ facebook !",
	commandCategory: "DỊCH VỤ FACEBOOK",
	cooldowns: 1
};

module.exports.run = ({ event, api }) => api.sendMessage(`╰❥ Bảng giá Buff Facebook ❖︵
                                               ✿◕ ‿ ◕✿ 
➻❥ Buff Flow : 40k / 1k flow 
➻❥ Buff like : 10k / 1k like 
➻❥ Like Page : 56k /1k 
➻❥ Buff  member group : 46k ~ 90k / 1k ( Có hai loại )
⚜ Các bạn cần có thể liên hệ bằng link facebook mình nhé ! | www.facebook.com/lehoailam3005 ⚜  `, event.threadID, event.messageID);