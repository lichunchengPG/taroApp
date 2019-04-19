import Taro from '@tarojs/taro';
import '@tarojs/async-await';

export function getJSON(url,data){
    Taro.showLoading();
    return Taro.request({
        url:url,
        data:data,
        method:'GET',
    }).then(result => {
        Taro.hideLoading();
        return result;
    });
}

export function postJSON(url,data){
    Taro.showLoading();
    return Taro.request({
        url:url,
        data:data,
        method:'POST',
        header:{'content-type':'application/json'}
    }).then(result => {
        Taro.hideLoading();
        return result;
    });
}