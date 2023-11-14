#!/bin/sh
set -e

cp -r /tmp/config/configuration.yaml /app/data/configuration.yaml

exec docker-entrypoint.sh "$@"