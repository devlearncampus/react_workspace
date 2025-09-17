import axios from "axios";

//상품관련 공통 URL
const URL="http://localhost:7777/products";

export const getProducts=()=>axios.get(URL);//상품목록
export const registProduct=(data)=>axios.post(URL, data,{
    headers:{"Content-Type":"multipart/form-data"}
});//상품등록
export const getProduct=(productId)=>axios.get(`${URL}/${productId}`);//상품한건 가져오기( /products/35, get)
export const updateProduct=(productId, data)=>axios.put(`${URL}/${productId}`, data);//상품수정
export const deleteProduct=(productId)=>axios.delete(`${URL}/${productId}`);//상품삭제
