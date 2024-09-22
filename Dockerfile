FROM node:16-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:16-alpine

WORKDIR /app

COPY --from=build /app/dist ./dist
COPY --from=build /app/package*.json ./

RUN npm install --only=production

EXPOSE 3000

CMD ["npm", "run", "start"]