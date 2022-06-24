import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialButtonShare from "../components/MaterialButtonShare";
import { Link } from "react-router-dom";
import MaterialHelperTextBox7 from "../components/MaterialHelperTextBox7";
import MaterialButtonViolet4 from "../components/MaterialButtonViolet4";

function ResetPassword(props) {
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
            <Link to="/LoginScreen">
              <BackButton1>
                <ButtonOverlay></ButtonOverlay>
              </BackButton1>
            </Link>
          </BackIcon1Stack>
        </Navbar1>
        <Logo1 src={require("../assets/images/two_aces.png")}></Logo1>
      </Navbar1Stack>
      <RegisterForum1>
        <InputYourEmail>INPUT YOUR EMAIL</InputYourEmail>
        <MaterialHelperTextBox7
          style={{
            height: 90,
            width: 375,
            marginTop: 8,
            marginLeft: 68
          }}
        ></MaterialHelperTextBox7>
        <SubmitIconStack>
          <MaterialButtonViolet4
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
          ></MaterialButtonViolet4>
          <Link to="/LoginScreen">
            <SubmitButton>
              <ButtonOverlay></ButtonOverlay>
            </SubmitButton>
          </Link>
        </SubmitIconStack>
      </RegisterForum1>
      <PasswordReset>PASSWORD RESET</PasswordReset>
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
  left: 917px;
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

const RegisterForum1 = styled.div`
  width: 486px;
  height: 320px;
  background-color: #E6E6E6;
  border-radius: 25px;
  flex-direction: column;
  display: flex;
  margin-top: 395px;
  margin-left: 669px;
  box-shadow: 3px 3px 30px  1px rgba(0,0,0,1) ;
`;

const InputYourEmail = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 50px;
  width: 359px;
  font-size: 40px;
  margin-top: 33px;
  margin-left: 68px;
`;

const SubmitButton = styled.div`
  top: 0px;
  left: 0px;
  width: 99px;
  height: 36px;
  position: absolute;
  border: none;
`;

const SubmitIconStack = styled.div`
  width: 100px;
  height: 36px;
  margin-top: 36px;
  margin-left: 204px;
  position: relative;
`;

const PasswordReset = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 101px;
  width: 689px;
  font-size: 80px;
  margin-top: -498px;
  margin-left: 572px;
`;

export default ResetPassword;
