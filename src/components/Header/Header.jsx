import { useState } from 'react'
import styles from './header.module.css'

function Header() {

    const [inputText , setInputText]= useState('')

    function handleSubmit(event){
        event.preventDefault()

        console.log(inputText)
    }

function onChangeText(event){
    
    setInputText(event.target.value)

}


  return (
    <div className={styles.container}>
        <h1 className={styles.header}>All Tasks</h1>
        <form onSubmit={handleSubmit}>
        <input className={styles.inputTask} 
        type="text"
         placeholder='Add a new task'
         value={inputText}
         onChange={onChangeText} />

        </form>
    </div>
  )
}

export default Header