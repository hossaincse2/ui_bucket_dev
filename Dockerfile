FROM node:alpine
WORKDIR /app/frontend
COPY . .

RUN npm install

EXPOSE 3001

CMD npm run dev