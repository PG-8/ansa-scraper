const fs = require('fs')

const date = new Date()
const currentDate = [date.getDate(), date.getMonth() + 1, date.getFullYear()]

function readContent(callback) {
	fs.readFile('scrape.txt', 'UTF-8', function (err, content) {
		if (err) return callback(err)
		callback(null, content)
	})
}

const cleanup = (toClean) => {
	return toClean
		.replace('.html">', '')
		.replace('</a>', '')
		.replace('<br />', ', ')
}

const extractResult = (scrape) => {
	const regex = /(?:<header>).*(?:<\/a>)/gm
	const regex2 = /(?:.html">).*?(?:<\/a>)/
	const result = scrape.match(regex)
	const string = result.join('')
	const result2 = string.match(regex2)
	return cleanup(result2[0])
}

readContent(function (err, content) {
	fs.appendFileSync(
		'readyToPush.txt',
		`${currentDate.map((el) => el)} - ${extractResult(content)}\n`
	)
})
