import React, { useEffect } from "react";
import styles from "./LessonList.module.css";
import Loader from "../../Components/UI/Loader/Loader";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { fetchLessons } from "../../store/actions/lesson";

const LessonList = (props) => {
  useEffect(() => {
    props.fetchLessons();
  });
  const renderLessons = () => {
    return props.lessons.map((lesson) => {
      return (
        <li key={lesson.id}>
          <NavLink to={"/lesson/" + lesson.id}> {lesson.name} </NavLink>
        </li>
      );
    });
  };

  return (
    <div className={styles.LessonList}>
      <div>
        <h1>Список уроков</h1>
        {props.loading && props.lessons.length !== 0 ? (
          <Loader />
        ) : (
          <ul>{renderLessons()}</ul>
        )}
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    lessons: state.lesson.lessons,
    loading: state.lesson.loading,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    fetchLessons: () => dispatch(fetchLessons()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LessonList);
