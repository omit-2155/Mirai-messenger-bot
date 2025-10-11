const fs = require("fs");
const path = require("path");

module.exports.config = {
  name: "help",
  version: "1.0.3",
  hasPermssion: 0,
  credits: "rX", //don't change this credit
  description: "Show all command list with GIF from cache",
  commandCategory: "system",
  usages: "[name module]",
  cooldowns: 5,
  envConfig: {
    autoUnsend: true,
    delayUnsend: 30
  }
};

module.exports.languages = {
  "en": {
    "moduleInfo": `╭──────•◈•──────╮\n |        𐌽𝒖𝙨𝒖 𝗕ʙ𝘇❣︎☻\n |●𝗡𝗮𝗺𝗲: •—» %1 «—•\n |●𝗨𝘀𝗮𝗴𝗲: %3\n |●𝗗𝗲𝘀𝗰𝗿𝗶𝗽𝘁𝗶𝗼𝗻: %2\n |●𝗖𝗮𝘁𝗲𝗴𝗼𝗿𝘆: %4\n |●𝗪𝗮𝗶𝘁𝗶𝗻𝗴 𝘁𝗶𝗺𝗲: %5 second(s)\n |●𝗣𝗲𝗿𝗺𝗶𝘀𝘀𝗶𝗼𝗻: %6\n |𝗠𝗼𝗱𝘂𝗹𝗲 𝗰𝗼𝗱𝗲 𝗯𝘆\n |•—» 𝗢𝗠𝗜𝗧 𝗛𝗔𝗦𝗔𝗡 «—•\n╰──────•◈•──────╯`,
    "user": "User",
    "adminGroup": "Admin group",
    "adminBot": "Admin bot"
  }
};

module.exports.run = function ({ api, event }) {
  const { commands } = global.client;
  const { threadID, messageID } = event;
  const totalCmds = commands.size;

  const message = `✨ [ Guide For Beginners ] ✨

╭──── [ 𝗖𝗛𝗔𝗧 𝗔𝗜 ]
│ ✧ baby✧ bby✧ jan✧
│ ✧ Sara✧ hippi✧ botbaby✧
│ ✧ sarabbz✧ bbz
╰───────────────◊
╭──── [ UTILITY ]
│ ✧ accept✧ adc✧ age
│ ✧ anime✧ commandcount✧ covid
│ ✧ curlconverter✧ giphy✧ googleimg
│ ✧ image✧ ip✧ math
│ ✧ ocr✧ splitimage✧ ss
│ ✧ translate✧ uid✧ unsend
│ ✧ uptime✧ weather✧ worldclock
╰───────────────◊
╭──── [ BOX CHAT ]
│ ✧ onlyadminbox✧ admin✧
│ ✧ autosetname✧ badwords✧ ban
│ ✧ groupinfo✧ count✧ filteruser
│ ✧ kick✧ refresh✧ rules
│ ✧ sendnoti✧ setname✧ warn
│ ✧ ckbot✧ 0admin✧ emojis
╰───────────────◊
╭──── [ SYSTEM ]
│ ✧ adduser✧ all✧ ckban
│ ✧ delete✧ fakechat✧ help
│ ✧ out✧ restart✧ rr
│ ✧ shell✧ spam✧ vip
╰───────────────◊
╭──── [ LOVE ]
│ ✧ pair✧ pair1✧ love
│ ✧ kiss✧ gf✧ bf
│ ✧ bestu✧ bestie✧ match✧
╰───────────────◊
╭──── [ FUN & NUDS ]
│ ✧ copy✧ tag✧ teach (yourtext)
│ ✧ NUDES 👇🏻
│ ✧ pixlist✧ getpix (uid)✧ pixup✧
╰───────────────◊
╭──── [ VOICE & PHOTOS ]
│ ✧ ekta gan bolo✧ ghumabo
│ ✧ i love you✧ voice✧ holpagol
│ ✧ khabo✧ bara
╰───────────────◊
╭─『 𐌽𝒖𝙨𝒖 𝗕ʙ𝘇❣︎☻ 』
╰‣ Total commands: ${totalCmds}
╰‣ A Facebook Bot
╰‣ CEO : 𐌽𝒖𝙨𝒖 😩🫶🏻
╰‣ ADMIN: 𝗢𝗠𝗜𝗧 𝗛𝗔𝗦𝗔𝗡
╰‣ RIPORT FOR ISSUE,
   type !callad (yourtext)
`;

  // Path to your cached GIF file
  const gifPath = path.join(__dirname, "cache", "help.gif");

  if (!fs.existsSync(gifPath)) {
    return api.sendMessage("❌ help.gif not found in cache folder.", threadID, messageID);
  }

  return api.sendMessage(
    {
      body: message,
      attachment: fs.createReadStream(gifPath)
    },
    threadID,
    messageID
  );
};
