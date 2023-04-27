import zustandFlipper from 'react-native-flipper-zustand'
import create from 'zustand'
import { persist } from 'zustand/middleware'

import { authSlice } from './authSlice'
import type { IStore } from './types'

export const useRootStore = create<IStore>()(
  zustandFlipper(
    persist(
      // you can create more slices for other app features
      (...args) => ({ ...authSlice(...args) }),
      {
        name: 'app-storage',
        // allow only accessToken to be persisted on the device
        partialize: (state: IStore) => ({ accessToken: state.accessToken }),
      },
    ),
  ),
)
