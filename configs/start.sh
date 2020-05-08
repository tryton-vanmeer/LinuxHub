#!/usr/bin/sh

cd /app/api || exit
# gunicorn -k uvicorn.workers.UvicornWorker -b 0.0.0.0:8080 main:app
gunicorn -D -k uvicorn.workers.UvicornWorker -b unix:/run/api.sock main:app

nginx -g "daemon off;"