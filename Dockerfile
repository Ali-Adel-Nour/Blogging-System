FROM node:22-alpine

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy application code
COPY . .

# Expose port for the application
EXPOSE 3000

# Command to run the application
CMD ["node", "server.js"]