import styled from 'styled-components';
import React from 'react';
import { D } from './Board_style.js';
import Menubar from '../menubar.js';


const Container = styled.div`
  display: flex;
  font-size: 25px;
  border: 1px solid black;
  background-color: lightgray;
  padding-top: -30px;
  margin-top: 30px;
  border-radius: 20px;
`;

const Introduce_Logo = styled.div`
  margin-top: 100px;
  width: 300px;
  padding-left: 60px;
  height: 300px;
  vertical-align: middle;
  align-items: center;
  display: flex;
  font-size: 25px;
`;

const Info_box = styled.div`
    margin-top: 50px; 
    line-height: 1.5;
    height: 650px;
`;

const MiniContainer = styled.ul`

  border-radius: 5px;
  padding-left: -20px;
  padding-right: 20px;
  padding-bottom: 20px;
`;

const BigContainer = styled.div`
  display: flex;
  justify-content: space-around; /* Adjust as needed */
`;

function Introduce() {
  return (
    <D>
      <Menubar />
      <Container>
        <Introduce_Logo>
          <img alt="codecure_logo" src="/images/logo.png" width="200px" height="200px" />
        </Introduce_Logo>
        <Info_box>
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <h2>"Cure your brain, with CodeCure"</h2>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CodeCure에서 공부하며 지식을 깨우치자는 의미를 갖고 있습니다.
            <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;현재 CodeCure에는 개발팀과 보안팀으로 이루어져 있습니다.
            <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;아래는 2023년 2학기에 진행된 활동입니다.
            <div>
              <BigContainer>
                <MiniContainer>
                  <h2>보안팀</h2>
                  <li>
                    악성코드 제작팀
                  </li>
                  <li>
                    네트워크 포렌식 팀
                  </li>
                  <li>
                    웹 퍼저 제작팀
                  </li>
                  <li>
                    기초 상식반 개설
                  </li>
                </MiniContainer>
                <MiniContainer>
                  <h2>개발팀</h2>
                  <li>웹사이트 개발팀</li>
                  <li>뉴스레터 설명</li>
                </MiniContainer>
              </BigContainer>
            </div>
          </div>
        </Info_box>
      </Container>
    </D>
  );
}

export default Introduce;