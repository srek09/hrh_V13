const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')
const ts = new MessageEmbed()
	.setColor('#1ad94d')
	.setTitle(`TeamSpeak szerverünk ip címe: hrh.zap-ts3.com`)
	.setDescription('A szerverre való csatlakozáshoz a TeamSpeak szükséges!')
	.addFields(
		{
			name: 'Szerverünkre a TeamSpeak 3-as klienssel lehet felcsatlakozni:',
			value: '[innen töltheted le](https://teamspeak.com/en/downloads/)',
		},
		{
			name: 'Szerverünkre a Tokovoip plugin 1.5.4-es verzió szükséges:',
			value: '[innen töltheted le](https://github.com/Itokoyamato/TokoVOIP_TS3/releases/download/v1.5.6/tokovoip-1.5.4.ts3_plugin)',
		}
	)
	.setFooter(
		'Ez a bot a HRH tulajdona, esetleges hibával/észrevétellel keresd: srek'
	)
	.setThumbnail(
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQxR5jSyrZQQo1gkRJk4VVfNcCTWpZbbLQew&usqp=CAU'
	)
const ip = new MessageEmbed()
	.setColor('#1ad94d')
	.setTitle(`A Happy Roleplay Hungary ip címe: 92.42.44.223:30136`)
	.setFooter(
		'Ez a bot a HRH tulajdona, esetleges hibával/észrevétellel keresd: srek',
		'https://i.imgur.com/cB0Mg0i.png'
	)

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('displays help about sth')
		.addSubcommand((subcommand) =>
			subcommand.setName('ts').setDescription('TeamSpeak info')
		)
		.addSubcommand((subcommand) =>
			subcommand.setName('ip').setDescription('Server ip')
		),

	async execute(interaction, client) {
		switch (interaction.options.getSubcommand()) {
			case 'ts':
				await interaction.reply({ embeds: [ts], ephemeral: true })
				break
			case 'ip':
				await interaction.reply({ embeds: [ip], ephemeral: true })
			default:
				break
		}
	},
}
