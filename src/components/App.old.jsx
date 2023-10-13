// import { QuizList } from './QuizList/QuizList';
// import { SearchBar } from './SearchBar/SearchBar';
// import { GlobalStyle } from './GlobalStyle';
// import { Layout } from './Layout';
// import { Component } from 'react';
// import { QuizForm } from './QuizForm/QuizForm';
// import { createQuiz, deleteQuiz, fetchQuizzes } from 'api';
// // import { HiAcademicCap, HiAdjustments, HiArchive } from 'react-icons/hi';
// // import { IconButton } from './IconButton/IconButton';

// // Монтує-> Розмонтовує-> Монтує
// export class App extends Component {
//   // state = {
//   //   quizItems: [],
//   //   filters: {
//   //     topic: '',
//   //     level: 'all',
//   //     loading: false
//   //   },
//   // };

//   async componentDidMount() {
//     // console.log('componentDidMount');
//     // const savedFilters = localStorage.getItem('quizFilters');
//     // if (savedFilters !== null) {
//     //   JSON.parse(savedFilters);
//     //   this.setState({
//     //     filters: JSON.parse(savedFilters),
//     //   })
//     // };
// // try {
// //    this.setState({ loading: true });
// //    const quizItems = await fetchQuizzes();
// //    this.setState({ quizItems, loading: false, });
// // } catch (error) {
// //   console.log(error)
// // }
// };

//   // componentDidUpdate(prevProps, prevState) {
//   //   if (prevState.filters !== this.state.filters) {
//   // localStorage.setItem('quizFilters', JSON.stringify(this.state.filters));

//   //   }
//   // };

//   // resetFilters = () => {
//   //   this.setState({
//   //     filters: {
//   //       topic: '',
//   //       level: 'all',
//   //     },
//   //   });
//   // }

//   // changeTopicFilter = newTopic => {
//   //   this.setState(prevState => {
//   //     return {
//   //       filters: { ...prevState.filters, topic: newTopic },
//   //     };
//   //   });
//   // };

//   // changeLevelFilter = newlevel => {
//   //   this.setState(prevState => {
//   //     return {
//   //       filters: {
//   //         ...prevState.filters,
//   //         level: newlevel,
//   //       },
//   //     };
//   //   });
//   // };

//   // handleDelete = async quizId => {
//   //   try {
//   //      const deletedQuiz = await deleteQuiz(quizId);

//   //      this.setState(prevState => ({
//   //          quizItems: prevState.quizItems.filter(
//   //            quiz => quiz.id !== deletedQuiz.id
//   //          ),
//   //        }));
//   //   } catch (error) {
//   //     console.log(error)
//   //   }
//   //    };

//   // addQuiz = async newQuiz => {
//   //   try {
//   //       const createdQuiz = await createQuiz(newQuiz);
//   //       this.setState(prevState =>({
//   //         quizItems: [...prevState.quizItems, createdQuiz],
//   //       }));
//   //   } catch (error) {
//   //     console.log(error)
//   //   }

//   // };

//   // getVisibleQuizItems = () => {
//   //   const { quizItems, filters } = this.state
//   //   const lowercaseTopic = filters.topic.toLowerCase();

//   //       return  quizItems.filter(
//   //     quiz => {
//   //       const hasTopic = quiz.topic.toLowerCase().includes(lowercaseTopic);

//   //     //   quiz.topic.toLowerCase().includes(filters.topic.toLowerCase()) &&
//   //     // quiz.level === filters.level
//   //             if (filters.level === 'all') {
//   //         return (
//   //           hasTopic
//   //         );
//   //       };
//   //       return hasTopic && quiz.level === filters.level;
//   //       }
//   //   );
//   // }
//   render() {
//     // console.log('render')
//     // const { filters, loading } = this.state;

//     // const visibleQuizItems = this.getVisibleQuizItems();
//     // return (
//     //   <Layout>
//     //     <SearchBar
//     //       topicFilter={filters.topic}
//     //       levelFilter={filters.level}
//     //       onChangeTopic={this.changeTopicFilter}
//     //       onChangeLevel={this.changeLevelFilter}
//     //       onReset={this.resetFilters}
//     //     />
//     //     <QuizForm onAdd={this.addQuiz} />
//     //     {loading ? (
//     //       <div>LOADING...</div>
//     //     ) : (
//     //       <QuizList items={visibleQuizItems} onDelete={this.handleDelete} />
//     //     )}
//     //     {/* <IconButton variant="primary" size="sm">
//     //     <HiAcademicCap />
//     //   </IconButton> */}
//     //     {/* <IconButton variant="secondary" size="md">
//     //     <HiArchive />
//     //   </IconButton> */}
//     //     {/* <IconButton variant="secondary" size="lg">
//     //     <HiAdjustments size={40} color="orange" />
//     //     <HiAdjustments />
//     //   </IconButton> */}
//     //     <GlobalStyle />
//     //   </Layout>
//     // );
//   }
// }
