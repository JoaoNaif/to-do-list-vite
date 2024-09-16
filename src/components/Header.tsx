import { BsRocket } from 'react-icons/bs'
import styles from './Header.module.css'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import React, { useState } from 'react'

interface TaskProps {
    handleCreateNewTask: (newTaksContent: string) => void
}

export function Header({ handleCreateNewTask }: TaskProps) {

    const [newTaskContent, setNewTaskContent] = useState('')

    function handleNewTaskChange(event: React.ChangeEvent<HTMLInputElement>){
        event.target.setCustomValidity('')   
        setNewTaskContent(event?.target.value)
    }

    function handleNewTaskInvalid(event: React.ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('Esse campo é obrigatório')
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        handleCreateNewTask(newTaskContent)
        setNewTaskContent('')
    }

    return (
        <header className={styles.header}>
            <article className={styles.logo}>
                <BsRocket className={styles.rocket}/>
                <h1>
                    to
                    <span className={styles.subtitle}>do</span>
                </h1>
            </article>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input 
                    className={styles.input} 
                    type="text" 
                    placeholder='Adicione uma nova tarefa' 
                    value={newTaskContent}
                    onChange={handleNewTaskChange}
                    onInvalid={handleNewTaskInvalid}
                    required
                />
                <button type='submit' className={styles.button}>
                    <span className={styles.create}>Criar</span>
                    <AiOutlinePlusCircle className={styles.plus}/>
                </button>
            </form>
        </header>
    )
}