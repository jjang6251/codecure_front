import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Menu, Dropdown, Button } from 'antd'; // antd 라이브러리 사용
import { DownOutlined } from '@ant-design/icons';

const MenuL = styled.h1`
    cursor: pointer;
    margin-top: 50px;
    margin-right: 150px;

    &:hover {
        color: red;
        transition: transform 0.3s;
        transform: scale(1.2);
    }
`;

const Div = styled.div`
    max-height: 100vh;
    overflow: auto;
    width: 1510px;
    margin: 0 auto;
    display: flex;
    align-items: center;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-use-select: none;
    user-select: none;

    a {
        color: black;
        text-decoration: none;
    }
`;

const Logo = styled.div`
    cursor: pointer;
    margin-top: 35px;
    margin-right: 200px;
    margin-left: 100px;
`;

const Logout = styled.div`
    cursor: pointer;
    width: "80px";
    border-radius: 20px;
    font-size: 20px;
    padding: 15px;
    margin-top: 30px;
    margin-left: 30px;
    background-color: gray;
    font-weight: bold;

    button {
        color: white;
        text-align: center;
        text-decoration: none;
        transition: transform 0.5s;
        display: flex;

        &:hover {
            transform: scale(1.2);
        }
    }
    &:active {
        background-color: skyblue;
    }
`

const Login = styled.div`
    cursor: pointer;
    width: "80px";
    border-radius: 20px;
    font-size: 20px;
    padding: 15px;
    margin-top: 30px;
    margin-left: 30px;
    background-color: gray;
    font-weight: bold;

    a {
        color: white;
        text-align: center;
        text-decoration: none;
        transition: transform 0.5s;
        display: flex;

        &:hover {
            transform: scale(1.2);
        }
    }

    &:active {
        background-color: skyblue;
    }
`;

function Menubar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태를 저장하는 상태(State)
    const [username, setUsername] = useState(''); // 사용자 이름을 저장하는 상태 추가

    useEffect(() => {
        const checkLoginStatus = async () => {
            try {
                const response = await fetch(`http://${process.env.REACT_APP_SERVERPORT}/checkLogin`, {
                    method: 'GET',
                    credentials: 'include'
                }); // 서버에서 로그인 상태를 확인하는 API 엔드포인트 호출
                const data = await response.json();
                setIsLoggedIn(data.isLoggedIn); // 서버에서 받은 로그인 상태에 따라 상태 업데이트
                setUsername(data.username);
            } catch (error) {
                console.error('로그인 상태를 확인하는 중 오류가 발생했습니다:', error);
            }
        };

        checkLoginStatus(); // 컴포넌트가 마운트될 때 로그인 상태 확인
        // console.log('페이지 로딩');
    }, []);

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUsername('');
        fetch(`http://${process.env.REACT_APP_SERVERPORT}/logout`, {
            method: 'GET',
            credentials: 'include'
        });
    };

    const menu = (
        <Menu>
            <Menu.Item>
                <Link to = '/profile'>회원정보</Link>
            </Menu.Item>
            <Menu.Item onClick={handleLogout}>로그아웃</Menu.Item>
        </Menu>
    )
    return (
        <Div>
            <Logo>
                <Link to="/">
                    <img alt="codecure_logo" src="/images/logo.png" width="100px" height="100px" />
                </Link>
            </Logo>
            <Link to="/introduce"><MenuL>소개</MenuL></Link>
            <Link to="/announce"><MenuL>공지</MenuL></Link>
            <Link to="/board"><MenuL>게시판</MenuL></Link>
            <Link to="/QnA"><MenuL>Q&A</MenuL></Link>
            {isLoggedIn ? (
                    <Dropdown overlay={menu}>
                        <Button>{username} <DownOutlined/></Button>
                    </Dropdown>
            ): (
                    <Login>
                <Link to = "/login">로그인</Link>
            </Login >
            )
}
            
        </Div >
    );
}

export default Menubar;
