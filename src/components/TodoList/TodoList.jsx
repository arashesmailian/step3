/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import {
  removeTodo,
  completeTodo,
  dragAndDropRefreshState,
} from '../../redux/reducers/todo.reducer'
import DeleteIcon from '../../assets/images/icon-cross.svg'
import {useRef, useState, useEffect} from 'react'
import styles from './todo_list.module.css'

const TodoList = () => {
  const dispatch = useDispatch()
  const conditionList = useRef()
  const draggedItem = useRef()
  const dragOverItem = useRef()
  const todos = useSelector((state) => state.todo.todoList)
  const [filterTodos, setFilterTodos] = useState('')
  const [condition, setCondition] = useState('All')

  // *********drag and drop functionality*********
  const dragStart = (e, position) => {
    draggedItem.current = position
  }
  const dragEnter = (e, position) => {
    dragOverItem.current = position
  }
  const dropDraggedItem = () => {
    const reArrangedList = [...filterTodos]
    const draggingITem = reArrangedList[draggedItem.current]
    reArrangedList.splice(draggedItem.current, 1)
    reArrangedList.splice(dragOverItem.current, 0, draggingITem)
    setFilterTodos(reArrangedList)
    dispatch(dragAndDropRefreshState(reArrangedList))
    draggedItem.current = null
    dragOverItem.current = null
  }
  //*********

  const deleteTaskHandler = (task) => {
    dispatch(removeTodo(task))
  }
  const checkTriggerHandler = (todo) => {
    dispatch(completeTodo(todo))
  }

  const conditionsClickHandler = (e) => {
    const allConsditions = conditionList.current.children
    for (let i of allConsditions) i.setAttribute('status', 'false')
    e.target.setAttribute('status', 'true')
    setCondition(e.target.textContent)
  }
  useEffect(() => {
    switch (condition) {
      case 'All':
        return setFilterTodos(todos)
      case 'Active':
        return setFilterTodos(todos.filter((todo) => todo.completed == false))
      case 'Completed':
        return setFilterTodos(todos.filter((todo) => todo.completed == true))
    }
  }, [todos, condition])

  return (
    <div className={styles.todo_list}>
      <ul>
        {filterTodos
          ? filterTodos.map((todo, index) => {
              return (
                <div
                  key={todo.id}
                  draggable={true}
                  onDragStart={(e) => dragStart(e, index)}
                  onDragEnter={(e) => dragEnter(e, index)}
                  onDragEnd={dropDraggedItem}
                >
                  <li
                    className={styles.todo_item}
                    completed={String(todo.completed)}
                  >
                    <p onClick={() => checkTriggerHandler(todo)}>{todo.txt}</p>
                    <div
                      className={styles.delete_icon_container}
                      onClick={() => deleteTaskHandler(todo)}
                    >
                      <img
                        className={styles.delete_icon}
                        src={DeleteIcon}
                        alt='delete icon'
                      />
                    </div>
                  </li>
                </div>
              )
            })
          : ''}
      </ul>
      <div className={styles.footer}>
        <p>
          {todos.filter((todo) => todo.completed == false).length} items left
        </p>
        <div className={styles.footer_conditions} ref={conditionList}>
          <p status='true' onClick={(e) => conditionsClickHandler(e)}>
            All
          </p>
          <p status='false' onClick={(e) => conditionsClickHandler(e)}>
            Active
          </p>
          <p status='false' onClick={(e) => conditionsClickHandler(e)}>
            Completed
          </p>
        </div>
        <p onClick={() => setCondition('Active')}>Clear completed</p>
      </div>
      <div className={styles.drag_and_drop_description}>
        Drag and drop to reorder list
      </div>
    </div>
  )
}

export default TodoList
