FROM eclipse-mosquitto:2.0
ARG MOSQUITTO_PASSWORD

RUN touch /mosquitto/passwd
RUN mosquitto_passwd -b /mosquitto/passwd mqtt $MOSQUITTO_PASSWORD
