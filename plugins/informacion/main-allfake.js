import pkg from '@whiskeysockets/baileys'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone'

const { generateWAMessageFromContent, prepareWAMessageMedia, proto } = pkg

var handler = m => m
handler.all = async function (m, { conn }) {

  // Util functions
  function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
  }

  Array.prototype.getRandom = function () {
    return this[Math.floor(Math.random() * this.length)]
  }

  global.getBuffer = async function getBuffer(url, options = {}) {
    try {
      var res = await axios({
        method: 'get',
        url,
        headers: {
          'DNT': 1,
          'User-Agent': 'GoogleBot',
          'Upgrade-Insecure-Request': 1
        },
        ...options,
        responseType: 'arraybuffer'
      })
      return res.data
    } catch (e) {
      console.log(`Error : ${e}`)
    }
  }

  // Mock data for testing
  global.dev = 'Dev Juan'
  global.botname = '𝐀𝐃𝐑𝐈𝐀𝐍 𝐁𝐎𝐓 🗡️'
  global.userJid = m.sender ? m.sender : '' 

  // Redes y canales
  global.redes = 'https://whatsapp.com/channel/0029VbARAwbEgGfOsCN1T10V'
  global.canalIdM = ["120363419404216418@newsletter", "120363419404216418@newsletter"]
  global.canalNombreM = [
    "ꘓ ✧ 𝖩𝗎𝖺𝗇 𝖡𝗈𝗍𝗌 ┆𝖮𝖿𝗂𝖼𝗂𝖺𝗅 𝖢𝗁𝖺𝗇𝗇𝖾𝗅 ❖ 🍷 ꘔ",
    "ꘓ ✧ 𝖩𝗎𝖺𝗇 𝖡𝗈𝗍𝗌 ┆𝖮𝖿𝗂𝖼𝗂𝖺𝗅 𝖢𝗁𝖺𝗇𝗇𝖾𝗅 ❖ 🍷 ꘔ"
  ]

  async function getRandomChannel() {
    let randomIndex = Math.floor(Math.random() * canalIdM.length)
    let id = canalIdM[randomIndex]
    let name = canalNombreM[randomIndex]
    return { id, name }
  }

  global.channelRD = await getRandomChannel()

  // Fechas
  global.d = new Date(new Date() + 3600000)
  global.locale = 'es'
  global.dia = d.toLocaleDateString(locale, { weekday: 'long' })
  global.fecha = d.toLocaleDateString('es', { day: 'numeric', month: 'numeric', year: 'numeric' })
  global.mes = d.toLocaleDateString('es', { month: 'long' })
  global.año = d.toLocaleDateString('es', { year: 'numeric' })
  global.tiempo = d.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })

  // Reacciones De Comandos.!
  global.rwait = '🕒'
  global.done = '✅'
  global.error = '✖️'
  global.msm = '⚠︎'

  // Emojis
  global.emoji0 = ''
  global.emoji1 = ''
  global.emoji2 = ''
  global.emoji3 = ''
  global.emoji4 = ''
  global.emoji5 = ''
  global.emoji6 = ''
  global.emoji7 = ''
  global.emoji8 = ''
  global.emoji9 = ''

  global.emojis = [emoji0, emoji1, emoji2, emoji3, emoji4, emoji5, emoji6, emoji7, emoji8, emoji9].getRandom()
  global.emoji = [emoji0, emoji1, emoji2, emoji3, emoji4, emoji5, emoji6, emoji7, emoji8, emoji9].getRandom()

  // Mensaje en espera
  global.wait = '✪ Espera un momento, soy lento...';

  // Imágenes random
  const imgs = [
    'https://files.catbox.moe/m8562b.jpg'
  ]
  global.img = pickRandom(imgs)

  // tags
  global.nombre = m.pushName || 'Anónimo'
  global.taguser = '@' + (m.sender ? m.sender.split("@")[0] : '')
  var more = String.fromCharCode(8206)
  global.rmr = more.repeat(850)

  // Iconos
  global.icono = pickRandom(imgs)
  global.packsticker = `┏━──────━◆◆━──────━┓\n✰ Usuario: ${nombre}\n⚔✰ Bot: ${botname}\n✰ Fecha: ${fecha}\n✰ Hora: ${tiempo}\n┗━──────━◆◆━──────━┛`;
  global.packsticker2 = `\n┏━──────━◆◆━──────━┓\n👑 Desarrollador: ${dev}\n┗━──────━◆◆━──────━┛`;

  // Thumb for m1
  const res2 = await fetch(global.icono)
  const thumb3 = Buffer.from(await res2.arrayBuffer())

  global.m1 = {
    key: { participants: global.userJid, remoteJid: "status@broadcast", fromMe: false, id: "Halo" },
    message: {
      locationMessage: {
        name: botname,
        jpegThumbnail: thumb3
      }
    },
    participant: global.userJid
  }

  // Fakes y canales
  global.fake = {
    contextInfo: {
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: global.channelRD.id,
        newsletterName: global.channelRD.name,
        serverMessageId: -1
      }
    },
    quoted: m
  }

  global.rcanal = {
    contextInfo: {
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: global.channelRD.id,
        serverMessageId: '',
        newsletterName: global.channelRD.name
      },
      externalAdReply: {
        title: botname,
        mediaUrl: null,
        description: null,
        previewType: "PHOTO",
        thumbnail: await (await fetch(global.icono)).buffer(),
        mediaType: 1,
        renderLargerThumbnail: false
      },
      mentionedJid: null
    }
  }

  global.rcanal1 = {
    contextInfo: {
      isForwarded: true,
      externalAdReply: {
        title: botname,
        body: dev,
        mediaUrl: null,
        description: null,
        previewType: "PHOTO",
        thumbnail: await (await fetch(global.icono)).buffer(),
        mediaType: 1,
        renderLargerThumbnail: false
      },
      mentionedJid: null
    }
  }

  // Saludo tiempo RPG
  var ase = new Date();
  var hour = ase.getHours();
  switch(true){
    case hour <= 2: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break;
    case hour <= 6: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break;
    case hour === 7: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌅'; break;
    case hour <= 13: hour = 'Lɪɴᴅᴏ Dɪᴀ 🌤'; break;
    case hour <= 17: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break;
    default: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃';
  }
  global.saludo = hour
}

export default handler
