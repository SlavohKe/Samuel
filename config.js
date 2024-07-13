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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_23_07_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMixcbiAgICAgICAgNzAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTkxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDQyLFxuICAgICAgICAxODEsXG4gICAgICAgIDE4LFxuICAgICAgICA5NixcbiAgICAgICAgMjE1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgODIsXG4gICAgICAgIDQzLFxuICAgICAgICA2LFxuICAgICAgICAxOCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDk2LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwNixcbiAgICAgICAgNTQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNDksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjE3LFxuICAgICAgICA3MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDMxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjE3LFxuICAgICAgICA0OSxcbiAgICAgICAgNTIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTg4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxLFxuICAgICAgICAyNDksXG4gICAgICAgIDEyNSxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAzMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDcsXG4gICAgICAgIDk2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDcyLFxuICAgICAgICA5NixcbiAgICAgICAgMjU0LFxuICAgICAgICA0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjA2LFxuICAgICAgICA0MixcbiAgICAgICAgMTE1LFxuICAgICAgICAxODcsXG4gICAgICAgIDMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDg2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjA1LFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDIsXG4gICAgICAgIDQzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTIwLFxuICAgICAgICA3MixcbiAgICAgICAgMTkwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDY4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgODQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDUyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDk2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDUwLFxuICAgICAgICAxNTksXG4gICAgICAgIDEsXG4gICAgICAgIDUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTY3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDExNyxcbiAgICAgICAgNDIsXG4gICAgICAgIDExMyxcbiAgICAgICAgNyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgODYsXG4gICAgICAgIDYwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDQxLFxuICAgICAgICA5NixcbiAgICAgICAgMTk1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDg3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg3LFxuICAgICAgICA2NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTY0LFxuICAgICAgICA2OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjM3LFxuICAgICAgICA1NixcbiAgICAgICAgNzgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxODQsXG4gICAgICAgIDE0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDc1LFxuICAgICAgICAxMDksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDUyLFxuICAgICAgICA3MSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDY1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMjBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEwNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjI1LFxuICAgICAgICA5OCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNjMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDQxLFxuICAgICAgICA5OCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTM1LFxuICAgICAgICAwLFxuICAgICAgICA2OCxcbiAgICAgICAgMjI2LFxuICAgICAgICA2LFxuICAgICAgICAxMDksXG4gICAgICAgIDYyLFxuICAgICAgICA0NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDczLFxuICAgICAgICAxMDAsXG4gICAgICAgIDExNCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTg1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDc1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDk3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTc5LFxuICAgICAgICA4NixcbiAgICAgICAgMjA1LFxuICAgICAgICA4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI2SFJiYmZ3UFR5UW52MHNOOHp4MG1LMHViR0xIRUhxQy9sL0M0dE1yTEFRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJLZC1yNDRaNVE2eTVkbjd3WmlHaEpRXCIsXG4gIFwicGhvbmVJZFwiOiBcImRjZGE2YmFjLTQ1OWYtNDFiMi05ZTJlLTBiYmY5OWY1MzA1ZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1LFxuICAgICAgNjQsXG4gICAgICAyNTQsXG4gICAgICAxMDUsXG4gICAgICA2OCxcbiAgICAgIDIxNCxcbiAgICAgIDEzNSxcbiAgICAgIDksXG4gICAgICA5MCxcbiAgICAgIDI0MCxcbiAgICAgIDc1LFxuICAgICAgMTU0LFxuICAgICAgMjUxLFxuICAgICAgMjE3LFxuICAgICAgNDMsXG4gICAgICAxMDUsXG4gICAgICAxOSxcbiAgICAgIDM3LFxuICAgICAgNzMsXG4gICAgICAyMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTAsXG4gICAgICAxNTQsXG4gICAgICA1MixcbiAgICAgIDIxNixcbiAgICAgIDE5NCxcbiAgICAgIDI0NCxcbiAgICAgIDc3LFxuICAgICAgOTEsXG4gICAgICAxMTEsXG4gICAgICAxNjIsXG4gICAgICA3OCxcbiAgICAgIDI0OSxcbiAgICAgIDE4LFxuICAgICAgMjAsXG4gICAgICAxNTksXG4gICAgICAxNzAsXG4gICAgICA4NyxcbiAgICAgIDE3NCxcbiAgICAgIDE3MixcbiAgICAgIDI0MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIyWEZMNUdWNFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0MTExMzg3MTAzOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjkzODg4MDUyMjI4MzI2OjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTCtSeHJZSEVPYTN5clFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJtSkdyZGZNc2tDdXJ1YmNpU2s4RDk1K2VxWjA1Y011VGhyaWg2YTJoY0RFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk5tZ2prVXhDeXAxRTBiSlNkWjNSRnBmWWxTdi9qK2Z4c2I3dEtqalB3Rk43ei9tWWQzdHI4NS9rTGRBdUlvMDhkLzBVODhVczVEYno5aTJWc2hFcER3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInlSM1R3T3pIS1hMenJEM1JuanpQRFhYVS95NU9SQ1E1VHhSV1FEdFA2d2o1Mk14cWtsL29JR05vYU94WCsyQ0hlQklxQjE5eHh4OEoyYlRHbGc5TEJRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDExMTM4NzEwMzo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA0OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwODg0MjAyXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
