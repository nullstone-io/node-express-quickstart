FROM nullstone/node

COPY package.json .
RUN yarn install
COPY . .
