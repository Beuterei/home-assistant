#!/bin/sh

set -e
current_dir=$(pwd)

cd /
hpm ci --haConfigPath="/config"

cd $current_dir

exec /init "$@"