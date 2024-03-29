import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';
import Searchbar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail'
const API_KEY = "AIzaSyDv9LQcJPPtxyidK4b71Yk7-3uCvpMCtf0";



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
      };
    this.videoSearch('web apps react');
    }

    videoSearch(term){
      YTSearch({key: API_KEY, term: term} , (videos) => {
        this.setState({
          videos : videos,
          selectedVideo: videos[0]
        });
      })
    };


  render(){
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
    return(
      <div>
        <Searchbar onSearchBarChange = {videoSearch} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
        videos={this.state.videos}
        onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
         />
      </div>

    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
