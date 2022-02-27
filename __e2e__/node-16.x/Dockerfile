FROM node:16-alpine

WORKDIR /var/test/
COPY *.tgz /var/test/
COPY test.mjs /var/test/

RUN \
  ls -la
  npm init --yes \
  npm install esbuild p-defer \
  npm install ./`ls *.tgz` \
  la -la node_modules

ENTRYPOINT node ./test.mjs
