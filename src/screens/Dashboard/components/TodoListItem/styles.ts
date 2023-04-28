import { StyleSheet } from 'react-native'

import { ms } from '../../../../utils/scale'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 12,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: ms(22),
    marginLeft: 6,
  },
})
