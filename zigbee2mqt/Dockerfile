FROM koenkk/zigbee2mqtt:2.1

# Copy to prevent zigbee2mqtt to leak my passwords... Gets copied by the entrypoint script to override it in the volume
COPY ./config/configuration.yaml /tmp/config/

COPY ./custom-docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/custom-docker-entrypoint.sh

ENTRYPOINT ["custom-docker-entrypoint.sh"]

CMD [ "/sbin/tini", "--", "node", "index.js"]