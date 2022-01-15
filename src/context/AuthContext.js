import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
    user : {
        _id:"61c9825b060a76becd716936",
        username:"Shanaka",
        email:"john@gmail.com",
        profilePicture:"user/1.jpg",
        coverPicture:"",
        followers:[],
        followings:[],
        isAdmin:false,
        desc:"updated description",
    },
    isFetcthing : false,
    error : false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    return(
        <AuthContext.Provider
            value={{
                user : state.user,
                isFetching : state.isFetching,
                error : state.error,
                dispatch
            }}>
                {children}
        </AuthContext.Provider>
    );
};