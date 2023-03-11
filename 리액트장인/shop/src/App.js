import './App.css';
// import 작명 from '이미지경로'
import  작명 from './img/bg.png';
import { useState } from "react"; 
import {Button, Navbar, Nav, Container, Row, Col} from 'react-bootstrap';
// export 단일
// import 작명 from './data.js';
// export 여러개 -> 작명못함 원래 변수 그래도 적어줘야함.
// import {a, b} from './data.js';

import data from './data.js';

// <img src={process.env.PUBLIC_URL + '/logo192.png'} /> public 폴더안에 img 사용시 권장 방식.

function App() {
  let [shoes] = useState(data);
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* <div className="main-bg" style={{backgroundImage : `url(${작명})`}}></div> */}
      <div className="main-bg"></div>
      <Container>
      <Row>
        {
          shoes.map(function(data, num){
            return(
              <Product shoes={shoes} num={num}/>
            )
          })
        }
        {/* <Col>
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%"/>
          <h4>{shoes[0].title}</h4>
          <p>{shoes[0].content}</p>
        </Col>
        <Col>
          <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="80%"/>
          <h4>{shoes[1].title}</h4>
          <p>{shoes[1].content}</p>
        </Col>
        <Col>
          <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="80%"/>
          <h4>{shoes[2].title}</h4>
          <p>{shoes[2].content}</p>
        </Col> */}
      </Row>
    </Container>
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

export default App;
