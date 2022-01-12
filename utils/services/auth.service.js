import axios from "axios";

const API_URL = "http://deswedd.espy.cloud:9568/apisenadis/api/v2/login";
const APP = "app1";

class AuthService {

    async login(username, password) {
        const body = 'username=' + username + '&password=' + password + '&application=' + APP;
        const response = await axios.post(API_URL, body,
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
            .then(response => {
                if (response.data.data.access_token) {
                    if (typeof window !== 'undefined') {
                        localStorage.setItem("user", JSON.stringify(response.data.data));
                        localStorage.setItem("token", JSON.stringify(response.data.data.access_token));
                    }
                }
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    logout() {
        if (typeof window !== 'undefined') {
            localStorage.removeItem("user");
            localStorage.removeItem("token");
        }
    }

    register(username, email, password) {
        return axios.post(API_URL + "signup", {
            username,
            email,
            password
        });
    }

    getCurrentUser() {
        if (typeof window !== 'undefined') {
            const user = JSON.parse(localStorage.getItem('user'));
            if (user) {
                return true
            }
            return false
        }
    }
}

export default new AuthService();