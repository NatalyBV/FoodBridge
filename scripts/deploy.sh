#d eploy front-end stack
cd front-end/infrastructure
npm i
npm run deploy

# deploy routing stack
cd ../../routing/infrastructure
npm install
npm run deploy
