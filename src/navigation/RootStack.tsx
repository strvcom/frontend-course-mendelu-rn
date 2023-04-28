import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { BottomStack } from 'src/navigation/BottomStack'
import { Routes } from 'src/navigation/routes'
import type { RootStackParamList } from 'src/navigation/types'

const Root = createNativeStackNavigator<RootStackParamList>()

export const RootStack = () => (
  <Root.Navigator>
    <Root.Screen
      name={Routes.BOTTOM_STACK}
      component={BottomStack}
      options={{ headerShown: false }}
    />
  </Root.Navigator>
)
