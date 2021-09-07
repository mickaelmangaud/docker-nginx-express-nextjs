FROM node:latest
RUN mkdir -p /app
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
CMD ["npm", "run", "dev"]