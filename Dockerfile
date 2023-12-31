FROM node:18.16-alpine as dev

WORKDIR /app

# 이렇게 하면 package-lock.json이 안오므로...
# COPY ./package.json /app
COPY package*.json ./

# npm ci  installs exactly what is listed in package-lock.json
RUN npm ci 
COPY . . 
RUN npm run build



CMD ["npm", "run", "dev"]


FROM nginx:1.25.1
# FROM nginx:1.19.0
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=dev /app/dist /usr/share/nginx/html
EXPOSE 80
