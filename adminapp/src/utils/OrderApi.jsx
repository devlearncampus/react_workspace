import axios from "axios";

//주문 관련 공통 URL
const URL="http://localhost:7777/productapp/orders";

export const getOrders=()=>axios.get(URL);//주문목록
export const registOrder=(data)=>axios.post(URL, data);//주문등록
export const getOrder=(orderId)=>axios.get(`${URL}/${orderId}`);//주문한건 가져오기( /orders/35, get)
export const updateOrder=(orderId,data)=>axios.put(`${URL}/${orderId}`, data);//주문수정
export const deleteOrder=(orderId)=>axios.delete(`${URL}/${orderId}`);//주문삭제
