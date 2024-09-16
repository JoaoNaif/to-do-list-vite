import { useState } from "react"
import { TaskType } from "../types/Task"
import styles from './Content.module.css'
import { FaCheck, FaRegTrashAlt } from "react-icons/fa"

interface ContentProps {
    task: TaskType
    handleUpdateTask: (id: number, check: boolean) => void
    handleDeleteTask: (id: number) => void
}

export function Content({ task, handleUpdateTask, handleDeleteTask }: ContentProps) {

    const [isCompleted, setIsCompleted] = useState(task.check)

    function handleCompletedTask() {
        setIsCompleted(!isCompleted)
        handleUpdateTask(task.id, !isCompleted)
    }
    
    function handleDelete(){
        handleDeleteTask(task.id)
    }

    return (
        <div className={styles.container} title={task.content}>
            <span 
                onClick={handleCompletedTask} 
                className={isCompleted ? styles.check : styles.notCheck}
            >
                {isCompleted && <FaCheck className={styles.checkIcon}/>}
            </span>
            <p className={styles.content}>{task.content}</p>
            <FaRegTrashAlt className={styles.trash} onClick={handleDelete} />
        </div>
    )
}