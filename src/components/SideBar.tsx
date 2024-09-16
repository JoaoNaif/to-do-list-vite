import { TaskType } from '../types/Task'
import styles from './SideBar.module.css'

interface TaskProps {
    tasks: TaskType[]
}

export function SideBar({ tasks }: TaskProps){
    const taskLength = tasks.length
    const taskCompleted = tasks.filter((item) => item.check === true)
    
    return (
        <aside className={styles.container}>
            <section className={styles.task}>
                <p>Tarefas criadas</p>
                <span className={styles.count}>{taskLength}</span>
            </section>
            <section className={styles.completed}>
                <p>Concluídas</p>
                <span className={styles.count}>{taskCompleted.length} de {taskLength}</span>
            </section>
        </aside>
    )
}