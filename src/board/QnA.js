import { Link } from 'react-router-dom';
import { D, Ti, Fi, Ta, Tr, Nt, Pg } from './Board_style.js';
//import './Board.css';
import Menubar from '../menubar.js';
import React, { useState, useEffect } from 'react';

function Board() {
  const [boardData, setBoardData] = useState([]);

  useEffect(() => {
    // API 호출하여 데이터 가져오기
    fetch(`http://${process.env.REACT_APP_SERVERPORT}/boardQnaList`)
      .then((response) => response.json())
      .then((data) => {
        // 가져온 데이터를 상태에 저장
        setBoardData(data.posts);
      })
      .catch((error) => {
        console.error('Error fetching board data:', error);
      });
  }, []);
  return (
    <D>
      <Menubar />
      <Ti>
        <br></br>
        <p>게시판</p>
        <br></br>
      </Ti>
      <Fi>
        <div className="filter_title">
          <form method="get">
            <select>
              <option value="name">제목</option>
              <option value="writer">작성자</option>
              <option value="content">본문</option>
            </select>
            <input type="text" name="search" size="30" placeholder="검색어를 입력하세요" />
            <button>검색</button>
          </form>
        </div>
        <div className="filter_sort">
          <form method="get">
            <select>
              <option value="view">조회수 순</option>
              <option value="new">최신 순</option>
              <option value="old">오래된 순</option>
            </select>
          </form>
        </div>
        <div className="total">
          Total - 건
        </div>
      </Fi>
      <Ta>
        <thead>
          <tr>
            <th>번호</th>
            <th className="title">제목</th>
            <th>글쓴이</th>
            <th>조회수</th>
            <th>작성 날짜</th>
          </tr>
        </thead>
        <tfoot>
          <tr></tr>
        </tfoot>
        <tbody>
          {boardData.map(post => (
            <Tr key={post.id}>
              <td>{post.id}</td>
              <td>
                <a href={`boardList/${post.id}`}>{post.title}</a>
              </td>
              <td>{post.User}</td>
              <td>{post.count}</td>
              <td>{post.createdAt}</td>
            </Tr>
          ))}

        </tbody>
      </Ta>
      <Nt><Link to="/newpost">글쓰기</Link></Nt>
      <Pg>
        <div className="active">&lt;</div>
        <div className="active">1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div className="active">&gt;</div>
      </Pg>
    </D>
  );
}

export default Board;