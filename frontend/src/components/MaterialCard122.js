import React, { Component } from "react";
import styled, { css } from "styled-components";

function MaterialCard122(props) {
  return (
    <Container {...props}>
      <CardBody1>
        <BodyContent1>
          <TitleStyle1>Simplistic White{"\n"}T-Shirt</TitleStyle1>
          <SubtitleStyle1>
            A simple white T-Shirt that can{"\n"}be combined with multiple{"\n"}
            clothes. 100% Cotton
          </SubtitleStyle1>
        </BodyContent1>
        <CardItemImagePlace1
          src={require("../assets/images/white_t_shirt.png")}
        ></CardItemImagePlace1>
      </CardBody1>
      <ActionBody1>
        <ActionButton1>
          <ButtonOverlay>
            <View1>VIEW</View1>
          </ButtonOverlay>
        </ActionButton1>
      </ActionBody1>
      <LoremIpsum1>$45</LoremIpsum1>
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
const CardBody1 = styled.div`
  flex-direction: row;
  justify-content: space-between;
  display: flex;
`;

const BodyContent1 = styled.div`
  padding: 16px;
  padding-top: 24px;
  flex: 1 1 0%;
  flex-direction: column;
  display: flex;
`;

const TitleStyle1 = styled.span`
  font-family: Roboto;
  font-size: 24px;
  color: #000;
  padding-bottom: 12px;
  height: 60px;
`;

const SubtitleStyle1 = styled.span`
  font-family: Roboto;
  font-size: 14px;
  color: #000;
  line-height: 16px;
  opacity: 0.5;
  height: 50px;
`;

const CardItemImagePlace1 = styled.img`
  height: 120px;
  width: 100%;
  margin: 16px;
  object-fit: contain;
`;

const ActionBody1 = styled.div`
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

const View1 = styled.span`
  font-family: Arial;
  font-size: 14px;
  color: #000;
  opacity: 0.9;
  text-align: center;
  width: 72px;
`;

const LoremIpsum1 = styled.span`
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

export default MaterialCard122;
