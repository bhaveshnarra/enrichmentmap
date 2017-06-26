FROM node:8.0.0-alpine

RUN addgroup -S nodejs && adduser -S -g nodejs nodejs
RUN apk add --no-cache bash sed git openssh

RUN cd /tmp && git clone -b master https://github.com/bhaveshsunny/enrichmentmap.git
RUN cd /tmp/enrichmentmap && npm install
RUN npm install -g webpack http-server

RUN mkdir -p /webapps/enrichmentmap
WORKDIR /webapps/enrichmentmap

RUN cp -r /tmp/enrichmentmap/. /webapps/enrichmentmap/

# replace www host to beta in development
RUN npm run build

RUN chown -R nodejs:nodejs /webapps/enrichmentmap

EXPOSE 4000
USER nodejs

CMD ["npm", "start"]
EXPOSE 4000
