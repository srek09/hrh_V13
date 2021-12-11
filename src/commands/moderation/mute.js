const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageEmbed, MessageAttachment } = require('discord.js')
const ms = require('ms')

module.exports = {
	data: new SlashCommandBuilder()

		.setName('mute')
		.setDescription('Mutes the member for specific time')
		.addUserOption((option) =>
			option
				.setName('target')
				.setDescription('the user mentioned')
				.setRequired(true)
		)
		.addStringOption((option) =>
			option
				.setName('time')
				.setDescription('the time while the member is muted')
				.setRequired(true)
				.addChoice('1 day', '1d')
				.addChoice('3 days', '3d')
				.addChoice('7 days', '7d')
				.addChoice('14 days', '14d')
				.addChoice('30 days', '30d')
				.addChoice('permanent', 'perma')
		)
		.addStringOption((option) =>
			option
				.setName('reason')
				.setDescription('Why are you muting the member')
				.setRequired(false)
		),
	async execute(interaction, client) {
		const Banner = interaction.member
		const user = interaction.options.getMember('target')
		const time = interaction.options.get('time').value
		let realTime
		switch (time) {
			case '1d':
				realTime = '1 day'
				break
			case '3d':
				realTime = '3 days'
				break
			case '7d':
				realTime = '7 days'
				break
			case '14d':
				realTime = '14 days'
				break
			case '30d':
				realTime = '30 days'
				break
			default:
				realTime = 'permanent'
				break
		}
		let reason
		const hasPermission = Banner.permissions.has('MANAGE_ROLES', true)
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
					`${user.user.username} ki lett tiltva a Happy Roleplay Hungary Discord Szerveréről ${Banner.user.username} által!`
				)
				.setAuthor('Happy Roleplay', client.user.displayAvatarURL())
				.setThumbnail('https://i.imgur.com/cB0Mg0i.png')
				.addFields(
					{
						name: 'Indok:',
						value: reason,
						inline: false,
					},
					{
						name: 'Idő:',
						value: realTime,
						inline: false,
					}
				)

				.setTimestamp()
				.setFooter(
					'Ez a bot a HRH tulajdona, esetleges hibával/észrevétellel keresd: srek',
					'https://i.imgur.com/cB0Mg0i.png'
				)
			console.log(time)
			await user.ban({ days: 7, reason: reason }).catch(console.error)
			interaction.reply({ embeds: [banEmbedServer] })

			if (time != 'permanent') {
				setTimeout(async function () {
					await interaction.guild.bans.fetch().then(async (bans) => {
						if (bans.size == 0) {
							return
						}
						let bUser = bans.find((b) => (b.user.id = user.user.id))
						if (!bUser) return
						await interaction.guild.members
							.unban(bUser.user, reason)
							.then(
								console.log(`unbanned: ${bUser.user.username}`)
							)
							.catch((err) => console.log(err))
					})
				}, ms(time))
			}
		} else {
		}
	},
}
