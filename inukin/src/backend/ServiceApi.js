import CONSTANT from '../constants';

export const LoginApi = async (data) => {
    console.log("CONSTANT.Api.TOKEN",CONSTANT.Api.TOKEN,data,`${CONSTANT.Api.BaseUrl}${CONSTANT.Api.endPoints.login}`)
    var response = await fetch(`${CONSTANT.Api.BaseUrl}${CONSTANT.Api.endPoints.login}`, {
        method:'POST',
        headers: {
            "x-api-key": CONSTANT.Api.TOKEN,
            "Content-Type": 'application/json'
        },
        body:JSON.stringify(data)
    })
    var jsonResponse = await response.json();
    return jsonResponse
}


export const SignupApi = async (data) => {
    console.log("CONSTANT.Api.TOKEN",CONSTANT.Api.TOKEN,data,`${CONSTANT.Api.BaseUrl}${CONSTANT.Api.endPoints.login}`)
    var response = await fetch(`${CONSTANT.Api.BaseUrl}${CONSTANT.Api.endPoints.signup}`, {
        method:'POST',
        headers: {
            "x-api-key": CONSTANT.Api.TOKEN,
            "Content-Type": 'application/json'
        },
        body:JSON.stringify(data)
    })
    var jsonResponse = await response.json();
    return jsonResponse
}