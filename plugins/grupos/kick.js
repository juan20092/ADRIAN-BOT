let handler = async (m, { conn }) => {

if (!m.mentionedJid || m.mentionedJid.length === 0) {
return conn.reply(m.chat,'⚠️ menciona a alguien para expulsarlo',m)
}

let user = m.mentionedJid[0]

await conn.groupParticipantsUpdate(
m.chat,
[user],
'remove'
)

conn.reply(m.chat,'🩴 𝚞𝚜𝚞𝚊𝚛𝚒𝚘 𝚎𝚡𝚙𝚞𝚕𝚜𝚊𝚍𝚘',m)

}

handler.command = ['kick']
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler
