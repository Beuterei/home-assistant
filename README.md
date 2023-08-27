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
    <a href="https://github.com/Beuterei/home-assistant/issues">Report Bug</a>
    ·
    <a href="https://github.com/Beuterei/home-assistant/issues">Request Feature</a>
    ·
  </p>
</p>

<!-- ABOUT THE PROJECT -->

## About The Project

This is my personal home assistant setup so it probably won't have much use for others. However, it may help someone.

## System requirements

- BlueZ 5.64 or later installed

- Bluethooth dongle

## Setup from scratch

1. Follow [Customization](#customization)

2. Configure home assistant

3. Login to cloud

4. Enable advanced mode under profile settings

5. Configure MQTT with:

   | Variable   | Value                                                                  |
   | ---------- | ---------------------------------------------------------------------- |
   | `Broker`   | `eclipse-mosquitto`                                                    |
   | `Port`     | `1883`                                                                 |
   | `Username` | `mqtt`                                                                 |
   | `Password` | Use value of `MOSQUITTO_PASSWORD` from [Customization](#customization) |

6. Open Zigbee2mqtt dashboard on port `8124` and rejoin all devices listed in [configuration.yaml](zigbee2mqt/config/configuration.yaml) (Host differs from the Home assistant instance)

- For EnOcean switches press the button corisponding to the zigbee channel (default should be upper right) for 10 seconds.

7. Add all `ESP Home` intregrations listed [here](https://github.com/Beuterei/esp-home#projects). The hostname is the project name

8. Add all desired autodiscovered integrations:

- Google Cast

- Mobile App

  1. Go to Mobile App setting

  2. Add Homenetwork SSID

  3. Setup URLs

- OctoPrint

- Sonos

- CO2 Signal

  | Variable       | Value                             |
  | -------------- | --------------------------------- |
  | `Access Token` | [See](https://www.co2signal.com/) |
  | `...`          | Defaults                          |

- UniFi Networks

  | Variable                                   | Value    |
  | ------------------------------------------ | -------- |
  | `Track network clients`                    | `true`   |
  | `Include wired network clients`            | `false`  |
  | `Track network devices (Ubiquiti devices)` | `false`  |
  | `...`                                      | Defaults |

9. Add all devices to areas

10. Restart that `homeassistant` configurations take effect

11. Configure persons to your liking:

- Profile picture

- Device tracking

  - `device_tracker.oneplus_a5000`

  - `device_tracker.oneplus5`

12. delete unused areas

13. Setup [Google Assistant](https://www.nabucasa.com/config/google_assistant/)

## Customization

1. Create a `.env` file

```sh
touch .env
```

2. Overwrite variables as you like (format: `{variable name}={variable value}`)

| Variable                 | Description                                                                                                                                                | Default value       | Required |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | -------- |
| `POSTGRES_USER`          | Postgres user                                                                                                                                              | `homeAssistantCore` | false    |
| `POSTGRES_PASSWORD`      | Postgres password                                                                                                                                          | none                | true     |
| `POSTGRES_DB`            | Postgres DB name                                                                                                                                           | `homeAssistantCore` | false    |
| `HOME_ASSISTANT_IP`      | Ip of the home assistant instance matching to `SUBNET`                                                                                                     | none                | true     |
| `MDNS_REFLECTOR_IP`      | Ip of the mDNS reflector matching to `SUBNET`                                                                                                              | none                | true     |
| `LAN_NETWORK_DEVICE`     | Network device to use for macvlan driver                                                                                                                   | none                | true     |
| `SUBNET`                 | Subnet for host network                                                                                                                                    | none                | true     |
| `ZIGBEE_KEY`             | See [Change Zigbee network encryption key](https://www.zigbee2mqtt.io/advanced/zigbee/03_secure_network.html#change-zigbee-network-encryption-key)         | none                | true     |
| `ZIGBEE2MQTT_AUTH_TOKEN` | Auth token for the Zigbee2MQTT frontend. See [advanced-configuration](https://www.zigbee2mqtt.io/guide/configuration/frontend.html#advanced-configuration) | none                | true     |
| `ZIGBEE_USB_DEVICE`      | USB Zigbee dongle                                                                                                                                          | `/dev/ttyACM0`      | false    |
| `LATITUDE`               | [See](https://www.home-assistant.io/docs/configuration/basic/)                                                                                             | none                | true     |
| `LONGITUDE`              | [See](https://www.home-assistant.io/docs/configuration/basic/)                                                                                             | none                | true     |
| `MOSQUITTO_PASSWORD`     | MQTT broker password                                                                                                                                       | none                | true     |

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/Beuterei/home-assistant.svg?style=flat-square
[contributors-url]: https://github.com/Beuterei/home-assistant/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Beuterei/home-assistant.svg?style=flat-square
[forks-url]: https://github.com/Beuterei/home-assistant/network/members
[stars-shield]: https://img.shields.io/github/stars/Beuterei/home-assistant.svg?style=flat-square
[stars-url]: https://github.com/Beuterei/home-assistant/stargazers
[issues-shield]: https://img.shields.io/github/issues/Beuterei/home-assistant.svg?style=flat-square
[issues-url]: https://github.com/Beuterei/home-assistant/issues
[license-shield]: https://img.shields.io/github/license/Beuterei/home-assistant.svg?style=flat-square
