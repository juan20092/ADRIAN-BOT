const handlerGay = async (m, { conn }) => {
  const targetJid = (m.mentionedJid && m.mentionedJid[0]) || m.sender;
  const targetName = await conn.getName?.(targetJid) || 'manca';
  const messages = [
    "🤢 ᴍᴀs ᴍᴀʟᴀ ǫᴜᴇ ᴍɪ ᴀʙᴜᴇʟᴀ",
    "🤢 ᴛᴇɴɪᴀ sᴇʀ ᴍᴜᴊᴇʀ ᴍᴀɴᴄᴀ ʏ ꜰᴇᴀ",
    "🤢 ᴅᴇᴅɪᴄᴀᴛᴇ ᴏᴛʀᴏ ᴊᴜᴇɢᴏ"
  ];

  // Texto visible para la mención (usa la parte antes de @ en la JID)
  const visibleMention = `@${targetJid.split('@')[0]}`;

  // Mensaje final (puedes usar targetName si prefieres mostrar el nombre)
  const messageBody = `${visibleMention} ${pickRandom(messages)}`;

  // Enviar y pasar la JID en 'mentions' para que quede como mención real
  await conn.reply(m.chat, messageBody, m, { mentions: [targetJid] });
};
handlerGay.help = ['manca'];
handlerGay.tags = ['fun'];
handlerGay.command = /^manca/i;
export { handlerGay as default };

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}
