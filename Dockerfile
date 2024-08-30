FROM node:20.0.0 as build
WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .
RUN yarn build

FROM node:20.0.0 as runtime
WORKDIR /app
COPY --from=build /app/out ./
EXPOSE 3000
CMD ["yarn", "start"]

