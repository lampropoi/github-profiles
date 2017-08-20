import React, {Component} from 'react';
import logo from './assets/logo.svg';
import SearchForm from './components/SearchForm';
import RepositoryBox from './components/RepositoryBox';
import search from './modules/search';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      repos: [],
      searchValue: null
    };

    this.searchProfile = this.searchProfile.bind(this);
  }

  async searchProfile(event, input) {
    event.preventDefault();
    try {
      const repos = await search(input);
      this.setState({
        searchValue: input,
        repos
      });
    } catch (error) {
      // handle error
    }
  }

  displayRepositories() {
    let result;

    if (!this.state.searchValue) {
      result = null;
    } else if (this.state.repos.length) {
      result = this.state.repos.map(repo => (
        <RepositoryBox
          key={repo.name + repo.description}
          description={repo.description}
          name={repo.name}
          forks={repo.forks}
          language={repo.language}
          stars={repo.stars}
        />
      ));
    } else {
      result = <h1>Repositories Not Found for this profile</h1>;
    }

    return result;
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
          onClick={this.searchProfile}
        />
        {
          this.displayRepositories()
        }
      </div>
    );
  }
}

export default App;
