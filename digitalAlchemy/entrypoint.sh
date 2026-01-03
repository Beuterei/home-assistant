#!/bin/sh

set -e

# Fail if HASS_BASE_URL or HASS_TOKEN is not provided
if [ -z "$HASS_BASE_URL" ] || [ -z "$HASS_TOKEN" ]; then
    echo "Error: HASS_BASE_URL and HASS_TOKEN must be provided"
    exit 1
fi

# Function to check if Home Assistant is reachable
check_hass_connection() {
    # Extract host and port from BASE_URL, removing http:// or https://
    HOST_PORT=$(echo "$HASS_BASE_URL" | sed 's|http[s]*://||' | sed 's|/.*||')
    HOST=$(echo "$HOST_PORT" | cut -d':' -f1)
    PORT=$(echo "$HOST_PORT" | cut -d':' -f2)
    
    echo "Checking connection to Home Assistant at $HOST:$PORT..."
    nc -z "$HOST" "$PORT" 2>/dev/null
    return $?
}

# Wait for Home Assistant to be ready with retry logic
echo "Waiting for Home Assistant to be ready..."
RETRY_COUNT=0
MAX_RETRIES=10
SLEEP_DURATION=10

while [ $RETRY_COUNT -lt $MAX_RETRIES ]; do
    if check_hass_connection; then
        echo "Home Assistant is reachable!"
        break
    else
        RETRY_COUNT=$((RETRY_COUNT + 1))
        echo "Attempt $RETRY_COUNT/$MAX_RETRIES: Home Assistant not ready, waiting ${SLEEP_DURATION}s..."
        if [ $RETRY_COUNT -lt $MAX_RETRIES ]; then
            sleep $SLEEP_DURATION
        fi
    fi
done

if [ $RETRY_COUNT -eq $MAX_RETRIES ]; then
    echo "ERROR: Home Assistant did not become available after $MAX_RETRIES attempts"
    exit 1
fi

# Start the main application
echo "Starting the application..."

# Run command provided as argument
exec "$@"