import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialButtonShare from "../components/MaterialButtonShare";
import { Link } from "react-router-dom";
import MaterialButtonViolet6 from "../components/MaterialButtonViolet6";

function UserProfile(props) {
  return (
    <Container>
      <Navbar1StackStackStack>
        <Navbar1StackStack>
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
                <Link to="/HomePageLogged">
                  <BackButton1>
                    <ButtonOverlay></ButtonOverlay>
                  </BackButton1>
                </Link>
              </BackIcon1Stack>
            </Navbar1>
            <Logo1 src={require("../assets/images/two_aces.png")}></Logo1>
          </Navbar1Stack>
          <ProfileImageStack>
            <ProfileImage>
              <ProfilePicture>Profile Picture</ProfilePicture>
            </ProfileImage>
            <MaterialButtonViolet6
              style={{
                height: 36,
                width: 100,
                position: "absolute",
                left: 161,
                top: 326,
                borderRadius: 25,
                shadowRadius: 0,
                boxShadow: "3px 3px 0px  1px rgba(0,0,0,1) "
              }}
            ></MaterialButtonViolet6>
            <Link to="/EditUserProfile">
              <EditButton>
                <ButtonOverlay></ButtonOverlay>
              </EditButton>
            </Link>
          </ProfileImageStack>
        </Navbar1StackStack>
        <UserName>USER NAME:</UserName>
        <UserSurname>USER SURNAME:</UserSurname>
        <TestName1>TestName1</TestName1>
        <TestSurname1>TestSurname1</TestSurname1>
        <EMail>E-MAIL:</EMail>
        <Description>DESCRIPTION:</Description>
        <TestEmail1>TestEmail1</TestEmail1>
        <TestDescription1>TestDescription1</TestDescription1>
      </Navbar1StackStackStack>
      <RecentPurchases>RECENT PURCHASES:</RecentPurchases>
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
  top: 0px;
  left: 0px;
  width: 1920px;
  height: 79px;
  position: absolute;
`;

const ProfileImage = styled.div`
  top: 0px;
  left: 0px;
  width: 421px;
  height: 344px;
  position: absolute;
  flex-direction: column;
  display: flex;
  background-image: url(${require("../assets/images/ProfilePicture.png")});
  background-size: cover;
`;

const ProfilePicture = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 39px;
  width: 182px;
  font-size: 28px;
  margin-top: 277px;
  margin-left: 120px;
`;

const EditButton = styled.div`
  top: 326px;
  left: 161px;
  width: 100px;
  height: 36px;
  position: absolute;
  border: none;
`;

const ProfileImageStack = styled.div`
  top: 72px;
  left: 0px;
  width: 421px;
  height: 362px;
  position: absolute;
`;

const Navbar1StackStack = styled.div`
  top: 0px;
  left: 0px;
  width: 1920px;
  height: 434px;
  position: absolute;
`;

const UserName = styled.span`
  font-family: Roboto;
  top: 145px;
  left: 421px;
  position: absolute;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  height: 40px;
  width: 244px;
  font-size: 28px;
`;

const UserSurname = styled.span`
  font-family: Roboto;
  top: 244px;
  left: 421px;
  position: absolute;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  height: 34px;
  width: 219px;
  font-size: 28px;
`;

const TestName1 = styled.span`
  font-family: Roboto;
  top: 185px;
  left: 421px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 27px;
  width: 133px;
  font-size: 20px;
`;

const TestSurname1 = styled.span`
  font-family: Roboto;
  top: 287px;
  left: 421px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 25px;
  width: 133px;
  font-size: 20px;
`;

const EMail = styled.span`
  font-family: Roboto;
  top: 145px;
  left: 890px;
  position: absolute;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  height: 32px;
  width: 107px;
  font-size: 28px;
`;

const Description = styled.span`
  font-family: Roboto;
  top: 244px;
  left: 890px;
  position: absolute;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  height: 34px;
  width: 213px;
  font-size: 28px;
`;

const TestEmail1 = styled.span`
  font-family: Roboto;
  top: 185px;
  left: 890px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 27px;
  width: 107px;
  font-size: 20px;
`;

const TestDescription1 = styled.span`
  font-family: Roboto;
  top: 287px;
  left: 890px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 22px;
  width: 191px;
  font-size: 20px;
`;

const Navbar1StackStackStack = styled.div`
  width: 1920px;
  height: 434px;
  margin-top: -4px;
  position: relative;
`;

const RecentPurchases = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  height: 57px;
  width: 262px;
  font-size: 28px;
  margin-top: 31px;
  margin-left: 421px;
`;

export default UserProfile;
