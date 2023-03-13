import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
// css 파일 작명을 컴포넌트.module.css로 만들면 해당 컴포넌트에 종속되어 다른 js파일 간섭 x

// styled-components 장점
// 1. 스타일이 다른 js파일로 오염되지 않음(간섭 안함.)
// 2. css파일 따로 안 만들어도 됨.
// 3. 페이지 로딩시간 단축.

// 단점
// 1. js파일 매우 복잡해짐.
// 2. 중복스타일은 컴포넌트간 import 하기때문에 css와 다를 바가 없음.
// 3. 협업시 css 담당의 숙력도 이슈(styled-components 모를수도 있음.)-
import styled from 'styled-components';

// props로 컴포넌트 재활용가능.
// 기존 스타일 복사 가능 ex) let NewBtn = styled.button(YellowBtn)`커스텀도 가능함 `
// let YellowBtn = styled.button`
//     background: ${props => props.bg };
//     color: ${ props => props.bg == "blue" ? 'white' : 'black'};
//     padding: 10px;
//     `
//     <YellowBtn bg="blue">버튼</YellowBtn>

// let BlackDiv = styled.div`
//     background: black;
//     color: white;
//     padding: 20px
//     `

function Detail(props){
    // html 부터 다 렌더링 후에 동작함!
    // 어려운 연산, 서버에서 데이터가져오는 작업, 타이머 장착하는 작업 등에 useEffect 사용하면 좋을듯.
    useEffect(()=>{
        // mount, update시 여기 코드 실행됨
    })

    useEffect(()=>{
        // setTimeout 변수에 할당해서 사용 가능.
        let a = setTimeout(() => {
            setAlert(false);
        }, 2000)
        // clean up function 이라고 부름. -> mount시 실행 x, unmount시 실행 o
        return () =>{
            // useEffect동작 전에 실행되는 코드 장소. / 기존코드 지우는 코드를 많이 작성함.
            // 기존 요청전에 재 렌더링 되어 다시 요청될때 처음 요청은 지우는 코드 같은거 작성함.

            // 타이머 제거하는법.
            clearTimeout(a);
        }
        // [] 이거 있으면 더 정확함. (useEffect 실행조건을 넣을 수 있는 곳) / []만 하면 mount때만 1회 useEffect 실행.
        // es)[count] 적으면 count 라는 state 값이 변경할 때 useEffect 실행.
    }, [])

    // 빡통식 정리.
    // useEffect(()=>{ })  1. 재렌더링마다 코드실행하고 싶으면
    // useEffect(()=>{ }, [])  2. mount시 1회 코드실행하고 싶으면
    // useEffect(()=>{ 
    //     return() =>{
            
    //     }
    // }, [])  3. 컴포넌트가 삭제될때 코드실행하고 싶으면.

    // 숙제
    let [num, setNum] = useState(' ')
    useEffect(()=>{
        if(isNaN(num) == true){
            alert("숫자만 입력하세요")
        }
    }, [num])

    let {id} = useParams();
    let data = props.shoes.find(function(a){
        return a.id == id;
    });
    // let data2 = props.shoes.filter(function(a){
    //     return a.id == id;
    // });
    let [alert2, setAlert] = useState(true);
    return (
        // find 사용
        <div className="container">
            {   alert2 == true ? <div className="alert alert-warning">
                    2초이내 구매시 할인.
                </div> : null
            }
            <div className="row">
                <div className="col-md-6">
                    <img src={`https://codingapple1.github.io/shop/shoes${data.id + 1}.jpg`} width="100%" />
                </div>
                <div className="col-md-6">
                    <input onChange={(e)=>setNum(e.target.value)}></input>
                    <h4 className="pt-5">{data.title}</h4>
                    <p>{data.content}</p>
                    <p>{data.price}</p>
                    <button className="btn btn-danger">주문하기</button> 
                </div>
            </div>
        </div>   
        // filter 사용
        // <div className="container">
        //     <div className="row">
        //         <div className="col-md-6">
        //             <img src={`https://codingapple1.github.io/shop/shoes${data2[0].id + 1}.jpg`} width="100%" />
        //         </div>
        //         <div className="col-md-6">
        //             <h4 className="pt-5">{data2[0].title}</h4>
        //             <p>{data2[0].content}</p>
        //             <p>{data2[0].price}</p>
        //             <button className="btn btn-danger">주문하기</button> 
        //         </div>
        //     </div>
        // </div>  
    )
}

export default Detail;

<div className="container">

<div className="row">
    <div className="col-md-6">
    </div>
    <div className="col-md-6">
    </div>
</div>
</div> 