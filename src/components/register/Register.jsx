import React, { useState } from 'react';
import { Input, Button } from 'chayns-components';
import './register.scss';

const Register = ({
    setConfig,
}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [departmentName, setDepartmentName] = useState('');

    const submit = () => {
        setConfig({
            firstName,
            lastName,
            mailAddress: email,
            password,
            departmentName,
        });
    };

    return (
        <div
            className="login_view"
        >
            <h2>Registrieren</h2>
            <Input
                className="email_input"
                placeholder="Vorname"
                onChange={setFirstName}
                value={firstName}
            />
            <Input
                className="login_input"
                placeholder="Nachname"
                onChange={setLastName}
                value={lastName}
            />
            <Input
                className="login_input"
                placeholder="Email"
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
            <Input
                className="login_input"
                placeholder="Abteilung"
                onChange={setDepartmentName}
                value={departmentName}
            />
            <div
                className="login_button"
            >
                <Button
                    disabled={email.trim().length === 0 || password.trim().length === 0 || firstName.trim().length === 0 || lastName.trim().length === 0 || departmentName.trim().length === 0}
                    onClick={submit}
                >
                    Registrieren
                </Button>
            </div>
        </div>
    );
};

export default Register;
