const Discord = require('discord.js');
//const config = require("./config.json");
const intents = new Discord.Intents(32767);
const client = new Discord.Client({ intents });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  setInterval(function () {
  client.user.setActivity('with Meku-senpai! UwU', { type: 'PLAYING' }); }, 10000);
});

client.on('messageCreate', message => 
//setup the message.
{
    if(message.author.bot)
    {
      if(message.embeds)
      {
          const embedMsg = message.embeds.find(msg => msg.title === 'Welcome to The AWM Faction-inator');
          if(embedMsg)
          {
              message.react('697339713543208960')
              .catch(err => console.error);
          }

      }
      return;
    }
    if(message.content.toLowerCase() === '=faction')
    {
        const embed = new Discord.MessageEmbed();
        embed.setTitle("Welcome to The AWM Faction-inator");
        embed.setColor("GREEN");
        embed.setDescription("React to the emoji below to know what your faction is!\n\n**WARNING!**\nNo one is allowed to have more than one faction.\nNo cheating! I'm watching! 👀\n\u200B");
        embed.setFooter('Anime World Malaysia (AWM™)', 'https://i.imgur.com/p96avpY.jpg');
        message.channel.send({files: ['https://i.imgur.com/FDuQmhp.gif']})
        .then(() => message.channel.send({ embeds: [embed] }))
        .catch(error => console.log('error occured'));     
    
    }
    
});
    

client.on('messageCreate', async (msg) => {
    if (msg.content === '=number') {
        let kleeroleID = '756829955702128660'; 
        let kleememberCount = msg.guild.roles.cache.get(kleeroleID).members.size;
        let naruminionroleID = '756829627573469194'; 
        let naruminionmemberCount = msg.guild.roles.cache.get(naruminionroleID).members.size;
        let eggplantoroleID = '756830004821884988'; 
        let eggplantomemberCount = msg.guild.roles.cache.get(eggplantoroleID).members.size;
        msg.channel.send(eggplantomemberCount + " members in the Eggplanto Faction!\n" + naruminionmemberCount + " members in the Naruminion Faction!\n"+ kleememberCount + " members in the Klee Faction!");
        //console.log(kleememberCount + naruminionmemberCount + eggplantomemberCount)
        msg.reply('Do I count them correctly, senpai? If so, please pat me! <a:PETTHEPEEPO:754803582296915979>');
    }
  });

client.on('messageReactionAdd', async (reaction, user) =>
//user's reaction on the emoji would grant them a random role.
 {

        let kleeroleID = '756829955702128660'; 
        let kleememberCount = msg.guild.roles.cache.get(kleeroleID).members.size;
        let naruminionroleID = '756829627573469194'; 
        let naruminionmemberCount = msg.guild.roles.cache.get(naruminionroleID).members.size;
        let eggplantoroleID = '756830004821884988'; 
        let eggplantomemberCount = msg.guild.roles.cache.get(eggplantoroleID).members.size;

    
    if(reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();


     if(user.bot)
     {
         return;
     }
    
      if(reaction.emoji.id === '697339713543208960') 
    { 
         if(reaction.message.channel.id === '756794488772624414')  
        { 
         console.log('Right Channel + Right Emoji');
         let haveklee = reaction.message.guild.members.cache.get(user.id).roles.cache.has('756829955702128660');
         let haveeggplanto = reaction.message.guild.members.cache.get(user.id).roles.cache.has('756830004821884988');
         let havenaruminion = reaction.message.guild.members.cache.get(user.id).roles.cache.has('756829627573469194');

         if(!haveklee && !haveeggplanto && !havenaruminion)
         {
            let x = kleememberCount,
            y = eggplantomemberCount,
            z = naruminionmemberCount;

            let ima = [{"name":"x", "value": x}, {"name":"y", "value": y}, {"name":"z", "value": z}];
            let tiber = ima.sort((a, b) => a.value - b.value);
            console.log(tiber[0].name);
            switch(tiber[0].name) {
              case 'x':
                // code block
                
                console.log('assign to klee');
                client.channels.cache.get('756790424353636372').send(`Pim pom! Make way for our new fella! Warm round of applause to <@${user.id}>!`)
                await reaction.message.guild.members.cache.get(user.id).roles.add("756829955702128660");
                return user.send("Congratulations! You get to be a member of Klee Faction!").catch(() => console.log("Failed to DM"));

                break;
              case 'y':
                // code block
                console.log('assign to eggplanto');
                client.channels.cache.get('756794039809867786').send(`Pim pom! Make way for our new fella! Warm round of applause to <@${user.id}>!`)
                await reaction.message.guild.members.cache.get(user.id).roles.add("756830004821884988");
                return user.send("Congratulations! You get to be a member of Eggplanto Faction!").catch(() => console.log("Failed to DM"));

                break;
              case 'z':
                // code block
                console.log('assign to naruminion');
                client.channels.cache.get('756794138543915069').send(`Pim pom! Make way for our new fella! Warm round of applause to <@${user.id}>!`)
                await reaction.message.guild.members.cache.get(user.id).roles.add("756829627573469194");
                return user.send("Congratulations! You get to be a member of Naruminion Faction!").catch(() => console.log("Failed to DM"));
                
                break;
              default:
                // code block
                client.channels.cache.get('757264816267067512').send(`Something is wrong with the switch, <@${'350985430440607744'}>. Please take a look at it.`);
            }
         } else 
              {
              client.channels.cache.get('757264816267067512').send(`LMAO! Did someone just make an attempt to have multiple factions?! No one can escape from my sight, <@${user.id}>!`);
              user.send('Huh? You think you who? No way you can be in another faction, you fool!');
              } 
          
             
        } else return;   
    }
 });
  

client.login(process.env.AWMFI_TOKEN);
