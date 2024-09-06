
# Use the official Node.js image as the base image
FROM node:18

# Create and set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code to the working directory
COPY . .

# Set the default command to run when the container starts
CMD ["node", "rsa.js"]  # Replace 'rsa.js' with the script you want to run by default
