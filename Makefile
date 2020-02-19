install: 	
	npm install

start:
	npx node bin/games/brain-games.js

publish: 
	npm publish --dry-run

lint:
	npx eslint .
