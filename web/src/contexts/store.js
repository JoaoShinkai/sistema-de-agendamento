import { createContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import StoreModule from '../modules/StoreModule';
import { api } from '../services/api';
import customToast from '../toast/customToast';

const storeModule = new StoreModule();

export const StoreContext = createContext({});

function StoreProvider({children}){
    const [store, setStore] = useState(null);
    const [loadingProvider, setLoadingProvider] = useState(true);


    useEffect(() => {
        async function authStore(){
            const token = localStorage.getItem('token');

            if(token){
                try{
                    const req = {
                        headers: {
                            authorization: token
                        }
                    }

                    const res = await api.get('/store/authenticate', req);

                    setStore(res.data);
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

            setStore(store);
            setLoadingProvider(false);

        }catch(err){
            setLoadingProvider(false);
            console.log(err);
            customToast.error("Erro");
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
            logoutContext
        }}>
            {children}
        </StoreContext.Provider>
    )
}

export default StoreProvider;