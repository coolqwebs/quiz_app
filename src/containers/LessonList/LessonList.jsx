import React from 'react'
import styles from "./LessonList.module.css"
import Lesson from '../Lesson/Lesson'

const LessonList = () => {
  return (
      <div className={styles.lessonList}>
          <Lesson/>
      </div>
  )
}

export default LessonList