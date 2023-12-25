import React from 'react';
import { useNavigate } from 'react-router-dom';
import { D } from './board/Board_style.js';
import styled from 'styled-components';

const Nf = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 80vh;

    h1 {
        font-weight: bold;
        font-size: 150px;
        margin-bottom: 0;
    }
    P {
        font-size: 50px;
        font-weight: bold;
        margin-top: 0;
        margin-bottom: 2rem;
    }
`
const Bu = styled.button`
    margin: 0 10px;
    padding: 10px 20px;
    font-size: 20px;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: green;
        color: white;
    }
`

function Notfound() {
    const navigate = useNavigate();

    return (
        <D>
            <Nf>
                <div>
                    <h1>404</h1>
                    <p>Page Not Found</p>
                    <Bu onClick={() => { navigate(-1); }} >Go Back</Bu>
                    <Bu onClick={() => { navigate('/'); }}>Go Main</Bu>
                </div>
            </Nf>
        </D>
    );
};

export default Notfound;