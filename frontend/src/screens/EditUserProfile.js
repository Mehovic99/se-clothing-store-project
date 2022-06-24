import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialButtonShare from "../components/MaterialButtonShare";
import { Link } from "react-router-dom";
import MaterialHelperTextBox8 from "../components/MaterialHelperTextBox8";
import MaterialHelperTextBox9 from "../components/MaterialHelperTextBox9";
import MaterialHelperTextBox10 from "../components/MaterialHelperTextBox10";
import MaterialHelperTextBox11 from "../components/MaterialHelperTextBox11";
import MaterialHelperTextBox12 from "../components/MaterialHelperTextBox12";
import MaterialStackedLabelTextbox from "../components/MaterialStackedLabelTextbox";
import MaterialButtonViolet7 from "../components/MaterialButtonViolet7";
import MaterialButtonViolet8 from "../components/MaterialButtonViolet8";
import MaterialButtonViolet9 from "../components/MaterialButtonViolet9";
import MaterialButtonViolet10 from "../components/MaterialButtonViolet10";

function EditUserProfile(props) {
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
            <Link to="/UserProfile">
              <BackButton1>
                <ButtonOverlay></ButtonOverlay>
              </BackButton1>
            </Link>
          </BackIcon1Stack>
        </Navbar1>
        <Logo1 src={require("../assets/images/two_aces.png")}></Logo1>
      </Navbar1Stack>
      <UserDetailsStackStackStackStack>
        <UserDetailsStackStackStack>
          <UserDetailsStackStack>
            <UserDetailsStack>
              <UserDetails>USER DETAILS</UserDetails>
              <MaterialHelperTextBox8
                style={{
                  height: 90,
                  width: 375,
                  position: "absolute",
                  left: 0,
                  top: 61
                }}
              ></MaterialHelperTextBox8>
            </UserDetailsStack>
            <NewProfilePicStack>
              <NewProfilePic
                src={require("../assets/images/ProfilePicture1.png")}
              ></NewProfilePic>
              <ProfilePicture>PROFILE PICTURE</ProfilePicture>
            </NewProfilePicStack>
          </UserDetailsStackStack>
          <MaterialHelperTextBox9
            style={{
              height: 90,
              width: 375,
              position: "absolute",
              left: 0,
              top: 198
            }}
          ></MaterialHelperTextBox9>
          <MaterialHelperTextBox10
            style={{
              height: 90,
              width: 375,
              position: "absolute",
              left: 0,
              top: 340
            }}
          ></MaterialHelperTextBox10>
          <MaterialHelperTextBox11
            style={{
              height: 90,
              width: 375,
              position: "absolute",
              left: 0,
              top: 485
            }}
          ></MaterialHelperTextBox11>
          <MaterialHelperTextBox12
            style={{
              height: 90,
              width: 375,
              position: "absolute",
              left: 0,
              top: 617
            }}
          ></MaterialHelperTextBox12>
          <MaterialStackedLabelTextbox
            style={{
              height: 60,
              width: 375,
              position: "absolute",
              left: 464,
              top: 68
            }}
          ></MaterialStackedLabelTextbox>
        </UserDetailsStackStackStack>
        <MaterialButtonViolet7
          style={{
            height: 36,
            width: 100,
            position: "absolute",
            left: 652,
            top: 671,
            borderRadius: 25,
            shadowRadius: 0,
            boxShadow: "3px 3px 0px  1px rgba(0,0,0,1) "
          }}
        ></MaterialButtonViolet7>
      </UserDetailsStackStackStackStack>
      <ConfirmIconStack>
        <MaterialButtonViolet8
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
        ></MaterialButtonViolet8>
        <Link to="/HomePage">
          <ConfirmButton>
            <ButtonOverlay></ButtonOverlay>
          </ConfirmButton>
        </Link>
      </ConfirmIconStack>
      <CancleIconStack>
        <MaterialButtonViolet9
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
        ></MaterialButtonViolet9>
        <Link to="/UserProfile">
          <CancleButton>
            <ButtonOverlay></ButtonOverlay>
          </CancleButton>
        </Link>
      </CancleIconStack>
      <DeactivateIconStack>
        <MaterialButtonViolet10
          style={{
            height: 36,
            width: 100,
            position: "absolute",
            left: 0,
            top: 0,
            borderRadius: 25,
            shadowRadius: 0,
            boxShadow: "3px 3px 0px  0.97px rgba(0,0,0,1) "
          }}
        ></MaterialButtonViolet10>
        <Link to="/HomePage">
          <DeactivateButton>
            <ButtonOverlay></ButtonOverlay>
          </DeactivateButton>
        </Link>
      </DeactivateIconStack>
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
  width: 1920px;
  height: 79px;
  margin-top: -4px;
  position: relative;
`;

const UserDetails = styled.span`
  font-family: Roboto;
  top: 0px;
  left: 0px;
  position: absolute;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  height: 98px;
  width: 464px;
  font-size: 28px;
`;

const UserDetailsStack = styled.div`
  top: 0px;
  left: 0px;
  width: 464px;
  height: 151px;
  position: absolute;
`;

const NewProfilePic = styled.img`
  top: 0px;
  left: 0px;
  width: 624px;
  height: 530px;
  position: absolute;
  object-fit: cover;
`;

const ProfilePicture = styled.span`
  font-family: Roboto;
  top: 502px;
  left: 179px;
  position: absolute;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  height: 32px;
  width: 266px;
  font-size: 30px;
`;

const NewProfilePicStack = styled.div`
  top: 128px;
  left: 390px;
  width: 624px;
  height: 534px;
  position: absolute;
`;

const UserDetailsStackStack = styled.div`
  top: 0px;
  left: 0px;
  width: 1014px;
  height: 662px;
  position: absolute;
`;

const UserDetailsStackStackStack = styled.div`
  top: 0px;
  left: 0px;
  width: 1014px;
  height: 707px;
  position: absolute;
`;

const UserDetailsStackStackStackStack = styled.div`
  width: 1014px;
  height: 707px;
  margin-top: 35px;
  margin-left: 78px;
  position: relative;
`;

const ConfirmButton = styled.div`
  top: 0px;
  left: 0px;
  width: 100px;
  height: 36px;
  position: absolute;
  border: none;
`;

const ConfirmIconStack = styled.div`
  width: 100px;
  height: 36px;
  margin-top: 72px;
  margin-left: 216px;
  position: relative;
`;

const CancleButton = styled.div`
  top: 0px;
  left: 0px;
  width: 95px;
  height: 36px;
  position: absolute;
  border: none;
`;

const CancleIconStack = styled.div`
  width: 100px;
  height: 36px;
  margin-top: 18px;
  margin-left: 216px;
  position: relative;
`;

const DeactivateButton = styled.div`
  top: 0px;
  left: 0px;
  width: 100px;
  height: 36px;
  position: absolute;
  border: none;
`;

const DeactivateIconStack = styled.div`
  width: 100px;
  height: 36px;
  margin-left: 1756px;
  position: relative;
`;

export default EditUserProfile;
