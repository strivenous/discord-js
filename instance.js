const Discord = require('discord.js');
const client = new Discord.Client();
var discordusertoken = 'NzE2NjYxNTA1MzA2Nzg3ODkw.XtPEXg.YP7zzVZNpm1N3646I27-x47bVSU'

const prefix = 'elitism.'
client.on('ready', () => {
    console.log('ready.');
  });

client.on('message', message => {
      if (message.content === prefix + 'ping') {
          message.channel.send('https://cdn.discordapp.com/attachments/626478108370927618/645407907524902951/video0.mp4');
      }
  });


client.on('message', message => {
    if (message.content === prefix + 'pfp') {
        message.reply(message.author.displayAvatarURL());
    }
});

client.on('message', message => {
    if (message.content === prefix + 'mcbeans_lockdown') {
        message.channel.send('CONTACTING ERDOGAN FOR BOMBING...');

    }
});

client.on('message', message => {
    if (message.content === prefix + 'antimcbeans_loop') {
        message.channel.send('violenttaxinights');
        if (message.content.includes('2d57799bb67f9d52f9f9063b0d6c9d03')) {
            message.channel.send('violenttaxinights');
        }

    }
});







client.login(discordusertoken)