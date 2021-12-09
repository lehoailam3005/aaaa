module.exports.config = {
	name: "nhacuser",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "LAM",
	description: "Nhạc User yêu cầu",
	commandCategory: "Nhạc User yêu cầu",
	cooldowns: 1
};

module.exports.run = ({ event, api }) => api.sendMessage(`Xem danh sách nhạc tại ! \n Link | https://echxanh.ga/danhsachlenh \n Thêm bài hát yêu thích của bạn tại link | https://bom.so/9gR41i  `, event.threadID, event.messageID);