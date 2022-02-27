FROM node:16-alpine

WORKDIR /var/test/
COPY *.tgz /var/test/
COPY test.mjs /var/test/

RUN npm init --yes
RUN npm install esbuild p-defer
RUN npm install ./`ls *.tgz`

ENTRYPOINT node ./test.mjs
