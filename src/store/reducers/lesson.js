import {
  FETCH_LESSONS_ERROR,
  FETCH_LESSONS_START,
  FETCH_LESSONS_SUCCESS,
  FETCH_LESSON_SUCCESS,
} from "../actions/actionsTypes";

const initialState = {
  lessons: [],
  loading: false,
  lesson: null,
};

export default function lessonReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_LESSONS_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_LESSONS_SUCCESS:
      return {
        ...state,
        loading: false,
        lessons: action.lessons,
      };
    case FETCH_LESSONS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case FETCH_LESSON_SUCCESS:
      return {
        ...state,
        loading: false,
        lesson: action.lesson,
      };
    default:
      return state;
  }
}
