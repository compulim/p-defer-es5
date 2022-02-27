FROM node:14-alpine

WORKDIR /var/test/
COPY * /var/test/

RUN npm init --yes
RUN npm install p-defer
RUN npm install ./`ls *.tgz`
RUN npx -p webpack@4 -p webpack-cli webpack-cli

ENTRYPOINT node ./dist/main.js
