FROM node:18.12-alpine
WORKDIR /frontend
COPY . .
RUN npm ci
RUN ls
RUN npm run build