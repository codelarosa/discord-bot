require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();
const axios = require('axios');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.CLIENT_TOKEN);

async function getMeme(){
  const res = await axios.get('https://memeapi.pythonanywhere.com/');
  return res.data.memes[0].url;
}

client.on('message', async msg => {
    switch (msg.content) {

        case 'bark':
            msg.reply('Bark!');
            break;

        case 'bark meme':
            msg.channel.send('Woof!');

    }
}

/*
client.on('message', msg => {
    if (msg.content === 'bark') {
    msg.reply('Bark!');

  }
});
*/
