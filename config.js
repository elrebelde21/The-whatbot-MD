//=============γ owner γ================== //
global.owner = ['56977774748', '51935116539']
global.mods = ['972529277406'] 
global.prems = [] 

//=============γ Info Owner γ============== //
global.nameowner = 'ππ΄π¬π²π°πΪel rebeldeπ ' //Nombre del creador
global.numberowner = '972529277406'
global.nameowner2 = 'βββββΊββ  πΌπΈππ°π΄π» βββββββ' //Nombre del creador2
global.numberowner2 = '51935116539'

global.instagram = ''
global.github = ''
global.dana = '087892711054'
global.pulsa = '085212023766'
global.gopay = '087892711054'

//=============γ Info Bot γ=================//
global.namebot = 'ππ·π°ππ±πΎππΊπΈπΆ-πΌπ³'
global.gc = 'https://facebook.com/groups/721802642266362/'
global.web = 'https://github.com/Hyzerr' //conviΓ©rtalo en su sitio web, puede vincular ig, vincular github, vincular yt, si el enlace es gc, la visualizaciΓ³n volverΓ‘ a ser diferente.
global.price1 = '1 bulan = 10.000\n2 Minggu 7.000\n1 Minggu 5.000'

//=======γ Pantalla y mΓ‘s γ============//
global.fotonya1 = 'https://telegra.ph/file/e4a2f4339da8a32ad20a1.jpg' //cambia a tu foto de bot
global.fotonya2 = 'https://telegra.ph/file/8c471d45b6cedad43cf84.jpg' //cambiar esto tambiΓ©n
global.lolkey = 'Papah-Chan' //asi que es facil remplazarlo, por ejemplo el apikey esta caducado :v
global.zenzkey = 'BagasPrdn' //cambiar a su apikey si caduca
global.wm = 'πππ πππππππ420-ππ'
global.watermark = wm
global.wm2 = '                     γ πππ πππππππ420-ππβ© γ'
global.wm3 = 'superbot-πΌπ³'
global.htki = 'ββββββγ' 
global.htka = 'γββββββ'
global.media = 'https://telegra.ph/file/fed1c9d94b37511e570d5.mp4'
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.wait = '_*espere unos minutos...*_'
global.eror = '_*erro de servidor*_'
global.benar = 'correcta β\n'
global.salah = 'incorecta β\n'
global.stiker_wait = 'π²ππππππ πππππππ...'
global.packname = 'Toma tu sticker'
global.author = 'Β© ππ·π΄ ππ·π°ππ±πΎπ-πΌπ³'

//=============γ Apikey γ================== //
global.APIs = { // API Prefix
  // name: 'https://website'
  amel: 'https://melcanz.com',
    bx: 'https://bx-hunter.herokuapp.com',
  dhnjing: 'https://dhnjing.xyz',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  jonaz: 'https://jonaz-api-v2.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  bsbt: 'https://bsbt-api-rest.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  zekais: 'http://zekais-api.herokuapp.com',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz', 
  erdwepe: 'https://erdwpe-api.herokuapp.com',
  lolhuman: 'https://api.lolhuman.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://melcanz.com': 'elaina',
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://api.xteam.xyz': 'd37372311698ed1d',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://api.zeks.xyz': 'apivinz',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://pencarikode.xyz': 'pais', 
  'https://leyscoders-api.herokuapp.com': 'dappakntlll',
  'https://zekais-api.herokuapp.com': 'apikeymu',
  'https://api.lolhuman.xyz': 'Deffbotz',
}

//=============γ JUEGOS | GAMES γ================== //
global.multiplier = 69 // Cuanto mΓ‘s alto, mΓ‘s difΓ­cil subir de nivel
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: 'βοΈ',
      money: 'π΅',
      potion: 'π₯€',
      diamond: 'π',
      common: 'π¦',
      uncommon: 'π',
      mythic: 'π³οΈ',
      legendary: 'ποΈ',
      pet: 'π',
      sampah: 'π',
      armor: 'π₯Ό',
      sword: 'βοΈ',
      kayu: 'πͺ΅',
      batu: 'πͺ¨',
      string: 'πΈοΈ',
      kuda: 'π',
      kucing: 'π' ,
      anjing: 'π',
      petFood: 'π',
      gold: 'π',
      emerald: 'π'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

//===========γ No cambies γ================ //
let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
