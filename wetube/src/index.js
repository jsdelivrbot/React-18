import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import Searchbar from './components/Searchbar';
import VideoList from './components/video_list';
const API_KEY = "AIzaSyDv9LQcJPPtxyidK4b71Yk7-3uCvpMCtf0";



class App extends Component {
  constructor(props){
    super(props);
    this.state = {videos: []};
    YTSearch({key: API_KEY, term: 'surfboard'}, (videos) => {
      this.setState({videos : videos});
    });
  }

  render(){
    return(
      <div>
        <Searchbar />
        <VideoList videos={this.state.videos} />
      </div>

    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
