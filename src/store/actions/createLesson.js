import { CREATE_LESSON, RESET_LESSON } from "./actionsTypes";
import lessonServer from "../../axios/axios-quiz";

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
    await lessonServer.post("/lessons.json", getState().lesson);
    dispatch(resetLessonCreation());
  };
}
