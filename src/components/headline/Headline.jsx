import React from 'react';
import { Button } from 'chayns-components';
import './headline.scss';

const Headline = ({
    loggedIn,
    logout,
}) => (
        loggedIn ?
            (
                <div>
                    <h1
                        className="headline"
                    >
                        Digitale Urlaubsverwaltung
                    </h1>
                    <Button
                        className="logout_button"
                        onClick={() => {
                            document.cookie = `vacation_manager=${loggedIn}; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
                            logout();
                        }}
                    >
                        Ausloggen
                    </Button>
                </div>
            )
            : (
                <h1
                    className="headline"
                >
                    Digitale Urlaubsverwaltung
                </h1>
            )
    );

export default Headline;
