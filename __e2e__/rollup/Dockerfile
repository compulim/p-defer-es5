ARG NODE_VERSION=16

FROM node:$NODE_VERSION-alpine
ARG NPM_VERSION

WORKDIR /var/test/
COPY * /var/test/

RUN if [[ "$NPM_VERSION" == "latest" ]] ; then npm install -g npm ; fi

RUN node --version
RUN npm --version

RUN npm init --yes
RUN npm install p-defer
RUN npm install ./`ls *.tgz`
RUN npx rollup ./index.js --file ./dist/main.js --format iife

ENTRYPOINT node ./dist/main.js
