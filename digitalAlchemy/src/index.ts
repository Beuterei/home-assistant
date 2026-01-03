import { LIB_AUTOMATION } from '@digital-alchemy/automation'
import { CreateApplication } from '@digital-alchemy/core'
import { LIB_HASS } from '@digital-alchemy/hass'
import { LIB_SYNAPSE } from '@digital-alchemy/synapse'

import { TServiceParams } from '@digital-alchemy/core'

export function Office({ logger, context, synapse }: TServiceParams) {
    synapse.button({
        // required variables
        context,
        name: "Press me",
        // doing stuff is optional
        press: () => logger.info("That tickles!"),
      });
}

const HOME_AUTOMATION = CreateApplication({
  name: 'homeAutomation',

  libraries: [LIB_HASS, LIB_SYNAPSE, LIB_AUTOMATION],

  services: {
    office: Office,
  },
})

// Do some magic to make all the types work
declare module '@digital-alchemy/core' {
  export interface LoadedModules {
    homeAutomation: typeof HOME_AUTOMATION
  }
}

// bootstrap application
setImmediate(
  async () =>
    await HOME_AUTOMATION.bootstrap({
      configuration: {
        boilerplate: { LOG_LEVEL: 'info' },
      },
    }),
)
