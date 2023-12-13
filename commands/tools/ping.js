const { SlashCommandBuilder } = require(`discord.js`);

module.exports = {
    date: new SlashCommandBuilder()
        .setName(`ping`)
        .setDescription(`Return my ping!`),
    async execute(interaction, client) {
        const message = await interaction.deferReplay({
            fetchReply: ture
        });

        const newMessage= `API Latency: ${client.ws.ping}\nClient Ping: ${message.createdTimestamp - interaction.createdTimestamp}`
        await interaction.editReply({
            content: newMessage
        });
    }
}