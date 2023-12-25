import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Menubar from './menubar.js';
import { D } from './board/Board_style.js';
import styled from 'styled-components';

const Ed = styled.form`
    margin: 45px auto;
    width: 1000px;
    height: 800px;
`
const Sl = styled.select`
    margin: 10px;
    padding: 5px;
    border-radius: 5px;
    font-weight: bold;
`
const Tt = styled.input`
    padding: 10px;
    margin-left: 10px;
    border: none;
    font-size: 30px;
    width: 950px;
`
const Bt = styled.button`
    cursor: pointer;
    font-weight: bold;
    background-color: skyblue;
    border: 1px solid black;
    text-align: center;
    border-radius: 5px;
    padding: 5px;
    margin-top: 50px;

    &:hover {
        color: red;
    }
    &:first-child {
        margin-left: 850px;
        margin-right: 15px;
    }
`

function Newpost() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [boardType, setBoardType] = useState('');

    const handleContentChange = (newContent) => {
        const strippedContent = newContent.replace(/<p>|<\/p>/g, '')
        setContent(strippedContent);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const request = {
            title: title,
            content: content,
            type: boardType
        };

        console.log(request);

        fetch(`http://${process.env.REACT_APP_SERVERPORT}/boardWrite`, {
            credentials: 'include',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(request)
        })
            // .then(() => {
            //     console.log(request);
            //     // 폼 초기화
            //     setTitle('');
            //     setContent('');
            //     setBoardType('');
            //     // 페이지 이동
            //     window.location.href = '/boardList';
            // })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <D>
            <Menubar />
            <Ed onSubmit={handleSubmit}>
                <Sl value={boardType} onChange={(e) => setBoardType(e.target.value)}>
                    <option>--카테고리--</option>
                    <option value="notice">공지사항</option>
                    <option value="board">게시판</option>
                    <option value="qna">Q&A</option>
                </Sl>
                <Tt
                    type="text"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="제목을 입력하세요"
                    required
                />
                <hr />
                <ReactQuill
                    style={{ height: "50%", direction: "ltr"}}
                    theme="snow"
                    value={content}
                    onChange={handleContentChange}
                    placeholder='내용을 입력하세요'
                />
                <span>
                    <Bt>임시 저장</Bt>
                </span>
                <Bt type="submit">완료</Bt>
            </Ed>
        </D>
    );
}

export default Newpost;

