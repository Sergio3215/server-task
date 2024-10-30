FROM ubuntu

ENV DATABASE_URL = ""

RUN npm i -g @nestjs/cli

RUN npm install

RUN npx prisma generate

RUN npm run start

