# Base image for building and running the Next.js application
FROM node:20.0.0 AS base

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install all dependencies (including devDependencies)
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Remove devDependencies after build
RUN npm prune --production

# Expose the Next.js port
EXPOSE 3001

# Start the Next.js application
CMD ["npm", "start"]
