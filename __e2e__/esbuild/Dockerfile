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

# The lowest version supported by ESBuild is "es2016".
RUN npx esbuild ./index.js --bundle --minify --outfile=./dist/main.js --target=es2016

ENTRYPOINT node ./dist/main.js
