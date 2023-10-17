import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { SearchBar } from '../components/SearchBar/SearchBar';
import { GlobalStyle } from '../components/GlobalStyle';
import { QuizList } from '../components/QuizList/QuizList';
import { deleteQuizApi, fetchQuizzes } from 'api';

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

const QuizzesPage = () => {
  const [quizItems, setQuizItems] = useState([]);
  const [filters, setFilters] = useState(getInitialFilters);

  const params = useParams();
  console.log(params);

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

  const deleteQuiz = async quizId => {
    try {
      const deletedQuizResult = await deleteQuizApi(quizId);
      setQuizItems(prevState =>
        prevState.filter(quiz => quiz.id !== deletedQuizResult.id)
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
    <div>
      <SearchBar
        topicFilter={filters.topic}
        levelFilter={filters.level}
        onChangeTopic={changeTopicFilter}
        onChangeLevel={changeLevelFilter}
        onReset={resetFilters}
      />
      <div>
        <Link to="/create">Створити квіз</Link>
      </div>
      {filters.loading ? (
        <div>LOADING...</div>
      ) : (
        <QuizList items={visibleQuizItems} onDelete={deleteQuiz} />
      )}
      <GlobalStyle />
    </div>
  );
};

export default QuizzesPage;
