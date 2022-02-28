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

# The lowest version supported by ESBuild is "es2016".
RUN npx esbuild ./index.js --bundle --minify --outfile=./dist/main.js --target=es2016

# As we already bundled everything, the bundle should not need to load anything from /node_modules/.
RUN rm -r node_modules

ENTRYPOINT node ./dist/main.js
