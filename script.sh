SomeVar="random commit message - ${RANDOM}"

curl --url 'https://www.ansa.it' >> scrape.txt
node script.js
> scrape.txt 

git add README.md
git commit -m "${SomeVar}"
git push
