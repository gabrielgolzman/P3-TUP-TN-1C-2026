import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import classNames from "classnames";
import { Row, Form, FormGroup, Col, Button, Card } from "react-bootstrap"
import { initialRegisterFormErrors } from "./Register.data";

const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState(initialRegisterFormErrors);

    const emailInputRef = useRef(null);
    const passwordInputRef = useRef(null);

    const navigate = useNavigate();


    const handleNameChange = (event) => {
        setName(event.target.value)
        setErrors((prevErrors) => ({
            ...prevErrors,
            name: false
        }))
    }

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

    const handleRegister = (event) => {
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

        fetch("http://localhost:3000/register", {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({ name, email, password })
        })
            .then(res => res.json())
            .then(() => {
                setErrors(initialRegisterFormErrors)
                navigate("/login")
            })
            .catch(err => console.log(err))
    }

    return (
        <Card className="mt-5 mx-3 p-3 px-5 shadow">
            <Card.Body>
                <Row className="mb-2">
                    <h5>¡Bienvenidos a Books Champion!</h5>
                </Row>
                <Form onSubmit={handleRegister} >
                    <FormGroup className="mb-4">
                        <Form.Control
                            type="text"
                            className={classNames({
                                "border border-danger": errors.email
                            })}
                            placeholder="Ingresar nombre de usuario"
                            onChange={handleNameChange}
                            value={name}
                        />
                        {errors.name && <p className="text-danger">El email es obligatorio.</p>}
                    </FormGroup>
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
                            <Button variant="primary" type="submit">
                                Registrarse
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default Register