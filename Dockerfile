FROM node:lts-alpine AS base
WORKDIR /contagem

FROM base AS builder
WORKDIR /usr/src/contagem
COPY package*.json ./
RUN npm ci
COPY tsconfig*.json ./
COPY src src
RUN npm run build
RUN npm prune --production

FROM base AS release
ENV NODE_ENV=production
COPY --from=builder /usr/src/contagem/node_modules ./node_modules
COPY --from=builder /usr/src/contagem/dist ./dist
CMD ["node","dist/server.js"]
