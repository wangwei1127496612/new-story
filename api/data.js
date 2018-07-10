import axios from 'axios';

axios.defaults.baseURL = '../../static/';//配置接口地址

export var GetCai = () => {
  return axios.get('cai.json').then((res)=>{
    return res.data;
  })
}
export var GetChild = () => {
  return axios.get('child.json').then((res)=>{
    return res.data;
  })
}
export var GetDrama = () => {
  return axios.get('drama.json').then((res)=>{
    return res.data;
  })
}
export var GetMusic = () => {
  return axios.get('music.json').then((res)=>{
    return res.data;
  })
}
export var GetSports = () => {
  return axios.get('sports.json').then((res)=>{
    return res.data;
  })
}
export var GetExhibition = () => {
  return axios.get('exhibition.json').then((res)=>{
    return res.data;
  })
}








