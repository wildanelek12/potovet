FROM node:18 as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:18-alpine as runtime
WORKDIR /app
COPY --from=build /app/out ./
EXPOSE 3000
CMD ["npm", "start"]
