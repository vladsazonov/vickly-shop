import loginService from "./loginService"

function fetchGroupChats() {
    loginService.getToken();
    // TODO
}

function fetchUsers() {
    // TODO
}

export function fetchChats(){

    fetchGroupChats();
    fetchUsers();
    // TODO
}