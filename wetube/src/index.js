import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import Searchbar from './components/Searchbar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail'
const API_KEY = "AIzaSyDv9LQcJPPtxyidK4b71Yk7-3uCvpMCtf0";



class App extends Component {
  constructor(props){
    super(props);
    this.state = {videos: []};
    YTSearch({key: API_KEY, term: 'skate'}, (videos) => {
      this.setState({videos : videos});
    });
  }

  render(){
    return(
      <div>
        <Searchbar />
        <VideoDetail video={this.state.videos[1]}/>
        <VideoList videos={this.state.videos} />
      </div>

    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
