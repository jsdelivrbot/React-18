import react, { Component } from 'React';
import logo from './logo.svg';
import SearchBar from './components/searchBar';
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
      </div>
    );
  }
}

export default App;
