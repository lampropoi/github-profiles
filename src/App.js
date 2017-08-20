import React, {Component} from 'react';
import logo from './assets/logo.svg';
import SearchForm from './components/SearchForm';
import RepositoryBox from './components/RepositoryBox';
import data from './modules/data';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      repos: data
    };
  }

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Github Looker</h2>
        </div>
        <SearchForm
          placeholder='Type a valid Github username'
          buttonText='Get repositories'
        />
        {
          this.state.repos.map(repo => (
            <RepositoryBox
              description={repo.description}
              name={repo.name}
              forks={repo.forks}
              language={repo.language}
              stars={repo.stars}
            />
          ))
        }
      </div>
    );
  }
}

export default App;
