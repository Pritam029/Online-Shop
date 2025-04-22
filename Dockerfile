<<<<<<< HEAD
# Use Node.js for development
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Expose Vite port
EXPOSE 5173

# Start the Vite dev server
CMD ["npm", "run", "dev"]
=======
FROM node:18 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .


FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app .
EXPOSE 5173
CMD ["npm", "run", "dev"]

>>>>>>> 73416f1 (Your commit message)
