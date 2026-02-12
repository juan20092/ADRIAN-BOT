const handler = async (m, { conn }) => {
  const mentioned = (m.mentionedJid && m.mentionedJid[0]) ? m.mentionedJid[0] : m.sender;
  const name = conn.getName ? await conn.getName(mentioned) : (mentioned.split('@')[0] || 'user');
  const userTag = mentioned.split('@')[0];

  const etiquetas = [
    'LA CAGO EL PT',
    'LO MAS GAY',
    'LLAMARON A LO GAY'
  ];

  const emojis = ['🏳️‍🌈','🌺','😈','🏳️‍🌈'];
  const percent = Math.floor(Math.random() * 900) + 100; // 100% - 999%
  const etiqueta = pickRandom(etiquetas);
  const emoji = emojis[Math.floor(Math.random() * emojis.length)];

  const text = `_*@${userTag}*_ _*ES*_ ${emoji}${percent}% *${etiqueta}*`;

  await conn.reply(m.chat, text, m, { mentions: [mentioned] });
};

handler.help = ['puto'];
handler.tags = ['fun'];
handler.command = /^puto/i;
export default handler;

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}
