import React from 'react'; 

import './style/body.css';
import Header from './components/Header'
import PostList from './components/PostList';

function App() {

  return (
    <>
      <Header />
      <PostList />
    </>
  )

}

export default App;