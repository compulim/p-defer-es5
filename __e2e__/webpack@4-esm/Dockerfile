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
RUN npm install ./`ls p-defer-es5-*.tgz`
RUN npx -p webpack@4 -p webpack-cli webpack-cli

# As we already bundled everything, the bundle should not need to load anything from /node_modules/.
RUN rm -r node_modules

ENTRYPOINT node ./dist/main.js
