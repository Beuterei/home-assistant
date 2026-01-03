FROM homeassistant/home-assistant:2025.8

COPY entrypoint.sh hpm.json /

RUN curl -L https://github.com/Beuterei/hacs-package-manager/releases/latest/download/hpm-linux-x64-musl-modern -o /usr/local/bin/hpm && chmod +x /usr/local/bin/hpm

RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]