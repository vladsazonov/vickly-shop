export const LOGIN_STATUS = 'SET_LOGIN_STATUS';

export function tryLogin(login, password) {
    return async function (dispatch) {
        try {
            const response = await fetch('https://reqres.in/api/login', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "email": "peter@klaven",
                    "password": "cityslicka"
                })
            });
            if (!response.ok) {
                dispatch(setLoginStatus({
                    status:false,
                    error:response.error()

                }));
            }
            const content = await response.json();
            return dispatch(setLoginStatus({
                firstname: "Lol",
                lastname: "Sobaka",
                token: content.token,
                status:true

            }));

        } catch (e) {
            console.log(e);
            return dispatch(setLoginStatus(e))
        }
    }
}

export function setLoginStatus(user) {
    return {
        type: LOGIN_STATUS,
        ...user
    };
}


