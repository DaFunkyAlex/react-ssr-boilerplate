/**
 * authentication helper
 *
 * @author Alexander Jungwirth
 */
export default {
    state: {
        api_token: null,
        user_id: null,
        login: null,
        firstname: null,
        lastname: null,
        email: null,
        salutation: null,
    },
    /**
     * init authentication
     *
     * set state from localStorage
     */
    initialize() {
        this.state.api_token = localStorage.getItem('api_token');
        this.state.id = parseInt(localStorage.getItem('user_id'));
        this.state.login = parseInt(localStorage.getItem('login'));
        this.state.firstname = localStorage.getItem('firstname');
        this.state.lastname = localStorage.getItem('lastname');
        this.state.email = localStorage.getItem('email');
        this.state.salutation = localStorage.getItem('salutation');
    },
    /**
     * set localStorage
     *
     * @param data
     */
    set(data) {
        localStorage.setItem('api_token', data.api_token);
        localStorage.setItem('user_id', data.id);
        localStorage.setItem('login', data.login);
        localStorage.setItem('firstname', data.firstname);
        localStorage.setItem('lastname', data.lastname);
        localStorage.setItem('email', data.email);
        localStorage.setItem('salutation', data.salutation);
        this.initialize()
    },
    /**
     * remove from localStorage
     */
    remove() {
        localStorage.removeItem('api_token');
        localStorage.removeItem('user_id');
        localStorage.removeItem('login');
        localStorage.removeItem('firstname');
        localStorage.removeItem('lastname');
        localStorage.removeItem('email');
        localStorage.removeItem('salutation');
        //this.initialize()
    },

}
