import React, { useState } from 'react';
import { Input, Button } from 'chayns-components';
import './login.scss';

const Login = ({
    sendLogin,
}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginSucceed, setLoginSucceed] = useState(true);

    const login = async () => {
        const loginSucceed = await sendLogin(email, password);
        setLoginSucceed(loginSucceed);
        if (!loginSucceed) {
            setPassword('');
        }
    };

    console.log(loginSucceed);


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
            {!loginSucceed
                && (
                    <div>
                        <div className="xgOPLd uSvLId" aria-live="assertive">
                            <div className="SD9c5" aria-hidden="true">
                                <svg aria-hidden="true" className="stUf5b" fill="currentColor" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                                </svg>
                            </div>
                            <div>
                                <span>
Falsche eMail Adresse oder Falsches Passwort.
                                </span>
                            </div>
                        </div>
                    </div>
                )}
            <div
                className="login_button"
            >
                <Button
                    disabled={email.trim().length === 0 && password.trim().length === 0}
                    onClick={login}
                >
                    Anmelden
                </Button>
            </div>
        </div>
    );
};

export default Login;
