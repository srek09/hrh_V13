const { REST } = require('@discordjs/rest')
const { Routes } = require('discord-api-types/v9')
const fs = require('fs')
const clientId = '864161303266721802'
const guildId = '777094190764261376'

module.exports = (client) => {
	client.handleCommands = async (commandFolders, path) => {
		client.commandArray = []
		for (const folder of commandFolders) {
			const commandFiles = fs
				.readdirSync(`${path}/${folder}`)
				.filter((file) => file.endsWith('.js'))
			for (const file of commandFiles) {
				const command = require(`../commands/${folder}/${file}`)
				/* set a new item in the Collection
                witn the key as the command name and the value as 
                the exported module*/
				client.commands.set(command.data.name, command)
				client.commandArray.push(command.data.toJSON())
			}
		} 

		const rest = new REST({ version: '9' }).setToken(process.env.token)

		;(async () => {
			try {
				console.log('Started refreshing application (/) commands.')

				await rest.put(
					Routes.applicationGuildCommands(clientId, guildId),
					{ body: client.commandArray }
				)

				console.info('Successfully reloaded application (/) commands.')
			} catch (error) {
				console.error(error)
			}
		})()
	}
} 
