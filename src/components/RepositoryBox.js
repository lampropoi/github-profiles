import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../modules/colors';
import {media} from '../modules/style-utils';

import star from '../assets/star.svg';
import fork from '../assets/fork.svg';

const Repository = styled.div`
    margin: 20px 0px;
    border: 1px solid lightgray;
    border-radius: 2px;
    width: 80%;
    margin-left: 10%;
    float: left;
    height: 150px;
    ${media.tablet`width: 42%; margin-left: 5%;`}
    ${media.computer`width: 29%; margin-left: 3%; height: 200px;`}
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
  color: gray;
  ${media.computer`font-size: 14px;`}
`;

const Details = styled.div`
  text-align: left;
  padding: 10px;
`;

const Language = styled.span`
  img {
    width: 14px;
    height: 14px;
  }
`;
const Stars = styled.span`
img {
  width: 14px;
  height: 14px;
}
`;
const Forks = styled.span`
img {
  width: 14px;
  height: 14px;
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
      <Language>
        <img src={star} alt='star' />
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
  forks: PropTypes.string.isRequired,
  /**
  * Name of repository
  */
  name: PropTypes.string.isRequired,
  /**
  * Programming language of repository
  */
  language: PropTypes.string.isRequired,
  /**
  * stars of repository
  */
  stars: PropTypes.string.isRequired
};

export default RepositoryBox;
