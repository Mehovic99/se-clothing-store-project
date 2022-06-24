import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialSearchBar from "../components/MaterialSearchBar";
import MaterialCard12 from "../components/MaterialCard12";

function Searching(props) {
  return (
    <Container>
      <Navbar1Stack>
        <Navbar1>
          <MaterialSearchBar
            style={{
              height: 56,
              width: 709,
              borderRadius: 25,
              marginTop: 6,
              marginLeft: 402
            }}
          ></MaterialSearchBar>
        </Navbar1>
        <Logo1>
          <ButtonHome1>
            <ButtonOverlay
              onClick={() => props.history.goBack()}
            ></ButtonOverlay>
          </ButtonHome1>
        </Logo1>
        <PageName1>Aces Clothing Store</PageName1>
      </Navbar1Stack>
      <MaterialCard12
        style={{
          height: 206,
          width: 359,
          borderRadius: 25,
          marginTop: 154,
          marginLeft: 283
        }}
      ></MaterialCard12>
      <MaterialCard12
        style={{
          height: 206,
          width: 359,
          borderRadius: 25,
          marginTop: 49,
          marginLeft: 288
        }}
      ></MaterialCard12>
      <MaterialCard12
        style={{
          height: 206,
          width: 359,
          borderRadius: 25,
          marginTop: 60,
          marginLeft: 288
        }}
      ></MaterialCard12>
      <LoremIpsum>Search results for &quot;testing&quot;</LoremIpsum>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(176,159,184,1);
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const ButtonOverlay = styled.button`
 display: block;
 background: none;
 height: 100%;
 width: 100%;
 border:none
 `;
const Navbar1 = styled.div`
  top: 5px;
  left: 0px;
  width: 1920px;
  height: 68px;
  position: absolute;
  background-color: rgba(143,66,183,1);
  flex-direction: column;
  display: flex;
`;

const Logo1 = styled.div`
  top: 0px;
  left: 12px;
  width: 87px;
  height: 79px;
  position: absolute;
  flex-direction: column;
  display: flex;
  background-image: url(${require("../assets/images/two_aces.png")});
  background-size: cover;
`;

const ButtonHome1 = styled.div`
  width: 55px;
  height: 56px;
  margin-top: 10px;
  margin-left: 14px;
  border: none;
`;

const PageName1 = styled.span`
  font-family: Clicker Script;
  top: 10px;
  left: 99px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 68px;
  width: 369px;
  font-size: 40px;
`;

const Navbar1Stack = styled.div`
  width: 1920px;
  height: 79px;
  margin-top: -5px;
  position: relative;
`;

const LoremIpsum = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  height: 66px;
  width: 747px;
  font-size: 40px;
  margin-top: -839px;
  margin-left: 283px;
`;

export default Searching;
