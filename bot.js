const { Client, Intents, MessageButton, Role } = require("discord.js");
const { MessageActionRow } = require('discord.js')

const keepAlive = require('./Untitled-1')

const bot = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS]
});

const disbut = require('discord-buttons');
disbut(bot);

const token = 'OTg4OTU0MDA5NTIyMDI4NTk0.GbMFJm.GPgXAFJVX_IwK4ek3Sz4EPL_JGJAj_OYjXObd4'

bot.on("ready", () => {
  console.log(`Logged in as ${bot.user.tag}`);
});

bot.on('guildMemberAdd', (ctx) => {
    console.log("Member joined");
    const channel = ctx.guild.channels.cache.get('988665344828780594');

    let button = new disbut.MessageButton()
    .setStyle('blurple')
    .setLabel('Verify')
    .setID(`verify-button-${ctx.user.tag}`)

    channel.send(`Great to have you ${ctx.user}!\nClick the button below to verify yourself!`, button);
});

const verifiedRole = '970183320493244426';

bot.on("clickButton", (button) => {
    const buttonID = button.id
    const user = button.clicker.member
    console.log("1")
    if (!button.clicker.member.roles.cache.some(role => role.name === 'kneecaps')) {
        console.log("2")
        user.roles.add(verifiedRole);
        return button.reply({
            content: 'Verified!',
            ephemeral: true
        });
    }
});

keepAlive()

bot.login(token);