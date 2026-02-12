let handler = async (m, { conn, args }) => {
    // Verificar si se menciona a un usuario
    if (!args[0]) {
        return conn.sendMessage(m.chat, { text: "⚠️ 𝗗𝗲𝗯𝗲𝘀 𝗺𝗲𝗻𝗰𝗶𝗼𝗻𝗮𝗿 𝗮 𝘂𝗻 𝘂𝘀𝘂𝗮𝗿𝗶𝗼 𝗨𝘀𝗮 𝗲𝗹 𝗳𝗼𝗿𝗺𝗮𝘁𝗼: .𝗴𝗼𝗿𝗱𝗼𝘁𝗲𝘁𝗼𝗻 ＠𝘂𝘀𝘂𝗮𝗿𝗶𝗼" }, { quoted: m });
    }

    // Obtener el ID del usuario mencionado
    let userMentioned = m.mentionedJid[0];
    
    // Generar un porcentaje aleatorio entre 1 y 100
    let porcentaje = Math.floor(Math.random() * 100) + 1;

    const mensaje = `🦍 ¡${conn.getName(userMentioned)} ᴛɪᴇɴᴇ ᴜɴ ${porcentaje}% ᴅᴇ sᴇʀ ɢᴏʀᴅᴏᴛᴇᴛᴏɴ! !Nᴏ ᴛᴇ ʟᴏ ᴛᴏᴍᴇs ᴀ ᴍᴀʟ !`;

    // Enviar el mensaje al chat
    await conn.sendMessage(m.chat, { text: mensaje }, { quoted: m });
}
handler.help = ['gordoteton @usuario'];
handler.tags = ['diversión'];
handler.command = ['gordoteton'];

export default handler;
