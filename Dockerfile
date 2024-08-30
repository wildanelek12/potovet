FROM node:18 as build
WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .
RUN yarn build

FROM node:18-alpine as runtime
WORKDIR /app
COPY --from=build /app/out ./
EXPOSE 3000
CMD ["yarn", "start"]

