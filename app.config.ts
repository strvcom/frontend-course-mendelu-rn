import type { Environment } from '@env'
import type { ExpoConfig, IOS, Android } from '@expo/config-types'
// see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import * as dotenv from 'dotenv'

import type { OtaUpdatePriority } from 'src/utils/useOTAUpdate'

dotenv.config()

declare const process: {
  env: { APP_ENV: Environment }
}
const environment = process.env.APP_ENV

const getEnvironmentInfo = (): {
  name: ExpoConfig['name']
  appIdentifier: IOS['bundleIdentifier'] & Android['package']
  icon: ExpoConfig['icon']
} => {
  const appIdentifier = 'com.expo.template'
  const appName = 'Expo Template'

  if (environment === 'production')
    return {
      name: appName,
      appIdentifier,
      icon: './assets/icon.png',
    }

  return {
    name: `${appName} ${environment.toUpperCase()}`,
    appIdentifier: `${appIdentifier}.${environment}`,
    icon: `./assets/icon-${environment}.png`,
  }
}

const { name, appIdentifier, icon } = getEnvironmentInfo()

// use flipper only in DEV
const plugins: ExpoConfig['plugins'] = environment === 'dev' ? ['expo-community-flipper'] : []

// UPDATE VERSION AND BUILDNUMBER
const buildNumber = 1

// this can be length of splashscreen during which app can download and run OTA update version
const fallbackToCacheTimeout = 0
const otaUpdatePriority: OtaUpdatePriority = 'normal'

const expoConfig: ExpoConfig = {
  name,
  slug: 'template-react-native-expo',
  orientation: 'portrait',
  icon,
  userInterfaceStyle: 'light',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  updates: {
    fallbackToCacheTimeout,
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    buildNumber: String(buildNumber),
    supportsTablet: false,
    bundleIdentifier: appIdentifier,
    config: {
      usesNonExemptEncryption: false,
    },
  },
  android: {
    versionCode: buildNumber,
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#FFFFFF',
    },
    package: appIdentifier,
    // necessary from Android 12
    intentFilters: [
      { action: 'VIEW', data: { scheme: 'mailto' } },
      { action: 'VIEW', data: { scheme: 'sms' } },
      { action: 'VIEW', data: { scheme: 'tel' } },
    ],
  },
  jsEngine: 'hermes',
  plugins,
  extra: {
    fallbackToCacheTimeout,
    otaUpdatePriority,
  },
}

export default expoConfig
