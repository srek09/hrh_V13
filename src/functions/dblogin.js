const mongoose = require('mongoose')
const fs = require('fs')
const mongoEventFiles = fs
	.readdirSync('./src/mongoevents')
	.filter((file) => file.endsWith('.js'))
module.exports = (client) => {
	client.dblogin = async () => {
		for (const file of mongoEventFiles) {
			const event = require(`../mongoEvents/${file}`)
			if (event.once) {
				mongoose.connection.once(event.name, (...args) =>
					event.execute(...args)
				)
			} else {
				mongoose.connection.on(event.name, (...args) =>
					event.execute(...args)
				)
			}
		}
		mongoose.Promise = global.Promise
		await mongoose.connect(process.env.dbtoken),
			{
				useFindAndModify: false,
				useUnifiedTopology: true,
				useNewUrlParser: true,
			}
	}
}
