import Vue from 'vue'
import axios from 'axios'

const url_api = ({ host, pathname }) => {

    let lstPath = pathname.split('/');


    switch (host) {
        case 'localhost:8080':
            return 'http://127.0.0.1:8000/api/';
    }

}

const Axios = axios.create({
    baseURL: url_api(window.location),
    timeout: 300000,
});

Vue.prototype.$axios = Axios;

const BASE_URL = Axios.baseURL;

const URI = `https://cors-anywhere.herokuapp.com/https://viacep.com.br/ws`;

const instance = axios.create({
    baseURL: URI,
    timeout: 30000,
});

Vue.prototype.$axios2 = instance;
