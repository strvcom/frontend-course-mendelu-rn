import Ionicons from '@expo/vector-icons/Ionicons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Routes } from 'src/navigation/routes'
import type { BottomStackParamList } from 'src/navigation/types'
import { Dashboard } from 'src/screens/Dashboard/Dashboard'
import { Profile } from 'src/screens/Profile/Profile'

const Tab = createBottomTabNavigator<BottomStackParamList>()

export const BottomStack = () => (
  <Tab.Navigator initialRouteName={Routes.DASHBOARD}>
    <Tab.Screen
      name={Routes.DASHBOARD}
      component={Dashboard}
      options={{
        tabBarIcon: ({ color }) => <Ionicons name="home" color={color} />,
      }}
    />
    <Tab.Screen
      name={Routes.PROFILE}
      component={Profile}
      options={{
        tabBarIcon: ({ color }) => <Ionicons name="man" color={color} />,
      }}
    />
  </Tab.Navigator>
)
