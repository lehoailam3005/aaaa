module.exports.config = {
	name: "101phanh",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "LAM",
	description: " Danh sách lệnh 18+ ",
	commandCategory: "18+",
	cooldowns: 1
};

module.exports.run = ({ event, api }) => api.sendMessage(`:3 Áo đỏ áo xanh chứng kiến cho anh nhé ! \n Anh chỉ yêu mình Phanh thôi `, event.threadID, event.messageID);