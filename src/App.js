import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './main';
import Announce from './board/announce';
import Board from './board/board';
import QnA from './board/QnA';
import Login from './login';
import SignUp from './signup';
import FindPW from './findPW';
import Introduce from './board/introduce';
import Newpost from './newpost';
import Notfound from './notfound';
import Board_detail from './board/board_detail'

function App() {
	
	return (
		
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Main />}></Route>
				<Route path="/introduce" element={<Introduce />}></Route>
				<Route path="/notice" element={<Announce />}></Route>
				<Route path="/board" element={<Board />}></Route>
				<Route path="/qna" element={<QnA />}></Route>
				<Route path="/newpost" element={<Newpost />}></Route>
				<Route path="/login" element={<Login />}></Route>
				<Route path="/signup" element={<SignUp />}></Route>
				<Route path="/findPW" element={<FindPW />}></Route>
				<Route path="/*" element={<Notfound />}></Route>
				<Route path="boardList/:postId" element={<Board_detail />}></Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;