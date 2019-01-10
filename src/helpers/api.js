import axios from 'axios';
import history from './history';
import Auth from './auth';
import {api_url} from './config';


/**
 * API helper
 * executes axios requests with Authentication (auth:api from laravel framework)
 *
 */
export default {
    /** @var string api_url absolute api url */
    api_url: api_url,

    /**
     * POST axios request to internal api
     *
     * @param url
     * @param payload
     * @returns {AxiosPromise}
     */
    post: function (url, payload) {
        return axios({
            method: 'POST',
            url: this.api_url + url,
            data: payload,
            headers: {
                'Authorization': `Bearer ${Auth.state.api_token}`
            }
        })
    },
    /**
     * GET axios request to any api
     *
     * @param url
     * @param custom_url
     * @returns {AxiosPromise}
     */
    get: function (url, custom_url) {
        let api_url = (typeof custom_url !== 'undefined' && custom_url) ? '' : this.api_url;
        return axios({
            method: 'GET',
            url: api_url + url,
            headers: {
                'Authorization': `Bearer ${Auth.state.api_token}`
            }

        })
    },

    postExternal: function(url, payload) {
      return axios({
          method: 'POST',
          url: url,
          data: payload,
          headers: {
              'Authorization': `Bearer ${Auth.state.api_token}`
          }
      })
    },

    /**
     * intercept response status
     *
     * @param cb
     */
    interceptors: function (cb) {
        axios.interceptors.response.use(response => {
            return response;
        }, error => {
            switch (error.response.status) {
                case 401:
                    history.push('/');
                    break;
                default:
                    break;
            }

            return Promise.reject(error);
        });

    }


}
