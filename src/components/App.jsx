import { QuizList } from './QuizList/QuizList';
import initialQuizItems from '../data.json';
import { SearchBar } from './SearchBar/SearchBar';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { Component } from 'react';
import { QuizForm } from './QuizForm/QuizForm';
// import { HiAcademicCap, HiAdjustments, HiArchive } from 'react-icons/hi';
// import { IconButton } from './IconButton/IconButton';

export class App extends Component {
  state = {
    quizItems: initialQuizItems,
    filters: {
      topic: '',
      level: 'all',
    },
  };

  changeTopicFilter = newTopic => {
    this.setState(prevState => {
      return {
        filters: { ...prevState.filters, topic: newTopic },
      };
    });
  };

  changeLevelFilter = newlevel => {
    this.setState(prevState => {
      return {
        filters: {
          ...prevState.filters,
          level: newlevel,
        },
      };
    });
  };

  handleDelete = quizId => {
    this.setState(prevState => {
      return {
        quizItems: prevState.quizItems.filter(quiz => quiz.id !== quizId),
      };
    });
  };

  addQuiz = newQuiz => {
    // console.log(newQuiz);

    this.setState(prevState => {
      return {
        quizItems: [...prevState.quizItems, newQuiz],
      };
    });
  };

  getVisibleQuizItems = () => {
    const { quizItems, filters } = this.state
    const lowercaseTopic = filters.topic.toLowerCase();

        return  quizItems.filter(
      quiz => {
        const hasTopic = quiz.topic.toLowerCase().includes(lowercaseTopic);

      //   quiz.topic.toLowerCase().includes(filters.topic.toLowerCase()) &&
      // quiz.level === filters.level
              if (filters.level === 'all') {
          return (
            hasTopic
          );
        };
        return hasTopic && quiz.level === filters.level;
        }
    );
         
  }
  render() {
    const { filters } = this.state;

    const visibleQuizItems = this.getVisibleQuizItems();
    return (
      <Layout>
        <SearchBar
          topicFilter={filters.topic}
          levelFilter={filters.level}
          onChangeTopic={this.changeTopicFilter}
          onChangeLevel={this.changeLevelFilter}
        />
        <QuizForm onAdd={this.addQuiz} />
        <QuizList items={visibleQuizItems} onDelete={this.handleDelete} />
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
  }
}
