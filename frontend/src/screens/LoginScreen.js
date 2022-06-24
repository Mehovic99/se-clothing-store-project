import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialButtonShare from "../components/MaterialButtonShare";
import { Link } from "react-router-dom";
import MaterialHelperTextBox from "../components/MaterialHelperTextBox";
import MaterialHelperTextBox1 from "../components/MaterialHelperTextBox1";
import MaterialButtonViolet2 from "../components/MaterialButtonViolet2";

function LoginScreen(props) {
  return (
    <Container>
      <Navbar1Stack>
        <Navbar1>
          <BackIconStack>
            <MaterialButtonShare
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
              icon="arrow-collapse-left"
            ></MaterialButtonShare>
            <Link to="/HomePage">
              <BackButton>
                <ButtonOverlay></ButtonOverlay>
              </BackButton>
            </Link>
          </BackIconStack>
        </Navbar1>
        <Logo1 src={require("../assets/images/two_aces.png")}></Logo1>
      </Navbar1Stack>
      <LoginForum>
        <MaterialHelperTextBox
          style={{
            height: 90,
            width: 375,
            marginTop: 20,
            marginLeft: 55
          }}
        ></MaterialHelperTextBox>
        <MaterialHelperTextBox1
          style={{
            height: 90,
            width: 375,
            marginTop: 34,
            marginLeft: 55
          }}
        ></MaterialHelperTextBox1>
        <LoginIconStack>
          <MaterialButtonViolet2
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
          ></MaterialButtonViolet2>
          <Link to="/HomePageLogged">
            <LoginButton>
              <ButtonOverlay></ButtonOverlay>
            </LoginButton>
          </Link>
        </LoginIconStack>
      </LoginForum>
      <LOgin>LOGIN</LOgin>
      <BelowBoxTextRow>
        <BelowBoxText>Forgot your password? Click</BelowBoxText>
        <ClickHereStack>
          <ClickHere>Here</ClickHere>
          <Link to="/ResetPassword">
            <ClickHereButton>
              <ButtonOverlay></ButtonOverlay>
            </ClickHereButton>
          </Link>
        </ClickHereStack>
      </BelowBoxTextRow>
      <NoAccountRow>
        <NoAccount>No account?</NoAccount>
        <RegisterStack>
          <Register>Register</Register>
          <Link to="/RegisterScreen">
            <RegisterButton>
              <ButtonOverlay></ButtonOverlay>
            </RegisterButton>
          </Link>
        </RegisterStack>
      </NoAccountRow>
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
  top: 4px;
  width: 1920px;
  height: 68px;
  position: absolute;
  background-color: rgba(143,66,183,1);
  left: 0px;
  flex-direction: column;
  display: flex;
`;

const BackButton = styled.div`
  top: 0px;
  left: 0px;
  width: 56px;
  height: 56px;
  position: absolute;
  border: none;
`;

const BackIconStack = styled.div`
  width: 56px;
  height: 56px;
  margin-top: 7px;
  margin-left: 22px;
  position: relative;
`;

const Logo1 = styled.img`
  top: 0px;
  left: 917px;
  width: 87px;
  height: 79px;
  position: absolute;
  object-fit: contain;
`;

const Navbar1Stack = styled.div`
  width: 1920px;
  height: 79px;
  margin-top: -4px;
  position: relative;
`;

const LoginForum = styled.div`
  width: 486px;
  height: 341px;
  background-color: #E6E6E6;
  border-radius: 25px;
  flex-direction: column;
  display: flex;
  margin-top: 328px;
  margin-left: 674px;
  box-shadow: 3px 3px 30px  1px rgba(0,0,0,1) ;
`;

const LoginButton = styled.div`
  top: 0px;
  left: 0px;
  width: 100px;
  height: 36px;
  position: absolute;
  border: none;
`;

const LoginIconStack = styled.div`
  width: 100px;
  height: 36px;
  margin-top: 43px;
  margin-left: 193px;
  position: relative;
`;

const LOgin = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 93px;
  width: 240px;
  font-size: 80px;
  margin-top: -462px;
  margin-left: 797px;
`;

const BelowBoxText = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 21px;
  width: 180px;
`;

const ClickHere = styled.span`
  font-family: Roboto;
  top: 0px;
  left: 0px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(0,93,255,1);
  height: 21px;
  width: 33px;
`;

const ClickHereButton = styled.div`
  top: 0px;
  left: 0px;
  width: 33px;
  height: 21px;
  position: absolute;
  border: none;
`;

const ClickHereStack = styled.div`
  width: 33px;
  height: 21px;
  position: relative;
`;

const BelowBoxTextRow = styled.div`
  height: 21px;
  flex-direction: row;
  display: flex;
  margin-top: 380px;
  margin-left: 681px;
  margin-right: 1026px;
`;

const NoAccount = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 23px;
  width: 84px;
`;

const Register = styled.span`
  font-family: Roboto;
  top: 0px;
  left: 0px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(0,93,255,1);
  height: 17px;
  width: 61px;
`;

const RegisterButton = styled.div`
  top: 0px;
  left: 0px;
  width: 61px;
  height: 17px;
  position: absolute;
  border: none;
`;

const RegisterStack = styled.div`
  width: 61px;
  height: 17px;
  position: relative;
`;

const NoAccountRow = styled.div`
  height: 23px;
  flex-direction: row;
  display: flex;
  margin-left: 681px;
  margin-right: 1094px;
`;

export default LoginScreen;
