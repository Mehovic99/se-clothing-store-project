import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialCard123 from "../components/MaterialCard123";
import MaterialCard124 from "../components/MaterialCard124";
import MaterialCard125 from "../components/MaterialCard125";
import MaterialSearchBar from "../components/MaterialSearchBar";
import MaterialButtonShare1 from "../components/MaterialButtonShare1";
import { Link } from "react-router-dom";
import MaterialButtonViolet5 from "../components/MaterialButtonViolet5";
import MaterialCard12 from "../components/MaterialCard12";
import MaterialCard121 from "../components/MaterialCard121";
import MaterialCard122 from "../components/MaterialCard122";

function HomePageLogged(props) {
  return (
    <Container>
      <Product5Row>
        <MaterialCard123
          style={{
            height: 206,
            width: 359,
            borderRadius: 25
          }}
        ></MaterialCard123>
        <MaterialCard124
          style={{
            height: 206,
            width: 359,
            borderRadius: 25,
            marginLeft: 46
          }}
        ></MaterialCard124>
        <MaterialCard125
          style={{
            height: 206,
            width: 359,
            borderRadius: 25,
            marginLeft: 53
          }}
        ></MaterialCard125>
      </Product5Row>
      <Navbar1Stack>
        <Navbar1>
          <SearchBar1Row>
            <MaterialSearchBar
              style={{
                height: 56,
                width: 709,
                borderRadius: 25,
                marginTop: 1
              }}
              leftIconButton="Searching"
            ></MaterialSearchBar>
            <ProfileIconStack>
              <MaterialButtonShare1
                iconName="share-variant"
                style={{
                  height: 56,
                  width: 56,
                  position: "absolute",
                  left: 0,
                  top: 0,
                  shadowRadius: 0,
                  boxShadow: "3px 3px 0px  1px rgba(0,0,0,1) "
                }}
                icon="account"
              ></MaterialButtonShare1>
              <Link to="/UserProfile">
                <ProfileButton>
                  <ButtonOverlay></ButtonOverlay>
                </ProfileButton>
              </Link>
            </ProfileIconStack>
            <LogoutIconStack>
              <MaterialButtonViolet5
                style={{
                  height: 36,
                  width: 100,
                  position: "absolute",
                  left: 0,
                  top: 0,
                  borderRadius: 25,
                  shadowRadius: 0,
                  boxShadow: "3px 3px 0px  1px rgba(0,0,0,1) "
                }}
              ></MaterialButtonViolet5>
              <Link to="/HomePage">
                <LogoutButton>
                  <ButtonOverlay></ButtonOverlay>
                </LogoutButton>
              </Link>
            </LogoutIconStack>
          </SearchBar1Row>
        </Navbar1>
        <Logo1>
          <Link to="/HomePageLogged">
            <ButtonHome1>
              <ButtonOverlay></ButtonOverlay>
            </ButtonHome1>
          </Link>
        </Logo1>
        <PageName1>Aces Clothing Store</PageName1>
      </Navbar1Stack>
      <Product2Row>
        <MaterialCard12
          style={{
            height: 206,
            width: 359,
            borderRadius: 25
          }}
        ></MaterialCard12>
        <MaterialCard121
          style={{
            height: 206,
            width: 359,
            borderRadius: 25,
            marginLeft: 46
          }}
        ></MaterialCard121>
        <MaterialCard122
          style={{
            height: 206,
            width: 359,
            borderRadius: 25,
            marginLeft: 53
          }}
        ></MaterialCard122>
      </Product2Row>
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
const Product5Row = styled.div`
  height: 206px;
  flex-direction: row;
  display: flex;
  margin-top: 572px;
  margin-left: 372px;
  margin-right: 372px;
`;

const Navbar1 = styled.div`
  top: 5px;
  left: 0px;
  width: 1920px;
  height: 68px;
  position: absolute;
  background-color: rgba(143,66,183,1);
  flex-direction: row;
  display: flex;
`;

const ProfileButton = styled.div`
  top: 0px;
  left: 0px;
  width: 56px;
  height: 56px;
  position: absolute;
  border: none;
`;

const ProfileIconStack = styled.div`
  width: 56px;
  height: 56px;
  margin-left: 610px;
  position: relative;
`;

const LogoutButton = styled.div`
  top: 0px;
  left: 0px;
  width: 100px;
  height: 36px;
  position: absolute;
  border: none;
`;

const LogoutIconStack = styled.div`
  width: 100px;
  height: 36px;
  margin-left: 9px;
  margin-top: 10px;
  position: relative;
`;

const SearchBar1Row = styled.div`
  height: 57px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 34px;
  margin-left: 402px;
  margin-top: 5px;
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
  margin-top: -783px;
  position: relative;
`;

const Product2Row = styled.div`
  height: 206px;
  flex-direction: row;
  display: flex;
  margin-top: 228px;
  margin-left: 372px;
  margin-right: 372px;
`;

export default HomePageLogged;
