/* eslint-disable react/no-unknown-property */
import TodoHeader from './components/TodoHeader/TodoHeader'
import {useSelector} from 'react-redux'
import styles from './app.module.css'

function App() {
  const theme = useSelector((state) => state.todo.themeColor)
  document.querySelector('html').style.backgroundColor =
    theme === 'light' ? 'hsl(0, 0%, 98%)' : 'hsl(235, 21%, 11%)'
  return (
    <>
      <div className={styles.App} theme={theme}>
        <TodoHeader />
      </div>
    </>
  )
}

export default App
