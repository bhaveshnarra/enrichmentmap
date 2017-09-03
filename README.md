# enrichmentmap

# prerequisites

* NODEJS
* npm
* docker

## Install(Only if you want a local version instead of a docker container)

```
git clone https://github.com/bhaveshsunny/enrichmentmap/
npm install
npm run watch
```

## To Load the Enrichmentmap App (Docker container)

```
docker pull bhaveshsunny60/emp:latest
docker run -d bhaveshsunny60/emp:latest
```
## To load OpenCPU server

```
docker pull cannin/opencpu:enrichmentmap
docker rm -f oc; docker run --name oc -d -p 40:80 -p 8004:8004 cannin/opencpu:enrichmentmap
```

access the app at http://127.0.0.1:8080/

## TEST

input : ["MDM2"]

![screenshot from 2017-08-30 15-44-00](https://user-images.githubusercontent.com/16358797/29868181-9b8f49ec-8d9b-11e7-84d3-d875106dfc9d.png)

## NOTE

In Case of Cluster genes and Enrichment Plot not working click submit again.

