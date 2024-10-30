FROM node:latest

# Configurar el directorio de trabajo
WORKDIR /app

# Copiar el resto de los archivos
COPY . .

ENV DATABASE_URL = "mongodb+srv://principianteenprogramar:47Ss9x6V2Pp8vIF5@cluster0.sale0.mongodb.net/Task?retryWrites=true&w=majority&appName=Cluster0"

RUN npm i -g @nestjs/cli

RUN npm install

RUN npx prisma generate

# Iniciar la aplicación (si es aplicable)
CMD ["npm", "start"]

