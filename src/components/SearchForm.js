import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {media} from '../modules/style-utils';

import colors from '../modules/colors';

const Form = styled.form`
    margin: 20px 0px;
    flex-flow: wrap;
`;

const Input = styled.input`
  width: 60%;
  height: 30px;
  background: ${props => props.formBackgroundColor};
  border: 1px solid lightgray;
  border-radius: 2px;
  font-size: 12px;
  padding-left: 5px;
  ${media.tablet`font-size: 14px`}
`;

const Button = styled.button`
  padding: 8px;
  background: ${props => props.buttonBackground};
  font-size: 14px;
  border-color: ${props => props.buttonBackground || colors.gray};
  color: ${props => props.buttonTextColour};
  border: 1px solid;
  border-radius: 3px;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  margin-top: 10px;
  position: relative;
  top: 1px;
  ${media.tablet`margin-left:10px;top:0`}
`;

const SearchForm = ({
  buttonBackground,
  buttonText,
  buttonTextColour,
  formBackgroundColor,
  formBorderColor,
  disabled,
  placeholder
}) => (
  <Form>
    <Input
      formBackgroundColor={formBackgroundColor}
      formBorderColor={formBorderColor}
      disabled={disabled}
      placeholder={placeholder}
    />
    <Button
      buttonBackground={buttonBackground}
      buttonTextColour={buttonTextColour}
    >
      {buttonText}
    </Button>
  </Form>
);

SearchForm.defaultProps = {
  buttonBackground: colors.blue,
  buttonTextColour: 'white',
  formBackgroundColor: 'white',
  formBorderColor: 'lightgray',
  onClick: null,
  clickData: null,
  disabled: false,
  placeholder: null
};

SearchForm.propTypes = {
  /**
   * Colour of button background
   */
  buttonBackground: PropTypes.string,
  /**
   *  Text of button
   */
  buttonText: PropTypes.string.isRequired,
  /**
   * Colour of text on the button
   */
  buttonTextColour: PropTypes.string,
  /**
   * Colour of background in the search box
   */
  formBackgroundColor: PropTypes.string,
  /**
   * Colour of border in the search box
   */
  formBorderColor: PropTypes.string,
  /**
   * Data passed on button click
   */
  clickData: PropTypes.any,
  /**
   * Shows if button is disabled or not
   */
  disabled: PropTypes.bool,
  /**
   * On click of the component, the function that will run
   */
  onClick: PropTypes.func,
  /**
   * Placeholder of search form
   */
  placeholder: PropTypes.string
};

export default SearchForm;
