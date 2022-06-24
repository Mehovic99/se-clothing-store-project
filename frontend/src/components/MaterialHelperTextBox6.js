import React, { Component } from "react";
import styled, { css } from "styled-components";

function MaterialHelperTextBox6(props) {
  return (
    <Container {...props}>
      <ConfirmPassword>Confirm Password</ConfirmPassword>
      <InputStyle placeholder="Input"></InputStyle>
      <Helper>Please type your password again to confirm your password</Helper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: transparent;
  flex-direction: column;
`;

const ConfirmPassword = styled.span`
  font-family: Roboto;
  font-size: 12px;
  text-align: left;
  color: #000;
  opacity: 0.6;
  padding-top: 16px;
`;

const InputStyle = styled.input`
  font-family: Roboto;
  border-bottom-width: 1px;
  border-color: #D9D5DC;
  color: #000;
  font-size: 16px;
  align-self: stretch;
  line-height: 16px;
  padding-top: 8px;
  flex: 1 1 0%;
  padding-bottom: 8px;
  width: 375px;
  border: none;
  background: transparent;
  display: flex;
  flex-direction: column;
`;

const Helper = styled.span`
  font-family: Roboto;
  font-size: 12px;
  text-align: left;
  color: #000;
  opacity: 0.6;
  padding-top: 8px;
`;

export default MaterialHelperTextBox6;
