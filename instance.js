const Discord = require('discord.js');
const client = new Discord.Client();
var discordusertoken = 'NzE2NjYxNTA1MzA2Nzg3ODkw.XtPEXg.YP7zzVZNpm1N3646I27-x47bVSU'

const NetworkSpeed = require('network-speed');
const testNetworkSpeed = new NetworkSpeed();

/**************************************************************************************************/
// network-speed async funcs

getNetworkDownloadSpeed();
 
async function getNetworkDownloadSpeed() {
  const baseUrl = 'http://eu.httpbin.org/stream-bytes/50000000';
  const fileSizeInBytes = 50000000;
  const speed = await testNetworkSpeed.checkDownloadSpeed(baseUrl, fileSizeInBytes);
  console.log('someone ran a check' + speed);
}
 
getNetworkUploadSpeed();
 
async function getNetworkUploadSpeed() {
  const options = {
    hostname: 'www.google.com',
    port: 80,
    path: '/net-speed/50000000', // can't do with use strict enabled
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const fileSizeInBytes = 2000000
  const speed = await testNetworkSpeed.checkUploadSpeed(options, fileSizeInBytes);
  console.log('someone ran a check' + speed);
}

// network-speed async funcs
/**************************************************************************************************/

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


client.on('message', message => {
    if (message.content === prefix + 'speedtest') {
        message.channel.send('work in progress');
        /* 
        @TODO cross over with network-speed funcs 
        */

    }
});







client.login(discordusertoken)