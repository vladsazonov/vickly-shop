class LoginSerice {
    saveCreds(creds) {
        sessionStorage.setItem("first_name", creds.first_name);
        sessionStorage.setItem("last_name", creds.last_name);
        sessionStorage.setItem("token", creds.token);
        sessionStorage.setItem("myUserId",creds.id);
        sessionStorage.setItem("myGroupId",creds.group_id);
        sessionStorage.setItem("login",creds.login);

    }

    getCreds() {
        return {
            first_name: sessionStorage.getItem("first_name"),
            last_name: sessionStorage.getItem("last_name"),
            token: sessionStorage.getItem("token"),
            myUserId:sessionStorage.getItem("myUserId"),
            myGroupId:sessionStorage.getItem("myGroupId"),
            login:sessionStorage.getItem("login")
        }
    }

    getToken() {
        return sessionStorage.getItem("token")
    }

    clearUserInfo() {
        sessionStorage.clear();
    }

}

export default new LoginSerice();