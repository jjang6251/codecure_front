import { Link } from 'react-router-dom';
import { D } from './board/Board_style.js';
//import './main.css';
import Menubar from './menubar.js';
import { Search } from './main_style.js';
import { Slogan } from './main_style.js';


import { SearchBtn } from './main_style.js';
// import {Week} from './main_style.js';

function Main() {
	
	return (
		<D>
			<Menubar />
			<Search placeholder="검색어를 입력하세요" />
			<SearchBtn >
				입력
			</SearchBtn>
			<Slogan>
				Cure your brain, with CodeCure
			</Slogan>
		</D>
	);
};

export default Main;