import styled from 'styled-components';

export const D = styled.div`
  max-height: 100vh;
  overflow: auto;
  width:1510px;
  margin: 0 auto;
  
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-use-select: none;
  user-select: none;
`
export const Ti = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top:25px;
  margin-bottom:50px;

  p {
    width: 650px;
    padding: 10px;
    font-size: 30px;
    font-weight: bold;
    border: 3px solid black;
    flex-wrap: wrap;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const Fi = styled.div`
  margin-bottom:5px;
  display:flex;

  select {
    padding: 5px;
    border-radius: 5px;
    font-weight: bold;
    margin: 2px;
  }
  input {
    padding: 5px;
    margin: 2px;
  }
  button {
    padding: 5px;
    width: 3rem;
  }

  .filter_title {
    margin-left:200px;
  }
  .filter_sort {
    margin-left:550px;
  }
  .total {
    margin-top: 5px;
    margin-left:45px;
  }
`;
export const Ta = styled.table`
  border-collapse: collapse;
  margin:auto;
  width:75%;

  thead {
    border-top: 2px solid black;
    border-bottom: 2px solid black;
  
    th {
      width: 100px;
      font-size:20px;
      padding: 15px;
  
      &.title {
        width: 700px;
      }
    }
  }
  tfoot {
    border-bottom:2px solid black;
  }
`;
export const Tr = styled.tr`
  td {
    text-align: center;
    padding: 15px;
    width: 100px;
    border-bottom: 1px solid black;
  
    &.text_title {
      width: 700px;
      text-align: left;
    }
  }
  &:hover {
    cursor: pointer;
    background: lightgray;
  }
`;
export const Nt = styled.div`
  cursor: pointer;
  margin-left:1250px;
  margin-top : 15px;
  background-color: skyblue;
  border : 1px solid black;
  border-radius: 10px;
  padding : 5px;
  width: 50px;
  text-align: center;
  
  a {
    text-decoration: none;
    font-weight: bold;
    color: black;
    
    &:hover {
      color: red;
    }
  }
`;
export const Pg = styled.div`
  display:flex;
  margin-top:30px;
  justify-content: center;

  div {
    cursor: pointer;
    margin-right:5px;
    margin-left:5px;
    border:1px solid cornflowerblue;
    border-radius: 5px;
    font-weight: bold;
    font-size:20px;
    color:white;
    background-color: cornflowerblue;
    width:25px;
    height:25px;
    text-align: center;
  }

  .active {
    border:1px solid darkblue;
    background-color: darkblue;
  }
`;