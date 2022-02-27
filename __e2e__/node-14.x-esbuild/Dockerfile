FROM node:14-alpine

WORKDIR /var/test/
COPY * /var/test/

RUN npm init --yes
RUN npm install p-defer
RUN npm install ./`ls *.tgz`
RUN npx esbuild ./index.js --bundle --minify --outfile=./dist/main.js --target=es2016

ENTRYPOINT node ./dist/main.js
