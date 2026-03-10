FROM eclipse-mosquitto:2.1-alpine
ARG MQTT_PASSWORD

RUN touch /mosquitto/passwd
RUN mosquitto_passwd -b /mosquitto/passwd mqtt $MQTT_PASSWORD
