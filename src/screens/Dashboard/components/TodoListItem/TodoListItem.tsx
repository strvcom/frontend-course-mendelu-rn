import Feather from '@expo/vector-icons/Feather'
import type { FC } from 'react'
import { useCallback, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { styles } from './styles'

import { colors } from '../../../../styles/colors'

export interface ITodoListItem {
  title: string
  onDelete: () => void
}

export const TodoListItem: FC<ITodoListItem> = ({ title, onDelete }) => {
  const [checked, setChecked] = useState(false)
  const statusIconName = checked ? 'check-circle' : 'circle'
  const statusIconColor = checked ? 'green' : 'grey'

  const onPressHandler = useCallback(() => {
    setChecked((prevChecked) => !prevChecked)
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <TouchableOpacity onPress={onPressHandler}>
          <Feather name={statusIconName} color={statusIconColor} size={24} />
        </TouchableOpacity>
        <Text style={styles.text}>{title}</Text>
      </View>
      <TouchableOpacity onPress={onDelete}>
        <Feather name="archive" color={colors.dangerous} size={24} />
      </TouchableOpacity>
    </View>
  )
}
