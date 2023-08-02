# Use the official Node.js image as the base image
FROM node:14.21.3

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if exists) to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire Vue.js project to the container
COPY . .

# Build the Vue.js project (if needed, modify this step according to your project's build command)
RUN npm run build

# Expose the port that your Vue.js app is listening to
EXPOSE 8080

# Start the Vue.js application
CMD ["npm", "run", "serve"]
