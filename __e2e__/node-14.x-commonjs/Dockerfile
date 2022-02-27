FROM node:14-alpine

WORKDIR /var/test/
COPY * /var/test/

RUN npm init --yes
RUN npm install p-defer
RUN npm install ./`ls *.tgz`

ENTRYPOINT node ./index.js
