import React, { Component } from "react";
import styled, { css } from "styled-components";

function MaterialHelperTextBox8(props) {
  return (
    <Container {...props}>
      <ChangeName>Change Name</ChangeName>
      <InputStyle placeholder="Input"></InputStyle>
      <TypeYourNewName>Type your new name</TypeYourNewName>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: transparent;
  flex-direction: column;
`;

const ChangeName = styled.span`
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

const TypeYourNewName = styled.span`
  font-family: Roboto;
  font-size: 12px;
  text-align: left;
  color: #000;
  opacity: 0.6;
  padding-top: 8px;
`;

export default MaterialHelperTextBox8;
