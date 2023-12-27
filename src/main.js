import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';
import { D } from './board/Board_style.js';
//import './main.css';
import Menubar from './menubar.js';
import {Search} from './main_style.js';
import {Slogan} from './main_style.js';
import {SearchBox} from './main_style.js'
import {SearchBtn} from './main_style.js';
// import {Week} from './main_style.js';

export const ImgBox = styled.div`
    display: flex;
	margin-top: -100px;
	margin-left: 180px;
`
export const Img = styled.img`
    margin-right: 30px;
    width: 300px;
	height: 360px;
	opacity: 0.8;
`;

function Main() {
	return (
		<D>
			<Menubar />
			<SearchBox>
				<Search placeholder="검색어를 입력하세요"/>
				<SearchBtn >
					입력
				</SearchBtn>
			</SearchBox>
			<Slogan>
				Cure your brain, with CodeCure
			</Slogan>
			<ImgBox>
				<Img alt="1.png" src="/images/4.jpeg"/>
				<Img alt="2.png" src="/images/2.jpeg"/>
				<Img alt="3.png" src="/images/3.jpeg"/>
				<Img alt="4.png" src="/images/1.jpeg"/>
			</ImgBox>
		</D>
		
	);
};

export default Main;