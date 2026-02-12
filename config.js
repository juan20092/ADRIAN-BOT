import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
'165043362652249', 
'50377798434'
] 

global.mods = []
global.prems = []

global.emoji = '🗡️'
global.emoji2 = '🗡️'
global.namebot = '𝐀𝐃𝐑𝐈𝐀𝐍 𝐁𝐎𝐓 🗡️'
global.botname = '𝐀𝐃𝐑𝐈𝐀𝐍 𝐁𝐎𝐓 🗡️'
global.banner = 'https://cdn.russellxz.click/3331708f.jpg'
global.packname = '𝐀𝐃𝐑𝐈𝐀𝐍 𝐁𝐎𝐓 🗡️'
global.author = '© 𝙋𝙤𝙬𝙚𝙧𝙚𝙙 𝐀𝐃𝐑𝐈𝐀𝐍'
global.sessions = '𝐀𝐃𝐑𝐈𝐀𝐍 𝐁𝐎𝐓 🗡️'

global.APIs = {
may: 'https://mayapi.ooguy.com'
}

global.APIKeys = {
may: 'may-0595dca2'
}

const file = fileURLToPath(import.meta.url)
watchFile(file, () => {
unwatchFile(file)
console.log(chalk.redBright("Se actualizó el 'config.js'"))
import(`file://${file}?update=${Date.now()}`)
})
