import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
  font-size: 14px;
  padding-left: 5px;
`;

const Button = styled.button`
  padding: 8px;
  margin-left: 10px;
  background: ${props => props.buttonBackground};
  font-size: 14px;
  border-color: ${props => props.buttonBackground};
  color: ${props => props.buttonTextColour};
  border: 1px solid;
  border-radius: 3px;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
`;

const RepositoryBox = ({
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

RepositoryBox.defaultProps = {
  buttonBackground: '#0366d6',
  buttonTextColour: 'white',
  formBackgroundColor: 'white',
  formBorderColor: 'lightgray',
  onClick: null,
  clickData: null,
  disabled: false,
  placeholder: null
};

RepositoryBox.propTypes = {
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

export default RepositoryBox;
