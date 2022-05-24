import React from 'react'
import Button from '../../Components/UI/Button/Button'
import styles from "./LessonCreator.module.css"

const LessonCreator = () => {

  const createLessonHandler=()=>{}
  return (
    <div className={styles.LessonCreator}>
      <h1>Create a Lesson</h1>
      <form action="">
        <textarea name="Video Link" id="video-link" cols="30" rows="5"></textarea>
        <textarea name="Lesson Description" id="lesson-desc" cols="30" rows="15"></textarea>
        <input type="file" name="Lesson File" id="lesson-file" />
        <Button 
          type="success"
          onClick={createLessonHandler}
        >
          Add Lesson
        </Button>
      </form>
    </div>
  )
}

export default LessonCreator