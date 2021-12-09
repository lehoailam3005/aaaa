module.exports.config = {
	name: "addcydia",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "LAM",
	description: "quangblue.com",
	commandCategory: "quangblue.com",
	cooldowns: 1
};

module.exports.run = ({ event, api }) => api.sendMessage(`https://repo.quangblue.com/`, event.threadID, event.messageID);