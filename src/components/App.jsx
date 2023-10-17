// import { Layout } from './Layout';

import { Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import QuizzesPage from 'pages/QuizzesPage';
import CreateQuizPage from 'pages/CreateQuizPage';
import SingleQuizPage from 'pages/SingleQuizPage';
import { AppLayout } from './AppLayout';

// import { HiAcademicCap, HiAdjustments, HiArchive } from 'react-icons/hi';
// import { IconButton } from './IconButton/IconButton';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="create" element={<CreateQuizPage />} />
        <Route path="quizzes" element={<QuizzesPage />} />
        <Route path="quizzes/:quizId" element={<SingleQuizPage />} />
      </Route>
    </Routes>
  );
};
