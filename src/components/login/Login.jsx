import React, { useState } from 'react';
import { Input, Button } from 'chayns-components';
import './login.scss';

const Login = ({
    sendLogin,
}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = () => {
        sendLogin(email, password);
    };

    return (
        <div
            className="login_view"
        >
            <h2>Login</h2>
            <Input
                className="email_input"
                placeholder="eMail"
                onChange={setEmail}
                value={email}
            />
            <Input
                className="login_input"
                placeholder="Passwort"
                type="password"
                onChange={setPassword}
                value={password}
            />
            <div
                className="login_button"
            >
                <Button
                    onClick={login}
                >
                    Anmelden
                </Button>
            </div>
        </div>
    );
};

export default Login;
