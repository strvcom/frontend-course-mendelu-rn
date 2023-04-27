import { useCallback, useState } from 'react'
import { ScrollView } from 'react-native'

import { TodoListItem } from './components/TodoListItem/TodoListItem'
import { todos } from './presets'
import { styles } from './styles'

export const Dashboard = () => {
  const [items, setItems] = useState(todos)

  const onDeleteHandler = useCallback((id: number) => {
    setItems((prevItems) => prevItems.filter((prevItem) => prevItem.id !== id))
  }, [])

  return (
    <ScrollView style={styles.scrollView}>
      {items.map(({ id, title }) => (
        <TodoListItem key={id} title={title} onDelete={() => onDeleteHandler(id)} />
      ))}
    </ScrollView>
  )
}
