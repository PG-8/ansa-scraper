const fs = require('fs')

const date = new Date()
const currentDate = [date.getDate(), date.getMonth() + 1, date.getFullYear()]
const currentTime = [date.getHours(), date.getMinutes()]

function readContent(callback) {
	fs.readFile('/home/pg-8/programming/shitty-ansa-scraper/scrape.txt', 'UTF-8', function (err, content) {
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
		'/home/pg-8/programming/shitty-ansa-scraper/README.md',
		`- ${(currentDate.map((el) => el)).toString().replace(/,/g, '/')} at ${currentTime[0]}:${currentTime[1]} -> ${extractResult(content)}\n`
	)
})
