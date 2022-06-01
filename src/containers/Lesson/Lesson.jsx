import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchLessonById } from "../../store/actions/lesson";
import styles from "./Lesson.module.css";

const Lesson = (props) => {
  useEffect(() => {
    props.fetchLessonById(props.params.match.id);
  });

  return (
    <div className={styles.lesson}>
      <span>{props.title}</span>
      <div className="lesson-video">
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${props.videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Lesson video"
        ></iframe>
      </div>
      <div className="lesson-theory">
        <span>{props.description}</span>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    lesson: state.lesson.lesson,
    loading: state.lesson.loading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchLessonById: (id) => dispatch(fetchLessonById(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Lesson);
