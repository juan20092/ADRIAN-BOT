import fetch from 'node-fetch'

let handler = async (m, { conn }) => {
  try {
    // Reacción de inicio
    await conn.sendMessage(m.chat, { react: { text: '🕑', key: m.key } })

    // 1. Obtener imagen de perfil del usuario
    let pp;
    try {
      pp = await conn.profilePictureUrl(m.sender, 'image');
    } catch {
      // Imagen por defecto si el usuario no tiene una pública
      pp = 'https://qu.ax/STmI.png'; 
    }
    const pperfil = await (await fetch(pp)).buffer();

    // 2. Medir el Ping
    const start = Date.now()
    await conn.sendMessage(m.chat, { react: { text: '⚡️', key: m.key } })
    const end = Date.now()
    const ping = end - start

    // 3. Evaluar velocidad
    let speed, status;
    if (ping < 100) { speed = '🚀 Extremadamente Rápido'; status = '🟢 Excelente' }
    else if (ping < 300) { speed = '⚡ Muy Rápido'; status = '🟡 Óptimo' }
    else if (ping < 600) { speed = '🏓 Rápido'; status = '🟡 Bueno' }
    else if (ping < 1000) { speed = '📶 Normal'; status = '🟠 Estable' }
    else { speed = '🐢 Lento'; status = '🔴 Regular' }

    // 4. Calcular Uptime
    const uptime = process.uptime()
    const hours = Math.floor(uptime / 3600)
    const minutes = Math.floor((uptime % 3600) / 60)
    const seconds = Math.floor(uptime % 60)
    const uptimeString = `${hours}h ${minutes}m ${seconds}s`

    // 5. Preparar el mensaje y el Fake Contact (fkontak)
    const pingMessage = `> *🏓 𝐏𝐎𝐍𝐆* 
> *\`Ping :\` ${ping} ms*
> *\`Velocidad :\` ${speed}*
> *\`Estado :\` ${status}*
> *\`Uptime :\` ${uptimeString}*`

    const fkontak = {
      key: {
        participants: '0@s.whatsapp.net',
        remoteJid: 'status@broadcast',
        fromMe: false,
        id: '𝕵𝑰𝑹𝑬𝑵 𝕭𝑶𝑻'
      },
      message: {
        locationMessage: {
          name: 'Hola, Soy 𝕵𝑰𝑹𝑬𝑵 𝕭𝑶𝑻',
          jpegThumbnail: pperfil,
          vcard: `BEGIN:VCARD\nVERSION:3.0\nN:Meliodas;;;;\nFN:Meliodas\nORG:Boar Hat\nTITLE:Demon King\nitem1.TEL;waid=${m.sender.split('@')[0]}:+${m.sender.split('@')[0]}\nitem1.X-ABLabel:Oficial\nEND:VCARD`
        }
      },
      participant: '0@s.whatsapp.net'
    };

    // 6. Enviar resultado final
    await conn.sendMessage(m.chat, { text: pingMessage }, { quoted: fkontak });
    await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key } })

  } catch (error) {
    console.error('Error en ping:', error)
    await conn.sendMessage(m.chat, { react: { text: '❌', key: m.key } })
    await conn.reply(m.chat, `> ❌ ERROR\n\n\`Error :\` No se pudo calcular el ping`, m)
  }
}

handler.help = ['ping']
handler.tags = ['main']
handler.command = ['p', 'ping']

export default handler
