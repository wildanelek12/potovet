# Stage 1: Build
FROM node:20.0.0 as build

WORKDIR /app

# Copy package.json and yarn.lock
COPY package*.json yarn.lock ./  # Make sure you include yarn.lock if you use Yarn
RUN yarn install

# Copy all files and build
COPY . . 
RUN yarn build

# Stage 2: Runtime
FROM node:20.0.0 as runtime

WORKDIR /app

# Copy built files from build stage
COPY --from=build /app/out ./out

# If ckeditor5-custom-build is a local build folder, ensure it is copied correctly
COPY --from=build /app/public/js/ckeditor5 ./public/js/ckeditor5

# Expose necessary ports
EXPOSE 3000

CMD ["yarn", "start"]
