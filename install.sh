#!/bin/bash

# install node
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
nvm install 16

# install yarn
npm i -g yarn

# install serve (for running front end)
npm i -g serve

# install knex (for back end DB)
npm i -g knex

# install serverless framework (for lambda)
npm i -g serverless

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
