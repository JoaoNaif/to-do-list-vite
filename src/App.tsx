import { Header } from './components/Header'
import './global.css' 
import styles from './App.module.css'
import { SideBar } from './components/SideBar'
import { TaskType } from './types/Task'
import { Task } from './components/Task'
import { useState } from 'react'

function App() {

  const [tasks, setTasks] = useState<TaskType[]>([])

  function handleCreateNewTask(newTaksContent: string) {
    event?.preventDefault()

    const newTask = {
      id: tasks.length + 1,
      content: newTaksContent,
      check: false 
    }

    setTasks([...tasks, newTask])
  }

  return (
    <div>
      <Header 
        handleCreateNewTask={handleCreateNewTask}
      />
      <div className={styles.wrapper}>
        <SideBar tasks={tasks} />
        <Task tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  )
}

export default App
