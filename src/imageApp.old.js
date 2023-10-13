// import { Component } from "react";

// export class imageApp extends Component{
//     // state = {
//     //     query: '',
//     //     image: [],
//     //     page: 1,
//     // };

//     // changeQuery = newQuery => {
//     //     this.setState({
//     //         query: `${Date.now()}/${newQuery}`,
//     //         images: [],
//     //         page:1,
//     //     });
//     // };

//     componentDidUpdate(prevProps, prevState) {
//         if (
//           prevState.query !== this.state.query ||
//           prevState.page !== this.state.page
//         ) {
//           console.log(`HTTP-запит за ${this.state.query}, і page=${this.state.page}`);
//           //HTTP-запит за query
//           //this.setState({images: результат запиту})
//         }
//     };

//     handleLoadMore = () => {
//         this.setState(prevState => ({ page: prevState.page + 1 }));

//     }
//     // render() {
//         // return (
//         //   <div>
//         //         <div>
//         //             <form onSubmit={(event) => {
//         //                 event.preventDefault();
//         //                 this.changeQuery(event.target.elements.query.value);
//         //                 event.target.reset();
//         //             }}>
//         //                 <input type="text" name='query'/>
//         //                 <button type="submit">Submit</button>

//         //         </form></div>
//         //     <div>Gallery</div>
//         //     <div>
//         //       <button onClick={this.handleLoadMore}>Load More</button>
//         //     </div>
//         //   </div>
//         // );

//     // }
// }
