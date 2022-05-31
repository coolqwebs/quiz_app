import { combineReducers } from "redux";
import authReducer from "./auth";
import createQuizReducer from "./createQuiz";
import createLessonReducer from "./createLesson";
import lessonReducer from "./lesson";
import quizReducer from "./quiz";

export default combineReducers({
  quiz: quizReducer,
  createQuiz: createQuizReducer,
  createLesson: createLessonReducer,
  auth: authReducer,
  lesson: lessonReducer,
});
