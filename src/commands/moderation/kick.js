const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageEmbed, MessageAttachment } = require('discord.js')
module.exports = {
	data: new SlashCommandBuilder()

		.setName('kick')
		.setDescription('Kicks the member')
		.addUserOption((option) =>
			option
				.setName('target')
				.setDescription('the user mentioned')
				.setRequired(true)
		)
		.addStringOption((option) =>
			option
				.setName('reason')
				.setDescription('Why you are banning the member')
				.setRequired(false)
		),
	async execute(interaction, client) {
		const Banner = interaction.member
		const user = interaction.options.getMember('target')
		let reason
		const hasPermission = Banner.permissions.has('KICK_MEMBERS', true)
		if (!hasPermission) return interaction.reply('Nincs Jogosultságod!')
		if (interaction.options.get('reason')) {
			reason = interaction.options.get('reason').value
		} else {
			reason = 'no reason given'
		}
		if (user) {
			const banEmbedServer = new MessageEmbed()
				.setColor('#ff0000')
				.setTitle(
					`${user.user.username} ki lett rúgva a Happy Roleplay Hungary Discord Szerveréről ${Banner.user.username} által!`
				)
				.setAuthor('Happy Roleplay', client.user.displayAvatarURL())
				.setThumbnail('https://i.imgur.com/cB0Mg0i.png')
				.addFields({
					name: 'Indok:',
					value: reason,
					inline: false,
				})

				.setFooter(
					'Ez a bot a HRH tulajdona, esetleges hibával/észrevétellel keresd: srek',
					'https://i.imgur.com/cB0Mg0i.png'
				)
			await user.kick({ reason: reason }).catch(console.error)
			interaction.reply({ embeds: [banEmbedServer] })
		} else {
		}
	},
}
