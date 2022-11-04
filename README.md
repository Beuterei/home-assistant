[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

<!-- PROJECT HEADER -->
<br />
<p align="center">
  <h3 align="center">Home Assistant</h3>

  <p align="center">
    My home assistant setup.
    <br />
    <br />
    ·
    <a href="https://github.com/beuluis/home-assistant/issues">Report Bug</a>
    ·
    <a href="https://github.com/beuluis/home-assistant/issues">Request Feature</a>
    ·
  </p>
</p>

<!-- ABOUT THE PROJECT -->

## About The Project

This is my personal home assistant setup so it probably won't have much use for others. However, it may help someone.

## Setup from scratch

1. Follow [Customization](#customization)

2. Create a secret file at `homeAssistantCore/secrets.yaml` add all secrets from [Secrets](#secrets) according to [Storing secrets](https://www.home-assistant.io/docs/configuration/secrets/)

3. Configure home assistant

4. Configure MQTT with:

   | Variable | Value               |
   | -------- | ------------------- |
   | `Broker` | `eclipse-mosquitto` |
   | `Port`   | `1883`              |

5. Open Zigbee2mqtt dashboard on port `8124` and rejoin all devices listed in [configuration.yaml](zigbee2mqt/config/configuration.yaml)

6. Add all `ESP Home` intregrations listed [here](https://github.com/beuluis/esp-home#projects). The hostname is the project name

7. Add all desired autodiscovered integrations

8. Add all devices to areas

9. Restart that `homeassistant` configurations take effect

## Customization

1. Create a `.env` file

```sh
touch .env
```

2. Overwrite variables as you like (format: `{variable name}={variable value}`)

| Variable             | Description                                            | Default value       | Required |
| -------------------- | ------------------------------------------------------ | ------------------- | -------- |
| `POSTGRES_USER`      | Postgres user                                          | `homeAssistantCore` | false    |
| `POSTGRES_PASSWORD`  | Postgres password                                      | none                | true     |
| `POSTGRES_DB`        | Postgres DB name                                       | `homeAssistantCore` | false    |
| `ZIGBEE_USB_DEVICE`  | USB Zigbee dongle                                      | `/dev/ttyACM0`      | false    |
| `HOME_ASSISTANT_IP`  | Ip of the home assistant instance matching to `SUBNET` | none                | true     |
| `MDNS_REFLECTOR_IP`  | Ip of the mDNS reflector matching to `SUBNET`          | none                | true     |
| `LAN_NETWORK_DEVICE` | Network device to use for macvlan driver               | none                | true     |
| `SUBNET`             | Subnet for host network                                | none                | true     |

## Secrets

To configure secrets

| Name        | Description                                                    |
| ----------- | -------------------------------------------------------------- |
| `latitude`  | [See](https://www.home-assistant.io/docs/configuration/basic/) |
| `longitude` | [See](https://www.home-assistant.io/docs/configuration/basic/) |

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- CONTACT -->

## Contact

Luis Beu - me@luisbeu.de

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/beuluis/home-assistant.svg?style=flat-square
[contributors-url]: https://github.com/beuluis/home-assistant/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/beuluis/home-assistant.svg?style=flat-square
[forks-url]: https://github.com/beuluis/home-assistant/network/members
[stars-shield]: https://img.shields.io/github/stars/beuluis/home-assistant.svg?style=flat-square
[stars-url]: https://github.com/beuluis/home-assistant/stargazers
[issues-shield]: https://img.shields.io/github/issues/beuluis/home-assistant.svg?style=flat-square
[issues-url]: https://github.com/beuluis/home-assistant/issues
[license-shield]: https://img.shields.io/github/license/beuluis/home-assistant.svg?style=flat-square