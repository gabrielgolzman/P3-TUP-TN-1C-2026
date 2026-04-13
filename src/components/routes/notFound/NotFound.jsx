import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";

const NotFound = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate("/library")
    }

    return (
        <div className="text-center mt-1">
            <h2>¡Ups! La página solicitada no fue encontrada</h2>
            <Button className="text-center" onClick={handleGoBack}>
                Volver a panel principal
            </Button>
        </div>
    );
};

export default NotFound;
