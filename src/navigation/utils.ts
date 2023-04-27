import { CommonActions, createNavigationContainerRef } from '@react-navigation/native'

import type { ResetState, RootStackParamList } from 'src/navigation/types'

export const navigationRef = createNavigationContainerRef()

// if screen has extra parameter object, require it, else keep it optional
// https://stackoverflow.com/a/69410398/11447104
export const navigationReset = <TRoute extends keyof RootStackParamList>(
  ...args: RootStackParamList[TRoute] extends object
    ? [route: TRoute, params: RootStackParamList[TRoute]]
    : [route: TRoute]
) => {
  const [route, params] = args

  navigationRef.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{ name: route, params }],
    }),
  )
}

// use to have a screen to go back to
export const navigationResetState = (resetState: ResetState) =>
  navigationRef.dispatch(CommonActions.reset(resetState))
