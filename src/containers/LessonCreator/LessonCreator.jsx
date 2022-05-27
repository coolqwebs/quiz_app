import React, { useState } from "react";
import Button from "../../Components/UI/Button/Button";
import Input from "../../Components/UI/Input/Input";
import styles from "./LessonCreator.module.css";
import {
  createControl,
  validate,
  validateForm,
} from "../../Form/formFramework";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";

/*
 *createLinkControl: to parse link and get the videi id to embed item
 *
 * add redux functionality to the control
 * add some server logic
 *
 *
 *
 */

// const linkControl = (link) => {};

const createLessonControl = () => {
  return {
    title: createControl(
      {
        label: "Enter lesson title",
        errorMessage: "Title cannot be empty",
      },
      { required: true }
    ),
    video: createControl(
      {
        label: "Enter Video Link",
        errorMessage: "You should enter video link",
      },
      { required: true }
    ),
    description: createControl(
      {
        label: "Enter Lesson Description",
        errorMessage: "Description cannot be empty",
      },
      { required: true }
    ),
  };
};

const LessonCreator = () => {
  const [lesson, setLesson] = useState(createLessonControl());
  const [isFormValid, setIsFormValid] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const createLessonHandler = (e) => {
    e.preventDefault();
    setIsFormValid(false);
    setLesson(createLessonControl());
  };

  const changeHandler = (value, controlName) => {
    const lessonControls = { ...lesson };
    const control = { ...lessonControls[controlName] };

    control.touched = true;
    control.value = value;
    control.valid = validate(control.value, control.validation);

    lesson[controlName] = control;
    setLesson(lesson);
    setIsFormValid(validateForm(lesson));
  };

  const renderControls = () => {
    return Object.keys(lesson).map((controlName, index) => {
      const control = lesson[controlName];

      return (
        <Auxiliary key={controlName + index}>
          <Input
            type={control.type || "text"}
            label={control.label}
            value={control.value}
            valid={control.valid}
            shouldValidate={!!control.validation}
            touched={control.touched}
            errorMessage={control.errorMessage}
            onChange={(event) => changeHandler(event.target.value, controlName)}
          />
          {index === 0 ? <hr /> : null}
        </Auxiliary>
      );
    });
  };

  return (
    <div className={styles.LessonCreator}>
      <div className={styles.wrapper}>
        <h1>Create a Lesson</h1>
        <form onSubmit={submitHandler}>
          {renderControls}
          {/* <Input
            label="Lesson Title"
            value={lesson.title.value}
            valid={lesson.title.value}
            shouldValidate={!!lesson.title.validation}
            touched={lesson.title.touched}
            errorMessage={lesson.title.errorMessage}
            onChange={(event) => changeHandler(event.target.value)}
          />
          <Input
            label="Video Link"
            value={videoLink}
            valid={lesson.video.value}
            shouldValidate={!!lesson.video.validation}
            touched={lesson.video.touched}
            errorMessage={lesson.video.errorMessage}
            onChange={(event) => setVideoLink(event.target.value)}
          />
          <Input
            label="Lesson Desc"
            value={lessonDesc}
            valid={lesson.description.value}
            shouldValidate={!!lesson.description.validation}
            touched={lesson.description.touched}
            errorMessage={lesson.description.errorMessage}
            onChange={(event) => setLessonDesc(event.target.value)}
          /> */}
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
