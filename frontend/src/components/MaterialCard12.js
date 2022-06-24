import React, { Component } from "react";
import styled, { css } from "styled-components";

function MaterialCard12(props) {
  return (
    <Container {...props}>
      <CardBody>
        <BodyContent>
          <TitleStyle>Simplistic Black{"\n"}T-Shirt</TitleStyle>
          <SubtitleStyle>
            A simple black T-Shirt that can{"\n"}be combined with multiple{"\n"}
            clothes. 100% Cotton
          </SubtitleStyle>
        </BodyContent>
        <CardItemImagePlace
          src={require("../assets/images/black_t_shirt3.png")}
        ></CardItemImagePlace>
      </CardBody>
      <ActionBody>
        <ActionButton1>
          <ButtonOverlay>
            <View>VIEW</View>
          </ButtonOverlay>
        </ActionButton1>
      </ActionBody>
      <LoremIpsum>$45</LoremIpsum>
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
  font-family: Roboto;
  font-size: 24px;
  color: #000;
  padding-bottom: 12px;
  height: 60px;
`;

const SubtitleStyle = styled.span`
  font-family: Roboto;
  font-size: 14px;
  color: #000;
  line-height: 16px;
  opacity: 0.5;
  height: 50px;
`;

const CardItemImagePlace = styled.img`
  height: 120px;
  width: 100%;
  margin: 16px;
`;

const ActionBody = styled.div`
  padding: 8px;
  flex-direction: row;
  display: flex;
`;

const ActionButton1 = styled.div`
  padding: 8px;
  height: 36px;
  background-color: rgba(176,159,184,1);
  border-radius: 17px;
  flex-direction: column;
  display: flex;
  border: none;
`;

const View = styled.span`
  font-family: Arial;
  font-size: 14px;
  color: #000;
  opacity: 0.9;
  text-align: center;
  width: 72px;
`;

const LoremIpsum = styled.span`
  font-family: Roboto;
  top: 142px;
  left: 247px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 51px;
  width: 110px;
  font-size: 40px;
`;

export default MaterialCard12;
