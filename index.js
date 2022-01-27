const Discord = require('discord.js');
const bot = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.DIRECT_MESSAGES,
        Discord.Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS
    ]
});
const prefix ='<';
const token = 'OTI3MzcyNTE4MjEyMzk5MjA1.YdJQ9g.Z1g9yU-Ss8AQwjgOP5tl5uPJOMs';

bot.on('ready', () => {
    console.log(`ok`)
    bot.user.setActivity('Script', ({type:"WATCHING"}))
})

bot.on('message', message => {

    const args = message.content.slice(prefix.length).trim().split(/ +/);

    switch(args[0]) {
        case 'quest':
            rndmessage(message);

            function rndmessage(message) {
                var messages = ['**__Quête1__** : _Un roi convoité_ \u200B\n\n• Capturer un Roissingue dans le donjon Kralamoure.\n• Validez la quête en donnant la Pierre d âme à votre meneur ou bras droit. \n\n**__Récompense__** : 1 000 :coin:', 'Quête2', 'Quête3'];
                var rnd = Math.floor(Math.random() * messages.length);

                message.channel.send(messages[rnd]);
            }
        break;
    }
})

bot.login(token);
