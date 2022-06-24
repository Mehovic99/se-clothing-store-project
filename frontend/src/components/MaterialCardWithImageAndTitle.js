import React, { Component } from "react";
import styled, { css } from "styled-components";

function MaterialCardWithImageAndTitle(props) {
  return (
    <Container {...props}>
      <CardBody>
        <BodyContent>
          <TitleStyle>Simplistic Black T-Shirt</TitleStyle>
          <SubtitleStyle1>
            A simple T-Shirt that will fit you{"\n"}for any occassion, being
            easily{"\n"}combinable. 100% Cotton
          </SubtitleStyle1>
        </BodyContent>
        <CardItemImagePlace
          src={require("../assets/images/black_t_shirt.png")}
        ></CardItemImagePlace>
      </CardBody>
      <Button1>
        <ButtonOverlay>
          <Rect2>View</Rect2>
        </ButtonOverlay>
      </Button1>
      <Price>$45</Price>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  border-width: 1px;
  border-radius: 2px;
  border-color: #CCC;
  flex-wrap: nowrap;
  background-color: #FFF;
  overflow: hidden;
  flex-direction: column;
  border-style: solid;
  position: relative;
  box-shadow: -2px 2px 1.5px  0.1px #000 ;
`;

const ButtonOverlay = styled.button`
 display: block;
 background: none;
 height: 100%;
 width: 100%;
 border:none
 `;
const CardBody = styled.div`
  flex-direction: row;
  justify-content: space-between;
  display: flex;
`;

const BodyContent = styled.div`
  padding: 16px;
  padding-top: 24px;
  flex: 1 1 0%;
  flex-direction: column;
  display: flex;
`;

const TitleStyle = styled.span`
  font-family: Arial;
  font-size: 30px;
`;

const SubtitleStyle1 = styled.span`
 font-family: Arial;
`;

const CardItemImagePlace = styled.img`
  background-color: #ccc;
  height: 96px;
  width: 100%;
  margin: 16px;
`;

const Button1 = styled.div`
  padding: 8px;
  height: 44px;
  background-color: rgba(176,159,184,1);
  border-radius: 26px;
  width: 91px;
  margin: 0px;
  margin-right: 0px;
  align-self: flex-start;
  flex-direction: row;
  top: 0px;
  left: 0px;
  justify-content: space-between;
  border: none;
`;

const Rect2 = styled.span`
  font-family: Arial;
  font-size: 20px;
  color: #000;
  opacity: 0.9;
  width: 75px;
  text-align: center;
  height: 27px;
`;

const Price = styled.span`
  font-family: Roboto;
  top: 115px;
  left: 257px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 44px;
  width: 77px;
  font-size: 40px;
`;

export default MaterialCardWithImageAndTitle;
