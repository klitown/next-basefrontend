export default function getAuthorization() {
    if (typeof window !== 'undefined') {
        const user = JSON.parse(localStorage.getItem('user'));
    }

    if (user && user.access_token) {
        return 'Bearer ' + user.access_token;
    } else {
        return {};
    }
}