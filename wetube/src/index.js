import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import Searchbar from './Searchbar';

//const API_KEY = "AIzaSyDv9LQcJPPtxyidK4b71Yk7-3uCvpMCtf0";

const App = () => {
  return(
    <div>
      <Searchbar />
    </div>

  );
}

ReactDOM.render(<App />, document.getElementById('root'));
