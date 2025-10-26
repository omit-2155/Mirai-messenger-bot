module.exports.config = {
 name: "***",
 version: "1.0.0",
 hasPermssion: 2,
 credits: "𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️",
 description: "hot video",
 commandCategory: "admin",
 usages: "horny vedio",
 cooldowns: 5,
 dependencies: {
 request: '',
 "fs-extra": '',
 axios: ''
 }
};

module.exports.run = async function({ api, event }) {
 const request = global.nodemodule["request"];
 const fs = global.nodemodule["fs-extra"];
var videoLinks = [
"https://i.imgur.com/ebRJo66.mp4",
"https://i.imgur.com/xFLO5P7.mp4",
"https://i.imgur.com/inNnsjw.mp4",
"https://i.imgur.com/RpfZ7bP.mp4",
"https://i.imgur.com/6hKNZUt.mp4",
"https://i.imgur.com/wUz8Phe.mp4",
"https://i.imgur.com/l0EtGCg.mp4",
"https://i.imgur.com/nEaVYoA.mp4",
"https://i.imgur.com/dY1Tsyp.mp4",
"https://i.imgur.com/Ngjyns7.mp4",
"https://i.imgur.com/HM78L2f.mp4",
"https://i.imgur.com/EJyGlnB.mp4",
"https://i.imgur.com/7MXXO25.mp4",
"https://i.imgur.com/vblhzJg.mp4",
"https://i.imgur.com/hbty2nV.mp4",
"https://i.imgur.com/PJOogG3.mp4",
"https://i.imgur.com/YQo2ut4.mp4",
"https://i.imgur.com/gLBaSU7.mp4",
"https://i.imgur.com/Q0KmCqN.mp4",
"https://i.imgur.com/7RcOinA.mp4",
"https://i.imgur.com/SBhaO9O.mp4",
"https://i.imgur.com/shUQtmQ.mp4",
"https://i.imgur.com/RoySVYi.mp4",
"https://i.imgur.com/oha6eEY.mp4",
"https://i.imgur.com/v4i00GI.mp4",
"https://i.imgur.com/ASEsAT5.mp4",
"https://i.imgur.com/w7n7F9s.mp4",
"https://i.imgur.com/3MKWQTV.mp4",
"https://i.imgur.com/5uKbuCe.mp4",
"https://i.imgur.com/yFTEfQ4.mp4",
"https://i.imgur.com/nSNVmAh.mp4",
"https://i.imgur.com/fmfkhed.mp4",
"https://i.imgur.com/dqQiaLM.mp4"
];
 

 const path = __dirname + "/cache/hotvideo.mp4";
 const randomLink = videoLinks[Math.floor(Math.random() * videoLinks.length)];

 request(encodeURI(randomLink))
 .pipe(fs.createWriteStream(path))
 .on("close", () => {
 api.sendMessage({
 body: "পাপির দল 😤 নে তোদের যাদের বউ নাই তাদের জন্য বস 𝗭𝗜𝗦𝗔𝗡 এই ফাইল দিছে । খবরদার হাত মারবি না 🥵🫵",
 attachment: fs.createReadStream(path)
 }, event.threadID, () => fs.unlinkSync(path));
 });
};
