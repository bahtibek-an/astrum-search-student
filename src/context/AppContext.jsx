import React, {createContext, useState} from 'react';


export const AppContext = createContext(null);
const AppContextComponent = ({ children }) => {
    const [state, setState] = useState({
        students: {
            list: [],
            isLoading: true,
        }
    });



    return (
        <AppContext.Provider value={[state, setState]}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContextComponent;