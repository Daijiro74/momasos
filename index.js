const Discord = require("discord.js");
const prefix = 'sp!'
const client = new Discord.Client();

 client.on("ready", () => {
console.log("Estoy listo!");
});

client.on("message", (message) => {
if(message.content.startsWith(prefix + "ping")) {
message.channel.send("pong!");
}
if(message.content.startsWith(prefix + "adri")) {
message.channel.send("PRRO!");
}
if(message.content.startsWith(prefix + "status")) {
  message.channel.send("En fase de pruebas!");
}
if(message.content.startsWith(prefix + "help"))  {
    message.channel.send("```sp!help = Te muestra este menu / sp!status = Te muestra el estado del bot / sp!ping = pong!```");
}

if(message.content.startsWith(prefix + "hola")) {
  message.channel.send("Adios!");
  }

});


 client.login("NzUzMjY5MDU4OTcxMTA3NDQ5.X1jueg.4MiBugQlBnXEG4Rz2rkn_VpwXf0");