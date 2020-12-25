import axios from 'axios';

const METHOD_GET = 'get';
const METHOD_POST = 'post';
const METHOD_PUT = 'put';
const METHOD_DELETE = 'delete';
const CLIENT = '/api/v1';

export class FetchData {
    get (url, requestParams) {
        return this.makeRequest(url, METHOD_GET, null, requestParams)
    }

    post (url, body, requestParams) {
        return this.makeRequest(url, METHOD_POST, body, requestParams)
    }

    put (url, body, requestParams) {
        return this.makeRequest(url, METHOD_PUT, body, requestParams)
    }

    deleteApi (url, requestParams) {
        return this.makeRequest(url, METHOD_DELETE, null, requestParams)
    }

    makeRequest (url, method, body, reqParams) {
        const requestParams = {
            method: method || METHOD_GET,
            data: body,
            params: {
                ...(reqParams || {})
            }
        }

        requestParams.headers = {
            'Content-Type': 'application/json'
        }

        const requestUrl = CLIENT + url;
        return this.sendRequest(requestUrl, requestParams)
    }

    sendRequest (url, requestParams) {
        return new Promise((resolve, reject) => {
            axios(url, requestParams)
                .then(result => resolve(result))
                .catch(reason => {
                    this.requestFailed(reason)
                    reject(reason)
                })
        })
    }

    requestFailed (reason) {

    }
}

const api = new FetchData();

export default api;
