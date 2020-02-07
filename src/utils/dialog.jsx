import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'chayns-components';

import './dialog.scss';

const Dialog = ({
    resolve,
}) => {
    return (
        <div
            className="dialog_styles"
        >
        <p>342</p>
        <Button
            onClick={() => resolve(true)}
        >
            Test
        </Button>
        </div>
    )
};

const openDialog = () => {
    return new Promise((resolve, reject) => {
        const div = document.createElement('div');
        div.style.position = 'absolute';
        div.style.width = '100%';
        div.style.top = 0;
        div.style.height = '100vh';
        document.body.appendChild(div);
        ReactDOM.render(<Dialog resolve={resolve}/>, div);
    });
};

export {
    Dialog,
    openDialog,
};
