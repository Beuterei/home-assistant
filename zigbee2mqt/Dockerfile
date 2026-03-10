FROM koenkk/zigbee2mqtt:2.9

COPY ./custom-docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/custom-docker-entrypoint.sh

ENTRYPOINT ["custom-docker-entrypoint.sh"]

CMD [ "/sbin/tini", "--", "node", "index.js"]