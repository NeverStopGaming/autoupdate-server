FROM node:17.2.0

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

ENV PORT=3000

EXPOSE 803

CMD ["npm", "start"]
