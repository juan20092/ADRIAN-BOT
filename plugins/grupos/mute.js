let mutedUsers = new Set();

let handler = async (m, { conn, usedPrefix, command, isAdmin, isBotAdmin }) => {
    if (!isBotAdmin) return conn.reply(m.chat, '> `❌ PERMISOS INSUFICIENTES`\n\n> `🤖 El bot necesita ser administrador.`', m);
    if (!isAdmin) return conn.reply(m.chat, '> `❌ PERMISOS INSUFICIENTES`\n\n> `👑 Solo los administradores pueden usar este comando.`', m);

    let user;
    if (m.quoted) {
        user = m.quoted.sender;
    } else {
        return conn.reply(m.chat, '> ❌️ `𝗨𝗦𝗨𝗔𝗥𝗜𝗢 𝗡𝗢 𝗘𝗦𝗣𝗘𝗖𝗜𝗙𝗜𝗖𝗔𝗗𝗢`\n\n> `🔮 𝑹𝒆𝒔𝒑𝒐𝒏𝒅𝒆 𝒂𝒍 𝒎𝒆𝒏𝒔𝒂𝒋𝒆 𝒅𝒆𝒍 𝒖𝒔𝒖𝒂𝒓𝒊𝒐 𝒒𝒖𝒆 𝒒𝒖𝒊𝒆𝒓𝒆𝒔 𝒎𝒖𝒕𝒆𝒂𝒓.`', m,rcanal);
    }

    if (command === "mute") {
        mutedUsers.add(user);
        conn.reply(m.chat, '> ✅️ `𝖴𝖲𝖴𝖠𝖱𝖨𝖮 𝖬𝖴𝖳𝖤𝖠𝖣𝖮`\n\n> 👤 `𝗨𝘀𝘂𝗮𝗿𝗶𝗼:` @' + user.split('@')[0], m, { mentions: [user] });
    } else if (command === "unmute") {
        mutedUsers.delete(user);
        conn.reply(m.chat, '> ✅️ `𝖴𝖲𝖴𝖠𝖱𝖨𝖮 𝖣𝖤𝖲𝖬𝖴𝖳𝖤𝖠𝖣𝖮`\n\n> 👤 `𝗨𝘀𝘂𝗮𝗿𝗶𝗼:` @' + user.split('@')[0], m, { mentions: [user] });
    }
};

handler.before = async (m, { conn }) => {
    if (mutedUsers.has(m.sender) && m.mtype !== 'stickerMessage') {
        try {
            await conn.sendMessage(m.chat, { delete: m.key });
        } catch (e) {
            console.error(e);
        }
    }
};

handler.help = ['mute', 'unmute'];
handler.tags = ['group'];
handler.command = ['mute', 'unmute'];
handler.group = true;
handler.admin = true;
handler.botAdmin = true;

export default handler;
