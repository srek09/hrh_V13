const { SlashCommandBuilder } = require('@discordjs/builders')
module.exports = {
	data: new SlashCommandBuilder()
		.setName('purge')
		.setDescription('deletes the stated amount of messages')
		.addNumberOption((option) =>
			option
				.setName('amount')
				.setDescription('how many messages do you want to delete')
				.setRequired(true)
		),

	async execute(interaction, client) {
		const amount = interaction.options.get('amount').value
		if (amount < 100) {
			await interaction.channel.messages
				.fetch({ limit: amount })
				.then((messages) =>
					interaction.channel.bulkDelete(messages, true)
				)
		} else {
			let left = 0
			do {
				await interaction.channel.messages
					.fetch({ limit: 100 })
					.then((messages) =>
						interaction.channel.bulkDelete(messages, true)
					)
				left - 100
			} while (amount >= 100)
			await interaction.channel.messages
				.fetch({ limit: left })
				.then((messages) =>
					interaction.channel.bulkDelete(messages, true)
				)
		}
		return interaction.reply(`successfully deleted ${amount} messages.`)
	},
}
