ARG NODE_VERSION=16

FROM node:$NODE_VERSION-alpine
ARG NPM_VERSION

WORKDIR /var/test/
COPY * /var/test/

RUN if [[ "$NPM_VERSION" == "latest" ]] ; then npm install -g npm ; fi
RUN npm init --yes
RUN npm install p-defer
RUN npm install ./`ls *.tgz`
RUN npx -p webpack@4 -p webpack-cli webpack-cli

ENTRYPOINT node ./dist/main.js
