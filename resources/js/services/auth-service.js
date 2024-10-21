import api from '../plugins/axios';

export default {
    login: async (email, password) => {
        return new Promise(async (resolve, reject) => {
            api.post('/login', { email, password })
                .then(({ data }) => {
                    resolve(data);
                }).catch(error => {
                    const message = error.response.data.message || 'An error occurred! Please try again.';
                    reject(message);
                });
        });
    }
};
