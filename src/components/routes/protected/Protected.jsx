import { Navigate, Outlet } from "react-router"
import { jwtDecode } from "jwt-decode";
import { useContext } from "react";
import { AuthenticationContext } from "../../services/auth/authentication.context";

const isTokenValid = (token) => {
    if (!token) return false;
    try{
        const decodedToken = jwtDecode(token);

        const currentTime = Date.now() / 1000;
        
        return currentTime < decodedToken.exp;
    } catch (error) {
        console.log("error decoding token", error)
        return false;
    }
}

const Protected = () => {
    const { token } = useContext(AuthenticationContext);

    if (!token || !isTokenValid(token))
        return <Navigate to="/login" replace />

    return <Outlet />;
}

export default Protected