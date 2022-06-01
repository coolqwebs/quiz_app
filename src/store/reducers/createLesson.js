import { CREATE_LESSON, RESET_LESSON } from "../actions/actionsTypes";

const initialState = {
  lesson: [],
};
export default function createLessonReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_LESSON:
      return {
        ...state,
        lesson: [...state.lesson, action.item],
      };
    case RESET_LESSON:
      return {
        ...state,
        lesson: [],
      };
    default:
      return state;
  }
}
