// SI VAS A MODIFICAR AL MENOS NO QUITES LOS CREDITOS, WEB, ENLACES, DE ESA FORMA YA ESTAS APOYANDO 
// TAMBIEN PUEDES AGREGAR TΓ INFORMACIΓN SIN ESTAR ELIMINANDO LOS CREDITOS 
// EN CASO DE PODER COMPARTIR ESTE REPOSITORIO SE TE AGREDECE, Y GRACIAS POR INTERESARTE EN THE WHATBOT-MD!! 

const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fetch = require('node-fetch')
let fs = require('fs')
let handler = async(m, { conn }) => {
conn.sendContact(m.chat, numberowner, nameowner, m) 
conn.sendContact(m.chat, numberowner2, nameowner2, m) 
	
	//let pp = 'https://c.tenor.com/XOJyPTMOUT8AAAAd/cosmos-universo.mp4'
let text = `*Hola ese es mi desarrollo/creador hablarle por cosa de bot*
*Esos son los Contactos disponibles!*`
  let message = await prepareWAMessageMedia({ video: fs.readFileSync('./media/menu/menuvid.mp4'), gifPlayback: true }, { upload: conn.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: text,
           hydratedFooterText: wm,
           hydratedButtons: [{
             urlButton: {
               displayText: 'πππ§ππ¨π',
               url: "https://github.com/elrebelde21/The-whatbot-MD"
              }   
            },
              {
              urlButton: {
               displayText: 'GRUPOS ASISTENCIA',
               url: 'https://facebook.com/groups/721802642266362/'	           
             }
           },
             {
             quickReplyButton: {
		     displayText: 'π ππ‘π¨ π£π₯ππ‘πππ£ππ β‘',
               id: '.menu',
             }
	   },
             {
             quickReplyButton: {
               displayText: 'π ππ‘π¨ ππ’π π£πππ§π’ π«',
               id: '.? all',
             }
          }]
        }
      }
    }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(m.chat, template.message, { messageId: template.key.id })  
}
handler.help = ['creador | owner']
handler.tags = ['info']
handler.command = /^(contacto|owner|creator|propietario|dueΓ±o|dueΓ±a|propietaria|dueΓ±o|creadora|creador)$/i

module.exports = handler

// the whatBot-MD
