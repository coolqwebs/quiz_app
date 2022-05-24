import React from 'react'
import styles from "./Lesson.module.css"

const Lesson = ({videoId}) => {
  return (
      <div className={styles.lesson}>
          <div className="lesson-video">
            <iframe 
                width="560" 
                height="315" 
                src={`https://www.youtube.com/embed/${videoId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Lesson video"
            ></iframe>
          </div>
          <div className="lesson-theory">
              <span>Lessons Desc</span>
          </div>
      </div>
  )
}

export default Lesson