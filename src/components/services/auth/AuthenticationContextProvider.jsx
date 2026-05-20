import { useState } from "react"
import { AuthenticationContext } from "./authentication.context"

const tokenValue = localStorage.getItem("book-champions-token");

export const AuthenticationContextProvider = ({ children }) => {
    const [token, setToken] = useState(tokenValue);

    const handleUserLogin = (userToken) => {
        localStorage.setItem("book-champions-token", userToken);
        setToken(userToken);
    }

    const handleUserLogout = () => {
        localStorage.removeItem("book-champions-token");
        setToken(null);
    }

    return (
        <AuthenticationContext value={{ token, handleUserLogin, handleUserLogout }}>
            {children}
        </AuthenticationContext>
    )
}