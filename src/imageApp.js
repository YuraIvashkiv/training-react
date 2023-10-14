// import React, { useState, useEffect } from 'react';

// const ImageApp = () => {
//   const [query, setQuery] = useState('');
//   const [image, setImages] = useState([]);
//   const [page, setPage] = useState(1);

//   const changeQuery = newQuery => {
//     setQuery(`${Date.now()}/${newQuery}`);
//     setImages([]);
//     setPage(1);
//   };

//   const handleLoadMore = () => {
//     setPage(prevState => prevState + 1);
//   };

//   useEffect(() => {
//     if (query === '') return;
//     console.log(`HTTP-запит за ${query}, і page=${page}`);
//   }, [query, page]);
//   return (
//     <div>
//       <div>
//         <form
//           onSubmit={event => {
//             event.preventDefault();
//             changeQuery(event.target.elements.query.value);
//             event.target.reset();
//           }}
//         >
//           <input type="text" name="query" />
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//       <div>Gallery</div>
//       <div>
//         <button onClick={handleLoadMore}>Load More</button>
//       </div>
//     </div>
//   );
// };
