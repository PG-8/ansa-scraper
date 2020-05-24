SomeVar="random commit message - ${RANDOM}"

curl --url 'https://www.ansa.it' >> /home/pg-8/programming/shitty-ansa-scraper/scrape.txt
node /home/pg-8/programming/shitty-ansa-scraper/script.js
> /home/pg-8/programming/shitty-ansa-scraper/scrape.txt

cd /home/pg-8/programming/shitty-ansa-scraper
git add README.md
git commit -m "${SomeVar}"
git push
