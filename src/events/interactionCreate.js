module.exports = {
	name: 'interactionCreate',
	async execute(interaction, client) {
		if (interaction.isCommand()) {
			const command = client.commands.get(interaction.commandName)
			if (!command) return
			try {
				await command.execute(interaction, client)
			} catch (error) {
				console.error(error)
				await interaction.reply({
					content: 'Hiba történt a parancs végrehajtása közben!',
					ephemeral: true,
				})
			}
		} else if (interaction.isSelectMenu()) {
			switch (interaction.customId) {
				case 'color-select':
					let colors = ''
					await interaction.values.forEach(async (element) => {
						colors += `${element} `
					})
					await interaction.reply({
						content: `Wow your fav colors are: ${colors}`,
					})
					break
				default:
					break
			}
		} else if (interaction.isButton()) {
			if (interaction.customId.includes('-button')) {
				if (interaction.customId.includes('green')) {
					var role = interaction.guild.roles.fetch(
						(role) => role.name === '👥Játékos👥'
					)
					try {
						await interaction.member.roles.add('777094190764261381')
						interaction.reply({
							ephemeral: true,
							content: 'Mehetsz is fel! 🥳',
						})
					} catch (err) {
						console.warn(err)
					}
				}
			}
		}
	},
}
