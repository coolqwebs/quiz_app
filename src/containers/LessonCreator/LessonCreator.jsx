import React from "react";
import Button from "../../Components/UI/Button/Button";
import styles from "./LessonCreator.module.css";

/*
 *createLinkControl: to parse link and get the videi id to embed it
 *
 *import Input component w/ Auxiliary
 *
 *
 *
 *
 *
 *
 */

const LessonCreator = () => {
  const createLessonHandler = () => {};
  return (
    <div className={styles.LessonCreator}>
      <div className={styles.wrapper}>
        <h1>Create a Lesson</h1>
        <form action="">
          <label htmlFor="video-link">Video Link</label>
          <input
            name="Video Link"
            placeholder="Enter video link"
            id={styles.videoLink}
            cols="30"
            rows="5"
          ></input>
          <label htmlFor="lesson-desc">Short Description of Lesson</label>
          <input
            name="Lesson Description"
            placeholder="Enter lesson description"
            id={styles.lessonDesc}
            cols="30"
            rows="15"
          ></input>
          <input type="file" name="Lesson File" id="lesson-file" />
          <Button type="success" onClick={createLessonHandler}>
            Add Lesson
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LessonCreator;
