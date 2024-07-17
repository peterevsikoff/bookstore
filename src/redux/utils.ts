function* getToken() {
    const token = localStorage.getItem("access");

    const response: Response = yield fetch(`https://studapi.teachmeskills.by/auth/jwt/verify/`, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ token })
    });
    //console.log(response);
    if(response.status === 200){
        return token;
    } else {
        const refresh = localStorage.getItem("refresh");
        const responseRefresh: Response = yield fetch(`https://studapi.teachmeskills.by/auth/jwt/refresh/`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${refresh}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ refresh })
        });
        if(responseRefresh.status === 200){
            const { access } = yield responseRefresh.json();
            localStorage.setItem("access", access);
            return access;
        }
    }
}

export { getToken };