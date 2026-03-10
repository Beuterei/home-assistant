#!/bin/sh
set -e

cat > /app/data/secret.yaml <<EOF
network_key: ${ZIGBEE_KEY}
mqtt_password: ${MQTT_PASSWORD}
frontend_auth_token: ${ZIGBEE2MQTT_AUTH_TOKEN}
EOF

exec docker-entrypoint.sh "$@"