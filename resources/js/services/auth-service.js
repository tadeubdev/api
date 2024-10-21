import api from '../plugins/axios';

export default {
    login: async (payload) => {
        return new Promise(async (resolve, reject) => {
            api.post('/login', payload)
                .then(({ data }) => {
                    localStorage.setItem('token', data.token);

                    resolve(data);
                }).catch(error => {
                    const message = error.response.data.message || 'An error occurred! Please try again.';
                    reject(message);
                });
        });
    }
};
