import { LuClipboardList } from "react-icons/lu"
import { TaskType } from "../types/Task"
import styles from './Task.module.css'
import { Content } from "./Content"

interface TaskProps {
    tasks: TaskType[]
    setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>
}

export function Task({ tasks, setTasks }: TaskProps) {

    
    function handleUpdateTask(id: number, check: boolean){
        setTasks(tasks.map(task => 
            task.id === id 
              ? { ...task, check } 
              : task
          ));
    }

    function handleDeleteTask(id: number){
        setTasks(tasks.filter(task => 
            task.id !== id
        ))
    }

    return (
        <main className={styles.containerMain}>
            { tasks?.length === 0 ? 
                <section className={styles.containerNull}>
                    <LuClipboardList className={styles.clip}/>
                    <span>Você ainda não terefas cadastradas</span>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                </section> : 
                <section>
                    {tasks.map((task) => {
                        return <Content
                                    key={task.id}
                                    task={task}
                                    handleUpdateTask={handleUpdateTask}
                                    handleDeleteTask={handleDeleteTask}
                                />
                    })}
                </section>
            }
        </main>
    )
}