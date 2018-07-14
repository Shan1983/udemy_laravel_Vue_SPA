class AppStorage {
    storeToken(token) {
        localStorage.setItem('SexyToken', token)
    }

    storeUser(user) {
        localStorage.setItem('SexyUser', user);
    }

    store(user, token) {
        this.storeToken(token)
        this.storeUser(user)
    }

    clearAllTheSexy() {
        localStorage.removeItem('SexyToken')
        localStorage.removeItem('SexyUser')
    }

    getToken() {
        return localStorage.getItem('SexyToken')
    }

    getUser() {
        return localStorage.getItem('SexyUser')
    }
}

export default AppStorage = new AppStorage()
