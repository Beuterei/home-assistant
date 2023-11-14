FROM eclipse-mosquitto:2.0
ARG MQTT_PASSWORD

RUN touch /mosquitto/passwd
RUN mosquitto_passwd -b /mosquitto/passwd mqtt $MQTT_PASSWORD
