let fetch = require("node-fetch");
let handler = async (m, { conn, args }) => {
  let res = await fetch(
    global.API("https://coffee.alexflipnote.dev/", "/random.json")
  );
  if (!res.ok) throw await `${res.status} ${res.statusText}`;
  let json = await res.json();
  if (json.file) conn.sendButtonImg(m.chat, json.file, "caffe", wm, '𝚂𝚒𝚐𝚞𝚒𝚎𝚗𝚝𝚎', '.kopi', m);
  else throw json;
};
handler.help = ["coffee", "kopi"];
handler.tags = ["internet"];

handler.command = /^(kopi|coffee)$/i;

module.exports = handler;
