import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import React, { Component } from 'react';

function App() {
  // 자료 잠깐 저장할 땐 변수 or state
  let post = "강남 우동 맛집";
  // a -> 보관한 data, b -> state 변경을 도와주는 변수.
  // state를 쓰면 변수값이 바뀌어도 html에서 자동 재렌더링이 됨.(일반 변수는 변경되어도 재렌더링 X)
  // 자주변경될거같은 html 부분은 state로 만들어놓기
  // state 변경 -> state변경함수(새로운state값) -> state값을 갈아치워줌.
/*Destructuring 문법
  let [a, c] = [1, 2]*/

  let now = new Date();
  let year = now.getFullYear();
  let month = now.getMonth() + 1;
  let date = now.getDate();
  let hour = now.getHours();
  let minutes = now.getMinutes();
  
  let [글제목, b] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬독학']);
  let [따봉, c] = useState([0,0,0]);
  let [title, setTitle] = useState(0);
  let [modal, setModal] = useState(false);
  let [inputText, setInput] = useState('');

/*map() 사용법 -> 약간 forEach같음...
1. array 자료 갯수만큼 함수안의 코드 실행해줌.
2. 함수의 파라미터는 array안에 있던 자료임.
3. return에 뭐 적으면 array로 담아줌
  [1,2,3].map(function(a, i){
    a -> array 안의 데이터값,
    i -> 반복문 돌 때 마다 0부터 1씩 증가하는 정수
  });*/

  let logo = 'ReactBlog';

  


/*JSX문법 1 class 넣을 땐 className!
  JSX문법 2 변수넣을 땐 {중괄호} == 데이터바인딩!
  JSX문법 3 style 넣을 땐 style={{ 스타일명: '값'}} Object 형식으로
  
  onClick={} 안엔 함수이름을 넣어야함 ()=>{} 도 함수 만드는 문법 arrow 함수*/

  // return() 안에는 병렬로 태그 2개 이상 기입금지.

  // array / object 다룰 때 원본은 보존하는게 좋음.

  return (
    <div className="App">
      <div className="black-nav">
        <h4>{logo}</h4>
      </div>

      {/* <button onClick={() =>{
        let copy = [...글제목];
        copy.sort();
        b(copy);
      }}>가나다순 정렬</button>

      <button onClick={()=>{
        let copy = [글제목]; 이렇게하면 작동안됨.
        state변경함수의 특징
        - 기존state == 신규state의 경우 변경 X 

        array/object 특징
        - array/object 담은 변수엔 화살표만 저장됨.(aaray, object의 값이 어디에 있는지 가리키는 화살표!!)
        ex)변수1 & 변수2 화살표가 같으면 -> 변수1 == 변수2 비교해도 true 나옴(값은 바뀌지만 화살표는 변경 절대 안됨)
        
        [...글제목]; 에서 ... -> 화살표를 새로 만들어 주세요 (괄호를 벗기고 새로 입혀주세요!) 독립적인 array/object가 됨.
        let copy = [...글제목];
        copy[0] = '여자 코드 추천';
        b(copy);
      }}>글수정</button>
      <div className='list'>
        <h4 onClick={()=>{
          setModal(!modal)
        }}>
          {글제목[0]} <span onClick={()=>{c(따봉+1)}}>👍</span> {따봉} 
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div> */}
      {
        글제목.map(function(data, num){
          return (
            <div className='list' key = {num}>
            <h4 onClick={()=>{
              setModal(!modal)
              setTitle(num);
            }}>{data}<span onClick={(e)=>{
              // 이벤트버블링을 막을때 사용.
              e.stopPropagation();
              let copy = [...따봉];
              copy[num] = copy[num] + 1;
              c(copy);
              }}>👍
              </span>
              {따봉[num]}
              </h4>
            <p>{year}. {month}. {date} / {hour}:{minutes}</p>
            <button onClick={()=>{
              let copy = 글제목.filter((element)=>element !== data);
              // copy.splice(num, 1); => 라고 사용해도 삭제가능.
              let copy2 = [...따봉];
              copy2.shift();
              b(copy);
              c(copy2);
            }}>삭제</button>
          </div>
          )
        })
      }
      <input onChange={(e)=>{
        // state 변경함수는 늦게처리됨(비동기적으로 실행함.)
        setInput(e.target.value);
      }}></input>

      <button onClick={()=>{
        if(inputText !==''){
          let copy = [...글제목];
          let copy2 = [...따봉];
          copy2.unshift(0);
          // unshift()  array 맨 앞에 값 추가.
          copy.unshift(inputText);
          b(copy);
          c(copy2);
        }
      }}>추가</button>
      {/* html 안에 조건문 쓰고 싶으면 { 삼항연산자 }  쓰자  */}
      {
        // null 은 비어있는 html 대용으로 자주 사용.
        // 부모->자식 state 전송하는 법 참고) 일반 문자도 전송가능!, 이것 저것 전송가능
        // 1. <자식컴포넌트 작명={state이름}>
        // 2. 파라미터 등록 후 "파라미터.작명" 사용
        modal == true ?  <Modal 글제목={글제목} title={title}/> : null
      }
      <Modal2/>

    </div>
  );
}

/*컴포넌트 만드는법 -> 반복적인 html 축약할때, 큰 페이지들 만들때, 자주변경되는 UI들.
1. function 만들기           단점) state 가져다쓸 때 문제가생김.
2. return() 안에 html 담기
3.<함수명></함수명>쓰기

return() 안에 html 병렬기입하려면 
<div></div>로 감싸거나 <></>로 감싸라.*/
function Modal(props){
  return (
    <div className="modal">
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

// Class(변수, 함수 보관하는 통)를 이용하여 컴포넌트 만들기.
// 1. class 어쩌구 작성하고 컴포넌트 이름 작명합니다.
// 2. constructor, super, render 함수 3개 채워넣습니다. 기본 템플릿같은 것임 
// 3. 컴포넌트는 길고 복잡한 html 축약할 때 쓴다고 했습니다. return 안에 축약할 html 적으면 됩니다.
class Modal2 extends React.Component {
//   부모가 보낸 props를 출력하고 싶으면
// 1. constructor, super에 props 파라미터 등록하고
// 2. this.props 쓰면 props 나옵니다. ex)this.props.props이름
  constructor(props){
    super(props);
  // 1. this.state 라는 변수만들고 거기 안에다가 object 형식으로 state 쭉 나열하면 됩니다.
  // object는 자료 여러개를 { 자료이름 : 자료값 } 형식으로 저장할 수 있는 자료형입니다.
  // 자바스크립트기초 몰라서 object를 모르면 어쩔 수 없고 그냥 저 형식에 맞추기만 하면 됩니다. 
    this.state = {
        name : 'kim',
        age : 20
      }
    }
    render(){
      return(
  // 2. 그리고 state 사용하고 싶으면 this.state.state이름 쓰면 됩니다. 
        <div>안녕 {this.state.age}
          <button onClick={()=>{
// state변경하고 싶으면 this.setState라는 기본함수를 가져다가 씁니다.
// 소괄호안에 새로운 state 넣으면 그걸로 기존 state를 업데이트해줍니다.
// 갈아치워주는건 아니고 차이점만 잘 변경해줍니다.

            this.setState({age : 21})
            // 부모가 보낸 props를 출력하려면.
            // this.props.props이름
          }}>버튼</button>        
        </div>
      )
    }
}



export default App;
