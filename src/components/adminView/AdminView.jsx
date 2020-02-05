import React from 'react';
import { Accordion } from 'chayns-components';

import './adminView.scss';

const AdminView = () => {
    return (
        <Accordion
            head="Administration"
            className="admin_accordion"
            dataGroup="1"
        >

            <Accordion
                isWrapped
                head="Abteilung hinzufügen"
            >

            </Accordion>
        </Accordion>
    )
};

export default AdminView;
