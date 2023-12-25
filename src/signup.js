import React from 'react'
//import './signup.css'
import Menubar from './menubar.js';
import { D } from './board/Board_style.js';
import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    align-items: center;
`
const Bu = styled.button`
    background-color: yellowgreen;
    color: white;
    font-weight: bold;
    width: 5rem;
    height: 50px;
    padding: 5px 5px;
    margin-left: 5px;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
        background-color: goldenrod;
    }
`
const Sb = styled.div`
    margin: auto auto;
    bottom: 30%;
    width: 500px;
    padding: 40px;
    box-sizing: border-box;
    font-weight: bold;

    h2 {
        font-size: 25px;
        color:darkblue;
    }
    p {
        margin-bottom: 5px;
    }
    input {
        width: 100%;
        height: 50px;
        padding: 0 10px;
        box-sizing: border-box;
        border-radius: 6px;
        background-color: lightgrey;

        &::placeholder {
            color: grey;
        }
        &[type="submit"] {
            cursor: pointer;
            color: white;
            font-size: 16px;
            font-weight: bold;
            background-color: darkblue;
            margin-top: 10px;
        }
    }
`

function SignUp() {
    return (
        <D>
            <Menubar />
            <Sb>
                <h2>회원가입</h2>
                <form method="post">
                    <p>아이디</p>
                    <Div>
                        <input type="text" name="id" placeholder="아이디 입력 (특수문자 제외 알파벳 6~20자)"></input>
                        <Bu type="button" name="idcheck" onClick='idCheck()'>중복 확인</Bu>
                        <input type="hidden" name="id_nocheck" value="0"></input>
                    </Div>
                    <p>비밀번호</p>
                    <input type="password" name="pw" placeholder="비밀번호 입력 (문자, 숫자, 특수문자 포함 8~20자)"></input>
                    <p>비밀번호 확인</p>
                    <input type="password" name="pwcheck" placeholder="비밀번호를 다시 입력하세요."></input>
                    <p>이름</p>
                    <input type="text" name="name" placeholder="이름을 입력하세요."></input>
                    <p>전화번호</p>
                    <input type="text" name="phone" placeholder="휴대폰 번호 입력 ( ' - ' 제외하고 입력)"></input>
                    <input type="submit" value="가입하기"></input>
                </form>
            </Sb>
        </D>
    );
}

export default SignUp;