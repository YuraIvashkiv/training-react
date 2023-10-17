import axios from 'axios';

axios.defaults.baseURL = 'https://650995c3f6553137159bb321.mockapi.io/';

export const fetchQuizzes = async () => {
  const response = await axios.get('/quizzes');
  return response.data;
};

export const fetchQuizById = async quizId => {
  const response = await axios.get(`/quizzes/${quizId}`);
  return response.data;
};

export const deleteQuizApi = async quizId => {
  const response = await axios.delete(`/quizzes/${quizId}`);
  return response.data;
};

export const createQuiz = async quiz => {
  const response = await axios.post('/quizzes', quiz);
  return response.data;
};
