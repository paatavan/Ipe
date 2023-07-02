const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Bot prêt!');
    
    // List of available statuses
     client.user.setPresence({activity: {name: 'your speed writing', type: 'WATCHING'}, status: "online"});
  
});

const prefix = "+"

client.on('message', async message => {
    if (message.author.bot) return;

    if (message.content.startsWith(prefix + 'wpm')) {
        const testText = generateRandomText(); // Génère un texte aléatoire pour le test
        const embed = new Discord.MessageEmbed()
        .setTitle("`🎹` Typing Test")
        .setDescription("```" + `${testText}` + "```")
        .setColor('#2b2d31')
        .setTimestamp()
        .setFooter("Ipe Typing text")

        await message.channel.send(embed);
        const startTime = Date.now();

        const filter = m => m.author.id === message.author.id;
        const collector = message.channel.createMessageCollector(filter, { max: 1, time: 60000 }); // 60 secondes pour répondre

        collector.on('collect', async collected => {
            const endTime = Date.now();
            const timeTaken = endTime - startTime;
            const inputText = collected.content;
            const { errors, errorIndices } = findErrors(testText, inputText);
            const accuracy = calculateAccuracy(testText, inputText);
            const wordCount = countWords(testText);
            const wpm = calculateWPM(wordCount, timeTaken);

             const embed2 = new Discord.MessageEmbed()
             .setTitle("`📜` Here you're test !")
             .setDescription("`⏰` **Time taken :** `" + `${timeTaken / 1000}sec`+ "`\n`❌` **Errors :** `" + `${errors}` +"`\n`🏆` **Accuracy :** `"+ `${accuracy}%` +"`\n`🅰` **Word Per Minutes :** `"+ `${wpm}WPM` + "`")
             .setColor('#2b2d31')
             .setTimestamp()
            .setFooter("Ipe Typing text")
            await message.channel.send(embed2);

            if (errors > 0) {
                
            }
        });

        collector.on('end', collected => {
            if (collected.size === 0) {
                message.channel.send('Le test de vitesse a expiré.');
            }
        });
    }
});

const citations = [
    "Courageous people do not fear forgiving, for the sake of peace.",
    "Without education, your children can never really meet the challenges they will face. So it’s very important to give children education and explain that they should play a role for their country.",
    "If you want to make peace with your enemy, you have to work with your enemy. Then he becomes your partner.",
    "In my country we go to prison first and then become President.",
    "I have cherished the ideal of a democratic and free society in which all persons live together in harmony and with equal opportunities. It is an ideal which I hope to live for and to achieve. But if needs be, it is an ideal for which I am prepared to die.",
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "Success is not final, failure is not fatal : it is the courage to continue that counts.",
    "Attitude is a little thing that makes a big difference.",
    "When I do good, I feel good; when I do bad, I feel bad, and that is my religion.",
    "Better to remain silent and be thought a fool than to speak out and remove all doubt.",
    "You can fool some of the people all of the time, and all of the people some of the time, but you can not fool all of the people all of the time.",
    "In the end, it’s not the years in your life that count. It’s the life in your years.",
    "Education is the most powerful weapon which you can use to change the world.",
    "A winner is a dreamer who never gives up.",
    "I learned that courage is not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear."
  ];
  

function generateRandomText() {
    const randomIndex = Math.floor(Math.random() * citations.length);
    return citations[randomIndex];
}

function findErrors(originalText, inputText) {
    // Trouver et retourner les erreurs entre le texte original et le texte saisi
    const originalWords = originalText.split(' ');
    const inputWords = inputText.split(' ');

    let errors = 0;
    let errorIndices = [];

    originalWords.forEach((word, index) => {
        if (inputWords[index] !== word) {
            errors++;
            errorIndices.push(index);
        }
    });

    return { errors, errorIndices };
}

function calculateAccuracy(originalText, inputText) {
    // Calculer et retourner la précision en pourcentage entre le texte original et le texte saisi
    const errors = findErrors(originalText, inputText).errors;
    const accuracy = ((originalText.length - errors) / originalText.length) * 100;
    return accuracy.toFixed(2);
}

function countWords(text) {
    // Compter et retourner le nombre de mots dans le texte donné
    // Vous pouvez utiliser une méthode différente pour compter les mots si vous le souhaitez
    const words = text.split(' ');
    return words.length;
}

function calculateWPM(wordCount, timeTaken) {
    // Calculer et retourner le nombre de mots par minute
    const minutes = timeTaken / 60000;
    const wpm = wordCount / minutes;
    return Math.round(wpm);
}


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


client.login('MTEyMzYzMDUxOTk2ODU5NjAxMQ.GVWxAv._Upx_DRuM1HkiR4-0ZIyfNmo8zPg8vnnKgS9dE')