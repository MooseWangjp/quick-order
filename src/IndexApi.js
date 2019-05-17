import axios from 'axios';
const baseUrl = 'http://a.itying.com/api';

// 获取商品列表
export const getProductList = (params)=> axios.get(`${baseUrl}/productlist`);
// 获取商品详情
export const getProductDetailList = (params)=> axios.get(`${baseUrl}/productcontent`,{params: params});
