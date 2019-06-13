# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node:10.16.0-alpine as build-stage

WORKDIR /app

COPY package.json yarn.lock /app/
COPY nginx/nginx.conf /app/

RUN yarn install

COPY ./ /app/

# Read more https://vsupalov.com/docker-arg-env-variable-guide/
ENV NODE_ENV production

RUN yarn run build

# Read more on how to use nginx - https://blog.docker.com/2015/04/tips-for-deploying-nginx-official-image-with-docker/
FROM nginx:1.15

# Copy Dist Files from Prev Stage to Nginx Server Directory
COPY --from=build-stage /app/dist/ /usr/share/nginx/html

# Copy Nginx Conf File
COPY --from=build-stage /app/nginx.conf /etc/nginx/conf.d/default.conf

# root directory for the container is/usr/share/nginx/html and
# the configuration files are in /etc/nginx.
# If the content on the Docker host is in the local directory /var/www and
# the configuration files are in /var/nginx/conf,
# we run the command:
# docker run --name mynginx2 -v /var/www:/usr/share/nginx/html:ro -v /var/nginx/conf:/etc/nginx:ro -d nginx
