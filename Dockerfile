# Stage 1: Build Vite app
FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

ENV NODE_ENV=production
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:1.25-alpine

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]