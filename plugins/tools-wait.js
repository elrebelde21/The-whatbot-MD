// https://github.com/Hyzerr
// hargai creator banh

const fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix }) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw `Responde a una foto/Enviar foto con el comando ${usedPrefix}wait`
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} tidak support`
  let img = await q.download()
  await m.reply('π±πππππππ πππππππ ππ πππππ...')
  let anime = `data:${mime};base64,${img.toString('base64')}`
  let response = await fetch('https://trace.moe/api/search', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ image: anime }),
  })
  if (!response.ok) throw 'π½π ππ πππππππππππ ππππππππππ'
  let result = await response.json()
  let { is_adult, title, title_chinese, title_romaji, episode, season, similarity, filename, at, tokenthumb, anilist_id } = result.docs[0]
  let link = `https://media.trace.moe/video/${anilist_id}/${encodeURIComponent(filename)}?t=${at}&token=${tokenthumb}`
  let nobuyaki = `
${similarity < 0.89 ? 'πππππ ππππ ππππππππ£π ππ ππππ' : ''}

β ππΈπππ»πΎ πΉπ°πΏπΎπ½π΄π : *${title}*
β ππΈπππ»πΎ πΎπππΎπΆππ°π΅πΈπ° : *${title_romaji}*
β ππ΄πΌπ΄πΉπ°π½ππ°π : *${(similarity * 100).toFixed(1)}%*
β π΄πΏπΈππΎπ³πΈπΎπ: *${episode.toString()}*
β πΏπ°ππ° π°ππ»ππΎπ : *${is_adult ? 'Si' : 'No'}*
`.trim()
  conn.sendFile(m.chat, link, 'srcanime.mp4', `${nobuyaki}`, m)
}
handler.help = ['wait (caption|reply image)']
handler.tags = ['tools']
handler.command = /^(wait)$/i

module.exports = handler
