import loginService from "../../services/loginService"

export const SET_CHAT_LIST = 'SET_CHAT_LIST';
const api = "http://192.168.0.106:9000/api";


export function fetchChats() {
    return async function (dispatch) {
        try {
            const userResponse = await fetch(api + "/user/list", {
                method: 'GET',
                headers: {
                    'Authorization': loginService.getToken(),
                }
            });
            // TODO fetching group chats
            // const groupChatsResponse =  await fetch(api + "/user/list", {
            //     method: 'GET',
            //     headers: {
            //         'Authorization': loginService.getToken(),
            //     }
            // });
            if (!userResponse.ok) {
                alert("fetch chats failed")
                //TODO no invoke of this block
                // return dispatch(setLoginStatus({
                //     status: false,
                //     error: userResponse.error()
                //
                // }));
            }
            const content = await userResponse.json();
            return dispatch(setChatList(content));

        } catch (err) {
            console.log(err);
            // return dispatch(setChatList(err))
        }
    }
}

export function setChatList(list) {
    return {
        type: SET_CHAT_LIST,
        status: true,
        ...list
    };
}


