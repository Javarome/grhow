# Grhow.com

## Setup
- Install Google Cloud CLI.  
- Make sure to be authenticated: `gcloud auth login`
- Configure Docker to delegate to gcloud for credentials: `gcloud auth configure-docker`

## Build
Build the docker image:
```
docker build -t eu.gcr.io/grhow-354219/grhow-server .
```
Push the image:
```
docker push eu.gcr.io/grhow-354219/grhow-server
```
## Deploy

```
gcloud run deploy --image eu.gcr.io/grhow-354219/grhow-server
```
