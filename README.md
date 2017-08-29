# enrichmentmap

To Load the Enrichmentmap App
docker pull bhaveshsunny60/emp
docker run bhaveshsunny60/emp

To load OpenCPU server

docker pull cannin/opencpu:enrichmentmap
docker rm -f oc; docker run --name oc -t -p 40:80 -p 8004:8004 cannin/opencpu:opencpu-2.0

access the app at 127.0.0.1
