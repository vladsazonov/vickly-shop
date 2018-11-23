import {BACKEND_URL} from "../../common";

export const CREATE_INVITE = 'CREATE_INVITE';
export const SIGNUP_INVITE = 'SIGNUP_INVITE';

const api = "http://"+BACKEND_URL+"/api";


export function createInvite(firstname, lastname, groupId) {
    return async function (dispatch) {
        try {
            const response = await fetch(api+"/invite", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "last_name": lastname,
                    "first_name": firstname
                })
            });
            if (!response.ok) {
                return dispatch(createInviteAction({
                    created: false,
                    error: response.error()

                }));
            }
            const content = await response.json();
            return dispatch(createInviteAction({
                ...content,
                inviteCreated: true

            }));

        } catch(err) {
            console.log(err);
            return dispatch(createInviteAction({
                inviteCreated: false,
                error: response.error()

            }));
        }
    }
}

export function signupInvite(login, password, uuid) {
    return async function (dispatch) {
        try {
            const response = await fetch(api+"/invite/signup", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "login": login,
                    "password": password,
                    "uuid": uuid
                })
            });
            if (!response.ok) {
                return dispatch(signupInviteAction({
                    created: false,
                    error: response.error()

                }));
            }
            const content = await response.json();
            return dispatch(signupInviteAction({
                ...content,
                created: true

            }));

        } catch(err) {
            console.log(err);
            return dispatch(signupInviteAction({
                created: false,
                error: response.error()

            }));
        }
    }
}

export function createInviteAction(invite) {
    return {
        type: CREATE_INVITE,
        ...invite
    };
}

export function signupInviteAction(invite) {
    return {
        type: SIGNUP_INVITE,
        ...invite
    };
}
