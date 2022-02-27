FROM node:14-alpine
ARG NPM_VERSION

WORKDIR /var/test/
COPY * /var/test/

RUN if [[ "$NPM_VERSION" == "latest" ]] ; then npm install -g npm ; fi
RUN npm init --yes
RUN npm install p-defer
RUN npm install ./`ls *.tgz`
RUN npx esbuild ./index.js --bundle --minify --outfile=./dist/main.js --target=es2016

ENTRYPOINT node ./dist/main.js
