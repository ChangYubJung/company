import './App.css';
// import 작명 from '이미지경로'
import  작명 from './img/bg.png';
import { useState } from "react"; 
import {Navbar, Nav, Container, Row, Col} from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from './routes/detail.js';
// export 단일
// import 작명 from './data.js';
// export 여러개 -> 작명못함 원래 변수 그래도 적어줘야함.
// import {a, b} from './data.js';

import data from './data.js';

// <img src={process.env.PUBLIC_URL + '/logo192.png'} /> public 폴더안에 img 사용시 권장 방식.

function App() {
  let [shoes] = useState(data);
  // 1. 페이지 이동도와주는 HOOK 함수.
  let navigate = useNavigate();
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>navigate('/')}>Home</Nav.Link>
            {/* useNavigate 이렇게 사용. */}
            <Nav.Link onClick={()=>navigate('/detail')}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* 페이지 이동 버튼 */}
      <Routes>
        {/* <Route></Route> 페이지 갯수만큼. */}
        <Route path="/" element={
          <>
          <div className="main-bg"></div>
          <Container>
            <Row>
              {
                shoes.map(function(data, num){
                  return(
                    <Product shoes={shoes} num={num} key={shoes[num].id}/>
                  )
                })
              }
            </Row>
          </Container>
          </>
        }/>
        {/* 페이지 여러개 만들고 싶으면 :URL파라미터를 사용하자. */}
        <Route path="/detail/:id" element={
          <Detail shoes={shoes}/>
        }/>
        {/* Nestd routes! Route 안에 Route */}
        <Route path="/about" element={<About/>}>
          <Route path="members" element={<div>멤버임</div>}/>
          <Route path="location" element={<div>위치정보임</div>}/>
        </Route>
        <Route path="/event" element={<Event/>}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>}/>
          <Route path="two" element={<div>생일기념 쿠폰받기</div>}/>
        </Route>
        <Route path="*" element={<div>404 Not Found!</div>}/>
      </Routes>
    </div>
  );
}

function Product(props){
  return(
      <Col>
        <img src={`https://codingapple1.github.io/shop/shoes${props.num+1}.jpg`} width="80%"/>
        <h4>{props.shoes[props.num].title}</h4>
        <p>{props.shoes[props.num].price}</p>
      </Col>
  )
}

function About(){
  return (
    <div>
      <p>회사정보임</p>
      {/* nestd routes의 element 보여주는 곳은 <Outler> */}
      <Outlet></Outlet>
    </div>
  )
}
function Event(){
  return (
    <div>
      <p>오늘의 이벤트</p>
      <Outlet></Outlet>
    </div>
  )
}


export default App;
