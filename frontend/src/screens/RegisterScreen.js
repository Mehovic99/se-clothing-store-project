import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialButtonShare from "../components/MaterialButtonShare";
import MaterialHelperTextBox2 from "../components/MaterialHelperTextBox2";
import MaterialHelperTextBox3 from "../components/MaterialHelperTextBox3";
import MaterialHelperTextBox4 from "../components/MaterialHelperTextBox4";
import MaterialHelperTextBox5 from "../components/MaterialHelperTextBox5";
import MaterialHelperTextBox6 from "../components/MaterialHelperTextBox6";
import MaterialButtonViolet3 from "../components/MaterialButtonViolet3";
import { Link } from "react-router-dom";

function RegisterScreen(props) {
  return (
    <Container>
      <Navbar1Stack>
        <Navbar1>
          <BackIcon1Stack>
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
            <BackButton1>
              <ButtonOverlay
                onClick={() => props.history.goBack()}
              ></ButtonOverlay>
            </BackButton1>
          </BackIcon1Stack>
        </Navbar1>
        <Logo1 src={require("../assets/images/two_aces.png")}></Logo1>
      </Navbar1Stack>
      <RegisterForum>
        <MaterialHelperTextBox2
          style={{
            height: 83,
            width: 375,
            marginLeft: 52
          }}
        ></MaterialHelperTextBox2>
        <MaterialHelperTextBox3
          style={{
            height: 83,
            width: 375,
            marginLeft: 52
          }}
        ></MaterialHelperTextBox3>
        <MaterialHelperTextBox4
          style={{
            height: 83,
            width: 375,
            marginTop: 6,
            marginLeft: 52
          }}
        ></MaterialHelperTextBox4>
        <MaterialHelperTextBox5
          style={{
            height: 83,
            width: 375,
            marginTop: 1,
            marginLeft: 52
          }}
        ></MaterialHelperTextBox5>
        <MaterialHelperTextBox6
          style={{
            height: 83,
            width: 375,
            marginTop: 7,
            marginLeft: 52
          }}
        ></MaterialHelperTextBox6>
        <RegisterIconStack>
          <MaterialButtonViolet3
            style={{
              height: 36,
              width: 96,
              position: "absolute",
              left: -1,
              top: 0,
              borderRadius: 25,
              shadowRadius: 0,
              boxShadow: "3px 3px 0px  1px rgba(0,0,0,1) "
            }}
          ></MaterialButtonViolet3>
          <Link to="/HomePageLogged">
            <RegisterButton>
              <ButtonOverlay></ButtonOverlay>
            </RegisterButton>
          </Link>
        </RegisterIconStack>
      </RegisterForum>
      <HaveAccountRow>
        <HaveAccount>Already have an account?</HaveAccount>
        <LoginNowStack>
          <LoginNow>LOGIN NOW</LoginNow>
          <Link to="/LoginScreen">
            <BackToLoginBtn>
              <ButtonOverlay></ButtonOverlay>
            </BackToLoginBtn>
          </Link>
        </LoginNowStack>
      </HaveAccountRow>
      <RegisterTitle>REGISTER</RegisterTitle>
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

const BackButton1 = styled.div`
  top: 0px;
  left: 0px;
  width: 56px;
  height: 56px;
  position: absolute;
  border: none;
`;

const BackIcon1Stack = styled.div`
  width: 56px;
  height: 56px;
  margin-top: 7px;
  margin-left: 22px;
  position: relative;
`;

const Logo1 = styled.img`
  top: 0px;
  left: 914px;
  width: 87px;
  height: 79px;
  position: absolute;
  object-fit: contain;
`;

const Navbar1Stack = styled.div`
  width: 1920px;
  height: 79px;
  margin-top: -5px;
  position: relative;
`;

const RegisterForum = styled.div`
  width: 486px;
  height: 510px;
  background-color: #E6E6E6;
  border-radius: 25px;
  flex-direction: column;
  display: flex;
  margin-top: 225px;
  margin-left: 694px;
  box-shadow: 3px 3px 30px  1px rgba(0,0,0,1) ;
`;

const RegisterButton = styled.div`
  top: 0px;
  left: 4px;
  width: 87px;
  height: 36px;
  position: absolute;
  border: none;
`;

const RegisterIconStack = styled.div`
  width: 96px;
  height: 36px;
  margin-top: 23px;
  margin-left: 203px;
  position: relative;
`;

const HaveAccount = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 34px;
  width: 323px;
  font-size: 28px;
  margin-left: -1px;
`;

const LoginNow = styled.span`
  font-family: Roboto;
  top: 0px;
  left: -1px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(0,93,255,1);
  height: 27px;
  width: 194px;
  font-size: 28px;
`;

const BackToLoginBtn = styled.div`
  top: 7px;
  left: -1px;
  width: 155px;
  height: 27px;
  position: absolute;
  border: none;
`;

const LoginNowStack = styled.div`
  width: 194px;
  height: 34px;
  margin-left: 1px;
  position: relative;
`;

const HaveAccountRow = styled.div`
  height: 34px;
  flex-direction: row;
  display: flex;
  margin-top: 26px;
  margin-left: 703px;
  margin-right: 700px;
`;

const RegisterTitle = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 88px;
  width: 365px;
  font-size: 80px;
  margin-top: -658px;
  margin-left: 755px;
`;

export default RegisterScreen;
