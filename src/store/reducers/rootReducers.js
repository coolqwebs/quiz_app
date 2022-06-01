import { combineReducers } from "redux";
import authReducer from "./auth";
import createQuizReducer from "./createQuiz";
import createLessonReducer from "./createLesson";
import quizReducer from "./quiz";
import lessonReducer from "./lesson";

export default combineReducers({
  quiz: quizReducer,
  lesson: lessonReducer,
  createQuiz: createQuizReducer,
  createLesson: createLessonReducer,
  auth: authReducer,
});
