/* eslint-disable react/prop-types */
import TodosContainer from '../TodosContainer/TodosContainer'
import sun from '../../assets/images/icon-sun.svg'
import moon from '../../assets/images/icon-moon.svg'
import {useDispatch, useSelector} from 'react-redux'
import {changeThemeColor} from '../../redux/reducers/todo.reducer'

import styles from './todo_header.module.css'

const TodoHeader = () => {
  const theme = useSelector((state) => state.todo.themeColor)
  const dispatch = useDispatch()
  const change = () => {
    theme === 'dark'
      ? dispatch(changeThemeColor('light'))
      : dispatch(changeThemeColor('dark'))
  }
  return (
    <header>
      <div className={styles.container}>
        <h1 className={styles.title}>TODO</h1>
        <img
          onClick={() => change()}
          src={theme === 'dark' ? sun : moon}
          alt='theme icon'
        />
      </div>
      <TodosContainer />
    </header>
  )
}

export default TodoHeader
