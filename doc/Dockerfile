# Use official Node image
FROM node:18.20.6

# Set working directory inside the container
WORKDIR /src

# Copy only package.json and lock file first (layer caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your source code
COPY . .

# Build the application
RUN npm run build

# Expose port (same as in main.ts)
EXPOSE 3000

# Start the app
CMD ["node", "dist/main.js"]
