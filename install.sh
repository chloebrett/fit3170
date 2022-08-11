# install node
curl -sL https://rpm.nodesource.com/setup_16.x | sudo bash -

# install yarn
npm i -g yarn

# install front end deps
cd frontend
yarn

# install back end deps
cd ../backend-json
yarn

# install back end deps (db version)

cd ../backend-database
yarn

# go back to main folder
cd ..
