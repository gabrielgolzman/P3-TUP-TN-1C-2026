import { Navigate, Outlet } from "react-router"

const isTokenValid = (token) => {
    try {
        const payload = JSON.parse(atob(token.split(".")[1]));
        return payload.exp * 1000 > Date.now();
    } catch {
        return false;
    }
};

const Protected = () => {
    const token = localStorage.getItem("book-champions-token")
    if (!token || !isTokenValid(token))
        return <Navigate to="/login" replace />

    return <Outlet />;
}

export default Protected