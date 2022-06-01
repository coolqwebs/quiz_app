import {
  FETCH_LESSONS_ERROR,
  FETCH_LESSONS_START,
  FETCH_LESSONS_SUCCESS,
  FETCH_LESSON_SUCCESS,
} from "./actionsTypes";
import axios from "../../axios/axios-quiz";

export function fetchLessons() {
  return async (dispatch) => {
    dispatch(fetchLessonsStart());
    try {
      const response = await axios.get("/lessons.json");
      const lessons = [];
      Object.keys(response.data).forEach((key, index) => {
        lessons.push({
          id: key,
          name: `Lesson №${index + 1}`,
        });
      });
      dispatch(fetchLessonSuccess(lessons));
    } catch (e) {
      dispatch(fetchLessonsError(e));
    }
  };
}
export function fetchLessonById(lessonId) {
  return async (dispatch) => {
    dispatch(fetchLessonsStart());
    try {
      const response = await axios.get(`/lessons/${lessonId}.json`);
      const lesson = response.data;

      dispatch(fetchLessonsSuccess(lesson));
    } catch (e) {
      dispatch(fetchLessonsError(e));
    }
  };
}

export function fetchLessonsStart() {
  return {
    type: FETCH_LESSONS_START,
  };
}

export function fetchLessonsSuccess(lessons) {
  return {
    type: FETCH_LESSONS_SUCCESS,
    lessons,
  };
}

export function fetchLessonsError(e) {
  return {
    type: FETCH_LESSONS_ERROR,
    error: e,
  };
}
export function fetchLessonSuccess(lesson) {
  return {
    type: FETCH_LESSON_SUCCESS,
    lesson,
  };
}
