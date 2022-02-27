FROM node:14-alpine

WORKDIR /var/test/
COPY package.tgz /var/test/
COPY test.mjs /var/test/

RUN \
  npm init --yes \
  npm install esbuild p-defer \
  npm install ./`ls *.tgz`

ENTRYPOINT node ./test.mjs
