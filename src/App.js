import React, {Component} from 'react';
import styled from 'styled-components';
import SearchForm from './components/SearchForm';
import RepositoryBox from './components/RepositoryBox';
import search from './modules/search';
import colors from './modules/colors';

import logo from './assets/logo.svg';

import './App.css';

const Header = styled.header`
  background-color: ${colors.darkBlue};
  height: 120px;
  padding: 20px;
  color: white;
`;

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
          stars={repo.stargazers_count}
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
        <Header>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Github Looker</h2>
        </Header>
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
