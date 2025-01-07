import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";

enum AuthStatus {
    'checking'= 'checking',
    'authenticated'= 'authenticated',
    'unauthenticated'= 'unauthenticated'
}

interface AuthState {
    // hola: string;
    status: AuthStatus;
    token?: string;
    user?: User;
    isChecking: boolean;
    isAuthenticated: boolean;

    //Method
    loginWithEmailPassword: (email: string, password:string) => void
    logout: () => void
}

interface User {
    name: string;
    email: string;
}

export const AuthContext = createContext({} as AuthState);

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {

    const [status, setStatus] = useState(AuthStatus.checking);
    const [user, setUser] = useState<user>()
    
    useEffect(() => {
        setTimeout(() => {
            setStatus(AuthStatus.unauthenticated)
        }, 1500);
      }
    , []);

    const loginWithEmailPassword = (email: string, password: string) => {
        console.log(password);
        setUser({
            name: 'Oscar Blanco',
            email: email,
        });
        setStatus(AuthStatus.authenticated)
    }
    
    const logout = () => {
        setUser({
            name: null,
            email: null,
        });
        setStatus(AuthStatus.unauthenticated)
    };

    return (
        <AuthContext.Provider 
            value={{
                // hola: 'Mundo',
                status: status,
                user: user,

                // Getter
                isChecking: status === AuthStatus.checking,
                isAuthenticated: status === AuthStatus.authenticated,

                // Method
                loginWithEmailPassword,
                logout
            }}>
            { children }
        </AuthContext.Provider>
    )
}