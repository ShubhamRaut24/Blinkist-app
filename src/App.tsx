import React from 'react';

import './App.css';
import BookInfoComponent from './Components/pages/BookInfoPage';


import MyLibrary from './Components/pages/MyLibrary';


function App() {
  return (
    <div className="App">
     <MyLibrary></MyLibrary>
     <BookInfoComponent></BookInfoComponent>
    </div>
  );
}

export default App;
