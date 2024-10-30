FROM node:latest

WORKDIR /app

COPY . .

RUN npm i -g @nestjs/cli

RUN npm install

RUN npx prisma generate

CMD ["npm", "start"]

