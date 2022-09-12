import React from "react";
import MyPageChart from "./MyPageChart";
import Profile from "./Profile";
import styled from "styled-components";

const MyPage = () => {
  return (
    <>
      <MyPageWrapper>
        <Profile></Profile>
        <MyPageChart></MyPageChart>
      </MyPageWrapper>
    </>
  );
};

const MyPageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 0 0 0;
  background-color: ${({ theme }) => theme.lightgray};
`;

export default MyPage;
