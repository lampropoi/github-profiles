import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../modules/colors';
import {media} from '../modules/style-utils';

import star from '../assets/star.svg';

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
`;

const RepositoryBox = ({
  name,
  description
}) => (
  <Repository>
    <Name>{name}</Name>
    <Description>{description}</Description>
    <Details>
    </Details>
  </Repository>
);

RepositoryBox.defaultProps = {
  name: 'Unknown',
  description: 'Unknown'
};

RepositoryBox.propTypes = {
  /**
   * Name of repository
   */
  name: PropTypes.string.isRequired,
  /**
   *  Description of repository
   */
  description: PropTypes.string.isRequired
};

export default RepositoryBox;
