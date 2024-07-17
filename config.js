const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254111387103";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254111387103,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_06_07_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyMDksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDgwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDUwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDUxLFxuICAgICAgICA0OCxcbiAgICAgICAgMTg5LFxuICAgICAgICA4MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxODksXG4gICAgICAgIDg5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjIwLFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcsXG4gICAgICAgIDU2LFxuICAgICAgICAyMjksXG4gICAgICAgIDI2LFxuICAgICAgICA3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDUsXG4gICAgICAgIDYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNixcbiAgICAgICAgMjQ5LFxuICAgICAgICA4OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNixcbiAgICAgICAgNCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDM4LFxuICAgICAgICA2MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA4MyxcbiAgICAgICAgNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI5LFxuICAgICAgICAyMSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDgzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQzLFxuICAgICAgICAzNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMzgsXG4gICAgICAgIDUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTU4LFxuICAgICAgICA3NixcbiAgICAgICAgMTc0LFxuICAgICAgICAzOSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODUsXG4gICAgICAgIDcsXG4gICAgICAgIDI5LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDExMixcbiAgICAgICAgMzQsXG4gICAgICAgIDAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTUyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDc2LFxuICAgICAgICAyNSxcbiAgICAgICAgODgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDM3LFxuICAgICAgICAzLFxuICAgICAgICAxMTksXG4gICAgICAgIDMzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDU5LFxuICAgICAgICAxNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgODEsXG4gICAgICAgIDExNixcbiAgICAgICAgMjAzLFxuICAgICAgICA3MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDM3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE4NixcbiAgICAgICAgNzYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTYwLFxuICAgICAgICA4MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDgxLFxuICAgICAgICAxODUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTUwLFxuICAgICAgICA0MyxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA1OSxcbiAgICAgICAgNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxODYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDY0LFxuICAgICAgICA5MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4LFxuICAgICAgICA0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTU0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMjcsXG4gICAgICAgIDM0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA5MyxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTExXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjUsXG4gICAgICAgIDM0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTA0LFxuICAgICAgICA2NSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNDksXG4gICAgICAgIDExNixcbiAgICAgICAgMTExLFxuICAgICAgICAyOCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDQzLFxuICAgICAgICAyMyxcbiAgICAgICAgMjA0LFxuICAgICAgICA1OCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTgwLFxuICAgICAgICA5MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxODQsXG4gICAgICAgIDU4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDUxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQyLFxuICAgICAgICA4MSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3MixcbiAgICAgICAgNTcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjYsXG4gICAgICAgIDUsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDksXG4gICAgICAgIDg1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDExLFxuICAgICAgICA2NixcbiAgICAgICAgMTQxLFxuICAgICAgICA4MixcbiAgICAgICAgMTg1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTI4LFxuICAgICAgICAzOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDgyLFxuICAgICAgICAxODMsXG4gICAgICAgIDEzOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTUzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlB1elZsdGtoeW1uOHVmRDJZRi9XSzFNelZ3emxSWkprZEx1NUVJcWhCYnM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImU3aFE1OUh0VENDWk9nRm9xcVM4RndcIixcbiAgXCJwaG9uZUlkXCI6IFwiYzcyOWI1NTktNTkwNi00MDQ1LThkNmUtNjFlYjg0MTI2OTUyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk1LFxuICAgICAgMTc1LFxuICAgICAgMTIwLFxuICAgICAgMjU0LFxuICAgICAgNjEsXG4gICAgICAxNzgsXG4gICAgICAyNDEsXG4gICAgICA0LFxuICAgICAgMTE0LFxuICAgICAgOTYsXG4gICAgICAyMTIsXG4gICAgICAxMzYsXG4gICAgICAyMjEsXG4gICAgICAyMyxcbiAgICAgIDUsXG4gICAgICAxMDEsXG4gICAgICAxMjIsXG4gICAgICAxNjYsXG4gICAgICAyMzAsXG4gICAgICAxNTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNSxcbiAgICAgIDE4OSxcbiAgICAgIDE1MSxcbiAgICAgIDgyLFxuICAgICAgMjE5LFxuICAgICAgMjA3LFxuICAgICAgMzIsXG4gICAgICAyMjcsXG4gICAgICAyMDAsXG4gICAgICAyMDcsXG4gICAgICAxMTksXG4gICAgICAyNDEsXG4gICAgICAyNDgsXG4gICAgICAxNDksXG4gICAgICAyMjcsXG4gICAgICAxMjgsXG4gICAgICAzNCxcbiAgICAgIDIxMCxcbiAgICAgIDMxLFxuICAgICAgMTcyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkNYQ1BSOTJFXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQxMTEzODcxMDM6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiOTM4ODgwNTIyMjgzMjY6NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNQ1J4cllIRUp2TDNyUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm1KR3JkZk1za0N1cnViY2lTazhEOTUrZXFaMDVjTXVUaHJpaDZhMmhjREU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNitqa2U2U0ZzY2tya1I5c25BaEs0ZXFocWpzcVBEKzA3eHBnYW1IcVd5aTU0V2dtT2VjUElTYlVBUXp4MmpMaU1jRndadFo5emYzLys4MVFuMTV2QWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicG1yYmVFbHdhalZmSXpDdzRwNUUzWXJaQUFBdjJUbkw5RjAvMTNJaEFzaE4wMFZZUTVhWlpRWFFra3RBOG40UkNHOVVMQWdZNTV4N3Bod2lTeWN3akE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0MTExMzg3MTAzOjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDQ5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEyMTQzNjhcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
