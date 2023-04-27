import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { BottomStack } from 'src/navigation/BottomStack'
import { Routes } from 'src/navigation/routes'
import type { RootStackParamList } from 'src/navigation/types'
import { Login } from 'src/screens/Login'
import { NestedScreen } from 'src/screens/NestedScreen'
import { useRootStore } from 'src/store/useRootStore'

const Root = createNativeStackNavigator<RootStackParamList>()

export const RootStack = () => {
  const { accessToken } = useRootStore()
  const isLoggedIn = Boolean(accessToken)

  return (
    <Root.Navigator>
      {isLoggedIn ? (
        <>
          <Root.Screen
            name={Routes.BOTTOM_STACK}
            component={BottomStack}
            options={{ headerShown: false }}
          />
          <Root.Screen name={Routes.NESTED_SCREEN} component={NestedScreen} />
        </>
      ) : (
        <Root.Screen name={Routes.LOGIN} component={Login} />
      )}
    </Root.Navigator>
  )
}
