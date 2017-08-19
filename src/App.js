import React, {Component} from 'react';
import logo from './assets/logo.svg';
import SearchForm from './components/SearchForm';
import RepositoryBox from './components/RepositoryBox';

import './App.css';
class App extends Component {
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
          >
        </SearchForm>
        <RepositoryBox
          name='make-love-no-war'
          description='An absolutely sexy component'
          >
        </RepositoryBox>
        <RepositoryBox
          name='make-love-no-war'
          description='An absolutely sexy component'
          >
        </RepositoryBox>
        <RepositoryBox
          name='make-love-no-war'
          description='An absolutely sexy component'
          >
        </RepositoryBox>
        <RepositoryBox
          name='make-love-no-war'
          description='An absolutely sexy component'
          >
        </RepositoryBox>

      </div>
    );
  }
}

export default App;
