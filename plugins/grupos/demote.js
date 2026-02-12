let handler = async (m, { conn, usedPrefix, command, text }) => {
    let user = null;
    // Intenta identificar al usuario por m.quoted, m.mentionedJid o texto
    if (m.quoted && m.quoted.sender) {
        user = m.quoted.sender;
    } else if (m.mentionedJid && m.mentionedJid.length > 0) {
        user = m.mentionedJid[0];
    } else if (text) {
        let numberMatch = text.match(/\d{11,13}/);
        if (numberMatch) {
            user = numberMatch[0] + '@s.whatsapp.net';
        }
    }

    if (!user) {
        return conn.reply(m.chat, `*🪡 𝗠𝗘𝗡𝗖𝗜𝗢𝗡𝗔 𝗔 𝗨𝗡𝗔 𝗣𝗘𝗥𝗦𝗢𝗡𝗔 𝗤𝗨𝗘 𝗗𝗘𝗦𝗘𝗔𝗦 𝗗𝗘𝗚𝗥𝗔𝗗𝗔𝗥*`, m, rcanal);
    }

    try {
        await conn.groupParticipantsUpdate(m.chat, [user], 'demote');
        await conn.reply(m.chat, `🔪  𝗨𝗦𝗨𝗔𝗥𝗜𝗢 𝗗𝗘𝗚𝗥𝗔𝗗𝗔𝗗𝗢 𝗖𝗢𝗡 𝗘𝗫𝗜𝗧𝗢`, m, rcanal);
    } catch (e) {
        console.error(e);
        await conn.reply(m.chat, `🚫 Ha ocurrido un error al intentar degradar al usuario.`, m, rcanal);
    }
};
handler.customPrefix = /^\.?demote/i;
handler.command = new RegExp();
handler.group = true;
handler.admin = true;
export default handler;
