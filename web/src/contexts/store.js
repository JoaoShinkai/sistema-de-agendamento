import { createContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import StoreModule from '../modules/StoreModule';
import { api } from '../services/api';
import customToast from '../toast/customToast';

const storeModule = new StoreModule();

export const StoreContext = createContext({});



function StoreProvider({children}){
    const [store, setStore] = useState(null);
    const [token, setToken] = useState(null);
    const [loadingProvider, setLoadingProvider] = useState(true);

    useEffect(() => {
        async function authStore(){
            const localToken = localStorage.getItem('token');

            if(localToken){
                try{
                    const req = {
                        headers: {
                            authorization: localToken
                        }
                    }

                    const res = await api.get('/store/authenticate', req);

                    setStore(res.data);
                    setToken(localToken);
                    setLoadingProvider(false);
                }catch(err){
                    console.log(err);
                    setLoadingProvider(false);
                }
                
            }
            else{
                setLoadingProvider(false);
            }
        }

        authStore();
    }, [])

    async function loginContext(email, password){
        try{
            const store = await storeModule.login(email, password);

            setStore(store.store);
            setToken(store.token);
            setLoadingProvider(false);

            return true;

        }catch(err){
            setLoadingProvider(false);
            customToast.error(err.response.data.message);
            return false;
        }
    }

    async function logoutContext(){
        localStorage.removeItem('token');
        setStore(null);
        setLoadingProvider(false);

        return <Navigate to="/" />
    }

    return(
        <StoreContext.Provider value={{
            logged: !!store,
            loadingProvider,
            loginContext,
            logoutContext,
            store,
            token
        }}>
            {children}
        </StoreContext.Provider>
    )
}

export default StoreProvider;