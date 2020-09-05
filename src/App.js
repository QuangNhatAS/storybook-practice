import React from 'react';
import './App.css';
import Header from './Header';
import SuggestPanel from './SuggestPanel';
import PostCreate from './PostCreate';
import avatar from './icon/girl.jpg';

function App() {
  return (
    <div className="app">
      <Header/>
      <SuggestPanel/>
      <PostCreate name="Quỳnh Anh" avt={avatar}/>
    </div>
  );
}

export default App;
