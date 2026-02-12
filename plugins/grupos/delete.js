let handler = async (m, { conn, usedPrefix, command }) => {

if (!m.quoted) return conn.reply(m.chat, `🔪 𝖱𝖾𝗌𝗉𝗈𝗇𝖽𝖾 𝖺𝗅 𝗆𝖾𝗇𝗌𝖺𝗃𝖾 𝗊𝗎𝖾 𝖽𝖾𝗌𝖾𝖺𝗌 𝖾𝗅𝗂𝗆𝗂𝗇𝖺𝗋.`, m, rcanal)
try {
let delet = m.message.extendedTextMessage.contextInfo.participant
let bang = m.message.extendedTextMessage.contextInfo.stanzaId
return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
} catch {
return conn.sendMessage(m.chat, { delete: m.quoted.vM.key })
}}

handler.help = ["𝖣𝖾𝗅𝖾𝗍𝖾"];
handler.tags = ["𝖦𝖱𝖴𝖯𝖮𝖲"];
handler.customPrefix = /^\.?del(ete)?$/i;
handler.command = new RegExp();
handler.group = true;
handler.admin = true;
handler.botAdmin = true;
export default handler;
