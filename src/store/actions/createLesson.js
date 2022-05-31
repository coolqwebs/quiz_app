import { CREATE_LESSON, RESET_LESSON } from "./actionsTypes";
import axios from "../../axios/axios-quiz";

export function createLessonHandler(item) {
  return {
    type: CREATE_LESSON,
    item,
  };
}

export function resetLessonCreation() {
  return {
    type: RESET_LESSON,
  };
}

export function finishCreateLesson() {
  return async (dispatch, getState) => {
    await axios.post("/lessons.json", getState().create.lesson);
    dispatch(resetLessonCreation());
  };
}
