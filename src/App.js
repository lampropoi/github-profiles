import React, {Component} from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import SearchForm from './components/SearchForm';
import RepositoryBox from './components/RepositoryBox';
import search from './modules/search';
import colors from './modules/colors';

import logo from './assets/logo.svg';

const Header = styled.header`
  background-color: ${colors.darkBlue};
  height: 120px;
  padding: 20px;
  color: white;
  img {
      height: 80px;
  }
`;

const AppWrapper = styled.div`
  text-align: center;
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
    const sanitizedInput = input.trim();
    if (sanitizedInput) {
      try {
        const unsortedRepos = await search(sanitizedInput);
        const repos = _.sortBy(unsortedRepos, ['stargazers_count']).reverse().splice(0, 10);
        this.setState({
          searchValue: sanitizedInput,
          repos
        });
      } catch (error) {
        // handle error
      }
    } else {
      this.setState({
        searchValue: ''
      });
    }
  }

  displayRepositories() {
    let result;
    // debugger;
    if (!this.state.searchValue) {
      result = null;
    } else if (typeof this.state.repos[0] === 'string') {
      result = <h1>{this.state.repos[0]}</h1>;
    } else if (!this.state.repos.length) {
      result = <h1>No repositories found for this profile</h1>;
    } else if (this.state.repos.length) {
      result = this.state.repos.map(repo => (
        <RepositoryBox
          key={repo.name + repo.description}
          url={repo.html_url}
          description={repo.description || 'No description available'}
          name={repo.name}
          forks={repo.forks}
          language={repo.language || 'Unknown'}
          stars={repo.stargazers_count}
        />
      ));
    }
    return result;
  }

  render() {
    return (
      <AppWrapper>
        <Header>
          <img src={logo} alt='logo' />
          <h2>Github Top 10 Looker</h2>
        </Header>
        <SearchForm
          placeholder='Type a valid Github username'
          buttonText='Get repositories'
          onClick={this.searchProfile}
        />
        {
          this.displayRepositories()
        }
      </AppWrapper>
    );
  }
}

export default App;
