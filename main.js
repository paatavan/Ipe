const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Bot prêt!');
    
    // List of available statuses
     client.user.setPresence({activity: {name: 'your speed writing', type: 'WATCHING'}, status: "online"});
  
});

const prefix = "+"



client.on("message", async (message) => {
    if (message.content.startsWith(prefix + 'help')) {
    const embed = new Discord.MessageEmbed()
    .setColor("#2b2d31")
    .setImage('https://media.discordapp.net/attachments/1124018442165567559/1125033018298466304/Ipi.png')
    .setDescription("##  General Commands :\n`+wpm` : This commands allows you to test your typing speed.\n`+learn` : This commands allows you to redirect you to [MonkeyType](https://monkeytype.com/)\n##  Settings Commands :\n`+help` : This commands allows you to know more about com.\n`+about` : This commands allows you to know more.")
    message.channel.send(embed)
} })


client.on("message", async (message) => {
    if (message.content.startsWith(prefix + 'about')) {
    const embed = new Discord.MessageEmbed()
    .setColor('#2b2d31')
    .setTimestamp()
    .setDescription("## About\n\n**Ipe** is a trainer for typing speed test on Discord , Ipe is a OpenSource \nprojects with a certain Licences.\n## Links\n\n`🐵` [MonkeyType](https://monkeytype.com/)\n `👔` [Discord Server](https://www.bing.com/search?pglt=43&q=id%27ont+have+server&cvid=7ff5b6ef863e48a39a23785e4d23f10e&aqs=edge..69i57j0.3845j0j1&FORM=ANNTA1&PC=U531)\n`🧶` [Discord Invite](https://discord.com/api/oauth2/authorize?client_id=1123630519968596011&permissions=71680&scope=bot)\n`🌐` [Website](https://www.bing.com/search?pglt=43&q=i+don%27t+have+website&cvid=d863c10baaf8480a922c37f4e0eda28d&aqs=edge..69i57j0l8.5134j0j1&FORM=ANNTA1&PC=U531)")
        message.channel.send(embed)
} })


client.login('YOUR TOKEN')
