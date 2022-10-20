import { api } from '../services/api';

export default class StoreModule {
    async login(email, password) {
        const res = await api.post('/store/login', {
            email,
            password
        })

        localStorage.setItem('token', res.data.token);

        return res;
    }

    async authenticate(){

        const token = localStorage.getItem('token');

        if(token){
            try{
                const req = {
                    headers: {
                        authorization: token
                    }
                }

                await api.get('/store/authenticate', req);

                return true;

            }catch(err){
                return false;
            }
            
        }
        else{
            return false;
        }
    }

}