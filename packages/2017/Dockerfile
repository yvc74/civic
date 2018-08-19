FROM node:8.11-stretch

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN yarn --production=true

# Bundle app source
COPY server server
COPY dist dist

# Expose the express server port
EXPOSE 3000

# Always use production env
ENV NODE_ENV production
CMD [ "node", "server" ]
