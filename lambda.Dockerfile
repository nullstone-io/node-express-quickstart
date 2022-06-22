FROM nullstone/node:lambda

WORKDIR ${FUNCTION_DIR}
COPY package.json .
RUN yarn install
COPY . .

CMD [ "serverless.handler" ]