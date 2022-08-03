FROM node:alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app

COPY --chown=node:node package*.json ./

RUN npm config set unsafe-perm true

RUN npm install -g typescript
RUN npm install -g ts-node
USER node
RUN npm install

COPY --chown=node:node . .

RUN npx prisma generate

CMD [ "npm", "start" ]
