const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageEmbed, MessageAttachment } = require('discord.js')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('info')
		.setDescription('Returns info based on input')
		.addSubcommand((sucommand) =>
			sucommand
				.setName('user')
				.setDescription('Gets information of a user mentioned')
				.addUserOption((option) =>
					option
						.setName('target')
						.setDescription('the user mentioned')
				)
		)
		.addSubcommand((sucommand) =>
			sucommand.setName('server').setDescription('Info about the server')
		),

	async execute(interaction, client) {
		if (interaction.options.getSubcommand() === 'user') {
			const user = interaction.options.getUser('target')
			if (user) {
				const userEmbed = new MessageEmbed()
					.setTitle(`${user.username}'s information:`)
					.setDescription('this is a description')
					.setURL('https://youtube.com')
					.setThumbnail(client.user.displayAvatarURL())
					.setAuthor(
						'Srek',
						client.user.displayAvatarURL(),
						'https://youtube.com'
					)

					.addFields(
						{
							name: `Username:`,
							value: `Username is: ${user.username}`,
							inline: true,
						},
						{ name: `\u200b`, value: `\u200b`, inline: true },
						{
							name: `Tag:`,
							value: `Tag is #${user.discriminator}`,
							inline: true,
						}
					)
					.setTimestamp()
					.setColor('#1ad94d')
					.setFooter(client.user.tag, client.user.displayAvatarURL())

				await interaction.reply({ embeds: [userEmbed] })
			} else {
				await interaction.reply(
					`Username: ${interaction.user.username}\nID: ${interaction.user.id}`
				)
			}
		} else if (interaction.options.getSubcommand() === 'server') {
			await interaction.reply(
				`Server name: ${interaction.guild.name}\nTotal Members: ${interaction.guild.totalMembers}`
			)
		} else {
			await interaction.reply('No subcommand was used.')
		}
	},
}
