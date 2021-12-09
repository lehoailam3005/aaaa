module.exports.config = {
	name: "shop",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "LAM",
	description: "Bạn có thể ủng hộ mình bằng cách sử dụng dịch vụ của mình đang có nhé ! \n Đây là cách cách bạn vừa có thể ủng hộ mình mà vẫn sử dụng các dịch vụ , giúp mình có thêm kinh phí và động lực duy trì bot \n một lần nữa xin cảm ơn bạn đã đọc !",
	commandCategory: "shop",
	cooldowns: 1
};

module.exports.run = ({ event, api }) => api.sendMessage(`Chào Bạn bên mình đang có cách dịch vụ !
💠Dịch Vụ facebook | Dùng lệnh ◾ /dichvufacebook
💠Dịch Vụ Intagram | Dùng lệnh ◾ /dichvuig
💠Dịch Vụ TIKTOK | Dùng lệnh ◾ /dichvutiktok
💠Dịch Vụ Khác | Dùng lệnh ◾ /dichvukhac
- Các bạn dùng lệnh để xem thêm chi tiết nhé ! 
◾Đây là cách cách bạn vừa có thể ủng hộ mình mà vẫn sử dụng các dịch vụ , giúp mình có thêm kinh phí và động lực duy trì bot
	⚜ Các bạn cần có thể liên hệ bằng link facebook mình nhé ! | www.facebook.com/lehoailam3005 ⚜  `, event.threadID, event.messageID);