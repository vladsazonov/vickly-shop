class LoginSerice {
    async login(login = "peter@klaven", password = "cityslicka") {
        const response = await fetch("https://reqres.in/api/login", {
            method: "POST",
            data: JSON.stringify({
                "email": login,
                "password": password
            }),
            headers: {
                Accept: 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error(`RedditService getDefaultSubreddits failed, HTTP status ${response.status}`);
        }
        return await response.json();
    }
}

export default new LoginSerice();