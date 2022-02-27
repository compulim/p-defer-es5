FROM node:16-alpine

WORKDIR /var/test/
COPY * /var/test/

RUN npm init --yes
RUN npm install p-defer
RUN npm install ./`ls *.tgz`
RUN npx -p webpack@5 -p webpack-cli webpack-cli

ENTRYPOINT node ./dist/main.js
