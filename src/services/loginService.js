class LoginSerice {
    saveCreds(creds) {
        localStorage.setItem("first_name", creds.first_name);
        localStorage.setItem("last_name", creds.last_name);
        localStorage.setItem("token", creds.token);
    }

    getCreds() {
        return {
            first_name: localStorage.getItem("first_name"),
            last_name: localStorage.getItem("last_name"),
            token: localStorage.getItem("token")
        }
    }

    getToken() {
        return localStorage.getItem("token")
    }

}

export default new LoginSerice();