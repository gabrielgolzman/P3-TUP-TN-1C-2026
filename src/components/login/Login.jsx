import { useState, useRef } from "react";
import classNames from "classnames";
import { Button, Card, Col, Form, FormGroup, Row } from "react-bootstrap";
import { initialLoginFormErrors } from "./Login.data";
import { useNavigate } from "react-router";

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState(initialLoginFormErrors);

    const emailInputRef = useRef(null);
    const passwordInputRef = useRef(null);

    const navigate = useNavigate();

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
        setErrors((prevErrors) => ({
            ...prevErrors,
            email: false
        }))
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleLogin = (event) => {
        event.preventDefault();

        if (email === "") {
            emailInputRef.current.focus();
            setErrors((prevErrors) => ({
                ...prevErrors,
                email: true
            }))
            return
        }

        else if (password === "") {
            passwordInputRef.current.focus();
            setErrors((prevErrors) => ({
                ...prevErrors,
                password: true
            }))
            return;
        }
        setErrors(initialLoginFormErrors)
        onLogin();
        navigate("/library")
    }

    return (
        <Card className="mt-5 mx-3 p-3 px-5 shadow">
            <Card.Body>
                <Row className="mb-2">
                    <h5>¡Bienvenidos a Books Champion!</h5>
                </Row>
                <Form onSubmit={handleLogin} >
                    <FormGroup className="mb-4">
                        <Form.Control
                            type="text"
                            className={classNames({
                                "border border-danger": errors.email
                            })}
                            ref={emailInputRef}
                            placeholder="Ingresar email"
                            onChange={handleEmailChange}
                            value={email}
                        />
                        {errors.email && <p className="text-danger">El email es obligatorio.</p>}
                    </FormGroup>
                    <FormGroup className="mb-4">
                        <Form.Control
                            className={classNames({
                                "border border-danger": errors.password
                            })}
                            type="password"
                            ref={passwordInputRef}
                            placeholder="Ingresar contraseña"
                            onChange={handlePasswordChange}
                            value={password}
                        />
                        {errors.password && <p className="text-danger">La contraseña es obligatoria.</p>}
                    </FormGroup>
                    <Row>
                        <Col />
                        <Col md={6} className="d-flex justify-content-end">
                            <Button variant="secondary" type="submit">
                                Iniciar sesión
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Card.Body>
        </Card>
    );
};


export default Login;