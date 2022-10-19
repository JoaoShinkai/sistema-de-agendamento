import { createContext, useEffect, useState } from 'react';

export const StoreContext = createContext({});

function StoreProvider({children}){
    const [store, setStore] = useState(null);
    const [loadingProvider, setLoadingProvider] = useState(true);

    useEffect(() => {
        function authStore(){
            const token = localStorage.getItem('token');

            if(token){
                setStore(token);
                setLoadingProvider(false);
            }
            else{
                setLoadingProvider(false);
            }
        }

        authStore();
    }, [store])

    return(
        <StoreContext.Provider value={{
            logged: !!store,
            loadingProvider
        }}>
            {children}
        </StoreContext.Provider>
    )
}

export default StoreProvider;