import {setCookie, getCookie} from 'cookies-next';

export const saveCookies = (params:object):boolean => {
    try{
        setCookie('google-auth',JSON.stringify(params));
        return;
    }catch (e) {
        return;
    }
}

export const getCookies = (key) => {
    return getCookie(key);
}