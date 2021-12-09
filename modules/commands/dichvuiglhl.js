module.exports.config = {
	name: "dichvuig",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "LAM",
	description: "Các gói dịch vụ mạng xã hội Instagram",
	commandCategory: "Dịch Vụ Instagram",
	cooldowns: 1
};

module.exports.run = ({ event, api }) => api.sendMessage(`╰❥  Bảng giá Buff Instagram ❖︵
                                               ✿◕ ‿ ◕✿ 
●
➻❥ Buff Flow : 80k / 1k flow 
➻❥ Buff like : 92k / 1k like  ( Việt )
➻❥ Buff like : 50k / 1k like ( Tây ) 
⚜ Các bạn cần có thể liên hệ bằng link facebook mình nhé ! | www.facebook.com/lehoailam3005 ⚜  `, event.threadID, event.messageID);