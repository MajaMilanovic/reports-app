class LoginService {

    getRegisteredUserList = () => {
        const userList = [];

        for (let i = 0; i < localStorage.length; i++) {
            let username = localStorage.key(i);
            let password = localStorage.getItem(username);
            let user = {
                username,
                password
            };
            userList.push(user);
        }
        return userList;
    };

    isUserDataEqual = (input, existingUser) => {
        const objectCredentials = {
            username: existingUser.username,
            password: existingUser.password
        };

        const jsonOne = JSON.stringify(input);
        const jsonTwo = JSON.stringify(objectCredentials);

        return jsonOne === jsonTwo;
    };

    login = (input) => {
        const registeredUserList = this.getRegisteredUserList();

        return registeredUserList.find(user => {
            if (this.isUserDataEqual(input, user)) {
                return localStorage.setItem("login", JSON.stringify(user));
            }
        });
    };

    logOut = () => {
        if (localStorage.getItem("login")) {
            localStorage.removeItem("login");
            console.log("You are out!");
        };

    };

    isUserLoggedIn = () => {
        if (!(localStorage.getItem("login"))) {
            return false;
        }
        return true;
    }
}

export const loginService = new LoginService();