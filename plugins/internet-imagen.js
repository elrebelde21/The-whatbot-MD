let { promisify } = require('util')
let _gis = require('g-i-s')
let gis = promisify(_gis)

let handler  = async (m, { conn, args, text }) => {
  if (!text) return m.reply('qie estΓ‘ buscado?')
  let results = await gis(text) || []
  let { url, width, height } = pickRandom(results) || {}
  if (!url) return m.reply('Extraviado')
  conn.sendButtonImg(m.chat, url, `
*ββ γ ππππππ γ ββ*

ππππππππππ ππ: ${text}
`.trim(), wm, 'πππππππππ', `.gimage ${text}`, m)
}
handler.help = ['imagen <text>']
handler.tags = ['internet']
handler.command = /^(gimage|image|imagen)$/i

module.exports = handler

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}
