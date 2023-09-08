import { QuizList } from './QuizList/QuizList';
import initialQuizItems from '../data.json';
import { SearchBar } from './SearchBar/SearchBar';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { Component } from 'react';
// import { HiAcademicCap, HiAdjustments, HiArchive } from 'react-icons/hi';
// import { IconButton } from './IconButton/IconButton';


export class App extends Component {
  state = {
    quizItems: initialQuizItems,
  };


  handleDelete = (quizId) => {
    this.setState(prevState => {
      return {
      quizItems: prevState.quizItems.filter(quiz => quiz.id !== quizId)
      }
   })
        
    }
  render() {
    return (
      <Layout>
        <SearchBar />
        <QuizList items={this.state.quizItems} onDelete={this.handleDelete} />
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
};

