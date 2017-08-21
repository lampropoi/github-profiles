/* eslint-disable no-unused-expressions */

import React, {Component} from 'react';
import styled, {injectGlobal} from 'styled-components';
import _ from 'lodash';

import search from './modules/search';
import colors from './modules/colors';
import {media} from './modules/style-utils';

import logo from './assets/logo.svg';

import SearchForm from './components/SearchForm';
import RepositoryBox from './components/RepositoryBox';

injectGlobal`
  @font-face {
    font-family: 'sans-serif';
  }
  body {
    margin: 0;
    padding: 0;
  }
`;

const Header = styled.header`
  background-color: ${colors.darkBlue};
  height: 60px;
  padding: 20px;
  color: white;
  img {
      height: 20px;
      ${media.tablet`height: 80px`}
  }
  ${media.tablet`height: 120px`}
`;

const AppWrapper = styled.div`
  text-align: center;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
`;

const Footer = styled.div`
  display: none;
  ${media.tablet`position: fixed;right: 10px;bottom: 2px;display:block;`}
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
        <Footer>
        Created by <a href='https://github.com/lampropoi' target='_blank noopener noreferer'>lampropoi</a>
        </Footer>
      </AppWrapper>
    );
  }
}

export default App;
