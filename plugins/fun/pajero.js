const handler = async (m, { conn }) => {
  // Obtiene el JID del usuario mencionado o usa el remitente si no hay mención
  const mentioned = (m.mentionedJid && m.mentionedJid[0]) ? m.mentionedJid[0] : m.sender;
  // Nombre visible (display name) si la librería lo proporciona
  const name = conn.getName ? await conn.getName(mentioned) : (mentioned.split('@')[0] || 'user');
  // Tag simple extraído del JID (ej: 521234567890)
  const userTag = mentioned.split('@')[0];

  const etiquetas = [
    'TE ESTAS MATANDO',
    'YA PAJERO PRO',
    'YA NO SALUDA CON LA MANO'
  ];

  const emojis = ['😏','💦','😈','💀','💦','🤢'];
  const percent = Math.floor(Math.random() * 900) + 100; // 100% - 999%
  const etiqueta = pickRandom(etiquetas);
  const emoji = emojis[Math.floor(Math.random() * emojis.length)];

  // Mostramos el tag del usuario en el texto y pasamos el JID en mentions para que WhatsApp lo renderice como mención
  const text = `_*@${userTag}*_ _*ES*_ ${emoji}${percent}% *${etiqueta}*`;

  // Envía el mensaje mencionando al usuario (esto hará que WhatsApp lo renderice como mención)
  await conn.reply(m.chat, text, m, { mentions: [mentioned] });
};

handler.help = ['pajero'];
handler.tags = ['fun'];
handler.command = /^pajero/i;
export default handler;

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}
