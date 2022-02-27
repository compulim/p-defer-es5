FROM node:16-alpine
ARG NPM_VERSION

WORKDIR /var/test/
COPY * /var/test/

RUN if [[ "$NPM_VERSION" == "latest" ]] ; then npm install -g npm ; fi
RUN npm init --yes
RUN npm install p-defer
RUN npm install ./`ls *.tgz`

ENTRYPOINT node ./index.mjs
