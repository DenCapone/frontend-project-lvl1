install: 	
	npm install

start:
	node bin/brain-calc.js

publish: 
	npm publish --dry-run

lint:
	npx eslint .
