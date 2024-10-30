FROM _/ubuntu

ENV DATABASE_URL = ""

RUN npm i -g @nestjs/cli

RUN npm install

RUN npm run start

