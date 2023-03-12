import { useParams } from "react-router-dom";
function Detail(props){

    let {id} = useParams();
    let data = props.shoes.find(function(a){
        return a.id == id;
    });

    let data2 = props.shoes.filter(function(a){
        return a.id == id;
    });
    console.log(data);
    console.log(data2);
    return (
        // <div className="container">
        //     <div className="row">
        //         <div className="col-md-6">
        //             <img src={`https://codingapple1.github.io/shop/shoes${data.id + 1}.jpg`} width="100%" />
        //         </div>
        //         <div className="col-md-6">
        //             <h4 className="pt-5">{data.title}</h4>
        //             <p>{data.content}</p>
        //             <p>{data.price}</p>
        //             <button className="btn btn-danger">주문하기</button> 
        //         </div>
        //     </div>
        // </div>   
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={`https://codingapple1.github.io/shop/shoes${data2[0].id + 1}.jpg`} width="100%" />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{data2[0].title}</h4>
                    <p>{data2[0].content}</p>
                    <p>{data2[0].price}</p>
                    <button className="btn btn-danger">주문하기</button> 
                </div>
            </div>
        </div>  
    )
}

export default Detail;