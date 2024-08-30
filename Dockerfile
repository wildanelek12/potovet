# Base image for building and running the Next.js application
FROM node:20.0.0 AS base

# Set working directory
WORKDIR /app

# Install dependencies only when package.json or package-lock.json changes
COPY package*.json ./
RUN npm install --production

# Copy the rest of the application code (including the 'app' directory)
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the Next.js port
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]
