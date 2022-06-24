import React, { Component } from "react";
import styled, { css } from "styled-components";

function MaterialButtonViolet6(props) {
  return (
    <Container {...props}>
      <Edit>EDIT</Edit>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(143,66,183,1);
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 2px;
  min-width: 88px;
  padding-left: 16px;
  padding-right: 16px;
  box-shadow: 0px 1px 5px  0.35px #000 ;
`;

const Edit = styled.span`
  font-family: Roboto;
  color: #fff;
  font-size: 14px;
  text-align: center;
`;

export default MaterialButtonViolet6;
