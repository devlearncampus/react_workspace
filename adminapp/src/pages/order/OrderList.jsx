import { useState, useEffect} from "react";
import {getOrders}  from "../../utils/OrderApi";

export default function OrderList(){
    const [orderList, setOrderList]=useState([]);
    
    //서버에 요청하기 
    const getOrderList=async() =>{
        console.log("주문 목록 요청할꺼야");
        const response=await getOrders(); //response.data 가 json임
        console.log("서버에서 받아온 결과 response ", response);
        setProductList(response.data);
    }

    useEffect(()=>{
        getOrderList()
    }, []); //의존성 배열이 비워져 이;ㅆ으며, 페이지가 처음 렌더링될때 1회만 호출


    return (
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">주문 내역</h3>

                <div className="card-tools">
                  <div className="input-group input-group-sm" style={{width: '150px'}}>
                    <input type="text" name="table_search" className="form-control float-right" placeholder="Search"/>

                    <div className="input-group-append">
                      <button type="submit" className="btn btn-default">
                        <i className="fas fa-search"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- /.card-header --> */}
              <div className="card-body table-responsive p-0">
                <table className="table table-hover text-nowrap">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>User</th>
                      <th>Date</th>
                      <th>Status</th>
                      <th>Reason</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orderList.map(order=>(
                    <tr>
                      <td>183</td>
                      <td>John Doe</td>
                      <td>11-7-2014</td>
                      <td><span className="tag tag-success">Approved</span></td>
                      <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                    </tr>
                    ))}
                    <tr>
                        <td colSpan={5}>
                            <button type="button">주문등록</button>
                            <button type="button" onClick={()=>{
                                getOrderList();
                            }}>주문목록</button>
                        </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* <!-- /.card-body --> */}
            </div>
			{/* <!-- /.card --> */}
          </div>
        </div>
    )
}