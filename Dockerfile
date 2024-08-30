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

# Set the environment variable to run on port 3001
ENV PORT 3001

# Expose the Next.js port
EXPOSE 3001

# Start the Next.js application on port 3001
CMD ["npm", "start", "-p", "3001"]
