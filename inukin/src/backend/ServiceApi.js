import CONSTANT from '../constants';
import AsyncStorage from '@react-native-community/async-storage';

const getUserData = async () => {
    const userdata = await AsyncStorage.getItem("user")

    return JSON.parse(userdata)
}

export const LoginApi = async (data) => {
    console.log(`${CONSTANT.Api.BaseUrl}${CONSTANT.Api.endPoints.login}`, CONSTANT.Api.TOKEN)
    var response = await fetch(`${CONSTANT.Api.BaseUrl}${CONSTANT.Api.endPoints.login}`, {
        method: 'POST',
        headers: {
            "x-api-key": CONSTANT.Api.TOKEN,
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(data)
    })
    var jsonResponse = await response.json();
    return jsonResponse
}


export const SignupApi = async (data) => {
    var response = await fetch(`${CONSTANT.Api.BaseUrl}${CONSTANT.Api.endPoints.signup}`, {
        method: 'POST',
        headers: {
            "x-api-key": CONSTANT.Api.TOKEN,
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(data)
    })
    var jsonResponse = await response.json();
    return jsonResponse
}


export const ProfileApi = async (page) => {
    console.log(`${CONSTANT.Api.BaseUrl}${CONSTANT.Api.endPoints.profile}?pno=` + page)
    var userdata = await getUserData();
    var response = await fetch(`${CONSTANT.Api.BaseUrl}${CONSTANT.Api.endPoints.profile}?pno=` + page, {
        method: 'GET',
        headers: {
            'Authorization': "Bearer " + userdata.token ///will take
        },
    })
    var responsejson = await response.json();

    return responsejson;

}

export const getFollowersAndFollowing = async (id = "") => {
    var userdata = await getUserData();
    let uid = ''
    if (id) {
        uid = id
    } else {
        uid = userdata.user._id
    }
    console.log(`${CONSTANT.Api.BaseUrl}${CONSTANT.Api.endPoints.followerList}?userId=${uid}`,userdata)
    var followerList = await fetch(`${CONSTANT.Api.BaseUrl}${CONSTANT.Api.endPoints.followerList}?userId=${uid}`, {
        method: 'GET',
        headers: {
            'Authorization': "Bearer " + userdata.token ///will take
        },
    })

    var followingList = await fetch(`${CONSTANT.Api.BaseUrl}${CONSTANT.Api.endPoints.followingList}?userId=${uid}`, {
        method: 'GET',
        headers: {
            'Authorization': "Bearer " + userdata.token ///will take
        },
    })
    console.log("followerList", followerList)
    var followingListJson = await followingList.json();
    var followerListJson = await followerList.json();

    var data = {
        followerListJson,
        followingListJson

    };
    console.log("follers", data)
    return data;
}






export const UpdateProfile = async (data) => {
    var userdata = await getUserData();
    var response = await fetch(`${CONSTANT.Api.BaseUrl}${CONSTANT.Api.endPoints.profile}/${userdata.user._id}`, {
        method: 'PUT',
        headers: {
            'Authorization': "Bearer " + userdata.token,
            'Content-Type': 'application/json'
            ///will take
        },
        body: JSON.stringify(data)
    })
    var responsejson = await response.json();
    return responsejson;

}


export const ProfileDetail = async () => {
    const userdata = await getUserData()
    var response = await fetch(`${CONSTANT.Api.BaseUrl}${CONSTANT.Api.endPoints.profileDetail}/${userdata.user._id}`, {
        method: 'GET',
        headers: {
            'Authorization': "Bearer " + userdata.token
        }
    })

    var responsejson = await response.json();
    return responsejson;
}
export const FollowerDetail = async (id) => {
    const userdata = await getUserData()
    var response = await fetch(`${CONSTANT.Api.BaseUrl}${CONSTANT.Api.endPoints.profileDetail}/${id}`, {
        method: 'GET',
        headers: {
            'Authorization': "Bearer " + userdata.token
        }
    })
    var responsejson = await response.json();
    return responsejson;
}

export const generateOtp = async (data) => {
    var response = await fetch(`${CONSTANT.Api.BaseUrl}${CONSTANT.Api.endPoints.generateOtp}`, {
        method: 'POST',
        headers: {
            "x-api-key": CONSTANT.Api.TOKEN,
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(data)
    })
    var jsonResponse = await response.json();
    return jsonResponse

}





export const validateOtp = async (data) => {

    var response = await fetch(`${CONSTANT.Api.BaseUrl}${CONSTANT.Api.endPoints.validateOtp}`, {
        method: 'POST',
        headers: {
            "x-api-key": CONSTANT.Api.TOKEN,
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(data)
    })
    var jsonResponse = await response.json();
    return jsonResponse

}

export const changePassword = async (data) => {


    var response = await fetch(`${CONSTANT.Api.BaseUrl}${CONSTANT.Api.endPoints.changePassword}`, {
        method: 'POST',
        headers: {
            "x-api-key": CONSTANT.Api.TOKEN,
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(data)
    })
    var jsonResponse = await response.json();
    return jsonResponse

}

export const checkUsername = async (data) => {

    var response = await fetch(`${CONSTANT.Api.BaseUrl}${CONSTANT.Api.endPoints.usernameCheck}`, {
        method: 'POST',
        headers: {
            "x-api-key": CONSTANT.Api.TOKEN,
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(data)
    })
    var jsonResponse = await response.json();
    return jsonResponse

}


export const signupThirdStep = async (data) => {

    var response = await fetch(`${CONSTANT.Api.BaseUrl}${CONSTANT.Api.endPoints.usernameLocation}`, {
        method: 'POST',
        headers: {
            "x-api-key": CONSTANT.Api.TOKEN,
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(data)
    })
    var jsonResponse = await response.json();
    return jsonResponse

}

export const followUser = async (id) => {
    try {
        const userdata = await getUserData()
        console.log("userdata", userdata)
        var data = {
            userId: userdata.user._id,
            followingId: id
        }
        console.log("data", data)
        console.log(`${CONSTANT.Api.BaseUrl}${CONSTANT.Api.endPoints.followuser}`)
        var response = await fetch(`${CONSTANT.Api.BaseUrl}${CONSTANT.Api.endPoints.followuser}`, {
            method: 'POST',
            headers: {
                'Authorization': "Bearer " + userdata.token,
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(data)
        })
        var jsonResponse = await response.json();
        console.log("jsonResponse", jsonResponse)
        return jsonResponse
    } catch (error) {
        console.log("error", error)
    }
}


export const register = async (data) => {

    var response = await fetch(`${CONSTANT.Api.BaseUrl}${CONSTANT.Api.endPoints.register}`, {
        method: 'POST',
        headers: {
            "x-api-key": CONSTANT.Api.TOKEN,
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(data)
    })
    var jsonResponse = await response.json();
    return jsonResponse

}

