import styled from "styled-components"
import Menubar from '../menubar.js';
import { D, Ti } from "./Board_style";
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";





const Container = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    padding: 20px;
    border-radius: 5px;

   
`;

const Title = styled.div`
  border-style: none;
`;

const Title2 = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`
const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  div {
    padding: 8px;
    border: 1px solid lightgray;
    box-sizing: border-box;

    
  }
`
const Head = styled.div`
  width: 500px;
  background-color: lightblue;
`

const Content = styled.div`
  width: 1500px;
`

const Head2 = styled.div`
  width: 500px;
  background-color: lightblue;
`

const Content2 = styled.div`
width: 3600px;
`

const Button = styled.div`
  border-style: none;
  align-items: right;
  margin-top: 20px;

  button {
    cursor: pointer;
    padding: 8px 16px;
    font-size: 1rem;
    border: 1px solid transparent;
    border-radius: 4px;
    transition: background-color 0.3s ease;
  }

  button:hover {
    filter: brightness(110%);
  }
`
const Delete = styled.button`
  color: #dc2626;
  background-color: #fde2e2;
`
const List = styled.button`
  color: #3b82f6;
  background-color: #dbeafe;
`











function Board_detail() {

  const [posts, setPosts] = useState([]);
  const { postId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // 포스트를 불러오는 API 엔드포인트
        const apiUrl = `http://${process.env.REACT_APP_SERVERPORT}/boardList/${postId}/api`;

        // 서버에서 데이터 가져오기
        const response = await fetch(apiUrl);

        // 요청이 성공적인지 확인
        if (!response.ok) {
          throw new Error(`에러: ${response.status}`);
        }

        // JSON 데이터 파싱
        const data = await response.json();
        // 불러온 포스트로 상태 업데이트
        setPosts(data);
      } catch (error) {
        console.error('포스트를 불러오는 중 에러 발생:', error.message);
        // 에러 처리 (에러 메시지 표시, 재시도 로직 등)
      }
    };

    // 컴포넌트가 마운트될 때 fetchPosts 함수 호출
    fetchPosts();
  }, []); // 빈 의존성 배열은 useEffect가 한 번만 실행되도록 합니다.

  const handleDelete = (postId) => {
    const isConfirmed = window.confirm('정말 삭제하시겠습니까?');

    if (isConfirmed) {
      // 게시물 삭제 API 호출
      fetch(`http://${process.env.REACT_APP_SERVERPORT}/delete/${postId}`, {
        credentials: 'include',
      })
        .then(response => {
          if (response.ok) {
            // 삭제가 성공하면 게시판 페이지로 이동
            return response.text();
            navigate('/board');
          } else {
            // 삭제가 실패한 경우에 대한 처리
            console.error('게시물 삭제 실패');
          }
        })
        .then((data)=> {
          alert(data);
          if(data === "success"){
              window.location.href = `/${posts.type}`;
          }
      })  
        .catch(error => {
          console.error('에러 발생:', error);
        });
    }
  };

  const redirectToUrl = () => {
    // 여기에 이동하고자 하는 URL을 지정합니다.
    const targetUrl = "/board";

    // 지정된 URL로 이동합니다.
    window.location.href = targetUrl;
  };

  let displayType;
  if (posts.type === 'board') {
    displayType = '게시판';
  } else if (posts.type === 'qna') {
    displayType = 'QnA';
  } else if (posts.type === 'notice') {
    displayType = '공지사항';
  } else {
    displayType = '다른 유형';
  }



  return (
    <D>
      <Menubar />

      <Ti>
        <br></br>
        <p>게시판</p>
        <br></br>
      </Ti>

      <Container>

        <Title>
          <Title2>게시판 관리</Title2>
        </Title>

        <Form>
          <Head>글 유형</Head>
          <Content>{displayType}</Content>

          <Head>등록일</Head>
          <Content>{posts.createdAt}</Content>
        </Form>

        <Form>
          <Head>제목</Head>
          <Content>{posts.title}</Content>

          <Head>조회</Head>
          <Content>{posts.count}</Content>
        </Form>

        <Form>
          <Head2>이름</Head2>
          <Content2>{posts.User}</Content2>
        </Form>

        <Form>
          <Head2>내용</Head2>
          <Content2>{posts.content}</Content2>
        </Form>

        <Button>
          <Delete onClick={() => handleDelete(postId)}>삭제</Delete>
          <List onClick={redirectToUrl}>목록</List>
        </Button>





      </Container>
    </D>
  )
}


export default Board_detail;