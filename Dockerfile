# Stage 1: Build the Next.js application
FROM node:20.0.0 AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./
# COPY yarn.lock ./

# Install dependencies
RUN npm install
# or if you're using yarn
# RUN yarn install

# Copy the rest of your application code (including the 'app' directory)
COPY . .

# Build the Next.js application with all server and static assets
RUN npm run build
# or if you're using yarn
# RUN yarn build

# Stage 2: Create a lightweight production image
FROM node:20.0.0 AS runner

# Set working directory
WORKDIR /app

# Install PM2 (Process Manager) to keep the server running in the background
RUN npm install -g pm2

# Copy only the necessary files from the build stage
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./

# Expose the Next.js port
EXPOSE 3000

# Start the application using PM2 to manage the process
CMD ["pm2-runtime", "start", "npm", "--", "start"]
# Stage 1: Build the Next.js application
FROM node:20.0.0 AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./
# COPY yarn.lock ./

# Install dependencies
RUN npm install
# or if you're using yarn
# RUN yarn install

# Copy the rest of your application code (including the 'app' directory)
COPY . .

# Build the Next.js application with all server and static assets
RUN npm run build
# or if you're using yarn
# RUN yarn build

# Stage 2: Create a lightweight production image
FROM node:20.0.0 AS runner

# Set working directory
WORKDIR /app

# Install PM2 (Process Manager) to keep the server running in the background
RUN npm install -g pm2

# Copy only the necessary files from the build stage
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./

# Expose the Next.js port
EXPOSE 3000

# Start the application using PM2 to manage the process
CMD ["pm2-runtime", "start", "npm", "--", "start"]
