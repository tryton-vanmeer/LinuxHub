#!/usr/bin/sh

cd /app/api || exit
gunicorn -k uvicorn.workers.UvicornWorker -b 0.0.0.0:8080 main:app