import {BACKEND_URL} from "../../common";

export const GET_ALL_GROUPS = 'GET_ALL_GROUPS';

const api = "http://"+BACKEND_URL+"/api";


export function getAllGroups() {
    return async function (dispatch) {
        try {
            const response = await fetch(api+"/groups/all", {
                method: 'GET',
            });
            if (!response.ok) {
                return dispatch(setGroups({
                    created: false,
                    error: response.error()

                }));
            }
            const content = await response.json();
            return dispatch(setGroups({
                ...content,
                created: true

            }));

        } catch(err) {
            console.log(err);
            return dispatch(setGroups({
                created: false,
                error: response.error()

            }));
        }
    }
}

export function setGroups(groups) {
    return {
        type: GET_ALL_GROUPS,
        ...invite
    };
}
