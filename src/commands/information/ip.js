const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')
module.exports = {
	data: new SlashCommandBuilder()
		.setName('ip')
		.setDescription('shows the servers ip'),
	async execute(interaction, client) {
		const ip = '92.42.44.223:30136'
		const embed = new MessageEmbed()
			.setColor('#1ad94d')
			.setTitle(`A Happy Roleplay Hungary ip címe: ${ip}`)
			.setFooter(
				'Ez a bot a HRH tulajdona, esetleges hibával/észrevétellel keresd: srek',
				'https://i.imgur.com/cB0Mg0i.png'
			)
		interaction.reply({ embeds: [embed], ephemeral: true })
	},
}
