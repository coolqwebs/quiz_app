import axios from "axios";

const testServer = axios.create({
  baseURL:
    "https://react-quiz-e675d-default-rtdb.asia-southeast1.firebasedatabase.app/",
});

const lessonServer = axios.create({
  baseURL:
    "https://learning-system-3d924-default-rtdb.asia-southeast1.firebasedatabase.app/",
});

export { testServer as default, lessonServer };
