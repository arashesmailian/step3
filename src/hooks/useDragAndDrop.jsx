import {useDispatch} from 'react-redux'
import {dragAndDropRefreshState} from '@/redux/reducers/todo.reducer'

const useDragAndDrop = (todos, setTodos, draggingElement, dragOverElement) => {
  const dispatch = useDispatch()

  const dragStart = (index) => {
    draggingElement.current = index
  }

  const dragEnter = (index) => {
    dragOverElement.current = index
  }
  const dropingDraggedItem = () => {
    const reArrangedTodos = [...todos]
    const grabedItem = reArrangedTodos[draggingElement.current]
    reArrangedTodos.splice(draggingElement.current, 1)
    reArrangedTodos.splice(dragOverElement.current, 0, grabedItem)
    setTodos(reArrangedTodos)
    dispatch(dragAndDropRefreshState(reArrangedTodos))
    draggingElement.current = null
    dragOverElement.current = null
  }

  return {dragStart, dragEnter, dropingDraggedItem}
}

export default useDragAndDrop
