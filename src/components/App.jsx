import { QuizList } from './QuizList/QuizList';
import { SearchBar } from './SearchBar/SearchBar';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { QuizForm } from './QuizForm/QuizForm';
import { createQuiz, deleteQuiz, fetchQuizzes } from 'api';
import { useEffect, useState } from 'react';
// import { HiAcademicCap, HiAdjustments, HiArchive } from 'react-icons/hi';
// import { IconButton } from './IconButton/IconButton';

// Монтує-> Розмонтовує-> Монтує

const getInitialFilters = () => {
  const savedFilters = localStorage.getItem('quizFilters');
  if (savedFilters !== null) {
    return JSON.parse(savedFilters);
  }
  return {
    topic: '',
    level: 'all',
    loading: false,
  };
};
export const App = () => {
  const [quizItems, setQuizItems] = useState([]);
  const [filters, setFilters] = useState(getInitialFilters);

  //  fetch даних з бекенду
  useEffect(() => {
    async function getQuizzes() {
      try {
        setFilters(prevFilters => ({
          ...prevFilters,
          loading: true,
        }));
        const quizItems = await fetchQuizzes();
        setQuizItems(quizItems);
      } catch (error) {
        console.log(error);
      } finally {
        setFilters(prevFilters => ({
          ...prevFilters,
          loading: false,
        }));
      }
    }
    getQuizzes();
  }, []);

  // Запис фільтів у local Storage
  useEffect(() => {
    localStorage.setItem('quizFilters', JSON.stringify(filters));
  }, [filters]);

  const resetFilters = () => {
    setFilters({
      topic: '',
      level: 'all',
      loading: false,
    });
  };

  const changeTopicFilter = newTopic => {
    setFilters(prevState => ({
      ...prevState,
      topic: newTopic,
    }));
  };

  const changeLevelFilter = newlevel => {
    setFilters(prevState => ({
      ...prevState,
      level: newlevel,
    }));
  };

  const addQuiz = async newQuiz => {
    try {
      const createdQuiz = await createQuiz(newQuiz);
      setQuizItems(prevState => [...prevState, createdQuiz]);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteQuiz = async quizId => {
    try {
      const deletedQuizResult = await deleteQuiz(quizId);
      setQuizItems(prevState =>
        prevState.quizItems.filter(quiz => quiz.id !== deletedQuizResult.id)
      );
    } catch (error) {
      console.log(error);
    }
  };

  const getVisibleQuizItems = () => {
    const lowercaseTopic = filters.topic.toLowerCase();

    return quizItems.filter(quiz => {
      const hasTopic = quiz.topic.toLowerCase().includes(lowercaseTopic);

      //   quiz.topic.toLowerCase().includes(filters.topic.toLowerCase()) &&
      // quiz.level === filters.level
      if (filters.level === 'all') {
        return hasTopic;
      }
      return hasTopic && quiz.level === filters.level;
    });
  };

  const visibleQuizItems = getVisibleQuizItems();
  return (
    <Layout>
      <SearchBar
        topicFilter={filters.topic}
        levelFilter={filters.level}
        onChangeTopic={changeTopicFilter}
        onChangeLevel={changeLevelFilter}
        onReset={resetFilters}
      />
      <QuizForm onAdd={addQuiz} />
      {filters.loading ? (
        <div>LOADING...</div>
      ) : (
        <QuizList items={visibleQuizItems} onDelete={deleteQuiz} />
      )}
      {/* <IconButton variant="primary" size="sm">
        <HiAcademicCap />
      </IconButton> */}
      {/* <IconButton variant="secondary" size="md">
        <HiArchive />
      </IconButton> */}
      {/* <IconButton variant="secondary" size="lg">
        <HiAdjustments size={40} color="orange" />
        <HiAdjustments />
      </IconButton> */}
      <GlobalStyle />
    </Layout>
  );
};
