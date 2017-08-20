import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import colors from '../modules/colors';
import {media} from '../modules/style-utils';
import githubColors from '../modules/github-colors';

import star from '../assets/star.svg';
import fork from '../assets/fork.svg';

const Repository = styled.div`
    color: ${colors.gray};
    margin: 10px 0px;
    border: 1px solid lightgray;
    border-radius: 2px;
    width: 80%;
    margin-left: 10%;
    float: left;
    height: 135px;
    ${media.tablet`width: 42%; margin: 20px 0px; margin-left: 5%;height: 135px;`}
    ${media.computer`width: 29%; margin-left: 3%; height: 165px;`}
`;

const Name = styled.div`
  text-align: left;
  color: ${colors.blue};
  padding: 10px;
  font-size: 12px;
  font-weight: bold;
  ${media.computer`font-size: 14px;padding: 20px 10px;`}
`;

const Description = styled.div`
  text-align: left;
  padding: 10px;
  font-size: 12px;
  line-height: 20px;
  height: 40px;
  ${media.computer`font-size: 14px;`}
`;

const Details = styled.div`
  text-align: left;
  padding: 10px;
  font-size: 12px;
  ${media.computer`font-size: 14px;`}
`;

const Language = styled.span`
  color: colors.gray;
  font-size: 12px;
  ${media.computer`font-size: 14px;`}
  span {
    background: ${props => (githubColors[props.language] && githubColors[props.language].color) || colors.darkGray};
    width: 14px;
    height: 14px;
    border-radius: 7px;
    display: inline-block;
    margin-right: 10px;
  }
`;
const Stars = styled.span`
  font-size: 12px;
  ${media.computer`font-size: 14px;`}
  img {
    width: 14px;
    height: 14px;
    margin-right: 10px;
    margin-left: 10px;
  }
`;
const Forks = styled.span`
img {
  width: 14px;
  height: 14px;
  margin-right: 10px;
  margin-left: 10px;
  }
`;

const RepositoryBox = ({
  description,
  forks,
  name,
  language,
  stars
}) => (
  <Repository>
    <Name>{name}</Name>
    <Description>{description}</Description>
    <Details>
      <Language language={language}>
        <span />
        {language}
      </Language>
      <Stars>
        <img src={star} alt='star' />
        {stars}
      </Stars>
      <Forks>
        <img src={fork} alt='fork' />
        {forks}
      </Forks>
    </Details>
  </Repository>
);

RepositoryBox.defaultProps = {
  description: 'Unknown',
  forks: 'Unknown',
  name: 'Unknown',
  language: 'Unknown',
  stars: 'Unknown'
};

RepositoryBox.propTypes = {
  /**
   *  Description of repository
   */
  description: PropTypes.string.isRequired,
  /**
   *  forks of repository
   */
  forks: PropTypes.number.isRequired,
  /**
   * Name of repository
   */
  name: PropTypes.string.isRequired,
  /**
   * Programming language of repository
   */
  language: PropTypes.string.isRequired,
  /**
   * Stars of repository
   */
  stars: PropTypes.number.isRequired
};

export default RepositoryBox;
